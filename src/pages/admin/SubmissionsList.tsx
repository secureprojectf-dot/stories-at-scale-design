import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
    FileText, 
    Search, 
    Filter, 
    Download, 
    Eye, 
    Calendar, 
    Inbox, 
    RefreshCw 
} from "lucide-react";

// Mock Data Structure (Replace with useStore data in production)
const MOCK_SUBMISSIONS = [
    { id: "LOG-9281", type: "Initial Requirements", client: "Acme Industries", date: "2026-01-17T09:30:00", status: "new", size: "2.4 MB" },
    { id: "LOG-9280", type: "Asset Bundle v2", client: "Stark Tech", date: "2026-01-16T14:15:00", status: "reviewed", size: "156 MB" },
    { id: "LOG-9278", type: "Contract Signed", client: "Wayne Ent", date: "2026-01-15T11:00:00", status: "archived", size: "1.1 MB" },
    { id: "LOG-9275", type: "Feedback Round 1", client: "Acme Industries", date: "2026-01-14T16:45:00", status: "reviewed", size: "45 KB" },
];

export default function SubmissionsList() {
    const [searchQuery, setSearchQuery] = useState("");
    
    // Simple filter logic for demonstration
    const filteredLogs = MOCK_SUBMISSIONS.filter(log => 
        log.client.toLowerCase().includes(searchQuery.toLowerCase()) || 
        log.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        log.id.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div className="space-y-2">
                    <h1 className="text-3xl font-light tracking-tight text-white">
                        Transmission Logs
                    </h1>
                    <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 uppercase tracking-widest">
                        <Inbox className="w-3 h-3" />
                        <span>Incoming Data Streams</span>
                    </div>
                </div>

                <div className="flex gap-2">
                    <Button variant="outline" className="h-9 bg-transparent border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-900 text-xs font-mono uppercase tracking-wider">
                        <RefreshCw className="w-3 h-3 mr-2" />
                        Sync
                    </Button>
                    <Button variant="outline" className="h-9 bg-transparent border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-900 text-xs font-mono uppercase tracking-wider">
                        <Download className="w-3 h-3 mr-2" />
                        Export CSV
                    </Button>
                </div>
            </div>

            {/* Controls / Filter Bar */}
            <div className="flex gap-3">
                <div className="relative flex-1 max-w-sm group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600 group-focus-within:text-white transition-colors" />
                    <Input 
                        placeholder="SEARCH LOGS (ID, CLIENT, TYPE)..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 bg-[#0A0A0A] border-neutral-800 rounded-sm text-xs font-mono text-white placeholder:text-neutral-700 focus:ring-0 focus:border-white transition-colors h-10"
                    />
                </div>
                <Button variant="outline" className="h-10 w-10 p-0 border-neutral-800 bg-[#0A0A0A] text-neutral-500 hover:text-white">
                    <Filter className="w-4 h-4" />
                </Button>
            </div>

            {/* Main Data Table */}
            <Card className="bg-[#0A0A0A] border-neutral-800 rounded-sm overflow-hidden shadow-none">
                <CardHeader className="border-b border-neutral-900 py-3 px-6 bg-neutral-950/30">
                    <div className="flex justify-between items-center">
                        <CardTitle className="text-xs font-medium text-neutral-400 uppercase tracking-widest flex items-center gap-2">
                            <FileText className="w-3 h-3" />
                            File Manifest
                        </CardTitle>
                        <span className="text-[10px] font-mono text-neutral-600">
                            DISPLAYING {filteredLogs.length} OF {MOCK_SUBMISSIONS.length}
                        </span>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    {filteredLogs.length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-neutral-900 bg-neutral-900/20">
                                        <th className="h-10 px-6 text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-normal">Log ID</th>
                                        <th className="h-10 px-6 text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-normal">Submission Type</th>
                                        <th className="h-10 px-6 text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-normal">Source (Client)</th>
                                        <th className="h-10 px-6 text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-normal">Timestamp</th>
                                        <th className="h-10 px-6 text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-normal">Status</th>
                                        <th className="h-10 px-6 text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-normal text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredLogs.map((log) => (
                                        <tr key={log.id} className="border-b border-neutral-900 hover:bg-neutral-900/40 transition-colors group">
                                            <td className="px-6 py-4 font-mono text-xs text-white group-hover:text-emerald-400 transition-colors">
                                                {log.id}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex flex-col">
                                                    <span className="text-sm text-neutral-200 font-medium">{log.type}</span>
                                                    <span className="text-[10px] text-neutral-600 font-mono">SIZE: {log.size}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-neutral-400">
                                                {log.client}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2 text-xs text-neutral-500 font-mono">
                                                    <Calendar className="w-3 h-3" />
                                                    {new Date(log.date).toLocaleDateString()}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <Badge variant="outline" className={`
                                                    rounded-sm text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 border
                                                    ${log.status === 'new' ? 'border-emerald-900 text-emerald-500 bg-emerald-950/10' : 
                                                      log.status === 'reviewed' ? 'border-blue-900 text-blue-500 bg-blue-950/10' : 
                                                      'border-neutral-800 text-neutral-500 bg-neutral-900'}
                                                `}>
                                                    {log.status === 'new' && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />}
                                                    {log.status}
                                                </Badge>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-neutral-500 hover:text-white hover:bg-neutral-800">
                                                    <Eye className="w-4 h-4" />
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        // Empty State
                        <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
                            <div className="w-16 h-16 bg-neutral-900/50 rounded-full flex items-center justify-center border border-neutral-800">
                                <Inbox className="w-8 h-8 text-neutral-700" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-sm font-medium text-white tracking-wide uppercase">No Logs Found</h3>
                                <p className="text-xs text-neutral-500 max-w-xs mx-auto">
                                    There are no matching submissions in the current query buffer.
                                </p>
                            </div>
                            {searchQuery && (
                                <Button 
                                    variant="link" 
                                    onClick={() => setSearchQuery("")}
                                    className="text-emerald-500 text-xs font-mono uppercase tracking-widest"
                                >
                                    Clear Filters
                                </Button>
                            )}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}