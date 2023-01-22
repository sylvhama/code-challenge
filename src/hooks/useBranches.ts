import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import { useOctokit } from "./useOctokit";

export function useGetBranches(owner: string, repo: string) {
  const octokit = useOctokit();

  const getBranches = useCallback(() => {
    return octokit.request(
      "GET /repos/{owner}/{repo}/branches{?protected,per_page,page}",
      {
        owner,
        repo,
      }
    );
  }, [octokit, owner, repo]);

  const enabled = Boolean(owner && repo);

  const result = useQuery({
    queryKey: ["branches", owner, repo],
    queryFn: getBranches,
    enabled,
  });

  return {
    ...result,
    loading: result.isLoading && enabled,
  };
}
