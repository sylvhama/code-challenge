import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import { useOctokit } from "hooks/useOctokit";

export function useGetStars(owner: string, repo: string) {
  const octokit = useOctokit();

  const getStars = useCallback(() => {
    return octokit.request("GET /repos/{owner}/{repo}", {
      owner,
      repo,
    });
  }, [octokit, owner, repo]);

  return useQuery({
    queryKey: ["stars", owner, repo],
    queryFn: getStars,
    select: ({ data: { stargazers_count } }) => stargazers_count,
  });
}
