# Gitlab integration for discord
This is a relatively simple discordie bot for gitlab integration with your bot.

This bot is GPLv3 licensed. See LICENSE.md for details.

## Features
This bot currently posts a message providing information about the following events:

 * Push
 * Issue creation/deletion

## Todo
Support more events! I'll be mostly adding events as people request them, please open an issue with an example webhook JSON if you want me to add an event

## Installtion

First clone the repository, switch into it, and install discordie with npm

```
git clone http://www.github.com/astronautlevel2/discord_gitlab
cd discord_gitlab
npm install discordie
```

Next copy config.json.example to config.json and edit the fields appropriately

Finally go into the webhook setting for the github project and add your IP address and port that the bot will be running on (ex http://IP:PORT)

You will need to forward the port from your router to the computer that's running the bot
