const house = {
    "rooms": {
      "Entry": {
        "background": {
          "source": "Assets/pallet-town_Mini.mp4",
          "loop": true,
          "type": "video",
          "rotation": [0, -90, 0], //[x, y, z],
        },
        "adjacentRooms": ["MainHall", "Cave"],
        "interactions": [
          {
            "whereTo": "Cave",
            "type": "Nav",
            "location": [-0.5, 1.4, -3], //[x, y, z],
            "rotation": [0, 0, 0], //[x, y, z],
            "width": "0.7",
            "height": "1",
            "distance": 1,
            "originalRoom": "Entry",
            "id": 1789
          },
          {
            "whereTo": "Ally",
            "type": "Nav",
            "location": [-2, 1.4, 3], //[x, y, z],
            "rotation": [0, 0, 0], //[x, y, z],
            "width": "0.9",
            "height": "1",
            "distance": 1,
            "originalRoom": "Entry",
            "id": 1790
          },
          {
            "whereTo": "Entry",
            "type": "Picture",
            "location": [4, 4, -3], //[x, y, z],
            "rotation": [0, 0, 7], //[x, y, z],
            "distance": 1,
            "originalRoom": "Entry",
            "id": 2,
            "width": "0.4",
            "height": "0.7",
            "display" : {
              "type": "Image",
              "source": "https://i.ibb.co/z6hR1Ys/OUTSIDE-CASTLE-ROOM-POPUP.jpg",
              "text": "Lilly got a hostile welcome the first time she fell down her oven into the Ovenland world. Today she is much more welcome. The old fountain is now being used as a skating rink!"
            }
          }
        ]
      },
      "Ally": {
        "background": {
          "source": "Assets/ovenland1.jpeg",
          "loop": false,
          "type": "picture",
          "rotation": [0, -90, 0], //[x, y, z],
        },
        "adjacentRooms": ["Entry"],
        "interactions": [
            {
                "whereTo": "Entry",
                "type": "Nav",
                "location": [2.1, 1.4, -3], //[x, y, z],
                "rotation": [0, 0, 0], //[x, y, z],
                "distance": 1,
                "width": "0.4",
                "height": "0.7",
                "originalRoom": "Ally",
                "id": 132423
            },
            {
              "whereTo": "Entry",
              "type": "Nav",
              "location": [-6.5, 1.3, -3], //[x, y, z],
              "rotation": [0, 90, 0], //[x, y, z],
              "width": "0.7",
              "height": "1",
              "distance": 1,
              "originalRoom": "Ally",
              "id": 235235
            },
            {
                "whereTo": "Ally",
                "type": "Picture",
                "location": [-5.5, 1, -4], //[x, y, z],
                "rotation": [0, 0, 0], //[x, y, z],
                "distance": 1,
                "originalRoom": "Ally",
                "id": 235235235,
                "width": "0.4",
                "height": "0.7",
                "display" : {
                  "type": "Image",
                  "source": "https://i.ibb.co/z6hR1Ys/OUTSIDE-CASTLE-ROOM-POPUP.jpg",
                  "text": "Lilly got a hostile welcome the first time she fell down her oven into the Ovenland world. Today she is much more welcome. The old fountain is now being used as a skating rink!"
                }
            },
            {
                "whereTo": "Ally",
                "type": "Picture",
                "location": [-5.5, 0, -4], //[x, y, z],
                "rotation": [0, 0, 0], //[x, y, z],
                "distance": 1,
                "originalRoom": "Ally",
                "id": 3,
                "width": "0.4",
                "height": "0.7",
                "display" : {
                  "type": "Image",
                  "source": "https://i.ibb.co/fxnM9fP/Castle-Outside.jpg",
                  "text": "The Ovenland castle used to be a tower of greasy goo wrapped around stone. The satuses spewed forth hot grease. Since Lilly's first visit, the statues now produce clean water."
                }
            },
              {
                "whereTo": "Ally",
                "type": "Print",
                "location": [0, 1.4, -4], //[x, y, z],
                "rotation": [0, 0, 0], //[x, y, z],
                "distance": 1,
                "originalRoom": "Ally",
                "id": 2532330,
                "width": "0.4",
                "height": "0.7",
                "display" : {
                  "type": "Image",
                  "source": "https://i.ibb.co/4gRrS0S/MUSHROOM-ROOM-PRINTABLE.jpg",
                  "text": "This image is available for Download & Coloring on the home page!"
                }
              }
        ]
      },
      "Cave": {
        "background": {
          "source": "Assets/pokemon-cave_Mini.mp4",
          "loop": true,
          "type": "video",
          "rotation": [0, -90, 0], //[x, y, z],
        },
        "adjacentRooms": ["Entry"],
        "interactions": [
          {
              "whereTo": "Entry",
              "type": "Nav",
              "location": [2.1, 1.4, -2.5], //[x, y, z],
              "rotation": [0, 0, 0], //[x, y, z],
              "distance": 1,
              "width": "0.4",
              "height": "0.7",
              "originalRoom": "Ally",
              "id": 132423
          },
          {
              "whereTo": "Ally",
              "type": "Picture",
              "location": [-5.5, 1, -4], //[x, y, z],
              "rotation": [0, 0, 0], //[x, y, z],
              "distance": 1,
              "originalRoom": "Ally",
              "id": 235235235,
              "width": "0.4",
              "height": "0.7",
              "display" : {
                "type": "Image",
                "source": "https://i.ibb.co/z6hR1Ys/OUTSIDE-CASTLE-ROOM-POPUP.jpg",
                "text": "Lilly got a hostile welcome the first time she fell down her oven into the Ovenland world. Today she is much more welcome. The old fountain is now being used as a skating rink!"
              }
          },
          {
              "whereTo": "Ally",
              "type": "Picture",
              "location": [-5.5, 0, -4], //[x, y, z],
              "rotation": [0, 0, 0], //[x, y, z],
              "distance": 1,
              "originalRoom": "Ally",
              "id": 3,
              "width": "0.4",
              "height": "0.7",
              "display" : {
                "type": "Image",
                "source": "https://i.ibb.co/fxnM9fP/Castle-Outside.jpg",
                "text": "The Ovenland castle used to be a tower of greasy goo wrapped around stone. The satuses spewed forth hot grease. Since Lilly's first visit, the statues now produce clean water."
              }
          },
            {
              "whereTo": "Ally",
              "type": "Print",
              "location": [0, 1.4, -4], //[x, y, z],
              "rotation": [0, 0, 0], //[x, y, z],
              "distance": 1,
              "originalRoom": "Ally",
              "id": 2532330,
              "width": "0.4",
              "height": "0.7",
              "display" : {
                "type": "Image",
                "source": "https://i.ibb.co/4gRrS0S/MUSHROOM-ROOM-PRINTABLE.jpg",
                "text": "This image is available for Download & Coloring on the home page!"
              }
            }
      ]
      },
    },
    "settings": {
      "audio": {
        "audioAnchor": "bottom",
        "soundOnEnter": true,
        "icon_sound_On": "https://i.ibb.co/CsKnz4X/audioOn.png",
        "icon_sound_Off": "https://i.ibb.co/6ywfZzS/audioOff.png"
      },
      "flaggedInteractionsToHide": {
        "Mushroom_Room": ["Mushroom_Room-Picture-3", "Mushroom_Room-Print-4"],
        "Breakfast_Nook": ["Breakfast_Nook-Picture-2", "Breakfast_Nook-Picture-3", "Breakfast_Nook-Picture-4", "Breakfast_Nook-Print-5"]
      }
    }
  }