import {useState, useEffect} from "react";
import Button from "./Button";
import TextAPICall from "./Text";
import ButtonStyles from "./Button.module.css"
import AppStyles from "./App.module.css"

function App() {
  const [count, setCount] = useState(0);
  const [keyword, setKeyword] = useState("");
  const countAdd = () => {
    setCount((current) => current + 1)
  }
  const onlyOne = () => {
    if(keyword !== "") {
      console.log(`CALL THE API => ${keyword}`);
    }    
  }
  const inputKeyword = (e) => {
    setKeyword(e.target.value);
  }

  useEffect(onlyOne, [keyword]);  // keyword state 변화가 있을때만 실행

  return (
    <div>
      <h1 className={AppStyles.title}>Welcome Back!</h1>
      <Button text="Continue" color={ButtonStyles.btn_tomato}/>

      <h1 className={AppStyles.title}>{count}</h1>
      <Button text="Click Me!" onClick={countAdd} color={ButtonStyles.btn_blue}/>
      <TextAPICall value={keyword} placeholder="input keyword..." onChange={inputKeyword} />
    </div>
  );
}

export default App;
 