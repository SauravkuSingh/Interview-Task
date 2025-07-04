import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  useSidebar,
  SidebarMenuItem,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { useEffect, useRef, useState } from 'react';
import AppMenuItems from './AppMenuItems';

import {
  Home,
  Package,
  Users,
  Tag,
  ShoppingCart,
  ClipboardList,
  DollarSign,
  BarChart2,
  Megaphone,
  Settings,
  Store,
  ShoppingBag,
  AppWindow,
  PlusSquare,
  ChevronLeft,
} from 'lucide-react';
import { SidebarTrigger } from '../ui/sidebar';

const items = [
  {
    title: 'Home',
    url: '#home',
    isActive: false,
    iconActive: <Home className="h-[18px] w-[18px]" />,
    iconInactive: <Home className="h-[18px] w-[18px]" />,
  },
  {
    title: 'Orders',
    url: '#orders',
    isActive: false,
    iconActive: <ClipboardList className="h-[18px] w-[18px]" />,
    iconInactive: <ClipboardList className="h-[18px] w-[18px]" />,
    items: [
      { label: 'All Orders', link: '#orders-all-orders', isActive: false },
      { label: 'Drafts', link: '#orders-drafts', isActive: false },
    ],
  },
  {
    title: 'Products',
    url: '#products',
    isActive: false,
    iconActive: <Package className="h-[18px] w-[18px]" />,
    iconInactive: <Package className="h-[18px] w-[18px]" />,
    items: [
      {
        label: 'All Products',
        link: '#products-all-products',
        isActive: false,
      },
      { label: 'Inventory', link: '#products-inventory', isActive: false },
    ],
  },
  {
    title: 'Customers',
    url: '#customers',
    isActive: false,
    iconActive: <Users className="h-[18px] w-[18px]" />,
    iconInactive: <Users className="h-[18px] w-[18px]" />,
    items: [
      { label: 'Customer List', link: '#customers-list', isActive: false },
      { label: 'Segments', link: '#customers-segments', isActive: false },
    ],
  },
  {
    title: 'Content',
    url: '#content',
    isActive: false,
    iconActive: <ClipboardList className="h-[18px] w-[18px]" />,
    iconInactive: <ClipboardList className="h-[18px] w-[18px]" />,
    items: [
      { label: 'Blog Posts', link: '#content-blog-posts', isActive: false },
      { label: 'Pages', link: '#content-pages', isActive: false },
    ],
  },
  {
    title: 'Finances',
    url: '#finances',
    isActive: false,
    iconActive: <DollarSign className="h-[18px] w-[18px]" />,
    iconInactive: <DollarSign className="h-[18px] w-[18px]" />,
    items: [
      { label: 'Payouts', link: '#finances-payouts', isActive: false },
      {
        label: 'Transactions',
        link: '#finances-transactions',
        isActive: false,
      },
    ],
  },
  {
    title: 'Analytics',
    url: '#analytics',
    isActive: false,
    iconActive: <BarChart2 className="h-[18px] w-[18px]" />,
    iconInactive: <BarChart2 className="h-[18px] w-[18px]" />,
    items: [
      { label: 'Reports', link: '#analytics-reports', isActive: false },
      { label: 'Dashboards', link: '#analytics-dashboards', isActive: false },
    ],
  },
  {
    title: 'Marketing',
    url: '#marketing',
    isActive: false,
    iconActive: <Megaphone className="h-[18px] w-[18px]" />,
    iconInactive: <Megaphone className="h-[18px] w-[18px]" />,
    items: [
      { label: 'Campaigns', link: '#marketing-campaigns', isActive: false },
      { label: 'Automations', link: '#marketing-automations', isActive: false },
    ],
  },
  {
    title: 'Discounts',
    url: '#discounts',
    isActive: false,
    iconActive: <Tag className="h-[18px] w-[18px]" />,
    iconInactive: <Tag className="h-[18px] w-[18px]" />,
    items: [
      {
        label: 'All Discounts',
        link: '#discounts-all-discounts',
        isActive: false,
      },
      {
        label: 'Discount Codes',
        link: '#discounts-discount-codes',
        isActive: false,
      },
    ],
  },
  {
    title: 'Sales Channels',
    url: '#sales-channels',
    isActive: false,
    iconActive: <Store className="h-[18px] w-[18px]" />,
    iconInactive: <Store className="h-[18px] w-[18px]" />,
    items: [
      {
        label: 'Online Store',
        link: '#sales-channels-online-store',
        isActive: false,
      },
      { label: 'Point of Sale', link: '#sales-channels-pos', isActive: false },
      { label: 'Shop', link: '#sales-channels-shop', isActive: false },
    ],
  },
  {
    title: 'Apps',
    url: '#apps',
    isActive: false,
    iconActive: <AppWindow className="h-[18px] w-[18px]" />,
    iconInactive: <AppWindow className="h-[18px] w-[18px]" />,
    items: [
      { label: 'Installed Apps', link: '#apps-installed', isActive: false },
      { label: 'App Store', link: '#apps-store', isActive: false },
    ],
  },
];

export function AppSidebar() {
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const elementRef = useRef(null);
  const { open } = useSidebar();

  const [openKey, setOpenKey] = useState(null);
  const handleMouseEnter = () => {
    setIsSidebarHovered(true);
  };

  const handleMouseLeave = () => {
    setIsSidebarHovered(false);
  };

  const [menuItems, setMenuItems] = useState(items);

  const deactivateAllSubMenuItems = () => {
    menuItems.forEach((menu) => {
      if (menu.items && Array.isArray(menu.items)) {
        menu.items.forEach((subItem) => {
          subItem.isActive = false;
        });
      }
    });
  };

  const setActiveMenu = (parentMenu, childActiveMenuURL = '#') => {
    const parentURL = parentMenu.url;

    if (!parentMenu.items && childActiveMenuURL === '#') {
      const updatedItems = menuItems.map((item) => {
        const isActive = item.url === parentURL;
        return {
          ...item,
          isActive,
          icon: isActive ? item.iconActive : item.iconInactive,
        };
      });
      setMenuItems(updatedItems);
    } else {
      const updatedMenuItems = menuItems.map((menu) => {
        if (menu.url === parentURL) {
          return {
            ...menu,
            isActive: true,
            items: menu.items.map((item) => ({
              ...item,
              isActive: item.link === childActiveMenuURL,
            })),
          };
        }

        return { ...menu, isActive: false };
      });
      setMenuItems(updatedMenuItems);
      deactivateAllSubMenuItems();
    }

    const breadCrumbData = [];

    const parent = menuItems.find((item) => item.url === parentURL);
    const child = parent.items?.find(
      (item) => item.link === childActiveMenuURL,
    );
    breadCrumbData.push(
      { label: parent?.title },
      { label: child?.label ?? '#' },
    );
  };

  useEffect(() => {
    const locationPath = location.pathname;
    menuItems.map((menu) => {
      if (menu.url === locationPath) {
        setActiveMenu(menu, menu.items || '#');
      }
      return menu;
    });
  }, []);

  return (
    <Sidebar
      ref={elementRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      collapsible="icon"
    >
      <hr className="border-t border-gray-800 opacity-100" />
      <SidebarContent className="bg-gray-50">
        <SidebarGroup>
          <div
            className={`flex items-center justify-between transition-all duration-200 ease-in ${!open ? 'px-[2px] py-2' : 'p-3'}`}
          >
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#7A5AF8] text-sm font-bold text-white">
                S
              </div>
              <span className="text-[15px] font-medium text-[#111827]">
                ShopZen
              </span>
            </div>
            <SidebarTrigger>
              <div className="close_sidebar flex h-7 w-7 cursor-pointer items-center justify-center rounded-md bg-slate-200/70">
                <ChevronLeft className="h-5 w-5 text-black/60" />
              </div>
            </SidebarTrigger>
          </div>
          <SidebarGroupContent>
            <SidebarMenu className="flex gap-2">
              {menuItems?.map((item, index) => (
                <AppMenuItems
                  openKey={openKey}
                  setOpenKey={setOpenKey}
                  isSidebarHovered={isSidebarHovered}
                  setActiveMenu={setActiveMenu}
                  key={index}
                  item={item}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="max-w-full overflow-hidden bg-gray-50">
        <SidebarMenu className="max-w-full overflow-hidden">
          <SidebarMenuItem
            className={`relative ${!open ? 'p-2' : 'p-2 px-4'} flex h-9 cursor-pointer items-center gap-2 overflow-hidden rounded-md hover:bg-slate-200`}
          >
            <Settings className="w-[18px]" />
            <span
              className={`absolute left-11 text-sm whitespace-nowrap text-slate-700`}
            >
              Settings
            </span>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
