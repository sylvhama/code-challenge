import classNames from "classnames";
import styles from "./Button.module.css";

interface Props {
  children: React.ReactNode;
  submit?: boolean;
  loading?: boolean;
  disabled?: boolean;
  large?: boolean;
  fullWidth?: boolean;
}

export function Button({
  children,
  submit = false,
  loading = false,
  disabled = false,
  large,
  fullWidth,
}: Props) {
  return (
    <button
      className={classNames({
        [styles.Button]: true,
        [styles.Large]: large,
        [styles.fullWidth]: fullWidth,
      })}
      type={submit ? "submit" : undefined}
      aria-disabled={loading || disabled}
      aria-busy={loading}
    >
      {loading ? <span aria-live="polite">Loading...</span> : children}
    </button>
  );
}
