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

   
$interactionReply[$nonEscape[$if[$interactionData[options.data[0].value]==cancel_loop;$loopMode[none] $getVar[tick] Canceled loop;$if[$interactionData[options.data[0].value]==loop_queue;$loopMode[queue] $getVar[tick] Looping the queue;$if[$interactionData[options.data[0].value]==loop_song;$loopMode[song] $getVar[tick] Looping **$songInfo[title]**;$loopMode[song]$getVar[tick] Looped Looping **$songInfo[title]**]]]]]







$onlyif[$queueLength>=1;{
"content" : "\`⛔\` You have to **play** something first",
"ephemeral" : true,
"options": {
"interaction": true
}
}]


$onlyif[$voiceID[$authorID]!=;{
"content" : "\`⛔\` You have to join a voice channel first",
"ephemeral" : true,
"options": {
"interaction": true
}
}]


$onlyPerms[mutemembers;deafenmembers;{
"content" : "\`⛔\` You require \`mutemembers,deafenmembers\` permission to perform this task",
"ephemeral" : true,
"options": {
"interaction": true
}
}]



`
}]