import styles from "../styles/FitbitTemplate.module.css";

export default function FitbitTemplate(props) {
  const { name, src } = props.project;

  console.log(src + "/970x250");

  return (
    <div className={styles.container}>
      <iframe
        className={styles.mpu}
        src={src + "/300x250/index.html"}
        title={name + " 300x250"}
      />
      <iframe
        className={styles.billboard}
        src={src + "/970x250/index.html"}
        title={name + " 970x250"}
      />
      <iframe
        className={styles.dmpu}
        src={src + "/300x600/index.html"}
        title={name + " 300x600"}
      />
      <iframe
        className={styles.leaderboard}
        src={src + "/728x90/index.html"}
        title={name + " 728x90"}
      />
      <iframe
        className={styles.bigMobile}
        src={src + "/320x50/index.html"}
        title={name + " 320x50"}
      />
      <iframe
        className={styles.smallMobile}
        src={src + "/300x50/index.html"}
        title={name + " 300x50"}
      />
    </div>
  );
}
