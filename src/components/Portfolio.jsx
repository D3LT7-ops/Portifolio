import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Sun, Moon, ExternalLink, Code2, Layers, Users, MessageCircle, Database, BarChart2, Award, Pen, Globe, GraduationCap } from 'lucide-react';
const logo = 'data:image/png;base64,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';

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