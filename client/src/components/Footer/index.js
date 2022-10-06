import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer
      className="relative left-4 bottom-0
    flex justify-center items-center"
    >
      <div className="card flex flex-row">
        <p className="mr-5"> &copy;2022 By Gaming or Whatever </p>
        <a
          className="mx-2"
          href="https://github.com/chasechri/gamer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        </a>

        <a
          href="https://www.ea.com/games/apex-legends/news#game-updates"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGamepad}></FontAwesomeIcon>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
