import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { PpcMastersService } from 'app/services/production/ppc-masters.service';
import { timeStamp } from 'console';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-ppr-product-wise-details',
  templateUrl: './ppr-product-wise-details.component.html',
  styleUrls: ['./ppr-product-wise-details.component.scss']
})
export class PprProductWiseDetailsComponent implements OnInit {
  public products:any;
 public product:any={
recordId:null,
itemname:'',
um:'',
umid:null,
grpname:'',
 };

 public materials:any;
 public material:any={
  recordId:null,
  itemname:'',
  um:'',
  umid:null,
  grpname:'',
 };
 public equipment:any;
 public equipid:number=0;
 public equip:any={
   recordId:0,
  name:'',
  grp:''
 };
 public equipmanhrs:number=0;
 public designations:any;
 public materialqty:number=null;

  public minbatch:number=null;
  public maxbatch:number=null;

   public proWiseMaterials:any[]=[];
   public proWiseDesignations:any[]=[];
   public proWiseEquipment:any[]=[];
public desigid:number;
public totalinfo:any;
public designation:any={
  recordId:0,
  designation:'',
  department:''
}
public manhrs:number=0;
     
  constructor(private adm:AdminGeneralInfoService,private router:Router,
    private  spinner: NgxSpinnerService,private ppc:PpcMastersService)  { 
      if(this.adm.screenCheck(10,1,2,0))
    {
        this.showDetails();
     }
    else
    {
        this.router.navigateByUrl('production/unauthorize');
    }
  }
public showDetails()
{
  this.spinner.show(undefined,
    {
      type: 'ball-triangle-path',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fullScreen: true
    });
    this.ppc.getProductWiseAttachments().subscribe(res =>
      {
         console.log('details',res);
         var det:any=res;
         this.totalinfo=det;
         this.products=det.products;
         this.materials=det.materials;
         this.equipment=det.equipment;
         this.designations=det.designations;
          this.spinner.hide();
      });
}
getMaterialCompleteInfo()
{
    var attachment=this.totalinfo.attachments.filter(a => a.itemId== +this.product.recordId);
 this.minbatch=0;
 this.maxbatch=0;
    if(attachment.length > 0)
  {
    this.minbatch=attachment[0].minBatchQty;
    this.maxbatch=attachment[0].maxBatchQty;
  }

  var materials=this.totalinfo.materialdetails.filter(a => a.itemId == +this.product.recordId);
  this.proWiseMaterials=[];
  for(var i=0;i<materials.length;i++)
  {
    this.proWiseMaterials.push({
      recordId: materials[i].ingredient,
        itemname:materials[i].ingredientname,
        grpname:this.findGroup(materials[i].ingredient),
        um:materials[i].um,
        umid:materials[i].umid,
        qty:materials[i].qty
    });
  }
  this.proWiseEquipment=[];
  var equipment=this.totalinfo.equipmentdetails.filter(a => a.itemid== +this.product.recordId);
  for(var i=0;i<equipment.length;i++)
  {
    this.proWiseEquipment.push({
      recordId:equipment[i].equipmentId,
      name:equipment[i].equipmentName,
      grp:equipment[i].equipgrp,
      manhrs:equipment[i].manhrs
    });
  }
  this.proWiseDesignations=[];
  var designations =this.totalinfo.designationdetails.filter(a => a.itemid == +this.product.recordId);
  for(var i=0;i<designations.length;i++)
  {
    this.proWiseDesignations.push({
      recordId: designations[i].desigId,
      designation: designations[i].designation,
      department:designations[i].department,
      manhrs:designations[i].manhrs,
    });
  }
  
}
private findGroup(x:number):string{
  var det=this.materials.filter(a => a.recordId ==x);
  var grp='';
  if(det.length > 0)
  {
    grp=det[0].grpname;
  }
  return grp;
}
public reset()
{
  this.product={
    recordId:null,
    itemname:'',
    um:'',
    umid:null,
    grpname:'',
     };
     this.minbatch=0;
     this.maxbatch=0;
     this.proWiseMaterials=[];
     this.proWiseEquipment=[];
     this.proWiseDesignations=[];
}
  ngOnInit(): void {
  }
  public makeDesigDetails()
  {
    var det=this.designations.filter(a => a.recordId== +this.desigid);
    if(det.length > 0)
    {
      this.designation={
        recordId:det[0].recordId,
        designation:det[0].designation,
        department:det[0].branchId
      };
    }
  }
public makeEquipDetails()
{
  var det=this.equipment.filter(a => a.recordId == +this.equipid);
  if(det.length > 0)
  {
    this.equip={
      recordId:det[0].recordId,
     name:det[0].equipmentName,
     grp:det[0].branchId
    };
  }
}
  private valMaterialAddCheck():boolean
  {
    if(!this.material)
    {
      this.adm.showMessage('Material not selected','Warning',3);
      return false;
    }
    var det=this.proWiseMaterials.filter(a => a.itemname==this.material.itemname);
    if(det)
    {
    if(det.length > 0)
    {
      this.adm.showMessage('This material is already added','Warning',3);
      return false;
    }

  }
  if(this.materialqty)
  {
      if(this.materialqty <= 0)
      {
        this.adm.showMessage('Qty not selected','Warning',3);
        return false;
      }
  }
  else
  {
    this.adm.showMessage('Qty not selected','Warning',3);
    return false;
  }
    return true;
  }
public addMaterial()
{
  if(this.valMaterialAddCheck())
  {
    this.proWiseMaterials.push({
        recordId:this.material.recordId,
        itemname:this.material.itemname,
        grpname:this.material.grpname,
        um:this.material.um,
        umid:this.material.umid,
        qty:this.materialqty
    });

    this.material={
      recordId:null,
      itemname:'',
      um:'',
      umid:null,
      grpname:'',
     };
     this.materialqty=0;
  }
}
public deleteMaterial(obj:any)
{
  var index=this.proWiseMaterials.indexOf(obj);
  if(index >=0)
  {
    this.proWiseMaterials.splice(index,1);
  }
}

public valEquipmentAddCheck():boolean
{
  if(this.equip.name.trim()=='')
  {
    this.adm.showMessage('Equipment not selected','Warning',3);
    return false;
  }
  if(+this.equipmanhrs <= 0)
  {
    this.adm.showMessage('Man hours not entered','Warning',3);
    return false;
  }
  var det=this.proWiseEquipment.filter(a => a.recordId==this.equipid);
  
    if(det.length > 0)
    {
      this.adm.showMessage('This Equipment Details already entered','Warning',3);
      return false;
    }
  

  return true;
}
public addEquipmentInfo()
{
  if(this.valEquipmentAddCheck())
  {
    this.proWiseEquipment.push({
      recordId:this.equip.recordId,
      name:this.equip.name,
      grp:this.equip.grp,
      manhrs:this.equipmanhrs
    });
    this.equip={
      recordId:0,
      name:'',
      grp:''
    };
    this.equipmanhrs=0;
  }
 
}
public deleteEquipmentInfo(obj:any)
{
   var index=this.proWiseEquipment.indexOf(obj);
   if(index >=0)
   {
     this.proWiseEquipment.splice(index,1);
   }
}

private valDesignationAddCheck():boolean
{
  if(this.designation.designation.trim()=='')
  {
    this.adm.showMessage('Designation not selected','Warning',3);
    return false;
  }
  if(+this.manhrs <= 0)
  {
    this.adm.showMessage('Man hours not entered','Warning',3);
    return false;
  }
  var det=this.proWiseDesignations.filter(a => a.recordId== +this.desigid);
  if(det.length > 0)
  {
    this.adm.showMessage('This designation already entered','Warning',3);
    return false;
  }
    return true;
}
public addDesignationInfo()
{
  if(this.valDesignationAddCheck())
  {
      this.proWiseDesignations.push({
        recordId: +this.desigid,
        designation: this.designation.designation,
        department:this.designation.department,
        manhrs:this.manhrs
      });
      this.designation={
        recordId:0,
        designation:'',
        department:''
      };
      this.manhrs=0;
  }
}
public deleteDesignationInfo(obj:any)
{
    var index=this.proWiseDesignations.indexOf(obj);
    if(index >= 0)
    {
      this.proWiseDesignations.splice(index,1);
    }
}
public productDisableCheck():boolean
{
  if(this.proWiseMaterials.length > 0 || this.proWiseDesignations.length > 0 || this.proWiseEquipment.length > 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}


save()
{
  if(this.valChk())
  {
    Swal.fire({  
      title:  'Confirms Product Attachment Details' ,  
      text: 'You will not be able to recover this file!',  
      icon: 'warning',  
      showCancelButton: true,  
      confirmButtonText: 'Yes, confirm it!',  
      cancelButtonText: 'No, keep it'  
    }).then((result) => {  
      if (result.value) { 
  
        this.spinner.show(undefined,
          {
            type: 'ball-triangle-path',
            size: 'medium',
            bdColor: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            fullScreen: true
          });
 
  var header:any={
    ItemId: +this.product.recordId,
    MinBatchQty: +this.minbatch,
    MaxBatchQty: +this.maxbatch,
    UmId: +this.product.umid
  }
  var ingredients:any[]=[]
  for(var i=0;i<this.proWiseMaterials.length;i++)
  {
    ingredients.push({
      ItemId: +this.product.recordId,
      Ingredient: +this.proWiseMaterials[i].recordId,
      Qty: +this.proWiseMaterials[i].qty,
      Um: +this.proWiseMaterials[i].umid
    });
  }
  var eqiupment:any[]=[];
  for(var i=0;i<this.proWiseEquipment.length;i++)
  {
    eqiupment.push({
      Itemid: +this.product.recordId,
      EquipmentId:this.proWiseEquipment[i].recordId,
      Manhrs:this.proWiseEquipment[i].manhrs
    });
  }

  var desigs:any[]=[];
  for(var i=0;i<this.proWiseDesignations.length;i++)
  {
    desigs.push({
      Itemid: +this.product.recordId,
      DesigId: +this.proWiseDesignations[i].recordId,
      Manhrs: +this.proWiseDesignations[i].manhrs
    });
  }

  this.ppc.setProductWiseAttachments(+this.product.recordId,header,ingredients,eqiupment,desigs).subscribe(res =>
    {
      var det:any=res;
      if(det.result=='OK')
      {
        Swal.fire(  
          'Transaction Completed Successfully!',  
          'Attachment Details Saved.',  
          'success'  
        );
        this.product={
          recordId:null,
          itemname:'',
          um:'',
          umid:null,
          grpname:'',
           };
           this.minbatch=0;
           this.maxbatch=0;
           this.proWiseMaterials=[];
           this.proWiseEquipment=[];
           this.proWiseDesignations=[];
           this.showDetails();
      }
      else
      {
        
Swal.fire(  
  det.result,  
  'Error in transaction.',  
  'error'  
);




      }

    });










}
});

}

}

private valChk():boolean
{
  if( +this.product.recordId <=0)
  {
    this.adm.showMessage('Product not selected','Warning',3);
    return false;
  }
return true;
}


}
