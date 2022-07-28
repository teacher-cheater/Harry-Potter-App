import {Card} from "../Card/Card.jsx";

export function Main({characters, onLike,onDislike ,likedNames}) {
    return (
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
            </div>
        </main>
    );
}
