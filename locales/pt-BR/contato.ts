const pt = {
  "text": "Qualquer dúvida chame pelo whatsapp!",
  "input": [
    {
      "id": 0,
      "name": "nome",
      "label": "Nome",
      "type": "text",
      "multi": false,
      "value": 255,
      "message": "Muito Longo",
      "maxText": "Campo Obrigatório",
      "required": true
    },
    {
      "id": 1,
      "name": "email",
      "label": "Email",
      "type": "email",
      "multi": false,
      "value": 255,
      "message": "Muito Longo",
      "maxText": "Campo Obrigatório",
      "required": true
    },
    {
      "id": 2,
      "name": "telefone",
      "label": "Telefone",
      "type": "tel",
      "multi": false,
      "value": 30,
      "message": "Muito Longo",
      "maxText": "Campo Obrigatório",
      "required": true
    },
    {
      "id": 3,
      "name": "textarea",
      "label": "Escreva pedido aqui",
      "type": "text",
      "multi": true,
      "value": 2000,
      "message": "Muito Longo",
      "maxText": false,
      "required": false
    }
  ],
  "button": "Enviar",
  "alert": {
    "title": "Mensagem Enviada com Sucesso!",
    "body": "Entraremos em contato em breve."
  }
}

export default pt