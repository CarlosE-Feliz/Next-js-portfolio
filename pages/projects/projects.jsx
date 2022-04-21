/* eslint-disable @next/next/no-img-element */

import NavBar from "../_navBar";
import Link from "next/link";
import { useRouter } from "next/router";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 1700
});

/* eslint-disable react/jsx-key */
const ProjectsPage = (props) => {
    const router = useRouter();

    // const handleShowOneProject = (id) => {
    //   if ()
    // };

  return (
    <>
      <title> Projects </title>
      <p className="backBtn"><Link href="/">Back</Link></p>
      <div>
        {props.projects.map((project) => (
          <div className="card cardShadow centerCards" data-aos="fade-up" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src={project.imgUrl}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{project.name}</h5>
              <p className="card-text">{project.description}</p>
              <Link href={`/projects/${project.id}`} class="btn btn-primary">Go somewhere</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectsPage;
