"use client";

import React from "react";
import { CookiesBanner } from "./index";
import FloatingContact from "./floating-contact";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <CookiesBanner />
      <FloatingContact />
    </>
  );
}

export default Layout;
