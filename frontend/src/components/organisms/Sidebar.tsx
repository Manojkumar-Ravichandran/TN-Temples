import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    PlusCircle,
    History,
    User,
    Settings,
    LogOut,
    ClipboardList,
    Users,
    Calendar,
    Megaphone
} from 'lucide-react';

import { useRouter } from 'next/navigation';

interface SidebarProps {
    role: 'Contributor' | 'Admin';
}

const Sidebar: React.FC<SidebarProps> = ({ role }) => {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('user');
        router.push('/login');
    };

    const sections = [
        // ... (rest of sections keep same)
        {
            title: 'MAIN',
            links: role === 'Admin'
                ? [
                    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
                    { name: 'Review Queue', href: '/admin/pending-temples', icon: ClipboardList },
                    { name: 'Temple Directory', href: '/admin/temples', icon: PlusCircle },
                    { name: 'Manage Contributors', href: '/admin/contributors', icon: Users },
                    { name: 'System Logs', href: '/admin/logs', icon: History },
                ]
                : [
                    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
                    { name: 'Submit Temple', href: '/submit-temple', icon: PlusCircle },
                    { name: 'My Submissions', href: '/my-submissions', icon: History },
                    { name: 'Review Queue', href: '/review-queue', icon: ClipboardList },
                ]
        },
        {
            title: 'ACCOUNT',
            links: [
                { name: 'Profile', href: '/profile', icon: User },
                { name: 'Settings', href: '/settings', icon: Settings },
            ]
        }
    ];

    return (
        <aside className="w-72 bg-background lg:bg-secondary-bg min-h-screen flex flex-col border-r border-border sticky top-0">
            <div className="p-8 mb-4">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                        <span className="text-white text-xl">🏛️</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg font-black tracking-tighter leading-none text-foreground uppercase">TN Temples</span>
                        <span className="text-[10px] text-primary font-bold tracking-widest uppercase">Admin Portal</span>
                    </div>
                </Link>
            </div>

            <nav className="flex-1 px-4 flex flex-col gap-8">
                {sections.map((section) => (
                    <div key={section.title}>
                        <p className="px-4 text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-4">
                            {section.title}
                        </p>
                        <div className="flex flex-col gap-1">
                            {section.links.map((link) => {
                                const Icon = link.icon;
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all duration-300 group ${isActive
                                            ? 'bg-primary/10 text-primary shadow-[inset_0_0_0_1px_rgba(236,127,19,0.2)]'
                                            : 'text-muted-foreground hover:text-foreground hover:bg-accent/5'
                                            }`}
                                    >
                                        <Icon size={20} className={isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground transition-colors'} />
                                        <span className="text-sm tracking-tight">{link.name}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </nav>

            <div className="p-4 border-t border-border">
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 w-full px-4 py-4 rounded-xl font-bold text-muted-foreground hover:text-red-500 hover:bg-red-500/5 transition-all group"
                >
                    <LogOut size={20} className="text-muted-foreground group-hover:text-red-500 transition-colors" />
                    <span className="text-sm font-black uppercase tracking-widest">Logout</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
