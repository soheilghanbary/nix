'use client';
import { ThemeProvider } from 'next-themes';
import type { PropsWithChildren } from 'react';
import { QueryProvider } from './query-provider';
import { ToastProvider } from './toast-provider';

export default function Providers({ children }: PropsWithChildren) {
  return (
    <QueryProvider>
      <ThemeProvider attribute="class" enableColorScheme defaultTheme="light">
        {children}
        <ToastProvider />
      </ThemeProvider>
    </QueryProvider>
  );
}
