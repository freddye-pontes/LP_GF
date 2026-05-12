/* GF Recebíveis — main app */
const { useState: useStateApp, useEffect: useEffectApp } = React;

const HEADLINES = [
  {
    id: 'caixa',
    parts: [
      { t: 'Recupere ', c: null },
      { t: 'valores em atraso', c: 'orange' },
      { t: ' e ', c: null },
      { t: 'aumente seu caixa', c: 'orange' },
      { t: ' sem ', c: null },
      { t: 'contratar equipe interna', c: 'amber' },
      { t: '.', c: null },
    ],
  },
  {
    id: 'inad',
    parts: [
      { t: 'Transforme ', c: null },
      { t: 'inadimplência', c: 'red' },
      { t: ' em ', c: null },
      { t: 'dinheiro no caixa', c: 'orange' },
      { t: ' — sem ', c: null },
      { t: 'dor de cabeça', c: 'amber' },
      { t: '.', c: null },
    ],
  },
  {
    id: 'pare',
    parts: [
      { t: 'Pare de ', c: null },
      { t: 'perder dinheiro', c: 'red' },
      { t: ' com ', c: null },
      { t: 'clientes inadimplentes', c: 'orange' },
      { t: '.', c: null },
    ],
  },
];

const PALETTES = {
  laranja: { brand: '#FF6600', hover: '#E65C00', soft: 'rgba(255,102,0,0.10)', logo: 'assets/logo-orange.jpeg' },
  vermelho: { brand: '#E63946', hover: '#EF4444', soft: 'rgba(230,57,70,0.10)', logo: 'assets/logo-red.jpeg' },
  grafite: { brand: '#1A1A1A', hover: '#2D2D2D', soft: 'rgba(26,26,26,0.06)', logo: 'assets/logo-grafite.png' },
};

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "headline": "caixa"
}/*EDITMODE-END*/;

const App = () => {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [scrolled, setScrolled] = useStateApp(false);
  const [openFaq, setOpenFaq] = useStateApp(0);
  const [submitted, setSubmitted] = useStateApp(false);
  const [form, setForm] = useStateApp({ name: '', company: '', volume: '50-200' });

  // grafite is the only palette now — set CSS vars once
  useEffectApp(() => {
    document.documentElement.style.setProperty('--brand', '#1A1A1A');
    document.documentElement.style.setProperty('--brand-hover', '#2D2D2D');
    document.documentElement.style.setProperty('--brand-soft', 'rgba(26,26,26,0.06)');
  }, []);

  useEffectApp(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const headline = HEADLINES.find(h => h.id === tweaks.headline) || HEADLINES[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header scrolled={scrolled} />
      <main>
        <Hero headline={headline} />
        <Problem />
        <Solution />
        <Differentiators />
        <Proof />
        <HowItWorks />
        <Objections openFaq={openFaq} setOpenFaq={setOpenFaq} />
        <CTASection form={form} setForm={setForm} submitted={submitted} onSubmit={handleSubmit} />
      </main>
      <Footer />
      <FabWhatsapp />

      <TweaksPanel title="Tweaks" defaultPosition={{ right: 24, bottom: 90 }}>
        <TweakSection title="Headline" subtitle="Alterne as três variantes principais.">
          <TweakRadio
            value={tweaks.headline}
            onChange={v => setTweak('headline', v)}
            options={[
              { value: 'caixa', label: 'Aumente seu caixa' },
              { value: 'inad',  label: 'Inadimplência → caixa' },
              { value: 'pare',  label: 'Pare de perder dinheiro' },
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
};

const Header = ({ scrolled }) => {
  return (
    <header className={'site-header' + (scrolled ? ' scrolled' : '')}>
      <div className="container nav">
        <a href="#" className="nav-logo" aria-label="GF Recebíveis">
          <img src="assets/logo-grafite.png" alt="GF Recebíveis" className="logo-img" />
        </a>
        <nav className="nav-links">
          <a href="#problema">Problema</a>
          <a href="#solucao">Solução</a>
          <a href="#como">Como funciona</a>
          <a href="#prova">Resultados</a>
          <a href="#faq">Perguntas</a>
        </nav>
        <div className="nav-cta">
          <a href="#contato" className="btn btn-primary">Quero recuperar <Icon name="arrow-right" size={16} /></a>
        </div>
      </div>
    </header>
  );
};

const Hero = ({ headline }) => (
  <section className="hero">
    <div className="container">
      <div className="hero-grid">
        <div>
          <Reveal>
            <span className="eyebrow eyebrow-orange">Recuperação de contas a receber</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="h-display" style={{ marginTop: 24 }}>
              {headline.parts.map((p, i) => (
                p.c
                  ? <strong key={i} className={'hl hl-' + p.c}>{p.t}</strong>
                  : <React.Fragment key={i}>{p.t}</React.Fragment>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="lead" style={{ marginTop: 24 }}>
              Cuidamos da cobrança do início ao fim, com abordagem profissional e sem prejudicar o relacionamento com seu cliente. Você só paga quando a gente recupera.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="hero-cta-row">
              <a href="#contato" className="btn btn-primary btn-lg">
                Quero recuperar meus valores <Icon name="arrow-right" size={16} />
              </a>
              <a href="https://wa.me/5511999999999" className="btn btn-ghost btn-lg" target="_blank" rel="noopener">
                <Icon name="whatsapp" size={16} /> Falar no WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={280}>
            <div className="hero-trust">
              <div className="trust-item"><Icon name="check-circle" size={16} /> Sem custo fixo</div>
              <div className="trust-item"><Icon name="check-circle" size={16} /> Início em 48h</div>
              <div className="trust-item"><Icon name="check-circle" size={16} /> Cobrança humanizada</div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <HeroDashboard />
        </Reveal>
      </div>
    </div>
  </section>
);

const StatStrip = () => (
  <section className="stat-strip section-tight" data-screen-label="stats">
    <div className="container">
      <div className="stat-strip-grid">
        <div>
          <span className="num">R$ <Counter end={3.4} decimals={1} /><span className="unit unit-orange">M</span></span>
          <span className="lbl">recuperados nos últimos 12 meses</span>
        </div>
        <div>
          <span className="num"><Counter end={68} /><span className="unit unit-amber">%</span></span>
          <span className="lbl">taxa média de recuperação em 90 dias</span>
        </div>
        <div>
          <span className="num"><Counter end={140} suffix="+" /></span>
          <span className="lbl">empresas atendidas em 8 estados</span>
        </div>
        <div>
          <span className="num"><Counter end={48} /><span className="unit unit-red">h</span></span>
          <span className="lbl">para iniciar a cobrança da sua carteira</span>
        </div>
      </div>
    </div>
  </section>
);

const Problem = () => {
  const pains = [
    { icon: 'clock', tone: 'amber', title: 'Falta de tempo', text: 'Ligar, mandar boleto, lembrar prazo. Cobrar consome a equipe e tira o foco do que gera receita.' },
    { icon: 'users', tone: 'amber', title: 'Equipe sobrecarregada', text: 'Cobrar não é o foco do seu time. Cada hora gasta em seguimento é uma hora a menos no que realmente gera receita.' },
    { icon: 'trending-down', tone: 'red', title: 'Cliente que não paga', text: 'Promete, atrasa, dá voltas. A conversa trava e o boleto envelhece dentro do sistema.' },
    { icon: 'wallet', tone: 'orange', title: 'Caixa apertado', text: 'Receita reconhecida que nunca virou dinheiro. O capital de giro afunila e o crescimento trava.' },
  ];
  return (
    <section id="problema" data-screen-label="problema">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow eyebrow-red">O problema</span>
            <h2 className="h-section" style={{ marginTop: 16 }}>
              Inadimplência custa caro — e não é só o boleto em aberto.
            </h2>
          </div>
          <p className="lead">
            Empresas perdem milhares todos os meses com clientes inadimplentes. Além do impacto direto no caixa, a cobrança consome tempo da equipe, gera desgaste no relacionamento e trava o crescimento.
          </p>
        </div>
        <div className="problem-grid">
          {pains.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <div className={'pain-card tone-' + p.tone}>
                <div className="pain-icon"><Icon name={p.icon} size={22} /></div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const Solution = () => (
  <section id="solucao" data-screen-label="solucao">
    <div className="container">
      <div className="solution">
        <div style={{ maxWidth: 720 }}>
          <span className="eyebrow eyebrow-orange">A solução</span>
          <h2 className="h-section" style={{ marginTop: 16 }}>
            Nós cuidamos da recuperação dos seus valores em atraso de forma profissional, estratégica e respeitosa.
          </h2>
          <p className="lead">
            Você envia a carteira de inadimplentes. A gente faz o resto — do primeiro contato à confirmação do pagamento na sua conta.
          </p>
        </div>
        <div className="solution-flow">
          <div className="flow-step tone-amber">
            <div className="flow-num">01 · Contato</div>
            <h3>Multicanal e na hora certa</h3>
            <p>Abordagem em horários e canais que o devedor responde — sem spam e sem pressão desnecessária.</p>
            <div className="flow-channels">
              <span><Icon name="whatsapp" size={12} />WhatsApp</span>
              <span><Icon name="phone" size={12} />Ligação</span>
              <span><Icon name="mail" size={12} />E-mail</span>
              <span><Icon name="send" size={12} />SMS</span>
            </div>
          </div>
          <div className="flow-step tone-orange">
            <div className="flow-num">02 · Negociação</div>
            <h3>Estruturada e humanizada</h3>
            <p>Roteiros validados, escuta ativa e propostas de parcelamento que cabem no bolso do devedor — preservando seu relacionamento.</p>
            <div className="flow-channels">
              <span><Icon name="check-circle" size={12} />Promessa de pagamento</span>
              <span><Icon name="wallet" size={12} />Parcelamento</span>
              <span><Icon name="target" size={12} />Desconto controlado</span>
            </div>
          </div>
          <div className="flow-step tone-red">
            <div className="flow-num">03 · Pagamento</div>
            <h3>Acompanhado até o fim</h3>
            <p>Confirmação de recebimento, repasse no prazo combinado e relatório semanal mostrando exatamente o que entrou.</p>
            <div className="flow-channels">
              <span><Icon name="file" size={12} />Boleto</span>
              <span><Icon name="zap" size={12} />Pix</span>
              <span><Icon name="chart" size={12} />Repasse semanal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Differentiators = () => {
  const items = [
    { icon: 'heart-handshake', tone: 'red',    title: 'Cobrança humanizada', text: 'Tom profissional e respeitoso. Seu cliente continua sendo seu cliente depois de pagar.' },
    { icon: 'wallet',          tone: 'orange', title: 'Sem custo fixo',       text: 'Modelo 100% baseado em sucesso. Você só paga sobre o que efetivamente recuperar.' },
    { icon: 'briefcase',       tone: 'amber',  title: 'Equipe especializada', text: 'Negociadores treinados em técnica de cobrança consultiva, não call center genérico.' },
    { icon: 'chart',           tone: 'orange', title: 'Relatórios e CRM',     text: 'Painel ao vivo da sua carteira. Você acompanha o que está sendo feito, conta por conta.' },
    { icon: 'zap',             tone: 'amber',  title: 'Atuação rápida',       text: 'Em até 48h após a contratação a primeira leva de cobrança já está rodando.' },
    { icon: 'lock',            tone: 'red',    title: 'Sigilo e LGPD',        text: 'Tratamento confidencial, contrato com cláusula de proteção de dados e auditoria.' },
  ];
  return (
    <section id="diferenciais" data-screen-label="diferenciais">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow eyebrow-amber">Por que a GF</span>
            <h2 className="h-section" style={{ marginTop: 16 }}>
              Recuperação de caixa, sem queimar relacionamento.
            </h2>
          </div>
          <p className="lead">
            Trabalhamos como extensão do seu financeiro. Tom da sua marca, processos auditáveis, resultado mensurável.
          </p>
        </div>
        <div className="diff-grid">
          {items.map((it) => (
            <div key={it.title} className={'diff-cell tone-' + it.tone}>
              <div className="check"><Icon name={it.icon} size={20} /></div>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Proof = () => (
  <section id="prova" data-screen-label="prova" style={{ background: 'var(--bg-input)' }}>
    <div className="container">
      <div className="section-head">
        <div>
          <span className="eyebrow eyebrow-orange">Resultados</span>
          <h2 className="h-section" style={{ marginTop: 16 }}>
            Dinheiro de volta no caixa — não promessas.
          </h2>
        </div>
        <p className="lead">
          Métricas reais das carteiras que rodamos. Cada empresa recebe relatório semanal com o detalhe conta a conta.
        </p>
      </div>

      <div className="proof-grid">
        <div className="proof-stat tone-orange">
          <div className="num">R$ <Counter end={120} /><span className="unit">k</span></div>
          <div className="lbl">recuperados em 60 dias para uma distribuidora regional de alimentos</div>
        </div>
        <div className="proof-stat tone-red">
          <div className="num"><Counter end={73} /><span className="unit">%</span></div>
          <div className="lbl">de recuperação na carteira de uma clínica em 90 dias</div>
        </div>
        <div className="case-strip">
          <span className="lbl">Nichos atendidos</span>
          <div className="row">
            <div className="item">Distribuidoras <span>· atacado e varejo</span></div>
            <div className="item">Clínicas <span>· médica e odonto</span></div>
            <div className="item">Indústria <span>· B2B</span></div>
            <div className="item">Educação <span>· escolas e cursos</span></div>
            <div className="item">Serviços <span>· assinatura e mensalidade</span></div>
            <div className="item">Imobiliárias <span>· aluguel e condomínio</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const HowItWorks = () => {
  const steps = [
    { tone: 'orange', title: 'Você envia a carteira', text: 'Planilha, exportação do ERP ou integração via API. A gente normaliza e organiza.' },
    { tone: 'amber',  title: 'Iniciamos a cobrança',   text: 'Em até 48h o primeiro contato sai. Multicanal, dentro do tom da sua marca.' },
    { tone: 'red',    title: 'Negociamos e fechamos',  text: 'PTP, parcelamento ou pagamento à vista. Tudo registrado e auditável no painel.' },
    { tone: 'orange', title: 'Dinheiro no seu caixa',  text: 'Repasse semanal, com relatório detalhado conta a conta. Você só paga sobre o recuperado.' },
  ];
  return (
    <section id="como" data-screen-label="como">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow eyebrow-amber">Como funciona</span>
            <h2 className="h-section" style={{ marginTop: 16 }}>
              Quatro passos. Sem fricção, sem juridiquês.
            </h2>
          </div>
          <p className="lead">
            Do envio da carteira ao dinheiro entrando — você acompanha tudo em tempo real no painel.
          </p>
        </div>
        <div className="steps">
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className={'step tone-' + s.tone}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const Objections = ({ openFaq, setOpenFaq }) => {
  const faqs = [
    { q: 'Vocês vão queimar o relacionamento com meu cliente?', a: 'Não. Nossa abordagem é consultiva e respeitosa — usamos roteiros validados e adaptamos o tom à sua marca. A grande maioria dos devedores volta a comprar depois de regularizar.' },
    { q: 'E se não recuperarem nada?', a: 'Você não paga. O modelo é 100% baseado em sucesso: comissão sobre o valor efetivamente recuperado, sem mensalidade ou taxa de adesão.' },
    { q: 'Em quanto tempo começa a entrar dinheiro?', a: 'Em até 48h após o envio da carteira já estamos cobrando. Os primeiros pagamentos costumam entrar entre o 5º e o 10º dia útil.' },
    { q: 'É seguro? Como vocês tratam os dados?', a: 'Contrato com cláusula de confidencialidade e LGPD, ambiente segregado por cliente, e auditoria de acesso. Você é dono dos dados o tempo todo.' },
    { q: 'Funciona para qualquer porte de empresa?', a: 'Atendemos de PMEs com carteiras a partir de R$ 30 mil em atraso até operações maiores. Adaptamos o time e o processo ao volume.' },
    { q: 'Preciso integrar com meu ERP?', a: 'Não é obrigatório. Aceitamos planilha, exportação manual ou integração nativa com os principais ERPs (Omie, Bling, Conta Azul, TOTVS, SAP).' },
  ];
  return (
    <section id="faq" data-screen-label="objecoes">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow eyebrow-amber">Quebra de objeções</span>
            <h2 className="h-section" style={{ marginTop: 16 }}>
              Aquilo que você está pensando agora.
            </h2>
          </div>
          <p className="lead">
            Respostas diretas para as dúvidas que recebemos com mais frequência.
          </p>
        </div>
        <div className="faq">
          {faqs.map((f, i) => (
            <div key={i} className={'faq-item' + (openFaq === i ? ' open' : '')}>
              <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                <span>{f.q}</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-a">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = ({ form, setForm, submitted, onSubmit }) => (
  <section id="contato" data-screen-label="cta">
    <div className="container">
      <div className="cta-block">
        <div className="cta-grid">
          <div>
            <span className="eyebrow" style={{ color: '#fff' }}>Análise gratuita</span>
            <h2 className="h-section" style={{ marginTop: 16 }}>
              Envie sua carteira e descubra quanto pode recuperar.
            </h2>
            <p className="lead">
              Análise sem compromisso. Em até 1 dia útil retornamos com uma estimativa de recuperação realista para a sua carteira atual.
            </p>
            <div className="urgency-strip">
              <div className="left">
                <span className="dot"></span>
                <div className="text">
                  <strong>Vagas limitadas neste mês.</strong> <span>Atendemos um número fixo de novas carteiras por região para garantir performance.</span>
                </div>
              </div>
              <div className="count"><strong>3</strong> vagas restantes · maio</div>
            </div>
          </div>

          <div className="cta-form">
            {!submitted ? (
              <form onSubmit={onSubmit}>
                <label>Nome</label>
                <input
                  type="text"
                  required
                  placeholder="Como devemos te chamar?"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                />
                <label>Empresa</label>
                <input
                  type="text"
                  required
                  placeholder="Nome da sua empresa"
                  value={form.company}
                  onChange={e => setForm({ ...form, company: e.target.value })}
                />
                <label>Volume aproximado em atraso</label>
                <select
                  value={form.volume}
                  onChange={e => setForm({ ...form, volume: e.target.value })}
                >
                  <option value="0-50">Até R$ 50 mil</option>
                  <option value="50-200">R$ 50 mil – R$ 200 mil</option>
                  <option value="200-500">R$ 200 mil – R$ 500 mil</option>
                  <option value="500+">Acima de R$ 500 mil</option>
                </select>
                <button type="submit" className="btn btn-primary btn-lg">
                  Quero recuperar meus valores <Icon name="arrow-right" size={16} />
                </button>
              </form>
            ) : (
              <div className="cta-success">
                <div className="badge"><Icon name="check" size={28} /></div>
                <h3>Recebemos seu pedido</h3>
                <p>Em até 1 dia útil um especialista entra em contato com a estimativa para a {form.company || 'sua empresa'}.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="assets/logo-grafite.png" alt="GF Recebíveis" className="footer-logo" />
            <p>Recuperação de contas a receber para empresas que querem ver dinheiro no caixa, sem queimar relacionamento.</p>
          </div>
          <div>
            <h4>Empresa</h4>
            <ul>
              <li><a href="#solucao">Solução</a></li>
              <li><a href="#como">Como funciona</a></li>
              <li><a href="#prova">Resultados</a></li>
              <li><a href="#faq">Perguntas</a></li>
            </ul>
          </div>
          <div>
            <h4>Contato</h4>
            <ul>
              <li><a href="https://wa.me/5511999999999"><Icon name="whatsapp" size={14} /> &nbsp;(11) 99999-9999</a></li>
              <li><a href="mailto:contato@gfrecebiveis.com.br"><Icon name="mail" size={14} /> &nbsp;contato@gfrecebiveis.com.br</a></li>
              <li><a href="tel:+551133334444"><Icon name="phone" size={14} /> &nbsp;(11) 3333-4444</a></li>
            </ul>
          </div>
          <div>
            <h4>Redes</h4>
            <ul>
              <li><a href="https://www.instagram.com/gfrecebiveis?igsh=YnN1ejcybHdrbnZw&utm_source=qr" target="_blank" rel="noopener"><Icon name="instagram" size={14} /> &nbsp;@gfrecebiveis</a></li>
              <li><a href="#"><Icon name="linkedin" size={14} /> &nbsp;LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>GF Recebíveis · CNPJ 00.000.000/0001-00</span>
          <span>© 2026 · Todos os direitos reservados</span>
        </div>
      </div>
    </footer>
  );
};

const FabWhatsapp = () => (
  <a href="https://wa.me/5511999999999" target="_blank" rel="noopener" className="fab-whatsapp" aria-label="Falar no WhatsApp">
    <Icon name="whatsapp" size={20} />
    <span>Quero recuperar</span>
    <span className="ring"></span>
  </a>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
