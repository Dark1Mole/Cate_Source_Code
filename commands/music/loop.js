module.exports = [{
name: "c-loop", 
code: `Created \`/join\` command.
 $createApplicationCommand[$guildID;loop;Pick a music loop status.;true;slash;[{"name" : "status", "description" : "Please pick a loop status.", "type" : 3, "required" : true, "choices" : [{"name" : "Current Song", "value" : "song"},{"name" : "Queue", "value" : "queue"},{"name" : "None", "value" : "none"}]}]]
$onlyForIDs[$botOwnerID;
	{
		"content":"No."
	}
]
`
}, {
name: "loop",
type: 'interaction', 
$if: "v5",
prototype: 'slash', 
code: `

   









$loopMode[$slashOption[status]]

    $interactionReply[<:icons_loop:962254844230500353> Music loop status is **$slashOption[status]** now.]







$onlyif[$queueLength>=1;{"embeds" : "{newEmbed:{title:$getVar[wrong] Error Occured} {description: You have to play something first} {color:RED}}",
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