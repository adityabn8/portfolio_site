import React, { useState } from 'react';
import {TabMenu} from 'primereact/tabmenu';
import { useNavigate } from 'react-router';
import '../styles/Header.scss';

export default Header  = () => {
  const [selectedTab, setSelectedTab] = useState("home");
  const navigate = useNavigate();
  const items = [
        {
          label: "Home", 
          key: "home",
          icon: 'pi pi-fw pi-home',
          command: () => {
            navigate("/");
          }
        },
        {
          label: "About", 
          key: "about",
          icon: 'pi pi-fw pi-user',
          command: () => {
            navigate("/About");
          }
        },
        {
          label: "Resume", 
          key: "resume",
          icon: 'pi pi-fw pi-file',
          command: () => {
            navigate("/Resume");
          }
        },
        {
          label: "Blogs", 
          key: "blogs",
          icon: 'pi pi-fw pi-pencil',
          command: () => {
            navigate("/Blogs");
          }
        },
        {
          label: "Contact", 
          key: "contact",
          icon: 'pi pi-fw pi-envelope',
          command: () => {
            navigate("/Contact");
          }
        }
    ];
  return (
    <div className='main-menu-container'>
      <TabMenu model={items} />
    </div>
  )
}