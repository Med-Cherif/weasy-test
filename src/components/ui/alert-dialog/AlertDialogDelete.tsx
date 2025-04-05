import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./AlertDialog";
import Button from "../Button";

interface AlertDialogDeleteProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  handleSubmit: () => unknown;
  isPending: boolean;
}

const AlertDialogDelete = ({
  isOpen,
  isPending,
  handleSubmit,
  setIsOpen,
}: AlertDialogDeleteProps) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            remove the data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Button
            type="button"
            onClick={() => setIsOpen(false)}
            color={"muted"}
          >
            Cancel
          </Button>
          <Button
            isLoading={isPending}
            type="button"
            onClick={handleSubmit}
            color={"destructive"}
          >
            Continue
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogDelete;
