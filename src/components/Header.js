import React from "react";

export default function Navbar() {
  return (
    <div>
      <header className="App-header">
        <img
          src={require(`../images/Troll Face.png`)}
          className="header-logo"
          alt="logo"
        />
        <h2 className="header-title">Meme generator</h2>
      </header>
    </div>
  );
}
