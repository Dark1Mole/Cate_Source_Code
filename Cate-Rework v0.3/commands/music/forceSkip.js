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
"content" : "\`⛔\` You have to join the same voice channel as the bot",
"ephemeral" : true,
"options": {
"interaction": true
}
}]

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