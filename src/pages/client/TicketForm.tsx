import { useState } from "react";
import { useStore } from "@/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import type { Ticket } from "@/types";

export default function TicketForm() {
    const { currentClientId, addTicket } = useStore();
    const [ticket, setTicket] = useState({
        subject: "",
        description: "",
        priority: "medium" as Ticket['priority']
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!currentClientId) return;

        const newTicket: Ticket = {
            id: crypto.randomUUID(),
            clientId: currentClientId,
            subject: ticket.subject,
            description: ticket.description,
            priority: ticket.priority,
            status: 'open',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        addTicket(newTicket);
        toast.success("Ticket raised successfully!");
        setTicket({ subject: "", description: "", priority: "medium" });
    };

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Raise Support Ticket</CardTitle>
                    <CardDescription>Report an issue or request assistance for your completed project.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="subject">Subject</Label>
                            <Input
                                id="subject"
                                value={ticket.subject}
                                onChange={e => setTicket({ ...ticket, subject: e.target.value })}
                                placeholder="e.g. Bug in login page"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="description">Issue Description</Label>
                            <Textarea
                                id="description"
                                value={ticket.description}
                                onChange={e => setTicket({ ...ticket, description: e.target.value })}
                                placeholder="Please describe the issue in detail..."
                                className="min-h-[100px]"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="priority">Priority</Label>
                            <Select
                                value={ticket.priority}
                                onValueChange={(v: Ticket['priority']) => setTicket({ ...ticket, priority: v })}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select priority" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="low">Low</SelectItem>
                                    <SelectItem value="medium">Medium</SelectItem>
                                    <SelectItem value="high">High</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <Button type="submit" className="w-full">Submit Ticket</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
