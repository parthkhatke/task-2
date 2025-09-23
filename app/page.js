import React from 'react'

const HomePage = () => {
  return (
    <div className="hero ">
      <div className="hero-content flex-col items-start">
        <div>
          <h1 className="text-5xl font-bold mb-4">Hi, I’m Parth Khatke</h1>
          <p className="py-2 text-lg">
            A passionate <span className="font-semibold">Java Backend Developer</span> skilled in building
            secure and scalable applications using <span className="font-semibold">Spring Boot</span>, 
            <span className="font-semibold"> Spring Security</span>, <span className="font-semibold">Hibernate</span>, 
            and <span className="font-semibold">MySQL</span>.
          </p>

          <div className="stats shadow my-6">
            <div className="stat">
              <div className="stat-title">Education</div>
              <div className="stat-value text-lg">B.Tech CSE</div>
              <div className="stat-desc">Medi-Caps University, CGPA 7.6</div>
            </div>
            <div className="stat">
              <div className="stat-title">Experience</div>
              <div className="stat-value text-lg">Full Stack Solutions Intern</div>
              <div className="stat-desc">The Modern Data Company (Sep 2025 - Dec 2025)</div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-2">Technical Skills</h2>
          <ul className="list-disc list-inside mb-4">
            <li><span className="font-semibold">Languages:</span> Java, SQL, HTML, CSS</li>
            <li><span className="font-semibold">Frameworks:</span> Spring Boot, Spring MVC, Spring Security, Spring Data JPA, Hibernate</li>
            <li><span className="font-semibold">Databases:</span> MySQL</li>
            <li><span className="font-semibold">Tools:</span> AWS (basic), Postman, VS Code, IntelliJ IDEA</li>
          </ul>

          <h2 className="text-2xl font-bold mb-2">Projects</h2>
          <ul className="list-disc list-inside mb-4">
            <li><span className="font-semibold">AI Email Reply Generator:</span> Java + Spring Boot app integrating Google Gemini API to generate context-aware replies.</li>
            <li><span className="font-semibold">Cloud File Storage:</span> Secure file storage app with OTP-based verification and MySQL storage.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-2">Certifications & Achievements</h2>
          <ul className="list-disc list-inside">
            <li>Java Basics (HackerRank)</li>
            <li>AWS Cloud Practitioner Essentials</li>
            <li>Participated in ODOO Sustainable India Hackathon</li>
            <li>Organized an event at Medi-Caps University</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HomePage
