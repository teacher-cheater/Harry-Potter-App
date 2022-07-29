import {Card} from "../Card/Card";
import {Link} from "react-router-dom";


export function Favorites({characters, onLike, onDislike, likedNames}){
    const resultFilterCharacter = characters.filter((elem)=> likedNames.includes(elem.name));
    return (
        <main className="main">
            <div className="main__container">
                <h2 className="main__title"> Favorites card</h2>
                <div className="main__content">
                    {resultFilterCharacter.map((person, index) => (
                        <Card
                            key={index}
                            liked={likedNames.includes(person.name)}
                            {...person}
                            onLike={onLike}
                            onDislike={onDislike}
                        />
                    ))}
                </div>
                <Link to='/'>
                    <button type="button" className="main__btn">
                        <img className="main__picture" alt="" src=""/>
                        Back
                    </button>
                </Link>
            </div>
        </main>
    )
}