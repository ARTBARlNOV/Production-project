import { Suspense, useEffect } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';
import { ErrorBoundary } from './providers/ErrorBoundary';

function App() {
    const { theme } = useTheme();

    return (
        <ErrorBoundary>
            <div className={classNames('app', {}, [theme])}>
                <Suspense fallback="">
                    <Navbar />
                    <div className="content-page">
                        <Sidebar />
                        <AppRouter />
                    </div>
                </Suspense>
            </div>
        </ErrorBoundary>
    );
}

export default App;
