import { root } from "../config";
import Aside from "../components/Aside";
import FullPageTemplate from "../components/FullPageTemplate";

export default function british_gas({ originalProjects }) {
  const project = originalProjects.filter(
    (project) => project.slug === "british_gas"
  );

  return (
    <div className="page">
      <Aside originalProjects={originalProjects} />
      <FullPageTemplate project={project[0]} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${root}/api`);
  const originalProjects = await res.json();
  //console.log("gets:" + projects);
  return { props: { originalProjects } };
};
