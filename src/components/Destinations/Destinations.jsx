import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./Destination.module.css";

export default function Destinations(){
  const items = [
    {
      id: 1,
      title: "Бозжыра каньоны",
      excerpt: "Драмалық жарлар мен тұз жазықтары — күн шығу фотосуретін түсіру үшін тамаша.",
      img: "/images/bozjyra.jpeg"
    },
    {
      id: 2,
      title: "Шеркала тауы",
      excerpt: "Рәміздік тау және керемет көріністері бар ежелгі бағыттар.",
      img: "/images/sherkala.webp"
    },
    {
      id: 3,
      title: "Жағалау жолдары",
      excerpt: "Каспий теңізіндегі жасырын ойпаттар мен дәстүрлі балықшы ауылдары.",
      img: "/images/coastal.jpg"
    }
  ];

  return (
    <section id="destinations" className={styles.destSection}>
      <div className="container">
        <motion.h3 initial={{y:10,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true}}>
          Танымал бағыттар
        </motion.h3>
        <div className={styles.grid}>
          {items.map((item, idx) => (
            <motion.article 
              className={styles.card} 
              key={item.id}
              initial={{y:20,opacity:0}} 
              whileInView={{y:0,opacity:1}} 
              viewport={{once:true}} 
              transition={{delay: idx*0.08}}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to={`/destination/${item.id}`} className={styles.cardLink}>
                <div className={styles.media}>
                  <img src={item.img} alt={item.title}/>
                  <div className={styles.overlay}>
                    <span className={styles.viewMore}>Толығырақ көру</span>
                  </div>
                </div>
                <div className={styles.body}>
                  <h3 className={styles.h3}>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <span className={styles.link}>
                    Толық ақпарат →
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}