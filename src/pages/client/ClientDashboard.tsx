import { useStore } from "@/store";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle } from "lucide-react";

export default function ClientDashboard() {
    const { currentClientId, clients, projects } = useStore();

    const client = clients.find((c) => c.id === currentClientId);
    const clientProjects = projects.filter((p) => p.clientId === currentClientId);

    if (!client) return <div>Loadng...</div>;

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Welcome, {client.name}</h1>
                <p className="text-muted-foreground">Track your project progress and updates.</p>
            </div>

            {clientProjects.length === 0 ? (
                <Card>
                    <CardContent className="p-8 text-center text-muted-foreground">
                        No active projects found assigned to this ID.
                    </CardContent>
                </Card>
            ) : (
                <Tabs defaultValue={clientProjects[0].id} className="w-full">
                    {clientProjects.length > 1 && (
                        <TabsList>
                            {clientProjects.map(p => <TabsTrigger key={p.id} value={p.id}>{p.title}</TabsTrigger>)}
                        </TabsList>
                    )}

                    {clientProjects.map((project) => (
                        <TabsContent key={project.id} value={project.id} className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <div className="flex justify-between">
                                        <div>
                                            <CardTitle>{project.title}</CardTitle>
                                            <CardDescription>{project.description}</CardDescription>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-2xl font-bold">{project.totalProgress}%</div>
                                            <div className="text-xs text-muted-foreground">Overall Completion</div>
                                        </div>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4 dark:bg-gray-700">
                                        <div className="bg-green-600 h-2.5 rounded-full transition-all duration-1000" style={{ width: `${project.totalProgress}%` }}></div>
                                    </div>
                                </CardHeader>
                            </Card>

                            <div className="grid gap-6 md:grid-cols-2">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Progress Timeline</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="relative border-l border-gray-200 dark:border-gray-700 ml-3 space-y-8 pb-2">
                                            {project.stages.map((stage) => (
                                                <div key={stage.name} className="relative pl-8">
                                                    <span className={`absolute -left-[9px] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white ring-4 ring-white dark:bg-neutral-900 dark:ring-neutral-950 ${stage.status === 'completed' ? 'text-green-500' : stage.status === 'in-progress' ? 'text-blue-500' : 'text-gray-300'}`}>
                                                        {stage.status === 'completed' ? <CheckCircle2 size={20} /> : <Circle size={20} className={stage.status === 'in-progress' ? "fill-blue-500 text-blue-500 animate-pulse" : ""} />}
                                                    </span>
                                                    <h3 className="font-semibold leading-tight">{stage.name}</h3>
                                                    <p className="text-sm text-gray-500">
                                                        Status: <span className="capitalize">{stage.status.replace('-', ' ')}</span>
                                                        {stage.completionPercentage > 0 && ` (${stage.completionPercentage}%)`}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>

                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Quick Links</CardTitle>
                                        </CardHeader>
                                        <CardContent className="grid gap-2">
                                            <Button variant="outline" className="justify-start">Submit More Information</Button>
                                            <Button variant="outline" className="justify-start">Raise a Support Ticket</Button>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Project Details</CardTitle>
                                        </CardHeader>
                                        <CardContent className="text-sm space-y-2">
                                            <div className="flex justify-between border-b pb-2">
                                                <span className="text-muted-foreground">Start Date</span>
                                                <span>{new Date(project.startDate).toLocaleDateString()}</span>
                                            </div>
                                            <div className="flex justify-between border-b pb-2">
                                                <span className="text-muted-foreground">Estimated End</span>
                                                <span>TBD</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-muted-foreground">Status</span>
                                                <Badge variant={project.isCompleted ? "default" : "secondary"}>
                                                    {project.isCompleted ? "Completed" : "Active"}
                                                </Badge>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            )}
        </div>
    );
}
