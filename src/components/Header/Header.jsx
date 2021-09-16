import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { Search, HelpOutline } from "@material-ui/icons";

export default function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <Avatar />
        <AccessTimeIcon />
      </div>
      <div className="header-search">
        <Search />
        <input type="text" placeholder="search" />
      </div>
      <div className="header-right">
        <HelpOutline />
      </div>
    </div>
  );
}
