'use client';

import React from 'react';
import Sidebar from '../organisms/Sidebar';
import { Search, Bell, Sun, Moon, LogOut, Monitor } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';

interface DashboardLayoutProps {
    children: React.ReactNode;
    role: 'Contributor' | 'Admin';
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, role }) => {
    const { theme, setTheme } = useTheme();
    const router = useRouter();
    const [user, setUser] = React.useState<any>(null);
    const [isProfileOpen, setIsProfileOpen] = React.useState(false);
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const toggleTheme = () => {
        if (theme === 'system') setTheme('dark');
        else if (theme === 'dark') setTheme('light');
        else setTheme('system');
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        router.push('/login');
    };

    const userInitial = user?.name?.charAt(0) || 'U';

    return (
        <div className="flex min-h-screen bg-background text-foreground transition-colors duration-300">
            <Sidebar role={role} />
            <div className="flex-1 flex flex-col min-w-0">
                <header className="bg-background/80 border-b border-border py-4 px-8 flex justify-between items-center h-20 backdrop-blur-md sticky top-0 z-40 transition-colors">
                    <div className="flex items-center gap-2 text-sm font-bold text-gray-500">
                        <span>Internal</span>
                        <span className="text-gray-700">›</span>
                        <span className="text-white">Dashboard</span>
                    </div>

                    <div className="flex-1 max-w-xl mx-8">
                        <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
                            <input
                                type="text"
                                placeholder="Search entries..."
                                className="w-full bg-secondary-bg border border-border rounded-xl py-2.5 pl-12 pr-4 text-sm focus:outline-none focus:border-primary/50 transition-all placeholder:text-muted-foreground/50"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <button
                            onClick={toggleTheme}
                            className="p-2.5 rounded-xl border border-border bg-secondary-bg hover:bg-accent/10 transition-all text-muted-foreground hover:text-foreground flex items-center gap-2 min-w-[45px] justify-center"
                            aria-label="Toggle theme"
                        >
                            {mounted ? (
                                <>
                                    {theme === 'system' ? <Monitor size={20} /> : theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                                    <span className="text-[10px] font-black uppercase hidden xl:block">
                                        {theme === 'system' ? 'Auto' : theme === 'dark' ? 'Dark' : 'Light'}
                                    </span>
                                </>
                            ) : (
                                <div className="w-5 h-5" />
                            )}
                        </button>

                        <button className="relative p-2.5 rounded-xl border border-border bg-secondary-bg hover:bg-accent/10 transition-all text-muted-foreground hover:text-foreground">
                            <Bell size={20} />
                            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-primary rounded-full border-2 border-background" />
                        </button>

                        <div className="relative">
                            <button
                                onClick={() => setIsProfileOpen(!isProfileOpen)}
                                className="flex items-center gap-4 pl-6 border-l border-border group cursor-pointer"
                            >
                                <div className="text-right hidden sm:block">
                                    <p className="text-sm font-black text-foreground leading-none group-hover:text-primary transition-colors">{user?.name || 'Loading...'}</p>
                                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1">
                                        {user?.role === 'Admin' ? 'Administrator' : 'Contributor • Tier 3'}
                                    </p>
                                </div>
                                <div className="w-11 h-11 rounded-full border-2 border-border p-0.5 group-hover:border-primary/30 transition-all">
                                    <div className="w-full h-full rounded-full bg-gradient-to-tr from-primary to-orange-600 flex items-center justify-center text-white font-black text-lg shadow-lg">
                                        {userInitial}
                                    </div>
                                </div>
                            </button>

                            {isProfileOpen && (
                                <>
                                    <div className="fixed inset-0 z-[-1]" onClick={() => setIsProfileOpen(false)} />
                                    <div className="absolute right-0 mt-4 w-56 bg-background border border-border rounded-2xl shadow-2xl p-2 animate-in fade-in zoom-in-95 duration-200 origin-top-right">
                                        <div className="px-4 py-3 border-b border-border mb-2">
                                            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Account Status</p>
                                            <p className="text-xs font-bold text-green-500 mt-0.5 flex items-center gap-1.5">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                                Active Session
                                            </p>
                                        </div>
                                        <button
                                            onClick={handleLogout}
                                            className="flex items-center gap-3 w-full px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-500/10 rounded-xl transition-all"
                                        >
                                            <LogOut size={18} />
                                            Sign Out
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </header>
                <main className="p-8 lg:p-12 max-w-7xl mx-auto w-full">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
