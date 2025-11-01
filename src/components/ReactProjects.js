import React from "react";

const projects = [
  {
    title: "MyG site",
    imgSrc:
      './images/mygsite.jpeg', // Replace with your own image URL or local import
  },
  {
    title: "Role-Based Access System",
    imgSrc:
      './images/accesssystemwork.jpeg', // Replace with your own image URL or local import
  },
  {
    title: "Large Contactlist",
    imgSrc:
      './images/contactwork.jpeg', // Replace with your own image URL or local import
  },
  {
    title: "Movie search app",
    imgSrc:
      './images/moviework.jpeg', // Replace with your own image URL or local import
  },
  {
    title: "Shopping Cart",
    imgSrc:
      './images/shoppingwork.jpeg', // Replace with your own image URL or local import
  },
  {
    title: "To-Do List",
    imgSrc:
      './images/todolistwork.jpeg', // Replace with your own image URL or local import
  },
];

const ReactProjects = () => {
  return (
    <div
    
      style={{
        fontFamily: " 'Helvetica Neue', Helvetica, Arial, sans-serif;", 
        color:" #333",
        padding: "20px",
        background: "#0a192f",
        minHeight: "100vh",
        
      }}
      
    >
      <h1 style={{ textAlign: "center", color: "#d3c4c4ff", fontSize:"62px"}}>
        Works
        <hr
          style={{
            width: "60px",
            height: "4px",
            backgroundColor: "#0a192f",
            border: "none",
            margin: "10px auto 30px",
            borderRadius: "2px",
          }}
        />
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {projects.map(({ title, imgSrc }, index) => (
          <div
            key={index}
            style={{
              background: "#e0e3f0",
              borderRadius: "20px",
              width: "300px",
              textAlign: "center",
              boxShadow:
                "0 10px 15px rgba(0, 0, 0, 0.05), 0 4px 6px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <div
              style={{
                background: "white",
                padding: "20px",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                height: "250px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={imgSrc}
                alt={title}
                style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: "10px" }}
              />
            </div>
            <div
              style={{
                padding: "20px 10px",
                fontWeight: "600",
                fontSize: "18px",
                color: "#0a192f",
              }}
            >
              {title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReactProjects;
