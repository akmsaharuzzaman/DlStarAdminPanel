import { FC, ReactNode } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
// Props for Modal
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?:string;
  children: ReactNode;
}
/**
 * Modal: Uses Shadcn UI Dialog for modal dialogs.
 */
export const ModalDialog: FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
}) => (
  <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>
          {description}
        </DialogDescription>
      </DialogHeader>
      <div>{children}</div>
      <div className="mt-6 flex justify-end">
        <DialogClose asChild>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </DialogClose>
      </div>
    </DialogContent>
  </Dialog>
);
