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


$interactionReply[;{newEmbed:{title:Welcome to Cate} {author:Cate:$userAvatar[$clientID]}  {description:
<:icons_wumpus:952575822726828062> **About**

> Cate is a multipurpose bot
> It includes <:icons_slashcmd:952573909767696384> slash commands 
> Free to use no additional payments 
> Your data is secured in our <:icons_folder:952577445037486080> database
> Emojis from [Icons](https://discord.gg/kJ35v53gkV) <:Icons1:952591622271561828> 

<:icons_colorserververified:952576314412523520> **Trusted Owner**

> **$userTag[679972389739692058]**

<:work:905125567265923092> **How do I see the commands?**

> To see any commands please select one of the options in the menu bellow

<:icons_outage:952574210360885258> **Bugs and bot outage**

> When the bot is offline I am probably fixing bugs (outages will be anounced)
> To report a bug just use \`/bug_report\` and describe the bug

 Thanks for using the bot! 🤗
}
{field:Features:
<:icons_music:952573998900838460> Music 

> Our bot provides the best music quality out there

<:icons_discordmod:952574750180397156> Moderation

> <:icons_timeout:952575782272761856> Moderation features are in development phase
More Soon
} {thumbnail:$userAvatar[$clientID]} {color:WHITE}
{footer:Public Test Build $getVar[botv]} {timestamp:ms} {field:Links:
Here are some usefull links
<:icons_github:952573446473285663> [Github](https://github.com/Dark1Mole/Cate_Source_Code)
> Find the bot source code here
<:icons_twitter:952574623453691944> [Twitter](https://twitter.com/DarkMole8)
> Get updates related to the bot
<:icons_code:860123643563474955> [Invite Cate](https://discord.com/api/oauth2/authorize?client_id=934561823477346325&permissions=1644972474359&scope=bot%20applications.commands)
> Invite the bot to your server
} 

};{actionRow:
{selectMenu:help:Select an option:1:1:false:{selectMenuOptions:Home:home:See info about the bot and it's features:no:<:icons_generalinfo:952575218021433374>}{selectMenuOptions:Music:music:Play your favorite tunes using our system:no:<:icons_music:952573998900838460>}{selectMenuOptions:Moderation:mod:Keep your server safe from danger:no:<:icons_discordmod:952574750180397156>} {selectMenuOptions:General:general:General use commands:no:<:icons_wumpus:952575822726828062>}}};;;no]

`
},{

name: 'help',  
type: 'interaction', 
prototype: 'selectMenu', 
$if: "v5",
code: `

$interactionUpdate[;{newEmbed:{title:<:icons_music:952573998900838460> Help Menu - Music} {author:Cate:$userAvatar[$clientID]} 
{description:
**[play](https://discord.gg)**
 $getVar[reply3] Plays your favorite songs
**[skip](https://discord.gg)** $getVar[beta]
 $getVar[reply3] Skips the current track
**[queue](https://discord.gg)**
 $getVar[reply3] Shows you a list of queued songs
**[join](https://discord.gg)** $getVar[beta]
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
} {footer:Public Test Build $getVar[botv]} {color:WHITE} {thumbnail:$userAvatar[$clientID]}};{actionRow:{button::1:back:true:<:icons_dleave:953554272891576360>}{button::1:next:false:<:icons_djoin:953554205170343956>}}{actionRow:{selectMenu:help:Select an option:1:1:false:{selectMenuOptions:Home:home:See info about the bot and it's features:no:<:icons_generalinfo:952575218021433374>}{selectMenuOptions:Music:music:Play your favorite tunes using our system:no:<:icons_music:952573998900838460>}{selectMenuOptions:Moderation:mod:Keep your server safe from danger:no:<:icons_discordmod:952574750180397156>} {selectMenuOptions:General:general:General use commands:no:<:icons_wumpus:952575822726828062>}}};]


$onlyIf[$interactionData[values[0]]==music;]


`
  
},{

name: 'back',  
  type: 'interaction', 
prototype: 'button', 
$if: "v5",
code: `

$interactionUpdate[;{newEmbed:{title:<:icons_music:952573998900838460> Page 1/2 - Music} {author:Cate:$userAvatar[$clientID]} 
{description:
**[play](https://discord.gg)**
 $getVar[reply3] Plays your favorite songs
**[skip](https://discord.gg)** $getVar[beta]
 $getVar[reply3] Skips the current track
**[queue](https://discord.gg)** $getVar[beta]
 $getVar[reply3] Shows you a list of queued songs 
**[join](https://discord.gg)** $getVar[beta]
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
} {footer:Public Test Build $getVar[botv]} {color:WHITE} {thumbnail:$userAvatar[$clientID]}};{actionRow:{button::1:back:true:<:icons_dleave:953554272891576360>}{button::1:next:false:<:icons_djoin:953554205170343956>}} {actionRow:{selectMenu:help:Select an option:1:1:false:{selectMenuOptions:Home:home:See info about the bot and it's features:no:<:icons_generalinfo:952575218021433374>}{selectMenuOptions:Music:music:Play your favorite tunes using our system:no:<:icons_music:952573998900838460>}{selectMenuOptions:Moderation:mod:Keep your server safe from danger:no:<:icons_discordmod:952574750180397156>} {selectMenuOptions:General:general:General use commands:no:<:icons_wumpus:952575822726828062>}}};]


`
  
},{

name: 'next',  
  type: 'interaction', 
prototype: 'button', 
$if: "v5",
code: `

$interactionUpdate[;{newEmbed:{title:<:icons_music:952573998900838460> Page 2/2 - Music} {author:Cate:$userAvatar[$clientID]} 
{description:
**[resume](https://discord.gg)**
 $getVar[reply3] Resumes the current track
**[reset_player](https://discord.gg)**
 $getVar[reply3] Resets the player
**[shuffle_queue](https://discord.gg)**
 $getVar[reply3] Shuffles the queue
**[volume](https://discord.gg)** 
 $getVar[reply3] Changes the volume of the current song
**[speedup](https://discord.gg)** $getVar[beta]
 $getVar[reply3] Speeds up the song
**[remove_filters](https://discord.gg)** 
 $getVar[reply3] Removes all filters  
**[force_skip](https://discord.gg)**
 $getVar[reply3] Force skips the song 
} {footer:Public Test Build $getVar[botv]} {color:WHITE} {thumbnail:$userAvatar[$clientID]}};{actionRow:{button::1:back:false:<:icons_dleave:953554272891576360>}{button::1:next:true:<:icons_djoin:953554205170343956>}} {actionRow:{selectMenu:help:Select an option:1:1:false:{selectMenuOptions:Home:home:See info about the bot and it's features:no:<:icons_generalinfo:952575218021433374>}{selectMenuOptions:Music:music:Play your favorite tunes using our system:no:<:icons_music:952573998900838460>}{selectMenuOptions:Moderation:mod:Keep your server safe from danger:no:<:icons_discordmod:952574750180397156>} {selectMenuOptions:General:general:General use commands:no:<:icons_wumpus:952575822726828062>}}};]


`
  
},{

name: 'help',  
  type: 'interaction', 
prototype: 'selectMenu', 
$if: "v5",
code: `



$interactionUpdate[;{newEmbed:{title:<:icons_discordmod:952574750180397156> Help Menu - Moderation}  {author:Cate:$userAvatar[$clientID]}  {description:> <:icons_timeout:952575782272761856> Moderation features are in development phase
More Soon} {footer:Public Test Build $getVar[botv]} {color:WHITE} {thumbnail:$userAvatar[$clientID]} {timestamp:ms} };{actionRow:{selectMenu:help:Select an option:1:1:false:{selectMenuOptions:Home:home:See info about the bot and it's features:no:<:icons_generalinfo:952575218021433374>}{selectMenuOptions:Music:music:Play your favorite tunes using our system:no:<:icons_music:952573998900838460>}{selectMenuOptions:Moderation:mod:Keep your server safe from danger:no:<:icons_discordmod:952574750180397156>} {selectMenuOptions:General:general:General use commands:no:<:icons_wumpus:952575822726828062>}}};]


$onlyIf[$interactionData[values[0]]==mod;]



`
  
},
                  {

name: 'help',  
  type: 'interaction', 
prototype: 'selectMenu', 
$if: "v5",
code: `

$interactionUpdate[;{newEmbed:{title:Welcome to Cate} {author:Cate:$userAvatar[$clientID]}  {description:
<:icons_wumpus:952575822726828062> **About**

> Cate is a multipurpose bot
> It includes <:icons_slashcmd:952573909767696384> slash commands 
> Free to use no additional payments 
> Your data is secured in our <:icons_folder:952577445037486080> database

<:icons_colorserververified:952576314412523520> **Trusted Owner**

> **$userTag[679972389739692058]**

<:work:905125567265923092> **How do I see the commands?**

> To see any commands please select one of the options in the menu bellow

<:icons_outage:952574210360885258> **Bugs and bot outage**

> When the bot is offline I am probably fixing bugs (outages will be anounced)
> To report a bug just use \`/bug_report\` and describe the bug

 Thanks for using the bot! 🤗
}
{field:Features:
<:icons_music:952573998900838460> Music 

> Our bot provides the best music quality out there

<:icons_discordmod:952574750180397156> Moderation

> <:icons_timeout:952575782272761856> Moderation features are in development phase
More Soon
} {thumbnail:$userAvatar[$clientID]} {color:WHITE}
{footer:Public Test Build $getVar[botv]} {timestamp:ms} {field:Links:
Here are some usefull links
<:icons_github:952573446473285663> [Github](https://github.com/Dark1Mole/Cate_Source_Code)
> Find the bot source code here
<:icons_twitter:952574623453691944> [Twitter](https://twitter.com/DarkMole8)
> Get updates related to the bot
<:icons_code:860123643563474955> [Invite Cate](https://discord.com/api/oauth2/authorize?client_id=934561823477346325&permissions=1644972474359&scope=bot%20applications.commands)
> Invite the bot to your server
} 

};{actionRow:{selectMenu:help:Select an option:1:1:false:{selectMenuOptions:Home:home:See info about the bot and it's features:no:<:icons_generalinfo:952575218021433374>}{selectMenuOptions:Music:music:Play your favorite tunes using our system:no:<:icons_music:952573998900838460>}{selectMenuOptions:Moderation:mod:Keep your server safe from danger:no:<:icons_discordmod:952574750180397156>} {selectMenuOptions:General:general:General use commands:no:<:icons_wumpus:952575822726828062>}}};]


$onlyIf[$interactionData[values[0]]==home;]


`
  
},{

name: 'help',  
  type: 'interaction', 
prototype: 'selectMenu', 
$if: "v5",
code: `

$interactionUpdate[;{newEmbed:{title:<:icons_music:952573998900838460> Help Menu - Music} {author:Cate:$userAvatar[$clientID]} 
{description:
**[report_bug](https://discord.gg)** $getVar[new]
 $getVar[reply3] Report a bug to the devs
**[ping](https://discord.gg)** $getVar[new]
 $getVar[reply3] Shows bot ping
**[help](https://discord.gg)** 
 $getVar[reply3] Displays all the commands
**[changelog](https://discord.gg)** $getVar[new]
 $getVar[reply3] Shows bot updates
 
 
} {footer:Public Test Build $getVar[botv]} {color:WHITE} {thumbnail:$userAvatar[$clientID]}};{actionRow:{selectMenu:help:Select an option:1:1:false:{selectMenuOptions:Home:home:See info about the bot and it's features:no:<:icons_generalinfo:952575218021433374>}{selectMenuOptions:Music:music:Play your favorite tunes using our system:no:<:icons_music:952573998900838460>}{selectMenuOptions:Moderation:mod:Keep your server safe from danger:no:<:icons_discordmod:952574750180397156>} {selectMenuOptions:General:general:General use commands:no:<:icons_wumpus:952575822726828062>}}};]


$onlyIf[$interactionData[values[0]]==general;]
`
  
}
]