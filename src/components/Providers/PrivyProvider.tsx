'use client';

import {PrivyProvider} from '@privy-io/react-auth';

export default function Providers({children}: {children: React.ReactNode}) {
  return (
    <PrivyProvider
      appId="cm35xkh1r03bvcpeg8p67h8mn"
      config={{
        // Customize Privy's appearance in your app
        appearance: {

          theme: 'dark',
          accentColor: '#676FFF',
          showWalletLoginFirst: false,
         
        },
        // Create embedded wallets for users who don't have a wallet

        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
}