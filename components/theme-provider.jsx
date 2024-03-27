"use client";
import * as React from "react";
import { ThemeProvider as Theme } from "next-themes";

export function ThemeProvider({ children, ...props }) {
  return <Theme {...props}>{children}</Theme>;
}
