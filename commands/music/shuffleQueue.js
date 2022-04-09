module.exports = [{
name: "c-sf", 
code: `Created \`/shuffle_queue\` command.
$createApplicationCommand[$guildID;shuffle_queue;Shuffles the queue;true;slash]
$onlyForIDs[$botOwnerID;
	{
		"content":"No."
	}
]
`
},	{
name: "shuffle_queue",
type: 'interaction', 
prototype: 'slash', 
$if: "v5",
code: `


$shuffleQueue
$interactionReply[<:Icons_shuffle:962255054935564308> Succesfully shuffled the queue;;;;;no]










$onlyif[$voiceID[$authorID]==$voiceID[$clientID];{"embeds" : "{newEmbed:{title:$getVar[wrong] Error Occured} {description: You have to join the same voice channel as the bot} {color:RED}}",
"ephemeral" : true,
"options": { "interaction": true }
}]

$onlyIf[$queueLength>=3;{"embeds" : "{newEmbed:{title:$getVar[wrong] Error Occured} {description: The queue must have 3 or more songs} {color:RED}}",
"ephemeral" : true,
"options": { "interaction": true }
}]

$onlyif[$voiceID[$authorID]!=;{"embeds" : "{newEmbed:{title:$getVar[wrong] Error Occured} {description: You have to join a voice channel first} {color:RED}}",
"ephemeral" : true,
"options": { "interaction": true }}
}]

$onlyPerms[mutemembers;deafenmembers;{"embeds" : "{newEmbed:{title:$getVar[wrong] Error Occured} {description: You require \`mutemembers,deafenmembers\` perms to perform this task} {color:RED}}",
"ephemeral" : true,
"options": { "interaction": true }
}]

`
}]