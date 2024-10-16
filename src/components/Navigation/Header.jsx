import React from 'react';

const Header = () => {
  return (
    <div>
      <header className="flex fixed top-0 right-0 bg-transparent z-50 justify-end py-4 px-8 ">
        <nav>
          <ul className="flex space-x-6 text-white text-semibold">
          <li>
              <a href="#" className=" hover:text-neutral-300 font-semibold">Problem Statements</a>
            </li>
            <li>
              <a href="#faq" className=" hover:text-neutral-300 font-semibold">FAQ</a>
            </li>
            <li>
              <a href="#timeline" className=" hover:text-neutral-300 font-semibold">Timeline</a>
            </li>
           
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
