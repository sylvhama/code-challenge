import { Text } from "components/Text";
import { Button } from "components/Button";
import { Logo } from "components/Logo";
import { TextField } from "components/TextField";
import styles from "./Home.module.css";

export function Home() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.HomeGrid}>
        <Logo className={styles.Logo} />
        <div className={styles.Content}>
          <Text tag="h1" size="large">
            Start by pasting the repository URL.
          </Text>
          <div className={styles.FormGrid}>
            <TextField
              label="GitHub repository URL"
              placeholder="https://"
              pattern="https://.*"
              type="url"
              hideLabel
            />
            <Button submit>Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
