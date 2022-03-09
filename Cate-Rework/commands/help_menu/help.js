module.exports = [{
name: "c-help", 
code: `Created \`/help\` command.
$createApplicationCommand[$guildID;help;Provides a list of commands;true;slash]
$onlyForIDs[$botOwnerID;
	{
		"content":"No."
	}
]
`
},	{
name: "help",
type: 'interaction', 
prototype: 'slash', 
$if: "v5",
code: `


$interactionReply[;{newEmbed:{title:Welcome to Cate} {author:Cate:$userAvatar[$clientID]}  {description:Cate is a multipurpose bot that uses slash commands more commands will be added soon} {footer:Public Test Build v0.2} {timestamp:ms} {field:Categories:
Music

Moderation (no commands)}};{actionRow:{selectMenu:help:Select an option:1:1:false:{selectMenuOptions:Home:home:Bot description:no}{selectMenuOptions:Music:music:Music commands:no}{selectMenuOptions:Moderation:mod:Moderation Commands:no:}}};;;no]

`
},{

name: 'help',  
  type: 'interaction', 
prototype: 'selectMenu', 
$if: "v5",
code: `

$interactionUpdate[;{newEmbed:{title:Help Menu - Music} {author:Cate:$userAvatar[$clientID]} 
{description:
**[play](https://discord.gg)**
 $getVar[reply3] Plays your favorite songs
**[skip](https://discord.gg)**
 $getVar[reply3] Skips the current track
**[queue](https://discord.gg)**
 $getVar[reply3] Shows you a list of queued songs
**[join](https://discord.gg)**
 $getVar[reply3] Joins author's voice channel
**[disconnect](https://discord.gg)**
 $getVar[reply3] Disconnects from author's voice channel 
**[stop](https://discord.gg)**
 $getVar[reply3] Stops player
**[playPrevious](https://discord.gg)**
 $getVar[reply3] Plays previous track
**[now_playing](https://discord.gg)**
 $getVar[reply3] Displays info about the current track
**[loop](https://discord.gg)**
 $getVar[reply3] Loops track queue or stops the loop
**[pause](https://discord.gg)**
 $getVar[reply3] Pauses the current track
**[resume](https://discord.gg)**
 $getVar[reply3] Resumes the current track
**[reset_player](https://discord.gg)**
 $getVar[reply3] Resets the player
**[shuffle_queue](https://discord.gg)**
 $getVar[reply3] Shuffles the queue
**[volume](https://discord.gg)**
 $getVar[reply3] Changes the volume of the current song
**[speedup](https://discord.gg)**
 $getVar[reply3] Speeds up the song
**[remove_filters](https://discord.gg)**
 $getVar[reply3] Removes all filters
} {footer:Public Test Build v0.1}};{actionRow:{selectMenu:help:Select an option:1:1:false:{selectMenuOptions:Home:home:Bot description:no}{selectMenuOptions:Music:music:Music commands:yes}{selectMenuOptions:Moderation:mod:Moderation Commands:no:}}};]

$onlyIf[$interactionData[values[0]]==music;]
`
  
},
{

name: 'help',  
  type: 'interaction', 
prototype: 'selectMenu', 
$if: "v5",
code: `



$interactionUpdate[;{newEmbed:{title:Welcome to Cate}  {author:Cate:$userAvatar[$clientID]}  {description:Cate is a multipurpose bot that uses slash commands more commands will be added soon} {footer:Public Test Build v0.2} {timestamp:ms} {field:Categories:
Music

Moderation (no commands)}};{actionRow:{selectMenu:help:Select an option:1:1:false:{selectMenuOptions:Home:home:Bot description:yes}{selectMenuOptions:Music:music:Music commands:no}{selectMenuOptions:Moderation:mod:Moderation Commands:no:}}};]

$onlyIf[$interactionData[values[0]]==home;]
`
  
},
                  {

name: 'help',  
  type: 'interaction', 
prototype: 'selectMenu', 
$if: "v5",
code: `

$interactionUpdate[;{newEmbed:{title:Help Menu - Moderation} {author:Cate:$userAvatar[$clientID]}  {description:This category is currently under development} {footer:Public Test Build v0.2} {timestamp:ms}};{actionRow:{selectMenu:help:Select an option:1:1:false:{selectMenuOptions:Home:home:Bot description:no}{selectMenuOptions:Music:music:Music commands:no}{selectMenuOptions:Moderation:mod:Moderation Commands:yes:}}};]

$onlyIf[$interactionData[values[0]]==mod;]
`
  
}
]