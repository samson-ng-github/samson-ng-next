import Link from "next/link";

function MainProjectItem(props) {
  const { type, name, slug, thumb, color } = props;
  const thumbPath = "./assets/" + thumb;

  return (
    <li>
      <div>
        <div className="overlay" style={{ backgroundColor: color }}>
          {type}
          <br />
          {name}
        </div>
        <img className="overlayImage" alt={name} src={thumbPath} />
      </div>
      <style jsx>{`
        .overlay {
          position: absolute;
          width: 300px;
          height: 250px;
          text-align: center;
          color: white;
          opacity: 0;
          transition: 0.5s;
          display: flex;
          flex-direction: column;
          line-height: 1.2;
          justify-content: center;
        }

        .overlay:hover {
          opacity: 1;
          cursor: pointer;
        }

        .overlayImage {
          width: 300px;
          height: 250px;
        }
      `}</style>
    </li>
  );
}

export default MainProjectItem;
