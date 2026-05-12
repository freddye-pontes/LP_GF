/* GF Recebíveis — shared icons and small components */
const { useState, useEffect, useRef } = React;

// Inline icons (stroke-based, lucide-like)
const Icon = ({ name, size = 20, ...props }) => {
  const s = size;
  const common = { width: s, height: s, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', ...props };
  switch (name) {
    case 'check':
      return <svg {...common}><path d="M20 6 9 17l-5-5"/></svg>;
    case 'check-circle':
      return <svg {...common}><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>;
    case 'arrow-right':
      return <svg {...common}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>;
    case 'whatsapp':
      return <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.465 3.488"/></svg>;
    case 'clock':
      return <svg {...common}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>;
    case 'users':
      return <svg {...common}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
    case 'trending-down':
      return <svg {...common}><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>;
    case 'wallet':
      return <svg {...common}><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>;
    case 'shield':
      return <svg {...common}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>;
    case 'sparkles':
      return <svg {...common}><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>;
    case 'phone':
      return <svg {...common}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92"/></svg>;
    case 'mail':
      return <svg {...common}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 5L2 7"/></svg>;
    case 'instagram':
      return <svg {...common}><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
    case 'linkedin':
      return <svg {...common}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;
    case 'plus':
      return <svg {...common}><path d="M12 5v14M5 12h14"/></svg>;
    case 'send':
      return <svg {...common}><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>;
    case 'spark':
      return <svg {...common}><path d="M12 2v6"/><path d="M12 16v6"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="M2 12h6"/><path d="M16 12h6"/></svg>;
    case 'lock':
      return <svg {...common}><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
    case 'briefcase':
      return <svg {...common}><rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
    case 'heart-handshake':
      return <svg {...common}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="m12 5 1.5 1.5"/><path d="M9 11.5 12 14"/></svg>;
    case 'zap':
      return <svg {...common}><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"/></svg>;
    case 'chart':
      return <svg {...common}><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>;
    case 'target':
      return <svg {...common}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
    case 'file':
      return <svg {...common}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><polyline points="14 2 14 8 20 8"/></svg>;
    default: return null;
  }
};

// Animated counter — counts up to `end` over `duration` ms when in view
function useInView(ref, threshold = 0.3) {
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { setSeen(true); obs.disconnect(); } });
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return seen;
}

const Counter = ({ end, duration = 1800, decimals = 0, prefix = '', suffix = '', format }) => {
  const ref = useRef(null);
  const seen = useInView(ref);
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!seen) return;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(end * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, end, duration]);

  let display;
  if (format === 'brl') {
    // round to integer
    display = new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 0 }).format(Math.round(val));
  } else {
    display = val.toLocaleString('pt-BR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  }
  return <span ref={ref} className="mono">{prefix}{display}{suffix}</span>;
};

// Reveal-on-scroll wrapper
const Reveal = ({ children, delay = 0, as: As = 'div', ...rest }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { setTimeout(() => setShow(true), delay); obs.disconnect(); } });
    }, { threshold: 0.15 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);
  return <As ref={ref} {...rest} className={[rest.className, 'reveal', show && 'in'].filter(Boolean).join(' ')}>{children}</As>;
};

Object.assign(window, { Icon, Counter, Reveal, useInView });
