import { useStore } from "@/store";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { Ticket } from "@/types";

export default function TicketsList() {
    const { tickets, updateTicketStatus, clients } = useStore();

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">Support Tickets</h1>

            <Card>
                <CardHeader>
                    <CardTitle>All Tickets</CardTitle>
                </CardHeader>
                <CardContent>
                    {tickets.length === 0 ? (
                        <p className="text-muted-foreground">No tickets found.</p>
                    ) : (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Subject</TableHead>
                                    <TableHead>Client</TableHead>
                                    <TableHead>Priority</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {tickets.map(ticket => (
                                    <TableRow key={ticket.id}>
                                        <TableCell>
                                            <Select
                                                defaultValue={ticket.status}
                                                onValueChange={(v) => updateTicketStatus(ticket.id, v as Ticket['status'])}
                                            >
                                                <SelectTrigger className="w-[130px]">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="open">Open</SelectItem>
                                                    <SelectItem value="in-progress">In Progress</SelectItem>
                                                    <SelectItem value="resolved">Resolved</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </TableCell>
                                        <TableCell className="font-medium">{ticket.subject}</TableCell>
                                        <TableCell>{clients.find(c => c.id === ticket.clientId)?.name || 'Unknown'}</TableCell>
                                        <TableCell>
                                            <Badge variant={ticket.priority === 'high' ? 'destructive' : ticket.priority === 'medium' ? 'secondary' : 'outline'}>
                                                {ticket.priority}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>{new Date(ticket.createdAt).toLocaleDateString()}</TableCell>
                                        <TableCell>
                                            <Button variant="ghost" size="sm">View Details</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
