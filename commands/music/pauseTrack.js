module.exports = [{
name: "c-pause", 
code: `Created \`/pause\` command.
$createApplicationCommand[$guildID;pause;Pauses the current track;true;slash]
$onlyForIDs[$botOwnerID;
	{
		"content":"No."
	}
]
`
},	{
name: "pause",
type: 'interaction', 
prototype: 'slash', 
$if: "v5",
code: `


$pauseTrack
$interactionReply[$getVar[tick] Succesfully paused track;;;;;no]









$onlyif[$voiceId[$clientID]==$voiceID[$authorID];{"embeds" : "{newEmbed:{title:$getVar[wrong] Error Occured} {description: You have to join the same voice channel as the bot} {color:RED}}",
"ephemeral" : true,
"options": { "interaction": true }
}]


$onlyif[$queueLength>=1;{"embeds" : "{newEmbed:{title:$getVar[wrong] Error Occured} {description: The queue must have 1 or more songs} {color:RED}}",
"ephemeral" : true,
"options": { "interaction": true }
}]

$onlyif[$voiceID[$authorID]!=;{"embeds" : "{newEmbed:{title:$getVar[wrong] Error Occured} {description: You have to join a voice channel first} {color:RED}}",
"ephemeral" : true,
"options": { "interaction": true }
}]

$onlyPerms[mutemembers;deafenmembers;{"embeds" : "{newEmbed:{title:$getVar[wrong] Error Occured} {description: You require \`mutemembers,deafenmembers\` perms to perform this task} {color:RED}}",
"ephemeral" : true,
"options": { "interaction": true }
}]


`
}]