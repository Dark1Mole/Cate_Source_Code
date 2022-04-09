module.exports = [{
name: "c-prev", 
code: `Created \`/skip\` command.
$createApplicationCommand[$guildID;playPrevious;Plays the previous track;true;slash]
$onlyForIDs[$botOwnerID;
	{
		"content":"No."
	}
]`
},	{
name: "play_previous",
type: 'interaction', 
prototype: 'slash', 
$if: "v5",
code: `

$interactionReply[$getVar[tick] Now playing $songInfo[title];;;;;no]
$playPrevious



$onlyif[$voiceID[$authorID]==$voiceID[$clientID];{"embeds" : "{newEmbed:{title:$getVar[wrong] Error Occured} {description: You have to join the same voice channel as the bot} {color:RED}}",
"ephemeral" : true,
"options": { "interaction": true }
}]

$onlyif[$queueLength>=2;{"embeds" : "{newEmbed:{title:$getVar[wrong] Error Occured} {description: The queue must have 2 or more songs} {color:RED}}",
"ephemeral" : true,
"options": { "interaction": true }
}]

$onlyif[$voiceID[$authorID]!=;{"embeds" : "{newEmbed:{title:$getVar[wrong] Error Occured} {description: You have to join a voice channel first} {color:RED}}",
"ephemeral" : true,
"options": { "interaction": true }
}]

$onlyPerms[mutemembers;deafenmembers;{"embeds" : "{newEmbed:{title:$getVar[wrong] Error Occured} {description: You require \`mutemembers,deafenmembers\` permission to perform this task} {color:RED}}",
"ephemeral" : true,
"options": { "interaction": true }
]


`
}]


/*{
"embeds" : "{newEmbed:{title:$getVar[wrong] Error Occured} {description: } {color:RED}}",
"ephemeral" : true,
"options": {
"interaction": true
}
}*/