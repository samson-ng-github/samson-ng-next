import styles from "../styles/FullPageTemplate.module.css";

export default function VideoTemplate(props) {
  const { name, src, size, text } = props.project;

  return (
    <div className={styles.container} style={{ width: size.width + "px" }}>
      <iframe
        className={styles.iframe}
        src={src}
        width={size.width}
        height={size.height}
        title={name}
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
        style={{ backgroundColor: "black" }}
      />
      <p className={styles.p}>{text}</p>
    </div>
  );
}
