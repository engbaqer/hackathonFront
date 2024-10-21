// import { useState } from "react";

function Header() {
  const listOfnav=["home","about","location"]
  return (
    <div className="bg-slate-500  w-full">

    <div className= " container h-20 w-screen mx-auto flex items-center justify-between px-1 text-white ">
      <h1 className="text-4xl">logo</h1>
      <ul className="flex gap-4">
        {listOfnav.map((item,indx) => 
          <li className="text-xl cursor-pointer transition-all hover:opacity-55" key={indx}>{item}</li>
          )}
      </ul>
    </div>
    </div>

  );
}

export default Header;