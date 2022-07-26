import like from "../../public/like.svg";
import empty from "../../public/empty.svg";


export function Card({liked, image, name, actor, gender, house, wand, alive}) {

    function click(){
        if(!localStorage.getItem(name)){
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
                        style={{width: "334", height: "192"}}
                        src={image}
                        className="card__picture"
                        alt={name}
                    />
                </div>
                <div className="card__content">
                    <div className="card__items">
                        <button onClick={click} className="card__likes">
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
                        <p>Wand core: {wand}</p>
                        <p>Alive: {alive}</p>
                    </div>
                </div>
            </div>
        </div>
    );

}
