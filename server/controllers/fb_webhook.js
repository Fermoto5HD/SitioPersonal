var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports = {
  get: function(req, res) {
    if (req.query['hub.mode'] === 'subscribe' && req.query['hub.verify_token'] === process.env.FB_VERIFY_TOKEN) {
      //res.status(200).send(req.query['hub.challenge']);
      res.status(200).json(req.query['hub.challenge']);
    } else {
      res.status(403).json({message: "Not authorized"});
    }
  },
  post: function(req, res) {
    let data = req.body;
    if (data.object === 'page') {

      // Iterate over each entry - there may be multiple if batched
      data.entry.forEach(function(entry) {
        var pageID = entry.id;
        var timeOfEvent = entry.time;

        // Iterate over each messaging event
        entry.messaging.forEach(function(event) {
          if (event.message) {

          } else {

          }
        });
      });

      let messaging_events = req.body.entry[0].messaging

      /* Testing */
      if (messaging_events.length > 0) {
        messaging_events.forEach(function(event) {
          console.log(event);
        });
      }


      for (let i = 0; i < messaging_events.length; i++) {
        let event = messaging_events[i]
        let sender = event.sender
        if (event.postback) {
          /*if (event.sender.id) {
            sendFeedback(event.sender.id, "mark_seen")
          }*/
          console.log(event.postback);
          let text = JSON.stringify(event.postback.payload)
          _decide(sender, event.postback.payload, "postback")
          continue
        }

        if (event.message && event.message.text) {
          console.log(event.message);
          let text = event.message.text
          _decide(sender, text, "text")
        }
      }
      res.sendStatus(200)
    }
  }
};

function _decide(sender, text, type) {
  if (type === "postback") {
    switch(text) {
      case "pl_start":
        config = {
          type: "text",
          sender: sender,
          content: {
            text: "¿Cómo andás? En estos momentos estoy refactorizando el código del chatbot. \u000APodés dejarme un mensaje o tu e-mail para ponernos en contacto. \u000A\u000AGracias!",
            quick_replies: [
              {
                "content_type": "text",
                "title": "Conocé más",
                "payload": "pl_about"
              },
              {
                "content_type": "user_email"
              }
            ]
          },
          delay: 100
        }
        _send(config)
        break;

      case "pl_about":
        config = {
          type: "text",
          sender: sender,
          content: {
            text: "Soy un desarrollador frontend, actualmente en camino hacia FullStack JS. \u000ADe hecho, esta es una de las pruebas de que estoy aspirando a ello. \u000A\u000ATe invito a que conozcas mi página personal!",
            quick_replies: [
              {
                "content_type": "text",
                "title": "Volver",
                "payload": "pl_start"
              }
            ],
            "attachment":{
              "type":"template",
              "payload":{
                "template_type":"generic",
                "elements": [
                   {
                    "title":"Acerca de mí",
                    "image_url":"https://fermoto5hd.com/assets/img/covers/about.jpg",
                    "subtitle":"Conocé más de lo que hago en el día a día.",
                    "default_action": {
                      "type": "web_url",
                      "url": "https://fermoto5hd.com/about",
                      "messenger_extensions": false,
                      "webview_height_ratio": "tall",
                      "fallback_url": "https://fermoto5hd.com/"
                    },
                    "buttons": [
                      {
                        "type":"web_url",
                        "url":"https://fermoto5hd.com/about",
                        "title":"Conocé más de lo que hago"
                      },
                      {
                        "type":"web_url",
                        "url":"https://fermoto5hd.com/static/files/cv_fernando-osorio.pdf",
                        "title":"Mirá mi CV"
                      }            
                    ]      
                  },
                  {
                    "title":"Portfolio de trabajos",
                    "image_url":"https://fermoto5hd.com/assets/img/covers/portfolio.jpg",
                    "subtitle":"Conocé algunos de los proyectos que hice hasta el día de hoy.",
                    "default_action": {
                      "type": "web_url",
                      "url": "https://fermoto5hd.com/portfolio",
                      "messenger_extensions": false,
                      "webview_height_ratio": "tall",
                      "fallback_url": "https://fermoto5hd.com/"
                    },
                    "buttons": [
                      {
                        "type":"web_url",
                        "url":"https://fermoto5hd.com/portfolio",
                        "title":"Mirá mis trabajos"
                      }           
                    ]      
                  }
                ]
              }
            }
          },
          delay: 100
        }
        _send(config)
        break;
    }
  }
}

function _send(config) {
  // Simulación de escribiendo.

  let msg = {
    messaging_type: "RESPONSE",
    recipient: {
      id: config.sender.id
    },
    message: config.content
  }

  // Respuestas rápidas
  /*if (extras_quick) {
    msg.message.quick_replies = extras_quick;
  };

  if (!config.type) {
    msg.message.text = config.text
  } else {
    switch (config.type) {
      case "text": 
        msg.message.text = config.text
        break
      case "image":
        msg.message.attachment = {
          type: "image",
          payload: {
            attachment_id: extras
          }
        }
        break
      case "list":
        msg.message.attachment = {
          type: "template",
          payload: {
            template_type: "list",
            elements: extras
          }
        }
        break
      case "buttons": 
        msg.message.attachment = {
          type: "template",
          payload:{
            template_type: "button",
            text: config.text,
            buttons: extras
          }
        }
        break;
      case "carousel": 
        msg.message = {
          attachment: {
            type: "template",
            payload: {
              "template_type":"generic",
              "elements": extras
            }
          }
        }
    }
  }*/
  request({
    uri: 'https://graph.facebook.com/v' + process.env.FB_API_VERSION + '/me/messages',
    qs: { access_token: process.env.FB_ACCESS_TOKEN },
    method: 'POST',
    json: msg
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log("MSG ID: %s | DEST ID: %s", body.message_id, body.recipient_id)
    } else {
      console.error("Message not sent.")
      //console.error(response);
      //console.error(error);
    }
  });
}