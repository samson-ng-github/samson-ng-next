import { root } from "../config";
import Aside from "../components/Aside";
import FitbitTemplate from "../components/FitbitTemplate";

export default function fitbit_backtoschool({ originalProjects }) {
  const project = originalProjects.filter(
    (project) => project.slug === "fitbit_backtoschool"
  );

  return (
    <div className="page">
      <Aside originalProjects={originalProjects} />
      <FitbitTemplate project={project[0]} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${root}/api`);
  const originalProjects = await res.json();
  //console.log("gets:" + projects);
  return { props: { originalProjects } };
};
