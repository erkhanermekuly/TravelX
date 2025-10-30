import { motion } from "framer-motion";
import styles from "./Footer.module.css";

export default function Footer(){
  return (
    <motion.footer 
      className={styles.footer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <motion.div 
          className={styles.row}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div>© {new Date().getFullYear()} Маңғыстауды зерттеу — Демо лендинг</div>
          <div className={styles.links}>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Privacy
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Шарттар
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
