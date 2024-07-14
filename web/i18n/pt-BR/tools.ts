const translation = {
  title: 'Ferramentas',
  createCustomTool: 'Criar Ferramenta Personalizada',
  type: {
    all: 'Todas',
    builtIn: 'Integradas',
    custom: 'Personalizadas',
  },
  contribute: {
    line1: 'Estou interessado em ',
    line2: 'contribuir com ferramentas para o Mlchain.',
    viewGuide: 'Ver o guia',
  },
  author: 'Por',
  auth: {
    unauthorized: 'Para Autorizar',
    authorized: 'Autorizado',
    setup: 'Configurar autorização para usar',
    setupModalTitle: 'Configurar Autorização',
    setupModalTitleDescription: 'Após configurar as credenciais, todos os membros do espaço de trabalho podem usar essa ferramenta ao orquestrar aplicativos.',
  },
  includeToolNum: '{{num}} ferramentas incluídas',
  addTool: 'Adicionar Ferramenta',
  createTool: {
    title: 'Criar Ferramenta Personalizada',
    editAction: 'Configurar',
    editTitle: 'Editar Ferramenta Personalizada',
    name: 'Nome',
    toolNamePlaceHolder: 'Digite o nome da ferramenta',
    schema: 'Esquema',
    schemaPlaceHolder: 'Digite seu esquema OpenAPI aqui',
    viewSchemaSpec: 'Ver a Especificação OpenAPI-Swagger',
    importFromUrl: 'Importar de URL',
    importFromUrlPlaceHolder: 'https://...',
    urlError: 'Digite uma URL válida',
    examples: 'Exemplos',
    exampleOptions: {
      json: 'Clima(JSON)',
      yaml: 'Pet Store(YAML)',
      blankTemplate: 'Modelo em Branco',
    },
    availableTools: {
      title: 'Ferramentas Disponíveis',
      name: 'Nome',
      description: 'Descrição',
      method: 'Método',
      path: 'Caminho',
      action: 'Ações',
      test: 'Testar',
    },
    authMethod: {
      title: 'Método de Autorização',
      type: 'Tipo de Autorização',
      keyTooltip: 'Chave do Cabeçalho HTTP, você pode deixar como "Authorization" se não tiver ideia do que é ou definir um valor personalizado',
      types: {
        none: 'Nenhum',
        api_key: 'Chave de API',
        apiKeyPlaceholder: 'Nome do cabeçalho HTTP para a Chave de API',
        apiValuePlaceholder: 'Digite a Chave de API',
      },
      key: 'Chave',
      value: 'Valor',
    },
    authHeaderPrefix: {
      title: 'Tipo de Autenticação',
      types: {
        basic: 'Básica',
        bearer: 'Bearer',
        custom: 'Personalizada',
      },
    },
    privacyPolicy: 'Política de Privacidade',
    privacyPolicyPlaceholder: 'Digite a política de privacidade',
    customDisclaimer: 'Aviso Personalizado',
    customDisclaimerPlaceholder: 'Digite o aviso personalizado',
    deleteToolConfirmTitle: 'Excluir esta ferramenta?',
    deleteToolConfirmContent: 'Excluir a ferramenta é irreversível. Os usuários não poderão mais acessar sua ferramenta.',
  },
  test: {
    title: 'Testar',
    parametersValue: 'Parâmetros e Valor',
    parameters: 'Parâmetros',
    value: 'Valor',
    testResult: 'Resultados do Teste',
    testResultPlaceholder: 'O resultado do teste será exibido aqui',
  },
  thought: {
    using: 'Usando',
    used: 'Usado',
    requestTitle: 'Requisição para',
    responseTitle: 'Resposta de',
  },
  setBuiltInTools: {
    info: 'Informações',
    setting: 'Configuração',
    toolDescription: 'Descrição da Ferramenta',
    parameters: 'parâmetros',
    string: 'string',
    number: 'número',
    required: 'Obrigatório',
    infoAndSetting: 'Informações e Configurações',
  },
  noCustomTool: {
    title: 'Nenhuma ferramenta personalizada!',
    content: 'Adicione e gerencie suas ferramentas personalizadas aqui para construir aplicativos de IA.',
    createTool: 'Criar Ferramenta',
  },
  noSearchRes: {
    title: 'Desculpe, sem resultados!',
    content: 'Não encontramos nenhuma ferramenta que corresponda à sua pesquisa.',
    reset: 'Redefinir Pesquisa',
  },
  builtInPromptTitle: 'Prompt',
  toolRemoved: 'Ferramenta removida',
  notAuthorized: 'Ferramenta não autorizada',
  howToGet: 'Como obter',
}

export default translation
