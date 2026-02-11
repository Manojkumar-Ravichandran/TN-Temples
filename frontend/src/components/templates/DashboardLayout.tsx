import React from 'react';
import Sidebar from '../organisms/Sidebar';

interface DashboardLayoutProps {
    children: React.ReactNode;
    role: 'Contributor' | 'Admin';
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, role }) => {
    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar role={role} />
            <div className="flex-1 flex flex-col">
                <header className="bg-white border-b py-4 px-8 flex justify-between items-center h-16">
                    <h2 className="text-xl font-semibold text-gray-800">
                        {role} Portal
                    </h2>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-500 font-medium">Welcome, Manoj</span>
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                            M
                        </div>
                    </div>
                </header>
                <main className="p-8">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
