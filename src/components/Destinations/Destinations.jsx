import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Destination.module.css";

export default function Destinations(){
  const [selectedDestination, setSelectedDestination] = useState(null);

  const items = [
    {
      id: 1,
      title: "Бозжыра каньоны",
      excerpt: "Драмалық жарлар мен тұз жазықтары — күн шығу фотосуретін түсіру үшін тамаша.",
      img: "/images/bozjyra.jpeg",
      fullDescription: "Бозжыра каньоны — Маңғыстаудың ең керемет табиғи ғажайыптарының бірі. Миллиондаған жылдар бойы табиғат күштерімен қалыптасқан бұл ерекше жер пішіні өзінің таңғажайып сұлулығымен баурап алады.",
      details: {
        location: "Маңғыстау облысы, Каракия ауданы",
        bestTime: "Мамыр-қыркүйек, ерте таң немесе кеш кешкісін",
        duration: "1-2 күн",
        highlights: [
          "🌅 Керемет күн шығу және күн батуы",
          "📸 Фотография үшін тамаша жерлер",
          "🏔️ Ерекше геологиялық қабаттар",
          "🌟 Жұлдызды аспан бақылау"
        ]
      }
    },
    {
      id: 2,
      title: "Шеркала тауы",
      excerpt: "Рәміздік тау және керемет көріністері бар ежелгі бағыттар.",
      img: "/images/sherkala.webp",
      fullDescription: "Шеркала тауы — Маңғыстаудың рәміздік символы. Бұл ерекше тау түзілімі өзінің пішінімен үй иесі секілді көрінеді және көптеген аңыз-ертегілермен қоршалған.",
      details: {
        location: "Маңғыстау облысы, Бейнеу ауданы",
        bestTime: "Сәуір-қазан",
        duration: "Жарты күн",
        highlights: [
          "🏛️ Тарихи маңызы",
          "🎯 Фотосессия үшін ерекше",
          "🚶‍♂️ Жеңіл серуендеу",
          "📚 Жергілікті аңыздар"
        ]
      }
    },
    {
      id: 3,
      title: "Жағалау жолдары",
      excerpt: "Каспий теңізіндегі жасырын ойпаттар мен дәстүрлі балықшы ауылдары.",
      img: "/images/coastal.jpg",
      fullDescription: "Каспий теңізінің жағалауындағы керемет жолдар арқылы жасырын ойпаттарды, ежелгі қалашықтарды және дәстүрлі балықшы ауылдарын аралауға болады.",
      details: {
        location: "Каспий теңізі жағалауы",
        bestTime: "Мамыр-қыркүйек",
        duration: "2-3 күн",
        highlights: [
          "🏖️ Таза жағалаулар",
          "🐟 Балық аулау",
          "🏘️ Жергілікті мәдениет",
          "🌊 Теңіз серуендеуі"
        ]
      }
    }
  ];

  const openModal = (item) => {
    setSelectedDestination(item);
  };

  const closeModal = () => {
    setSelectedDestination(null);
  };

  return (
    <>
      <section id="destinations" className={styles.destSection}>
        <div className="container">
          <motion.h3 initial={{y:10,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true}}>Танымал бағыттар</motion.h3>
          <div className={styles.grid}>
            {items.map((item, idx) => (
              <motion.article 
                className={styles.card} 
                key={item.id}
                initial={{y:20,opacity:0}} 
                whileInView={{y:0,opacity:1}} 
                viewport={{once:true}} 
                transition={{delay: idx*0.08}}
                onClick={() => openModal(item)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={styles.media}>
                  <img src={item.img} alt={item.title}/>
                  <div className={styles.overlay}>
                    <span className={styles.viewMore}>Толығырақ көру</span>
                  </div>
                </div>
                <div className={styles.body}>
                  <h3 className={styles.h3}>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <button className={styles.link}>Ақпарат алу →</button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Модальды терезе */}
      <AnimatePresence>
        {selectedDestination && (
          <motion.div 
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className={styles.modal}
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeBtn} onClick={closeModal}>×</button>
              
              <div className={styles.modalContent}>
                <div className={styles.modalImage}>
                  <img src={selectedDestination.img} alt={selectedDestination.title} />
                </div>
                
                <div className={styles.modalInfo}>
                  <h2 className={styles.h2}>{selectedDestination.title}</h2>
                  <p className={styles.fullDesc}>{selectedDestination.fullDescription}</p>
                  
                  <div className={styles.details}>
                    <div className={styles.detailItem}>
                      <strong>📍 Орналасуы:</strong> {selectedDestination.details.location}
                    </div>
                    <div className={styles.detailItem}>
                      <strong>⏰ Ең жақсы уақыт:</strong> {selectedDestination.details.bestTime}
                    </div>
                    <div className={styles.detailItem}>
                      <strong>⏱️ Ұзақтығы:</strong> {selectedDestination.details.duration}
                    </div>
                  </div>
                  
                  <div className={styles.highlights}>
                    <h4>Ерекшеліктері:</h4>
                    <ul>
                      {selectedDestination.details.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={styles.modalActions}>
                    <button 
                      className={styles.bookBtn}
                      onClick={() => {
                        closeModal();
                        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      📱 Брондау
                    </button>
                    <button className={styles.shareBtn}>
                      📤 Бөлісу
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
