import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { useStore } from "@/store";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Users, FileText, Ticket, LogOut, FolderGit2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import PageTransition from "@/components/PageTransition";

export default function AdminLayout() {
    const { logoutAdmin, isAdminLoggedIn } = useStore();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!isAdminLoggedIn) {
            navigate("/admin");
        }
    }, [isAdminLoggedIn, navigate]);

    const handleLogout = () => {
        logoutAdmin();
        navigate("/admin");
    };

    const navItems = [
        { icon: LayoutDashboard, label: "Dashboard", path: "/admin/dashboard" },
        { icon: Users, label: "Clients", path: "/admin/dashboard/clients" },
        { icon: FolderGit2, label: "Projects", path: "/admin/dashboard/projects" }, // Need to import FolderGit2 if not already? It was used in dashboard overview
        { icon: FileText, label: "Submissions", path: "/admin/dashboard/submissions" },
        { icon: Ticket, label: "Tickets", path: "/admin/dashboard/tickets" },
    ];

    if (!isAdminLoggedIn) return null;

    return (
        <div className="flex min-h-screen bg-gray-50 dark:bg-neutral-900">
            {/* Sidebar */}
            <aside className="w-64 bg-white dark:bg-neutral-800 border-r border-gray-200 dark:border-neutral-700 hidden md:flex flex-col">
                <div className="p-6 border-b border-gray-200 dark:border-neutral-700">
                    <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        Redlix Admin
                    </h2>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    {navItems.map((item) => (
                        <Link key={item.path} to={item.path}>
                            <Button
                                variant="ghost"
                                className={cn(
                                    "w-full justify-start gap-3",
                                    location.pathname === item.path && "bg-gray-100 dark:bg-neutral-700 text-blue-600"
                                )}
                            >
                                <item.icon size={20} />
                                {item.label}
                            </Button>
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-gray-200 dark:border-neutral-700">
                    <Button variant="outline" className="w-full justify-start gap-3 text-red-500 hover:text-red-600" onClick={handleLogout}>
                        <LogOut size={20} />
                        Logout
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-auto">
                <PageTransition>
                    <Outlet />
                </PageTransition>
            </main>
        </div>
    );
}
