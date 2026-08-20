import reactLogo from '../../assets/ecosystem/react.png'
import viteLogo from '../../assets/ecosystem/vite.png'
import jsxLogo from '../../assets/ecosystem/jsx.png'
import cloudflareLogo from '../../assets/ecosystem/cloudflare.png'
import googleCloudLogo from '../../assets/ecosystem/google-cloud.png'
import metaLogo from '../../assets/ecosystem/meta.png'
import openaiLogo from '../../assets/ecosystem/openai.png'
import tiktokLogo from '../../assets/ecosystem/tiktok.png'
import instagramLogo from '../../assets/ecosystem/instagram.png'
import facebookLogo from '../../assets/ecosystem/facebook.png'
import photoshopLogo from '../../assets/ecosystem/photoshop.png'
import canvaLogo from '../../assets/ecosystem/canva.png'
import vegasLogo from '../../assets/ecosystem/vegas-pro.png'
import postgresqlLogo from '../../assets/ecosystem/postgresql.png'
import githubLogo from '../../assets/ecosystem/github.png'

import { useSiteData } from '../../context/SiteDataContext'

import './EcosystemSection.css'

const ecosystem = [
  { name: 'React', logo: reactLogo, group: 'Desenvolvimento' },
  { name: 'Vite', logo: viteLogo, group: 'Desenvolvimento' },
  { name: 'JSX', logo: jsxLogo, group: 'Desenvolvimento' },
  { name: 'GitHub', logo: githubLogo, group: 'Desenvolvimento' },
  { name: 'PostgreSQL', logo: postgresqlLogo, group: 'Dados' },
  { name: 'Cloudflare', logo: cloudflareLogo, group: 'Infraestrutura' },
  { name: 'Google Cloud', logo: googleCloudLogo, group: 'Infraestrutura' },
  { name: 'OpenAI', logo: openaiLogo, group: 'IA' },
  { name: 'Meta', logo: metaLogo, group: 'Mídia e distribuição' },
  { name: 'Instagram', logo: instagramLogo, group: 'Mídia e distribuição' },
  { name: 'Facebook', logo: facebookLogo, group: 'Mídia e distribuição' },
  { name: 'TikTok', logo: tiktokLogo, group: 'Mídia e distribuição' },
  { name: 'Photoshop', logo: photoshopLogo, group: 'Criação' },
  { name: 'Canva', logo: canvaLogo, group: 'Criação' },
  { name: 'Vegas Pro', logo: vegasLogo, group: 'Criação' },
]

function EcosystemCard({ item, hidden = false }) {
  return (
    <div
      className="ecosystem-card"
      aria-hidden={hidden ? 'true' : undefined}
    >
      <img src={item.logo} alt={hidden ? '' : item.name} />
      <span>{item.group}</span>
    </div>
  )
}

function EcosystemSection() {
  const { content } = useSiteData()
  const section = content.ecosystem
  const titleLines = section.title.split('\n')

  return (
    <section className="ecosystem-section" aria-labelledby="ecosystem-title">
      <div className="ecosystem-section__ambient" aria-hidden="true">
        <div className="ecosystem-section__glow ecosystem-section__glow--one" />
        <div className="ecosystem-section__glow ecosystem-section__glow--two" />
        <div className="ecosystem-section__line ecosystem-section__line--one" />
        <div className="ecosystem-section__line ecosystem-section__line--two" />
      </div>

      <div className="ecosystem-section__inner">
        <div className="ecosystem-section__copy">
          <div>
            <p className="ecosystem-section__eyebrow">{section.eyebrow}</p>
            <h2 id="ecosystem-title" className="ecosystem-section__title">
              {titleLines.map((line, index) => (
                <span key={`${line}-${index}`}>
                  {line}
                  {index < titleLines.length - 1 && <br />}
                </span>
              ))}
            </h2>
          </div>

          <div className="ecosystem-section__text">
            <p>{section.description}</p>

            <p>
              Esse ecossistema permite conectar código, automação, conteúdo,
              campanhas, canais sociais e operação em uma mesma estratégia,
              escolhendo a ferramenta conforme a necessidade real de cada
              projeto.
            </p>
          </div>
        </div>

        <div className="ecosystem-marquee" aria-label="Ferramentas e plataformas utilizadas">
          <div className="ecosystem-marquee__fade ecosystem-marquee__fade--left" />
          <div className="ecosystem-marquee__fade ecosystem-marquee__fade--right" />

          <div className="ecosystem-marquee__track">
            <div className="ecosystem-marquee__group">
              {ecosystem.map((item) => (
                <EcosystemCard item={item} key={item.name} />
              ))}
            </div>

            <div className="ecosystem-marquee__group" aria-hidden="true">
              {ecosystem.map((item) => (
                <EcosystemCard item={item} hidden key={`duplicate-${item.name}`} />
              ))}
            </div>
          </div>
        </div>

        <div className="ecosystem-section__legend" aria-hidden="true">
          <span>Desenvolvimento</span>
          <span>Infraestrutura</span>
          <span>Dados</span>
          <span>IA</span>
          <span>Mídia</span>
          <span>Criação</span>
        </div>
      </div>
    </section>
  )
}

export default EcosystemSection
