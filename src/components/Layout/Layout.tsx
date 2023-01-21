import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

export function Layout() {
  return (
    <main className={styles.Layout}>
      <Outlet />
    </main>
  );
}
