import React from "react";

function Header() {
  return (
    <header>
      {/* Main header */}
      <h1>
        Plantsy
        <span className="logo" role="img" aria-label="plant emoji">
          🌱
        </span>
      </h1>
      {/* Secondary header */}
      <h2>New Plant</h2>
    </header>
  );
}

export default Header;
