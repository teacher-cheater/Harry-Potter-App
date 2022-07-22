export function Card({ image, name, info }) {
  return (
    <div className="cards">
      <div className="card">
        <div className="card__image">
          {image}
          {/*<img
            style={{ width: "334", height: "192" }}
            src="http://hp-api.herokuapp.com/images/harry.jpg"
            className="card__picture"
          />*/}
        </div>
        <div className="card__content">
          <h2 className="card__title">{name}</h2>
          <div className="card__list">{info}</div>
        </div>
      </div>
    </div>
  );
}
