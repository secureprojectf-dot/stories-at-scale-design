import { useStore } from "@/store";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FolderGit2, TicketCheck, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardOverview() {
    const { clients, projects, tickets } = useStore();

    const stats = [
        { label: "Total Clients", value: clients.length, icon: Users, color: "text-blue-500" },
        { label: "Active Projects", value: projects.filter(p => !p.isCompleted).length, icon: FolderGit2, color: "text-indigo-500" },
        { label: "Open Tickets", value: tickets.filter(t => t.status === 'open').length, icon: TicketCheck, color: "text-orange-500" },
        { label: "Completed Projects", value: projects.filter(p => p.isCompleted).length, icon: Activity, color: "text-green-500" },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground">Overview of your client projects and support tickets.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <Card key={stat.label}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                {stat.label}
                            </CardTitle>
                            <stat.icon className={`h-4 w-4 ${stat.color}`} />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Projects</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {projects.slice(0, 5).map(project => (
                                <div key={project.id} className="flex items-center justify-between border-b pb-2 last:border-0">
                                    <div>
                                        <p className="font-medium">{project.title}</p>
                                        <p className="text-sm text-muted-foreground">{clients.find(c => c.id === project.clientId)?.name}</p>
                                    </div>
                                    <div className="text-sm font-medium text-muted-foreground">
                                        {project.totalProgress}%
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <Button className="w-full justify-start" variant="outline">+ Assign New Client ID</Button>
                        <Button className="w-full justify-start" variant="outline">+ Add Completed Project</Button>
                        <Button className="w-full justify-start" variant="outline">View All Submissions</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
