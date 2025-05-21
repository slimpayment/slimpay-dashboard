import { SidebarInset, SidebarProvider,SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function NotFound() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <span>Página Não Encontrada!</span>
    </SidebarProvider>
  )
}
