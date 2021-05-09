import { root } from "../config";
import Aside from "../components/Aside";
import FourMpuTemplate from "../components/FourMpuTemplate";

export default function ee({ originalProjects }) {
  const project = originalProjects.filter((project) => project.slug === "ee");

  return (
    <div className="page">
      <Aside originalProjects={originalProjects} />
      <FourMpuTemplate project={project[0]} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${root}/api`);
  const originalProjects = await res.json();
  //console.log("gets:" + projects);
  return { props: { originalProjects } };
};
