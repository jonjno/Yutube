import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { addtocache } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setsearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showsuggestion, setshowsuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);
  console.log(searchQuery);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        getQueryResult();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  //   if i press i ,it will render the component and make api call after 2 sec,even
  //  before 2 sec if another key is pressed ,it will first destroy the component uring return
  //  and then rerender
  //   when rerender happen ,reconcilation happens and firts it will clear all the timeout

  const getQueryResult = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const search = await data.json();
    console.log(search);
    setSuggestion(search[1]);
    console.log(search);
    dispatch(
      addtocache({
        [searchQuery]: search[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg cursor-pointer'>
      <div className='flex col-span-1'>
        <img
          onClick={() => toggleMenuHandler()}
          className='h-8'
          alt='menu'
          src='https://cdn0.iconfinder.com/data/icons/essential-glyphs-rounded/32/menu-hamburger-navigation-512.png'
        />

        <img
          className='h-8 mx-2'
          alt='logo'
          src='https://t3.ftcdn.net/jpg/05/07/46/84/360_F_507468479_HfrpT7CIoYTBZSGRQi7RcWgo98wo3vb7.jpg'
        />
      </div>
      <div className='col-span-10 px-10'>
        <div>
          <input
            className='border border-gray-400 rounded-l-full p-2 w-1/2'
            type='text'
            value={searchQuery}
            onChange={(e) => setsearchQuery(e.target.value)}
            onFocus={() => {
              setshowsuggestion(true);
            }}
            onBlur={() => {
              setshowsuggestion(false);
            }}
          />
          <button className='border border-gray-400 p-2 rounded-r-full bg-gray-200'>
            🔍
          </button>
        </div>
        {showsuggestion && (
          <div className='fixed bg-white py-2 px-2 w-[33rem] rounded-lg shadow-lg border border-gray-100'>
            <ul>
              {suggestion.map((s) => (
                <li className=' py-2 px-3 hover:bg-gray-200' key={s}>
                  🔍{s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className='flex col-span-1 '>
        <img
          className='h-8'
          alt='usericon'
          src='https://static.vecteezy.com/system/resources/thumbnails/007/407/996/small_2x/user-icon-person-icon-client-symbol-login-head-sign-icon-design-vector.jpg'
        ></img>
      </div>
    </div>
  );
};

export default Head;
