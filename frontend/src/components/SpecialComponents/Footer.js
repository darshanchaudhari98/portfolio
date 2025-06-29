import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "../../styles/Footer.css";

const Footer = ({ isBatterySavingOn, addTab }) => {
  const linksData = [
    {
      href: "https://github.com/darshanchaudhari98",
      icon: require("../../assets/img/icons/github.png"),
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/darshan-chaudhari-8076b1200/",
      icon: require("../../assets/img/icons/linkedin.png"),
      label: "LinkedIn",
    },
    {
      href: "https://www.instagram.com/djchaudhari98/",
      icon: require("../../assets/img/icons/instagram.png"),
      label: "Instagram",
    },
    {
      href: "https://calendly.com/singhk6/book-time-with-kartavya",
      icon: require("../../assets/img/icons/calender.png"),
      label: "Book Time with Kartavya",
    },
    {
      href: "mailto:singhk6@mail.uc.edu",
      icon: require("../../assets/img/icons/email.png"),
      label: "Email",
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const offset = 52; // Adjust based on your navbar height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const updateScale = () => {
      const footerContent = document.querySelector(".footer");
      if (!footerContent) return;
      const screenHeight = window.innerHeight;
      const screenWidth = window.innerWidth;
      let scaleValue = 1;
      if (screenHeight < 826 && screenWidth > 576) {
        scaleValue = screenHeight / 826;
      }
      footerContent.style.zoom = `${scaleValue}`;
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <motion.footer
      className="footer"
      initial={isBatterySavingOn ? {} : { y: 50, opacity: 0 }}
      animate={isBatterySavingOn ? {} : { y: 0, opacity: 1 }}
      transition={isBatterySavingOn ? {} : { duration: 0.5, ease: "easeOut" }}
    >
      {/* Header Section */}
      <motion.div
        className="footer-header"
        initial={isBatterySavingOn ? {} : { opacity: 0, scale: 0 }}
        whileInView={isBatterySavingOn ? {} : { opacity: 1, scale: 1 }}
        transition={isBatterySavingOn ? {} : { delay: 0, type: "spring" }}
        whileHover={isBatterySavingOn ? {} : { scale: 1.01 }}
        whileTap={isBatterySavingOn ? {} : { scale: 0.99 }}
        onTap={() => scrollToSection("home")}
      >
        <h2>Darshan Chaudhari</h2>
        <p>Creating Impactful Solutions Through Code</p>
      </motion.div>

      {/* Navigation Links */}
      <motion.ul
        className="footer-navlinks"
        initial={isBatterySavingOn ? {} : { opacity: 0, scale: 0 }}
        whileInView={isBatterySavingOn ? {} : { opacity: 1, scale: 1 }}
        transition={isBatterySavingOn ? {} : { delay: 0, type: "spring" }}
      >
        {["about", "skills", "projects"].map((id, index) => (
          <li key={id}>
            <motion.button
              onClick={() => scrollToSection(id)}
              initial={isBatterySavingOn ? {} : { opacity: 0, scale: 0 }}
              animate={isBatterySavingOn ? {} : { opacity: 1, scale: 1 }}
              transition={
                isBatterySavingOn ? {} : { delay: 0.1 * index, type: "ease" }
              }
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </motion.button>
          </li>
        ))}
        <li key={"admin"}>
          <motion.button
            onClick={() => addTab("Admin", { adminTitle: "Admin Page" })}
            initial={isBatterySavingOn ? {} : { opacity: 0, scale: 0 }}
            animate={isBatterySavingOn ? {} : { opacity: 1, scale: 1 }}
            transition={
              isBatterySavingOn ? {} : { delay: 0.1 * 4, type: "ease" }
            }
          >
            Admin
          </motion.button>
        </li>
      </motion.ul>

      {/* Social Links */}
      <motion.div
        className="footer-social"
        initial={isBatterySavingOn ? {} : { opacity: 0, scale: 0 }}
        whileInView={isBatterySavingOn ? {} : { opacity: 1, scale: 1 }}
        transition={isBatterySavingOn ? {} : { delay: 0, type: "spring" }}
      >
        {linksData.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            title={link.label}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.3}
            dragTransition={{
              bounceStiffness: 250,
              bounceDamping: 15,
            }}
            whileInView={isBatterySavingOn ? {} : { opacity: 1, scale: 1 }}
            whileHover={isBatterySavingOn ? {} : { scale: 1.01, rotate: 360 }}
            whileTap={isBatterySavingOn ? {} : { scale: 0.99, rotate: 0 }}
            transition={isBatterySavingOn ? {} : { delay: 0, type: "spring" }}
          >
            <motion.img
              src={link.icon}
              alt={link.label}
              className="footer-icon"
              drag="false"
            />
          </motion.a>
        ))}
      </motion.div>

      {/* Footer Bottom */}
      <motion.div
        className="footer-bottom"
        initial={isBatterySavingOn ? {} : { opacity: 0, scale: 0 }}
        whileInView={isBatterySavingOn ? {} : { opacity: 1, scale: 1 }}
        transition={isBatterySavingOn ? {} : { delay: 0, type: "spring" }}
      >
        <p>
          &copy; {new Date().getFullYear()} Kartavya Singh. All rights reserved.
        </p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
