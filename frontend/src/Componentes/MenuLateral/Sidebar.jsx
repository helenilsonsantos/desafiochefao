import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import './Sidebar.css';
  


  
const SidebarNav = styled.nav`
  
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;
  

  
const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  
  const showSidebar = () => setSidebar(!sidebar);
  
  return (
    <>
      <div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="nav">
          <Link className="NavIcon" to="#">
            <FaIcons.FaBars className="icone" onClick={showSidebar} />
          </Link>
          
        </div>
        <SidebarNav className="sidebarnav" sidebar={sidebar}>
          <div className="SidebarWrap">
            <Link className="NavIcon" to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </Link>
            
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </div>
        </SidebarNav>
      </IconContext.Provider>
      </div>
      
    </>
  );
};
  
export default Sidebar;