import { Button } from "@chakra-ui/react";
import { Icon, Box } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs"; 

import React from "react";
import "../CssPages/Projects.css";

const Projects = () => {
  return (
    <div id="projectScroll">
      <div className="Project">
        <h1>Projects</h1>
        <div className="ProjectGrid">
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
           <img src="https://managementhelp.org/wp-content/uploads/2022/03/Wrike-homepage-1024x483.png" 
           />
            </div>
            <div className="ProjectD">
            <h1 style={{cursor:"pointer"}}><u>
            <a
                target={"_blank"}
                href="https://wrike9871.netlify.app/"
              >  Wrike Clone </a></u></h1> 
              <h2><b>Wrike is an easy-to-use tool for streamlining the internal project management and collaboration processes between team members!</b></h2>

              <li>Created a Drop down Navigation bar</li>
              <li>Created Home Page .</li>
              <li>Created Footer</li>
              <li>Worked on pricing page</li>
              <h2><b>
                Tech stack -  JAVASCRIPT | Css | HTML |
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
              <img src="https://github.com/Durgesh9871/ReadmeImages/raw/main/Anthro_Image/ClothPage/Screenshot%20(14).png?raw=true" />
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
              <img src="https://github.com/Durgesh9871/ReadmeImages/raw/main/Mentimeter/homepage/Screenshot%20(54).png?raw=true" />
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
              <img src="https://entrackr.com/storage/2019/01/spotify-.jpg" />
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
              <img src="https://www.adventurebikerider.com/wp-content/uploads/2017/10/tumblr_o27c7fByaO1tchrkco1_500.gif" />
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
