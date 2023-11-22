import { useAtom } from "jotai";
import { confAtom } from "@/store/jotai";

import AsideLoading from "./AsideLoading";

export default function AsideNav() {
  const [conf,] = useAtom(confAtom);

  if (conf.urls === undefined) {
    return (
      <main>
        <AsideLoading></AsideLoading>
      </main>
    );
  }

  return (
    <aside>
      <div>
        <img src={conf.logo}></img>
        <h1>Pelicaner Plus</h1>
      </div>
      <hr/>
      <ul>
      {Object.entries(conf.urls).map(([category, urls], index) => (
        <li key={index}>
          <a href={`#${category}`}>
            {category}
          </a>
        </li>
      ))}
        <li>
          <a href="/about">
            关于本站
          </a>
        </li>
      </ul>
    </aside>
  );
}