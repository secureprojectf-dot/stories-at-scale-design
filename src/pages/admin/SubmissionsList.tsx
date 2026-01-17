import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SubmissionsList() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">Form Submissions</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Recent Submissions</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">No submissions found.</p>
                    {/* In real app, map through submissions */}
                </CardContent>
            </Card>
        </div>
    );
}
