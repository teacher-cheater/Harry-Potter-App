import {Card} from "../Card/Card.jsx";
import like from "../Card/like.svg";
import {Link} from "react-router-dom";
import {Header} from "../Header/Header";
import {Input} from "../Input/Input";

export function Main({characters, onLike, onDislike, likedNames, setInputTextValue, setSelectOpinion}) {

    return (
        <div className="wrapper">
            <Header/>
            <Input  setInputTextValue={setInputTextValue}
                    setSelectOpinion={setSelectOpinion}/>
            <main className="main">
                <div className="main__container">
                    <div className="main__content">
                        {characters.map((person, index) => (
                            <Card
                                key={index}
                                liked={likedNames.includes(person.name)}
                                {...person}
                                onLike={onLike}
                                onDislike={onDislike}
                            />
                        ))}
                    </div>
                    <Link to={'/liked'}>
                        <button type="button" className="main__btn">
                            <img className="main__picture" alt="" src={like}/>
                            Show liked
                        </button>
                    </Link>
                </div>
            </main>
        </div>

);
}
