const AboutMe = () => {
  return (
    <div className="aboutmecontainer">
      <div className="aboutmepic">
      <img src="\computer.png" width="500" height="500" />
      </div>
      <div>
        <button className="aboutmebutton">About Me</button>
        <div className="aboutmetitle">
            Why hire me for your company
        </div>
        <p className="aboutmep">
        I should be hired as a web developer due to my proficiency in both front-end and back-end development. With expertise in HTML, CSS, JavaScript, React, Node.js, and other relevant technologies, I possess a well-rounded skill set. My adaptability, problem-solving capabilities, and collaborative nature make me a valuable asset to any web development team seeking a versatile developer.
        </p>
        <button className="aboutmebutton2">Download Resume</button>
      </div>
    </div>
  )
}

export default AboutMe
