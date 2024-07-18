import { RouteInfo } from './hrd-menu.metadata';


export const ROUTES: RouteInfo[] = [
  {
    path: '/hrd/hrddashboard', title: 'Dashboard', icon: 'ft-pie-chart', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu:[]
   },
    {
      path: '', title: 'Masters', icon: 'ft-menu', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
        { path: '/hrd/hrddepts', title: 'Departments', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/hrd/hrdallowances', title: 'Allowances Deductions', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/hrd/hrdleaves', title: 'Leaves', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
     
        { path: '/hrd/hrddesigs', title: 'Designations', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/hrd/hrdrangewise', title: 'Range wise Deductions', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/hrd/hrdemployees', title: 'Employees', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/hrd/hrdshifts', title: 'Shifts', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
     
      
      ]
    }, 
    {
      path: '', title: 'HRD', icon: 'ft-file-text', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
        { path: '/hrd/hrdresume', title: 'Resume', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/hrd/hrdinterviews', title: 'Interviews', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/hrd/appointments', title: 'Appointments', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/hrd/serviceclosings', title: 'Service Closings', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/hrd/trainings', title: 'Trainings', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/hrd/meetings', title: 'Meetings', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    
      ]
    },
    {
      path: '', title: 'Attendance & Accounts', icon: 'ft-file-text', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
        { path: '/hrd/hrdinout', title: 'In-Out', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/accounts/accreceipts', title: 'Attendances', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/accounts/accjournals', title: 'Leave Request/Approvals', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/accounts/accjournals', title: 'Absents/Notes', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/accounts/accjournals', title: 'Advances', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/accounts/accjournals', title: 'Salary Statement', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
     
      ]
    },
  
    {
      path: '', title: 'Key Reports', icon: 'icon-key', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
        { path: '/hrd/hrdkeyrepdepts', title: 'Departments', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/hrd/hrdkeyrepdesigs', title: 'Designations', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/hrd/hrdkeyrepemployees', title: 'Employees', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      ]
    },
    {
      path: '', title: 'HRD Reports', icon: 'icon-note', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
        { path: '/pos/possalerepsales1', title: 'Resume filter', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/pos/possalerepsales1', title: 'Interviews', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/pos/possalerepsales2', title: 'Pending Interviews', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/pos/possalerepsales2', title: 'Appointments', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/pos/possalerepconsolidations1', title: 'Pending Appointments', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/pos/possalerepconsolidations1', title: 'Day wise Service Closings', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/pos/possalerepconsolidations1', title: 'Pending Joiinings', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/pos/possalerepsales1', title: 'Joinings vs leavings', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/pos/possalerepsales2', title: 'Training info', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/pos/possalerepconsolidations1', title: 'Meeting details', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      ]
      },
      {
        path: '', title: 'Account Reports', icon: 'icon-note', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
          { path: '/pos/possalerepsales1', title: 'Weekly attendance', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/possalerepsales1', title: 'Monthly attendance', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/possalerepsales2', title: 'Employee wise Leaves', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/possalerepsales2', title: 'Advances day book', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/possalerepconsolidations1', title: 'Pending Advances', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/possalerepconsolidations1', title: 'Consolidated advances', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/possalerepconsolidations1', title: 'Monthly Salaries', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/possalerepsales1', title: 'Pending Salaries', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/possalerepsales2', title: 'Bank statement', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/possalerepconsolidations1', title: 'ESI Statement', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pos/possalerepconsolidations1', title: 'PF Statement', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
 
        ]
        },
        {
          path: '', title: 'Analysis', icon: 'icon-pie-chart', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            { path: '/pos/possalerepsales1', title: 'Activity Log', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pos/possalerepsales2', title: 'Department wise salaries', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pos/possalerepconsolidations1', title: 'Production vs salaries', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
           ] },
           {
             path: '', title: 'Settings', icon: 'ft-settings', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
               { path: '/pos/possalerepsales1', title: 'Settings', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                 ] } 
        
  ];