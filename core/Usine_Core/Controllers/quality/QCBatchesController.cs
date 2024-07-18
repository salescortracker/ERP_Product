using Microsoft.AspNetCore.Mvc;
using Usine_Core.Controllers.Admin;
using Usine_Core.Models;
using Microsoft.AspNetCore.Authorization;
using System.Data;
using System.Linq;
using System.Data.SqlClient;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Hosting;
using Usine_Core.Controllers.Others;
using System.Collections.Generic;
using System;
using Usine_Core.Controllers.Purchases;

namespace Usine_Core.Controllers.quality
{
    public class QCBatchRequirements
    {
        public List<PpcProcessesMaster> processes { get; set; }
        public List<QcTestings> tests { get; set; }
        public dynamic pendings { get; set; }
    }
    public class QCBatchesController : ControllerBase
    {
        UsineContext db = new UsineContext();
        AdminControl ac = new AdminControl();

        [HttpPost]
        [Authorize]
        [Route("api/QCBatches/GetQCBatchRequirements")]
        public QCBatchRequirements GetQCBatchRequirements([FromBody] UserInfo usr)
        {
            QCBatchRequirements tot = new QCBatchRequirements();
            tot.processes = db.PpcProcessesMaster.Where(a => a.BranchId == usr.bCode && a.CustomerCode == usr.cCode).ToList();
            tot.tests = db.QcTestings.Where(a => a.TestArea == "PRO" && a.BranchId == usr.bCode && a.CustomerCode == usr.cCode).ToList();
            var pendings = (from a in db.PpcBatchProcessWiseDetailsDet.Where(a => a.Pos == -1 && a.BranchId == usr.bCode && a.CustomerCode == usr.cCode)
                       join b in db.PpcBatchPlanningUni.Where(a => a.BranchId == usr.bCode && a.CustomerCode == usr.cCode) on a.Batchno equals b.RecordId
                       join c in db.PpcBatchPlanningProcesses.Where(a => a.BranchId == usr.bCode && a.CustomerCode == usr.cCode) on new { batch = a.Batchno, sno = a.LineId } equals new { batch = c.RecordId, sno = c.Sno }
                       join d in db.PpcProcessesMaster.Where(a => a.BranchId == usr.bCode && a.CustomerCode == usr.cCode) on c.ProcessId equals d.RecordId
                       join e in db.HrdEmployees.Where(a => a.Branchid == usr.bCode && a.CustomerCode == usr.cCode) on b.ProductionIncharge equals e.RecordId
                       join f in db.InvMaterialCompleteDetailsView.Where(a => a.Customercode == usr.cCode) on b.ItemId equals f.RecordId
                       select new
                       {
                           recordid=a.RecordId,
                           batchid=a.Batchno,
                           batchno=b.BatchNo,
                           lineid=a.LineId,
                           qty=a.Qty,
                           processid=d.RecordId,
                           processname=d.ProcessName,
                           productionincharge=e.Empname,
                           itemname=f.Itemname,
                           uom=f.Um
                       }).ToList();
           // var lst2=db.InvMaterialManagement.Where(a => a.TransactionType==103 && a.BranchId == usr.bCode && a.CustomerCode == usr.cCode ).
            return tot;
        }            
    }
}
