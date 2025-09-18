# Project Title: 
### "Personal Decision Making App - Step 1: UI Setup, Basic Input Handling & Modular Output"

# Description
This app will help me decide what videogame I want to play. This step also will also set up the basic user interface, input capture, and console logging using a modular approach. 

# My Decision Focus
This app is designed to help me decide what videogame I want to play based upon the genre, and which console I should play it on.

# My Decision Logic

### categorizeLength(length)
- When length is missing, null, or not a number, then return null.
- When length is less than 5, then return "short".
- When length is between 5 and 20, then return "medium".
- When length is greater than 20, then return "long".

### filterByGenre(genre)
- When genre is missing, null, or not a string, then return the entire game library.
- When genre is given, then return only the games with a matching genre (case-insensitive).

### filterByGameplayMode(games, gameplayMode)
- When gameplayMode is missing, null, or not a string, then return the provided games unfiltered.
- When gameplayMode is "multiplayer", then return only games with multiplayer set to true.
- When gameplayMode is not "multiplayer", then return only games with multiplayer set to false.

### filterByLength(games, lengthCategory)
- When lengthCategory is missing or null, then return the input games unfiltered.
- When lengthCategory is "short", then return games with length under 5.
- When lengthCategory is "medium", then return games with length between 5 and 20.
- When lengthCategory is "long", then return games with length above 20.
- When lengthCategory is any other value, then return the input games unfiltered.

### filterByConsole(games, consoleName)
- When consoleName is missing or not a string, then return the input games unfiltered.
- When consoleName is provided, then return games where at least one platform matches the normalized console name.

### getRandomGame(games)
- When games is an empty array, then return null.
- When games has items, then randomly select and return one game from the array.

## Examples
    Inputs: Action, Nintendo Switch, Single Player, 120
    Output: Game Recommendation: The Sims 4 Genre: simulation | Mode: Single Player | Length: 40 hours | Platforms: N/A

    Inputs: Simulation, PC, Multiplayer, 60
    Output: Game Recommendation: Dead by Daylight Genre: horror | Mode: Multiplayer | Length: 10 hours | Platforms: N/A

    Inputs: Strategy Multiplayer 
    Outputs: Game Recommendation: Apex Legends Genre: shooter | Mode: Multiplayer | Length: 10 hours | Platforms: N/A

# Input Types Used
<ol>Dropdown/select for Genre</ol>
<ol>Text for Console</ol>
<ol>Checkbox for "Multiplayer" or "Single Player"</ol>
<ol>Number for Game Length</ol>


# Color Palette 
The color palette will be the colors of Majora's Mask from my favorite action-adventure-puzzle game, The Legend of Zelda: Majora's Mask.
### Main Hex Codes
<ol>#402480</ol>
<ol>#F9F5B6</ol>


