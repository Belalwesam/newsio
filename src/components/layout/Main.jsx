import { useState } from "react";
import Right from "./Right";
import Left from "./Left";
const Main = () => {
  const [expand, setExpand] = useState(false);
  const [homePage , setHomePage] = useState(false)
  const [source , setSource] = useState({})
  return (
    <main>
      <Left expand={expand} setHomePage = {setHomePage} setSource = {setSource}/>
      <Right setExpand={setExpand} expand={expand} homePage = {homePage} source = {source}/>
    </main>
  );
};
export default Main;
