module.exports = [{
name: "c-force_skip", 
code: `Created \`/skip\` command.
$createApplicationCommand[global;force_skip;Skip the current song;true;slash]
$onlyForIDs[$botOwnerID;
	{
		"content":"No."
	}
]`
},	{
name: "force_skip",
type: 'interaction', 
prototype: 'slash', 
$if: "v5",
code: `


$interactionReply[$getVar[tick] Succesfully skipped the current song;;;;;no]
$skip
$setVar[user;0]
$setServerVar[skip;0]




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