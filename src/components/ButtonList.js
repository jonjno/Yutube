import React from "react";
import Button from "./Button";

const List = [
  "All",
  "Live",
  "Songs",
  "live",
  "Socer",
  "Cricket",
  "Cooking",
  "Valentines",
];
const ButtonList = () => {
  return (
    <div className='flex m-2'>
      {List.map((a, index) => (
        <div key={index}>
          <Button name={a} />
        </div>
      ))}
    </div>
  );
};

export default ButtonList;
