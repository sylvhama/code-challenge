import classNames from "classnames";

import { Icon } from "components/Icon";
import { VisuallyHidden } from "components/VisuallyHidden";
import { useGetStars } from "hooks/useGetStars";

import styles from "./Stars.module.css";

interface Props {
  owner: string;
  repo: string;
  className?: string;
}

export function Stars({ owner, repo, className }: Props) {
  const { isLoading, isError, data } = useGetStars(owner, repo);

  if (isLoading || isError || data == null) {
    return null;
  }

  const formattedCount = Intl.NumberFormat("en-US", {
    notation: "compact",
  }).format(data);

  return (
    <>
      <div aria-hidden="true" className={classNames(styles.Stars, className)}>
        <Icon source="star" />
        {formattedCount}
      </div>
      <VisuallyHidden>
        <p>
          The repo {owner}/{repo} has {formattedCount}{" "}
          {data > 1 ? "stars" : "star"}.
        </p>
      </VisuallyHidden>
    </>
  );
}
