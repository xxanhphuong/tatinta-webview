import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

const useUIStore = create(
    devtools(
        persist(
            (set) => ({
                // State
                isLoading: false,
                theme: 'light',

                // Actions
                setLoading: (status) => set({ isLoading: status }),
                toggleTheme: () =>
                    set((state) => ({
                        theme: state.theme === 'light' ? 'dark' : 'light'
                    })),
            }),
            {
                name: 'ui-storage',
            }

        )
    )
);

export default useUIStore;