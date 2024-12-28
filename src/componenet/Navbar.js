import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="mainNav">
        <div className="nav">
          <img
            src="https://www.howiework.com/static/media/logo.73fe7a7a.png"
            className="imgNav"
            alt="logo"
          />
          <p className="name">Mahmoud Haddara</p>
        </div>
        {/* second part */}
        <div className="options">
          <ul>
            <li>Works</li>
            <li>Posts</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <GiHamburgerMenu className="hamb" onClick={() => {}} />
      </div>
      <aside className="aside">
        <ul className="asideUl">
          <li>Works</li>
          <li>Posts</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
