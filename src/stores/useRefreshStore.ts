import { create } from 'zustand';

type RefreshState = {
  token: number;
  triggerRefresh: () => void;
  reset: () => void;
};

export const useRefreshStore = create<RefreshState>((set) => ({
  token: 0,
  triggerRefresh: () => {set((s) => ({ token: s.token + 1 }))},
  reset: () => set({ token: 0 }),
}));
