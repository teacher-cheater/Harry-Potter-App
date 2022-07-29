import like from "./like.svg";
import empty from "./empty.svg";

export function Card({image, name, actor, gender, house, wand, alive, onLike, onDislike, liked}) {

    return (
        <div className="cards">
            <div className="card">
                <div className="card__image">
                    <img
                        src={process.env.PUBLIC_URL +`/images/${image}`}
                        className="card__picture"
                        alt={name}
                    />
                </div>
                <div className="card__content">
                    <div className="card__items">
                        <button className="card__likes"
                                onClick={() => {
                                    liked ? onDislike(name) : onLike(name)
                                }}>
                            <img alt={"like"}
                                 className="card__icon"
                                 src={liked ? like : empty}
                            />
                        </button>
                    </div>
                    <h2 className="card__title">{name}</h2>
                    <div className="card__list">
                        <p>Actor: {actor}</p>
                        <p>Gender: {gender}</p>
                        <p>House: {house}</p>
                        <p>Wand core: {wand.core}</p>
                        <p>Alive: {alive ? "yes" : "no"}</p>
                    </div>
                </div>
            </div>
        </div>
    );

}
