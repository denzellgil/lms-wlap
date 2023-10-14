import { MobileSidebar } from "./mobile-sidebar"
import { NavbarRoutes } from "@/components/navbar-routes"

export const Navbar = () => {
    return (
        <div className="p-4 border-b h-full flex items-center bg-slate-100 shadow-sm">
           <MobileSidebar/>
           <NavbarRoutes/>
        </div>
    )
}