import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Github, Moon, Sun } from 'lucide-react';
import './styles.css';

const roles = [
  { company: 'Klarna', role: 'Senior Data Scientist — Credit Risk Modeling', period: '2026 — Present', text: 'Building and validating credit risk models for underwriting and portfolio decisions, with focus on calibration, explainability and robust model performance.' },
  { company: 'Commerzbank', role: 'Credit Risk Validation', period: 'Previously', text: 'Validation of AIRB and IFRS 9 probability-of-default models, model performance assessment and regulatory-facing analytics.' },
  { company: 'ING', role: 'Group Model Validation', period: 'Previously', text: 'Independent model validation across banking risk use cases, challenging assumptions, methodology and implementation.' },
  { company: 'Santander Bank Polska', role: 'Data Scientist — AML', period: 'Previously', text: 'Machine-learning approaches for anomaly detection and AML, including Isolation Forest, autoencoders and model explainability.' },
  { company: 'Deloitte', role: 'Data Science Advisory', period: 'Previously', text: 'Applied analytics and machine-learning work in consulting environments.' },
];

const skills = ['Credit Risk', 'PD Modeling', 'IFRS 9', 'Model Validation', 'Python', 'SQL', 'PySpark', 'Machine Learning', 'Explainable AI', 'Calibration', 'FastAPI', 'Docker'];

function App() {
  const [dark, setDark] = React.useState(true);

  React.useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  }, [dark]);

  return (
    <>
      <header className="nav-wrap">
        <nav className="nav container">
          <a href="#top" className="brand">MM<span>.</span></a>
          <div className="nav-links">
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#expertise">Expertise</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="icon-btn" aria-label="Toggle theme" onClick={() => setDark(v => !v)}>{dark ? <Sun size={18}/> : <Moon size={18}/>}</button>
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="eyebrow">Senior Data Scientist · Credit Risk · Machine Learning</div>
          <h1>I build models that turn <span>uncertainty</span> into better decisions.</h1>
          <p className="hero-copy">I’m Marcin Matuszewski, a data scientist with a mathematics background and experience across credit risk, model validation, AML and applied machine learning in European banking and fintech.</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">View selected work <ArrowUpRight size={17}/></a>
            <a className="button ghost" href="https://github.com/marcinmat7" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
          </div>
          <div className="hero-meta">
            <span>Based in Poland</span><span>•</span><span>Open to senior / lead data science opportunities</span>
          </div>
        </section>

        <section className="section container" id="experience">
          <div className="section-head"><span>01</span><h2>Experience</h2><p>Risk modeling, validation and machine learning across banking, consulting and fintech.</p></div>
          <div className="timeline">
            {roles.map((item, i) => <article className="timeline-item" key={item.company}>
              <div className="timeline-dot">{String(i + 1).padStart(2, '0')}</div>
              <div><div className="timeline-top"><h3>{item.company}</h3><span>{item.period}</span></div><h4>{item.role}</h4><p>{item.text}</p></div>
            </article>)}
          </div>
        </section>

        <section className="section container" id="projects">
          <div className="section-head"><span>02</span><h2>Selected projects</h2><p>Projects that combine risk expertise with production-minded data science.</p></div>
          <div className="project-grid">
            <article className="project-card featured"><div className="project-kicker">Featured project</div><h3>RiskLab</h3><p>A modern credit-risk analytics workspace designed for model diagnostics, portfolio analysis and explainable risk workflows.</p><div className="tags"><span>Python</span><span>FastAPI</span><span>React</span><span>Credit Risk</span></div><a href="https://github.com/marcinmat7" target="_blank" rel="noreferrer">Project repository <ArrowUpRight size={16}/></a></article>
            <article className="project-card"><div className="project-kicker">Research / ML</div><h3>Fraud & anomaly detection</h3><p>Experimentation with modern anomaly-detection methods, explainability and evaluation for financial crime use cases.</p><div className="tags"><span>Isolation Forest</span><span>Autoencoders</span><span>SHAP</span></div></article>
          </div>
        </section>

        <section className="section container" id="expertise">
          <div className="section-head"><span>03</span><h2>Expertise</h2><p>A toolkit shaped by regulated financial modeling and hands-on engineering.</p></div>
          <div className="skills">{skills.map(skill => <span key={skill}>{skill}</span>)}</div>
        </section>

        <section className="section contact container" id="contact">
          <div className="contact-card"><div><div className="eyebrow">Let’s connect</div><h2>Interested in credit risk, ML or building better decision systems?</h2><p>I’m always happy to talk about modeling, validation, fintech and data products.</p></div><div className="contact-actions"><a className="button primary" href="https://github.com/marcinmat7" target="_blank" rel="noreferrer"><Github size={17}/> Find me on GitHub</a></div></div>
        </section>
      </main>

      <footer className="footer container"><span>© {new Date().getFullYear()} Marcin Matuszewski</span><span>Built with React + Vite</span></footer>
    </>
  );
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
