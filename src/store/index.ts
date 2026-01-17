import { create } from 'zustand';
import type { Client, Project, Ticket, ProjectStage } from '@/types';
import { MOCK_CLIENTS, MOCK_PROJECTS, MOCK_TICKETS } from '@/lib/mockData';

interface AppState {
    // Data
    clients: Client[];
    projects: Project[];
    tickets: Ticket[];

    // Auth
    isAdminLoggedIn: boolean;
    currentClientId: string | null; // If client logged in

    // Actions
    loginAdmin: (password: string) => boolean;
    logoutAdmin: () => void;

    loginClient: (assignedId: string) => boolean;
    logoutClient: () => void;

    addClient: (client: Client) => void;
    updateProjectProgress: (projectId: string, stageName: ProjectStage, progress: number) => void;
    addTicket: (ticket: Ticket) => void;
    updateTicketStatus: (ticketId: string, status: Ticket['status']) => void;
}

export const useStore = create<AppState>((set, get) => ({
    clients: MOCK_CLIENTS,
    projects: MOCK_PROJECTS,
    tickets: MOCK_TICKETS,

    isAdminLoggedIn: false,
    currentClientId: null,

    loginAdmin: (password) => {
        // Simple mock auth
        if (password === 'admin123') {
            set({ isAdminLoggedIn: true });
            return true;
        }
        return false;
    },

    logoutAdmin: () => set({ isAdminLoggedIn: false }),

    loginClient: (assignedId) => {
        const client = get().clients.find(c => c.assignedId === assignedId);
        if (client) {
            set({ currentClientId: client.id });
            return true;
        }
        return false;
    },

    logoutClient: () => set({ currentClientId: null }),

    addClient: (client) => set((state) => ({ clients: [...state.clients, client] })),

    updateProjectProgress: (projectId, stageName, progress) => set((state) => {
        const projects = state.projects.map(p => {
            if (p.id !== projectId) return p;

            const newStages = p.stages.map(s => {
                if (s.name === stageName) {
                    return { ...s, completionPercentage: progress, status: progress === 100 ? 'completed' : progress > 0 ? 'in-progress' : 'pending' } as const;
                }
                return s;
            });

            // Recalc total
            const total = newStages.reduce((acc, s) => acc + s.completionPercentage, 0) / newStages.length;

            return { ...p, stages: newStages, totalProgress: Math.round(total) };
        });
        return { projects };
    }),

    addTicket: (ticket) => set((state) => ({ tickets: [...state.tickets, ticket] })),

    updateTicketStatus: (ticketId, status) => set((state) => ({
        tickets: state.tickets.map(t => t.id === ticketId ? { ...t, status } : t)
    })),
}));
