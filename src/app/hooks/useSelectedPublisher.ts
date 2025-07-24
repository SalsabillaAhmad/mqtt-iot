import { useState } from "react";

export function useSelectedPublisher() {
  const [selectedPublisher, setSelectedPublisher] = useState<string | null>(
    null
  );
  return {
    selectedPublisher, setSelectedPublisher
  };
}
