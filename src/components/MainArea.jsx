import { useAtom } from "jotai";
import { confAtom } from "@/store/jotai";

import MainLoading from "./MainLoading";

export default function MainArea() {
  const [conf,] = useAtom(confAtom);

  if (conf.urls === undefined) {
    return (
      <main>
        <MainLoading></MainLoading>
      </main>
    );
  }

  return (
    <main>
      {Object.entries(conf.urls).map(([category, urls], index) => (
        <section key={index}>
          <h3 id={category}>{category}</h3>
          <ul>
            {urls.map((url, index) => (
              <li key={index}>
                <a href={url.url}>
                  <div>
                    <img src={url.favicon} />
                  </div>
                  <hgroup>
                    <h4>{url.title}</h4>
                    <span>{url.description}</span>
                  </hgroup>
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
