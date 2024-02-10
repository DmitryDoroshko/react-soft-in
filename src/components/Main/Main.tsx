import { Countries } from "../Countries/Countries.tsx";
import { Cities } from "../Cities/Cities.tsx";

export function Main() {
  return <main className={"container main slide-in-bottom"}>
    <Countries />
    <Cities />
  </main>
}
