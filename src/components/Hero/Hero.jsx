import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

export default function Hero(){
  return (
    <section className={styles.hero} id="home">
      <div className={styles.overlay}>
        <div className="container">
          <motion.h1 initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.1}}>
            <span>Маңғыстаудың</span> жабайы сұлулығын ашып көр
          </motion.h1>
          <motion.p initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.2}} className={styles.lead}>
            Таңғажайып каньондардан бастап көне жағалау қоныстарына дейін — әрбір саяхатшы үшін дайындалған бағыттар, кеңестер мен туристік сапарлар.
          </motion.p>
          <motion.div className={styles.actions} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.35}}>
            <a href="#destinations" className={styles.primary}>Зерттеуді бастау</a>
            <a href="#contact" className={styles.secondary}>Бізбен байланысыңыз</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
