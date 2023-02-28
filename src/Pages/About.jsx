import React from 'react'
import { EmailIcon } from '@chakra-ui/icons';
import {Link,}
 from '@chakra-ui/react'
import "../CssPages/About.css"
import { PhoneIcon } from '@chakra-ui/icons';




const About = () => {
  return (
    <div id='aboutScroll'>

 <div className='About' data-aos="fade-up"
    data-aos-offset="-100"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
    <h1 >About</h1>
    <h2>I'm Durgesh Singh</h2>
    <p >With a passion for developing elegant and scalable web applications, I specialize in building efficient and responsive user interfaces using React JS, while also leveraging my expertise in JavaScript, CSS, and HTML. Equipped with in-depth knowledge of server-side programming using Node.js, Express, and MongoDB, I excel in designing robust back-end systems that can handle complex business logic and data processing requirements. As a highly motivated and collaborative team player, I thrive in working closely with clients to understand their unique needs and deliver tailored solutions that exceed expectations.</p>
<p>Drop a mail @ <Link href="mailto:aadarsh474747@gmail.com"><span style={{textDecoration:"underline",color:"salmon",cursor:"pointer" ,marginRight:"5px"}}>
    devisingh9871686098@gmail.com </span></Link> <EmailIcon/> </p>
    <p style={{marginTop:"15px"}}>Contact me <span style={{textDecoration:"underline",color:"salmon",cursor:"pointer", marginLeft:"5px" ,marginRight:"5px" }}>  9871686098 </span> <PhoneIcon/> </p>
 </div>
    </div>
  )
}


export default About