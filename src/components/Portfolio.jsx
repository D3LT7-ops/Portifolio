import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Sun, Moon, ExternalLink, Code2, Layers, Users, MessageCircle, Database, BarChart2, Award, Pen, Globe, GraduationCap } from 'lucide-react';
import logo from './images/logo.png';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    'React + Hooks & Context',
    'Node.js + Express',
    'MongoDB & Mongoose',
    'TypeScript',
    'Python',
    'Figma & UI/UX',
    'Git & GitHub',
    'Scrum Master',
    'Backend & Frontend',
    'JavaScript ES6+',
    'Oracle & PL/SQL',
    'Power BI',
    'Inkscape & Design Vetorial',
    'Inglês',
  ];

  const projects = [
    {
      title: 'Sistema de Gerenciamento de Vendas',
      description: 'Plataforma completa para controle de vendas, estoque e relatórios gerenciais voltada para pequenas empresas.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      status: 'Em desenvolvimento',
      highlight: 'Dashboard interativo com visualização em tempo real'
    },
    {
      title: 'Landing Page para Restaurante',
      description: 'Site responsivo e moderno com cardápio digital interativo e sistema de reservas online integrado.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Figma'],
      link: 'restaurantexemplo.com',
      highlight: 'Design otimizado para conversão mobile-first'
    }
  ];

  const experiences = [
    {
      role: 'Marketing',
      company: 'SIF Soft Jr',
      period: '2025 – Presente',
      description: 'Atuação na área de marketing de empresa júnior, com foco em estratégias de comunicação, posicionamento de marca e apoio às iniciativas de crescimento e visibilidade da organização.',
      techs: ['Marketing', 'Design Vetorial', 'Inkscape', 'Comunicação']
    },
    {
      role: 'Desenvolvedor Full Stack Autônomo',
      company: 'Freelancer',
      period: '2023 – Presente',
      description: 'Desenvolvimento de soluções web completas, design de interfaces e facilitação ágil para diversos clientes. Atendimento desde a concepção até a entrega do produto final.',
      techs: ['React', 'Node.js', 'MongoDB', 'Figma', 'UX/UI']
    }
  ];

  const courses = [
    {
      name: 'Oracle Database & PL/SQL',
      institution: 'IFRS — Instituto Federal do Rio Grande do Sul',
      year: '2023',
      icon: Database,
      description: 'Fundamentos de banco de dados relacional, modelagem, consultas avançadas e programação com PL/SQL.'
    },
    {
      name: 'Power BI — Business Intelligence',
      institution: 'IFRS — Instituto Federal do Rio Grande do Sul',
      year: '2023',
      icon: BarChart2,
      description: 'Criação de dashboards, relatórios interativos, transformação de dados e visualização gerencial com Power BI.'
    },
    {
      name: 'Scrum Master',
      institution: 'SCRUMstudy',
      year: '2023',
      icon: Award,
      description: 'Metodologia ágil Scrum, facilitação de cerimônias, gestão de backlog e liderança de equipes de desenvolvimento.'
    },
    {
      name: 'Design Vetorial com Inkscape',
      institution: 'IFRS — Instituto Federal do Rio Grande do Sul',
      year: '2023',
      icon: Pen,
      description: 'Criação e edição de ilustrações vetoriais, identidade visual, logotipos e materiais gráficos profissionais.'
    },
    {
      name: 'Inglês',
      institution: 'IFRS — Instituto Federal do Rio Grande do Sul',
      year: 'Atual',
      icon: Globe,
      description: 'Estudo contínuo do idioma com foco em leitura técnica, documentações e comunicação profissional.'
    },
    {
      name: 'Sistemas de Informação',
      institution: 'IFNMG — Instituto Federal do Norte de Minas Gerais',
      year: '2023 – Presente',
      icon: GraduationCap,
      description: 'Bacharelado com foco em desenvolvimento de software, banco de dados, engenharia de sistemas e gestão de TI.'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-black text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? (darkMode ? 'bg-black/80 backdrop-blur-lg shadow-lg shadow-blue-500/5' : 'bg-white/80 backdrop-blur-lg shadow-lg') : ''}`}>
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="RC DEV" className="nav-logo" />
          </div>
          <div className="flex items-center gap-6">
            <a href="#sobre" className="hover:text-blue-400 transition-colors hidden md:block">Sobre</a>
            <a href="#experiencia" className="hover:text-blue-400 transition-colors hidden md:block">Experiência</a>
            <a href="#cursos" className="hover:text-blue-400 transition-colors hidden md:block">Cursos</a>
            <a href="#projetos" className="hover:text-blue-400 transition-colors hidden md:block">Projetos</a>
            <a href="#habilidades" className="hover:text-blue-400 transition-colors hidden md:block">Skills</a>
            <a href="#contato" className="hover:text-blue-400 transition-colors hidden md:block">Contato</a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-all ${darkMode ? 'bg-gray-900 hover:bg-gray-800' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-6">
            <div className="inline-block">
              <span className={`text-sm font-mono px-4 py-2 rounded-full ${darkMode ? 'bg-blue-950 text-blue-400 border border-blue-800' : 'bg-blue-50 text-blue-600 border border-blue-200'}`}>
                Disponível para novos projetos
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Olá, eu sou<br />
              <span className={`${darkMode ? 'text-blue-400' : 'text-blue-500'}`}>Helberth Renan</span>
            </h1>
            <div className="flex flex-wrap gap-3 text-lg md:text-xl opacity-80">
              <span className="flex items-center gap-2">
                <Code2 size={20} className="text-blue-400" />
                Full Stack Developer
              </span>
              <span className={darkMode ? 'text-gray-600' : 'text-gray-400'}>|</span>
              <span className="flex items-center gap-2">
                <Layers size={20} className="text-blue-400" />
                UX/UI Designer
              </span>
              <span className={darkMode ? 'text-gray-600' : 'text-gray-400'}>|</span>
              <span className="flex items-center gap-2">
                <Users size={20} className="text-blue-400" />
                Scrum Master
              </span>
            </div>
            <p className="text-xl md:text-2xl max-w-3xl leading-relaxed opacity-90">
              Transformo ideias em soluções digitais através de código limpo, design intuitivo e metodologias ágeis.
              Baseado em Salinas, MG — criando experiências que importam.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/D3LT7-ops"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-lg transition-all ${darkMode ? 'bg-gray-900 hover:bg-blue-950 hover:text-blue-400' : 'bg-gray-200 hover:bg-blue-100 hover:text-blue-500'}`}
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/helberth-renan-gomes-de-sousa-hrgs-657855354"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-lg transition-all ${darkMode ? 'bg-gray-900 hover:bg-blue-950 hover:text-blue-400' : 'bg-gray-200 hover:bg-blue-100 hover:text-blue-500'}`}
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://wa.link/bqgm5g"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-lg transition-all ${darkMode ? 'bg-gray-900 hover:bg-blue-950 hover:text-blue-400' : 'bg-gray-200 hover:bg-blue-100 hover:text-blue-500'}`}
              >
                <MessageCircle size={24} />
              </a>
              <a
                href="#contato"
                className={`px-6 py-3 rounded-lg font-medium transition-all ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
              >
                Entre em contato
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Sobre <span className={darkMode ? 'text-blue-400' : 'text-blue-500'}>mim</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed opacity-90">
                Sou desenvolvedor full stack com forte atuação em UX/UI e metodologias ágeis. Com experiência como autônomo desde 2023, tenho ajudado empresas e clientes a materializarem suas visões em produtos digitais funcionais e elegantes.
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                Formado em Sistemas de Informação pelo IFNMG, combino conhecimento técnico profundo com habilidades de design e gestão de projetos, sempre buscando entregar não apenas código, mas soluções completas.
              </p>
            </div>
            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200'}`}>
              <h3 className="text-xl font-bold mb-4 text-blue-400">Formação & Experiência</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Bacharel em Sistemas de Informação</p>
                  <p className="text-sm opacity-70">IFNMG - Instituto Federal do Norte de Minas Gerais</p>
                </div>
                <div className="pt-4 border-t border-gray-800">
                  <p className="font-semibold">Marketing na SIF Soft Jr</p>
                  <p className="text-sm opacity-70">2025 – Presente</p>
                  <p className="text-sm mt-2 opacity-80">Atuação em empresa júnior com foco em marketing, comunicação e posicionamento de marca.</p>
                </div>
                <div className="pt-4 border-t border-gray-800">
                  <p className="font-semibold">Desenvolvedor Full Stack Autônomo</p>
                  <p className="text-sm opacity-70">1 ano e 6 meses • 2023 - Presente</p>
                  <p className="text-sm mt-2 opacity-80">Desenvolvimento de soluções web completas, design de interfaces e facilitação ágil para diversos clientes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Minha <span className={darkMode ? 'text-blue-400' : 'text-blue-500'}>Experiência</span>
          </h2>
          <div className="relative">
            <div className={`absolute left-6 top-0 bottom-0 w-px ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />
            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <div key={index} className="flex gap-8 pl-16 relative">
                  <div className="absolute left-[18px] top-2 w-4 h-4 rounded-full bg-blue-500 flex-shrink-0" />
                  <div className={`flex-1 p-6 rounded-2xl transition-all hover:scale-[1.01] ${darkMode ? 'bg-gray-900 border border-gray-800 hover:border-blue-800' : 'bg-white border border-gray-200 hover:border-blue-300'}`}>
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <div>
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                        <p className={`font-medium ${darkMode ? 'text-blue-400' : 'text-blue-500'}`}>{exp.company}</p>
                      </div>
                      <span className={`text-sm px-3 py-1 rounded-full ${darkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>
                        {exp.period}
                      </span>
                    </div>
                    <p className="opacity-80 mt-3 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.techs.map((tech, i) => (
                        <span key={i} className={`text-sm px-3 py-1 rounded-full ${darkMode ? 'bg-gray-800 text-blue-400' : 'bg-gray-100 text-blue-600'}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="cursos" className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Cursos & <span className={darkMode ? 'text-blue-400' : 'text-blue-500'}>Certificações</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl transition-all hover:scale-[1.03] ${darkMode ? 'bg-gray-900 border border-gray-800 hover:border-blue-800' : 'bg-white border border-gray-200 hover:border-blue-300'}`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${darkMode ? 'bg-blue-950 text-blue-400' : 'bg-blue-50 text-blue-500'}`}>
                  <course.icon size={20} />
                </div>
                <h3 className="text-lg font-bold mb-1">{course.name}</h3>
                <p className={`text-sm font-medium mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`}>{course.institution}</p>
                <p className="text-sm opacity-75 leading-relaxed mb-4">{course.description}</p>
                <span className={`text-xs px-3 py-1 rounded-full ${darkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>
                  {course.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Projetos em <span className={darkMode ? 'text-blue-400' : 'text-blue-500'}>destaque</span>
          </h2>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group p-8 rounded-2xl transition-all hover:scale-[1.02] ${darkMode ? 'bg-gray-900 border border-gray-800 hover:border-blue-800' : 'bg-white border border-gray-200 hover:border-blue-300'}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  {project.link && (
                    <ExternalLink className="opacity-50 group-hover:opacity-100 group-hover:text-blue-400 transition-all" size={20} />
                  )}
                </div>
                <p className="text-lg mb-4 opacity-90">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`text-sm px-3 py-1 rounded-full ${darkMode ? 'bg-gray-800 text-blue-400' : 'bg-gray-100 text-blue-600'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm opacity-70 italic">{project.highlight}</p>
                {project.status && (
                  <p className="text-sm mt-2 text-blue-400">{project.status}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Habilidades <span className={darkMode ? 'text-blue-400' : 'text-blue-500'}>técnicas</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl text-center transition-all hover:scale-105 ${darkMode ? 'bg-gray-900 border border-gray-800 hover:border-blue-800' : 'bg-white border border-gray-200 hover:border-blue-300'}`}
              >
                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className={`p-12 rounded-3xl text-center ${darkMode ? 'bg-gradient-to-br from-gray-900 to-black border border-gray-800' : 'bg-gradient-to-br from-gray-100 to-white border border-gray-200'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vamos trabalhar <span className={darkMode ? 'text-blue-400' : 'text-blue-500'}>juntos</span>?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades para fazer parte da sua visão.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:helberthrenan@icloud.com"
                className={`flex items-center gap-2 px-8 py-4 rounded-lg font-medium transition-all ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
              >
                <Mail size={20} />
                Enviar email
              </a>
              <div className="flex gap-4">
                <a
                  href="https://github.com/D3LT7-ops"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-lg transition-all ${darkMode ? 'bg-gray-900 hover:bg-blue-950 hover:text-blue-400' : 'bg-gray-200 hover:bg-blue-100 hover:text-blue-500'}`}
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/helberth-renan-gomes-de-sousa-hrgs-657855354"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-lg transition-all ${darkMode ? 'bg-gray-900 hover:bg-blue-950 hover:text-blue-400' : 'bg-gray-200 hover:bg-blue-100 hover:text-blue-500'}`}
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://wa.link/bqgm5g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-lg transition-all ${darkMode ? 'bg-gray-900 hover:bg-blue-950 hover:text-blue-400' : 'bg-gray-200 hover:bg-blue-100 hover:text-blue-500'}`}
                >
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-6 border-t ${darkMode ? 'border-gray-900' : 'border-gray-200'}`}>
        <div className="container mx-auto max-w-5xl text-center opacity-70">
          <p>© 2025 Helberth Renan Gomes de Sousa. Desenvolvido com React.</p>
          <p className="text-sm mt-2">Salinas, MG — Brasil</p>
        </div>
      </footer>
    </div>
  );
}