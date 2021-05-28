const house = {
    "rooms": {
      "Entry": {
        "background": {
          "source": "https://i.ibb.co/Qdm3FHq/Ambush-Alley-BKG-5.jpg",
          "loop": null,
          "type": "Picture"
        },
        "adjacentRooms": ["MainHall"],
        "interactions": [
            {
                "whereTo": "Ally",
                "type": "Nav",
                "location": {"x": 2.1, "y": 1.4, "z": -2.5},
                "distance": 1,
                "width": "0.4",
                "height": "0.7",
                "originalRoom": "Entry",
                "id": 1
            },
            {
              "whereTo": "Ally",
              "type": "Nav",
              "location": {"x": -6.5, "y": 1.3, "z": 3},
              "rotation": {"x":0, "y": 90, "z": 0},
              "width": "0.7",
              "height": "1",
              "distance": 1,
              "originalRoom": "Entry",
              "id": 1789
            },
            {
                "whereTo": "Entry",
                "type": "Picture",
                "location": {"x": -5.5, "y": 1, "z": -4},
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
            },
            {
                "whereTo": "Entry",
                "type": "Picture",
                "location": {"x": -5.5, "y": 0, "z": -4},
                "distance": 1,
                "originalRoom": "Entry",
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
                "whereTo": "Entry",
                "type": "Print",
                "location": {"x": 0, "y": 1.4, "z": -4},
                "distance": 1,
                "originalRoom": "Entry",
                "id": 4,
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
      "Ally": {
        "background": {
          "source": "Assets/PalletTown.mp4",
          "loop": false,
          "type": "Video"
        },
        "adjacentRooms": ["MainHall"],
        "interactions": [
            {
                "whereTo": "Entry",
                "type": "Nav",
                "location": {"x": 2.1, "y": 1.4, "z": -2.5},
                "distance": 1,
                "width": "0.4",
                "height": "0.7",
                "originalRoom": "Ally",
                "id": 132423
            },
            {
              "whereTo": "Entry",
              "type": "Nav",
              "location": {"x": -6.5, "y": 1.3, "z": 3},
              "rotation": {"x":0, "y": 90, "z": 0},
              "width": "0.7",
              "height": "1",
              "distance": 1,
              "originalRoom": "Ally",
              "id": 235235
            },
            {
                "whereTo": "Ally",
                "type": "Picture",
                "location": {"x": -5.5, "y": 1, "z": -4},
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
                "location": {"x": -5.5, "y": 0, "z": -4},
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
                "location": {"x": 0, "y": 1.4, "z": -4},
                "distance": 1,
                "originalRoom": "Ally",
                "id": 2532323,
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