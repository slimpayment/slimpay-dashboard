import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { SidebarInset, SidebarProvider,SidebarTrigger } from "@/components/ui/sidebar"
import { SectionCards } from '@/components/section-cards';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"


import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import { cn } from "@/lib/utils"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Separator } from "@/components/ui/separator"
import { Bell, BellRing, Check, CircleUser, Code, LogOut, Moon, Settings, User } from "lucide-react";

const notifications = [
  {
    title: "Você Recebeu R$ 1.40",
    description: "Referente ao Cashback do pedido Nº 225525.",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
]








export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between px-4 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          {/* Lado esquerdo */}
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />

            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Início</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Lado direito */}
          <div className="flex justify-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer rounded-md px-3 py-2 hover:bg-muted">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://atlas.asaas.com/assets/images/user-icon.svg" alt="Avatar" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </div>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-80 py-3">
                <DropdownMenuItem><CircleUser className="w-4 h-4 mr-2" />Minha Conta</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem><User className="w-4 h-4 mr-2" />Perfil</DropdownMenuItem>
                <DropdownMenuItem><Settings className="w-4 h-4 mr-2" />Configurações</DropdownMenuItem>
                <DropdownMenuItem><Bell className="w-4 h-4 mr-2" />Central de Notificações</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem><Code className="w-4 h-4 mr-2" />Integrações</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive"><LogOut className="w-4 h-4 mr-2" />Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

