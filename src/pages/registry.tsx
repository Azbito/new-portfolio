"use client";

import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { StyleRegistry, createStyleRegistry } from "styled-jsx";

export default function StyledTsxRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tsxStyleRegistry] = useState(() => createStyleRegistry());

  useServerInsertedHTML(() => {
    const styles = tsxStyleRegistry.styles();
    tsxStyleRegistry.flush();

    return <div>{styles}</div>;
  });

  return <StyleRegistry registry={tsxStyleRegistry}>{children}</StyleRegistry>;
}
