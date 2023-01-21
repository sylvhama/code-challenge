import classNames from "classnames";

import styles from "./Text.module.css";

interface Props {
  children: React.ReactNode;
  tag?: TextTags;
  size?: "regular" | "small";
}

type TextTags = "p" | "div" | "span";

export function Text({
  children,
  tag: TextTag = "p",
  size = "regular",
}: Props) {
  return (
    <TextTag
      className={classNames({
        [styles.Text]: true,
        [styles.Regular]: size === "regular",
        [styles.Small]: size === "small",
      })}
    >
      {children}
    </TextTag>
  );
}
