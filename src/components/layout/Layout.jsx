import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '@/components/common';
import { useUIStore } from '@/lib/store';

const Layout = () => {
    const { t } = useTranslation();
    const { theme, toggleTheme } = useUIStore();


    const airAges = t('arrAirAge', { returnObjects: true });

    return (
        <div className="min-h-screen">
            <header className="shadow">
                <nav>
                    <LanguageSwitcher />
                </nav>
            </header>
            <main className="container mx-auto px-4 py-8">
                <button onClick={toggleTheme}>
                    Current theme: {theme}
                </button>
                <Outlet />
            </main>
            <footer className="shadow">
                Footer
            </footer>
        </div>
    );
}

export default Layout;