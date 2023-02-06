import { ReactNode } from "react";

export type ModalType = {
  children?: ReactNode;
  isOpen: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}