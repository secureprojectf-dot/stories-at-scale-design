import { useState } from "react";
import { useStore } from "@/store";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { Project, ProjectStage } from "@/types";
import { toast } from "sonner";
// Shadcn 'progress' was not installed. I will use simple HTML or install it.
// I'll stick to a simple div for progress for now to avoid install overhead if possible, or install it.
// Actually I'll use a custom progress bar.

const STAGES: ProjectStage[] = [
    'Requirements Analysis',
    'Design & Prototyping',
    'Development',
    'Testing & QA',
    'Deployment',
    'Handover & Training'
];

export default function ProjectsList() {
    const { clients, projects, updateProjectProgress } = useStore();
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    // For Update Dialog
    const [editStage, setEditStage] = useState<ProjectStage>(STAGES[0]);
    const [editProgress, setEditProgress] = useState(0);

    const handleUpdate = () => {
        if (selectedProject) {
            updateProjectProgress(selectedProject.id, editStage, editProgress);
            toast.success("Progress updated");
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold tracking-tight">Active Projects</h1>
                {/* Add Project Button could go here */}
            </div>

            <div className="grid gap-4">
                {projects.map((project) => (
                    <Card key={project.id}>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-lg font-bold">{project.title}</CardTitle>
                            <span className={`text-sm font-medium px-2 py-1 rounded ${project.isCompleted ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                                {project.isCompleted ? 'Completed' : 'Active'}
                            </span>
                        </CardHeader>
                        <CardContent>
                            <div className="mb-4 text-sm text-gray-500">
                                Client: {clients.find(c => c.id === project.clientId)?.name}
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between text-sm font-medium">
                                    <span>Overall Progress</span>
                                    <span>{project.totalProgress}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                    <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-500" style={{ width: `${project.totalProgress}%` }}></div>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mt-4">
                                    {project.stages.map((stage) => (
                                        <div key={stage.name} className="bg-gray-50 dark:bg-neutral-800 p-2 rounded text-xs">
                                            <div className="font-semibold mb-1 truncate" title={stage.name}>{stage.name}</div>
                                            <div className={`text-xs ${stage.status === 'completed' ? 'text-green-600' : stage.status === 'in-progress' ? 'text-blue-600' : 'text-gray-400'}`}>
                                                {stage.status} ({stage.completionPercentage}%)
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant="outline" size="sm" onClick={() => setSelectedProject(project)}>
                                            Update Progress
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Update Project Progress</DialogTitle>
                                        </DialogHeader>
                                        <div className="space-y-4 py-4">
                                            <div className="space-y-2">
                                                <Label>Stage</Label>
                                                <Select onValueChange={(v) => {
                                                    setEditStage(v as ProjectStage);
                                                    // Pre-fill progress?
                                                    const s = project.stages.find(s => s.name === v);
                                                    if (s) setEditProgress(s.completionPercentage);
                                                }} defaultValue={STAGES[0]}>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select Stage" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {STAGES.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label>Completion Percentage: {editProgress}%</Label>
                                                <input
                                                    type="range"
                                                    min="0"
                                                    max="100"
                                                    value={editProgress}
                                                    onChange={(e) => setEditProgress(Number(e.target.value))}
                                                    className="w-full"
                                                />
                                            </div>
                                            <Button onClick={handleUpdate} className="w-full">Save Changes</Button>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
