const en = {
  "text": "Any questions call me on whatsapp!",
  "input": [
    {
      "id": 0,
      "name": "nome",
      "label": "Name",
      "type": "text",
      "multi": false,
      "value": 255,
      "message": "Too much!",
      "maxText": "Required Field",
      "required": true
    },
    {
      "id": 1,
      "name": "email",
      "label": "Email",
      "type": "email",
      "multi": false,
      "value": 255,
      "message": "Too much!",
      "maxText": "Required Field",
      "required": true
    },
    {
      "id": 2,
      "name": "telefone",
      "label": "Telephone",
      "type": "tel",
      "multi": false,
      "value": 30,
      "message": "Too much!",
      "maxText": "Required Field",
      "required": true
    },
    {
      "id": 3,
      "name": "textarea",
      "label": "Write your order here",
      "type": "text",
      "multi": true,
      "value": 2000,
      "message": "Too much!",
      "maxText": false,
      "required": false
    }
  ],
  "button": "Submit",
  "alert": {
    "title": "Message sent successfully!",
    "body": "We will contact you soon."
  }
}

export default en