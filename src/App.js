import {useState} from "react";
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Input} from "./components/Input/Input";
import {Favorites} from "./Favorites.page"

import React from "react";
import Fuse from "fuse.js";
import {persons} from "./persons";

const likedCard = JSON.parse(localStorage.getItem("liked")) ?? [];

function App() {
    const [inputTextValue, setInputTextValue] = useState("");
    const [selectOpinion, setSelectOpinion] = useState("");

    const [likedNames, setLikedNames] = useState(likedCard);
    localStorage.setItem("liked", JSON.stringify(likedNames));
    console.log(likedNames)

    function like(name) {
        console.log(name)
        const likes = [...likedNames, name];
        setLikedNames(likes)
    }

    function dislike(name) {
        setLikedNames(likedNames.filter((likedName) => likedName !== name))
    }



    const fuse = new Fuse(persons, {
        keys: [
            'image',
            'name',
            'actor',
            'gender',
            'house',
            'wand',
            'alive'
        ],
        threshold: 0.3,
        includeScore: true
    })


    const results = fuse.search(inputTextValue)

    const personResult = inputTextValue
        ? results.map((elem) => elem.item)
        : persons

    const resultSearchSchool = personResult.filter((elem) => elem.house.includes(selectOpinion))


    return (
        <div className="wrapper">
            <Header/>
            <Input inputTextValue={inputTextValue} setInputTextValue={setInputTextValue}
                   selectOpinion={selectOpinion} setSelectOpinion={setSelectOpinion}/>

            <Main characters={resultSearchSchool} onLike={like} likedNames={likedNames}
                  onDislike={dislike}/> {/*передаём пропс из input*/}

        </div>
    );
}

export default App;
