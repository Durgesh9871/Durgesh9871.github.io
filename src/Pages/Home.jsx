import {Image,Button,Icon} from '@chakra-ui/react'
import { ViewIcon,DownloadIcon } from '@chakra-ui/icons'
import {BsGithub } from 'react-icons/bs'
import Typical from "react-typical"
import React from 'react'
import '../CssPages/Home.css';
import { headerData } from '../data/header'

const Home = () => {
  
  return (
    <div id="hero">
    <div className='Home'>
      <div className='Home-child1'  data-aos="fade-right"
    data-aos-offset="-100"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" >
      <div className="round_css"></div>
          <div className='Img'  >
            <Image  w="90%" borderRadius="50%" src="https://github.com/Durgesh9871/ReadmeImages/blob/main/PortfolioImageProfile/Durgesh.jpg?raw=true"/>
            </div>
         </div>
      <div className="Home-child2"  data-aos="fade-left"
    data-aos-offset="-150"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
<h5>
         <Typical
          steps={[
            "You're welcome !",
            2000,
            "स्वागत है आपका 🙏",
            2000,
          ]}
         loop={Infinity}
         wrapper="p"
         />
         </h5>
<h2 >Durgesh Singh</h2>
      <h1>
         <Typical
          steps={[
            "MERN STACK DEVELOPER",
            2000,
            "PROBLEM SOLVER",
            2000,
          ]}
         loop={Infinity}
         wrapper="p"
         />
         </h1>

         <p> I am a Full Stack Developer, passionate about building digital products that improve everyday experience for people.</p>
         <div className='btn1'>
       <a  target={"_blank"} href="https://1drv.ms/b/s!AqcKQLC4DurdbxqaIvlWk1svY1c?e=mtcyJL"> 
       <Button fontSize="13px" fontFamily="sans-serif" className='button' 
       color="black"  bg="skyblue">Resume |<ViewIcon/></Button>
       </a> 
      {headerData.resumePdf &&  <a
          href={headerData.resumePdf}
          download='resume'
          target='_blank'
          rel='noreferrer'
        >
          
          <Button  fontSize="13px" ml="5px"  fontFamily="sans-serif" className='button'
       color="black"  bg="skyblue">Resume |<DownloadIcon /></Button>
        </a> }
       
       <a  target={"_blank"} href="https://github.com/Durgesh9871"> <Button ml="2px" fontSize="13px"   fontFamily="sans-serif" className='button'  color="black"  bgGradient='linear(to-r, darkgray,grey,white)' >Github <Icon as={BsGithub} />
        </Button>
        </a>
       
        
       


         </div>
      </div>
     </div>

      
</div> 
  )
}

export default Home