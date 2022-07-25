export function Card({ image, name, actor, gender, house,wand, alive }) {
  return (
    <div className="cards">
      <div className="card">
        <div className="card__image">
          <img
            style={{ width: "334", height: "192" }}
            src={image}
            className="card__picture"
            alt={name}
          />
        </div>
        <div className="card__content">
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
