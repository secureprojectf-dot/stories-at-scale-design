import { useState } from "react";
import { useStore } from "@/store";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { Client } from "@/types";
import { toast } from "sonner";
import { Users, Plus, Search, Terminal, Hash, Building2, Mail, CreditCard, RefreshCw } from "lucide-react";

export default function ClientsList() {
    const { clients, addClient } = useStore();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [newClient, setNewClient] = useState({
        name: "",
        email: "",
        phone: "",
        companyName: "",
        assignedId: "RED-" + Math.floor(1000 + Math.random() * 9000),
    });

    // Helper to regen ID
    const generateId = () => {
        setNewClient(prev => ({ ...prev, assignedId: "RED-" + Math.floor(1000 + Math.random() * 9000) }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newClient.name || !newClient.assignedId) {
            toast.error("Required Fields Missing", { description: "Client Name and ID are mandatory." });
            return;
        }

        const client: Client = {
            id: crypto.randomUUID(),
            ...newClient,
            projectIds: [],
            createdAt: new Date().toISOString(),
        };

        addClient(client);
        toast.success("Database Updated", { description: `Client ${newClient.name} added successfully.` });
        setIsDialogOpen(false);
        setNewClient({
            name: "",
            email: "",
            phone: "",
            companyName: "",
            assignedId: "RED-" + Math.floor(1000 + Math.random() * 9000),
        });
    };

    // Filter logic
    const filteredClients = clients.filter(client => 
        client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        client.assignedId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (client.companyName && client.companyName.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            
            {/* Header / Controls */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-light tracking-tight text-white mb-2">
                        Client Registry
                    </h1>
                    <p className="text-neutral-500 font-mono text-xs uppercase tracking-widest">
                        Database // Access Control List
                    </p>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto">
                    {/* Search Bar */}
                    <div className="relative group w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600 group-focus-within:text-white transition-colors" />
                        <Input 
                            placeholder="SEARCH DATABASE..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10 h-10 bg-[#0A0A0A] border-neutral-800 rounded-sm text-xs font-mono text-white placeholder:text-neutral-700 focus:ring-0 focus:border-white transition-colors"
                        />
                    </div>

                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogTrigger asChild>
                            <Button className="h-10 bg-white hover:bg-neutral-200 text-black rounded-sm text-xs font-bold uppercase tracking-wider px-6">
                                <Plus className="w-4 h-4 mr-2" />
                                New Record
                            </Button>
                        </DialogTrigger>
                        
                        {/* --- MODAL CONTENT --- */}
                        <DialogContent className="bg-[#050505] border-neutral-800 text-white sm:max-w-[500px] p-0 overflow-hidden">
                            <DialogHeader className="p-6 border-b border-neutral-900 bg-neutral-950/50">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="p-1 bg-neutral-900 rounded border border-neutral-800">
                                        <Terminal className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-[10px] font-mono text-neutral-500 uppercase">CMD: CREATE_ENTRY</span>
                                </div>
                                <DialogTitle className="text-xl font-medium tracking-tight">Initialize Client</DialogTitle>
                            </DialogHeader>

                            <form onSubmit={handleSubmit} className="p-6 space-y-5">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2 col-span-2">
                                        <Label className="text-[10px] uppercase tracking-widest text-neutral-500">Legal Entity Name</Label>
                                        <div className="relative">
                                            <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600" />
                                            <Input
                                                value={newClient.name}
                                                onChange={e => setNewClient({ ...newClient, name: e.target.value })}
                                                placeholder="e.g. Acme Industries Ltd."
                                                className="pl-10 bg-neutral-900/50 border-neutral-800 focus:border-white focus:bg-black transition-colors rounded-sm h-11"
                                                autoFocus
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2 col-span-2">
                                        <Label className="text-[10px] uppercase tracking-widest text-neutral-500">Corporate Email</Label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600" />
                                            <Input
                                                value={newClient.email}
                                                onChange={e => setNewClient({ ...newClient, email: e.target.value })}
                                                placeholder="contact@company.com"
                                                className="pl-10 bg-neutral-900/50 border-neutral-800 focus:border-white focus:bg-black transition-colors rounded-sm h-11"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label className="text-[10px] uppercase tracking-widest text-neutral-500">Company</Label>
                                        <div className="relative">
                                            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600" />
                                            <Input
                                                value={newClient.companyName}
                                                onChange={e => setNewClient({ ...newClient, companyName: e.target.value })}
                                                placeholder="Optional"
                                                className="pl-10 bg-neutral-900/50 border-neutral-800 focus:border-white focus:bg-black transition-colors rounded-sm h-11"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label className="text-[10px] uppercase tracking-widest text-neutral-500">System ID</Label>
                                        <div className="relative flex gap-2">
                                            <div className="relative flex-1">
                                                <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600" />
                                                <Input
                                                    value={newClient.assignedId}
                                                    onChange={e => setNewClient({ ...newClient, assignedId: e.target.value })}
                                                    className="pl-10 bg-neutral-900/50 border-neutral-800 font-mono text-emerald-500 focus:border-white focus:bg-black transition-colors rounded-sm h-11"
                                                />
                                            </div>
                                            <Button type="button" variant="outline" onClick={generateId} className="h-11 px-3 border-neutral-800 hover:bg-neutral-800 hover:text-white">
                                                <RefreshCw className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                <DialogFooter className="pt-4">
                                    <Button type="submit" className="w-full bg-white hover:bg-neutral-200 text-black font-bold tracking-wider rounded-sm h-12">
                                        EXECUTE SEQUENCE
                                    </Button>
                                </DialogFooter>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            {/* Data Grid */}
            <Card className="bg-[#0A0A0A] border-neutral-800 rounded-sm overflow-hidden">
                <CardHeader className="border-b border-neutral-900 py-4 px-6 flex flex-row items-center justify-between bg-neutral-950/30">
                    <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-neutral-500" />
                        <CardTitle className="text-sm font-medium text-white uppercase tracking-wider">Registered Entities</CardTitle>
                    </div>
                    <span className="text-[10px] font-mono text-neutral-600">TOTAL: {filteredClients.length}</span>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-neutral-900/50">
                            <TableRow className="border-neutral-900 hover:bg-transparent">
                                <TableHead className="w-[150px] font-mono text-[10px] uppercase text-neutral-500 tracking-wider h-10">Access ID</TableHead>
                                <TableHead className="font-mono text-[10px] uppercase text-neutral-500 tracking-wider h-10">Client Name</TableHead>
                                <TableHead className="font-mono text-[10px] uppercase text-neutral-500 tracking-wider h-10">Organization</TableHead>
                                <TableHead className="font-mono text-[10px] uppercase text-neutral-500 tracking-wider h-10">Contact</TableHead>
                                <TableHead className="text-right font-mono text-[10px] uppercase text-neutral-500 tracking-wider h-10">Active Projects</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredClients.length > 0 ? (
                                filteredClients.map((client) => (
                                    <TableRow key={client.id} className="border-neutral-900 hover:bg-neutral-900/30 transition-colors group">
                                        <TableCell className="font-mono text-xs font-medium text-white group-hover:text-emerald-400 transition-colors">
                                            {client.assignedId}
                                        </TableCell>
                                        <TableCell className="text-sm text-neutral-300">
                                            {client.name}
                                        </TableCell>
                                        <TableCell className="text-sm text-neutral-400">
                                            {client.companyName ? (
                                                <span className="flex items-center gap-2">
                                                    <Building2 className="w-3 h-3 text-neutral-600" />
                                                    {client.companyName}
                                                </span>
                                            ) : (
                                                <span className="text-neutral-700 italic text-xs">--</span>
                                            )}
                                        </TableCell>
                                        <TableCell className="text-sm text-neutral-400 font-mono text-xs">
                                            {client.email}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <span className={`inline-flex items-center justify-center min-w-[24px] h-6 px-2 rounded-sm text-xs font-mono ${
                                                client.projectIds.length > 0 
                                                    ? "bg-neutral-800 text-white border border-neutral-700" 
                                                    : "text-neutral-600"
                                            }`}>
                                                {client.projectIds.length}
                                            </span>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={5} className="h-32 text-center text-neutral-500 border-none">
                                        <div className="flex flex-col items-center gap-2">
                                            <Search className="w-6 h-6 opacity-20" />
                                            <span className="text-xs font-mono uppercase tracking-widest">No matching records found in database.</span>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}