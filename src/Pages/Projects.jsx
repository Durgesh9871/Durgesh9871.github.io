import { Button } from "@chakra-ui/react";
import { Icon, Box } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs"; 
import React from "react";
import "../CssPages/Projects.css";

import FashionHunter from "../Portfolio_Images/FashionHunter.png"
import Delicious from "../Portfolio_Images/Delicious.png"
import Anthropologie from "../Portfolio_Images/Anthropologie.png"
import Mentimeter from "../Portfolio_Images/Mentimeter.png"
import Spotify from "../Portfolio_Images/Spotify.png"
import Weather from "../Portfolio_Images/Weather.png"
import Wrike from "../Portfolio_Images/Wrike.png"
 

const Projects = () => {
  return (
    <div id="projectScroll">
      <div className="Project">
        <h1>Projects</h1>
        <div className="ProjectGrid">
            
            {/*  Fashion Hunter ----------------- */}
             
            <Box
            style={{ marginBottom: "50px" }}
            bg="#f6d9b6"
            className="Project1"
            data-aos="fade-right"
            data-aos-offset="-100"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <div>
              <img src={FashionHunter}  />
            </div>
            <div className="ProjectD">
              <h1 style={{cursor:"pointer"}}><u>
              <a target={"_blank"} href="https://fashion-hunter.netlify.app/">Fashion Hunter</a></u></h1>
              <h2><b>Looking for stylish men's clothing? Look no further than our e-commerce website, where you'll find the latest fashion trends at affordable prices. Shop now and upgrade your wardrobe with ease!</b></h2>

              <li>Authentication and OTP verification</li>
              <li>Authorization using token</li>
              <li>Created Product Page </li>
              <li>Dyanamic Filtering, Sorting and Pagination in Product page</li>
              <li>Skeleton of page while loading</li>
              <li>Created Single page</li>
              <li>Image magnify effect on Single page</li>
              <li>Created Real time Review & Rating system</li>
              <li>Created Review page & its Pagination</li>
              <li>Created Wishlist & Cart Page</li>
             
              <h2><b>
                Tech stack- NodeJs | ExpressJs | MongoDb | ReactJs | ChakraUi | Nodemailer | Css | HTML 
                </b> </h2>
              <a target={"_blank"} href="https://fashion-hunter.netlify.app/">
                {" "}
                <Button
                  fontSize={{ base: "0.8em" }}
                  className="btn"
                  color="black"
                  mb="15px"
                  bg="white"
                >
                  Website
                </Button>
              </a>
              <a
                target={"_blank"}
                href="https://github.com/Sagar1079/fashion_hunter_project"
              >
                {" "}
                <Button
                  fontSize={{ base: "0.8em" }}
                  className="btn"
                  color="white"
                  bg="black"
                  ml="10px"
                  mb="15px"
                >
                  {" "}
                  Github
                  <Icon as={BsGithub} />
                </Button>
              </a>
            </div>
          </Box>
  
         {/* Delicious website ---------------- */}
             
         <Box
            style={{ marginBottom: "50px" }}
            bg="#4e6e8e"
            className="Project1"
            data-aos="fade-right"
            data-aos-offset="-100"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <div>
              <img src={Delicious}  />
            </div>
            <div className="ProjectD">
              <h1 style={{cursor:"pointer"}}><u>
              <a target={"_blank"} href="https://delicious-durgesh9871.vercel.app/">Delicious</a></u></h1>
              <h2><b>Delicious is your one-stop fresh meat delivery shop. In here, you get nothing but the freshest meat & seafood, delivered straight to your doorstep.</b></h2>

              <li>Login & Sign Up</li>
              <li>Created Product Page </li>
              <li>Dynamic Filtering options on diffrent basics</li>
              <li>Dynamic Sorting & Pagination in Product page</li>
              <li>Skeleton of page while loading</li>
              <li>Created Single page</li>
              <li>Cart Page for users to add Items</li>
             
              <h2><b>
                Tech stack-  ReactJs | ChakraUi | Redux | Css | HTML 
                </b> </h2>
              <a target={"_blank"} href="https://delicious-durgesh9871.vercel.app/">
                {" "}
                <Button
                  fontSize={{ base: "0.8em" }}
                  className="btn"
                  color="black"
                  mb="15px"
                  bg="white"
                >
                  Website
                </Button>
              </a>

              <a
                target={"_blank"}
                href="https://github.com/prabhash1475/delicious"
              >
                {" "}
                <Button
                  fontSize={{ base: "0.8em" }}
                  className="btn"
                  color="white"
                  bg="black"
                  ml="10px"
                  mb="15px"
                >
                  {" "}
                  Github
                  <Icon as={BsGithub} />
                </Button>
              </a>
            </div>
          </Box>


          {/* Siliconix Website  */}

          <Box
            style={{ marginBottom: "50px" }}
            bg="#4e6e8e"
            className="Project1"
            data-aos="fade-right"
            data-aos-offset="-100"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <div>
              <img src={Delicious}  />
            </div>
            <div className="ProjectD">
              <h1 style={{cursor:"pointer"}}><u>
              <a target={"_blank"} href="https://delicious-durgesh9871.vercel.app/">Delicious</a></u></h1>
              <h2><b>Delicious is your one-stop fresh meat delivery shop. In here, you get nothing but the freshest meat & seafood, delivered straight to your doorstep.</b></h2>

              <li>Login & Sign Up</li>
              <li>Created Product Page </li>
              <li>Dynamic Filtering options on diffrent basics</li>
              <li>Dynamic Sorting & Pagination in Product page</li>
              <li>Skeleton of page while loading</li>
              <li>Created Single page</li>
              <li>Cart Page for users to add Items</li>
             
              <h2><b>
                Tech stack-  ReactJs | ChakraUi | Redux | Css | HTML 
                </b> </h2>
              <a target={"_blank"} href="https://delicious-durgesh9871.vercel.app/">
                {" "}
                <Button
                  fontSize={{ base: "0.8em" }}
                  className="btn"
                  color="black"
                  mb="15px"
                  bg="white"
                >
                  Website
                </Button>
              </a>

              <a
                target={"_blank"}
                href="https://github.com/prabhash1475/delicious"
              >
                {" "}
                <Button
                  fontSize={{ base: "0.8em" }}
                  className="btn"
                  color="white"
                  bg="black"
                  ml="10px"
                  mb="15px"
                >
                  {" "}
                  Github
                  <Icon as={BsGithub} />
                </Button>
              </a>
            </div>
          </Box>


          {/* Top Projects ------------------------- */}

          {/* Wrike ----- */}
          <Box
            bg="#FEB2B2"
            className="Project1"
            data-aos="fade-left"
            data-aos-offset="-100"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
             <div>
           <img src={Wrike} 
           />
            </div>
            <div className="ProjectD">
            <h1 style={{cursor:"pointer"}}><u>
            <a
                target={"_blank"}
                href="https://wrike9871.netlify.app/"
              >  Wrike  </a></u></h1> 
              <h2><b>Wrike is an easy-to-use tool for streamlining the internal project management and collaboration processes between team members!</b></h2>

              <li>Created a Drop down Navigation bar</li>
              <li>Created Home Page .</li>
              <li>Created Footer</li>
              <li>Worked on pricing page</li>
              <li>Help Center & Wrike Blog page</li>
              <h2><b>
                Tech stack -  JavaScript | Css | HTML |
                API | Es6 | FontAwesome
                </b> </h2>
              <a
                target={"_blank"}
                href="https://wrike9871.netlify.app/"
              >
                {" "}
                <Button
                  fontSize={{ base: "0.8em" }}
                  className="btn"
                  color="black"
                  mb="15px"
                  bg="white"
                >
                  Website
                </Button>
              </a>
              <a
                target={"_blank"}
                href="https://github.com/Durgesh9871/teal-fuel-7913"
              >
                {" "}
                <Button
                  fontSize={{ base: "0.8em" }}
                  className="btn"
                  color="white"
                  bg="black"
                  ml="10px"
                  mb="15px"
                >
                  {" "}
                  Github
                  <Icon as={BsGithub} />
                </Button>
              </a>
            </div>
          </Box>

{/*  Anthropologie------- */}
          <Box
            style={{ marginTop: "50px" }}
            bg="#B794F4"
            className="Project1"
            data-aos="fade-right"
            data-aos-offset="-100"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <div>
              <img src={Anthropologie}  />
            </div>
            <div className="ProjectD">
              <h1 style={{cursor:"pointer"}}><u>
              <a target={"_blank"} href="https://aquamarine-fenglisu-ddf06e.netlify.app/index.html">Anthroplogie </a></u></h1>
              <h2><b>Anthropologie is a unique, with a mostly exclusive assortment of clothing, accessories, home décor etc.!</b></h2>


              <li>
                Created the Sign-in and Sign-up functionality
              </li>
              <li>Created all category of Products pages .</li>
              <li>Filtering options on diffrent basics</li>
              <li>Sorting according to price</li>
              <li>Created Home Page</li>
              <li>Created Navbar and Footer</li>
             
              <h2><b>
                Tech stack- JavaScript | CSS | HTML | Font-Awesome 
                </b> </h2>
              <a target={"_blank"} href="https://aquamarine-fenglisu-ddf06e.netlify.app/index.html">
                {" "}
                <Button
                  fontSize={{ base: "0.8em" }}
                  className="btn"
                  color="black"
                  mb="15px"
                  bg="white"
                >
                  Website
                </Button>
              </a>
              <a
                target={"_blank"}
                href="https://github.com/Durgesh9871/shallow-creature-244"
              >
                {" "}
                <Button
                  fontSize={{ base: "0.8em" }}
                  className="btn"
                  color="white"
                  bg="black"
                  ml="10px"
                  mb="15px"
                >
                  {" "}
                  Github
                  <Icon as={BsGithub} />
                </Button>
              </a>
            </div>
          </Box>


          {/*  Mentimeter --- */}
          <Box
            bg="skyblue;"
            style={{ marginTop: "50px" }}
            className="Project1"
            data-aos="fade-left"
            data-aos-offset="-100"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <div>
              <img src={Mentimeter} />
            </div>
            <div className="ProjectD">
              <h1 style={{cursor:"pointer"}}><u> 
              <a
                target={"_blank"}
                href="https://my-eioo8myhn-durgesh9871.vercel.app/"
              > Mentimeter </a> </u></h1>
              <h2><b>Mentimeter is used to Build interactive presentations with the easy-to-use online editor. Add questions, polls, quizzes etc,</b></h2>

              <li>Created Login and Signin Page</li>
              <li>Created NavigationBar and Footer</li>
              <li>Created HomePage{" "}</li>
              <h2><b> Tech stack- React | Redux | JAVASCRIPT | CSS </b></h2>

              <a
                target={"_blank"}
                href="https://my-eioo8myhn-durgesh9871.vercel.app/"
              >
                {" "}
                <Button
                  fontSize={{ base: "0.8em" }}
                  className="btn"
                  mb="20px"
                  color="black"
                  bg="white"
                >
                  Website
                </Button>
              </a>
              <a
                target={"_blank"}
                href="https://github.com/Durgesh9871/Mentimeter"
              >
                {" "}
                <Button
                  fontSize={{ base: "0.8em" }}
                  mb="20px"
                  className="btn"
                  color="white"
                  bg="black"
                  ml="10px"
                >
                  {" "}
                  Github
                  <Icon as={BsGithub} />
                </Button>
              </a>
            </div>
          </Box>  

          {/*  Sotify clone is here -------------------------- */}

          <Box
              bgGradient={[
                "linear( teal.300, yellow.400)",
                "linear( blue.200, teal.500)",
                "linear(to-b, orange.100, purple.300)",
              ]}
            style={{ marginTop: "50px" }}
            className="Project1"
            data-aos="fade-right"
            data-aos-offset="-100"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <div>
              <img src={Spotify}  />
            </div>
            <div className="ProjectD">
              <h1 style={{cursor:"pointer"}}><u>
              <a
                target={"_blank"}
                href="https://capable-trifle-48fae3.netlify.app/"
              >Spotify </a></u></h1>
              <h2><b>A Simple Spotify Clone where you can Play, Pause and change music</b></h2>

              <li>Created UI of Spotify</li>
              <li>You can Play or Pause music</li>
              <li>You can forward or revind music</li>
              <li>You can change music</li>
              <h2><b> Tech stack- HTML | CSS | JAVASCRIPT </b></h2>


              <a
                target={"_blank"}
                href="https://capable-trifle-48fae3.netlify.app/"
              >
                {" "}
                <Button
                  fontSize={{ base: "0.8em" }}
                  className="btn"
                  mb="20px"
                  color="black"
                  bg="white"
                >
                  Website
                </Button>
              </a>
              <a
                target={"_blank"}
                href="https://github.com/Durgesh9871/Spotify/tree/main"
              >
                {" "}
                <Button
                  fontSize={{ base: "0.8em" }}
                  mb="20px"
                  className="btn"
                  color="white"
                  bg="black"
                  ml="10px"
                >
                  {" "}
                  Github
                  <Icon as={BsGithub} />
                </Button>
              </a>
            </div>
          </Box>

          {/*  end  */}



          <Box
            bgGradient="linear(to-r, green.600,green,teal)"
            style={{ marginTop: "50px" }}
            className="Project1"
            data-aos="fade-left"
            data-aos-offset="-100"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <div>
              <img src={Weather} />
            </div>
            <div className="ProjectD">
              <h1 style={{cursor:"pointer"}}><u>
              <a
                target={"_blank"}
                href="https://splendid-nasturtium-831cde.netlify.app/"
              >Weather</a>
              </u></h1>
              <h2><b>A Simple Weather application where you can search for city to know there Weather</b></h2>

              <li>UI of Home Page</li>
              <li>User is able to find temperature of cities</li>
              <li>User is able to search for cities</li>
              <h2><b> Tech stack- HTML | CSS | JAVASCRIPT  </b></h2>

              <a
                target={"_blank"}
                href="https://splendid-nasturtium-831cde.netlify.app/"
              >
                {" "}
                <Button
                  fontSize={{ base: "0.8em" }}
                  className="btn"
                  color="black"
                  mb="20px"
                  bg="white"
                  _hover={{ bgGradient: "linear(to-r, red.500, green.500)" }}
                >
                  Website
                </Button>
              </a>
              <a
                target={"_blank"}
                href="https://github.com/masai-course/durgesh_fw20_0472/blob/master/unit-2/Optional-clock/AnalogClock.html/index.html"
              >
                {" "}
                {/* <Button
                  fontSize={{ base: "0.8em" }}
                  className="btn"
                  color="white"
                  mb="20px"
                  bg="black"
                  ml="10px"
                >
                  {" "}
                  Github
                  <Icon as={BsGithub} />
                </Button> */}
              </a>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Projects;
