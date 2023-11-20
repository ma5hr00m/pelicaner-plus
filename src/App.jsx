import React, { useEffect } from "react";
import { loadConf } from "@/utils/loadConf";
import { Helmet } from "react-helmet";
import { useAtom } from "jotai";
import { confAtom } from "@/store/jotai";
import AsideNav from "./components/AsideNav";
import MainContainer from "./components/MainContainer";

function App() {
  const [conf, setConf] = useAtom(confAtom);

  useEffect(() => {
    (async () => {
      const yamlObject = await loadConf();
      setConf(yamlObject);
      console.log(yamlObject);
    })();
  }, []);

  return (
    <>
      <Helmet>
        <link rel="icon" href={conf.favicon} />
        <title>{conf.title}</title>
      </Helmet>
      <AsideNav></AsideNav>
      <MainContainer></MainContainer>
    </>
  );
}

export default App;
