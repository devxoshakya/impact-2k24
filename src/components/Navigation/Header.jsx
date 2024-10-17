import React from 'react';

const Header = () => {
  return (
    <div className='flex items-center justify-center'>
      <header className="flex fixed top-0 bg-black w-full  z-50 justify-center py-4 px-8 ">
        <nav>
          <ul className="flex space-x-5 text-white text-semibold text-sm">
          <li className=''>
              <a href="#" className=" hover:text-blue-600 text-blue-500 font-semibold">Register Now!</a>
            </li>
            <li>
              <a href="#" className=" hover:text-neutral-300 font-semibold">Problem Statements</a>
            </li>
            <li>
              <a href="#faq" className=" hover:text-neutral-300 font-semibold">FAQ</a>
            </li>
            {/* <li> */}
              {/* <a href="#timeline" className=" hover:text-neutral-300 font-semibold">Timeline</a> */}
            {/* </li> */}
           
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
