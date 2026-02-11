import React from 'react';
import Header from '../organisms/Header';

interface PublicLayoutProps {
    children: React.ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen text-foreground flex flex-col font-sans selection:bg-primary/30">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
        </div>
    );
};

export default PublicLayout;
