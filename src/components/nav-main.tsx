"use client"

import { LayoutDashboardIcon, MailIcon, PlusCircleIcon, ChevronDown, type LucideIcon, MoreHorizontalIcon, ShareIcon, FolderIcon } from "lucide-react"


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"





import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"





export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    color: string
    data_menu_item?:{
      title: string
      link:string
    }[]

  }[]
}) {
    const { isMobile } = useSidebar()

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">

        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton
              tooltip="Quick Create"
              className="min-w-8 bg-asaas flex justify-between text-primary-foreground duration-200 ease-linear hover:bg-asaas-hover/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground"
            >
              <LayoutDashboardIcon/>
              <span>Cobrança Rápida</span>

              <DropdownMenu>
                <DropdownMenuTrigger>
                  <ChevronDown/>
                </DropdownMenuTrigger>
                
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => console.log("Clique Criar Cobrança")}>Criar Cobrança</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => console.log("Clique Criar Cobrança")}>Criar Cobrança c/ Split</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => console.log("Clique Criar Link de Pagamento")}>Criar Link de Pagamento</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => console.log("Clique Simular Vend")}>Simular Venda</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuButton>

          </SidebarMenuItem>
        </SidebarMenu>

        <SidebarMenu>
          <SidebarMenuItem >
              <a href="/dashboard">
                <SidebarMenuButton
                  tooltip="Quick Create"
                  className="min-w-8 bg-btnresume text-primary-foreground duration-200 ease-linear hover:bg-btnresume-hover/90 hover:text-primary-foreground active:bg-btnresume/90 active:text-btnresume-foreground"
                >
                  <LayoutDashboardIcon className="text-slimpay-blue"/>
                      <span className="text-slimpay-blue font-medium">Principal</span>
                </SidebarMenuButton>
                </a>


          </SidebarMenuItem>
        </SidebarMenu>










        <SidebarMenu>
          
          {items.map((item) => (
            <SidebarMenuItem key={item.title} >
              <SidebarMenuButton tooltip={item.title}>
                {item.icon && <item.icon />}
                <span className={item.color}>{item.title}</span>
              </SidebarMenuButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction showOnHover className="rounded-sm data-[state=open]:bg-accent">
                  <MoreHorizontalIcon />
                  <span className="sr-only">xxxxxxxx</span>
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-50 rounded-lg" side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >

                
            {item.data_menu_item?.map((subitem) => (
              <DropdownMenuItem>
                <span>{subitem.title}</span>
              </DropdownMenuItem>
            ))}

              </DropdownMenuContent>
            </DropdownMenu>


            </SidebarMenuItem>
            
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
