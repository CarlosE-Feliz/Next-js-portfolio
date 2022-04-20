/* eslint-disable @next/next/no-img-element */

import NavBar from "../_navBar";

/* eslint-disable react/jsx-key */
const ProjectsPage = (props) => {
  props.projects.map((project) => {
    console.log(project);
  });
  return (
    <>
      <title> Projects </title>
      <NavBar />
      <div>
        {props.projects.map((project) => (
          <div className="card cardShadow" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src={project.imgUrl}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{project.name}</h5>
              <p className="card-text">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectsPage;
