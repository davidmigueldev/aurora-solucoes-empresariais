# Aurora Soluções Empresariais — Frontend

![Aurora Soluções Empresariais](./public/og-image.png)

Frontend público do site institucional da **Aurora Soluções Empresariais**, desenvolvido em React e Vite com foco em identidade visual, responsividade e navegação editorial.

**Projeto em produção:** https://solucoes.auroraalveare.com.br

## Sobre o projeto

A interface foi construída para apresentar uma operação que reúne marketing, vendas, tecnologia e gestão sem recorrer ao visual tradicional de dashboards ou templates SaaS.

Entre os principais pontos do frontend:

- Hero de abertura em viewport completo.
- Header responsivo com navegação por seções e destaque conforme o scroll.
- Transição visual entre abertura e narrativa de problema.
- Seções de soluções e serviços com comportamento responsivo.
- Carrossel contínuo de tecnologias e plataformas.
- Formulário de contato com validação de interface.
- Footer institucional responsivo.
- Metadados de SEO, Open Graph, favicon e manifest.
- Layout ajustado para desktop e dispositivos móveis reais.

## Stack

- React 19
- Vite 8
- React Router
- CSS próprio, sem framework de UI
- Oxc / Oxlint

## Estrutura

```text
src/
├── assets/        identidade e imagens do ecossistema
├── components/    seções e componentes da Home
├── context/       dados públicos usados pela demonstração
├── lib/           utilitários do frontend
├── pages/         composição das páginas públicas
└── styles/        reset, variáveis e estilos globais

public/
├── favicon e ícones
├── Open Graph
├── manifest
├── robots.txt
├── sitemap.xml
└── privacidade
```

## Executar localmente

Requisito: Node.js 22 ou superior.

```bash
npm install
npm run dev
```

Para validar antes de gerar o build:

```bash
npm run check
```

## Escopo deste repositório

Este repositório contém **somente a camada pública de frontend**.

O ambiente de produção possui uma camada privada separada com Administração, API, persistência, proteção de acesso e integrações de infraestrutura. Esses componentes não fazem parte deste repositório público.

O formulário presente aqui funciona como demonstração da interface. O fluxo real de envio pode ser testado no site em produção.

## Autor

**David Miguel**  
GitHub: [@davidmigueldev](https://github.com/davidmigueldev)
