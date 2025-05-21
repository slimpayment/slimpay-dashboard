
import { ListCustomers } from "@/components/_customers/listcustomer"
import { AppSidebar } from "@/components/app-sidebar"
import { HeaderDashboard } from "@/components/dashboard/header"
import { SidebarInset, SidebarProvider,SidebarTrigger } from "@/components/ui/sidebar"



export default function Customer(){
    return (
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <HeaderDashboard />
                    <div className="flex flex-1 flex-col">
                        <div className="@container/main flex flex-1 flex-col gap-2">
                            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                                <div className="px-4 lg:px-6">
                                    {/* <h1>Pagina de usuarios</h1> */}
                                        {/* <ListCustomers /> */}

                                </div>
                            </div>
                        </div>
                    </div>

                </SidebarInset>
            </SidebarProvider>

    )
}