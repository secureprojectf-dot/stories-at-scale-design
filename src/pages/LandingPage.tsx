import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function LandingPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-950 text-white">
            <h1 className="text-4xl font-bold mb-8">Redlix Tracker</h1>
            <p className="text-neutral-400 mb-12">Client Project Management System</p>

            <div className="flex gap-6">
                <Link to="/admin">
                    <Button size="lg" variant="default" className="w-40">Admin Access</Button>
                </Link>
                <Link to="/client">
                    <Button size="lg" variant="outline" className="w-40 text-black">Client Portal</Button>
                </Link>
            </div>
        </div>
    );
}
