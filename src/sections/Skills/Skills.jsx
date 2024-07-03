import React from 'react';
import styles from './SkillsStyles.module.css';
import { useTheme } from '../../common/ThemeContext';
import { useLanguage } from '../../common/LanguageContext.jsx';

const Skills = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();

  return (
    <section id="skills" className={`${styles.container} ${styles.skills}`}>
      <h1 className={`${styles.sectionTitle} ${styles.skills}`}>{language === 'fr' ? 'Mes Compétences' : 'My Skills'}</h1>
      <div className={`${styles.skillList} ${styles.skills}`}>
        <p>HTML 5</p>
        <p>CSS 3</p>
        <p>JavaScript</p>
        <p>Java</p>
      </div>
      <hr />
      <div className={`${styles.skillList} ${styles.skills}`}>
        <p>Vite</p>
        <p>React</p>
        <p>Vue.JS</p>
        <p>TypeScript</p>
        <p>JSX</p>
      </div>
      <hr />
      <div className={`${styles.skillList} ${styles.skills}`}>
        <p>PHP</p>
        <p>Laravel</p>
        <p>SQL</p>
        <p>Node.JS</p>
        <p>PL/SQL</p>
        <p>MariaDB</p>
      </div>
    </section>
  );
};

export default Skills;