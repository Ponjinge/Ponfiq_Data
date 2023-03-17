import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    class:"navItems",
    name: 'Accueil',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    
  },
/**{
    class:"navItems",
    name: 'NotreDashboard',
    url: '/notreDashboard',
    iconComponent: { name: 'cil-speedometer' },
    
  },
  {
    class:"navItems",
    title: true,
    name: 'Theme'
  },
  {
    class:"navItems",
    name: 'Colors',
    url: '/theme/colors',
    iconComponent: { name: 'cil-drop' }
  },
  {
    class:"navItems",
    name: 'Typography',
    url: '/theme/typography',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-pencil' }
  },
  {
    class:"navItems",
    name: 'Components',
    title: true
  },*/
  {
    class:"navItems",
    name: 'Ventes',
    url: '/ventes',
    iconComponent: { name: 'cil-dollar' },
    children: [
      {
        class:"navSousItems",
        name: "TDB Ventes",
        url: '/ventes/tab-bord-evol-ventes'
      },
    ]
  },
  {
    class:"navItems",
    name: 'Produits',
    url: '/produits',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        class:"navSousItems",
        name: 'TDB Produits',
        url: '/produits/tab-bord-prod'
      },
      {
        class:"navSousItems",
        name: 'Analyse par produit',
        url: '/produits/analyse-par-prod',
        badge: {
          color: 'info',
          text: 'Offline'
        }
      },
      {
        class:"navSousItems",
        name: 'Liaison entre produits',
        url: '/produits/liaison-prod'
      },
    ]
  },
  {
    class:"navItems",
    name: 'Clients',
    url: '/clients',
    iconComponent: { name: 'cil-contact' },
    children: [
      {
        class:"navSousItems",
        name: 'TDB Clients',
        url: '/clients/tab-bord-cli'
      },
      {
        class:"navSousItems",
        name: 'Profil des clients',
        url: '/clients/profil-cli',
        badge: {
          color: 'info',
          text: 'Offline'
        }
      },
    ]
  },
  {
    class:"navSousItems",
    name: 'Géolocalisation',
    url: '/geoloc',
    iconComponent: { name: 'cil-map' },
    children: [
      {
        class:"navSousItems",
        name: 'Carte globale des ventes',
        url: '/geolocalisation/carte-glob-ventes'
      },
      {
        class:"navSousItems",
        name: 'Analyse par ville',
        url: '/geolocalisation/analyse-par-ville',
        badge: {
          color: 'info',
          text: 'Offline'
        }
      },
    ]
  },
 /**  {
    class:"navItems",
    name: 'Base',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        class:"navSousItems",
        name: 'Accordion',
        url: '/base/accordion'
      },
      {
        class:"navSousItems",
        name: 'Breadcrumbs',
        url: '/base/breadcrumbs'
      },
      {
        class:"navSousItems",
        name: 'Cards',
        url: '/base/cards'
      },
      {
        class:"navSousItems",
        name: 'Carousel',
        url: '/base/carousel'
      },
      {
        class:"navSousItems",
        name: 'Collapse',
        url: '/base/collapse'
      },
      {
        class:"navSousItems",
        name: 'List Group',
        url: '/base/list-group'
      },
      {
        class:"navSousItems",
        name: 'Navs & Tabs',
        url: '/base/navs'
      },
      {
        class:"navSousItems",
        name: 'Pagination',
        url: '/base/pagination'
      },
      {
        class:"navSousItems",
        name: 'Placeholder',
        url: '/base/placeholder'
      },
      {
        class:"navSousItems",
        name: 'Popovers',
        url: '/base/popovers'
      },
      {
        class:"navSousItems",
        name: 'Progress',
        url: '/base/progress'
      },
      {
        class:"navSousItems",
        name: 'Spinners',
        url: '/base/spinners'
      },
      {
        class:"navSousItems",
        name: 'Tables',
        url: '/base/tables'
      },
      {
        class:"navSousItems",
        name: 'Tabs',
        url: '/base/tabs'
      },
      {
        class:"navSousItems",
        name: 'Tooltips',
        url: '/base/tooltips'
      }
    ]
  },
  {
    class:"navItems",
    name: 'Buttons',
    url: '/buttons',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        class:"navSousItems",
        name: 'Buttons',
        url: '/buttons/buttons'
      },
      {
        class:"navSousItems",
        name: 'Button groups',
        url: '/buttons/button-groups'
      },
      {
        class:"navSousItems",
        name: 'Dropdowns',
        url: '/buttons/dropdowns'
      },
    ]
  },
  
  {
    class:"navItems",
    name: 'Forms',
    url: '/forms',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        class:"navSousItems",
        name: 'Form Control',
        url: '/forms/form-control'
      },
      {
        class:"navSousItems",
        name: 'Select',
        url: '/forms/select'
      },
      {
        class:"navSousItems",
        name: 'Checks & Radios',
        url: '/forms/checks-radios'
      },
      {
        class:"navSousItems",
        name: 'Range',
        url: '/forms/range'
      },
      {
        class:"navSousItems",
        name: 'Input Group',
        url: '/forms/input-group'
      },
      {
        class:"navSousItems",
        name: 'Floating Labels',
        url: '/forms/floating-labels'
      },
      {
        class:"navSousItems",
        name: 'Layout',
        url: '/forms/layout'
      },
      {
        class:"navSousItems",
        name: 'Validation',
        url: '/forms/validation'
      }
    ]
  },
  {
    class:"navItems",
    name: 'Charts',
    url: '/charts',
    iconComponent: { name: 'cil-chart-pie' }
  },
  {
    class:"navItems",
    name: 'Icons',
    iconComponent: { name: 'cil-star' },
    url: '/icons',
    children: [
      {
        class:"navSousItems",
        name: 'CoreUI Free',
        url: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'FREE'
        }
      },
      {
        class:"navSousItems",
        name: 'CoreUI Flags',
        url: '/icons/flags'
      },
      {
        class:"navSousItems",
        name: 'CoreUI Brands',
        url: '/icons/brands'
      }
    ]
  },
  {
    class:"navItems",
    name: 'Notifications',
    url: '/notifications',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        class:"navSousItems",
        name: 'Alerts',
        url: '/notifications/alerts'
      },
      {
        class:"navSousItems",
        name: 'Badges',
        url: '/notifications/badges'
      },
      {
        class:"navSousItems",
        name: 'Modal',
        url: '/notifications/modal'
      },
      {
        class:"navSousItems",
        name: 'Toast',
        url: '/notifications/toasts'
      }
    ]
  },
  {
    class:"navItems",
    name: 'Widgets',
    url: '/widgets',
    iconComponent: { name: 'cil-calculator' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    class:"navItems",
    title: true,
    name: 'Extras'
  },
  {
    class:"navItems",
    name: 'Pages',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        class:"navSousItems",
        name: 'Login',
        url: '/login'
      },
      {
        class:"navSousItems",
        name: 'Register',
        url: '/register'
      },
      {
        class:"navSousItems",
        name: 'Error 404',
        url: '/404'
      },
      {
        class:"navSousItems",
        name: 'Error 500',
        url: '/500'
      }
    ]
  },
  */
];
