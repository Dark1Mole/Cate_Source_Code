module.exports = [{
name: "c-sp", 
code: `Created \`/speedup\` command.
$createApplicationCommand[$guildID;speedup;Speeds up the song;true;slash]
$onlyForIDs[$botOwnerID;
	{
		"content":"No."
	}
]`
},	{
name: "speedup",
type: 'interaction', 
prototype: 'slash', 
$if: "v5",
code: `
$let[$addFilter[{"atempo" : "1.5"}]]

$interactionReply[$getVar[tick] Succesfully speed up the song to revert use \`/remove_filters\`]






$onlyif[$voiceID[$authorID]==$voiceID[$clientID];{
"embeds" : "{newEmbed:{title:$getVar[wrong] Error Occured} {description: You have to join the same voice channel as the bot} {color:RED}}",
"ephemeral" : true,
"options": {
"interaction": true
}
}]

$onlyif[$queueLength>=1;{"embeds" : "{newEmbed:{title:$getVar[wrong] Error Occured} {description: You have to play something first} {field:Tip:\`Use /play\`} {color:RED}}",
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