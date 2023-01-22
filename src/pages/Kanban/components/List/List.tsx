import { Icon } from "components/Icon";
import type { Names } from "pages/Kanban/types";
import styles from "./List.module.css";

interface Props {
  branches: Names;
  onLeftClick?: (branch: string) => void;
  onRightClick?: (branch: string) => void;
}

export function List({ branches, onLeftClick, onRightClick }: Props) {
  const isLeftButtonActive = Boolean(onLeftClick);
  const isRightButtonActive = Boolean(onRightClick);
  return (
    <ul className={styles.List}>
      {branches.map((branch) => (
        <li className={styles.Item} key={branch}>
          <button
            className={styles.ButtonStyle}
            type="button"
            onClick={
              isLeftButtonActive ? () => onLeftClick!(branch) : undefined
            }
            aria-disabled={!isLeftButtonActive}
            aria-label="Move to column on the left"
          >
            <Icon source="left-chevron" />
          </button>
          <span>{branch}</span>
          <button
            className={styles.ButtonStyle}
            type="button"
            onClick={
              isRightButtonActive ? () => onRightClick!(branch) : undefined
            }
            aria-disabled={!isRightButtonActive}
            aria-label="Move to column on the right"
          >
            <Icon source="right-chevron" />
          </button>
        </li>
      ))}
    </ul>
  );
}
