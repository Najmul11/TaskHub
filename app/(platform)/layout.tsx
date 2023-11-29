import { ClerkProvider } from "@clerk/nextjs";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const Platformlayout = ({ children }: Props) => {
  return (
    <ClerkProvider>
      {/* <QueryProvider>
        <Toaster />
        <ModalProvider />
        {children}
      </QueryProvider> */}
      {children}
    </ClerkProvider>
  );
};

export default Platformlayout;
