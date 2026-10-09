import { capsule, endpoint, text } from "lakebed/server";
import { chartHtml } from "./chart";

export default capsule({
  name: "T3 Code slopbase growth",
  schema: {},
  queries: {},
  mutations: {},
  endpoints: {
    // Lakebed owns the root HTML shell. This route serves metadata before JavaScript runs.
    share: endpoint({ method: "GET", path: "/share", readOnly: true }, () =>
      text(chartHtml, { headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "public, max-age=300" } })
    ),
  },
});
