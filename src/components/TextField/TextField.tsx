import { VisuallyHidden } from "components/VisuallyHidden";
import { useId } from "react";
import styles from "./TextField.module.css";

interface Props {
  label: string;
  hideLabel?: boolean;
  placeholder?: string;
  type?: HTMLInputElement["type"];
  pattern?: HTMLInputElement["pattern"];
  required?: boolean;
  error?: string;
}

export function TextField({
  label,
  placeholder,
  pattern,
  error,
  type = "text",
  hideLabel = false,
  required = false,
}: Props) {
  const inputId = useId();
  const errorId = useId();

  const labelTag = <label htmlFor={inputId}>{label}</label>;

  const hasError = Boolean(error);

  return (
    <>
      {hideLabel ? <VisuallyHidden>{labelTag}</VisuallyHidden> : labelTag}
      <input
        id={inputId}
        className={styles.TextField}
        type={type}
        pattern={pattern}
        placeholder={placeholder}
        required={required}
        autoComplete="off"
        aria-describedby={hasError ? errorId : undefined}
      />
      {hasError && (
        <p className={styles.Error} id={errorId}>
          {error}
        </p>
      )}
    </>
  );
}
