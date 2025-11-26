import cn from 'clsx';
import { Toast } from 'radix-ui';
import './NotificationToast.css';
import { useEffect, useState } from 'react';
import { CloseIcon } from '../../atoms/Icons/CloseIcon';

type Props = {
  className?: string;
  title?: string;
  message: string;
  isOpen: boolean;
  onClose: (value: boolean) => void;
  notificationType: 'error' | 'info' | 'success';
};

export const NotificationToast: React.FC<Props> = ({
  className,
  title,
  message,
  isOpen,
  onClose,
  notificationType,
}) => {
  const [shouldRender, setShouldRender] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
    } else {
      if (shouldRender) {
        setIsClosing(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root
        open={true}
        onOpenChange={() => {}}
        className={cn(
          `ToastRoot fixed z-100 opacity-0 transition-all duration-300 ease-linear
            bottom-6 md:bottom-10 right-4 translate-x-0
            md:right-[5%] md:translate-x-0
            flex items-center gap-4 p-4 bg-white
            border border-element rounded-2xl
            w-[260px]
            min-h-20
            md:w-[300px]
            md:h-[60px]
            data-[state=open]:animate-toast-in-right
            data-[state=closed]:animate-toast-out-right`,
          className,
          {
            'shadow-accent-red border-accent-red': notificationType === 'error',
            'shadow-accent-green-1 border-accent-green-1':
              notificationType === 'success',
            'shadow-custom-white': notificationType === 'info',

            'show': !isClosing,
            'hide': isClosing,
          },
        )}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-8 gap-1">
          {notificationType !== 'error' && (
            <Toast.Title
              className={cn('buttons text-center', {
                'text-accent-green-1': notificationType === 'success',
                'text-primary': notificationType === 'info',
              })}
            >
              {title}
            </Toast.Title>
          )}
          <Toast.Description
            className={cn(
              'text-center body-text wrap-break-word whitespace-normal max-w-full',
              {
                'text-accent-red': notificationType === 'error',
                'text-accent-green-1': notificationType === 'success',
                'text-primary': notificationType === 'info',
              },
            )}
          >
            {message}
          </Toast.Description>
        </div>
        <Toast.Close
          className="absolute top-2 right-3"
          onClick={() => onClose(false)}
        >
          <CloseIcon
            className={cn('w-3 h-3', {
              'text-accent-red!': notificationType === 'error',
              'text-accent-green-1!': notificationType === 'success',
              'text-primary!': notificationType === 'info',
            })}
          />
        </Toast.Close>
      </Toast.Root>
      <Toast.Viewport />
    </Toast.Provider>
  );
};
