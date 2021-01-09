---
id: custom-commands
title: Making custom commands
sidebar_label: Making custom commands
slug: /vukkybot/custom-commands
---

Commands are stored in the `commands` folder.

## Features
VukkyBot comes with features that help you develop your custom commands.

### Embeds
All VukkyBots come preinstalled with some embeds that are ready to be used out of the box.
You may get these by requiring `utilities/embeds` in your command.  
For example:
```javascript
const embeds = require("../utilities/embeds")
```

`utilties/embeds` includes embeds like:
* `errorEmbed(message)`, to display error messages
* `warningEmbed(message)`, to display warning messages
* `infoEmbed(message)`, to display information
* `successEmbed(message)`, to display success messages

## Command exports
`name` and `description` are strings which are required metadata, for the command's name and the command's description in the `help` command respectively.
* There's also `usage`, which shows up in the `help` command and can show you how to use the command.

`execute` is a required function. When a command is used with VukkyBot, that command's `execute` function will be ran. `message` (the message that ran the command) and `args` (the arguments from the message that ran the command) will be passed to the function.

:::warning

If your command doesn't have a `name` and an `execute` function, your command won't work properly. 

:::

`cooldown` is an integer, which is the cooldown for the command in seconds.

### Permissions
`botPermissions` is an array that contains all the Discord permissions the bot needs to run the command.

`userPermissions` is an array that contains all the Discord permissions the user needs to run the command.

### Requirements
`args` is a boolean, which if sets to true indicates that the command requires arguments.

`mysql` is a boolean, which if set to true indicates that the command requires MySQL to be enabled in the VukkyBot settings.

`guildOnly` is a boolean, which if sets to true indicates that the command can only be ran in guilds.