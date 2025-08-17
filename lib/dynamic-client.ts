"use client";
import dynamic from "next/dynamic";

export const noSSR = <T extends object>(loader: () => Promise<any>) =>
  dynamic<T>(loader, { ssr: false });
