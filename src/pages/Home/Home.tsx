import { Heading } from "components/Heading";
import { Logo } from "components/Logo";
import styles from "./Home.module.css";

export function Home() {
  return (
    <div className={styles.HomeGrid}>
      <Logo className={styles.Logo} />
      <div className={styles.Content}>
        <Heading>Start by pasting the repository URL.</Heading>
      </div>
    </div>
  );
}
