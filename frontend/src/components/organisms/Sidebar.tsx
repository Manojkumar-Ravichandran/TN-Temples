import React from 'react';
import Link from 'next/link';

interface SidebarProps {
    role: 'Contributor' | 'Admin';
}

const Sidebar: React.FC<SidebarProps> = ({ role }) => {
    const links = role === 'Admin'
        ? [
            { name: 'Dashboard', href: '/admin' },
            { name: 'Pending Approvals', href: '/admin/pending-temples' },
            { name: 'Manage Temples', href: '/admin/temples' },
            { name: 'Contributors', href: '/admin/contributors' },
            { name: 'Festivals', href: '/admin/festivals' },
            { name: 'Updates', href: '/admin/updates' },
        ]
        : [
            { name: 'Dashboard', href: '/dashboard' },
            { name: 'Submit Temple', href: '/submit-temple' },
            { name: 'My Submissions', href: '/my-submissions' },
            { name: 'Profile', href: '/profile' },
        ];

    return (
        <aside className="w-64 bg-secondary-bg text-foreground min-h-screen p-6 hidden lg:block border-r border-border">
            <div className="mb-10">
                <Link href="/" className="text-xl font-bold text-primary">TN Temples</Link>
                <p className="text-xs text-muted-foreground mt-1 uppercase tracking-widest">{role} Panel</p>
            </div>
            <nav className="flex flex-col gap-4">
                {links.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground hover:bg-accent/10 px-4 py-2 rounded-lg transition-all"
                    >
                        {link.name}
                    </Link>
                ))}
                <button className="text-left py-2 text-error hover:text-error/80 font-bold transition-colors mt-10">
                    Logout
                </button>
            </nav>
        </aside>
    );
};

export default Sidebar;
