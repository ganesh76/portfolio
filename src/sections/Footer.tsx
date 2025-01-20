import SocialFooter from '@/components/SocialFooter';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function Footer() {
  const [githubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    // Fetch GitHub information here and update state
    // Example using GitHub API:
    // fetch('https://api.github.com/repos/ganesh76/portfolio')
    //   .then(response => response.json())
    //   .then(data => setGitHubInfo({ stars: data.stargazers_count, forks: data.forks_count }));
  }, []);

  return (
    <footer>
       <SocialFooter />
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
        delay: 1.95,
      }}
    >
      {/* <SocialFooter /> */}
       <a
        href="https://github.com/ganesh76/portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        Built by Ganesh Gundu
      </a>
    </motion.div>
   
      {/* <a
        href="https://github.com/ganesh76/portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        <span className="footer-info">Built by Ganesh Gundu</span>
      </a> */}
      {githubInfo.stars !== null && (
        <span className="footer-icon">
          {/* Display stars */}
          {githubInfo.stars}
        </span>
      )}
      {githubInfo.forks !== null && (
        <span className="footer-icon">
          {/* Display forks */}
          {githubInfo.forks}
        </span>
      )}
    </footer>
  );
}

export default Footer;
