
export function Input({ inputTextValue, setInputTextValue, selectOpinion, setSelectOpinion  }) {
  return (
    <form className="header__registration">
      <div className="header__block-choice-1">
        <label className="header__name">
          <p>Name</p>
          <input
            placeholder="Hermione"
            className="header__input-text"
            type="text"
            value={inputTextValue}
            onChange={(event) => setInputTextValue(event.target.value)}
          />
        </label>
      </div>
      <div className="header__block-choice-2">
        <label className="header__school-choice">
          <p>School</p>
          <select name="school" className="header__school" onChange={(event) => setSelectOpinion(event.target.value)} >
            <option value="" defaultValue select='true'>
              Choose one
            </option>
            <option value="Gryffindor"> Gryffindor</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>

          </select>
        </label>
      </div>
    </form>
  );
}
