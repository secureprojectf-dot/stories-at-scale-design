import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  const portals = [
    {
      id: 'customer',
      title: 'Customer Portal',
      label: 'Client Workspace',
      description: 'Review project milestones, approve deliverables, and manage billing.',
      path: '/auth/customer',
    },
    {
      id: 'team',
      title: 'Team Portal',
      label: 'Internal Operations',
      description: 'Access production pipelines, task assignments, and internal assets.',
      path: '/auth/team',
    },
    {
      id: 'admin',
      title: 'System Administration',
      label: 'Platform Control',
      description: 'Configure platform settings, manage user permissions, and audit logs.',
      path: '/auth/admin',
    },
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans selection:bg-yellow-400/30">
      {/* Refined Navigation - No Logo */}
      <nav className="border-b border-zinc-800 bg-[#09090b]/50 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold tracking-tight text-white">
              Dhasha Media
            </span>
            <div className="h-4 w-[1px] bg-zinc-800" />
            <span className="text-xs font-medium text-zinc-500">
              Management System
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
              <span className="text-[11px] text-zinc-500 font-medium">Node: 01_Active</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-8 py-24">
        {/* Simplified Header */}
        <div className="max-w-xl mb-16">
          <h1 className="text-3xl font-bold tracking-tight text-white mb-4">
            Workspace selection
          </h1>
          <p className="text-zinc-500 text-base leading-relaxed">
            Authorized access only. Please select the portal associated with your organizational role to manage media assets and workflows.
          </p>
        </div>

        {/* CMS Portal Cards */}
        <div className="grid md:grid-cols-3 gap-1">
          {portals.map((portal) => (
            <button
              key={portal.id}
              onClick={() => navigate(portal.path)}
              className="group flex flex-col items-start p-8 bg-zinc-900/30 border border-zinc-800 transition-all duration-300 hover:bg-zinc-900 hover:border-zinc-700 text-left relative overflow-hidden"
            >
              {/* Active Accent Line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <span className="text-[10px] font-bold text-yellow-500 tracking-wider mb-6">
                {portal.label}
              </span>
              
              <h2 className="text-xl font-semibold text-white mb-3">
                {portal.title}
              </h2>
              
              <p className="text-sm text-zinc-500 leading-relaxed mb-10">
                {portal.description}
              </p>

              <div className="mt-auto flex items-center text-xs font-bold text-zinc-400 group-hover:text-yellow-400 transition-colors">
                Get Started
                <svg 
                  className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </button>
          ))}
        </div>

        {/* System Support Bar */}
        <div className="mt-20 pt-8 border-t border-zinc-900 flex flex-col md:flex-row gap-6 justify-between items-center text-[11px] text-zinc-600 font-medium">
          <div className="flex gap-8">
            <span className="text-zinc-500 uppercase tracking-widest">© 2024 Dhasha Media Group</span>
            <a href="#" className="hover:text-yellow-400 transition-colors">Server Status</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Security Protocol</a>
          </div>
          <div className="text-zinc-700">
            Build 0.8.42_Stable
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
