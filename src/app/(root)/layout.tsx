import type { ReactNode } from 'react';

import Footer from '@/components/share/Footer';
import NavigationBar from '@/components/share/NavigationBar';

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <>
            <NavigationBar />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
