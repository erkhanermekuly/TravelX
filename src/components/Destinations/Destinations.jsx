import { motion } from "framer-motion";
import styles from "./Destination.module.css";
export default function Destinations(){
    const items = [
  {
    id:1,
    title: "Бозжыра каньоны",
    excerpt: "Драмалық жарлар мен тұз жазықтары — күн шығу фотосуретін түсіру үшін тамаша.",
    img: "/images/bozjyra.jpeg"
  },
  {
    id:2,
    title: "Шерқала шатқалы",
    excerpt: "Рәміздік тау және керемет көріністері бар ежелгі бағыттар.",
    img: "/images/sherkala.webp"
  },
  {
    id:3,
    title: "Жағалау жолдары",
    excerpt: "Каспий теңізіндегі жасырын ойпаттар мен дәстүрлі балықшы ауылдары.",
    img: "/images/coastal.jpg"
  }
];
  return (
    <section id="destinations" className={styles.destSection}>
      <div className="container">
        <motion.h3 initial={{y:10,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true}}>Танымал бағыттар</motion.h3>
        <div className={styles.grid}>
          {items.map((it, idx) => (
            <motion.article className={styles.card} key={it.id}
              initial={{y:20,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true}} transition={{delay: idx*0.08}}>
              <div className={styles.media}>
                <img src={it.img} alt={it.title}/>
              </div>
              <div className={styles.body}>
                <h3>{it.title}</h3>
                <p>{it.excerpt}</p>
                <a href="#contact" className={styles.link}>Сапар жоспарлау →</a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
