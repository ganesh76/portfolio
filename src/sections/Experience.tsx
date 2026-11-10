import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import experiences from '../data/experience.json';

type ExperienceEntry = {
  name: string;
  role: string;
  url: string;
  start: string;
  end: string;
  shortDescription: string[];
};

function Experience() {
  const [selected, setSelected] = useState(0);
  const selectedExperience = experiences[selected] as ExperienceEntry;

  useEffect(() => {
    const underline = document.querySelector<HTMLElement>('.underline');
    if (underline) underline.style.top = `${selected * 2.5}rem`;
  }, [selected]);

  return (
    <motion.div
      className="experience"
      id="experience"
      style={{ paddingTop: '250px' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{ visible: { opacity: 1, y: -50 }, hidden: { opacity: 0, y: 0 } }}
    >
      <div className="title"><h2>My Work Experience</h2></div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {experiences.map((experience, index) => (
            <li
              className={`exp-slider-item ${index === selected ? 'exp-slider-item-selected' : ''}`}
              onClick={() => setSelected(index)}
              key={`${experience.name}-${index}`}
            >
              <span>{experience.name}</span>
            </li>
          ))}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{selectedExperience.role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                {selectedExperience.url ? (
                  <a href={selectedExperience.url} target="_blank" rel="noopener noreferrer">
                    {selectedExperience.name}
                  </a>
                ) : selectedExperience.name}
              </span>
            </h3>
            <p className="exp-details-range">{selectedExperience.start} - {selectedExperience.end}</p>
            <ul className="exp-details-list">
              {selectedExperience.shortDescription.map((description, index) => (
                <li key={index} className="exp-details-list-item">{description}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
