import styles from "../styles/FullPageTemplate.module.css";

export default function FullPageTemplate(props) {
  const { name, src, size, text } = props.project;

  return (
    <div className={styles.container} style={{ width: size.width + "px" }}>
      <iframe
        className={styles.iframe}
        src={src + "/index.html"}
        width={size.width}
        height={size.height}
        title={name}
      />
      <p className={styles.p}>{text}</p>
    </div>
  );
}
