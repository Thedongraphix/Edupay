"use client";

import { ThemeProvider } from "next-themes";
import  Providers  from "@/components/Providers/PrivyProvider";

export function ProvidersContainer({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <Providers>
      {children}
      </Providers>
    </ThemeProvider>
  );
}
