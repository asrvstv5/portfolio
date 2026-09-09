import { ArrowLeft, Download, Github, Linkedin, Mail } from 'lucide-react';

export default function ResumePage() {
  return (
    <main>
      <section className="section" style={{ maxWidth: 920, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 24, alignItems: 'flex-start', marginBottom: 48 }}>
          <div>
            <div className="section-label">AMITESH SRIVASTAVA</div>
            <h1 style={{ fontSize: 'clamp(42px, 7vw, 72px)', marginBottom: 12 }}>Software Engineer</h1>
            <p className="lead">Backend-focused full-stack engineer building scalable AI, infrastructure, and customer-facing products at Meta and formerly Microsoft.</p>
          </div>
          <a className="button secondary" href="/"> <ArrowLeft size={16}/> Portfolio</a>
        </div>

        <div className="identity-links" style={{ marginBottom: 44 }}>
          <a href="mailto:amitesh.s.sr@gmail.com"><Mail size={16}/> amitesh.s.sr@gmail.com</a>
          <a href="https://www.linkedin.com/in/amitesh-srivastava-b5b740105/"><Linkedin size={16}/> LinkedIn</a>
          <a href="https://github.com/asrvstv5"><Github size={16}/> GitHub</a>
        </div>

        <div className="section-label">EXPERIENCE</div>
        <article className="job" style={{ marginBottom: 24 }}><div className="company-mark meta">∞</div><div className="job-main"><h3>Meta</h3><strong>Software Engineer · May 2025 – Present · New York, NY</strong><p>Led development across Horizon and Meta’s Family of Apps, including live playable in-line advertising, AI-powered game creation, Avatar Editor Marketplace, recommendation systems, and cloud-streamed game infrastructure.</p></div></article>
        <article className="job" style={{ marginBottom: 52 }}><div className="company-mark ms"><i></i><i></i><i></i><i></i></div><div className="job-main"><h3>Microsoft</h3><strong>Software Engineer II · May 2019 – Feb 2025 · Seattle, WA</strong><p>Built full-stack Power Platform and Microsoft Copilot plugin infrastructure, GraphQL services, deployment pipelines, cybersecurity tooling, and network engineering systems.</p></div></article>

        <div className="section-label">EDUCATION</div>
        <div className="interest-card" style={{ marginBottom: 52 }}><h3>University of Illinois Urbana-Champaign</h3><p>B.S. Computer Engineering · Aug 2015 – May 2019</p></div>

        <div className="section-label">SKILLS</div>
        <div className="interest-card"><h3>Languages & Technologies</h3><p>Python, Java, C++, C#, JavaScript, TypeScript, SwiftUI, Node.js, React, React Native, REST APIs, GraphQL, PyTorch, CI/CD, Git, Power BI, Linux, Flask, LangChain.</p></div>
      </section>
    </main>
  );
}
