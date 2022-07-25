
import {useState} from "react";
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Input} from "./components/Input/Input";

import React from "react";


function App() {
    const [inputTextValue, setInputTextValue] = useState("");
    const [selectOpinion, setSelectOpinion] = useState("");

  return (
    <div className="wrapper">
      <Header />
        <Input inputTextValue={inputTextValue} setInputTextValue={setInputTextValue}
                selectOpinion={selectOpinion} setSelectOpinion={setSelectOpinion}/>
        <Main inputTextValue={inputTextValue} /> {/*передаём пропс из input*/}
    </div>
  );
}

export default App;
