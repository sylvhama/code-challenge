import classNames from "classnames";

import styles from "./Text.module.css";

interface Props {
  children: React.ReactNode;
  id?: string;
  tag?: PossibleTags;
  size?: "extra-small" | "small" | "regular" | "large";
  color?: "grey1" | "critical";
}

type PossibleTags =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "strong"
  | "em"
  | "div"
  | "span";

export function Text({
  children,
  id,
  color,
  tag: Element = "p",
  size = "regular",
}: Props) {
  return (
    <Element
      id={id}
      className={classNames({
        [styles.Text]: true,
        [styles.Large]: size === "large",
        [styles.Regular]: size === "regular",
        [styles.Small]: size === "small",
        [styles.ExtraSmall]: size === "extra-small",
        [styles.Grey1]: color === "grey1",
        [styles.Critical]: color === "critical",
      })}
    >
      {children}
    </Element>
  );
}
