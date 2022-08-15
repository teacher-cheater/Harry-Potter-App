import { useState } from "react";
import { Main } from "./components/Main/Main";
import { Favorites } from "./components/Favorites/Favorites.page.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Fuse from "fuse.js";
import { person } from "./person";

const likedCard = JSON.parse(localStorage.getItem("liked")) ?? [];

function App() {
    const [inputTextValue, setInputTextValue] = useState("");
    const [selectOpinion, setSelectOpinion] = useState("");

    const [likedNames, setLikedNames] = useState(likedCard);
    localStorage.setItem("liked", JSON.stringify(likedNames));

    function like(name) {
        const likes = [...likedNames, name];
        setLikedNames(likes)
    }

    function dislike(name) {
        setLikedNames(likedNames.filter((likedName) => likedName !== name))
    }

    const fuse = new Fuse(person, {
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
        : person

    const resultSearchSchool = personResult.filter((elem) => elem.house.includes(selectOpinion))


    return (
        <React.StrictMode>
            <BrowserRouter basename="/Harry-Potter-App">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Main characters={resultSearchSchool} onLike={like} likedNames={likedNames}
                                onDislike={dislike} setInputTextValue={setInputTextValue}
                                setSelectOpinion={setSelectOpinion} />
                        } />
                    <Route
                        path="liked"
                        element={
                            <Favorites characters={resultSearchSchool} onLike={like} likedNames={likedNames}
                                onDislike={dislike} />
                        } />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );
}

export default App;
