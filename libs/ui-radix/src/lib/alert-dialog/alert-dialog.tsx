import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { type ReactNode } from 'react';
import { Button } from '../button/button';
import styles from './alert-dialog.module.css';

interface AlertDialogProps {
  trigger: ReactNode;
  title: string;
  description: string;
  cancelLabel?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function AlertDialog({
  trigger,
  title,
  description,
  cancelLabel = 'Cancel',
  actionLabel = 'Confirm',
  onAction,
}: AlertDialogProps) {
  return (
    <AlertDialogPrimitive.Root>
      <AlertDialogPrimitive.Trigger asChild>{trigger}</AlertDialogPrimitive.Trigger>
      <AlertDialogPrimitive.Portal>
        <AlertDialogPrimitive.Overlay className={styles.overlay} />
        <AlertDialogPrimitive.Content className={styles.content}>
          <AlertDialogPrimitive.Title className={styles.title}>
            {title}
          </AlertDialogPrimitive.Title>
          <AlertDialogPrimitive.Description className={styles.description}>
            {description}
          </AlertDialogPrimitive.Description>
          <div className={styles.actions}>
            <AlertDialogPrimitive.Cancel asChild>
              <Button variant="outlined">{cancelLabel}</Button>
            </AlertDialogPrimitive.Cancel>
            <AlertDialogPrimitive.Action asChild>
              <Button variant="default" onClick={onAction}>
                {actionLabel}
              </Button>
            </AlertDialogPrimitive.Action>
          </div>
        </AlertDialogPrimitive.Content>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
  );
}
