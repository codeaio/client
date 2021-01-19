import React from "react";
import Header from "../home/header";
import "./aboutus.css";

function AboutUs() {
  return (
    <>
      <Header stylish={false} />
      <div className="AboutUs">
        <div class="article">
          <h1 class="heading">About Us</h1>
          <p class="text">
            As software developers, we already spend a lot of our time in browsers. Be it for searching Google/StackOverflow, or doing code reviews on GitHub. Also, communication with the team happens in web applications, such as Gmail, Google Hangout or Slack. The convenience of web applications and OAuth-based authentication allows us to use any computer to do most of our work immediately.
          </p>
          <p class="text">
            However, when it comes to the actual coding and debugging, we have to prepare our local development environments manually. We do this based on often outdated, incomplete or just plain wrong documentation. The transition from an online repository to the actual coding is a barrier that hinders thousands of possible contributions every day. Coding needs to get more accessible.
          </p>
          <p class="text">
            Once we have the setup, we run builds and test code. Those processes are usually an excellent reason to grab a coffee because it is blocking our machine. Wouldn’t it be nice to push such workload to the cloud, where it not only runs faster but can easily be parallelized? Your computer stays calm and cool, and you still can have your coffee if you want.
          </p>
          <p class="text">
            To solve this problems we have developed a codeAio platform in which you can code, build and test without using much of your laptop/computer resources and also access your project from anywhare without installing a single software what you nedd is just a browser which is installed by default in 99% of the computers.
          </p>
        </div>
        <div class="article">
          <h1 class="heading2">Team</h1>
          <p class="text">
            Kartik Prajapati -- <i>System Architect</i>
          </p>
          <p class="text">
            Dhruv Chauhan -- <i>Backend Developer</i>
          </p>
          <p class="text">
            Jay Luhar -- <i>Database Engineer</i>
          </p>
          <p class="text">
            Aum Patel -- <i>Frontend Engineer</i>
          </p>
        </div>
      </div>
    </>
  );
}
export default AboutUs;
