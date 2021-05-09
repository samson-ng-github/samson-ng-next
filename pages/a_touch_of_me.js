import { root } from "../config";
import Aside from "../components/Aside";
import VideoTemplate from "../components/VideoTemplate";

export default function heartbeat_in_a_bottle({ originalProjects }) {
  const project = originalProjects.filter(
    (project) => project.slug === "heartbeat_in_a_bottle"
  );

  return (
    <div className="page">
      <Aside originalProjects={originalProjects} />
      <VideoTemplate project={project[0]} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${root}/api`);
  const originalProjects = await res.json();
  //console.log("gets:" + projects);
  return { props: { originalProjects } };
};
