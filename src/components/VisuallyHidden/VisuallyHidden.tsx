import styles from "./VisuallyHidden.module.css";

interface Props {
  children: React.ReactNode;
}

export function VisuallyHidden({ children }: Props) {
  return <div className={styles.VisuallyHidden}>{children}</div>;
}
