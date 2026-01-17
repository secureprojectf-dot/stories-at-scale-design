import { useState } from "react";
import { useStore } from "@/store";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function ClientLogin() {
    const [assignedId, setAssignedId] = useState("");
    const loginClient = useStore((state) => state.loginClient);
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (loginClient(assignedId)) {
            toast.success("Welcome!");
            navigate("/client/portal");
        } else {
            toast.error("Invalid Client ID");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-black">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Client Portal</CardTitle>
                    <CardDescription>Enter your Assigned Client ID to track your project.</CardDescription>
                </CardHeader>
                <form onSubmit={handleLogin}>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="clientId">Client ID</Label>
                            <Input
                                id="clientId"
                                placeholder="e.g. RED-1234"
                                value={assignedId}
                                onChange={(e) => setAssignedId(e.target.value)}
                            />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" className="w-full">Access Details</Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}
