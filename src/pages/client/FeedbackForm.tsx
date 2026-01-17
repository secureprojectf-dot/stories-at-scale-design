import { useState } from "react";
import { useStore } from "@/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { MessageSquare, Send, CheckCircle2, Star } from "lucide-react";

export default function FeedbackForm() {
    const { currentClientId, projects, addSubmission } = useStore();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [rating, setRating] = useState(0);
    const [formData, setFormData] = useState({
        projectId: "",
        category: "",
        feedback: "",
        suggestions: ""
    });

    const clientProjects = projects.filter(p => p.clientId === currentClientId);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!currentClientId) return;

        if (!formData.feedback.trim()) {
            toast.error("Required field missing", { description: "Please provide your feedback." });
            return;
        }

        const submission = {
            id: crypto.randomUUID(),
            clientId: currentClientId,
            type: 'feedback' as const,
            data: { ...formData, rating },
            submittedAt: new Date().toISOString(),
            status: 'pending' as const
        };

        addSubmission(submission);
        setIsSubmitted(true);
        toast.success("Feedback submitted!", { description: "Thank you for your valuable input." });
    };

    if (isSubmitted) {
        return (
            <div className="max-w-2xl mx-auto">
                <Card className="bg-[#0A0A0A] border-neutral-800 rounded-sm">
                    <CardContent className="p-12 text-center space-y-6">
                        <div className="w-20 h-20 mx-auto bg-emerald-950/30 border border-emerald-900/50 rounded-full flex items-center justify-center">
                            <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-2xl font-medium text-white">Thank You!</h2>
                            <p className="text-neutral-500 max-w-md mx-auto">
                                Your feedback has been submitted. We truly appreciate you taking the time to help us improve.
                            </p>
                        </div>
                        <Button 
                            onClick={() => {
                                setIsSubmitted(false);
                                setFormData({ projectId: "", category: "", feedback: "", suggestions: "" });
                                setRating(0);
                            }}
                            variant="outline"
                            className="bg-transparent border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-900"
                        >
                            Submit More Feedback
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <Card className="bg-[#0A0A0A] border-neutral-800 rounded-sm">
                <CardHeader className="border-b border-neutral-900 pb-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-neutral-900 border border-neutral-800 rounded-sm">
                            <MessageSquare className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">FEEDBACK</span>
                    </div>
                    <CardTitle className="text-xl font-medium text-white">Share Your Feedback</CardTitle>
                    <CardDescription className="text-neutral-500">
                        Help us improve by sharing your experience and suggestions.
                    </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        
                        {/* Star Rating */}
                        <div className="space-y-3">
                            <Label className="text-xs uppercase tracking-widest text-neutral-500">
                                Overall Rating
                            </Label>
                            <div className="flex gap-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => setRating(star)}
                                        className="transition-transform hover:scale-110"
                                    >
                                        <Star 
                                            className={`w-8 h-8 ${star <= rating ? 'text-amber-500 fill-amber-500' : 'text-neutral-700'}`} 
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {clientProjects.length > 0 && (
                            <div className="space-y-2">
                                <Label className="text-xs uppercase tracking-widest text-neutral-500">
                                    Related Project (Optional)
                                </Label>
                                <Select
                                    value={formData.projectId}
                                    onValueChange={(v) => setFormData({ ...formData, projectId: v })}
                                >
                                    <SelectTrigger className="bg-neutral-900/50 border-neutral-800 focus:border-white transition-colors rounded-sm h-11">
                                        <SelectValue placeholder="Select a project" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-neutral-900 border-neutral-800 text-neutral-300">
                                        {clientProjects.map(p => (
                                            <SelectItem key={p.id} value={p.id}>{p.title}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        )}

                        <div className="space-y-2">
                            <Label className="text-xs uppercase tracking-widest text-neutral-500">
                                Feedback Category
                            </Label>
                            <Select
                                value={formData.category}
                                onValueChange={(v) => setFormData({ ...formData, category: v })}
                            >
                                <SelectTrigger className="bg-neutral-900/50 border-neutral-800 focus:border-white transition-colors rounded-sm h-11">
                                    <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent className="bg-neutral-900 border-neutral-800 text-neutral-300">
                                    <SelectItem value="quality">Work Quality</SelectItem>
                                    <SelectItem value="communication">Communication</SelectItem>
                                    <SelectItem value="timeline">Timeline & Delivery</SelectItem>
                                    <SelectItem value="support">Support</SelectItem>
                                    <SelectItem value="general">General</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="feedback" className="text-xs uppercase tracking-widest text-neutral-500">
                                Your Feedback *
                            </Label>
                            <Textarea
                                id="feedback"
                                value={formData.feedback}
                                onChange={e => setFormData({ ...formData, feedback: e.target.value })}
                                placeholder="Share your experience, what went well, or areas for improvement..."
                                className="min-h-[120px] bg-neutral-900/50 border-neutral-800 focus:border-white focus:bg-black transition-colors rounded-sm resize-none"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="suggestions" className="text-xs uppercase tracking-widest text-neutral-500">
                                Suggestions for Improvement
                            </Label>
                            <Textarea
                                id="suggestions"
                                value={formData.suggestions}
                                onChange={e => setFormData({ ...formData, suggestions: e.target.value })}
                                placeholder="Any suggestions on how we can serve you better..."
                                className="min-h-[80px] bg-neutral-900/50 border-neutral-800 focus:border-white focus:bg-black transition-colors rounded-sm resize-none"
                            />
                        </div>

                        <div className="pt-4">
                            <Button type="submit" className="w-full bg-white hover:bg-neutral-200 text-black font-bold h-12 rounded-sm tracking-wider uppercase text-xs">
                                <Send className="w-4 h-4 mr-2" />
                                Submit Feedback
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}