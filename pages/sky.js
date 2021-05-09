import { root } from "../config";
import Aside from "../components/Aside";
import styles from "../styles/sky.module.css";

export default function sky({ originalProjects }) {
  const project = originalProjects.filter((project) => project.slug === "sky");

  return (
    <div className="page">
      <Aside originalProjects={originalProjects} />
      <div className={styles.container}>
        <iframe
          className={styles.mpu}
          src={project[0].src + "/300x250/index.html"}
          title={project[0].name + " 300x250"}
        />
        <iframe
          className={styles.skyscraper}
          src={project[0].src + "/160x600/index.html"}
          title={project[0].name + " 160x600"}
        />
        <iframe
          className={styles.leaderboard}
          src={project[0].src + "/728x90/index.html"}
          title={project[0].name + " 728x90"}
        />
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${root}/api`);
  const originalProjects = await res.json();
  //console.log("gets:" + projects);
  return { props: { originalProjects } };
};
