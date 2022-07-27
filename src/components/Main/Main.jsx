import {Card} from "../Card/Card.jsx";
import {persons} from "../../persons.js";
import Fuse from "fuse.js";

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
        threshold: 0.3,
        includeScore: true
    })


    const results = fuse.search(inputTextValue)

    /*нужно отфлитровать карточки по школам и вывести учеников*/

    const personResult = inputTextValue
        ? results.map((elem) => elem.item)
        : persons

    const resultSearchSchool = personResult.filter((elem) => elem.house.includes(selectOpinion))


    return (
        <main className="main">
            <div className="main__container">
                <div className="main__content">
                    {resultSearchSchool.map((person, index) => (
                        <Card
                            key={index}
                            image={person.image}
                            name={person.name}
                            actor={person.actor}
                            gender={person.gender}
                            house={person.house}
                            wand={person.wand.core}
                            alive={person.alive ? "yes" : "no"}
                            liked={true}
                        />
                    ))}}
                </div>
            </div>
        </main>
    );
}
