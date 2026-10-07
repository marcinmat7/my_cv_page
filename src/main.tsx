import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, BriefcaseBusiness, GraduationCap, Moon, Sun } from 'lucide-react';
import './styles.css';

const catPhoto = "data:image/webp;base64,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";

const photo = "data:image/jpeg;base64,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";

const experience = [
  {
    company: 'Klarna',
    role: 'Senior Data Scientist',
    period: 'Jan 2026 — Present',
    location: '',
    bullets: [
      'Credit risk modeling for underwriting and portfolio decisioning.',
      'Model calibration, performance monitoring, explainability and validation in a production fintech environment.'
    ]
  },
  {
    company: 'Santander Bank Polska',
    role: 'Senior Data Scientist | AML Specialist',
    period: 'Jul 2024 — Dec 2025',
    location: 'Warsaw, Poland',
    bullets: [
      'Developed, maintained and monitored ML-based models for anti-money-laundering use cases.',
      'Analyzed sensitive transaction patterns and supported broader AML / counter-terrorist financing processes.',
      'Worked with Python, PySpark, anomaly detection, autoencoders and model explainability.'
    ]
  },
  {
    company: 'Deloitte',
    role: 'Actuarial Data Scientist | Senior Consultant',
    period: 'Apr 2023 — Sep 2024',
    location: 'Warsaw, Poland',
    bullets: [
      'Built machine-learning models with explainability components across IFRS 17, insurance pricing and anomaly detection.',
      'Delivered end-to-end ML solutions, supported product development, client work and junior team members.'
    ]
  },
  {
    company: 'ING Tech Poland',
    role: 'Data Science Model Validation Expert',
    period: 'Jan 2022 — Mar 2023',
    location: 'Warsaw, Poland',
    bullets: [
      'Validated models used across ING Group, including KYC, ESG, clustering, NLP and chatbot use cases.',
      'Built challenger models and worked closely with model developers and stakeholders.'
    ]
  },
  {
    company: 'ING Tech Poland',
    role: 'Data Science Model Validation Senior Specialist',
    period: 'Feb 2021 — Dec 2021',
    location: 'Warsaw, Poland',
    bullets: ['Independent model validation and analytical review across group-level data science use cases.']
  },
  {
    company: 'Commerzbank AG',
    role: 'Mid Specialist / Junior Specialist — Model Validation',
    period: 'Sep 2017 — Jan 2021',
    location: 'Łódź, Poland',
    bullets: [
      'Performed model-validation work covering data acquisition, data-quality checks, statistical testing and qualitative assessment.',
      'Prepared validation reports, developed validation tools and refactored SAS / R code.'
    ]
  },
  {
    company: 'UNIQA Insurance Group',
    role: 'Actuarial Pricing Department — Intern',
    period: 'Jul 2017 — Sep 2017',
    location: 'Warsaw, Poland',
    bullets: ['Supported actuarial pricing work and preparation of PRIIPs-related documentation.']
  }
];

const education = [
  ['Warsaw University of Technology', 'Postgraduate Degree — Big Data: processing and analysis of large data sets', 'Mar 2022 — Feb 2023'],
  ['SGH Warsaw School of Economics', 'Postgraduate Degree — Academy of Analyst: R, Python & SAS', '2019 — 2020'],
  ['Łódź University of Technology', "Master's Degree — Mathematics", '2016 — 2018'],
  ['University of Łódź', 'Banking and Digital Finance', '2014 — 2016'],
  ['Łódź University of Technology', "Bachelor's Degree — Mathematics", '2013 — 2016']
];

const certifications = [
  'Python 3: Deep Dive (Part: Functional) — Udemy',
  'Machine Learning with Python — Coursera / IBM',
  'DeepLearning.AI TensorFlow Developer Specialization — Coursera',
  'Introduction to Git and GitHub — Coursera'
];

const skills = [
  'Credit Risk', 'PD Modeling', 'IFRS 9', 'Model Validation', 'AML',
  'Python', 'R', 'SQL', 'PySpark', 'Machine Learning', 'Explainable AI',
  'Calibration', 'SHAP', 'FastAPI', 'Docker'
];

function App() {
  const [dark, setDark] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  }, [dark]);

  return (
    <>
      <header className="topbar">
        <div className="shell topbar-inner">
          <a className="brand" href="#top">Marcin Matuszewski</a>
          <nav>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#projects">Projects</a>
          </nav>
          <button className="theme-button" aria-label="Toggle theme" onClick={() => setDark(v => !v)}>
            {dark ? <Sun size={16}/> : <Moon size={16}/>}
          </button>
        </div>
      </header>

      <main id="top" className="page shell">
        <aside className="sidebar">
          <img className="profile-photo" src={photo} alt="Marcin Matuszewski" />
          <div className="identity">
            <h1>Marcin Matuszewski</h1>
            <p>Senior Data Scientist</p>
            <span>Credit Risk · Machine Learning · Model Validation</span>
          </div>

          <div className="sidebar-block">
            <h2>Profile</h2>
            <p>
              Data scientist with a mathematics background and experience across banking, fintech,
              consulting, credit risk, model validation and AML.
            </p>
          </div>

          <div className="sidebar-block">
            <h2>Core expertise</h2>
            <div className="skill-list">
              {skills.map(skill => <span key={skill}>{skill}</span>)}
            </div>
          </div>

          <div className="sidebar-block">
            <h2>Links</h2>
            <div className="links">
              <a href="https://github.com/marcinmat7" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14}/></a>
              <a href="https://marcinmat7.github.io/" target="_blank" rel="noreferrer">Website <ArrowUpRight size={14}/></a>
            </div>
          </div>
        </aside>

        <section className="content">
          <section className="summary-card">
            <div>
              <span className="kicker">Senior Data Scientist</span>
              <h2>Risk modeling, validation and applied machine learning.</h2>
              <p>
                I work at the intersection of quantitative modeling and production data science,
                with a focus on credit-risk decision systems, robust validation and explainable ML.
              </p>
            </div>
            <div className="summary-meta">
              <div><strong>8+ years</strong><span>analytics & data science</span></div>
              <div><strong>Banking + fintech</strong><span>regulated modeling environments</span></div>
            </div>
          </section>

          <section className="cv-section" id="experience">
            <div className="section-title"><BriefcaseBusiness size={18}/><h2>Experience</h2></div>
            <div className="timeline">
              {experience.map((item, i) => (
                <article className="timeline-item" key={item.company + item.role}>
                  <div className="timeline-marker"><span>{i + 1}</span></div>
                  <div className="timeline-body">
                    <div className="role-row">
                      <div>
                        <h3>{item.role}</h3>
                        <h4>{item.company}</h4>
                      </div>
                      <div className="role-meta">
                        <span>{item.period}</span>
                        {item.location && <small>{item.location}</small>}
                      </div>
                    </div>
                    <ul>{item.bullets.map(b => <li key={b}>{b}</li>)}</ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="cv-section" id="projects">
            <div className="section-title"><ArrowUpRight size={18}/><h2>Selected project</h2></div>
            <article className="project-card">
              <div>
                <span className="kicker">Credit risk platform</span>
                <h3>RiskLab</h3>
                <p>
                  A modern credit-risk analytics workspace for model diagnostics, calibration,
                  stability, segmentation, monitoring and explainable validation workflows.
                </p>
              </div>
              <a href="https://github.com/marcinmat7" target="_blank" rel="noreferrer">View GitHub <ArrowUpRight size={14}/></a>
            </article>
          </section>

          <section className="cv-section" id="education">
            <div className="section-title"><GraduationCap size={18}/><h2>Education</h2></div>
            <div className="education-list">
              {education.map(([school, degree, period]) => (
                <article key={school + degree}>
                  <div><h3>{degree}</h3><p>{school}</p></div>
                  <span>{period}</span>
                </article>
              ))}
            </div>
          </section>

          <section className="cv-section">
            <div className="section-title"><h2>Certifications</h2></div>
            <div className="cert-grid">
              {certifications.map(cert => <div key={cert}>{cert}</div>)}
            </div>
          </section>
        </section>
      </main>

      <aside className="virtual-cousin" aria-label="Marcin's virtual cousin">
        <div className="cousin-bubble">
          <strong>Hi, I’m Marcin’s virtual cousin.</strong>
          <span>I know him very well — you can ask me any question about him.</span>
        </div>
        <button className="cat-image-button" type="button" aria-label="Virtual cousin cat — chat coming soon" title="Chat coming soon">
          <img className="cat-image" src={catPhoto} alt="" />
        </button>
      </aside>

      <footer className="footer shell">
        <span>© {new Date().getFullYear()} Marcin Matuszewski</span>
        <span>Senior Data Scientist · Poland</span>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
