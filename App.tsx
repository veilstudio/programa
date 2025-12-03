import React from 'react';
import Header from './components/Header';
import StatsChart from './components/StatsChart';
import AIConsultant from './components/AIConsultant';
import { COMPANY_INFO, SERVICES } from './constants';
import { 
  Phone, 
  MapPin, 
  Mail, 
  CheckCircle2, 
  Factory, 
  SprayCan, 
  UtensilsCrossed, 
  Bug,
  Clock,
  Award,
  Users,
  Facebook
} from 'lucide-react';

// Icon mapping helper
const getIcon = (type: string) => {
  switch (type) {
    case 'cleaning': return <SprayCan size={32} />;
    case 'pest': return <Bug size={32} />;
    case 'hotel': return <UtensilsCrossed size={32} />;
    case 'industrial': return <Factory size={32} />;
    default: return <CheckCircle2 size={32} />;
  }
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Header />

      {/* Hero Section */}
      <section id="home" className="relative h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://raw.githubusercontent.com/veilstudio/websites/main/simple.webp" 
            alt="Freeday Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left w-full">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-semibold mb-4 border border-emerald-500/30">
              Desde 2011 em Portugal
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Excelência em <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Higiene Profissional
              </span>
            </h1>
            <p className="text-lg text-slate-200 mb-8 leading-relaxed">
              Soluções completas de manutenção industrial, equipamentos hoteleiros e serviços de desinfestação.
              Qualidade certificada para o seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="px-8 py-3.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 text-center"
              >
                Pedir Orçamento
              </a>
              <a 
                href="#services" 
                className="px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-all text-center"
              >
                Nossos Serviços
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About & Stats Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-2">Sobre a Freeday</h2>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">14 Anos de Confiança e Inovação</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Fundada em 16 de Março de 2011, a Freeday estabeleceu-se como uma referência no mercado de Setúbal e Palmela. 
                A nossa missão é fornecer não apenas produtos, mas soluções integradas que garantam a segurança, 
                higiene e eficiência dos espaços dos nossos clientes.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Experiência</h4>
                    <p className="text-sm text-slate-500">Mais de uma década no setor</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Qualidade</h4>
                    <p className="text-sm text-slate-500">Produtos certificados</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Suporte</h4>
                    <p className="text-sm text-slate-500">Acompanhamento técnico</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
               <StatsChart />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">As Nossas Áreas de Atuação</h2>
            <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
              Cobrimos todas as necessidades de higiene e manutenção para a sua empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 group">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {getIcon(service.icon)}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <a href="#contact" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 text-sm">
                  Saber mais <span className="ml-1">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Image Banner Section */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://raw.githubusercontent.com/veilstudio/websites/main/simple%20(1).webp" 
            alt="Compromisso Freeday" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Parceiro de Confiança para a Sua Empresa
          </h2>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
            Desde a manutenção industrial até aos pequenos consumíveis de escritório, garantimos stock permanente e entregas rápidas na região de Setúbal e Palmela.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white border border-white/20">
               <CheckCircle2 size={18} className="text-emerald-400" />
               <span className="text-sm font-medium">Orçamentos Gratuitos</span>
             </div>
             <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white border border-white/20">
               <CheckCircle2 size={18} className="text-emerald-400" />
               <span className="text-sm font-medium">Entrega Rápida</span>
             </div>
             <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white border border-white/20">
               <CheckCircle2 size={18} className="text-emerald-400" />
               <span className="text-sm font-medium">Apoio Técnico</span>
             </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-blue-900">
            {/* Background Image for Contact Card */}
            <div className="absolute inset-0">
              <img 
                src="https://raw.githubusercontent.com/veilstudio/websites/main/simple%20(2).webp" 
                alt="Contact Background" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/90 mix-blend-multiply" />
            </div>

            <div className="relative p-10 sm:p-14 text-white">
              
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-6">Entre em Contacto</h2>
                <p className="text-blue-100 max-w-2xl mx-auto">
                  Tem dúvidas sobre algum produto ou precisa de um orçamento para desinfestação? 
                  A nossa equipa está pronta para ajudar.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Address */}
                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="p-4 bg-emerald-500/20 rounded-full mb-4 text-emerald-400">
                    <MapPin size={32} />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Morada</h4>
                  <p className="text-blue-100 text-sm">{COMPANY_INFO.address}</p>
                  <p className="text-blue-200 text-xs mt-1">(Sede: {COMPANY_INFO.hq})</p>
                </div>

                {/* Phone */}
                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="p-4 bg-emerald-500/20 rounded-full mb-4 text-emerald-400">
                    <Phone size={32} />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Telefone</h4>
                  <p className="text-blue-100 text-sm">{COMPANY_INFO.phone}</p>
                </div>

                {/* Email */}
                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="p-4 bg-emerald-500/20 rounded-full mb-4 text-emerald-400">
                    <Mail size={32} />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Email</h4>
                  <p className="text-blue-100 text-sm">{COMPANY_INFO.email}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <img 
                src={COMPANY_INFO.logo} 
                alt="Freeday" 
                className="h-12 w-auto rounded-md" 
              />
            </div>
            <div className="text-sm">
              &copy; {new Date().getFullYear()} Freeday. Todos os direitos reservados.
            </div>
            <div className="flex items-center space-x-6">
              <a 
                href={COMPANY_INFO.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <div className="h-4 w-px bg-slate-700"></div>
              <a href="#" className="hover:text-white transition-colors">Termos</a>
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Gemini AI Chatbot */}
      <AIConsultant />
    </div>
  );
};

export default App;