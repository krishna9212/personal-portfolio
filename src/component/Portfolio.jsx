import React, { useState } from "react";
import "./Portfolio.css"; // Import the CSS file
import web1 from "./../assets/website1.png";
import web2 from "./../assets/website2.png";
import web3 from "./../assets/website3.png";
import web4 from "./../assets/website4.png";
import web5 from "./../assets/website5.png";
import web6 from "./../assets/website6.png";
import web7 from "./../assets/website7.png";


function Portfolio() {
  // Define an array of project data
  const projects = [

    {
      id: 0,
      imageUrl: web7,
      url: "https://uak-technologies.vercel.app/",
    },
    {
      id: 1,
      imageUrl: web1,
      url: "https://responsive-bookstore-tc-reimagine1.netlify.app/",
    },
    { id: 2, imageUrl: web2, url: "https://chatappproject-psi.vercel.app/   " },
    { id: 3, imageUrl: web3, url: "https://bmicalculator-lovat.vercel.app/" },
    { id: 4, imageUrl: web4, url: "https://todo-lac-six.vercel.app/" },
    {
      id: 5,
      imageUrl: web5,
      url: "https://currency-converter-app-five-tau.vercel.app/",
    },
    {
      id: 6,
      imageUrl: web6,
      url: "https://react-password-generator-tan.vercel.app/",
    },
    // Add more projects as needed
  ];

  // State to manage hover effect for each project
  const [hoveredProject, setHoveredProject] = useState(null);

  // Event handlers
  const handleMouseEnter = (projectId) => {
    setHoveredProject(projectId);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  const handleClick = (url) => {
    // Navigate to the project URL
    window.open(url, "_blank");
  };

  return (
    <div className="bg-background portfolio text-foreground p-8 text-white h-full w-full ">
      <div className="h-[10%] md:h-[5%] w-full text-transparent">.</div>
      <div className="main-content h-[90%] md:h-[95%] w-full overflow-x-auto overflow-y-hidden">
        <h1 className="text-4xl font-extrabold mb-6">Portfolio</h1>
        {/* Project cards container with overflow hidden */}
        <div className="project-cards h-[95%] flex md:flex-row flex-col gap-6 p-2 items-center overflow-x-auto relative rounded-xl">
          {/* Map through projects array to render project cards */}
          {projects.map((project) => (
            <div
              key={project.id}
              className={`box project min-h-[40%] w-full md:h-[45%] md:min-w-[40%] bg-[#32323C] rounded-xl relative flex items-center justify-center ${
                hoveredProject === project.id ? "hovered" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(project.url)}
            >
              <img
                src={project.imageUrl}
                alt={`website${project.id}`}
                className={`h-[90%] w-[90%] rounded-xl transition-all duration-700 ${
                  hoveredProject === project.id ? "hovered-image" : ""
                }`}
              />
              {hoveredProject === project.id && (
                <div className="onclick absolute top-0 left-0 transition-all duration-1000">
                  <button
                    className="bg-[#2B2B2C] p-2 rounded-xl"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleClick(project.url);
                    }}
                  >
                    <i className="fa-solid fa-eye"></i>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
