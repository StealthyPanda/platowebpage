---
title: Installation
description: All basic stuff for installation.
---

This app requires a few different components that need to be installed:
- Python
- Ollama
- ChromaDB
- FastAPI



## Python (& libraries)

Ensure you have python installed, if you haven't already from [here](https://www.python.org/).

To install plato, open a terminal session and simply run:
```bash
pip install git+https://github.com/StealthyPanda/plato.git
```

This will install the app, along with all the dependencies.



## Ollama

Install ollama for your OS from [here](https://ollama.com/).

Next, open a terminal session and run the following commands to pull models:

```bash
ollama pull llama3.2
ollama pull llama3.1
```


---
At this point, all the components for the app should be installed.
