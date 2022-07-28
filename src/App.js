import {useState} from "react";
import {Main} from "./components/Main/Main";
import {Favorites} from "./components/Favorites/Favorites.page"
import {BrowserRouter, Routes, Route} from "react-router-dom";

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

    if (window.location.pathname === "/liked") {
        return <Favorites characters={resultSearchSchool} onLike={like} likedNames={likedNames}
                          onDislike={dislike}/>;
    }

    return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Main characters={resultSearchSchool} onLike={like} likedNames={likedNames}
                                  onDislike={dislike} setInputTextValue={setInputTextValue}
                                  setSelectOpinion={setSelectOpinion}/>
                        }/>
                    <Route
                        path="liked"
                        element={
                            <Favorites/>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );
}

export default App;
