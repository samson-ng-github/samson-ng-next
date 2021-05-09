import React, { useState, useContext } from "react";
import Link from "next/link";
import styles from "../styles/AsideNavItem.module.css";

// This is the component for each list item in the nav bar
function AsideNavItem({ name, slug, color }) {
  const [hoverColor, setHoverColor] = useState("black");

  // On hover, the text changed to the colour specify in data sheet.
  const hoverStyle = {
    color: hoverColor,
  };

  return (
    <li>
      <Link href={"/" + slug}>
        <div
          style={hoverStyle}
          className={styles.projectLink}
          onMouseOver={() => setHoverColor(color)}
          onMouseOut={() => setHoverColor("black")}
        >
          {name}
        </div>
      </Link>
    </li>
  );
}

export default AsideNavItem;
