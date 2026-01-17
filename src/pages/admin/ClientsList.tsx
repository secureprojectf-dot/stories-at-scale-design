import { useState } from "react";
import { useStore } from "@/store";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { Client } from "@/types";
import { toast } from "sonner";

export default function ClientsList() {
    const { clients, addClient } = useStore();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [newClient, setNewClient] = useState({
        name: "",
        email: "",
        phone: "",
        companyName: "",
        assignedId: "RED-" + Math.floor(1000 + Math.random() * 9000), // Simple ID Gen
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newClient.name || !newClient.assignedId) {
            toast.error("Name and ID are required");
            return;
        }

        const client: Client = {
            id: crypto.randomUUID(),
            ...newClient,
            projectIds: [],
            createdAt: new Date().toISOString(),
        };

        addClient(client);
        toast.success("Client added successfully");
        setIsDialogOpen(false);
        setNewClient({
            name: "",
            email: "",
            phone: "",
            companyName: "",
            assignedId: "RED-" + Math.floor(1000 + Math.random() * 9000),
        });
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold tracking-tight">Clients</h1>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                        <Button>+ Add New Client</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Add New Client</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4 text-black dark:text-white">
                            <div className="space-y-2">
                                <Label>Full Name</Label>
                                <Input
                                    value={newClient.name}
                                    onChange={e => setNewClient({ ...newClient, name: e.target.value })}
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Assigned ID (Login ID)</Label>
                                <Input
                                    value={newClient.assignedId}
                                    onChange={e => setNewClient({ ...newClient, assignedId: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Email</Label>
                                <Input
                                    value={newClient.email}
                                    onChange={e => setNewClient({ ...newClient, email: e.target.value })}
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Company</Label>
                                <Input
                                    value={newClient.companyName}
                                    onChange={e => setNewClient({ ...newClient, companyName: e.target.value })}
                                    placeholder="Tech Corp"
                                />
                            </div>
                            <Button type="submit" className="w-full">Create Client</Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>All Clients</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Assigned ID</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Company</TableHead>
                                <TableHead>Projects</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {clients.map((client) => (
                                <TableRow key={client.id}>
                                    <TableCell className="font-medium">{client.assignedId}</TableCell>
                                    <TableCell>{client.name}</TableCell>
                                    <TableCell>{client.email}</TableCell>
                                    <TableCell>{client.companyName || "-"}</TableCell>
                                    <TableCell>{client.projectIds.length}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
