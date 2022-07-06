import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Sidebar.css';
  
const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  
  const showSubnav = () => setSubnav(!subnav);
  
  return (
    <>
      <Link className="sidebarLink" to={item.path} 
      onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <span className="SidebarLabel">{item.title}</span>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </Link>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <Link className="dropdown" to={item.path} key={index}>
              {item.icon}
              <span className="SidebarLabel">{item.title}</span>
            </Link>
          );
        })}
    </>
  );
};
  
export default SubMenu;