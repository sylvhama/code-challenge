import { Navigate, useParams } from "react-router-dom";

import { Text } from "components/Text";
import styles from "./Kanban.module.css";
import { useQueryClient } from "@tanstack/react-query";

interface Data {
  commit: { sha: string; url: string };
  name: string;
  protected: boolean;
}

const idCol1 = "kanban-col-1";
const idCol2 = "kanban-col-2";
const idCol3 = "kanban-col-3";

export function Kanban() {
  const params = useParams();
  const queryClient = useQueryClient();
  const queryCache = queryClient.getQueryData<{ data: Data }>([
    "branches",
    params.owner,
    params.repo,
  ]);

  if (!queryCache) {
    return <Navigate to="/" replace />;
  }

  const { data } = queryCache;

  return (
    <div className={styles.Wrapper}>
      <header>
        <Text tag="h1" size="large">
          sandpack
        </Text>
        <Text size="small" color="grey1">
          A component toolkit for creating live-running code editing
          experiences, using the power of CodeSandbox.
        </Text>
      </header>
      <div className={styles.KanbanGrid}>
        <section aria-describedby={idCol1}>
          <Text id={idCol1} tag="h2" size="extra-small" color="grey1">
            In progress
          </Text>
        </section>
        <section aria-describedby={idCol2}>
          <Text id={idCol2} tag="h2" size="extra-small" color="grey1">
            Review
          </Text>
        </section>
        <section aria-describedby={idCol3}>
          <Text id={idCol3} tag="h2" size="extra-small" color="grey1">
            Ready to merge
          </Text>
        </section>
      </div>
    </div>
  );
}
