---
title: The Basics
description: Basics about the features & stuff.
---


Plato runs completely offline, on-device so none of the files leave your device. Thus, you might need a slightly beefy computer to run it at a reasonable speed. (My recommendation is about 6GB of dedicated GPU memory). The models involved are at max ~5GB.


Plato is built around learning by asking questions, and thus getting a better insight into your own understanding.

## Content 

Plato automatically detects and extracts information from the files in the current plato project. By default, files must be __opted in__. Thus, initially none of the files are selected in the content selector on the left sidebar.

<!-- > **Info:** -->
> Use <kbd>Ctrl + ,</kbd> and <kbd>Ctrl + .</kbd> to toggle left and right sidebars.


The selected content is now part of the context that Plato will use to answer your questions. Select some content and ask it a question to get context driven answers!

## Reliability

Plato is designed to be as reliable as possible, when it comes to minimising hallucinations and ensuring correctness. This is done in a few different ways.

### No content? (Sources)

Plato's main goal is to answer based on the information it sees in the content selected. However, it can also derive information from other sources if need be. The priority for the sources it uses are (in decreasing order):
1. The content selected
2. Online sources
3. Its own memory

### Citations & Sources

For each and every response plato provides, you can examine it further to ensure it is what it claims to be. For each response, additional info such as the sources, exact location in the source etc. are attached. This can be viewed in the right side bar.

Responses that do not use context, or any other concrete source are clearly marked as such.

Plato also additionally only gets information from the web when either:
- You explicitly ask it to, or
- The answer requires online / current information, and has taken permission to do so.







