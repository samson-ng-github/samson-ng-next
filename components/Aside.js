import Link from "next/link";
import styles from "../styles/Aside.module.css";
import AsideNavItem from "./AsideNavItem";

//Use the data fetched in the pages to generate the nav bar here.

const Aside = ({ originalProjects, resetProjects }) => {
  //Turn the data into a array of nav bar items.
  const AsideNavList = originalProjects.map((project) => (
    <AsideNavItem key={project.id} {...project} />
  ));

  return (
    <aside className={styles.aside}>
      {/*Website logo. Will take you to main page on click*/}
      <Link href="/">
        <img
          src="/assets/samson_ng_logo.png"
          alt="Samson Ng Logo"
          className={styles.asideLogo}
          onClick={resetProjects}
        />
      </Link>

      {/*Project list*/}
      <nav className={styles.nav}>
        <Link href="/about_me">
          <a className={styles.aboutMe}>About me</a>
        </Link>
        <ul className={styles.projects}>{AsideNavList}</ul>

        {/*Project filter list. It is a lot harder to implement
        in Next than in React. I have not figured out how to do this yet.
        Because in Next, when you click on a link it takes you to a different page,
        unlink React, which stays on the same page. Therefore I cannot keep the project
        data, filter it and display again. It will go to a completely new page.*/}
        {/*<ul className={styles.hashtags}>
          <li>
            <div
              className={styles.hashtagLink}
              onClick={() => sortProjects("Display Ad")}
            >
              #Display Ads
            </div>
          </li>
          <li>
            <div
              className={styles.hashtagLink}
              onClick={() => sortProjects("Mini Game")}
            >
              #Mini Games
            </div>
          </li>
          <li>
            <div
              className={styles.hashtagLink}
              onClick={() => sortProjects("Web GL")}
            >
              #Web GL
            </div>
          </li>
          <li>
            <Link href="/">
              <div
                className={styles.hashtagLink}
                onClick={() => sortProjects("Pencil Drawing")}
              >
                #Pencil Drawings
              </div>
            </Link>
          </li>
          <li>
            <Link href="/">
              <div
                className={styles.hashtagLink}
                onClick={() => sortProjects("Installation Art")}
              >
                #Installation Art
              </div>
            </Link>
          </li>
          <li>
            <Link href="/">
              <div className={styles.hashtagLink} onClick={resetProjects}>
                #Everything
              </div>
            </Link>
          </li>
        </ul>*/}

        {/*Download my CV*/}
        <div className={styles.cv}>
          <a
            href="/docs/samson-ng-cv-2021.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <button className={styles.cvButton}>Download CV</button>
          </a>
        </div>

        {/*Social media icon*/}
        <div>
          <a
            href="https://www.linkedin.com/in/samson-ng-5b63a293/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={styles.socialMediaIcon}
              alt="Linkedin"
              src="/assets/social_media_icons/linkedin.svg"
            ></img>
          </a>
          <a
            href="https://www.instagram.com/samson.ng.travels/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={styles.socialMediaIcon}
              alt="Instagram"
              src="/assets/social_media_icons/instagram.svg"
            ></img>
          </a>
          <a
            href="https://www.facebook.com/seul.le.samson.ng/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={styles.socialMediaIcon}
              alt="Facebook"
              src="/assets/social_media_icons/facebook.svg"
            ></img>
          </a>
          <a href="mailto:info@samson-ng.com" target="_blank" rel="noreferrer">
            <img
              className={styles.socialMediaIcon}
              alt="Email"
              src="/assets/social_media_icons/email.svg"
            ></img>
          </a>
        </div>
      </nav>
    </aside>
  );
};

export default Aside;
