// CSS
import styles from './About.module.css';

import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div  className={styles.about}>
      <h2>Sobre o React<span>Blog</span></h2>
      <p>Este projeto consiste em um blog feito com <span>React</span> no Front-end e <span>Firebase</span> no back-end</p>
      <Link to='/posts/create'className="btn" >Criar post</Link>
    </div>
  );
};

export default About;
