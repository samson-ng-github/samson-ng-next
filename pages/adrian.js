import { root } from "../config";
import Aside from "../components/Aside";
import PencilDrawingTemplate from "../components/PencilDrawingTemplate";

export default function adrian({ originalProjects }) {
  const project = originalProjects.filter(
    (project) => project.slug === "adrian"
  );

  return (
    <div className="page">
      <Aside originalProjects={originalProjects} />
      <PencilDrawingTemplate project={project[0]} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${root}/api`);
  const originalProjects = await res.json();
  //console.log("gets:" + projects);
  return { props: { originalProjects } };
};
