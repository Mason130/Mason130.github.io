---
layout: post
title:  "AI gomoku(wuziqi)"
date:   2022-03-13 12:21:50 -0400
categories: jekyll update
---

### AI Gomoku 
#### By Mason Yu
```
This is an AI Gomoku player who can compete with human
```

### Introduction of game rule
 [Gomoku rule wiki][wiki]

### Project architecture
```
Project/
       |----__init__.py
       |----StartGame.py   ** Main UI, could be run directly
       |----configure.py   ** UI configuration function
       |----modules/
                   |----__init__.py
                   |----algorithm/
                                 |----__init__.py
                                 |----Agent.py   ** AI algorithm
                                 |----PlayWithAgent.py    ** The UI in which human could                      
                   |----ui_element/                          compete with the AI agent
                                  |----__init__.py
                                  |----Button.py          ** Button class
                                  |----Chessman.py        ** Chessman class
                                  |----Auxiliary.py       ** Some auxiliary functions
```

### Environment & required packages
```
OS: macOS
Python:  
    Version: Python3.5+ (with necessary dependencies installed)
    Packages:  pygame, PyQt5
```

### Start the game
```
1. Configure the required environment mentioned above 
2. Run "python3 StartGame.py"
```

### Game repository
[Github repository][repository]

[repository]: https://github.com/Mason130/AI_GOMOKU.git
[wiki]: https://en.wikipedia.org/wiki/Gomoku
