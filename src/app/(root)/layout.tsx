import type { ReactNode } from 'react';

import Footer from '@/components/share/Footer';
import NavigationBar from '@/components/share/NavigationBar';
import { Toaster } from '@/components/ui/sonner';

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <>
            <NavigationBar />
            {children}
            <Footer />
            <Toaster />
        </>
    );
};

export default Layout;
