import { Routes, Route } from "react-router-dom";

import { Home } from "pages/Home";
import { Kanban } from "pages/Kanban";
import { NoMatch } from "pages/NoMatch";

import { Layout } from "components/Layout";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path=":owner/:repo" element={<Kanban />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}
