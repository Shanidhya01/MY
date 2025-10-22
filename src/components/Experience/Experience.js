import React from 'react';
import { Section, SectionTitle, SectionText } from '../../styles/GlobalComponents';

const Experience = () => (
  <Section id="experience">
    <SectionTitle>Experience</SectionTitle>
    <SectionText>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.8' }}>
        <li style={{ marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 4px', fontWeight: '600' }}>
            Hacktoberfest 2025 — <span style={{ color: '#ff6b6b' }}>Supercontributor</span>
          </h3>
          <p style={{ margin: '0 0 8px', fontWeight: '500' }}>DigitalOcean</p>
          <ul style={{ listStyleType: 'circle', paddingLeft: '20px', margin: 0 }}>
            <li>Contributed to open-source projects during <b>Hacktoberfest 2025</b>.</li>
            <li>Completed <b>6+ accepted pull requests</b> across multiple repositories.</li>
            <li>Collaborated with global developers on GitHub and open-source maintainers.</li>
            <li>Earned the <b>Supercontributor</b> and <b>Tree Planted</b> badges.</li>
            <li>Ranked among the <b>Top 10,000 contributors</b> worldwide for early recognition.</li>
            <li>
              🌱 <b>View My Achievements:</b><br />
              🏅 Holopin Board:{' '}
              <a
                href="https://holopin.io/@shanidhya01"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#0070f3', textDecoration: 'none' }}
              >
                holopin.io/@shanidhya01
              </a><br />
              {/* 💻 GitHub:{' '} */}
              {/* <a
                href="https://github.com/Shanidhya01"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#0070f3', textDecoration: 'none' }}
              >
                github.com/Shanidhya01 */}
              {/* </a> */}
            </li>
          </ul>
        </li>

        {/* 🔹 Add more experiences below this block easily */}
        {/* <li style={{ marginBottom: '20px' }}>
          <h3>Company/Project Name — <span style={{ color: '#ff6b6b' }}>Role/Title</span></h3>
          <p>Organization Name</p>
          <ul style={{ listStyleType: 'circle', paddingLeft: '20px', margin: 0 }}>
            <li>Describe your contribution here.</li>
            <li>Add your achievements or metrics.</li>
            <li>Include links or portfolios if any.</li>
          </ul>
        </li> */}
      </ul>
    </SectionText>
  </Section>
);

export default Experience;
