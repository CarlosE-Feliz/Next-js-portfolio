/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import dataProjects from "./projects.json";
import Link from "next/link";
function LetSee() {
  const router = useRouter();

  return (
    <div className="projectContainer">
      <p className="backBtn">
        <Link  href="/projects">Back</Link>
      </p>
      {dataProjects.data.map((p) => {
        if (p.id == router.query.projectId) {
          return (
            <div className="projectDiv flexColumn">
              <div className="overlay">
                <h5 className="card-title">{p.name}</h5>
                <div>
                  <img
                    width={199}
                    height={230}
                    src={p.imgUrl}
                    alt="Card image cap"
                  />
                </div>
              </div>
              <p className="card-text">{p.description}</p>

              <div className="container">
                <div className="row">
                  <div className="col-sm">
                    <h4>Thecnologies</h4>

                    <ul>
                      <li>{p.Thecnologies}</li>
                      <li>{p.Thecnologies}</li>
                      <li>{p.Thecnologies}</li>
                      <li>{p.Thecnologies}</li>
                      <li>{p.Thecnologies}</li>
                    </ul>
                  </div>
                  <div className="col-sm">One of three columns</div>
                  <div className="col-sm">One of three columns</div>
                </div>
              </div>
              <div></div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default LetSee;
