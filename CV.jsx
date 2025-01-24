import React from "react";

const CV = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.name}>Kjetil Wiekhorst Jørgensen</h1>
        <p style={styles.contact}>
            Email:
	    <a href="mailto:jorgens-cv@pvv.org" target="_blank">jorgens-cv@pvv.org</a>
	    | Phone: +47 970 83 562 | Web:
            <a href="https://www.wiekhorst.org:3001/">www.wiekhorst.org/</a>
        </p>
      </header>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Summary</h2>
        <p style={styles.text}>
          A motivated software developer with 5+ years of experience in building scalable web applications.
          Proficient in JavaScript, React, and Node.js. Passionate about solving complex problems and
          learning new technologies.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Experience</h2>
        <div style={styles.job}>
          <h3 style={styles.jobTitle}>Software Engineer</h3>
          <p style={styles.company}>Tech Solutions Inc. | Jan 2020 - Present</p>
          <ul style={styles.list}>
            <li>Developed and maintained React-based web applications with 100k+ monthly users.</li>
            <li>Implemented RESTful APIs with Node.js to handle data and business logic.</li>
            <li>Collaborated with cross-functional teams to optimize performance and usability.</li>
          </ul>
        </div>
        <div style={styles.job}>
          <h3 style={styles.jobTitle}>Junior Developer</h3>
          <p style={styles.company}>Startup Hub | Jun 2017 - Dec 2019</p>
          <ul style={styles.list}>
            <li>Built interactive user interfaces using React and Redux.</li>
            <li>Worked with designers to improve UI/UX across multiple products.</li>
            <li>Performed code reviews and optimized applications for performance.</li>
          </ul>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Education</h2>
        <p style={styles.text}>B.Sc. in Computer Science, University of Tech | Graduated: 2017</p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Skills</h2>
        <ul style={styles.list}>
          <li>React, Redux, JavaScript</li>
          <li>Node.js, Express</li>
          <li>HTML, CSS, Bootstrap</li>
          <li>Git, Agile Development</li>
        </ul>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    margin: "0 auto",
    maxWidth: "800px",
    padding: "20px",
    lineHeight: 1.6,
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  name: {
    fontSize: "2em",
    marginBottom: "10px",
  },
  contact: {
    fontSize: "1em",
    color: "gray",
  },
  section: {
    marginBottom: "20px",
  },
  sectionTitle: {
    fontSize: "1.5em",
    borderBottom: "2px solid #000",
    marginBottom: "10px",
  },
  text: {
    fontSize: "1em",
  },
  job: {
    marginBottom: "15px",
  },
  jobTitle: {
    fontSize: "1.2em",
    fontWeight: "bold",
  },
  company: {
    fontSize: "1em",
    fontStyle: "italic",
    color: "gray",
  },
  list: {
    listStyleType: "disc",
    marginLeft: "20px",
  },
};

export default CV;
