import { motion } from "framer-motion";
import styles from "./About.module.css";

export default function About(){
  return (
    <section id="about" className={styles.about}>
      <motion.h2 initial={{y:10,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true}}>Жоба туралы</motion.h2>
      <motion.p className={styles.p} initial={{y:10,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true}} transition={{delay:0.08}}>
        Бұл сайт Маңғыстау өңірінің дайындалған бағыттары мен көрнекті жерлерін көрсетеді — әдемі мекендер, жағалау жолдары және мәдени қызығушылық орындары.
        Туризмді дамыту және инвесторлар/демеушілерге презентация үшін ақпараттық бір беттік прототип ретінде жасалған.
      </motion.p>
    </section>
  )
}
