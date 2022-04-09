module.exports = [{
name: "c-play", 
code: `Created \`/play\` command.
$createApplicationCommand[$guildID;play;Play your favorite tune;true;slash;name:Please insert a name or url:true:3]
$onlyForIDs[$botOwnerID;
	{
		"content":"No."
	}
]`
},	{
name: "play",
type: 'interaction', 
prototype: 'slash', 
$if: 'v4',
code: `


$interactionEdit[;{newEmbed:{title:Added track}{field:Song:**$get[song]** to queue.:yes} {field:Duration:$humanizeMs[$songinfo[duration;$sub[$queuelength;1]]]:yes} {field:Artist:$songinfo[author;$sub[$queuelength;1]]:yes}{color:WHITE}  {timestamp:ms} {thumbnail:$songinfo[thumbnail;$sub[$queuelength;1]]}}]
$let[song;$playTrack[youtube;$slashOption[name]]]
$wait[2s]
$interactionEdit[;{newEmbed:{title:<a:loading1:960474474120085504> Loading track} {color:GREEN}}]
$wait[2s]
$interactionFollowUp[;{newEmbed:{title:<:icons_search:962332341349523487> Searching for **$slashOption[name]**} {color:YELLOW}}]



$if[$voiceId[$clientId]==]
$joinVc[$voiceId;no;yes;yes]
$endif



$interactionDefer




$onlyif[$voiceID[$authorID]!=;{"embeds" : "{newEmbed:{title:$getVar[wrong] Error Occured} {description: You have to join a voice channel first} {color:RED}}",
"ephemeral" : true,
"options": { "interaction": true }
}]





$onlyBotPerms[connect;speak{"embeds" : "{newEmbed:{title:$getVar[wrong] Error Occured} {description: It looks like I am missing \`connect,speak\` perms} {field:Guide:Go into **Server Settings** > **Roles** > Search for <@&$findRole[cate]> > **Enable connect perms**} {color:RED}}",
"ephemeral" : true,
"options": { "interaction": true }
}]

`
}]