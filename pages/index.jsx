import Link from "next/link";
// import Illustration from '../components/Illustration';
import styles from "../styles/HomePage.module.css";
import styling from "../styles/Home.module.css";
import logo from "../public/logo.png";
import Image from "next/image";

// FontAwesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGitAlt,
  faReact,
  faPython,
  faJs,
  faJava,
  faNode,
  faGolang,
} from "@fortawesome/free-brands-svg-icons";

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>HACK THE</h1>
          <h1>PLANET!</h1>
        </div>
        <d iv className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>CX330</h1>
            <h6 className={styles.bio}>
              Hacker | Researcher
              <span className={styles.react}> React</span>
              <span className={styles.react}> Binja</span>
            </h6>

            {/* Skill Icons Section */}
            <div className={styling.skillsContainer}>
              {/* Skill item for React */}
              <div className={styling.skillItem}>
                <FontAwesomeIcon
                  icon={faReact}
                  size="3x"
                  className={`${styling.icon} ${styling.reactIcon}`}
                />
                <div className={styling.skillText}>React</div>
              </div>

              {/* Skill item for WordPress */}
              <div className={styling.skillItem}>
                <FontAwesomeIcon
                  icon={faPython}
                  size="3x"
                  className={`${styling.icon} ${styling.pythonIcon}`}
                />
                <div className={styling.skillText}>Python</div>
              </div>

              {/* Skill item for WordPress */}
              <div className={styling.skillItem}>
                <FontAwesomeIcon
                  icon={faGitAlt}
                  size="3x"
                  className={`${styling.icon} ${styling.gitIcon}`}
                />
                <div className={styling.skillText}>Git</div>
              </div>

              {/* Skill item for JavaScript */}
              <div className={styling.skillItem}>
                <FontAwesomeIcon
                  icon={faJs}
                  size="3x"
                  className={`${styling.icon} ${styling.jsIcon}`}
                />
                <div className={styling.skillText}>JS</div>
              </div>

              {/* Skill item for Java*/}
              <div className={styling.skillItem}>
                <FontAwesomeIcon
                  icon={faJava}
                  size="3x"
                  className={`${styling.icon} ${styling.javaIcon}`}
                />
                <div className={styling.skillText}>Java</div>
              </div>

              {/* Skill item for Node.js */}
              <div className={styling.skillItem}>
                <FontAwesomeIcon
                  icon={faNode}
                  size="3x"
                  className={`${styling.icon} ${styling.nodeIcon}`}
                />
                <div className={styling.skillText}>Node.js</div>
              </div>

              {/* Skill item for Golang*/}
              <div className={styling.skillItem}>
                <FontAwesomeIcon
                  icon={faGolang}
                  size="3x"
                  className={`${styling.icon} ${styling.goIcon}`}
                />
                <div className={styling.skillText}>Go</div>
              </div>
            </div>

            <div className={styling.forMobile}>
              <Link href="/projects">
                <button className={`${styles.button} ${styling.workBtn}`}>
                  View Work
                </button>
              </Link>
              <Link href="/resume">
                <button className={`${styles.outlined} ${styling.contactBtn}`}>
                  My Resume
                </button>
              </Link>
            </div>
          </div>
          {/* <Illustration className={styles.illustration} /> */}
          {/* Logo image */}
          <div className={styling.imageWrapper}>
            <Image
              src={logo}
              alt="Sarcastic Geek Logo"
              className={styling.myImg}
            />
          </div>
        </d>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: "Home" },
  };
}
