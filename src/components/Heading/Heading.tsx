import styles from "./Heading.module.css";

interface Props {
  children: React.ReactNode;
  tag?: HeadingTags;
}

type HeadingTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export function Heading({ children, tag: HeadingTag = "h1" }: Props) {
  return <HeadingTag className={styles.Heading}>{children}</HeadingTag>;
}
