import { useNotificationStore } from '../../stores/notification.store';
import { NotificationToast } from '../molecules/NotificationToast/NotificationToast';

export const NotificationProvider = () => {
  const { isOpen, message, title, type, closeNotification } =
    useNotificationStore();

  return (
    <NotificationToast
      message={message}
      title={title}
      isOpen={isOpen}
      onClose={closeNotification}
      notificationType={type}
    />
  );
};
