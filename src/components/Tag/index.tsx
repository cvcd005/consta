import React from "react";
import cx from "classnames";
import styles from "./styles.module.scss";

type Props = {
  label: string;
  checked: boolean;
};

export const Tag: React.FC<Props> = ({ label, checked }) => {
  return (
    <button className={cx(styles.button, { [styles.active]: checked })}>
      {label}
    </button>
  );
};
