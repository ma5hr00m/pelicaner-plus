import { useAtom } from "jotai";
import { confAtom } from "@/store/jotai";

export default function MainArea() {
  const [conf, setConf] = useAtom(confAtom);

  return (
    <main>
    </main>
  );
}