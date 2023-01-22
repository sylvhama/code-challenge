import { Navigate } from "react-router-dom";
import { useDocumentTitle } from "usehooks-ts";
import { useState } from "react";

import { Text } from "components/Text";
import { Button } from "components/Button";
import { Logo } from "components/Logo";
import { TextField } from "components/TextField";
import { useGetBranches } from "hooks/useGetBranches";

import styles from "./Home.module.css";

const hasToken = Boolean(process.env.REACT_APP_GITHUB_TOKEN);

export function Home() {
  useDocumentTitle("sandpack - Home");

  const [url, setUrl] = useState("");
  const [formError, setFormError] = useState("");
  const [owner, setOwner] = useState("");
  const [repo, setRepo] = useState("");
  const { data, isError, loading } = useGetBranches(owner, repo);
  const tokenError = hasToken ? "" : "Mising REACT_APP_GITHUB_TOKEN in .env";
  const queryError = isError ? "Oops! Something went wrong. Try again." : "";

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (loading) {
      return;
    }

    setOwner("");
    setRepo("");
    setFormError("");

    const [nextOwner, nextRepo] = extractGitHubRepoPath(url);

    if (!nextOwner || !nextRepo) {
      return setFormError("Please input a valid GitHub repo URL.");
    }

    setOwner(nextOwner);
    setRepo(nextRepo);
  };

  return (
    <div className={styles.Wrapper}>
      {Boolean(data && owner && repo) && (
        <Navigate replace to={`${owner}/${repo}`} />
      )}
      <div className={styles.HomeGrid}>
        <Logo className={styles.Logo} />
        <div className={styles.Content}>
          <Text tag="h1" size="large">
            Start by pasting the repository URL.
          </Text>
          <form noValidate onSubmit={onSubmit} className={styles.FormGrid}>
            <TextField
              label="GitHub repository URL"
              placeholder="https://"
              pattern="https://.*"
              type="url"
              hideLabel
              disabled={!hasToken}
              error={formError || tokenError || queryError}
              value={url}
              onChange={setUrl}
              required
            />
            <Button loading={loading} disabled={!hasToken} submit>
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

function extractGitHubRepoPath(url: string) {
  if (!url) return [];

  const match = url.match(
    /^https?:\/\/(www\.)?github.com\/(?<owner>[\w.-]+)\/(?<name>[\w.-]+)/
  );

  if (!match || !(match.groups?.owner && match.groups?.name)) return [];

  return [match.groups.owner, match.groups.name];
}
