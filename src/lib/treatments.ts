export type TreatmentSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Treatment = {
  slug: string;
  number: string;
  shortTitle: string;
  title: string;
  eyebrow: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  intro: string;
  highlights: Array<{ label: string; value: string }>;
  sections: TreatmentSection[];
  faqs: Array<{ question: string; answer: string }>;
  related: string[];
  references: Array<{ label: string; href: string }>;
};

export const SITE_URL = "https://drcarlosaugustovallim.lovable.app";
export const OG_IMAGE = `${SITE_URL}/og-dr-carlos-vallim.jpg`;
export const WHATSAPP_URL =
  "https://wa.me/552141122000?text=Olá%2C%20gostaria%20de%20agendar%20uma%20avaliação%20com%20o%20Dr.%20Carlos%20Vallim.";

export const treatments: Treatment[] = [
  {
    slug: "viscossuplementacao-joelho",
    number: "02",
    shortTitle: "Viscossuplementação",
    title: "Viscossuplementação do joelho com ácido hialurônico",
    eyebrow: "Tratamento para artrose do joelho",
    metaTitle: "Viscossuplementação do Joelho | Dr. Carlos Vallim RJ",
    metaDescription:
      "Entenda o que é viscossuplementação com ácido hialurônico no joelho, indicações, aplicação, cuidados e limitações. Avaliação ortopédica no Rio de Janeiro.",
    summary:
      "A viscossuplementação é uma infiltração intra-articular de ácido hialurônico considerada em alguns casos de artrose para auxiliar no controle da dor e na mobilidade.",
    intro:
      "O ácido hialurônico já está presente naturalmente no líquido sinovial, que participa da lubrificação da articulação. Na viscossuplementação, uma formulação própria para uso intra-articular é aplicada no joelho. A decisão não depende apenas do exame de imagem: sintomas, grau de artrose, tratamentos já realizados, saúde geral e objetivos do paciente precisam ser avaliados em conjunto.",
    highlights: [
      { label: "Procedimento", value: "Ambulatorial" },
      { label: "Substância", value: "Ácido hialurônico" },
      { label: "Decisão", value: "Individualizada" },
    ],
    sections: [
      {
        title: "Para quem pode ser indicada?",
        paragraphs: [
          "O procedimento pode ser considerado para adultos com dor e limitação relacionadas à osteoartrose do joelho, especialmente quando medidas como ajuste de atividades, fortalecimento, fisioterapia e medicamentos não oferecem controle suficiente.",
          "Nem toda dor no joelho é causada por artrose. Lesões meniscais, tendinopatias, inflamações e problemas no quadril ou na coluna podem produzir sintomas parecidos. Por isso, a indicação começa por uma avaliação clínica e, quando necessário, exames complementares.",
        ],
        bullets: [
          "Dor mecânica e rigidez associadas à artrose",
          "Limitação para caminhar, subir escadas ou praticar atividades",
          "Resposta insuficiente ou contraindicação a outras medidas conservadoras",
          "Expectativas compatíveis com um tratamento de controle de sintomas",
        ],
      },
      {
        title: "Como é feita a aplicação?",
        paragraphs: [
          "A aplicação é realizada por médico, com técnica asséptica, diretamente no espaço articular. Antes do procedimento, o joelho é examinado e a pele é higienizada. Em situações específicas, recursos de imagem podem auxiliar o posicionamento da agulha.",
          "Existem produtos com composições e esquemas de aplicação diferentes. A escolha do produto e do número de aplicações deve ser feita pelo ortopedista após a avaliação; não existe um protocolo único adequado para todos.",
        ],
      },
      {
        title: "Viscossuplementação e infiltração são a mesma coisa?",
        paragraphs: [
          "Viscossuplementação é um tipo de infiltração. A palavra infiltração descreve a via de aplicação dentro ou ao redor de uma articulação; já viscossuplementação identifica especificamente o uso de ácido hialurônico intra-articular.",
          "Outras infiltrações podem utilizar medicamentos com objetivos diferentes. A escolha não deve ser feita apenas pelo nome do procedimento, e sim pelo diagnóstico, pelo benefício esperado e pelos riscos de cada opção.",
        ],
      },
      {
        title: "Benefícios esperados e limites",
        paragraphs: [
          "Alguns pacientes relatam redução da dor e melhora funcional, enquanto outros têm benefício pequeno ou nenhum. A resposta pode levar algum tempo e não é possível garanti-la antecipadamente.",
          "A aplicação não reconstrói a cartilagem perdida, não cura a artrose e não substitui hábitos, controle de peso quando indicado, fortalecimento e acompanhamento. As recomendações científicas não são uniformes; por isso, benefícios, incertezas e alternativas devem ser discutidos individualmente.",
        ],
      },
      {
        title: "Cuidados e possíveis reações",
        paragraphs: [
          "É comum receber orientação para reduzir atividades intensas logo após a aplicação. Dor, inchaço ou sensação de calor transitórios podem ocorrer. Infecção e outras complicações são incomuns, mas exigem atenção.",
          "Febre, piora importante da dor, vermelhidão progressiva ou grande aumento de volume devem motivar contato médico. Uso de anticoagulantes, alergias, infecção ativa e doenças clínicas precisam ser informados antes do procedimento.",
        ],
      },
    ],
    faqs: [
      {
        question: "A infiltração de ácido hialurônico no joelho dói?",
        answer:
          "Pode haver desconforto durante a entrada da agulha e sensação de pressão. A intensidade varia, e o médico pode orientar medidas para tornar o procedimento mais confortável.",
      },
      {
        question: "Quanto tempo de repouso é necessário?",
        answer:
          "A orientação depende da avaliação e do procedimento realizado. Em geral, recomenda-se evitar esforço intenso logo após a aplicação, mas o prazo deve ser confirmado com o médico responsável.",
      },
      {
        question: "Quanto tempo dura o efeito?",
        answer:
          "A duração é variável e algumas pessoas não apresentam melhora. Produto utilizado, gravidade da artrose, condições associadas e resposta individual influenciam o resultado.",
      },
      {
        question: "Qual é o valor da viscossuplementação?",
        answer:
          "O custo depende do produto, do esquema indicado e das condições do atendimento. Primeiro é necessário confirmar se o procedimento é apropriado para o caso; depois, a equipe pode informar valores e cobertura.",
      },
      {
        question: "Viscossuplementação evita cirurgia?",
        answer:
          "Ela pode integrar o tratamento não cirúrgico e ajudar no controle de sintomas em casos selecionados, mas não garante que uma cirurgia nunca será necessária. A evolução deve ser acompanhada.",
      },
    ],
    related: ["tratamento-conservador-joelho", "infiltracao-joelho", "protese-joelho"],
    references: [
      {
        label: "Revista Brasileira de Ortopedia — Viscossuplementação",
        href: "https://www.rbo.org.br/detalhes/83/pt-BR/viscosuplementacao",
      },
      {
        label: "CFM — Parecer nº 5/2023 sobre ácido hialurônico intra-articular",
        href: "https://sistemas.cfm.org.br/normas/arquivos/pareceres/BR/2023/5_2023.pdf",
      },
    ],
  },
  {
    slug: "artroscopia-joelho",
    number: "01",
    shortTitle: "Artroscopia",
    title: "Artroscopia do joelho",
    eyebrow: "Cirurgia minimamente invasiva",
    metaTitle: "Artroscopia do Joelho | Dr. Carlos Vallim RJ",
    metaDescription:
      "Saiba quando a artroscopia do joelho pode ser indicada, como é realizada e como funciona a recuperação. Avaliação com ortopedista no Rio de Janeiro.",
    summary:
      "A artroscopia utiliza uma pequena câmera e instrumentos delicados para tratar determinadas lesões dentro do joelho por incisões reduzidas.",
    intro:
      "A artroscopia não é um tratamento único para toda dor no joelho. Ela pode ser indicada para problemas específicos após exame clínico e análise dos exames de imagem, sempre considerando alternativas não cirúrgicas e os objetivos do paciente.",
    highlights: [
      { label: "Acesso", value: "Pequenas incisões" },
      { label: "Visualização", value: "Câmera articular" },
      { label: "Planejamento", value: "Conforme a lesão" },
    ],
    sections: [
      {
        title: "Quando pode ser considerada?",
        paragraphs: [
          "A indicação varia conforme a estrutura lesionada e os sintomas. Entre as situações avaliadas estão algumas lesões de menisco, corpos livres, lesões de cartilagem e reconstruções ligamentares. Artrose isolada, sem uma lesão tratável associada, não significa automaticamente necessidade de artroscopia.",
        ],
        bullets: [
          "Sintomas persistentes apesar do tratamento adequado",
          "Lesão estrutural compatível com a queixa e o exame físico",
          "Travamentos ou instabilidade em situações selecionadas",
          "Objetivos e condições clínicas favoráveis ao procedimento",
        ],
      },
      {
        title: "Como funciona a cirurgia?",
        paragraphs: [
          "A câmera permite visualizar o interior da articulação. Outros pequenos acessos são usados para os instrumentos necessários ao procedimento planejado. A anestesia e o tempo cirúrgico variam de acordo com a lesão e a técnica.",
          "O que será reparado, removido ou reconstruído deve ser explicado antes da cirurgia. Em alguns casos, achados durante o procedimento podem exigir decisões previstas no consentimento informado.",
        ],
      },
      {
        title: "Recuperação",
        paragraphs: [
          "A recuperação depende muito do que foi feito. Uma artroscopia meniscal simples e uma reconstrução ligamentar, por exemplo, têm ritmos e restrições diferentes. Controle da dor, mobilidade, fortalecimento e retorno gradual às atividades fazem parte do acompanhamento.",
          "Seguir as orientações de apoio, curativo, medicação e fisioterapia ajuda a reduzir riscos. O retorno ao trabalho e ao esporte deve ser liberado individualmente.",
        ],
      },
      {
        title: "Riscos e decisão compartilhada",
        paragraphs: [
          "Como toda cirurgia, a artroscopia envolve riscos, incluindo infecção, trombose, rigidez, sangramento e persistência de sintomas. A frequência e relevância de cada risco mudam conforme o procedimento e o perfil do paciente.",
          "A consulta serve para comparar o benefício esperado com tratamentos conservadores, tempo de recuperação e riscos antes da decisão.",
        ],
      },
    ],
    faqs: [
      { question: "Artroscopia é sempre necessária para lesão de menisco?", answer: "Não. Tipo de lesão, idade, sintomas, travamento, atividade e resposta ao tratamento conservador influenciam a indicação." },
      { question: "Quando posso voltar a caminhar?", answer: "Depende do procedimento realizado e das orientações de apoio. O cirurgião define esse avanço de acordo com a estabilidade e a cicatrização." },
      { question: "A cirurgia deixa cicatriz?", answer: "A artroscopia usa pequenas incisões, mas toda incisão forma cicatriz. Aspecto e evolução variam entre pessoas." },
    ],
    related: ["reabilitacao-pos-operatoria-joelho", "tratamento-conservador-joelho", "infiltracao-joelho"],
    references: [{ label: "SBOT — Consensos Brasileiros de Ortopedia e Traumatologia", href: "https://sbot.org.br/wp-content/uploads/2019/11/Consensos.pdf" }],
  },
  {
    slug: "protese-joelho",
    number: "03",
    shortTitle: "Prótese de Joelho",
    title: "Prótese de joelho",
    eyebrow: "Tratamento cirúrgico da artrose avançada",
    metaTitle: "Prótese de Joelho | Cirurgia e Recuperação | RJ",
    metaDescription:
      "Entenda quando a prótese de joelho pode ser considerada, planejamento, cirurgia, riscos e recuperação com o Dr. Carlos Vallim no Rio de Janeiro.",
    summary:
      "A artroplastia substitui superfícies articulares danificadas por componentes protéticos para aliviar sintomas e recuperar função em casos selecionados.",
    intro:
      "A prótese costuma ser discutida quando a artrose é avançada, a dor limita a vida diária e o tratamento não cirúrgico já não oferece controle adequado. A radiografia é importante, mas a decisão considera principalmente sintomas, limitações, saúde geral e expectativas.",
    highlights: [
      { label: "Indicação", value: "Artrose avançada" },
      { label: "Objetivo", value: "Dor e função" },
      { label: "Recuperação", value: "Progressiva" },
    ],
    sections: [
      {
        title: "Quando a prótese pode ser indicada?",
        paragraphs: ["Dor frequente, dificuldade para caminhar, deformidade e perda de autonomia podem levar à consideração da cirurgia quando outras medidas já foram tentadas. A idade isoladamente não decide a indicação."],
        bullets: ["Dor que interfere no sono ou nas atividades diárias", "Limitação funcional importante", "Alterações articulares compatíveis nos exames", "Falha de tratamento conservador bem conduzido"],
      },
      {
        title: "Planejamento e cirurgia",
        paragraphs: ["Antes da cirurgia são avaliados exames, medicações, condições cardíacas, risco de infecção e suporte para o pós-operatório. Durante o procedimento, as superfícies comprometidas são preparadas para receber os componentes da prótese.", "Existem técnicas e modelos diferentes. A escolha depende da anatomia, estabilidade dos ligamentos, padrão de desgaste e planejamento do cirurgião."],
      },
      {
        title: "Como é a recuperação?",
        paragraphs: ["Mobilização e fisioterapia fazem parte do processo. Ganho de movimento, força e segurança para caminhar ocorre gradualmente, e a evolução varia entre pacientes.", "O acompanhamento ajuda a ajustar analgesia, prevenir complicações e orientar atividades. Retorno ao trabalho, direção e exercícios precisa de liberação individual."],
      },
      {
        title: "Riscos e expectativas",
        paragraphs: ["Infecção, trombose, rigidez, desgaste, instabilidade e necessidade de nova cirurgia estão entre os riscos possíveis. Medidas preventivas são definidas conforme o perfil do paciente.", "A cirurgia busca reduzir a dor e melhorar a função, mas não transforma o joelho em uma articulação natural nem permite garantir um resultado específico."],
      },
    ],
    faqs: [
      { question: "Existe idade certa para colocar prótese?", answer: "Não existe um único limite. Sintomas, condição clínica, grau de desgaste e impacto na rotina são avaliados em conjunto." },
      { question: "Quanto tempo dura uma prótese?", answer: "A durabilidade varia com o implante, técnica, peso, atividades e fatores individuais. O acompanhamento periódico é importante." },
      { question: "Vou precisar de fisioterapia?", answer: "A reabilitação costuma integrar o tratamento para recuperar movimento, força e função, conforme protocolo individual." },
    ],
    related: ["tratamento-conservador-joelho", "reabilitacao-pos-operatoria-joelho", "viscossuplementacao-joelho"],
    references: [{ label: "SBOT — Consensos Brasileiros de Ortopedia e Traumatologia", href: "https://sbot.org.br/wp-content/uploads/2019/11/Consensos.pdf" }],
  },
  {
    slug: "tratamento-conservador-joelho",
    number: "04",
    shortTitle: "Tratamento Conservador",
    title: "Tratamento conservador do joelho",
    eyebrow: "Cuidado não cirúrgico",
    metaTitle: "Tratamento Conservador do Joelho | Ortopedista RJ",
    metaDescription:
      "Conheça opções não cirúrgicas para dor e artrose no joelho: exercícios, fisioterapia, hábitos e medicamentos sob avaliação médica no Rio de Janeiro.",
    summary:
      "O tratamento conservador combina medidas não cirúrgicas para controlar sintomas, recuperar função e manter o paciente ativo com segurança.",
    intro:
      "Muitos problemas do joelho podem começar com uma abordagem não cirúrgica. O plano é construído a partir do diagnóstico, intensidade da dor, rotina, condicionamento, doenças associadas e objetivos do paciente — não por uma receita igual para todos.",
    highlights: [
      { label: "Abordagem", value: "Não cirúrgica" },
      { label: "Plano", value: "Combinado" },
      { label: "Meta", value: "Função e autonomia" },
    ],
    sections: [
      { title: "O que pode fazer parte do plano?", paragraphs: ["Educação sobre o problema, adaptação temporária de atividades, exercícios, fisioterapia, controle de peso quando indicado e medicamentos podem ser combinados. Órteses e outras medidas têm papel em situações específicas."], bullets: ["Fortalecimento e melhora de mobilidade", "Adaptação de carga e retorno gradual", "Controle de fatores que agravam os sintomas", "Reavaliação periódica da resposta"] },
      { title: "Exercício é seguro com dor no joelho?", paragraphs: ["Movimento bem orientado costuma ser parte importante do cuidado. Tipo, intensidade e progressão precisam respeitar o diagnóstico e a tolerância. Dor intensa, trauma recente, bloqueio ou inchaço importante merecem avaliação antes de iniciar um programa."], },
      { title: "Medicamentos e infiltrações", paragraphs: ["Analgésicos e anti-inflamatórios têm benefícios e riscos, especialmente em pessoas com problemas gástricos, renais, cardiovasculares ou que usam anticoagulantes. Automedicação deve ser evitada.", "Infiltrações podem ser discutidas em casos selecionados, mas não substituem diagnóstico e plano global de cuidado."], },
      { title: "Quando reavaliar a estratégia?", paragraphs: ["Persistência ou piora da dor, perda progressiva de função, instabilidade e dificuldade para atividades básicas justificam nova avaliação. A cirurgia pode ser discutida quando há uma lesão tratável e o benefício esperado supera os riscos."], },
    ],
    faqs: [
      { question: "Tratamento conservador significa apenas fisioterapia?", answer: "Não. Ele pode combinar educação, exercícios, ajustes de atividade, controle de peso, medicamentos e outras medidas conforme o diagnóstico." },
      { question: "Quanto tempo leva para melhorar?", answer: "Depende da causa e da resposta individual. O acompanhamento permite ajustar o plano com base na evolução, em vez de fixar um prazo universal." },
      { question: "Posso evitar uma cirurgia?", answer: "Muitos pacientes controlam bem os sintomas sem cirurgia, mas isso depende da lesão, do impacto funcional e da resposta ao tratamento." },
    ],
    related: ["viscossuplementacao-joelho", "infiltracao-joelho", "artroscopia-joelho"],
    references: [{ label: "Sociedade Brasileira de Reumatologia — Diretriz de tratamento da osteoartrite", href: "http://projetodiretrizes.org.br/projeto_diretrizes/077.pdf" }],
  },
  {
    slug: "infiltracao-joelho",
    number: "05",
    shortTitle: "Infiltrações",
    title: "Infiltração no joelho",
    eyebrow: "Procedimentos intra-articulares",
    metaTitle: "Infiltração no Joelho | Tipos e Cuidados | RJ",
    metaDescription:
      "Entenda para que serve a infiltração no joelho, como é feita, tipos de substância, cuidados e diferenças da viscossuplementação. Ortopedista no RJ.",
    summary:
      "Infiltração é a aplicação de uma substância dentro ou ao redor da articulação com finalidade definida pelo diagnóstico e pelo medicamento escolhido.",
    intro:
      "O termo “infiltração” reúne procedimentos diferentes. Ácido hialurônico, corticosteroides e outras substâncias não têm a mesma indicação, duração ou perfil de risco. Antes de qualquer aplicação, é necessário identificar a causa da dor e revisar condições clínicas e medicamentos em uso.",
    highlights: [
      { label: "Local", value: "Joelho" },
      { label: "Finalidade", value: "Conforme diagnóstico" },
      { label: "Aplicação", value: "Por médico" },
    ],
    sections: [
      { title: "Para que serve?", paragraphs: ["Dependendo do diagnóstico e da substância, a infiltração pode buscar reduzir um processo inflamatório, controlar sintomas ou complementar o manejo da artrose. Ela não deve ser usada apenas porque existe dor, sem esclarecer sua origem."], },
      { title: "Como é feita?", paragraphs: ["Após avaliação, a pele é preparada com técnica asséptica e a agulha é posicionada na região planejada. Em algumas situações, imagem pode ser usada para orientar a aplicação. As recomendações posteriores variam com o produto e o local."], },
      { title: "Tipos de infiltração", paragraphs: ["Corticosteroides têm ação anti-inflamatória e podem ser considerados em cenários específicos. A viscossuplementação usa ácido hialurônico e é discutida principalmente no contexto de artrose. Outros produtos exigem análise própria de evidência, indicação e segurança.", "Misturar os nomes pode gerar expectativas incorretas. O paciente deve saber qual substância será utilizada, por qual motivo e quais alternativas existem."], },
      { title: "Riscos e cuidados", paragraphs: ["Dor transitória e inchaço podem ocorrer. Infecção é rara, mas potencialmente grave. Diabetes, anticoagulantes, alergias, infecção ativa e procedimentos recentes precisam ser informados ao médico.", "Após a aplicação, é importante seguir as orientações e buscar assistência em caso de febre, vermelhidão progressiva ou piora importante."], },
    ],
    faqs: [
      { question: "Infiltração no joelho dói?", answer: "Pode causar desconforto passageiro. A percepção varia conforme a pessoa, o local e a técnica empregada." },
      { question: "Quanto tempo de repouso é necessário?", answer: "O prazo depende da substância e da condição tratada. Atividades intensas geralmente são evitadas logo após, conforme orientação médica." },
      { question: "Toda infiltração usa corticoide?", answer: "Não. Existem substâncias diferentes, inclusive ácido hialurônico. Cada uma tem objetivos e riscos próprios." },
      { question: "Quanto custa?", answer: "O valor varia conforme o produto e o atendimento. A indicação e o tipo de aplicação precisam ser definidos antes de um orçamento responsável." },
    ],
    related: ["viscossuplementacao-joelho", "tratamento-conservador-joelho", "artroscopia-joelho"],
    references: [
      { label: "Revista Brasileira de Ortopedia — Viscossuplementação", href: "https://www.rbo.org.br/detalhes/83/pt-BR/viscosuplementacao" },
      { label: "CFM — Parecer nº 5/2023", href: "https://sistemas.cfm.org.br/normas/arquivos/pareceres/BR/2023/5_2023.pdf" },
    ],
  },
  {
    slug: "reabilitacao-pos-operatoria-joelho",
    number: "06",
    shortTitle: "Reabilitação Pós-op",
    title: "Reabilitação pós-operatória do joelho",
    eyebrow: "Retorno gradual e seguro",
    metaTitle: "Reabilitação Pós-operatória do Joelho | Dr. Carlos Vallim",
    metaDescription:
      "Entenda as etapas da recuperação após cirurgia do joelho, controle da dor, fisioterapia, sinais de alerta e retorno às atividades no Rio de Janeiro.",
    summary:
      "A reabilitação organiza o controle dos sintomas, a recuperação do movimento e o ganho de força conforme a cirurgia realizada e a cicatrização.",
    intro:
      "Não existe um cronograma único para todas as cirurgias do joelho. Menisco, ligamentos, cartilagem e prótese exigem cuidados diferentes. O cirurgião e a equipe de reabilitação alinham metas por etapas e ajustam a progressão de acordo com a resposta do paciente.",
    highlights: [
      { label: "Início", value: "Orientado" },
      { label: "Evolução", value: "Por critérios" },
      { label: "Objetivo", value: "Retorno seguro" },
    ],
    sections: [
      { title: "Primeiras etapas", paragraphs: ["Controle de dor e inchaço, proteção do procedimento e prevenção de complicações são prioridades iniciais. Curativo, medicação, apoio do membro e uso de dispositivos devem seguir a orientação recebida na alta."], },
      { title: "Movimento e força", paragraphs: ["A recuperação de mobilidade e força é progressiva. Exercícios são selecionados conforme o tecido operado e a fase de cicatrização. Avançar rápido demais ou ficar parado além do necessário pode prejudicar o resultado."], bullets: ["Metas de amplitude de movimento", "Ativação e fortalecimento muscular", "Treino de marcha e equilíbrio", "Progressão para tarefas do trabalho ou esporte"] },
      { title: "Retorno às atividades", paragraphs: ["Dirigir, trabalhar e praticar esporte exigem capacidades diferentes. A liberação considera controle da dor, movimento, força, estabilidade e demandas da atividade — não apenas o número de semanas após a cirurgia."], },
      { title: "Sinais de alerta", paragraphs: ["Febre, secreção na ferida, vermelhidão progressiva, falta de ar, dor no peito, aumento importante do inchaço ou dor na panturrilha exigem contato médico imediato ou avaliação de urgência."], },
    ],
    faqs: [
      { question: "Quando começa a fisioterapia?", answer: "Depende da cirurgia e do protocolo. Em muitos casos começa cedo, mas somente a equipe responsável pode definir o momento e as restrições." },
      { question: "Quando posso voltar ao esporte?", answer: "O retorno depende de critérios de força, movimento, estabilidade e segurança específicos para o procedimento e o esporte." },
      { question: "Dor depois da cirurgia é normal?", answer: "Algum desconforto é esperado, mas intensidade crescente, febre ou outros sinais de alerta devem ser comunicados à equipe." },
    ],
    related: ["artroscopia-joelho", "protese-joelho", "tratamento-conservador-joelho"],
    references: [{ label: "SBOT — Consensos Brasileiros de Ortopedia e Traumatologia", href: "https://sbot.org.br/wp-content/uploads/2019/11/Consensos.pdf" }],
  },
];

export const getTreatment = (slug: string) => treatments.find((item) => item.slug === slug);

export type TreatmentPath =
  | "/tratamentos/viscossuplementacao-joelho"
  | "/tratamentos/artroscopia-joelho"
  | "/tratamentos/protese-joelho"
  | "/tratamentos/tratamento-conservador-joelho"
  | "/tratamentos/infiltracao-joelho"
  | "/tratamentos/reabilitacao-pos-operatoria-joelho";

export function treatmentPath(slug: string): TreatmentPath {
  switch (slug) {
    case "viscossuplementacao-joelho":
      return "/tratamentos/viscossuplementacao-joelho";
    case "artroscopia-joelho":
      return "/tratamentos/artroscopia-joelho";
    case "protese-joelho":
      return "/tratamentos/protese-joelho";
    case "tratamento-conservador-joelho":
      return "/tratamentos/tratamento-conservador-joelho";
    case "infiltracao-joelho":
      return "/tratamentos/infiltracao-joelho";
    case "reabilitacao-pos-operatoria-joelho":
      return "/tratamentos/reabilitacao-pos-operatoria-joelho";
    default:
      return "/tratamentos/viscossuplementacao-joelho";
  }
}
