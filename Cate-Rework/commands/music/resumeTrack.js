module.exports = [{
name: "c-res", 
code: `Created \`/resume\` command.
$createApplicationCommand[$guildID;resume;Resumes the current track;true;slash]
$onlyForIDs[$botOwnerID;
	{
		"content":"No."
	}
]
`
},	{
name: "resume",
type: 'interaction', 
prototype: 'slash', 
$if: "v5",
code: `


$resumeTrack
$interactionReply[$getVar[tick] Succesfully resumed track;;;;;no]






$onlyif[$voiceId[$clientID]==$voiceID[$authorID];{
"content" : "\`⛔\` You have to join the same voice channel as the bot",
"ephemeral" : true,
"options": {
"interaction": true
}
}]


$onlyif[$queueLength>=1;{
"content" : "\`⛔\` Queue must have 1 or more songs",
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