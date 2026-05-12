/* GF Recebíveis — hero static illustration */

const HeroDashboard = () => (
  <div style={{ position: 'relative' }}>
    <div className="dashboard-card" style={{ padding: 0, overflow: 'hidden', background: '#fff' }}>

      {/* Header */}
      <div style={{
        padding: '18px 20px 14px',
        borderBottom: '1px solid #f0f0f0',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <div>
          <div className="dash-title">Resultado do cliente</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-soft)', marginTop: 2 }}>
            após 90 dias com a GF Recebíveis
          </div>
        </div>
        <span className="dash-pill" style={{ background: '#f0fdf4', color: '#16a34a' }}>
          <span className="dot" style={{ background: '#16a34a' }}></span>recuperado
        </span>
      </div>

      {/* Métricas topo */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid #f0f0f0' }}>
        <div style={{ padding: '16px 20px', borderRight: '1px solid #f0f0f0' }}>
          <div className="dash-stat-label">Caixa recuperado</div>
          <div className="dash-stat-value" style={{ color: '#16a34a', fontSize: 22 }}>R$ 118.400</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 4 }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 11V3M7 3L3 7M7 3L11 7" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ fontSize: 11, color: '#16a34a', fontWeight: 600 }}>+R$ 118k em 90 dias</span>
          </div>
        </div>
        <div style={{ padding: '16px 20px' }}>
          <div className="dash-stat-label">Inadimplência</div>
          <div className="dash-stat-value" style={{ color: '#ef4444', fontSize: 22 }}>R$ 21.600</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 4 }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 3V11M7 11L3 7M7 11L11 7" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ fontSize: 11, color: '#ef4444', fontWeight: 600 }}>−85% em 90 dias</span>
          </div>
        </div>
      </div>

      {/* Gráficos */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>

        {/* Gráfico Caixa — barras subindo */}
        <div style={{ padding: '16px 20px 20px', borderRight: '1px solid #f0f0f0' }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.06em', color: 'var(--text-soft)', textTransform: 'uppercase', marginBottom: 12 }}>
            Caixa acumulado (R$)
          </div>
          <svg viewBox="0 0 140 72" width="100%" style={{ display: 'block', overflow: 'visible' }}>
            {/* Grid lines */}
            {[0,1,2,3].map(i => (
              <line key={i} x1="0" y1={18 * i} x2="140" y2={18 * i} stroke="#f3f4f6" strokeWidth="1"/>
            ))}
            {/* Bars growing month by month */}
            {[
              { x: 4,  h: 10, label: 'Out' },
              { x: 26, h: 22, label: 'Nov' },
              { x: 48, h: 34, label: 'Dez' },
              { x: 70, h: 44, label: 'Jan' },
              { x: 92, h: 54, label: 'Fev' },
              { x: 114,h: 66, label: 'Mar' },
            ].map((b) => (
              <g key={b.x}>
                <rect x={b.x} y={72 - b.h} width="18" height={b.h} rx="3" fill="#16a34a" fillOpacity={0.15 + (b.h / 66) * 0.7}/>
                <rect x={b.x} y={72 - b.h} width="18" height="3" rx="2" fill="#16a34a"/>
                <text x={b.x + 9} y="82" textAnchor="middle" fill="#9ca3af" fontSize="7" fontFamily="var(--font-mono)">{b.label}</text>
              </g>
            ))}
            {/* Trend line */}
            <polyline
              points="13,62 35,50 57,38 79,28 101,18 123,6"
              fill="none" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="3 2" strokeLinecap="round"/>
            {/* Arrow up at end */}
            <circle cx="123" cy="6" r="3" fill="#16a34a"/>
          </svg>
        </div>

        {/* Gráfico Inadimplência — barras caindo */}
        <div style={{ padding: '16px 20px 20px' }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.06em', color: 'var(--text-soft)', textTransform: 'uppercase', marginBottom: 12 }}>
            Inadimplência (R$)
          </div>
          <svg viewBox="0 0 140 72" width="100%" style={{ display: 'block', overflow: 'visible' }}>
            {[0,1,2,3].map(i => (
              <line key={i} x1="0" y1={18 * i} x2="140" y2={18 * i} stroke="#f3f4f6" strokeWidth="1"/>
            ))}
            {[
              { x: 4,  h: 66, label: 'Out' },
              { x: 26, h: 54, label: 'Nov' },
              { x: 48, h: 42, label: 'Dez' },
              { x: 70, h: 30, label: 'Jan' },
              { x: 92, h: 18, label: 'Fev' },
              { x: 114,h: 10, label: 'Mar' },
            ].map((b) => (
              <g key={b.x}>
                <rect x={b.x} y={72 - b.h} width="18" height={b.h} rx="3" fill="#ef4444" fillOpacity={0.10 + (b.h / 66) * 0.55}/>
                <rect x={b.x} y={72 - b.h} width="18" height="3" rx="2" fill="#ef4444"/>
                <text x={b.x + 9} y="82" textAnchor="middle" fill="#9ca3af" fontSize="7" fontFamily="var(--font-mono)">{b.label}</text>
              </g>
            ))}
            <polyline
              points="13,6 35,18 57,30 79,42 101,54 123,62"
              fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 2" strokeLinecap="round"/>
            <circle cx="123" cy="62" r="3" fill="#ef4444"/>
          </svg>
        </div>
      </div>

      {/* Rodapé */}
      <div style={{
        borderTop: '1px solid #f0f0f0',
        padding: '10px 20px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <span style={{ fontSize: 10, color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>Carteira inicial · R$ 140.000</span>
        <span style={{
          fontSize: 10, fontWeight: 700, color: '#16a34a',
          background: '#f0fdf4', borderRadius: 6, padding: '2px 8px'
        }}>85% recuperado</span>
      </div>
    </div>

    {/* Float chips */}
    <div className="float-chip float-chip-1">
      <span style={{ width: 28, height: 28, background: '#f0fdf4', color: '#16a34a', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon name="check" size={16} />
      </span>
      <span>Pagamento confirmado</span>
    </div>

    <div className="float-chip float-chip-2">
      <span style={{ width: 28, height: 28, background: 'var(--brand-soft)', color: 'var(--brand)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon name="whatsapp" size={16} />
      </span>
      <span>WhatsApp respondido</span>
    </div>
  </div>
);

window.HeroDashboard = HeroDashboard;
