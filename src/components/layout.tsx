"use client";

import React from "react";
import { CookiesBanner } from "./index";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <CookiesBanner />
    </>
  );
}

export default Layout;
