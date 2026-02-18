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