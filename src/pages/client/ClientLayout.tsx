import { Outlet, useNavigate } from "react-router-dom";
import { useStore } from "@/store";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { LogOut, ShieldCheck } from "lucide-react";
import PageTransition from "@/components/PageTransition";

// Background Texture
const NoiseTexture = () => (
    <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay fixed"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
    />
);

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
        <div className="flex flex-col min-h-screen bg-[#030303] text-white font-sans selection:bg-white selection:text-black">
            <NoiseTexture />

            {/* ================= HEADER ================= */}
            <header className="fixed top-0 left-0 right-0 z-50 h-20 border-b border-neutral-900 bg-black/90 backdrop-blur-md flex justify-between items-center px-6 md:px-12">
                
                {/* Left: Project Info */}
                <div className="flex items-center gap-6">
                    {/* Simple Text Logo */}
                    <h1 className="text-xl font-bold tracking-tight text-white">
                        Redlix Tracker
                    </h1>

                    {/* Divider */}
                    <div className="h-6 w-[1px] bg-neutral-800 hidden md:block" />

                    {/* Simple ID Display */}
                    <div className="hidden md:flex items-center gap-2 text-sm text-neutral-400">
                        <span>Project ID:</span>
                        <span className="text-white font-mono bg-neutral-900 px-2 py-1 rounded-sm border border-neutral-800">
                            {currentClientId}
                        </span>
                    </div>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-6">
                    {/* Live Status */}
                    <div className="hidden md:flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-sm text-neutral-400">Connected</span>
                    </div>

                    <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={handleLogout} 
                        className="text-white hover:bg-neutral-800 hover:text-white transition-colors gap-2"
                    >
                        <span>Sign Out</span>
                        <LogOut className="h-4 w-4" />
                    </Button>
                </div>
            </header>

            {/* ================= MAIN CONTENT ================= */}
            <main className="flex-1 relative z-10 pt-28 pb-12 px-4 md:px-8 w-full max-w-6xl mx-auto">
                {/* Mobile ID Display (Only shows on small screens) */}
                <div className="md:hidden mb-6 flex items-center justify-between bg-neutral-900/50 p-4 rounded border border-neutral-800">
                    <span className="text-sm text-neutral-400">Project ID</span>
                    <span className="font-mono text-white">{currentClientId}</span>
                </div>

                <PageTransition>
                    <Outlet />
                </PageTransition>
            </main>

            {/* ================= FOOTER ================= */}
            <footer className="border-t border-neutral-900 bg-black/50 py-6 px-8 flex justify-between items-center text-sm text-neutral-500 z-10 relative">
                <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Secure connection</span>
                </div>
                <span>© 2026 Redlix Systems</span>
            </footer>
        </div>
    );
}