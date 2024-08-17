import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //    Early return
  if (!isMenuOpen) return null;
  return (
    <div className='p-5 shadow-lg w-48'>
      <ul className='m-2'>
        <li>
          <Link to='/'>Home </Link>{" "}
        </li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h2 className='font-bold'>Subscription</h2>
      <ul>
        <li>Music</li>
        <li>Spots</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h2 className='font-bold pt-5'>Watch Later</h2>
      <ul>
        <li>Music</li>
        <li>Spots</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
