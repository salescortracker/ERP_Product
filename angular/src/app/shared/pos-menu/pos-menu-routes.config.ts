import { RouteInfo } from './pos-menu.metadata';

export const ROUTES: RouteInfo[] =[
  {
    path: '/pos/salesdashboard', title: 'Dashboard', icon: 'ft-pie-chart', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu:[]
   },
 /* {
    path: '', title: 'Masters', icon: 'ft-menu', class: 'has-sub',  badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
       { path: '/pos/posoutlets', title: 'Outlets', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      // { path: '/pos/posoutlets', title: 'Tax assignings', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    
      ]
  },*/
  {
    path: '', title: 'Transactions', icon: 'ft-file-text', class: 'has-sub',  badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
       { path: '/pos/saldispatches', title: 'sales -1', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/pos/sales2', title: 'Sales -2', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
     { path: '/pos/saldespatchclear', title: 'Dispatch Clearances', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
  
    ]
  },
  {
    path: '', title: 'Sale Reports', icon: 'ft-trending-up', class: 'has-sub', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
      { path: '/pos/salreplistofsales', title: 'List of Sales', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/pos/salrepdetailedsales', title: 'Detailed Sales', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    
      { path: '/pos/salrepconsolidated', title: 'Consolidated Sales', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
       { path: '/pos/salrepcustomerwise', title: 'Item wise Consolidation', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
       
    ]
  },
/*  {
    path: '', title: 'Stock Reports', icon: 'ft-shopping-cart', class: 'has-sub', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
      { path: '/pos/posrepitemwise', title: 'Item wise Sales', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/pos/posrepitemwiseconsolidated', title: 'Item wise Consolidations', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/pos/posreptopn', title: 'Top n Items', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/pos/posrepleastn', title: 'Least n Items', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  },
  {
    path: '', title: 'Analysis', icon: 'icon-pie-chart', class: 'has-sub', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
      { path: '/pos/posrepitemwise', title: 'Item wise Sales', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/pos/posrepitemwiseconsolidated', title: 'Item wise Consolidations', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/pos/posreptopn', title: 'Top n Items', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/pos/posrepleastn', title: 'Least n Items', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  },
  {
    path: '', title: 'Setup', icon: 'ft-settings', class: 'has-sub', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
      { path: '/pos/saletypes', title: 'Sale Types', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/pos/salaccounts', title: 'Accounts Assign', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
     ]
  } */
];




export const RESROUTES: RouteInfo[] =   [
  
  {
        path: '', title: 'Masters', icon: 'ft-home', class: 'has-sub',  badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
          { path: '/pos/positemgrps', title: 'Item Groups', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/positems', title: 'Items', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/posoutlets', title: 'Outlets', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/poskotgroups', title: 'KOT Groups', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/pospricelist', title: 'Price List', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/posncdepartments', title: 'NC Departments', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
           { path: '/pos/posservices', title: 'Services', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/postables', title: 'Tables', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/poswaiters', title: 'Waiters', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/posincomesexpenses', title: 'Incomes/Expenses', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/posfnbproduction', title: 'F & B Production', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/posfnbservice', title: 'F & B Services', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/poskitchenwiseoutlets', title: 'Kitchen wise Outlets', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
           { path: '/pos/posfnbservicewiseoutlets', title: 'F&B Service wise outlets', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
           { path: '/pos/posdeptwiseitems', title: 'Department wise Items', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/positemwiseingredients', title: 'Item wise Ingtedients', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
      },
      {
        path: '', title: 'Transactions', icon: 'ft-home', class: 'has-sub',  badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
          { path: '/pos/posclassy', title: 'Billing Classy', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
         // { path: '/pos/poselegant', title: 'Billing Elegant', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        //  { path: '/pos/posfancy', title: 'Billing Fancy', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
         // { path: '/pos/posstylish', title: 'Settlements', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/pospayments', title: 'Payments', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/posreceipts', title: 'Receipts', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
      },
      {
        path: '', title: 'Key Reports', icon: 'ft-home', class: 'has-sub',  badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
          { path: '/pos/poskeyrepitemgrps', title: 'Item Groups', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/poskeyrepitems', title: 'Items', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/poskeyrepoutlets', title: 'Outlets', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
           { path: '/pos/poskeyrepmenu', title: 'Menu', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
      },
      {
        path: '', title: 'Day Reports', icon: 'ft-home', class: 'has-sub',  badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
          { path: '/pos/posdayrepsettlement', title: 'Settlement Report', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/posrepdaystatus', title: 'Day Status', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/posrepdaytableinfo', title: 'Table Status', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
       
        ]
      },
      {
        path: '', title: 'Sale Reports', icon: 'ft-home', class: 'has-sub', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
          { path: '/pos/posrepsaleslist', title: 'List of Sales-1', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
       //   { path: '/pos/posrepsaleslist', title: 'List of Sales-2', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/posrepsalesconsolidated', title: 'Consolidated Sales-1', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
       //      { path: '/pos/posrepsalesconsolidated', title: 'Consolidated Sales-2', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/posrepsettlementconsolidated', title: 'Consolidated Settlement', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
       //   { path: '/pos/possalerepconsolidations1', title: 'Room Services', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/posrepdiscountedbills', title: 'Discounted Bills', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
         //  { path: '/pos/posrepncbills', title: 'NC Bills', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/posrepcancelledbills', title: 'Cancelled Bills', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/posreptablebills', title: 'Table wise Bills', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/posrepwaiterbills', title: 'Waiter wise Bills', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
         // { path: '/pos/possalerepconsolidations1', title: 'Guest Reminders', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
         // { path: '/pos/possalerepconsolidations1', title: 'Breakfast Coupons', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      
        ]
      },
      {
        path: '', title: 'Stock Reports', icon: 'ft-home', class: 'has-sub', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
          { path: '/pos/posrepkotdetails', title: 'KOT Wise Details', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/posrepitemwise', title: 'Item wise Sales', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/posrepitemwiseconsolidated', title: 'Item wise Consolidations', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/posreptopn', title: 'Top n Items', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/posrepleastn', title: 'Least n Items', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        

        ]
      }
      ,
    /*  {
        path: '', title: 'Taxes & Accounts', icon: 'ft-home', class: 'has-sub', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
          { path: '/pos/possalerepsales1', title: 'Taxes Detailed', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/possalerepsales2', title: 'Taxes Consolidated', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/possalerepconsolidations1', title: 'Sales Daybook detailed', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/possalerepconsolidations2', title: 'Sales Daybook consolidated', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
       ]
      }
      ,*/
      {
        path: '', title: 'Analysis', icon: 'ft-home', class: 'has-sub', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
    //      { path: '/pos/possalerepsales1', title: 'Item wise Comparison', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
       //   { path: '/pos/possalerepsales2', title: 'Sales Analysis', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/posdashboard', title: 'Dashboard', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/posactivitylog', title: 'Activity Log', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
       ]
      }

      ,
      {
        path: '', title: 'Settings', icon: 'ft-home', class: 'has-sub', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
          { path: '/pos/resoutletsettings', title: 'Outlet Settings', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            ]
      }
    
    ];