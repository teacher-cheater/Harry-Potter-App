import { Input } from "../Input/Input.jsx";

export function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__base">
          <h1 className="header__title">Harry Potter</h1>
          <p className="header__subtitle">
            View all characters from the Harry Potter universe
          </p>
        </div>
        <Input />
      </div>
    </header>
  );
}
