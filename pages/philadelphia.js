import { root } from "../config";
import Aside from "../components/Aside";
import styles from "../styles/philadelphia.module.css";

export default function philadelphia({ originalProjects }) {
  const project = originalProjects.filter(
    (project) => project.slug === "philadelphia"
  );

  return (
    <div className="page">
      <Aside originalProjects={originalProjects} />
      <div className={styles.container}>
        <iframe
          className={styles.billboard1}
          src={project[0].src + "/970x250_1/index.html"}
          title={project[0].name + " 970x250 1"}
        />
        <iframe
          className={styles.billboard2}
          src={project[0].src + "/970x250_2/index.html"}
          title={project[0].name + " 970x250 2"}
        />
        <iframe
          className={styles.billboard3}
          src={project[0].src + "/970x250_3/index.html"}
          title={project[0].name + " 970x250 3"}
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
