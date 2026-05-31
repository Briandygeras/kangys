import { Phone, Instagram, Monitor, Star, ArrowRight, Zap, Users, ChevronDown, BarChart2, Video, Bot, TrendingUp, Layout, Check, Globe } from "lucide-react";

const openLink = (url: string) => {
  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.rel = "noreferrer";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

const Index = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="noise-overlay" />

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4" style={{ background: "hsl(var(--background) / 0.85)", backdropFilter: "blur(20px)", borderBottom: "1px solid hsl(var(--border))" }}>
        <div className="flex items-center">
          <img
            src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100045188/81dd25be-8952-42.png"
            alt="BT NEXUS"
            className="h-12 w-auto object-contain"
          />
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {[
            { id: "sobre", label: "Sobre" },
            { id: "servicos", label: "Serviços" },
            { id: "planos", label: "Planos" },
            { id: "equipe", label: "Equipe" },
            { id: "contato", label: "Contato" },
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="hover:text-foreground transition-colors duration-200 tracking-wide"
            >
              {label}
            </button>
          ))}
        </div>
        <button onClick={() => scrollTo("contato")} className="btn-neon text-sm px-4 py-2">
          Contato
        </button>
      </nav>

      {/* HERO */}
      <section className="hero-bg grid-bg min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <div className="animate-fade-in-up animate-delay-1 inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{ background: "hsl(var(--neon) / 0.1)", border: "1px solid hsl(var(--neon) / 0.25)" }}>
            <Zap size={14} style={{ color: "hsl(var(--neon))" }} />
            <span className="text-sm font-medium" style={{ color: "hsl(var(--neon))" }}>
              IA · Marketing · Monitoramento · Sites · Vídeos
            </span>
          </div>

          <h1 className="animate-fade-in-up animate-delay-2 font-['Syne'] font-extrabold text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-6">
            Tecnologia que
            <br />
            <span className="gradient-text">transforma negócios.</span>
          </h1>

          <p className="animate-fade-in-up animate-delay-3 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Sites modernos, marketing digital, edição de vídeo profissional, monitoramento inteligente de contas e automações com IA — tudo para levar o seu negócio ao próximo nível.
          </p>

          <div className="animate-fade-in-up animate-delay-4 flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollTo("planos")} className="btn-neon text-base px-8 py-3">
              Ver Planos
              <ArrowRight size={18} />
            </button>
            <button onClick={() => scrollTo("contato")} className="btn-outline-neon text-base px-8 py-3">
              Falar Conosco
            </button>
          </div>

          <div className="animate-fade-in-up animate-delay-5 mt-20 grid grid-cols-3 gap-8 max-w-sm mx-auto">
            {[{ value: "100%", label: "Personalizado" }, { value: "IA", label: "Integrada" }, { value: "24h", label: "Suporte" }].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-['Syne'] font-bold text-2xl md:text-3xl neon-text">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => scrollTo("sobre")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
        >
          <ChevronDown size={28} />
        </button>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-divider mb-6" />
              <h2 className="font-['Syne'] font-bold text-4xl md:text-5xl leading-tight mb-6 text-foreground">
                Quem somos
                <br />
                <span className="gradient-text">nós?</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Somos a <strong style={{ color: "hsl(var(--foreground))" }}>BT NEXUS</strong>, uma equipe apaixonada por tecnologia, criatividade e resultados. Desenvolvemos soluções digitais completas para negócios que querem crescer no digital com mais segurança, presença e profissionalismo.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nossa missão é transformar a presença digital do seu negócio em algo moderno, confiável e atrativo — usando tecnologia de ponta, IA e estratégias que realmente fazem diferença.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Star size={22} />, title: "Alta Qualidade", desc: "Cada detalhe é pensado com cuidado e precisão." },
                { icon: <Zap size={22} />, title: "Entrega Rápida", desc: "Projetos ágeis sem abrir mão da qualidade." },
                { icon: <Users size={22} />, title: "Personalizado", desc: "Feito sob medida para o seu negócio." },
                { icon: <Globe size={22} />, title: "IA & Inovação", desc: "Tecnologia de ponta e automações inteligentes." },
              ].map((item) => (
                <div key={item.title} className="service-card p-5">
                  <div className="mb-3" style={{ color: "hsl(var(--neon))" }}>{item.icon}</div>
                  <h4 className="font-['Syne'] font-semibold text-sm mb-1 text-foreground">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-24 md:py-32" style={{ background: "hsl(var(--surface))" }}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-6" />
            <h2 className="font-['Syne'] font-bold text-4xl md:text-5xl mb-4 text-foreground">
              O que <span className="gradient-text">oferecemos</span>
            </h2>
            <p className="font-semibold mb-3 text-lg" style={{ color: "hsl(var(--neon))" }}>
              Impulsione o seu restaurante, loja, marca ou negócio
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed">
              Monitoramento inteligente de contas e serviços para empresas que desejam crescer no digital com mais segurança, presença e profissionalismo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <BarChart2 size={32} />, title: "Monitoramento de Contas", desc: "Acompanhamento inteligente das suas plataformas digitais — mais organização, estabilidade e presença ativa no mercado online.", tag: "Destaque" },
              { icon: <TrendingUp size={32} />, title: "Marketing Digital", desc: "Estratégias criativas para fortalecer sua marca, aumentar visibilidade nas redes e criar comunicação eficiente com seus clientes.", tag: "Popular" },
              { icon: <Video size={32} />, title: "Edição Profissional de Vídeos", desc: "Vídeos impactantes e conteúdos visuais profissionais para campanhas, divulgação e fortalecimento da sua marca.", tag: "Novo" },
              { icon: <Bot size={32} />, title: "Chat Bots Inteligentes", desc: "Automações com IA para agilizar atendimentos, responder clientes 24h e melhorar a experiência do público com sua marca.", tag: "IA" },
              { icon: <Monitor size={32} />, title: "Sites Personalizados", desc: "Sites únicos feitos de acordo com a identidade visual do seu negócio — modernos, rápidos e com foco em resultados.", tag: "Principal" },
              { icon: <Layout size={32} />, title: "Portfólios & Cardápios", desc: "Portfólios exclusivos, cardápios digitais e vitrines de produtos desenvolvidos sob medida para o seu negócio.", tag: "Empresas" },
            ].map((service) => (
              <div key={service.title} className="service-card p-7 flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div style={{ color: "hsl(var(--neon))" }}>{service.icon}</div>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ background: "hsl(var(--neon) / 0.1)", color: "hsl(var(--neon))" }}>
                    {service.tag}
                  </span>
                </div>
                <div>
                  <h3 className="font-['Syne'] font-bold text-lg mb-2 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos" className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="section-divider mx-auto mb-6" />
            <h2 className="font-['Syne'] font-bold text-4xl md:text-5xl mb-4 text-foreground">
              Nossos <span className="gradient-text">Planos</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Escolha o plano ideal para o seu negócio. Todos incluem suporte personalizado da nossa equipe.
            </p>
          </div>

          {/* Planos mensais */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                name: "Bronze",
                price: "R$ 497",
                period: "único",
                desc: "Ideal para quem quer começar com presença digital",
                color: "hsl(25 80% 60%)",
                colorBg: "hsl(25 80% 60% / 0.1)",
                features: ["Site básico (até 3 páginas)", "Design responsivo", "Formulário de contato", "Entrega em 7 dias", "1 revisão incluída"],
                highlight: false,
              },
              {
                name: "Ferro",
                price: "R$ 997",
                period: "único",
                desc: "Para negócios que querem impacto visual",
                color: "hsl(220 60% 65%)",
                colorBg: "hsl(220 60% 65% / 0.1)",
                features: ["Site moderno (até 6 páginas)", "Animações profissionais", "2 vídeos editados", "Design premium", "2 revisões incluídas"],
                highlight: false,
              },
              {
                name: "Ouro",
                price: "R$ 1.597",
                period: "/mês",
                desc: "Solução completa para crescimento digital",
                color: "hsl(47 100% 60%)",
                colorBg: "hsl(47 100% 60% / 0.1)",
                features: ["Site moderno premium", "Gestão de marketing digital", "4 vídeos editados", "Monitoramento de contas", "Suporte prioritário", "Relatórios mensais"],
                highlight: true,
              },
              {
                name: "Diamante",
                price: "R$ 2.497",
                period: "/mês",
                desc: "Para empresas que exigem o máximo",
                color: "hsl(196 100% 55%)",
                colorBg: "hsl(196 100% 55% / 0.1)",
                features: ["Site futurístico + animações 3D", "Marketing digital completo", "6 vídeos editados", "Monitoramento avançado", "Chat bot com IA", "Design exclusivo", "Suporte 24h"],
                highlight: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className="team-card flex flex-col"
                style={plan.highlight ? { border: `1px solid ${plan.color}`, boxShadow: `0 0 30px ${plan.color}30` } : {}}
              >
                {plan.highlight && (
                  <div className="text-center py-2 text-xs font-bold tracking-widest uppercase" style={{ background: plan.color, color: "hsl(var(--background))" }}>
                    Mais Popular
                  </div>
                )}
                <div className="p-7 flex flex-col gap-5 flex-1">
                  <div>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 font-['Syne'] font-bold text-sm" style={{ background: plan.colorBg, color: plan.color }}>
                      {plan.name[0]}
                    </div>
                    <h3 className="font-['Syne'] font-bold text-xl mb-1 text-foreground">Plano {plan.name}</h3>
                    <p className="text-xs text-muted-foreground mb-4">{plan.desc}</p>
                    <div className="flex items-end gap-1">
                      <span className="font-['Syne'] font-extrabold text-3xl" style={{ color: plan.color }}>{plan.price}</span>
                      <span className="text-muted-foreground text-sm mb-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="flex flex-col gap-2 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check size={14} className="mt-0.5 flex-shrink-0" style={{ color: plan.color }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => scrollTo("contato")}
                    className="w-full py-3 rounded-xl font-['Syne'] font-semibold text-sm transition-all duration-300"
                    style={{ background: plan.colorBg, color: plan.color, border: `1px solid ${plan.color}50` }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = plan.color; (e.currentTarget as HTMLButtonElement).style.color = "hsl(var(--background))"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = plan.colorBg; (e.currentTarget as HTMLButtonElement).style.color = plan.color; }}
                  >
                    Quero este plano
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Serviços avulsos */}
          <div className="max-w-4xl mx-auto">
            <h3 className="font-['Syne'] font-bold text-2xl text-center mb-8 text-foreground">
              Serviços <span className="gradient-text">Avulsos</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Site Básico", price: "R$ 597", desc: "1 página, responsivo" },
                { name: "Site Moderno", price: "R$ 1.197", desc: "Até 6 páginas + animações" },
                { name: "Site Futurístico", price: "R$ 1.997", desc: "Design avançado + 3D" },
                { name: "Edição de Vídeos", price: "R$ 497/mês", desc: "Pacote 4 vídeos mensais" },
                { name: "Monitoramento", price: "R$ 297/mês", desc: "Contas e plataformas digitais" },
                { name: "Marketing Digital", price: "R$ 697/mês", desc: "Gestão completa das redes" },
                { name: "Chat Bot IA", price: "R$ 997", desc: "Setup único + integração" },
              ].map((item) => (
                <div key={item.name} className="service-card p-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-['Syne'] font-semibold text-sm text-foreground">{item.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                  </div>
                  <span className="font-['Syne'] font-bold text-sm whitespace-nowrap neon-text">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPE */}
      <section id="equipe" className="py-24 md:py-32" style={{ background: "hsl(var(--surface))" }}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="section-divider mx-auto mb-6" />
            <h2 className="font-['Syne'] font-bold text-4xl md:text-5xl mb-4 text-foreground">
              Nossa <span className="gradient-text">Equipe</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Dois criadores dedicados prontos para transformar sua ideia em realidade digital.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Brian */}
            <div className="team-card">
              <div className="h-2 w-full" style={{ background: "var(--gradient-neon)" }} />
              <div className="p-8">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 font-['Syne'] font-extrabold text-2xl" style={{ background: "hsl(var(--neon) / 0.15)", color: "hsl(var(--neon))", border: "1px solid hsl(var(--neon) / 0.3)" }}>
                  B
                </div>
                <h3 className="font-['Syne'] font-bold text-2xl mb-1 text-foreground">Brian</h3>
                <p className="text-sm font-medium mb-5" style={{ color: "hsl(var(--neon))" }}>Co-fundador & Desenvolvedor</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Especialista em criar experiências digitais únicas. Transforma visões em sites modernos e automações inteligentes com código e criatividade.
                </p>
                <div className="flex flex-col gap-3">
                  <a href="tel:+5517920030905" className="contact-link text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
                    <Phone size={15} style={{ color: "hsl(var(--neon))" }} />
                    (17) 92003-0905
                  </a>
                  <button
                    onClick={() => openLink("https://instagram.com/brian_18939")}
                    className="contact-link text-sm"
                    style={{ color: "hsl(var(--muted-foreground))" }}
                  >
                    <Instagram size={15} style={{ color: "hsl(var(--neon))" }} />
                    @brian_18939
                  </button>
                </div>
              </div>
            </div>

            {/* Thales */}
            <div className="team-card">
              <div className="h-2 w-full" style={{ background: "var(--gradient-gold)" }} />
              <div className="p-8">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 font-['Syne'] font-extrabold text-2xl" style={{ background: "hsl(var(--gold) / 0.15)", color: "hsl(var(--gold))", border: "1px solid hsl(var(--gold) / 0.3)" }}>
                  T
                </div>
                <h3 className="font-['Syne'] font-bold text-2xl mb-1 text-foreground">Thales</h3>
                <p className="text-sm font-medium mb-5" style={{ color: "hsl(var(--gold))" }}>Co-fundador & Designer </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                 Talento incrível, Thales traz frescor e inovação para cada projeto. Prova que idade não limita o talento quando há dedicação.
                </p>
                <div className="flex flex-col gap-3">
                  <a href="tel:+5517997343854" className="contact-link text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
                    <Phone size={15} style={{ color: "hsl(var(--gold))" }} />
                    (17) 99734-3854
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO / CTA */}
      <section id="contato" className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="section-divider mx-auto mb-6" />
            <h2 className="font-['Syne'] font-bold text-4xl md:text-5xl mb-4 text-foreground">
              Pronto para evoluir
              <br />
              <span className="gradient-text">O seu negócio?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
              Entre em contato e vamos criar juntos a sua presença digital — com tecnologia, criatividade e resultados reais.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              <button
                onClick={() => openLink("https://wa.me/5517920030905")}
                className="service-card p-6 flex items-center gap-4 group cursor-pointer text-left w-full"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "hsl(var(--neon) / 0.15)" }}>
                  <Phone size={20} style={{ color: "hsl(var(--neon))" }} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Brian</p>
                  <p className="font-['Syne'] font-semibold text-foreground">(17) 92003-0905</p>
                  <p className="text-xs text-muted-foreground mt-1">Toque para chamar no WhatsApp</p>
                </div>
              </button>

              <button
                onClick={() => openLink("https://wa.me/5517997343854")}
                className="service-card p-6 flex items-center gap-4 group cursor-pointer text-left w-full"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "hsl(var(--gold) / 0.15)" }}>
                  <Phone size={20} style={{ color: "hsl(var(--gold))" }} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Thales</p>
                  <p className="font-['Syne'] font-semibold text-foreground">(17) 99734-3854</p>
                  <p className="text-xs text-muted-foreground mt-1">Toque para chamar no WhatsApp</p>
                </div>
              </button>
            </div>

            <button
              onClick={() => openLink("https://instagram.com/brian_18939")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer"
              style={{ background: "hsl(var(--neon) / 0.08)", border: "1px solid hsl(var(--neon) / 0.2)", color: "hsl(var(--neon))" }}
            >
              <Instagram size={18} />
              <span className="font-medium">@brian_18939</span>
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center" style={{ borderTop: "1px solid hsl(var(--border))" }}>
        <div className="flex flex-col items-center gap-3">
          <img
            src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100045188/81dd25be-8952-42.png"
            alt="BT NEXUS"
            className="h-10 w-auto object-contain opacity-80"
          />
          <p className="text-sm text-muted-foreground">
            © 2025 <span className="neon-text font-semibold">BT NEXUS</span> · Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
