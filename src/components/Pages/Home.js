import React, { useState, useEffect } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaExternalLinkAlt,
  FaCode,
  FaBrain,
  FaIndustry,
  FaPills,
  FaPlane,
  FaDollarSign,
  FaShieldAlt,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaEnvelope,
} from 'react-icons/fa';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const projects = [
    {
      id: 'deep-ai',
      title: 'DEEP.AI Platform Implementation',
      description: "Led the deployment of BCG's GenAI-powered customer management platform for major telecom providers and B2B companies. Enhanced upselling, reduced churn, and transformed digital customer interactions with real-time AI insights.",
      icon: <FaBrain className="w-12 h-12" />,
      technologies: ['GenAI', 'Machine Learning', 'Customer Analytics', 'Real-time Processing'],
      color: 'from-blue-600 to-cyan-400',
    },
    {
      id: 'factory-future',
      title: 'Factory of the Future - IoT & Digital Twin',
      description: 'Modernized manufacturing operations for JBT and Cargill Salt using IoT sensors, digital twins, and edge computing. Built high-volume data ingestion systems with MQTT, Azure Event Grid, and real-time dashboards.',
      icon: <FaIndustry className="w-12 h-12" />,
      technologies: ['IoT', 'Digital Twin', 'Azure', 'MQTT', 'Edge Computing'],
      color: 'from-cyan-400 to-blue-500',
    },
    {
      id: 'drug-ai',
      title: 'DRUG.AI - Pharma Discovery Platform',
      description: 'Built an AI-powered tool that analyzes gene-disease relationships to suggest new uses for existing drugs. Transformed data science prototypes into production-ready systems.',
      icon: <FaPills className="w-12 h-12" />,
      technologies: ['AI/ML', 'Bioinformatics', 'Data Science', 'Production APIs'],
      color: 'from-orange-500 to-red-400',
    },
    {
      id: 'klm-optimization',
      title: 'KLM Flight Rerouting Optimization',
      description: 'Developed a real-time flight rerouting optimization engine for major EU airline disruptions. Went from concept to functional prototype in days, helping avoid substantial revenue loss.',
      icon: <FaPlane className="w-12 h-12" />,
      technologies: ['Optimization Algorithms', 'Real-time Systems', 'Aviation', 'Rapid Prototyping'],
      color: 'from-green-400 to-emerald-500',
    },
    {
      id: 'emerson-api',
      title: 'Emerson Pricing API',
      description: 'Led development of a mission-critical pricing API for industrial energy solutions. Integrated with Oracle and Vendavo for real-time pricing guidance, designed for high availability.',
      icon: <FaDollarSign className="w-12 h-12" />,
      technologies: ['REST APIs', 'Oracle Integration', 'High Availability', 'Enterprise Systems'],
      color: 'from-purple-500 to-indigo-600',
    },
    {
      id: 'inspection-tools',
      title: 'AI-Powered Inspection Tools',
      description: 'Developed mobile inspection applications using AI and geospatial analysis for nonprofit enforcement teams. Built predictive models to optimize inspection targeting.',
      icon: <FaShieldAlt className="w-12 h-12" />,
      technologies: ['Mobile Development', 'Geospatial Analysis', 'Predictive AI', 'Public Safety'],
      color: 'from-red-500 to-pink-500',
    },
  ];

  const skillCategories = [
    {
      id: 'programming',
      title: 'Programming & Platforms',
      skills: ['Python', 'JavaScript', 'TypeScript', 'C#', 'SQL', 'VBA'],
    },
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      skills: ['Generative AI', 'Machine Learning', 'Predictive Analytics', 'Computer Vision', 'NLP', 'Bioinformatics'],
    },
    {
      id: 'cloud',
      title: 'Cloud & Infrastructure',
      skills: ['Azure', 'Event Grid', 'Cosmos DB', 'IoT Hub', 'Docker', 'MQTT'],
    },
    {
      id: 'enterprise',
      title: 'Enterprise Integration',
      skills: ['Oracle', 'Vendavo', 'REST APIs', 'AMQP', 'Real-time Systems', 'High Availability'],
    },
    {
      id: 'specialized',
      title: 'Specialized Domains',
      skills: ['Digital Twins', 'Edge Computing', 'Optimization Algorithms', 'Geospatial Analysis', 'Manufacturing Systems', 'Telecommunications'],
    },
    {
      id: 'leadership',
      title: 'Leadership & Strategy',
      skills: ['Technical Leadership', 'Solution Architecture', 'Rapid Prototyping', 'Cross-functional Teams', 'Client Engagement', 'MVP Development'],
    },
  ];

  const experiences = [
    {
      id: 'bcg-manager',
      date: '2023 - Present',
      title: 'Software Engineering Manager',
      company: 'Boston Consulting Group',
      description: 'Leading cross-functional development teams to deliver innovative software solutions for Fortune 500 clients. Driving technical strategy and architecture decisions while mentoring junior developers and fostering a culture of continuous learning and excellence.',
    },
    {
      id: 'senior-engineer',
      date: '2020 - 2023',
      title: 'Senior Software Engineer',
      company: 'Tech Consulting Firm',
      description: 'Architected and developed scalable web applications using modern JavaScript frameworks. Collaborated with stakeholders to translate business requirements into technical solutions and implemented best practices for code quality and testing.',
    },
    {
      id: 'fullstack-dev',
      date: '2018 - 2020',
      title: 'Full Stack Developer',
      company: 'Software Development Agency',
      description: 'Built end-to-end web applications for diverse clients across multiple industries. Gained expertise in both frontend and backend technologies while working in an agile development environment.',
    },
  ];

  const contactLinks = [
    {
      id: 'github',
      icon: <FaGithub className="w-6 h-6" />,
      label: 'GitHub',
      href: 'https://github.com/shonlittle',
    },
    {
      id: 'linkedin',
      icon: <FaLinkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/shonlittle',
    },
    {
      id: 'email',
      icon: <FaEnvelope className="w-6 h-6" />,
      label: 'Email',
      href: 'mailto:shon@example.com',
    },
    {
      id: 'twitter',
      icon: <FaTwitter className="w-6 h-6" />,
      label: 'Twitter',
      href: 'https://twitter.com/shonlittle',
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

  const handleProjectAction = (action, projectId) => {
    console.log(action + ' action for project: ' + projectId);
  };

  const codeLines = [
    'const softwareEngineer = {',
    '  name: "Shon Little",',
    '  role: "Software Engineering Manager",',
    '  company: "Boston Consulting Group",',
    '  location: "Los Angeles, CA",',
    '  passion: "Building scalable solutions",',
    '};'
  ];

  return (
    <>
      <style jsx>{`
        @keyframes typewriter {
          0% { width: 0; }
          50% { width: 100%; }
          100% { width: 0; }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }

        .backdrop-blur-sm {
          backdrop-filter: blur(8px);
        }

        .backdrop-blur-lg {
          backdrop-filter: blur(16px);
        }

        .bg-clip-text {
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @media (max-width: 768px) {
          .text-5xl { font-size: 2.5rem; }
          .text-7xl { font-size: 3.5rem; }
          .text-4xl { font-size: 2rem; }
          .py-20 { padding-top: 4rem; padding-bottom: 4rem; }
          .mb-16 { margin-bottom: 3rem; }
          .gap-8 { gap: 1.5rem; }
          .gap-12 { gap: 2rem; }
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(17, 24, 39, 0.5);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #0066cc, #00d4ff);
          border-radius: 4px;
        }

        ::selection {
          background: rgba(0, 212, 255, 0.3);
          color: white;
        }

        button:focus,
        a:focus {
          outline: 2px solid #00d4ff;
          outline-offset: 2px;
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          ::before,
          ::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <div className="min-h-screen bg-gray-900 text-gray-100 relative overflow-x-hidden">
        {/* Enhanced Background Effects */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-900 to-cyan-900/20" />
          {/* Floating Particles */}
          {Array.from({ length: 30 }, (_, i) => (
            <div
              key={'particle-' + i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
              style={{
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animation: 'float ' + (15 + Math.random() * 10) + 's ease-in-out infinite',
                animationDelay: Math.random() * 10 + 's',
              }}
            />
          ))}
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-lg z-50 border-b border-gray-800/50 shadow-lg shadow-blue-500/10">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Shon Little
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group"
                    type="button"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 group-hover:w-full" />
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type="button"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden py-4 border-t border-gray-800 bg-gray-900/95 backdrop-blur-lg">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                    type="button"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Animated Background Orbs */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div 
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" 
              style={{ animationDelay: '1s' }} 
            />
            <div 
              className="absolute top-3/4 left-3/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" 
              style={{ animationDelay: '2s' }} 
            />
          </div>

          {/* Code Background Animation */}
          <div className="absolute inset-0 opacity-5 font-mono text-sm leading-relaxed p-8 overflow-hidden">
            {codeLines.map((line, index) => (
              <div
                key={index}
                className="mb-2 overflow-hidden whitespace-nowrap"
                style={{
                  animation: 'typewriter 20s linear infinite',
                  animationDelay: (index * 0.5) + 's',
                }}
              >
                {line}
              </div>
            ))}
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Shon Little
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-6">
              Software Engineering Manager
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Building next-generation AI and IoT solutions at Boston Consulting Group.
              From GenAI platforms transforming customer experiences to digital twins
              revolutionizing manufacturing - I lead teams that turn cutting-edge
              technology into measurable business impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1"
                type="button"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-500/10 transition-all duration-300 hover:-translate-y-1"
                type="button"
              >
                Get In Touch
              </button>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <FaChevronDown className="w-6 h-6 text-gray-400" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl opacity-20 blur" />
                <div className="relative bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 text-center border border-gray-700/50">
                  <div className="w-48 h-48 bg-gray-700 rounded-2xl mx-auto flex items-center justify-center text-6xl mb-6 transition-transform duration-300 hover:scale-105">
                    👨‍💻
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-400">
                    <FaMapMarkerAlt className="w-4 h-4" />
                    <span>Los Angeles, CA</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-gray-300">
                  As a Software Engineering Manager at Boston Consulting Group, I
                  architect and deliver transformative technology solutions for Fortune
                  500 clients across telecommunications, manufacturing, healthcare, and
                  beyond. My expertise spans from GenAI platforms and IoT ecosystems to
                  enterprise APIs and optimization algorithms.
                </p>
                <p className="text-gray-300">
                  I have led engineering teams through rapid prototyping to production
                  deployment, turning data science concepts into scalable systems that
                  drive real business outcomes. Whether implementing DEEP.AI
                  for customer management, building digital twins for manufacturing, or
                  creating AI-powered inspection tools, I bridge the gap between
                  cutting-edge research and practical business solutions.
                </p>
                <p className="text-gray-300">
                  My approach combines technical depth with strategic thinking -
                  understanding not just how to build something, but why it matters and
                  how it fits into the broader business ecosystem. I am passionate
                  about mentoring teams, fostering innovation, and delivering solutions
                  that create lasting impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 bg-gray-800/30 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => (
                <div
                  key={category.id}
                  className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10"
                  style={{ animationDelay: (index * 0.1) + 's' }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-600/20 text-blue-300 border border-blue-500/30 rounded-full text-sm hover:bg-blue-500/30 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="bg-gray-800/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10"
                  style={{ animationDelay: (index * 0.2) + 's' }}
                >
                  <div className={'h-48 bg-gradient-to-br ' + project.color + ' flex items-center justify-center text-white relative overflow-hidden'}>
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="relative z-10">{project.icon}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-gray-100 hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-orange-600/20 text-orange-300 border border-orange-500/30 rounded-lg text-xs hover:bg-orange-500/30 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleProjectAction('details', project.id)}
                        className="flex items-center gap-2 px-4 py-2 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500/10 transition-all duration-300"
                        type="button"
                      >
                        <FaCode className="w-4 h-4" />
                        Details
                      </button>
                      <button
                        onClick={() => handleProjectAction('case-study', project.id)}
                        className="flex items-center gap-2 px-4 py-2 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500/10 transition-all duration-300"
                        type="button"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                        Case Study
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-4 bg-gray-800/30 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Professional Journey
            </h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-cyan-400" />

              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative flex items-center mb-12 ${
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full border-4 border-gray-900 z-10" />

                  {/* Content */}
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    } ml-16 md:ml-0`}
                  >
                    <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10">
                      <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-2">
                        <FaCalendarAlt className="w-4 h-4" />
                        {exp.date}
                      </div>
                      <h3 className="text-xl font-bold mb-1 text-gray-100">{exp.title}</h3>
                      <p className="text-orange-400 font-medium mb-3">{exp.company}</p>
                      <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Let&apos;s Connect
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              I&apos;m always interested in discussing new opportunities, innovative
              projects, or simply connecting with fellow tech enthusiasts. Feel free
              to reach out through any of the channels below.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {contactLinks.map((contact, index) => (
                <a
                  key={contact.id}
                  href={contact.href}
                  target={contact.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-gray-800/70 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-blue-500/50 hover:bg-gray-700/50 transition-all duration-300 text-gray-300 hover:text-cyan-400 hover:-translate-y-1"
                  style={{ animationDelay: (index * 0.1) + 's' }}
                >
                  {contact.icon}
                  <span className="font-medium">{contact.label}</span>
                </a>
              ))}
            </div>
          </div>
