//Setup

/*This is for custom database, all you have to just create a cluster on mongoDB (Atlas) and then paste your cluster link to your secret as the key "CLUSTER", value is your url.
*/
const mongoose = require('mongoose')
const mongo = require('dbdjs.mongo').default
mongoose.connect(process.env.CLUSTER, {
 useNewUrlParser: true,
 useUnifiedTopology: true,
 useFindAndModify: false,
 keepAlive: true
})

mongo.createModel('main') 

//This is keep your bot alive 24/7 after connected to an uptimer service. Explained a little bit on server.js.
const keepAlive = require('./server.js');

const aoijs = require('aoi.js'); //We're authorized "aoijs" as our bot in here, you can type anything you want. 
const config = require('./config.js'); //This will be our configuration file. I didn't want your main file be messy. 
const bot = new aoijs.Bot(config.Bot);
const fs = require('fs');

const voice = new aoijs.Voice(bot, {
  soundcloud: {
    clientId: "process.env.CLOUD",
  },//I recommend you to use your own sc token
  cache: {
    cacheType: "Memory",//Disk
    enabled: true,
  },
  youtube: {
    fetchLikes: "true",
  }
  
});

voice.onTrackStart()

voice.trackStartCommand({
  channel: "$channelID",
  code: `$title[1;Now Playing]
$addField[1;Duration;**$humanizeMs[$songInfo[duration]]**]
$addField[1;Artist;**$songInfo[author]**]
$addField[1;Song;**[$songInfo[title]]($songInfo[url])**]
$thumbnail[1;$songInfo[thumbnail]]
$addTimeStamp[1]
$color[1;WHITE]
$forEachMember[1;{};loop;]
$wait[6s]
`
});

voice.onQueueEnd()
voice.queueEndCommand({
  channel: "$channelID",
  code: `$title[1;Queue Ended]
$description [1;<t:$truncate[$divide[$dateStamp;1000]]:f>]
$addField[1;Use;\`/play to add another song\`]
$color[1;WHITE]
$forEachMember[1;{};loop;]`
});

voice.onAudioError()

voice.audioErrorCommand({
  channel: "$channelID",
  code: `$title[1;$getVar[wrong] Error occured]
$description [1;Please disconenct the bot mannualy and use \`/reset_player\`]

$addTimeStamp[1]
$color[1;WHITE]`
});

 
bot.awaitedCommand({
  name: "loop",
  code: `$setUserVar[user;0]`

  });


  bot.awaitedCommand({
  name: "loopTrueSong",
  code: `$loopMode[song]`

  });

  bot.awaitedCommand({
  name: "loopTrueQueue",
  code: `$loopMode[queue]`

  });

  bot.awaitedCommand({
  name: "loopFalse",
  code: `$loopMode[none]`

  });

require('./handler/status')(bot) //This is for bot status file. 
require('./handler/variables')(bot) //This is for bot variables file. 
require('./handler/callbacks')(bot) //This is for bot callbacks file. 


//Loader would be better to used, since I don't recommend you code all your slash commands on your main file. If one command gives error, it will just kill your client. Your commands should be added on "commands" folder. 
const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd, "./commands/")


//This is for making your console look colorful :)
loader.setColors({
  walking: ["blink", "dim", "fgWhite"],
  failedWalking: {
    name: ["bright", "fgYellow", "underline"],
 
    text: ["gray", "fgRed"]
  },
  typeError: {
    command: ["bright", "fgYellow"],
    type: ["fgYellow"],
    text: ["bright", "fgRed"]
  },
  failLoad: {
    command: ["bright", "fgMagenta"],
    type: ["fgRed"],
    text: ["bright", "fgRed"],
  },
  loaded: {
    command: ["bright", "fgRed"],
    type: ["bright", "fgWhite"],
    text: ["bright", "fgBlue"]
  },
 
})



//Events, are most important stuffs for us. it's used as "type" on most of codes, but I think separating it would be better so here you go. 
const files = fs.readdirSync('./events').filter(file => file.endsWith('js'))
files.forEach( x => {
	require(`./events/${x}`)(bot)
});

//Don't ever delete this.
keepAlive()