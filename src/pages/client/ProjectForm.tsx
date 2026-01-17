import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function ProjectForm() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        budget: "",
        timeline: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would submit to backend.
        toast.success("Project details submitted successfully!");
        setFormData({ title: "", description: "", budget: "", timeline: "" });
    };

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Submit Project Details</CardTitle>
                    <CardDescription>Provide information about your project requirements.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="title">Project Title</Label>
                            <Input
                                id="title"
                                value={formData.title}
                                onChange={e => setFormData({ ...formData, title: e.target.value })}
                                placeholder="e.g. Website Redesign"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                value={formData.description}
                                onChange={e => setFormData({ ...formData, description: e.target.value })}
                                placeholder="Describe your project goals and requirements..."
                                className="min-h-[100px]"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="budget">Estimated Budget</Label>
                                <Input
                                    id="budget"
                                    value={formData.budget}
                                    onChange={e => setFormData({ ...formData, budget: e.target.value })}
                                    placeholder="$5,000 - $10,000"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="timeline">Timeline</Label>
                                <Input
                                    id="timeline"
                                    value={formData.timeline}
                                    onChange={e => setFormData({ ...formData, timeline: e.target.value })}
                                    placeholder="e.g. 2 months"
                                />
                            </div>
                        </div>
                        <Button type="submit" className="w-full">Submit</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
