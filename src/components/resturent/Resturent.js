import React, { useState } from "react";
import "./style.css";
import Menu from "./CardApi";
import MenuCard from "./menuCard";
import Navbar from "./Navbar";
import Main from "../increment/Main";

const uniqueData = [
  ...new Set(
    Menu.map((curVal) => {
      return curVal.category;
    })
  ),
  "All",
];
//console.log(uniqueData);

const Resturent = () => {
  const [menuData, setmenuData] = useState(Menu);
  const [menuList, setmenuList] = useState(uniqueData);
  const filterItems = (category) => {
    console.log(category);
    // if (category === "All") {
    //   setmenuData(Menu);
    //   return;
    // }

    const updateList = Menu.filter((curEle) => {
      return curEle.category === category;
    });
    setmenuData(updateList);
    console.log(updateList);
  };
  return (
    <>
      <Navbar filterItems={filterItems} menuList={menuList} />
      <MenuCard apiData={menuData} />
    </>
  );
};

export default Resturent;
