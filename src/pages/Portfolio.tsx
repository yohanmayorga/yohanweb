import styles from "@/styles/Portfolio.module.css";
import ArchiveCard from "@/components/ArchiveCard";
import weather from "@/../public/assets/weather.png";
import pokedex from "@/../public/assets/pokedex.png";
import photographer from "@/../public/assets/photographer.png";
import React from "react";

const Portfolio = () => {
  return (
    <div id="portfolio" className={styles.body}>
      <h1 className={styles.title}>Portfolio</h1>
      <div className={styles.archive}>
        <ArchiveCard
          img={weather}
          title="Weather App"
          des="Web application that allows you to check the weather in
          different cities around the world. The application uses the query to an API to obtain information in real time. It contains information about the current state of the weather
          you select, and the forecast for the next seven days."
          listItem={["NextJS", "HTML", "CSS", "JavaScript", "API", "Tailwind"]}
          linkGithub="https://github.com/yohanmayorga/weatherapp"
          linkDeploy="https://weatherapp-obzz58ngc-yohanmayorgas-projects.vercel.app/"
        />
        <ArchiveCard
          img={pokedex}
          title="Pokedex"
          des="Simple web application containing the information of 151 Pokemon.
          The purpose of the application is to demonstrate a simple way to obtain
          and display free information available on the web, through the use of APIs."
          listItem={[
            "HTML",
            "CSS",
            "TypeScript",
            "Fetch",
            "React",
            "NextJS",
            "JavaScript",
            "API",
            "Tailwind",
          ]}
          linkGithub="https://github.com/yohanmayorga/pokedex"
          linkDeploy="https://pokedex-phi-ebon.vercel.app/"
        />
        <ArchiveCard
          img={photographer}
          title="Photographer"
          des="Simple website, designed for a person who wants to offer their
          photography services. It is a simple design, adapted to all
          screen formats, dedicated to demonstrating the use of
          technologies such as HTML, CSS, Javascript, React, Tailwind and Typescript. For its construction, I used resources available on the web such as Tailblocks , and the official Tailwind documentation."
          listItem={["NextJS", "HTML", "CSS", "JavaScript", "API", "Tailwind"]}
          linkGithub="https://github.com/yohanmayorga/photographer"
          linkDeploy="https://photographer-flax.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Portfolio;
