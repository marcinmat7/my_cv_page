import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, BriefcaseBusiness, GraduationCap, Moon, Sun } from 'lucide-react';
import './styles.css';

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
        <button className="cat-mascot" type="button" aria-label="Virtual cousin cat — chat coming soon" title="Chat coming soon">
          <span className="cat-tail" />
          <span className="cat-body"><span className="cat-chest" /></span>
          <span className="cat-head">
            <span className="cat-ear cat-ear-left"><i /></span>
            <span className="cat-ear cat-ear-right"><i /></span>
            <span className="cat-face-patch cat-face-patch-left" />
            <span className="cat-face-patch cat-face-patch-right" />
            <span className="cat-eye cat-eye-left"><i /></span>
            <span className="cat-eye cat-eye-right"><i /></span>
            <span className="cat-nose" />
            <span className="cat-mouth cat-mouth-left" />
            <span className="cat-mouth cat-mouth-right" />
            <span className="cat-whiskers cat-whiskers-left" />
            <span className="cat-whiskers cat-whiskers-right" />
          </span>
          <span className="cat-paw cat-paw-left" />
          <span className="cat-paw cat-paw-right" />
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
