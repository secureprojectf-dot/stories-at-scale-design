import { useState } from "react";
import { useStore } from "@/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { toast } from "sonner";
import { Plus, FolderGit2, Terminal } from "lucide-react";
import type { Project, ProjectStage, StageStatus } from "@/types";

const DEFAULT_STAGES: StageStatus[] = [
    { name: 'Requirements Analysis', status: 'pending', completionPercentage: 0 },
    { name: 'Design & Prototyping', status: 'pending', completionPercentage: 0 },
    { name: 'Development', status: 'pending', completionPercentage: 0 },
    { name: 'Testing & QA', status: 'pending', completionPercentage: 0 },
    { name: 'Deployment', status: 'pending', completionPercentage: 0 },
    { name: 'Handover & Training', status: 'pending', completionPercentage: 0 },
];

interface CreateProjectFormProps {
    trigger?: React.ReactNode;
}

export default function CreateProjectForm({ trigger }: CreateProjectFormProps) {
    const { clients, addProject } = useStore();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [formData, setFormData] = useState({
        clientId: "",
        title: "",
        description: "",
        startDate: new Date().toISOString().split('T')[0]
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.clientId || !formData.title.trim()) {
            toast.error("Required Fields Missing", { description: "Client and Project Title are mandatory." });
            return;
        }

        const newProject: Project = {
            id: crypto.randomUUID(),
            clientId: formData.clientId,
            title: formData.title.trim(),
            description: formData.description.trim(),
            stages: [...DEFAULT_STAGES],
            totalProgress: 0,
            startDate: formData.startDate || new Date().toISOString(),
            isCompleted: false
        };

        addProject(newProject);
        toast.success("Project Created", { description: `${formData.title} has been initialized.` });
        setIsDialogOpen(false);
        setFormData({
            clientId: "",
            title: "",
            description: "",
            startDate: new Date().toISOString().split('T')[0]
        });
    };

    return (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
                {trigger || (
                    <Button className="h-10 bg-white hover:bg-neutral-200 text-black rounded-sm text-xs font-bold uppercase tracking-wider px-6">
                        <Plus className="w-4 h-4 mr-2" />
                        New Project
                    </Button>
                )}
            </DialogTrigger>
            
            <DialogContent className="bg-[#050505] border-neutral-800 text-white sm:max-w-[500px] p-0 overflow-hidden">
                <DialogHeader className="p-6 border-b border-neutral-900 bg-neutral-950/50">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="p-1 bg-neutral-900 rounded border border-neutral-800">
                            <Terminal className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-[10px] font-mono text-neutral-500 uppercase">CMD: CREATE_PROJECT</span>
                    </div>
                    <DialogTitle className="text-xl font-medium tracking-tight">Initialize New Project</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    <div className="space-y-2">
                        <Label className="text-[10px] uppercase tracking-widest text-neutral-500">Assign to Client *</Label>
                        <Select
                            value={formData.clientId}
                            onValueChange={(v) => setFormData({ ...formData, clientId: v })}
                        >
                            <SelectTrigger className="bg-neutral-900/50 border-neutral-800 focus:border-white transition-colors rounded-sm h-11">
                                <SelectValue placeholder="Select a client" />
                            </SelectTrigger>
                            <SelectContent className="bg-neutral-900 border-neutral-800 text-neutral-300">
                                {clients.map(client => (
                                    <SelectItem key={client.id} value={client.id} className="focus:bg-neutral-800 focus:text-white cursor-pointer">
                                        <span className="flex items-center gap-2">
                                            <span className="font-mono text-emerald-500">{client.assignedId}</span>
                                            <span>-</span>
                                            <span>{client.name}</span>
                                        </span>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label className="text-[10px] uppercase tracking-widest text-neutral-500">Project Title *</Label>
                        <div className="relative">
                            <FolderGit2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600" />
                            <Input
                                value={formData.title}
                                onChange={e => setFormData({ ...formData, title: e.target.value })}
                                placeholder="e.g. E-commerce Platform Redesign"
                                className="pl-10 bg-neutral-900/50 border-neutral-800 focus:border-white focus:bg-black transition-colors rounded-sm h-11"
                                autoFocus
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label className="text-[10px] uppercase tracking-widest text-neutral-500">Description</Label>
                        <Textarea
                            value={formData.description}
                            onChange={e => setFormData({ ...formData, description: e.target.value })}
                            placeholder="Brief description of the project scope..."
                            className="min-h-[80px] bg-neutral-900/50 border-neutral-800 focus:border-white focus:bg-black transition-colors rounded-sm resize-none"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label className="text-[10px] uppercase tracking-widest text-neutral-500">Start Date</Label>
                        <Input
                            type="date"
                            value={formData.startDate}
                            onChange={e => setFormData({ ...formData, startDate: e.target.value })}
                            className="bg-neutral-900/50 border-neutral-800 focus:border-white focus:bg-black transition-colors rounded-sm h-11"
                        />
                    </div>

                    <div className="p-4 bg-neutral-900/30 border border-neutral-800 rounded-sm">
                        <p className="text-xs text-neutral-500">
                            <span className="text-neutral-400 font-medium">Note:</span> Project will be initialized with 6 standard stages. You can update progress for each stage after creation.
                        </p>
                    </div>

                    <DialogFooter className="pt-4">
                        <Button type="submit" className="w-full bg-white hover:bg-neutral-200 text-black font-bold tracking-wider rounded-sm h-12">
                            INITIALIZE PROJECT
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}