import { ReactNode } from "react";
import Navbar from "./_components/Navbar";

type Props = {
  children: ReactNode;
};
const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="h-full">
      <Navbar />
      {children}
    </div>
  );
};

export default DashboardLayout;
