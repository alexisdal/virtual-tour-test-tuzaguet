var APP_DATA = {
  "scenes": [
    {
      "id": "0-sdb",
      "name": "sdb",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5929172038292165,
          "pitch": 0.27821861366527045,
          "rotation": 7.0685834705770345,
          "target": "1-couloir"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.01922058054841891,
          "pitch": 0.30252272785473266,
          "title": "le papa",
          "text": "Text"
        },
        {
          "yaw": -0.9266843786117533,
          "pitch": 0.18378744044948192,
          "title": "le reflet du papa",
          "text": "Text"
        },
        {
          "yaw": 1.724329542905199,
          "pitch": 0.2806866533344845,
          "title": "douche à l'italienne",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-couloir",
      "name": "couloir",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3164305439331372,
          "pitch": 0.27963599673889483,
          "rotation": 0.7853981633974483,
          "target": "2-chambre-parentale"
        },
        {
          "yaw": -0.7075251595701637,
          "pitch": 0.4342250186737253,
          "rotation": 5.497787143782138,
          "target": "0-sdb"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.073765478052538,
          "pitch": 0.8529275198606143,
          "title": "chiottes",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-chambre-parentale",
      "name": "chambre parentale",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.21557207461134098,
          "pitch": 0.40698517864776207,
          "rotation": 0,
          "target": "1-couloir"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.8929759284617624,
          "pitch": 0.014762685698309852,
          "title": "ceci est une fenetre",
          "text": "et ceci est le texte qui va avec"
        },
        {
          "yaw": 3.025432108665135,
          "pitch": 0.7094447956344663,
          "title": "valise ouverte",
          "text": "Text"
        },
        {
          "yaw": -1.240048264276048,
          "pitch": 0.7843664435810691,
          "title": "lit tres comfortable",
          "text": "Text"
        },
        {
          "yaw": -0.7231510667502814,
          "pitch": 0.056582936066686074,
          "title": "ca c'est un joli cadre / peinture de la proprio",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
