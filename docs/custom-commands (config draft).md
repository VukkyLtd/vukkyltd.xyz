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

### Config
To access the configuration of the vukkybot in your command you must make the `execute` export of the command async. Here's an example:
```javascript
async execute(message, args) {
},
```
You must also require `utilities/config`
Like this:
```js
const config = require("../utilities/config.js");
```

#### Get

To get a value from the config you should call config.get like this:
```javascript
await config.get("misc.language") //On default vukkybot configuration this should return "en"
```

Here is an example of using the config in a command:
```javascript
const config = require("../utilities/config"); // Require the config

module.exports = {
	name: "cfg",
	async execute(message, args) {  // Notice how execute is async
        let cfg = await config.get(args[0]) // Get the users first argument from config
        message.channel.send(cfg);  // Send that to the chat 
	},
};
```

This gets the config for what the user said, so if the user said `v!cfg counting.channelName` this would make the bot say in chat what that is, default being `counting`

:::warning

This demonstration is a very dangerous and bad way of using the config. For example this will break booleans. Never give users direct access to config!

Use the prebuit settings command instead!

:::

#### Set

To change a config value you can call `config.set(configOption, newValue)` as demonstrated here:
```javascript
const config = require("../utilities/config"); // Require the config

module.exports = {
	name: "cfg",
	async execute(message, args) {
		config.set(args[0], args[1]); //Users first argument is the config option and second argument is new value
		message.channel.send(`I set ${args[0]} to ${args[1]}!`); // Tell the user what they changed and what it was set to
	},
};
```
This sets a user defined option to a value. So if the user says `v.settings counting.channelName counting` it sets `counting.channelName` to `counting`
:::warning

This demonstration is a very dangerous and bad way of using the config. For example this will break booleans, and if an option doesnt exist it tried editing it anyways and makes a new one!! Never give users direct access to config!

Use the prebuit settings command instead!

::: 

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