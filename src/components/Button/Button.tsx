import classNames from "classnames";
import styles from "./Button.module.css";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  submit?: boolean;
  loading?: boolean;
  disabled?: boolean;
  large?: boolean;
  fullWidth?: boolean;
}

export function Button({
  children,
  onClick,
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
      onClick={onClick}
      type={submit ? "submit" : undefined}
      disabled={disabled || loading}
      aria-disabled={disabled}
      aria-busy={loading}
    >
      {loading ? <span aria-live="polite">Loading...</span> : children}
    </button>
  );
}
