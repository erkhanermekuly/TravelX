import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./DestinationPage.module.css";

const destinations = [
  {
    id: 1,
    title: "Бозжыра каньоны",
    excerpt: "Драмалық жарлар мен тұз жазықтары — күн шығу фотосуретін түсіру үшін тамаша.",
    img: "/images/bozjyra.jpeg",
    coordinates: {
      latitude: 43.6844,
      longitude: 52.4794
    },
    videoId: "KO9slw3COg4?si=4Uj-5lX-479FBQjl",
    fullDescription: "Бозжыра каньоны — Маңғыстаудың ең керемет табиғи ғажайыптарының бірі. Миллиондаған жылдар бойы табиғат күштерімен қалыптасқан бұл ерекше жер пішіні өзінің таңғажайып сұлулығымен баурап алады. Бұл жерде сіз ерекше геологиялық қабаттарды, қызықты тас түзілімдерін және керемет пейзаждарды көре аласыз.",
    details: {
      location: "Маңғыстау облысы, Каракия ауданы",
      bestTime: "Мамыр-қыркүйек, ерте таң немесе кеш кешкісін",
      duration: "1-2 күн",
      distance: "Ақтаудан 170 км",
      difficulty: "Орташа",
      highlights: [
        "🌅 Керемет күн шығу және күн батуы",
        "📸 Фотография үшін тамаша жерлер",
        "🏔️ Ерекше геологиялық қабаттар",
        "🌟 Жұлдызды аспан бақылау",
        "🚗 Off-road серуендеу",
        "🏕️ Кемпинг мүмкіндіктері"
      ]
    }
  },
  {
    id: 2,
    title: "Шерқала тауы",
    excerpt: "Рәміздік тау және керемет көріністері бар ежелгі бағыттар.",
    img: "/images/sherkala.webp",
    coordinates: {
      latitude: 43.7044,
      longitude: 51.9344
    },
    videoId: "EdN0N_12gC0?si=CerKekNSUh-HhwCZ",
    fullDescription: "Шеркала тауы — Маңғыстаудың рәміздік символы. Бұл ерекше тау түзілімі өзінің пішінімен үй иесі секілді көрінеді және көптеген аңыз-ертегілермен қоршалған. Жергілікті халық бұл тауды қасиетті санайды.",
    details: {
      location: "Маңғыстау облысы, Бейнеу ауданы",
      bestTime: "Сәуір-қазан",
      duration: "Жарты күн",
      distance: "Ақтаудан 170 км",
      difficulty: "Жеңіл",
      highlights: [
        "🏛️ Тарихи маңызы",
        "🎯 Фотосессия үшін ерекше",
        "🚶‍♂️ Жеңіл серуендеу",
        "📚 Жергілікті аңыздар",
        "🌄 Панорамалық көріністер",
        "🦅 Жабайы табиғат бақылау"
      ]
    }
  },
  {
    id: 3,
    title: "Жағалау жолдары",
    excerpt: "Каспий теңізіндегі жасырын ойпаттар мен дәстүрлі балықшы ауылдары.",
    img: "/images/coastal.jpg",
    coordinates: {
      latitude: 44.5133,
      longitude: 50.2647
    },
    videoId: "k_WL73RCa94?si=fmR4FX7Rlf8uq_K9",
    fullDescription: "Каспий теңізінің жағалауындағы керемет жолдар арқылы жасырын ойпаттарды, ежелгі қалашықтарды және дәстүрлі балықшы ауылдарын аралауға болады. Бұл маршрут табиғи сұлулық пен мәдени мұраны біріктіреді.",
    details: {
      location: "Каспий теңізі жағалауы",
      bestTime: "Мамыр-қыркүйек",
      duration: "2-3 күн",
      distance: "Ақтаудан 50-200 км",
      difficulty: "Жеңіл",
      highlights: [
        "🏖️ Таза жағалаулар",
        "🐟 Балық аулау",
        "🏘️ Жергілікті мәдениет",
        "🌊 Теңіз серуендеуі",
        "🍽️ Жергілікті тағамдар",
        "⛵ Су спорты"
      ]
    }
  }
];

export default function DestinationPage() {
  const { id } = useParams();
  const destination = destinations.find(dest => dest.id === parseInt(id));

  if (!destination) {
    return (
      <div className={styles.notFound}>
        <h1>Дестинация табылмады</h1>
        <Link to="/" className={styles.backLink}>Басты бетке оралу</Link>
      </div>
    );
  }

  return (
    <div className={styles.destinationPage}>
      <div className={styles.hero}>
        <div className={styles.heroImage}>
          <img src={destination.img} alt={destination.title} />
          <div className={styles.heroOverlay}>
            <div className="container">
              <motion.div 
                className={styles.heroContent}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Link to="/" className={styles.backButton}>
                  ← Артқа
                </Link>
                <h1>{destination.title}</h1>
                <p>{destination.excerpt}</p>
                <div className={styles.coordinates}>
                  📍 {destination.coordinates.latitude}°, {destination.coordinates.longitude}°
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.content}>
          
          {/* Описание */}
          <motion.section 
            className={styles.description}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2>Сипаттама</h2>
            <p>{destination.fullDescription}</p>
          </motion.section>

          {/* Детали */}
          <motion.section 
            className={styles.details}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2>Толық ақпарат</h2>
            <div className={styles.detailsGrid}>
              <div className={styles.detailItem}>
                <strong>📍 Орналасуы:</strong>
                <span>{destination.details.location}</span>
              </div>
              <div className={styles.detailItem}>
                <strong>⏰ Ең жақсы уақыт:</strong>
                <span>{destination.details.bestTime}</span>
              </div>
              <div className={styles.detailItem}>
                <strong>⏱️ Ұзақтығы:</strong>
                <span>{destination.details.duration}</span>
              </div>
              <div className={styles.detailItem}>
                <strong>🚗 Қашықтық:</strong>
                <span>{destination.details.distance}</span>
              </div>
              <div className={styles.detailItem}>
                <strong>⚡ Қиындық:</strong>
                <span>{destination.details.difficulty}</span>
              </div>
              <div className={styles.detailItem}>
                <strong>🌐 Координаттар:</strong>
                <span>{destination.coordinates.latitude}°, {destination.coordinates.longitude}°</span>
              </div>
            </div>
          </motion.section>

          {/* Ерекшеліктер */}
          <motion.section 
            className={styles.highlights}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2>Ерекшеліктері</h2>
            <div className={styles.highlightsGrid}>
              {destination.details.highlights.map((highlight, index) => (
                <div key={index} className={styles.highlightItem}>
                  {highlight}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Видео */}
          <motion.section 
            className={styles.videoSection}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2>🎥 Видео</h2>
            <div className={styles.videoWrapper}>
              <iframe 
                src={`https://www.youtube.com/embed/${destination.videoId}`}
                title={`${destination.title} видео`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.section>

          {/* Карта */}
          <motion.section 
            className={styles.mapSection}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2>🗺️ Картада көру</h2>
            <div className={styles.mapWrapper}>
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50000!2d${destination.coordinates.longitude}!3d${destination.coordinates.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQxJzA0LjAiTiA1MsKwMjgnNDYuMCJF!5e1!3m2!1sen!2skz!4v1635123456789!5m2!1sen!2skz`}
                width="100%"
                height="400"
                style={{border:0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${destination.title} картасы`}
              ></iframe>
            </div>
          </motion.section>

          {/* Действия */}
          <motion.section 
            className={styles.actions}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <button 
              className={styles.mapBtn}
              onClick={() => {
                const url = `https://www.google.com/maps/search/?api=1&query=${destination.coordinates.latitude},${destination.coordinates.longitude}`;
                window.open(url, '_blank');
              }}
            >
              🗺️ Google Maps-та ашу
            </button>
            <button 
              className={styles.copyBtn}
              onClick={() => {
                navigator.clipboard.writeText(`${destination.title}: ${destination.coordinates.latitude}, ${destination.coordinates.longitude}`);
                alert('Координаттар көшірілді!');
              }}
            >
              📋 Координаттарды көшіру
            </button>
            <Link to="/" className={styles.backToListBtn}>
              📋 Барлық дестинацияларды көру
            </Link>
          </motion.section>

        </div>
      </div>
    </div>
  );
}