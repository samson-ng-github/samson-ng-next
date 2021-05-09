import styles from "../styles/about_me.module.css";

export default function PencilDrawingTemplate(props) {
  const { name, thumb, src, size, text } = props.project;
  return (
    <div className={styles.container} style={{ width: size.width + "px" }}>
      <img
        className={styles.img}
        src={src}
        width={size.width}
        height={size.height}
        alt={name}
      />
      <img className={styles.imgMobile} src={"./assets/" + thumb} alt={name} />
      <p className={styles.p}>{text}</p>
    </div>
  );
}
