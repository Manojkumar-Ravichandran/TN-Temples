import React from 'react';
import Header from '../organisms/Header';

interface PublicLayoutProps {
    children: React.ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-6 py-8">
                {children}
            </main>
            <footer className="bg-white border-t py-8">
                <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} TN Temples - Preserving Spiritual Heritage.
                </div>
            </footer>
        </div>
    );
};

export default PublicLayout;
