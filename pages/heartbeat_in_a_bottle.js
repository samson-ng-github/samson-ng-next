import { root } from "../config";
import Aside from "../components/Aside";
import VideoTemplate from "../components/VideoTemplate";

export default function a_touch_of_me({ originalProjects }) {
  const project = originalProjects.filter(
    (project) => project.slug === "a_touch_of_me"
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
