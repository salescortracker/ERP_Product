import { RouteInfo } from '../vertical-menu/vertical-menu.metadata';

 

export const HROUTES: RouteInfo[] = [

  {
   
    path: '', title: 'Administration', icon: 'ft-home', class: 'dropdown nav-item has-sub', isExternalLink: false, submenu: [
      { path: '/admin/countries', title: 'Countries', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: []  },
      { path: '/admin/states', title: 'States', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
      { path: '/admin/taxes', title: 'Taxes', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
      { path: '/admin/roles', title: 'Roles', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
      { path: '/admin/users', title: 'Users', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
        { path: '/admin/sysmake', title: 'System Making', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: []  },
     
     
      { path: '/admin/license', title: 'License', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
     
    ]
  }
];
