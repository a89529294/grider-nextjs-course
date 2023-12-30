"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@nextui-org/react";
import { ReactNode } from "react";

export default function FormButton({ children }: { children: ReactNode }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" isLoading={pending}>
      {children}
    </Button>
  );
}
