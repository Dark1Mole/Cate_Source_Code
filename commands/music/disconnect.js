module.exports = [{
name: "c-disconnect", 
code: `Created \`/disconnect\` command.
$createApplicationCommand[$guildID;disconnect;The bot disconnectes from the voice channel that you are in;true;slash]
$onlyForIDs[$botOwnerID;
	{
		"content":"No."
	}
]
`
},	{
name: "disconnect",
type: 'interaction', 
prototype: 'slash', 
$if: "v5",
code: `

$leaveVC
$interactionReply[$getVar[tick] Succesfully disconnected from <#$voiceID>;;;;;no]







$onlyif[$voiceId[$clientID]==$voiceID[$authorID];{"embeds" : "{newEmbed:{title:$getVar[wrong] Error Occured} {description: You have to join the same voice channel as the bot} {color:RED}}",
"ephemeral" : true,
"options": { "interaction": true }
}]


$onlyif[$voiceID[$clientID]!=;{"embeds" : "{newEmbed:{title:$getVar[wrong] Error Occured} {description: Bot is not connected to a VC} {color:RED}}",
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
}
]

`
}]