import styles from "./Icon.module.css";
import icons from "./Icon.data.js";

const Icon = ({ type }) => {
  const config = icons[type];

  if (config) {
    // Use capitalized type if no label
    config.label =
      config.label || `${type[0].toUpperCase()}${type.substring(1)}`;

    return (
      <div className={styles.icon} style={{ backgroundColor: config.bg }}>
        <img
          src={`icons/${type}.svg`}
          alt={config.label}
          title={config.label}
        />
      </div>
    );
  }

  return null;
};

export default Icon;
