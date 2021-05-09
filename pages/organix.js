import { root } from "../config";
import Aside from "../components/Aside";
import FullPageTemplate from "../components/FullPageTemplate";

export default function organix({ originalProjects }) {
  const project = originalProjects.filter(
    (project) => project.slug === "organix"
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
