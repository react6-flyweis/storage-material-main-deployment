"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FloatingQuoteButton from "./FloatingQuoteButton";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <FloatingQuoteButton />
    </QueryClientProvider>
  );
}
