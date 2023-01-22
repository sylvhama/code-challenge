import { useContext } from "react";

import { OctokitContext } from "contexts/OctokitContext";

export function useOctokit() {
  const context = useContext(OctokitContext);

  if (!context) throw new Error("useOctokit must be used in OctokitProvider.");

  return context;
}
