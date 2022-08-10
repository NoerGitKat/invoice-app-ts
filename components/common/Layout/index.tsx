import { ReactNode } from "react";
import Sidebar from "../Sidebar";

export interface ILayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
}
