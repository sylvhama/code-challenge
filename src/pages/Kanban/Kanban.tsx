import { Link, Navigate, useParams } from "react-router-dom";
import { useLocalStorage, useDocumentTitle } from "usehooks-ts";

import { Text } from "components/Text";
import { Icon } from "components/Icon";

import { Names } from "./types";
import { List, Stars } from "./components";
import styles from "./Kanban.module.css";
import { useGetBranches } from "hooks/useGetBranches";

const idCol1 = "kanban-col-1";
const idCol2 = "kanban-col-2";
const idCol3 = "kanban-col-3";

export function Kanban() {
  useDocumentTitle("sandpack - Kanban");

  const params = useParams();
  const { data, isError, loading } = useGetBranches(
    params.owner || "",
    params.repo || ""
  );
  const path = `${params.owner}/${params.repo}`;
  const [storedInReview, seStoredtInReview] = useLocalStorage<Names>(
    `${path}/review`,
    []
  );
  const [storedInReady, setStoredInReady] = useLocalStorage<Names>(
    `${path}/ready`,
    []
  );

  if (isError || !params.owner || !params.repo) {
    return <Navigate to="/" replace />;
  }

  if (loading) return null;

  const inProgress: Names = [];
  const inReview: Names = [];
  const inReady: Names = [];

  data?.data.forEach(({ name }) => {
    if (storedInReview.includes(name)) {
      inReview.push(name);
    } else if (storedInReady.includes(name)) {
      inReady.push(name);
    } else {
      inProgress.push(name);
    }
  });

  return (
    <div className={styles.Wrapper}>
      <Link to="/" aria-label="Home" className={styles.Link}>
        <Icon source="left-arrow" />
      </Link>
      <Stars className={styles.Stars} repo={params.repo} owner={params.owner} />
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
            In progress ({inProgress.length})
          </Text>
          <List
            branches={inProgress}
            onRightClick={(clickedBranch: string) => {
              seStoredtInReview([clickedBranch, ...inReview]);
            }}
          />
        </section>
        <section aria-describedby={idCol2}>
          <Text id={idCol2} tag="h2" size="extra-small" color="grey1">
            Review ({inReview.length})
          </Text>
          <List
            branches={inReview}
            onLeftClick={(clickedBranch: string) => {
              const filteredInReview = inReview.filter((inReviewBranch) => {
                return inReviewBranch !== clickedBranch;
              });
              seStoredtInReview(filteredInReview);
            }}
            onRightClick={(clickedBranch: string) => {
              const filteredInReview = inReview.filter((inReviewBranch) => {
                return inReviewBranch !== clickedBranch;
              });
              seStoredtInReview(filteredInReview);
              setStoredInReady([clickedBranch, ...inReady]);
            }}
          />
        </section>
        <section aria-describedby={idCol3}>
          <Text id={idCol3} tag="h2" size="extra-small" color="grey1">
            Ready to merge ({inReady.length})
          </Text>
          <List
            branches={inReady}
            onLeftClick={(clickedBranch: string) => {
              const filteredInReady = inReady.filter((inReadyBranch) => {
                return inReadyBranch !== clickedBranch;
              });
              setStoredInReady(filteredInReady);
              seStoredtInReview([clickedBranch, ...inReview]);
            }}
          />
        </section>
      </div>
    </div>
  );
}
