

const house = {
    "rooms": {
      "Entry": {
        "background": {
          "source": "Assets/PalletTown.mp4",
          "loop": true,
          "type": "video"
        },
        "adjacentRooms": ["MainHall", "Cave"],
        "interactions": [
          {
            "whereTo": "Cave",
            "type": "Nav",
            "location": {"x": 0.5, "y": 1.4, "z": 2.5},
            "rotation": {"x":0, "y": 180, "z": 0},
            "width": "0.7",
            "height": "1",
            "distance": 1,
            "originalRoom": "Entry",
            "id": 1789
          },
            {
              "whereTo": "Ally",
              "type": "Nav",
              "location": {"x": -0.5, "y": 1.4, "z": -2.5},
              "rotation": {"x":0, "y": 0, "z": 0},
              "width": "0.7",
              "height": "1",
              "distance": 1,
              "originalRoom": "Entry",
              "id": 1790
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
            }
        ]
      },
      "Ally": {
        "background": {
          "source": "Assets/PokemonCenterAnimated.mp4",
          "loop": true,
          "type": "video"
        },
        "adjacentRooms": ["Entry"],
        "interactions": [
            {
                "whereTo": "Entry",
                "type": "Nav",
                "location": {"x": 5.3, "y": 0.5, "z": -5},
                "rotation": {"x":0, "y": 45, "z": 0},
                "distance": 1,
                "width": "0.4",
                "height": "0.7",
                "originalRoom": "Ally",
                "id": 132423
                // nav leading outside
            },
            {
              "whereTo": "Entry",
              "type": "Nav",
              "location": {"x": -6.2, "y": 40.5, "z": 5.3},
              
              "width": "0.7",
              "height": "1",
              "distance": 1,
              "originalRoom": "Ally",
              "id": 235235
              // nav on pokemachine
              // still not clickable
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
          "source": "Assets/PokemonCave.mp4",
          "loop": true,
          "type": "video"
        },
        "adjacentRooms": ["Entry"],
        "interactions": [
          {
            "whereTo": "Entry",
            "type": "Nav",
            "location": {"x": 40, "y": 0.7, "z": 1},
            "rotation": {"x":1, "y": 0, "z": 1},
            "width": "0.7",
            "height": "1",
            "distance": 1,
            "originalRoom": "Entry",
            "id": 235235
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

  // modals don't go away.
  // not every nav leads somewhere.
  // can't see the first area.
  // nav placement could be better.
  // broken pipe error? 