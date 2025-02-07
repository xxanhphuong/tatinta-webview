// src/routes/index.jsx
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import Layout from '@/components/layout/Layout';

// Helper HOC for lazy loading
const lazyLoad = (Component) => (
    <Suspense fallback={<LoadingSpinner />}>
        <Component />
    </Suspense>
);

// Lazy loaded components by feature
const publicPages = {
    Products: lazy(() => import('@/pages/Products')),
};

// Feature-based route configurations
const routes = [
    {
        path: 'products', element: lazyLoad(publicPages.Products)
    }
];

// Main router configuration
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            {/* Public Routes */}
            <Route index element={lazyLoad(lazy(() => import('@/pages/Home')))} />

            {/* Tour Module Routes */}
            {routes.map(route => (
                <Route key={route.path} path={route.path} element={route.element} />
            ))}

            {/* 404 Route */}
            <Route path="*" element={lazyLoad(lazy(() => import('@/pages/NotFound')))} />
        </Route>
    )
);

export default router;