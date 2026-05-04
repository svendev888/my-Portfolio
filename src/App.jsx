import { useState } from 'react'
import './App.css'

function App() {
  const [activeProject, setActiveProject] = useState(null)
  const isRealProjectUrl = (url) => Boolean(url) && !url.includes('example.com')

  const experience = [
    {
      company: 'Blenders',
      location: 'California, United States',
      role: 'Lead Full Stack Developer',
      period: 'Jul 2023 – Nov 2025',
      bullets: [
        'Led development of high-traffic Shopify and Shopify Plus storefronts using Liquid, JavaScript, HTML5, CSS3, and Tailwind CSS.',
        'Built custom Shopify apps and integrations with Node.js, REST, GraphQL, and OAuth2; integrated payments, shipping, and engagement tools.',
        'Improved frontend performance (lazy loading, asset optimization, caching, modern build tooling), cutting load times by 30%+.',
        'Partnered with design, product, and marketing in Agile delivery through code reviews, PRs, and release planning.',
      ],
    },
    {
      company: 'ONA Creative',
      location: 'California, United States',
      role: 'Senior Shopify Developer',
      period: 'May 2023 – Sep 2023',
      bullets: [
        'Developed and customized Shopify themes for responsive, user-friendly ecommerce experiences.',
        'Implemented storefront functionality with Liquid, JavaScript, HTML, and CSS aligned to business and design needs.',
        'Integrated third-party apps, payment gateways, and external services; optimized page speed and theme structure.',
        'Launched custom sections, landing pages, and promotional experiences with design and marketing teams.',
      ],
    },
    {
      company: 'Kreatika',
      location: 'Toronto, Ontario, Canada',
      role: 'Senior Full Stack Developer',
      period: 'Dec 2020 – Apr 2023',
      bullets: [
        'Built full-stack ecommerce with Shopify, Shopify Plus, Node.js, PHP, and custom REST and GraphQL APIs.',
        'Delivered custom Shopify apps and Express.js middleware connecting stores to third-party and internal systems.',
        'Implemented headless commerce with React and Next.js; customized themes with Liquid, JavaScript, and Tailwind CSS.',
        'Designed backend workflows for payments, inventory, refunds, and orders; improved performance via caching and query tuning.',
        'Managed Docker and AWS deployments; collaborated via GitHub and Agile practices.',
      ],
    },
    {
      company: 'Coinportfol',
      location: 'Remote',
      role: 'Senior Software Engineer',
      period: 'Aug 2017 – Nov 2020',
      bullets: [
        'Built end-to-end applications with React, Next.js, Node.js, and microservices.',
        'Secured backends with Express, Django, and FastAPI using JWT and OAuth2.',
        'Worked with Solidity and Rust smart contracts; optimized databases with PostgreSQL and MongoDB.',
        'Used Docker, Kubernetes, and CI/CD (GitHub Actions, GitLab CI) for reliable releases.',
      ],
    },
    {
      company: 'Accenture',
      location: 'Remote',
      role: 'Full Stack Developer',
      period: 'Nov 2014 – May 2017',
      bullets: [
        'Developed front-end and back-end for 20+ web applications across multiple business use cases.',
        'Built responsive UIs and PHP-based backend logic; improved APIs and reduced response time by ~20%.',
        'Strengthened server and database performance, cross-browser compatibility, and mobile responsiveness.',
        'Worked in Agile teams on continuous feature delivery and technical improvements.',
      ],
    },
    {
      company: 'Infosys',
      location: 'Remote',
      role: 'Full Stack Developer Intern',
      period: 'Aug 2013 – Jul 2014',
      bullets: [
        'Implemented UI components with JavaScript, jQuery, Mootools, and Knockout.',
        'Contributed to structured, maintainable code and architecture discussions.',
        'Supported browser compatibility, performance, and front-end consistency alongside senior developers.',
      ],
    },
    {
      company: 'Athletica Inc',
      location: 'Geneseo, New York',
      role: 'Lead Web Designer',
      period: 'Jul 2014 – Jan 2016',
      bullets: [
        'Managed redesign and launch of the main Team Cheer website.',
        'Led third-party web projects end-to-end; trained and mentored web design interns.',
        'Used analytics and campaign data to improve layouts and engagement; produced ads, email, and retargeting assets.',
        'Expanded ecommerce skills through NetSuite eCommerce platform work.',
      ],
    },
  ]

  const projects = [
    {
      kind: 'image',
      src: '/portfolio/PFSParts.jpg',
      title: 'PartsForVolvosOnline eCommerce Store',
      subtitle: 'VOLVO PARTS • UX • SEO • PERFORMANCE',
      projectUrl: 'https://www.partsforvolvosonline.com/',
      text: 'Developed and optimized a specialist Volvo parts ecommerce storefront with clearer category navigation, improved product discovery, and performance-focused frontend updates to support conversions and repeat customers.',
      tags: ['eCommerce', 'Automotive', 'UX/UI', 'SEO'],
    },
    {
      kind: 'image',
      src: '/portfolio/dieselprobrands-com.webp',
      title: 'DieselPro Brands eCommerce Website',
      subtitle: 'AUTOMOTIVE PARTS • UX • SEO • 2026',
      projectUrl: 'https://dieselprobrands.com/',
      text: 'Built and optimized an automotive parts ecommerce experience with clear category discovery, promotional merchandising blocks, and mobile-friendly product navigation to improve engagement, trust, and conversions.',
      tags: ['eCommerce', 'Automotive', 'UX/UI', 'SEO'],
    },
    {
      kind: 'image',
      src: '/portfolio/expert-network.webp',
      title: 'Expert Network Service Website',
      subtitle: 'CORPORATE • CMS • 2026',
      projectUrl: 'https://example.com/expert-network-service',
      text: 'Service website designed for professional credibility, clean navigation, and better lead generation flow.',
      tags: ['CMS', 'WordPress', 'Web Design'],
    },
    {
      kind: 'image',
      src: '/portfolio/disaster-services.webp',
      title: 'Restoration Services Website',
      subtitle: 'LOCAL BUSINESS • UI • 2026',
      projectUrl: 'https://example.com/restoration-services',
      text: 'Emergency-focused layout with strong service messaging and action-driven contact structure.',
      tags: ['Custom Code', 'Layout', 'Optimization'],
    },
    {
      kind: 'image',
      src: '/portfolio/shopify-pdp-1.png',
      title: 'High-Converting Shopify PDP',
      subtitle: 'PDP • CUSTOM CODE • 2026',
      projectUrl: 'https://example.com/high-converting-shopify-pdp',
      text: 'Product page concept built around conversion psychology, visual selling blocks, and buying confidence.',
      tags: ['PDP', 'Custom Code', 'CRO', 'Shopify'],
    },
    {
      kind: 'image',
      src: '/portfolio/mushmush-pdp-1.png',
      title: 'Mushmush PDP Redesign',
      subtitle: 'REDESIGN • CRO • 2026',
      projectUrl: 'https://mushmush.com.au/',
      text: 'A full product-page redesign for improved information hierarchy, engagement, and conversion rate optimization.',
      tags: ['Shopify', 'Redesign', 'CRO'],
    },
    {
      kind: 'image',
      src: '/portfolio/Dynamice%20Varian.png',
      title: 'Shopify Dynamic Variant Selection',
      subtitle: 'SHOPIFY • CUSTOM VARIANTS • 2026',
      projectUrl: 'https://example.com/shopify-filter-variant-demo',
      text: 'Custom Shopify variant-selection experience focused on clearer product options, faster decision making, and better mobile usability.',
      tags: ['Shopify', 'Custom Code', 'Variant UX'],
    },
  ]

  return (
    <main className="container">
      <header className="navbar">
        <a href="#" className="logo">Kenton Brown</a>
        <nav className="navlinks">
          <a href="#portfolio">Portfolio</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero section">
        <span className="shape"></span>
        <span className="shape-2"></span>
        <span className="shape-3"></span>
        <div className="hero-content fade-in">
          <h1 className="name">I&apos;m Kenton, glad to see you here.</h1>
          <p className="title">Senior Software Engineer • Full Stack • Shopify & Headless Commerce</p>
          <p className="hero-meta">
            Fort Lauderdale, Florida, United States •{' '}
            <a href="mailto:thekentonbrown@gmail.com">thekentonbrown@gmail.com</a>
            {' • '}
            <a href="tel:+13393990519">+1 (339) 399-0519</a>
          </p>
          <p className="desc">
            Senior Software Engineer with 10+ years of experience in full-stack development, specializing in .NET, C#, React,
            Node.js, and scalable cloud-based systems. Proven track record building high-performance ecommerce platforms,
            including Shopify and headless commerce. Strong expertise in API design, performance optimization, and cloud-native
            development—delivering secure, maintainable solutions aligned with business goals.
          </p>
          <div className="cta-row">
            <a className="btn primary" href="#portfolio">See Portfolio</a>
            <a className="btn" href="#contact">Contact Me</a>
          </div>
        </div>
      </section>

      <section id="portfolio" className="section">
        <h2 className="fade-in">Portfolio</h2>
        <div className="projects-wrap">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`project-card fade-in ${index % 2 === 1 ? 'reverse' : ''}`}
              style={{ animationDelay: `${120 + index * 90}ms` }}
            >
              <div className="media">
                {project.kind === 'video' ? (
                  <div className="video-wrap">
                    <video controls preload="metadata" onClick={() => setActiveProject(project)}>
                      {(project.sources || [{ src: project.src, type: project.type }]).map((s) => (
                        <source key={s.src} src={s.src} type={s.type} />
                      ))}
                    </video>
                    {project.videoNote && <p className="video-note">{project.videoNote}</p>}
                  </div>
                ) : (
                  <img
                    src={project.src}
                    alt={project.title}
                    onClick={() => setActiveProject(project)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setActiveProject(project)}
                  />
                )}
              </div>
              <div className="content">
                <h3 className="project-title">{project.title}</h3>
                <p className="meta">{project.subtitle}</p>
                <p className="project-text">{project.text}</p>
                <div className="chips">
                  {project.tags.map((tag) => (
                    <span key={tag} className="chip">{tag}</span>
                  ))}
                </div>
                {isRealProjectUrl(project.projectUrl) && (
                  <p className="project-url">
                    Project URL:{' '}
                    <a href={project.projectUrl} target="_blank" rel="noreferrer">
                      {project.projectUrl}
                    </a>
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section experience-section">
        <h2 className="fade-in">Company Experience</h2>
        <div className="experience-wrap">
          {experience.map((item, index) => (
            <article
              key={`${item.company}-${item.period}`}
              className="experience-card fade-in"
              style={{ animationDelay: `${150 + index * 80}ms` }}
            >
              <h3>{item.company}</h3>
              <p className="experience-location">{item.location}</p>
              <p className="experience-meta">{item.role} • {item.period}</p>
              <ul className="experience-bullets">
                {item.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="about fade-in section" id="about" style={{ animationDelay: '180ms' }}>
        <div className="about-columns">
          <div className="about-skills">
            <div className="skill-box skill-box--grow">
              <strong>Technical skills</strong>
              <p>
                <strong>Programming:</strong> C#, JavaScript, TypeScript, PHP, SQL, NoSQL<br />
                <strong>Frontend:</strong> React, Angular, Vue, HTML5, CSS3, Tailwind CSS, Liquid<br />
                <strong>Backend:</strong> .NET, ASP.NET Core, Node.js, Express, REST, GraphQL, Django, FastAPI<br />
                <strong>Ecommerce:</strong> Shopify, Shopify Plus, headless commerce, custom Shopify apps<br />
                <strong>Cloud &amp; DevOps:</strong> AWS, Azure, Docker, Kubernetes, GitHub Actions, GitLab CI<br />
                <strong>Auth &amp; data:</strong> OAuth2, JWT, PostgreSQL, MongoDB • <strong>Tools:</strong> GitHub, Webpack, Vite
              </p>
            </div>
            <div className="skill-box">
              <strong>Education</strong>
              <p>Florida State University — B.S. Computer Science (Apr 2009 – May 2013)</p>
            </div>
            <div className="skill-box">
              <strong>Languages</strong>
              <p>English — Advanced • Chinese — Advanced</p>
            </div>
          </div>
          <div className="about-intro">
            <h2>About</h2>
            <p>
              I am Kenton Brown, a Senior Software Engineer based in Fort Lauderdale, Florida. I focus on full-stack architecture,
              API design, cloud-native systems, and ecommerce—including Shopify, Shopify Plus, and headless commerce. I am committed
              to scalable, secure, and maintainable engineering aligned with business outcomes.
            </p>
            <div className="about-cta-bottom">
              <div className="cta-row">
                <a className="btn" href="#contact">Let&apos;s Connect</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact fade-in section" id="contact" style={{ animationDelay: '210ms' }}>
        <h2>Contact Me</h2>
        <p>Interested in full-stack, ecommerce, or cloud-driven products? Let&apos;s connect.</p>
        <p className="contact-meta">
          Fort Lauderdale, Florida, United States
        </p>
        <div className="contact-list">
          <a className="btn primary" href="mailto:thekentonbrown@gmail.com">Email</a>
          <a className="btn" href="tel:+13393990519">Call +1 (339) 399-0519</a>
        </div>
      </section>

      {activeProject && (
        <div className="lightbox" onClick={() => setActiveProject(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setActiveProject(null)}>×</button>
            <h3>{activeProject.title}</h3>
            {activeProject.kind === 'video' ? (
              <>
                <video controls autoPlay className="lightbox-media">
                  {(activeProject.sources || [{ src: activeProject.src, type: activeProject.type }]).map((s) => (
                    <source key={s.src} src={s.src} type={s.type} />
                  ))}
                </video>
                {activeProject.videoNote && <p className="video-note lightbox-note">{activeProject.videoNote}</p>}
              </>
            ) : (
              <img src={activeProject.src} alt={activeProject.title} className="lightbox-media" />
            )}
            {isRealProjectUrl(activeProject.projectUrl) && (
              <p className="project-url">
                Project URL:{' '}
                <a href={activeProject.projectUrl} target="_blank" rel="noreferrer">
                  {activeProject.projectUrl}
                </a>
              </p>
            )}
          </div>
        </div>
      )}
    </main>
  )
}

export default App
