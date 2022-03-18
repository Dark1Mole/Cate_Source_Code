module.exports = [{
name: "c-loop", 
code: `Created \`/join\` command.
$createApplicationCommand[$guildID;join;The bot joins the voice channel that you are in;true;slash]
$onlyForIDs[$botOwnerID;
	{
		"content":"No."
	}
]
`
}, {
name: "loop",
type: 'interaction', 
prototype: 'slash', 
code: `

   
$interactionReply[$nonEscape[$if[$interactionData[options.data[0].value]==cancel_loop;$loopMode[none] $getVar[tick] Canceled loop;$if[$interactionData[options.data[0].value]==loop_queue;$loopMode[queue] $getVar[tick] Looping the queue;$if[$interactionData[options.data[0].value]==loop_song;$loopMode[song] $getVar[tick] Looping **$songInfo[title]**;$loopMode[song]$getVar[tick] Looped Looping **$songInfo[title]**]]]];{newEmbed:{title:Loop Status} {description:\`$loopStatus\`}}]







$onlyif[$queueLength>=1;{
"embeds" : "{newEmbed:{title:$getVar[wrong] Error Occured} {description: You have to play something first} {color:RED}}",
"ephemeral" : true,
"options": {
"interaction": true
}
}]


$onlyif[$voiceID[$authorID]!=;{
"embeds" : "{newEmbed:{title:$getVar[wrong] Error Occured} {description: You have to join a voice channel first} {color:RED}}",
"ephemeral" : true,
"options": {
"interaction": true
}
}]


$onlyPerms[mutemembers;deafenmembers;
{
"embeds" : "{newEmbed:{title:$getVar[wrong] Error Occured} {description: You require \`mutemembers,deafenmembers\` permission to perform this task} {color:RED}}",
"ephemeral" : true,
"options": {
"interaction": true
}
}
]



`
}]