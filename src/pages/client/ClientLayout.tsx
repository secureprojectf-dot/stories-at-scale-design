import { Outlet, useNavigate } from "react-router-dom";
import { useStore } from "@/store";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import PageTransition from "@/components/PageTransition";

export default function ClientLayout() {
    const { currentClientId, logoutClient } = useStore();
    const navigate = useNavigate();

    useEffect(() => {
        if (!currentClientId) {
            navigate("/client");
        }
    }, [currentClientId, navigate]);

    const handleLogout = () => {
        logoutClient();
        navigate("/client");
    };

    if (!currentClientId) return null;

    return (
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-neutral-950">
            <header className="bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800 p-4 sticky top-0 z-10 flex text-black dark:text-white justify-between items-center">
                <h1 className="text-xl font-bold">Project Tracker</h1>
                <Button variant="ghost" size="sm" onClick={handleLogout} className="text-gray-500 hover:text-red-500">
                    <LogOut className="mr-2 h-4 w-4" /> Sign Out
                </Button>
            </header>
            <main className="flex-1 p-4 md:p-8 max-w-5xl mx-auto w-full">
                <PageTransition>
                    <Outlet />
                </PageTransition>
            </main>
        </div>
    );
}
