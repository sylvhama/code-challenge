import { createContext } from "react";
import { Octokit } from "octokit";

export const OctokitContext = createContext<null | Octokit>(null);

interface Props {
  children: React.ReactNode;
}

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export function OctokitProvider({ children }: Props) {
  return (
    <OctokitContext.Provider value={octokit}>
      {children}
    </OctokitContext.Provider>
  );
}
