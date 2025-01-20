import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay, faNpm, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

function SocialIcons() {
  const socialLinks = [
    { name: 'Github', icon: <FontAwesomeIcon icon={faGithub} style={{ width: "20px",
      height: "20px"}} />, link: 'https://github.com/ganesh76' },
    { name: 'LinkedIn', icon: <FontAwesomeIcon icon={faLinkedin} style={{ width: "20px",
      height: "20px"}}/>, link: 'https://www.linkedin.com/in/gganeshlink/' },
    { name: 'NPM', icon: <FontAwesomeIcon icon={faNpm} style={{ width: "20px",
      height: "20px"}} />, link: 'https://www.npmjs.com/package/ganeshg' },
    { name: 'Play Store', icon: <FontAwesomeIcon icon={faGooglePlay} style={{ width: "20px",
      height: "20px"}} />, link: 'https://play.google.com/store/apps/developer?id=G+Ganesh' },

  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
        delay: 1.95,
      }}
    >
    <div className="social-icons">
      <ul className="social-icons-list">
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className="social-icons-list-item">
            <a
              href={link}
              className="social-icons-list-item-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
    </motion.div>
  );
}

export default SocialIcons;
