import {Card} from "../Card/Card.jsx";
import {persons} from "../../persons.js";
import Fuse from "fuse.js";
// import {useState} from "react";
// import {App} from "../../App.js";

export function Main({inputTextValue, selectOpinion}) {

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
        includeScore: true
    })

    const results = fuse.search(inputTextValue);

    const personResult = inputTextValue && selectOpinion
        ? results.map((elem) => elem.item)
        : persons;

    return (
        <main className="main">
            <div className="main__container">
                <div className="main__content">
                    {personResult.map((person, index) => (
                        <Card
                            key={index}
                            image={person.image}
                            name={person.name}
                            actor={person.actor}
                            gender={person.gender}
                            house={person.house}
                            wand={person.wand.core}
                            alive={person.alive}
                        />
                    ))};
                </div>
            </div>
        </main>
    );
}
