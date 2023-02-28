import React, { useState } from 'react'
import {Button } from '@chakra-ui/react'
import '../App.css';
import { PhoneIcon, AddIcon,SunIcon,AttachmentIcon,AtSignIcon ,HamburgerIcon
  ,CalendarIcon,
  MoonIcon,
  ViewIcon,
  DownloadIcon
} from '@chakra-ui/icons'
import styled from 'styled-components';
import MenuButton from "./MenuButton"
import { Link } from 'react-scroll';
import { headerData } from '../data/header';


const Navbar = ({handleClick,theme}) => {
const [click,setClick]=useState(false)
const [openMenuBar,setOpenMenuBar]=useState(false); 
const closeMenu=()=>setClick(false)


const toggleMenu=()=>{
  setOpenMenuBar(!openMenuBar)
}

const Resume = ()=>{
  window.open("https://1drv.ms/b/s!AqcKQLC4DurdbxqaIvlWk1svY1c?e=mtcyJL");
  
}  

  return (
   
  <div className='Navbar' style={{backgroundColor:theme?"black":"#011627"}} >
   <div className='Navbar-child1'>
    <h2>Durgesh</h2>
    <Button    onClick={handleClick}>{theme?<SunIcon cursor="pointer" />:<MoonIcon cursor="pointer"  />}</Button>
    </div>
    <MenuWrapper onClick={toggleMenu}>
      <MenuButton openMenuBar={openMenuBar} />
    </MenuWrapper>
   <div className={`section_wrapper ${openMenuBar? "open_menu_bar":""}`} style={{cursor:"pointer"}}>
   <Link to="hero" spy={true} smooth={true} offset={-100} duration={700} onClick={closeMenu}> <h2 className="nav_catagory" ><CalendarIcon/> Home</h2></Link>
   <Link to="aboutScroll" spy={true} smooth={true} offset={-100} duration={700} onClick={closeMenu}><h2 className="nav_catagory"><HamburgerIcon /> About</h2></Link>
   <Link to="SkillScroll" spy={true} smooth={true} offset={-100} duration={700} onClick={closeMenu}> <h2 className="nav_catagory"><AddIcon />Skills</h2></Link>
   <Link  to="projectScroll" spy={true} smooth={true} offset={-100} duration={700} onClick={closeMenu} > <h2 className="nav_catagory"><AttachmentIcon /> Projects</h2></Link>
   <Link to="contactScroll" spy={true} smooth={true} offset={-100} duration={700} onClick={closeMenu} > <h2 className="nav_catagory"><PhoneIcon />Contact</h2></Link>
   {headerData.resumePdf &&  <a
          href={headerData.resumePdf}
          download='fw20_0472-Durgesh-Singh-Resume'
          target='_blank'
          rel='noreferrer'
          
        > <h2 className="nav_catagory" onClick={()=> Resume()} > <ViewIcon /> Resume <DownloadIcon /></h2> </a> }

   </div>
  </div>
 
 
  )
}

const MenuWrapper=styled.div`
position:absolute;
z-index:999;
display:none;
@media screen and (max-width:675px){
  right:15px;
  top:15px;
  display:block
}
`;
export default Navbar