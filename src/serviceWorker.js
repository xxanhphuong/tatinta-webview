/**
 * @typedef {Object} ServiceWorkerConfig
 * @property {(registration: ServiceWorkerRegistration) => void} [onSuccess]
 * @property {(registration: ServiceWorkerRegistration) => void} [onUpdate]
 * @property {(error: Error) => void} [onError]
 * @property {string} [version]
 */

// Cache version for better cache management
const CACHE_VERSION = '1.0.0';
const CACHE_NAME = `app-cache-${CACHE_VERSION}`;

// Check if running on localhost
const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);

/**
 * Register service worker
 * @param {ServiceWorkerConfig} config 
 */
export function register(config) {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
        try {
            const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
            if (publicUrl.origin !== window.location.origin) {
                console.warn('Service worker cannot be registered: different origin');
                return;
            }

            window.addEventListener('load', () => registerServiceWorker(config));
        } catch (error) {
            handleError('Registration failed', error, config);
        }
    }
}

/**
 * Register service worker with proper error handling
 * @param {ServiceWorkerConfig} config 
 */
async function registerServiceWorker(config) {
    try {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

        if (isLocalhost) {
            await checkValidServiceWorker(swUrl, config);
            logLocalHostMessage();
        } else {
            await registerValidSW(swUrl, config);
        }
    } catch (error) {
        handleError('Service worker registration failed', error, config);
    }
}

/**
 * Register valid service worker
 * @param {string} swUrl 
 * @param {ServiceWorkerConfig} config 
 */
async function registerValidSW(swUrl, config) {
    try {
        const registration = await navigator.serviceWorker.register(swUrl);

        registration.onupdatefound = () => {
            const installingWorker = registration.installing;
            if (!installingWorker) return;

            installingWorker.onstatechange = () => handleStateChange(installingWorker, config, registration);
        };

        // Set up periodic checks for updates
        setInterval(() => {
            registration.update();
        }, 1000 * 60 * 60); // Check every hour
    } catch (error) {
        handleError('SW registration failed', error, config);
    }
}

/**
 * Handle service worker state changes
 * @param {ServiceWorker} worker 
 * @param {ServiceWorkerConfig} config 
 * @param {ServiceWorkerRegistration} registration 
 */
function handleStateChange(worker, config, registration) {
    if (worker.state !== 'installed') return;

    if (navigator.serviceWorker.controller) {
        // New content available
        console.log('New content is available. Please refresh.');
        config?.onUpdate?.(registration);

        // Optional: Show notification to user
        if ('Notification' in window && Notification.permission === 'granted') {
            new Notification('Update Available', {
                body: 'New content is available. Please refresh the page.',
            });
        }
    } else {
        // Content is cached for offline use
        console.log('Content is cached for offline use.');
        config?.onSuccess?.(registration);

        // Cache critical resources
        cacheResources();
    }
}

/**
 * Cache critical resources for offline use
 */
async function cacheResources() {
    try {
        const cache = await caches.open(CACHE_NAME);
        const resourcesToCache = [
            '/',
            '/index.html',
            '/static/js/main.js',
            '/static/css/main.css',
            // Add other critical resources
        ];

        await cache.addAll(resourcesToCache);

        // Clean up old caches
        const cacheKeys = await caches.keys();
        const oldCaches = cacheKeys.filter(key => key !== CACHE_NAME);
        await Promise.all(oldCaches.map(key => caches.delete(key)));
    } catch (error) {
        console.error('Failed to cache resources:', error);
    }
}

/**
 * Check if service worker is valid
 * @param {string} swUrl 
 * @param {ServiceWorkerConfig} config 
 */
async function checkValidServiceWorker(swUrl, config) {
    try {
        const response = await fetch(swUrl);
        const contentType = response.headers.get('content-type');

        if (response.status === 404 || (contentType && !contentType.includes('javascript'))) {
            // Invalid service worker found
            const registration = await navigator.serviceWorker.ready;
            await registration.unregister();
            window.location.reload();
        } else {
            // Valid service worker found
            await registerValidSW(swUrl, config);
        }
    } catch (error) {
        console.log('No internet connection. App is running in offline mode.');
    }
}

/**
 * Handle service worker errors
 * @param {string} message 
 * @param {Error} error 
 * @param {ServiceWorkerConfig} config 
 */
function handleError(message, error, config) {
    console.error(message, error);
    config?.onError?.(error);
}

/**
 * Log localhost specific message
 */
function logLocalHostMessage() {
    console.log(
        'This web app is being served cache-first by a service worker. ' +
        'To learn more, visit https://bit.ly/CRA-PWA'
    );
}

/**
 * Unregister service worker
 */
export async function unregister() {
    if ('serviceWorker' in navigator) {
        try {
            const registration = await navigator.serviceWorker.ready;
            await registration.unregister();
        } catch (error) {
            console.error('Error unregistering service worker:', error);
        }
    }
}