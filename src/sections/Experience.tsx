import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>('.underline');
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const experiences = [
    {
      name: 'Providence India',
      role: 'Lead Software Engineer',
      url: '',
      start: 'October 2022',
      end: 'Present',
      shortDescription: [
        'As a Lead Software Engineer at Providence India, I spearheaded the development of cutting-edge Android and Flutter applications.',
        'Leveraging my expertise in full-stack cloud technologies such as Azure, React JS, Next JS, and Python, I delivered high-quality solutions that enhanced user experience and system performance.',
        'Collaborating with cross-functional teams, I successfully implemented innovative software solutions that drove business growth in the US healthcare domain.',
      ],
    },
    {
      name: 'Walmart Global Tech India',
      role: 'Software Engineer III',
      url: '',
      start: 'July 2022',
      end: 'October 2022',
      shortDescription: [
        'As a Software Engineer III at Walmart Global Tech India, I specialized in creating AR experiences for Walmart Shopping Shop. Leveraging Kotlin and MVVM + Clean architecture.',
        "My contributions to the Emerging Tech Team drove innovation and improved user interaction, aligning with Walmart's commitment to cutting-edge technology solutions.",
      ],
    },
    {
      name: 'DBS',
      role: 'Associate',
      url: '',
      start: 'June 2018',
      end: 'July 2022',
      shortDescription: [
        'Worked on building high-quality applications with accurate agile methodology and test-driven development. Taking part in sprint designing and walkthrough, code walkthrough, and following best coding practices.',
        "I was part of the core team that developed the multi-module architecture Android framework, which is extensively used across all of DBS's banking applications.",
        "I have developed some of the core modules of the DBSG app like Account Details, User Profile Settings, Credit Card.",
      ],
    },
    {
      name: 'EnterPi',
      role: 'Android Developer',
      url: '',
      start: 'August 2017',
      end: 'June 2018',
      shortDescription: [
        'In my role as an Android Developer at EnterPi, I spearheaded the development of cross-platform apps using React-Native.',
        'Developed a MVP react-native framework for efficient platform communication.',
        'Worked on 3+ native Android applications, ensuring seamless integration of native features into the apps.',
        'Collaborated with a talented team to deliver high-quality solutions that enhanced user experience and performance.',
      ],
    },
    {
      name: 'NumberMall',
      role: 'Junior Software Engineer',
      url: '',
      start: 'September 2015',
      end: 'August 2017',
      shortDescription: [
        'As a Junior Software Engineer at NumberMall, I spearheaded the migration to Android Studio from Eclipse IDE, streamlining the development process.',
        'Supported team in adopting Gradle build system for Android applications.',
        'Developed and implemented new features to enhance user experience.',
        'Collaborated with cross-functional teams to troubleshoot and resolve technical issues.',
      ],
    },
  ];

  return (
    <motion.div
      className="experience"
      id="experience"
      style={{ paddingTop: '250px' }}
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
        <h2>My Work Experience</h2>
      </div>
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
              <span>{experiences[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                {experiences[selected].name}
                {/* <Link href={experiences[selected].url} legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer" className="link">
                    {experiences[selected].name}
                  </a>
                </Link> */}
              </span>
            </h3>
            <p className="exp-details-range">
              {experiences[selected].start} - {experiences[selected].end}
            </p>
            <ul className="exp-details-list">
              {experiences[selected].shortDescription.map((description, index) => (
                <li key={index} className="exp-details-list-item">
                  {description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
