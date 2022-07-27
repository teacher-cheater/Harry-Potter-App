import like from "../../public/like.svg";
import empty from "../../public/empty.svg";
import {useState} from "react";

export function Card({ image, name, actor, gender, house, wand, alive}) {

    const [likeActive, setLikeActive] = useState(false);

    function addFavoriteCard() {
        if (!localStorage.getItem(name)) {
            localStorage.setItem(name, "like");
        } else {
            localStorage.removeItem(name);
        }
    }

    return (
        <div className="cards">
            <div className="card">
                <div className="card__image">
                    <img
                        src={image}
                        className="card__picture"
                        alt={name}
                    />
                </div>
                <div className="card__content">
                    <div className="card__items">
                        <button className="card__likes"
                                onClick={() => {
                                    addFavoriteCard();
                                    setLikeActive(!likeActive);
                                }}>
                            <img alt={"like"}
                                 className="card__icon"
                                 src={likeActive ? like : empty}
                            />
                        </button>
                    </div>
                    <h2 className="card__title">{name}</h2>
                    <div className="card__list">
                        <p>Actor: {actor}</p>
                        <p>Gender: {gender}</p>
                        <p>House: {house}</p>
                        <p>Wand core: {wand}</p>
                        <p>Alive: {alive}</p>
                    </div>
                </div>
            </div>
        </div>
    );

}
