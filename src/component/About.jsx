import React from "react";
import "./../App.css";

function About() {
  return (
    <div className="bg-background text-foreground p-8 text-white h-full w-full">
      <div className="spacer h-[10%] md:h-[5%] w-full text-transparent">.</div>
      <div className="main-content h-[90%] md:h-[95%] w-full overflow-y-auto md:overflow-y-hidden">
        <h1 className="text-4xl font-extrabold mb-6">About Me</h1>
        <p className="mb-6 text-lg leading-relaxed max-w-3xl mx-auto">
          I am Krishna Rajput, a front-end developer based in New Delhi,
          specializing in responsive web development. With expertise in HTML,
          CSS, JavaScript, React, Redux, and UI/UX principles, I excel in
          creating intuitive and visually appealing websites.
        </p>
        <p className="mb-6 text-lg leading-relaxed max-w-3xl mx-auto">
          My job is to build your website to be functional, user-friendly, and
          visually appealing. I add a personal touch to ensure it's eye-catching
          and easy to use, aiming to convey your message and identity in the
          most creative way possible.
        </p>
        <h2 className="text-3xl font-bold mt-12 mb-8">What I'm Doing</h2>
        <div className="flex flex-row items-stretch overflow-y-hidden  whitespace-nowrap justify-around gap-6 w-full">
          <div className="bg-card bg-[#212123] p-6 rounded-lg shadow-lg flex-shrink-0 min-w-[300px] max-w-[45%] duration-700 transition-all hover:scale-105">
            <h1 className="text-2xl mb-4 text-center">💻</h1>
            <h3 className="text-2xl font-bold text-center mb-2">
              Web Development
            </h3>
            <p className="text-center whitespace-normal">
              High-quality development of sites at the professional level.
            </p>
          </div>
          <div className="bg-card bg-[#212123] p-6 rounded-lg shadow-lg flex-shrink-0 min-w-[300px] max-w-[45%] duration-700 transition-all hover:scale-105">
            <h1 className="text-2xl mb-4 text-center">🎨</h1>
            <h3 className="text-2xl font-bold text-center mb-2">Web Design</h3>
            <p className="text-center whitespace-normal">
              The most modern and high-quality design made at a professional
              level.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
