"use client"

import type * as React from "react"
import {
  ArrowUpCircleIcon,
  BarChartIcon,
  CameraIcon,
  ClipboardListIcon,
  DatabaseIcon,
  FileCodeIcon,
  FileIcon,
  FileTextIcon,
  FolderIcon,
  HelpCircleIcon,
  LayoutDashboardIcon,
  ListIcon,
  SearchIcon,
  SettingsIcon,
  UsersIcon,
  DollarSignIcon,
  Receipt,
  Moon
} from "lucide-react"

import { NavFinanceiro } from "./nav-financeiro"
import { NavFerramenta } from "./_nav_menu/nav-ferramenta"

import { NavSeller } from "./_nav_menu/nav-seller"

import { NavMain } from "./nav-main"
import { NavSecondary } from "./nav-secondary"
import { NavUser } from "./nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    // {
    //   title: "Nova Proposta",
    //   url: "#",
    //   icon: ListIcon,
    //   color : "text-rose-600 font-bold"
    // },
    {
      title: "Gerenciar Clientes",
      url: "#",
      icon: UsersIcon,
      color :"",
      data_menu_item : [
        {
          title:"Listar Clientes" ,
          link :"/menu1"
        },
      ],
     
    },
    {
      title: "Gerenciar Vendedores",
      url: "#",
      icon: UsersIcon,
      color :"",
      data_menu_item : [
        {
          title:"Meus Vendedores" ,
          link :"/menu1"
        },
      ],
     
    },

    {
      title: "Gerenciar Cobranças",
      url: "/",
      icon: Receipt,
      color :"",
      data_menu_item : [
        {
          title:"Avulsas" ,
          link :"/menu1"
        },
        {
          title:"Parcelamentos" ,
          link :"/menu1"
        },
        {
          title:"Assinaturas" ,
          link :"/menu1"
        },

      ],
    },
  ],


  financeiro: [
    {
      name: "Contas a Pagar",
      url: "#",
      icon: DatabaseIcon,
    },
    {
      name: "Contas a Receber",
      url: "#",
      icon: ClipboardListIcon,
    },
  ],

  ferramenta: [
    {
      name: "Consulta Serasa",
      url: "#",
      icon: DatabaseIcon,
    },
  ],




  seller: [
    {
      name: "Gerenciar Vendedores",
      url: "#",
      icon: DatabaseIcon,
    },
    {
      name: "Contas a Receber",
      url: "#",
      icon: ClipboardListIcon,
    },
    {
      name: "Extrato",
      url: "#",
      icon: FileIcon,
    },
  ],






}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <a href="#">
                <DollarSignIcon className="h-5 w-5" />
                <span className="text-base font-semibold">EMPRESA XYZ</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        
      </SidebarHeader>



      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavFinanceiro items={data.financeiro} />
        <NavFerramenta items={data.ferramenta} />
        <NavSeller items={data.seller} />
      </SidebarContent>
      

        


      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
