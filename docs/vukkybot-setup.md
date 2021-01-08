---
id: vukkybot-setup
title: Setup
sidebar_label: Setup
slug: /vukkybot/setup/setup
---

## Selfhosting
:::note

To host VukkyBot, you'll need [node.js](https://nodejs.org). VukkyBot requires node.js **version 12** or above.

:::

### Downloading and installing
Download and extract the [latest VukkyBot source code](https://github.com/VukkyLtd/VukkyBot/releases/latest).

In a terminal window inside your extracted VukkyBot, run `npm install` to install the required dependencies.

### Making a Discord bot token
*You may skip this part if you already have a Discord bot token.*

Please refer to the [Discord bot token guide](make-bot).

### Configuration
Once the installation has completed, run `npm run setup` to launch the interactive VukkyBot Setup tool.
:::note

The VukkyBot Setup tool does not make any modifications to your VukkyBot configuration before all setup questions are answered. Because of this, if you make a mistake, it's usually safe to exit the VukkyBot Setup tool.

:::

### Usage
To start your VukkyBot, use `npm start`.

To stop your VukkyBot, use `npm stop`.

To restart your VukkyBot, use `npm restart`.