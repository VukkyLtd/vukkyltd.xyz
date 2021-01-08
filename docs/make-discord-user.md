---
id: vukkybot-make-user
title: Making a Discord bot
sidebar_label: Making a Discord bot
slug: /vukkybot/setup/make-bot
---

## Creating the application
Go to [the Discord Developer Portal](https://discord.com/developers/applications) and click *New Application*.

Enter a name for your bot, and click **Create**.

## Creating a bot user and getting the token

On your application's page, click **Bot** in the sidebar. Then, click **Add Bot**.

You'll see "Token", with a **Click to Reveal Token** link, and a **Copy** button. You can use these to get your token.
:::caution

Your token should **never** be shared with ***anyone***. If you shared your token by accident, you can use the **Regenerate** button to get a new token, rendering your old token useless.

:::

## Making an invite link for your bot
:::note

You can do this step even if your bot isn't running yet.

:::

On your application's page, click **General Information** in the sidebar. Then, copy your **Client ID**.

Go to the following URL, replacing `YOUR_CLIENT_ID_HERE` with the ID you copied:
`https://discord.com/oauth2/authorize?scope=bot&permissions=0&client_id=YOUR_CLIENT_ID_HERE`