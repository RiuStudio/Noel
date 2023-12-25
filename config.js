module.exports = {
  helpCmdPerPage: 5, //- Number of commands per page of help command
  lyricsMaxResults: 5, //- Number of results for lyrics command (Do not touch this value if you don't know what you are doing)
  adminId: process.env.owner, //- Replace UserId with the Discord ID of the admin of the bot
  token: process.env.token || "", //- Bot's Token
  clientId: process.env.clientId || "", //- ID of the bot
  clientSecret: process.env.clientSecret || "", //- Client Secret of the bot
  port: 8080, //- Port of the API and Dashboard
  scopes: ["identify", "guilds", "applications.commands"], //- Discord OAuth2 Scopes
  inviteScopes: ["bot", "applications.commands"], // Invite link scopes
  serverDeafen: true, //- If you want bot to stay deafened
  defaultVolume: 100, //- Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  supportServer: "https://discord.com/invite/CtDXQeX4kX", //- Support Server Link
  Issues: "https://discord.com/invite/CtDXQeX4kX", //- Bug Report Link
  permissions: 277083450689, //- Bot Inviting Permissions
  disconnectTime: 30000, //- How long should the bot wait before disconnecting from the voice channel (in miliseconds). Set to 1 for instant disconnect.
  twentyFourSeven: false, //- When set to true, the bot will never disconnect from the voice channel
  autoQueue: false, //- When set to true, related songs will automatically be added to the queue
  autoPause: true, //- When set to true, music will automatically be paused if everyone leaves the voice channel
  autoLeave: false, //- When set to true, the bot will automatically leave when no one is in the voice channel (can be combined with 24/7 to always be in voice channel until everyone leaves; if 24/7 is on disconnectTime will add a disconnect delay after everyone leaves.)
  debug: false, //- Debug mode
  cookieSecret: "CodingWithSudhan is epic", //- Cookie Secret
  website: "http://localhost:8080", //- without the / at the end
  // You need a lavalink server for this bot to work!!!!
  // Lavalink server; public lavalink -> https://lavalink-list.darrennathanael.com/; create one yourself -> https://darrennathanael.com/post/how-to-lavalink
  nodes: [
    {
      identifier: "PixelMine Node 2 | Poland", //- Used for indentifier in stats commands.
      host: "2-pl-lavalink.pixelmine.games", //- The host name or IP of the lavalink server.
      port: 25722, // The port that lavalink is listening to. This must be a number!
      password: "pixelmine.games", //- The password of the lavalink server.
      retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
      retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
      secure: false, //- Can be either true or false. Only use true if ssl is enabled!
    },
  ],
  embedColor: "#aae5f7", //- Color of the embeds, hex supported
  presence: {
    // PresenceData object | https://discord.js.org/#/docs/main/stable/typedef/PresenceData
    status: "online", //- You can have online, idle, dnd and invisible (Note: invisible makes people think the bot is offline)
    activities: [
      {
        name: "Sora Live 🔴", //- Status Text
        type: "STREAMING", //- PLAYING, WATCHING, LISTENING, STREAMING
        url: "https://m.twitch.tv/nocopyrightsounds"
      },
    ],
  },
  iconURL: process.env.icon, //- This icon will be in every embed's author field
};