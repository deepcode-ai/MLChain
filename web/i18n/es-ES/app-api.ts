const translation = {
  apiServer: 'Servidor de API',
  apiKey: 'Clave de API',
  status: 'Estado',
  disabled: 'Desactivado',
  ok: 'En servicio',
  copy: 'Copiar',
  copied: 'Copiado',
  play: 'Reproducir',
  pause: 'Pausa',
  playing: 'Reproduciendo',
  loading: 'Cargando',
  merMaind: {
    rerender: 'Rehacer Rerender',
  },
  never: 'Nunca',
  apiKeyModal: {
    apiSecretKey: 'Clave secreta de API',
    apiSecretKeyTips: 'Para evitar el abuso de la API, protege tu clave de API. Evita usarla como texto plano en el código del frontend. :)',
    createNewSecretKey: 'Crear nueva clave secreta',
    secretKey: 'Clave secreta',
    created: 'CREADA',
    lastUsed: 'ÚLTIMO USO',
    generateTips: 'Guarda esta clave en un lugar seguro y accesible.',
  },
  actionMsg: {
    deleteConfirmTitle: '¿Eliminar esta clave secreta?',
    deleteConfirmTips: 'Esta acción no se puede deshacer.',
    ok: 'OK',
  },
  completionMode: {
    title: 'Completar App API',
    info: 'Para generar texto de alta calidad, como artículos, resúmenes y traducciones, utiliza la API de mensajes de completado con la entrada del usuario. La generación de texto depende de los parámetros del modelo y las plantillas de inicio establecidas en Mlchain Prompt Engineering.',
    createCompletionApi: 'Crear mensaje de completado',
    createCompletionApiTip: 'Crea un mensaje de completado para admitir el modo de pregunta y respuesta.',
    inputsTips: '(Opcional) Proporciona campos de entrada de usuario como pares clave-valor, que corresponden a las variables en Prompt Eng. La clave es el nombre de la variable, el valor es el valor del parámetro. Si el tipo de campo es Select, el valor enviado debe ser una de las opciones predefinidas.',
    queryTips: 'Contenido de texto de entrada del usuario.',
    blocking: 'Tipo de bloqueo, esperando a que se complete la ejecución y devuelva los resultados. (Las solicitudes pueden interrumpirse si el proceso es largo)',
    streaming: 'devoluciones de transmisión. Implementación de la devolución de transmisión basada en SSE (Eventos enviados por el servidor).',
    messageFeedbackApi: 'Comentarios de mensajes (me gusta)',
    messageFeedbackApiTip: 'Califica los mensajes recibidos en nombre de los usuarios finales con me gusta o no me gusta. Estos datos son visibles en la página de Registros y Anotaciones y se utilizan para ajustar el modelo en el futuro.',
    messageIDTip: 'ID del mensaje',
    ratingTip: 'me gusta o no me gusta, null es deshacer',
    parametersApi: 'Obtener información de parámetros de la aplicación',
    parametersApiTip: 'Recupera los parámetros de entrada configurados, incluidos los nombres de variables, los nombres de campos, los tipos y los valores predeterminados. Normalmente se utiliza para mostrar estos campos en un formulario o completar los valores predeterminados después de que el cliente se carga.',
  },
  chatMode: {
    title: 'Chat App API',
    info: 'Para aplicaciones de conversación versátiles que utilizan un formato de preguntas y respuestas, llama a la API de mensajes de chat para iniciar el diálogo. Mantén conversaciones en curso pasando el conversation_id devuelto. Los parámetros de respuesta y las plantillas dependen de la configuración de Mlchain Prompt Eng.',
    createChatApi: 'Crear mensaje de chat',
    createChatApiTip: 'Crea un nuevo mensaje de conversación o continúa un diálogo existente.',
    inputsTips: '(Opcional) Proporciona campos de entrada de usuario como pares clave-valor, que corresponden a las variables en Prompt Eng. La clave es el nombre de la variable, el valor es el valor del parámetro. Si el tipo de campo es Select, el valor enviado debe ser una de las opciones predefinidas.',
    queryTips: 'Contenido de entrada/pregunta del usuario',
    blocking: 'Tipo de bloqueo, esperando a que se complete la ejecución y devuelva los resultados. (Las solicitudes pueden interrumpirse si el proceso es largo)',
    streaming: 'devoluciones de transmisión. Implementación de la devolución de transmisión basada en SSE (Eventos enviados por el servidor).',
    conversationIdTip: '(Opcional) ID de conversación: dejar vacío para la primera conversación; pasar conversation_id del contexto para continuar el diálogo.',
    messageFeedbackApi: 'Comentarios terminales de mensajes, me gusta',
    messageFeedbackApiTip: 'Califica los mensajes recibidos en nombre de los usuarios finales con me gusta o no me gusta. Estos datos son visibles en la página de Registros y Anotaciones y se utilizan para ajustar el modelo en el futuro.',
    messageIDTip: 'ID del mensaje',
    ratingTip: 'me gusta o no me gusta, null es deshacer',
    chatMsgHistoryApi: 'Obtener el historial de mensajes de chat',
    chatMsgHistoryApiTip: 'La primera página devuelve las últimas `limit` barras, en orden inverso.',
    chatMsgHistoryConversationIdTip: 'ID de conversación',
    chatMsgHistoryFirstId: 'ID del primer registro de chat en la página actual. El valor predeterminado es ninguno.',
    chatMsgHistoryLimit: 'Cuántos chats se devuelven en una solicitud',
    conversationsListApi: 'Obtener lista de conversaciones',
    conversationsListApiTip: 'Obtiene la lista de sesiones del usuario actual. De forma predeterminada, se devuelven las últimas 20 sesiones.',
    conversationsListFirstIdTip: 'ID del último registro en la página actual, predeterminado ninguno.',
    conversationsListLimitTip: 'Cuántos chats se devuelven en una solicitud',
    conversationRenamingApi: 'Renombrar conversación',
    conversationRenamingApiTip: 'Cambia el nombre de las conversaciones; el nombre se muestra en las interfaces de cliente de múltiples sesiones.',
    conversationRenamingNameTip: 'Nuevo nombre',
    parametersApi: 'Obtener información de parámetros de la aplicación',
    parametersApiTip: 'Recupera los parámetros de entrada configurados, incluidos los nombres de variables, los nombres de campos, los tipos y los valores predeterminados. Normalmente se utiliza para mostrar estos campos en un formulario o completar los valores predeterminados después de que el cliente se carga.',
  },
  develop: {
    requestBody: 'Cuerpo de la solicitud',
    pathParams: 'Parámetros de ruta',
    query: 'Consulta',
  },
}

export default translation
