import * as ToastPrimitive from '@radix-ui/react-toast';
import { useState, useCallback, type ReactNode } from 'react';
import { Button } from '../button/button';
import styles from './toast.module.css';

interface ToastData {
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}

interface ToastContextValue {
  showToast: (data: ToastData) => void;
}

export function useToast(): ToastContextValue & { ToastContainer: () => ReactNode } {
  const [open, setOpen] = useState(false);
  const [toastData, setToastData] = useState<ToastData>({ title: '' });

  const showToast = useCallback((data: ToastData) => {
    setToastData(data);
    setOpen(true);
  }, []);

  const ToastContainer = useCallback(
    () => (
      <ToastPrimitive.Provider swipeDirection="right">
        <ToastPrimitive.Root className={styles.root} open={open} onOpenChange={setOpen}>
          <ToastPrimitive.Title className={styles.title}>{toastData.title}</ToastPrimitive.Title>
          {toastData.description && (
            <ToastPrimitive.Description className={styles.description}>
              {toastData.description}
            </ToastPrimitive.Description>
          )}
          {toastData.actionLabel && (
            <ToastPrimitive.Action className={styles.action} asChild altText={toastData.actionLabel}>
              <Button variant="outlined" size="sm" onClick={toastData.onAction}>
                {toastData.actionLabel}
              </Button>
            </ToastPrimitive.Action>
          )}
        </ToastPrimitive.Root>
        <ToastPrimitive.Viewport className={styles.viewport} />
      </ToastPrimitive.Provider>
    ),
    [open, toastData]
  );

  return { showToast, ToastContainer };
}
