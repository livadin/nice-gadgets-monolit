import { create } from 'zustand';

export type NotificationType = 'error' | 'success' | 'info';

type NotificationState = {
  isOpen: boolean;
  message: string;
  title?: string;
  type: NotificationType;

  showNotification: (
    message: string,
    type?: NotificationType,
    title?: string,
    duration?: number
  ) => void;

  closeNotification: () => void;
};

let timeoutId: number;

export const useNotificationStore = create<NotificationState>((set) => ({
  isOpen: false,
  message: '',
  title: '',
  type: 'info',

  showNotification: (message, type = 'info', title = '', duration = 3000) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    set({
      isOpen: true,
      message,
      title,
      type,
    });

    timeoutId = setTimeout(() => {
      set({ isOpen: false });
    }, duration);
  },

  closeNotification: () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    set({ isOpen: false });
  },
}));