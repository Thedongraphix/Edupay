"use client";

import type { ReactNode } from 'react';
import { OnchainKitProvider } from '@coinbase/onchainkit';
import { baseSepolia } from 'wagmi/chains';
import { ThemeProvider } from "next-themes";
import { PrivyProvider } from '@privy-io/react-auth';

export function ProvidersContainer({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <PrivyProvider
        appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || "cm35xkh1r03bvcpeg8p67h8mn"}
        config={{
          appearance: {
            theme: 'dark',
            accentColor: '#676FFF',
            showWalletLoginFirst: false,
          },
          embeddedWallets: {
            createOnLogin: 'users-without-wallets',
          },
        }}
      >
        <OnchainKitProvider
          apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY || "YOUR_API_KEY"}
          chain={baseSepolia}
         
        >
          {children}
        </OnchainKitProvider>
      </PrivyProvider>
    </ThemeProvider>
  );
}
