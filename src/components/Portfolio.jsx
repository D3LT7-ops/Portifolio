import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Sun, Moon, ExternalLink, Code2, Layers, Users, MessageCircle } from 'lucide-react';

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
    'JavaScript ES6+'
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

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-black text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? (darkMode ? 'bg-black/80 backdrop-blur-lg shadow-lg shadow-green-500/5' : 'bg-white/80 backdrop-blur-lg shadow-lg') : ''}`}>
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className={darkMode ? 'text-green-400' : 'text-green-600'}>HRGS</span>
            <span className="text-xs ml-2 opacity-70">v2.0</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#sobre" className="hover:text-green-400 transition-colors hidden md:block">Sobre</a>
            <a href="#projetos" className="hover:text-green-400 transition-colors hidden md:block">Projetos</a>
            <a href="#habilidades" className="hover:text-green-400 transition-colors hidden md:block">Skills</a>
            <a href="#contato" className="hover:text-green-400 transition-colors hidden md:block">Contato</a>
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
              <span className={`text-sm font-mono px-4 py-2 rounded-full ${darkMode ? 'bg-green-950 text-green-400 border border-green-800' : 'bg-green-50 text-green-700 border border-green-200'}`}>
                Disponível para novos projetos
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Olá, eu sou<br/>
              <span className={`${darkMode ? 'text-green-400' : 'text-green-600'}`}>Helberth Renan</span>
            </h1>
            <div className="flex flex-wrap gap-3 text-lg md:text-xl opacity-80">
              <span className="flex items-center gap-2">
                <Code2 size={20} className="text-green-400" />
                Full Stack Developer
              </span>
              <span className={darkMode ? 'text-gray-600' : 'text-gray-400'}>|</span>
              <span className="flex items-center gap-2">
                <Layers size={20} className="text-green-400" />
                UX/UI Designer
              </span>
              <span className={darkMode ? 'text-gray-600' : 'text-gray-400'}>|</span>
              <span className="flex items-center gap-2">
                <Users size={20} className="text-green-400" />
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
                className={`p-3 rounded-lg transition-all ${darkMode ? 'bg-gray-900 hover:bg-green-950 hover:text-green-400' : 'bg-gray-200 hover:bg-green-100 hover:text-green-600'}`}
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/helberth-renan-gomes-de-sousa-hrgs-657855354"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-lg transition-all ${darkMode ? 'bg-gray-900 hover:bg-green-950 hover:text-green-400' : 'bg-gray-200 hover:bg-green-100 hover:text-green-600'}`}
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://w.app/delt7dev"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-lg transition-all ${darkMode ? 'bg-gray-900 hover:bg-green-950 hover:text-green-400' : 'bg-gray-200 hover:bg-green-100 hover:text-green-600'}`}
              >
                <MessageCircle size={24} />
              </a>
              <a 
                href="#contato"
                className={`px-6 py-3 rounded-lg font-medium transition-all ${darkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-600 text-white hover:bg-green-700'}`}
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
            Sobre <span className={darkMode ? 'text-green-400' : 'text-green-600'}>mim</span>
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
              <h3 className="text-xl font-bold mb-4 text-green-400">Formação & Experiência</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Bacharel em Sistemas de Informação</p>
                  <p className="text-sm opacity-70">IFNMG - Instituto Federal do Norte de Minas Gerais</p>
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

      {/* Projects Section */}
      <section id="projetos" className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Projetos em <span className={darkMode ? 'text-green-400' : 'text-green-600'}>destaque</span>
          </h2>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`group p-8 rounded-2xl transition-all hover:scale-[1.02] ${darkMode ? 'bg-gray-900 border border-gray-800 hover:border-green-800' : 'bg-white border border-gray-200 hover:border-green-300'}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  {project.link && (
                    <ExternalLink className="opacity-50 group-hover:opacity-100 group-hover:text-green-400 transition-all" size={20} />
                  )}
                </div>
                <p className="text-lg mb-4 opacity-90">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className={`text-sm px-3 py-1 rounded-full ${darkMode ? 'bg-gray-800 text-green-400' : 'bg-gray-100 text-green-700'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm opacity-70 italic">
                  ✨ {project.highlight}
                </p>
                {project.status && (
                  <p className="text-sm mt-2 text-green-400">🔧 {project.status}</p>
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
            Habilidades <span className={darkMode ? 'text-green-400' : 'text-green-600'}>técnicas</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className={`p-4 rounded-xl text-center transition-all hover:scale-105 ${darkMode ? 'bg-gray-900 border border-gray-800 hover:border-green-800' : 'bg-white border border-gray-200 hover:border-green-300'}`}
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
              Vamos trabalhar <span className={darkMode ? 'text-green-400' : 'text-green-600'}>juntos</span>?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades para fazer parte da sua visão.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="mailto:helberthrenan@icloud.com"  
                className={`flex items-center gap-2 px-8 py-4 rounded-lg font-medium transition-all ${darkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-600 text-white hover:bg-green-700'}`}
              >
                <Mail size={20} />
                Enviar email
              </a>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/D3LT7-ops"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-lg transition-all ${darkMode ? 'bg-gray-900 hover:bg-green-950 hover:text-green-400' : 'bg-gray-200 hover:bg-green-100 hover:text-green-600'}`}
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/helberth-renan-gomes-de-sousa-hrgs-657855354"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-lg transition-all ${darkMode ? 'bg-gray-900 hover:bg-green-950 hover:text-green-400' : 'bg-gray-200 hover:bg-green-100 hover:text-green-600'}`}
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://w.app/delt7dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-lg transition-all ${darkMode ? 'bg-gray-900 hover:bg-green-950 hover:text-green-400' : 'bg-gray-200 hover:bg-green-100 hover:text-green-600'}`}
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