import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import getConfig from 'next/config';

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    console.log('Element is in view: ', isInView);
  }, [isInView]);

  const { publicRuntimeConfig } = getConfig();
  const profilePicPath = publicRuntimeConfig.staticFolder + '/etc/me.webp';

  const intro =
    'Staff Software Engineer with 11+ years of experience building scalable distributed systems, cloud-native platforms, and full-stack applications across AWS, Azure, and GCP.';

  const platformExperience =
    'Experienced in platform engineering, cloud infrastructure, and AI-powered systems, with a focus on delivering reliable, observable, and scalable solutions. Currently working on agentic AI platforms and cloud-native architectures that support intelligent, high-performance applications at scale.';

  const engineeringApproach =
    'Passionate about solving complex engineering challenges through strong software design, distributed systems principles, and modern cloud technologies.';

  return (
    <motion.div className="about" id="about" ref={ref}
      style={{ paddingTop: isMobile ? '150px' : '190px' }}
      initial="hidden" whileInView="visible" viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{ visible: { opacity: 1, y: -50 }, hidden: { opacity: 0, y: 0 } }}>
      <div className="title"><h2>About Me</h2></div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text text-justify">{intro}</p>
          <p className="about-grid-info-text text-justify">{platformExperience}</p>
          <p className="about-grid-info-text text-justify">{engineeringApproach}</p>
          {/*
          <p className="about-grid-info-text text-justify">Here are a few technologies I&apos;ve been working with recently:</p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Python</li>
            <li className="about-grid-info-list-item">LangChain &amp; LangGraph</li>
          </ul>
          */}
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src={profilePicPath} alt="profile" fill sizes="(max-width: 768px) 100vw, 50vw" priority={false} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default About;
