import { RouteInfo } from './venture-menu.metadata';


export const ROUTES: RouteInfo[] = [
 /*
     {
      path: '', title: 'Masters', icon: 'ft-home', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
        { path: '/venture/reallevelwisecomm', title: 'Level Wise Commissions', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/venture/realPackages', title: 'Packages', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
     
              ]
    },
    {
      path: '', title: 'Transactions', icon: 'ft-home', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
        { path: '/venture/realspecialbonus', title: 'Special Bonus Offers', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/venture/realagents', title: 'Agents', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
     
              ]
    },*/
    {
      path: '/venture/reallevelwisecomm', title: 'Level Wise Commissions', icon: 'ft-home', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: []
    },
    {
      path: '/venture/realPackages', title: 'Packages', icon: 'ft-home', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: []
    },
    {
      path: '/venture/realspecialbonus', title: 'Special Bonus Offers', icon: 'ft-home', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: []
    },
    {
      path: '/venture/realagents', title: 'Users', icon: 'ft-home', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: []
    },
    {
      path: '/venture/holidays', title: 'Holidays', icon: 'ft-home', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: []
    },
    {
      path: '/venture/levelagenttopup', title: 'Investments', icon: 'ft-home', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: []
    },
    {
      path: '/venture/paymentcutoff', title: 'Payment Cut-off', icon: 'ft-home', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: []
    },
    {
      path: '/venture/realpayments', title: 'Payments', icon: 'ft-home', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: []
    },
    {
      path: '/venture/repreceipts', title: 'List of Receipts', icon: 'ft-list', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: []
    },
    
    {
      path: '/venture/reppayments', title: 'List of Payments', icon: 'ft-list', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: []
    },
    {
      path: '/venture/reppaymentcutoff', title: 'Payment Cutoff Details', icon: 'ft-list', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: []
    },
    
    {
      path: '/venture/reppaymentsconsolidated', title: 'List of investments', icon: 'ft-list', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: []
    },
  /*  {
      path: '/venture/agentComplete', title: 'Level wise User Info', icon: 'ft-list', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: []
    },
    {
      path: '/venture/roles', title: 'Roles', icon: 'ft-settings', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: []
    },
    {
      path: '/venture/users', title: 'Users', icon: 'ft-settings', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: []
    },*/
  ];

  
export const ROUTESAGENT: RouteInfo[] = [
   
     {
       path: '/venture/realpaymentrequest', title: 'Payment Request', icon: 'ft-home', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: []
     },
     {
      path: '/venture/repMyAgentTeamComplete', title: 'My Team Business', icon: 'ft-list', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: []
    },
  /*  {
      path: '/venture/reppaymentsconsolidated2', title: 'My Direct Business', icon: 'ft-list', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: []
    },
    {
      path: '/venture/reppaymentsconsolidated3', title: 'Ledger', icon: 'ft-list', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: []
    },*/
    {
      path: '/venture/repMyAgentTeam', title: 'My Team', icon: 'ft-list', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: []
    },
    {
      path: '/venture/myreceipts', title: 'My Receipts', icon: 'ft-list', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: []
    },
    {
      path: '/venture/agentComplete', title: 'Complete Info', icon: 'ft-list', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: []
    }
    
    ]