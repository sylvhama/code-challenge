import { VisuallyHidden } from "components/VisuallyHidden";
import { Text } from "components/Text";
import { useId } from "react";
import styles from "./TextField.module.css";
import classNames from "classnames";

interface Props {
  label: string;
  value: string;
  onChange: (nextValue: string) => void;
  hideLabel?: boolean;
  placeholder?: string;
  type?: HTMLInputElement["type"];
  pattern?: HTMLInputElement["pattern"];
  required?: boolean;
  disabled?: boolean;
  error?: string;
}

export function TextField({
  label,
  value,
  onChange,
  placeholder,
  pattern,
  error,
  type = "text",
  hideLabel = false,
  required = false,
  disabled = false,
}: Props) {
  const inputId = useId();
  const errorId = useId();

  const labelTag = <label htmlFor={inputId}>{label}</label>;

  const hasError = Boolean(error);

  return (
    <div>
      {hideLabel ? <VisuallyHidden>{labelTag}</VisuallyHidden> : labelTag}
      <input
        id={inputId}
        className={classNames({
          [styles.TextField]: true,
          [styles.HasError]: hasError,
        })}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        type={type}
        pattern={pattern}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        autoComplete="off"
        aria-describedby={hasError ? errorId : undefined}
      />
      {hasError && (
        <div aria-live="assertive">
          <Text id={errorId} color="critical">
            {error}
          </Text>
        </div>
      )}
    </div>
  );
}
