import MainHeader from "./MainHeader";
import MainArea from "./MainArea";
import MainFooter from "./MainFooter";

export default function MainContainer() {
  return (
    <div id="main-container">
      <MainHeader></MainHeader>
      <MainArea></MainArea>
      <MainFooter></MainFooter>
    </div>
  );
}