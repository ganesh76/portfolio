import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import getConfig from 'next/config'

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    console.log('Element is in view: ', isInView);
  }, [isInView]);

  const { publicRuntimeConfig } = getConfig()
  const profilePicPath = publicRuntimeConfig.staticFolder +  "/etc/me.webp"

  const mobileText = {
    intro:
      'Hello! I am Ganesh Gundu, a design-minded Software Engineer focused on building full-stack web and mobile applications. I have more than 10 years of professional working experience and I have completed multiple projects with high-quality standards and customer satisfaction',
    experience:
      'As a Lead Software Engineer at Providence India, I develop and implement full-stack web and mobile experiences with custom UI components. My expertise includes React JS, Next JS, Native Android, Flutter, Python, Cloud platforms - Azure, GCP and frameworks like FastAPI.',
  };



  const desktopText = {
    intro:
    'Hello! I am Ganesh Gundu, a design-minded Software Engineer focused on building full-stack web and mobile applications. I have more than 10 years of professional working experience and I have completed multiple projects with high-quality standards and customer satisfaction.',
    experience:
      'As a Lead Software Engineer at Providence India, I develop and implement full-stack web and mobile experiences with custom UI components. My expertise includes React JS, Next JS, Native Android, Flutter, Python, Azure, GCP and frameworks like FastAPI.',
  };

  

  return (
    <motion.div
      className="about"
      id="about"
      ref={ref}
      style={{ paddingTop: isMobile ? '150px' : '190px' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text text-justify">
            {isMobile ? mobileText.intro : desktopText.intro}
          </p>
          <p className="about-grid-info-text text-justify">
            {isMobile ? mobileText.experience : desktopText.experience}
          </p>
          <p className="about-grid-info-text text-justify">
            Here are a few technologies I&apos;ve been working with recently:
          </p>

          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Python</li>
            <li className="about-grid-info-list-item">Azure</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image
              src={profilePicPath}
              alt="profile"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
