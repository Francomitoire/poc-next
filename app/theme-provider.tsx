"use client";
import * as React from "react";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("loading layout");
  return <ChakraProvider>{children} </ChakraProvider>;
}
