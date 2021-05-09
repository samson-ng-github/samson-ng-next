import React, { useEffect, createContext } from "react";
import { root } from "../config";
import styles from "../styles/index.module.css";
import Aside from "../components/Aside";
import MainProjectItem from "../components/MainProjectItem";

//This is the main page of the site.
//On load, data will be fetched using the getStaticProps function
//located at the bottom of this page. It uses the data already fetched
//using the API in api/index.js, which in turns come from a local file.
//If needed, this API can also fetch external data.
//the data is passed in as props inthe index component.

export default function index({ originalProjects }) {
  //After fetching the data, randomise it and store it in useState
  const [projects, setProjects] = React.useState([]);

  useEffect(() => {
    resetProjects();
  }, []);

  const resetProjects = () => {
    setProjects([...originalProjects].sort(() => Math.random() - 0.5));
  };

  //use the map function to turn the randomised project list
  //into an array of thumnail components.
  const MainProjectList = projects.map((project) => {
    return <MainProjectItem key={project.id} {...project} />;
  });

  return (
    <div className="page">
      {/*Use the un-randomised project list to create the nav bar*/}
      <Aside
        originalProjects={originalProjects}
        resetProjects={resetProjects}
      />
      {/*Use the randomised project list to create the thumbnails list*/}
      <main className={styles.main}>
        <ul className={styles.mainList}>{MainProjectList}</ul>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${root}/api`);
  const originalProjects = await res.json();
  //console.log("gets:" + projects);
  return { props: { originalProjects } };
};
