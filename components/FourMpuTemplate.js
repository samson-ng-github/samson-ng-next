import styles from "../styles/FourMpuTemplate.module.css";

export default function FourMpuTemplate(props) {
  const { name, src } = props.project;

  console.log(src + "/970x250");

  return (
    <div className={styles.container}>
      <iframe
        className={styles.mpu}
        src={src + "/300x250_1/index.html"}
        title={name + " 300x250 1"}
      />
      <iframe
        className={styles.mpu}
        src={src + "/300x250_2/index.html"}
        title={name + " 300x250 2"}
      />{" "}
      <iframe
        className={styles.mpu}
        src={src + "/300x250_3/index.html"}
        title={name + " 300x250 3"}
      />{" "}
      <iframe
        className={styles.mpu}
        src={src + "/300x250_4/index.html"}
        title={name + " 300x250 4"}
      />
    </div>
  );
}
