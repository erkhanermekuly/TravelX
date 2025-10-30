import { motion } from "framer-motion";
import styles from "./Gallery.module.css";

export default function Gallery() {
    const imgs = [
  "/images/1.webp",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.webp",
  "/images/5.jpg",
  "/images/6.jpeg"
];
    return (
        <section id="gallery" className={styles.gallery}>
        <motion.h4 initial={{y:8,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true}}>Галерея</motion.h4>
            <div className={styles.grid}>
                {imgs.map((src, i) => (
                <motion.div key={i} className={styles.item} initial={{scale:0.98,opacity:0}} whileInView={{scale:1,opacity:1}} viewport={{once:true}} transition={{delay: i*0.05}}>
                    <img src={src} alt={`gallery-${i}`} />
                </motion.div>
                ))}
            </div>
        </section>
    )
}
