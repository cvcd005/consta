import React from "react";
import { Tag } from "../Tag";
import styles from "./styles.module.scss";

const mocks = [
  { label: "Маркетинг", checked: true },
  { label: "Финансы", checked: true },
  { label: "Языки", checked: false },
  { label: "Личный рост", checked: false },
  { label: "Инстаграм", checked: false },
  { label: "Программирование", checked: false },
  { label: "Инвестиции", checked: false },
  { label: "Общеобразовательные", checked: false },
];

export const Tags: React.FC = () => {
  return (
    <div className={styles.tags}>
      {mocks.map((el) => (
        <Tag label={el.label} checked={el.checked} />
      ))}
    </div>
  );
};
