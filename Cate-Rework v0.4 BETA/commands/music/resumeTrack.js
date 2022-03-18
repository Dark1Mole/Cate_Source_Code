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






$onlyif[$voiceID[$authorID]==$voiceID[$clientID];{
"embeds" : "{newEmbed:{title:$getVar[wrong] Error Occured} {description: You have to join the same voice channel as the bot} {color:RED}}",
"ephemeral" : true,
"options": {
"interaction": true
}
}]

$onlyif[$queueLength>=1;{
"embeds" : "{newEmbed:{title:$getVar[wrong] Error Occured} {description: You have to play something first} {field:Tip:\`Use /play\`} {color:RED}}",
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

$onlyPerms[mutemembers;deafenmembers;{
"embeds" : "{newEmbed:{title:$getVar[wrong] Error Occured} {description: You require \`mutemembers,deafenmembers\` perms to perform this task} {color:RED}}",
"ephemeral" : true,
"options": {
"interaction": true
}
}]

`
}]