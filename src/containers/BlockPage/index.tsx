import React from "react";
import { LayoutDefault } from "../LayoutDefault";
import cx from "classnames";
import { Tags } from "../../components/Tags";
import styles from "./styles.module.scss";

export const BlockPage: React.FC = () => {
  return (
    <LayoutDefault>
      <div className={styles.container}>
        <div className={styles.flex}>
          <div className={styles.left}>
            <div className={styles.tab} />
            <p className={styles.label}>рекомендованное</p>
            <h1 className={styles.h1}>Блокчейн и криптовалюты</h1>
            <div className={styles.hr} />
            <div className={styles.description}>
              Ваш универсальный путеводитель в мире криптовалют. Независимо от
              того, являетесь ли вы новичком, пытающимся разобраться в майнинге,
              или опытным пользователем, желающим разработать торговую
              стратегию, мы сможем вам помочь.
            </div>
            <a href="/#" className={styles.link}>
              Открыть модуль
            </a>
          </div>
          <div className={styles.right}>
            <div className={cx(styles.tab, styles.tab_margin)} />
            <div className={styles.video} />
            <p className={styles.question}>Что такое биткоин?</p>
            <div>
              <span className={styles.count}>3 модуля</span>
              <span className={styles.count}>3 задания</span>
            </div>
            <div className={styles.experience}>15 опыта</div>
          </div>
        </div>
        <div className={styles.tags}>
          <h2 className={styles.tags_title}>Все курсы</h2>
          <Tags />
        </div>
      </div>
    </LayoutDefault>
  );
};
