import { useStore } from "@/store";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
    Users, 
    FolderGit2, 
    Ticket, // Changed from TicketCheck for better compatibility
    Activity, 
    ArrowUpRight, 
    Plus, 
    Terminal, 
    BarChart3, 
    AlertCircle,
    CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function DashboardOverview() {
    // 1. Destructure with default fallbacks to prevent "undefined" errors
    const { clients = [], projects = [], tickets = [] } = useStore();

    // 2. Safely calculate system status
    const openTicketCount = tickets ? tickets.filter(t => t.status === 'open').length : 0;
    const systemHealth = openTicketCount > 5 ? "WARNING" : "OPTIMAL";

    // 3. Safe Calculations for stats
    const totalClients = clients?.length || 0;
    const activeProjects = projects ? projects.filter(p => !p.isCompleted).length : 0;
    const completedProjects = projects ? projects.filter(p => p.isCompleted).length : 0;
    const totalProjects = projects?.length || 1; // avoid divide by zero
    const successRate = Math.round((completedProjects / totalProjects) * 100);

    const stats = [
        { 
            label: "Total Clients", 
            value: totalClients, 
            icon: Users, 
            trend: "+2.4%", 
            desc: "Active Database" 
        },
        { 
            label: "Active Projects", 
            value: activeProjects, 
            icon: FolderGit2, 
            trend: "Steady", 
            desc: "In Development" 
        },
        { 
            label: "Open Tickets", 
            value: openTicketCount, 
            icon: Ticket, 
            trend: systemHealth === "WARNING" ? "High" : "Low", 
            desc: "Support Queue",
            alert: systemHealth === "WARNING"
        },
        { 
            label: "Success Rate", 
            value: `${successRate}%`, 
            icon: Activity, 
            trend: "All Time", 
            desc: "Completion Metric" 
        },
    ];

    return (
        <div className="space-y-10 animate-in fade-in duration-500">
            
            {/* Header / HUD */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-800 pb-6">
                <div>
                    <h1 className="text-3xl font-light tracking-tight text-white mb-2">
                        System Overview
                    </h1>
                    <div className="flex items-center gap-4 text-xs font-mono text-neutral-500">
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            LIVE MONITORING
                        </span>
                        <span>|</span>
                        <span>LAST UPDATED: {new Date().toLocaleTimeString()}</span>
                    </div>
                </div>
                
                <div className="flex gap-2">
                     <div className="bg-neutral-900 border border-neutral-800 px-4 py-2 flex items-center gap-3 rounded-sm">
                        <Terminal className="w-4 h-4 text-neutral-400" />
                        <span className="text-xs font-mono text-neutral-300">
                            SYS_HEALTH: <span className={systemHealth === "OPTIMAL" ? "text-emerald-500" : "text-amber-500"}>{systemHealth}</span>
                        </span>
                     </div>
                </div>
            </div>

            {/* Stat Modules */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, i) => (
                    <Card key={stat.label} className="bg-[#0A0A0A] border-neutral-800 rounded-sm hover:border-neutral-700 transition-all duration-300 group relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                            <CardTitle className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                                {stat.label}
                            </CardTitle>
                            <stat.icon className={`h-4 w-4 ${stat.alert ? "text-amber-500" : "text-neutral-600 group-hover:text-white transition-colors"}`} />
                        </CardHeader>
                        <CardContent className="relative z-10">
                            <div className="text-3xl font-medium text-white tracking-tight mb-1">{stat.value}</div>
                            <div className="flex justify-between items-end">
                                <p className="text-xs text-neutral-600 font-mono">{stat.desc}</p>
                                <span className={`text-[10px] px-1.5 py-0.5 rounded-sm border ${stat.alert ? "border-amber-900/50 text-amber-500 bg-amber-950/10" : "border-neutral-800 text-neutral-400 bg-neutral-900"}`}>
                                    {stat.trend}
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                
                {/* Activity Feed / Recent Projects */}
                <Card className="lg:col-span-2 bg-[#0A0A0A] border-neutral-800 rounded-sm shadow-none">
                    <CardHeader className="border-b border-neutral-900 py-4 flex flex-row items-center justify-between">
                        <div className="flex items-center gap-2">
                            <BarChart3 className="w-4 h-4 text-neutral-500" />
                            <CardTitle className="text-sm font-medium text-white uppercase tracking-wider">Active Operations</CardTitle>
                        </div>
                        <Button variant="link" className="h-auto p-0 text-xs text-neutral-500 hover:text-white" asChild>
                            <Link to="/admin/dashboard/projects">View All Logs</Link>
                        </Button>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="divide-y divide-neutral-900">
                            {/* Safe check for projects array length */}
                            {projects && projects.length > 0 ? (
                                projects.slice(0, 5).map(project => {
                                    const clientName = clients?.find(c => c.id === project.clientId)?.name || "Unknown";
                                    return (
                                        <div key={project.id} className="flex items-center justify-between p-4 hover:bg-neutral-900/30 transition-colors group">
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-2">
                                                    <div className={`w-1.5 h-1.5 rounded-full ${project.isCompleted ? 'bg-neutral-600' : 'bg-blue-500 animate-pulse'}`} />
                                                    <p className="text-sm font-medium text-neutral-200 group-hover:text-white transition-colors">{project.title}</p>
                                                </div>
                                                <p className="text-xs text-neutral-600 font-mono pl-3.5">CLIENT: {clientName.toUpperCase()}</p>
                                            </div>
                                            
                                            <div className="flex items-center gap-6">
                                                <div className="hidden md:block w-24 h-1 bg-neutral-900 rounded-full overflow-hidden">
                                                    <div className="h-full bg-white transition-all duration-1000" style={{ width: `${project.totalProgress}%` }} />
                                                </div>
                                                <div className="text-right min-w-[3rem]">
                                                    <span className="text-xs font-mono text-white block">{project.totalProgress}%</span>
                                                </div>
                                                <ArrowUpRight className="w-4 h-4 text-neutral-700 group-hover:text-white transition-colors" />
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <div className="p-8 text-center text-neutral-600 text-sm">
                                    No active data streams found.
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>

                {/* Control Panel / Quick Actions */}
                <Card className="bg-[#0A0A0A] border-neutral-800 rounded-sm shadow-none h-full">
                    <CardHeader className="border-b border-neutral-900 py-4">
                        <div className="flex items-center gap-2">
                            <Terminal className="w-4 h-4 text-neutral-500" />
                            <CardTitle className="text-sm font-medium text-white uppercase tracking-wider">Control Panel</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                        <Link to="/admin/dashboard/clients" className="block">
                            <Button variant="outline" className="w-full justify-between h-12 bg-transparent border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-900 hover:border-neutral-600 transition-all group">
                                <span className="flex items-center gap-2">
                                    <Plus className="w-4 h-4 text-neutral-500 group-hover:text-white" />
                                    Init New Client
                                </span>
                                <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest group-hover:text-neutral-400">CMD+N</span>
                            </Button>
                        </Link>
                        
                        <Link to="/admin/dashboard/projects" className="block">
                            <Button variant="outline" className="w-full justify-between h-12 bg-transparent border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-900 hover:border-neutral-600 transition-all group">
                                <span className="flex items-center gap-2">
                                    <FolderGit2 className="w-4 h-4 text-neutral-500 group-hover:text-white" />
                                    New Project
                                </span>
                            </Button>
                        </Link>

                        <div className="h-px bg-neutral-900 my-2" />

                        <Link to="/admin/dashboard/submissions" className="block">
                            <Button variant="ghost" className="w-full justify-start h-10 px-0 text-neutral-500 hover:text-white hover:bg-transparent transition-colors group">
                                <AlertCircle className="w-4 h-4 mr-2 group-hover:text-amber-500 transition-colors" />
                                Review Logs
                            </Button>
                        </Link>
                        
                        <div className="mt-8 p-4 bg-black border border-neutral-900 rounded-sm font-mono text-[10px] text-neutral-600 leading-relaxed overflow-hidden relative">
                            <div className="absolute top-0 left-0 w-1 h-full bg-neutral-800" />
                            <p>{`> SYSTEM CHECK...`}</p>
                            <p>{`> DATABASE CONNECTION: OK`}</p>
                            <p>{`> ENCRYPTION: AES-256`}</p>
                            <p>{`> WAITING FOR INPUT`}<span className="animate-pulse">_</span></p>
                        </div>

                    </CardContent>
                </Card>
            </div>
        </div>
    );
}