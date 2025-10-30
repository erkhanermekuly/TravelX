import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";

export default function Contact(){
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  
  const sendToTelegram = async (data) => {
    const telegramMessage = `🆕 Жаңа сұрау!\n\n👤 Аты: ${data.name}\n📱 Телефон: ${data.phone}\n💬 Хабарлама: ${data.message}`;
    const telegramUrl = `https://t.me/ermekuly_014?text=${encodeURIComponent(telegramMessage)}`;
    window.open(telegramUrl, '_blank');
  };
  
  const onSubmit = (e) => {
    e.preventDefault();
    
    if (!name.trim() || !phone.trim() || !message.trim()) {
      alert("Барлық өрістерді толтырыңыз!");
      return;
    }
    
    const formData = {
      name: name.trim(),
      phone: phone.trim(),
      message: message.trim()
    };
    
    sendToTelegram(formData);
    alert(`Рақмет, ${name}! Сіздің сұрауыңыз Telegram арқылы жіберілді.`);
    setName(""); 
    setPhone(""); 
    setMessage("");
  };

  return (
    <motion.section 
      id="contact" 
      className={styles.contact}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        <motion.h5 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Байланыс / Брон жасау
        </motion.h5>
        <motion.p 
          className={styles.lead}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Сұрақтарыңыз бар ма? Немесе жеке бағыт қажет пе? Хабарлама қалдырыңыз.
        </motion.p>
        <motion.p 
          className={styles.notice}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          * міндетті өрістер. Сіздің деректеріңіз Telegram арқылы тікелей жіберіледі.
        </motion.p>
        <motion.form 
          className={styles.form} 
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.input 
            type="text"
            value={name} 
            onChange={e=>setName(e.target.value)} 
            placeholder="Сіздің атыңыз *" 
            required
            whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(5, 150, 105, 0.1)" }}
            transition={{ duration: 0.2 }}
          />
          <motion.input 
            type="tel"
            value={phone} 
            onChange={e=>setPhone(e.target.value)} 
            placeholder="Телефон нөміріңіз * (+7 705 123 4567)" 
            required
            whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(5, 150, 105, 0.1)" }}
            transition={{ duration: 0.2 }}
          />
          <motion.textarea 
            value={message} 
            onChange={e=>setMessage(e.target.value)} 
            placeholder="Не жоспарлап жатқаныңызды айтыңыз * (мысалы: Маңғыстауға 3 күндік сапар)" 
            rows="5" 
            required
            whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(5, 150, 105, 0.1)" }}
            transition={{ duration: 0.2 }}
          />
          <motion.div 
            className={styles.actions}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.button 
              type="submit" 
              className={styles.btnPrimary}
              whileHover={{ scale: 1.05, boxShadow: "0 4px 20px rgba(5, 150, 105, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              📱 Telegram-ға жіберу
            </motion.button>
            <motion.a 
              href="https://t.me/ermekuly_014" 
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnSecondary}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              💬 Тікелей жазу
            </motion.a>
          </motion.div>
        </motion.form>
      </div>
    </motion.section>
  );
}
