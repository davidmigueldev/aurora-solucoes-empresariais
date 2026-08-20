import { createContext, useContext, useMemo } from 'react'

const defaultServices = [
  {
    id: 'marketing',
    number: '01',
    icon: 'strategy',
    title: 'Marketing Estratégico',
    description:
      'Planejamento e posicionamento para conectar comunicação, oferta e crescimento.',
    summary:
      'Planejamento e posicionamento para conectar comunicação, oferta e crescimento.',
    scope:
      'Estruturamos a estratégia de marketing a partir do momento do negócio, do público e dos objetivos comerciais. A frente pode envolver desde posicionamento e consultoria de imagem até planejamento de campanhas e organização da comunicação.',
    items: [
      'Planejamento de marketing',
      'Posicionamento e proposta de valor',
      'Consultoria de imagem',
      'Planejamento de campanhas',
      'Jornada de comunicação',
      'Análise de presença e concorrência',
    ],
    active: true,
  },
  {
    id: 'traffic',
    number: '02',
    icon: 'traffic',
    title: 'Tráfego Pago e Orgânico',
    description:
      'Aquisição, alcance e presença digital trabalhando como um único sistema.',
    summary:
      'Aquisição, alcance e presença digital trabalhando como um único sistema.',
    scope:
      'Planejamos a geração de demanda combinando mídia paga e construção orgânica. A operação considera canais, públicos, criativos, distribuição, acompanhamento de desempenho e melhoria contínua das campanhas.',
    items: [
      'Gestão de mídia paga',
      'Meta Ads',
      'Campanhas em ecossistemas Google',
      'Estratégia de tráfego orgânico',
      'Planejamento de conteúdo',
      'Otimização de aquisição',
    ],
    active: true,
  },
  {
    id: 'branding',
    number: '03',
    icon: 'brand',
    title: 'Identidade Visual e Branding',
    description:
      'Construção e organização da identidade que sustenta a percepção da marca.',
    summary:
      'Construção e organização da identidade que sustenta a percepção da marca.',
    scope:
      'Desenvolvemos sistemas visuais coerentes para marcas novas ou em reposicionamento, conectando identidade, comunicação, materiais digitais e aplicações do dia a dia para que a empresa mantenha consistência em todos os pontos de contato.',
    items: [
      'Identidade visual',
      'Direção de marca',
      'Sistema de cores e tipografia',
      'Materiais de comunicação',
      'Direção visual para redes',
      'Padronização de aplicações',
    ],
    active: true,
  },
  {
    id: 'technology',
    number: '04',
    icon: 'technology',
    title: 'Desenvolvimento e Tecnologia',
    description:
      'Produtos digitais e automações construídos conforme a operação real da empresa.',
    summary:
      'Produtos digitais e automações construídos conforme a operação real da empresa.',
    scope:
      'Criamos tecnologia com foco em resolver processos concretos. Isso inclui presença digital, sistemas internos e integrações, evitando ferramentas genéricas quando o negócio precisa de uma solução adaptada ao próprio fluxo.',
    items: [
      'Sites institucionais',
      'Landing pages',
      'Sistemas web personalizados',
      'CRM personalizado',
      'Automações e integrações',
      'Dashboards e ferramentas internas',
    ],
    active: true,
  },
  {
    id: 'sales',
    number: '05',
    icon: 'sales',
    title: 'Vendas e CRM Personalizado',
    description:
      'Processo comercial, atendimento e acompanhamento do funil organizados em uma mesma estrutura.',
    summary:
      'Processo comercial, atendimento e acompanhamento do funil organizados em uma mesma estrutura.',
    scope:
      'Desenhamos a operação comercial para que leads, contatos, oportunidades e etapas de negociação possam ser acompanhados com clareza. Quando necessário, a estrutura inclui CRM próprio e SDRs personalizados para apoiar a rotina comercial.',
    items: [
      'CRM personalizado',
      'Estruturação de funil',
      'Organização de leads',
      'SDRs personalizados',
      'Processos de follow-up',
      'Relatórios e acompanhamento comercial',
    ],
    active: true,
  },
  {
    id: 'management',
    number: '06',
    icon: 'management',
    title: 'Gestão Financeira e Benefícios',
    description:
      'Organização operacional para contratos, finanças e benefícios empresariais.',
    summary:
      'Organização operacional para contratos, finanças e benefícios empresariais.',
    scope:
      'Apoiamos a empresa na organização de informações que impactam gestão e tomada de decisão, conectando controle financeiro, contratos e benefícios. A frente também contempla gestão de apólices e rotinas relacionadas à saúde empresarial.',
    items: [
      'Organização financeira',
      'Fluxo de caixa e controles',
      'Gestão de contratos',
      'Propostas e documentos-modelo',
      'Gestão de apólices',
      'Benefícios e saúde empresarial',
    ],
    active: true,
  },
]

const siteDefaults = {
  contacts: {
    whatsapp: '+55 21 97890-5530',
    whatsappEnabled: true,
    email: 'contato.se@auroraalveare.com.br',
    emailEnabled: true,
    businessHours: '',
    businessHoursEnabled: false,
    instagram: '',
    instagramEnabled: false,
    facebook: '',
    facebookEnabled: false,
    tiktok: '',
    tiktokEnabled: false,
    legalName: 'Aurora Soluções Empresariais',
    cnpj: '',
    address: '',
    city: '',
  },
  services: defaultServices,
  content: {
    hero: {
      eyebrow: 'Estrutura • Marketing • Vendas • Tecnologia',
      title: 'Uma nova\nAurora para\nsua empresa.',
      description:
        'Marketing, vendas, tecnologia e gestão integradas para transformar complexidade em clareza, estrutura e resultado.',
      auxiliary: 'Conheça a Aurora',
    },
    problem: {
      eyebrow: 'O custo da desconexão',
      title: 'Crescer sem\nestrutura\ncusta caro.',
      description:
        'Quando áreas essenciais operam como ilhas, o crescimento vem acompanhado de ruído, retrabalho e menos previsibilidade.',
      auxiliary: '',
    },
    ecosystem: {
      eyebrow: 'Ecossistema',
      title: 'Tecnologia, criação\ne distribuição conectadas.',
      description:
        'A Aurora combina ferramentas de desenvolvimento, infraestrutura, dados, inteligência artificial, mídia e criação para executar projetos de ponta a ponta sem tratar cada frente como uma peça isolada.',
      auxiliary: '',
    },
    finalCta: {
      eyebrow: 'Próximo passo',
      title:
        'Sua empresa não precisa\nde mais peças soltas.\nPrecisa de estrutura.',
      description:
        'Marketing, vendas, tecnologia e gestão funcionam melhor quando compartilham direção, processo e objetivo. A Aurora organiza essas frentes para construir crescimento com clareza.',
      auxiliary: 'Fale com um especialista',
    },
    contact: {
      eyebrow: 'Contato',
      title: 'Conte um pouco\nsobre o próximo\npasso da sua empresa.',
      description:
        'Use o formulário para indicar o que sua empresa precisa. Cada envio entra automaticamente na caixa de atendimento da Aurora.',
      auxiliary: 'Enviar mensagem',
    },
  },
  settings: {
    maintenanceMode: false,
    contactFormEnabled: true,
    adminLinkVisible: false,
    openExternalLinksNewTab: true,
    defaultContactChannel: 'whatsapp',
    timezone: 'America/Sao_Paulo',
    locale: 'pt-BR',
  },
}

const SiteDataContext = createContext({
  ...siteDefaults,
  loading: false,
  error: null,
})

export function SiteDataProvider({ children }) {
  const value = useMemo(
    () => ({
      ...siteDefaults,
      loading: false,
      error: null,
    }),
    [],
  )

  return (
    <SiteDataContext.Provider value={value}>
      {children}
    </SiteDataContext.Provider>
  )
}

export function useSiteData() {
  return useContext(SiteDataContext)
}
