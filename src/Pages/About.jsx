import React from 'react'
import { EmailIcon } from '@chakra-ui/icons';
import {Link,}
 from '@chakra-ui/react'
import "../CssPages/About.css"
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
    <p>Observant & detail-oriented aspiring full-stack web developer with a specialization in MERN stack. Judicious & creative when crafting web applications & platforms to propel competitive advantage & revenue growth. Looking forward to honing his skills in a challenging work environment.</p>
<p>Drop a mail @ <Link href="mailto:aadarsh474747@gmail.com"><span style={{textDecoration:"underline",color:"salmon",cursor:"pointer"}}>
    devisingh9871686098@gmail.com </span></Link> <EmailIcon/> </p>
 </div>
    </div>
  )
}


export default About