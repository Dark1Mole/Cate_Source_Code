module.exports = [{
name: "c-vol", 
code: `Created \`/volume\` command.
$createApplicationCommand[$guildID;volume;Chnage the volume of the current track;true;slash;value:Please insert a number between 0-150:true:3]
$onlyForIDs[$botOwnerID;
	{
		"content":"No."
	}
]`
},	{
name: "volume",
type: 'interaction', 
prototype: 'slash', 
$if: 'v4',
code: `
$volume[$slashOption[value]]
$interactionFollowUp[$getVar[tick] Changed the volume to \`$slashOption[value]\`;]







$interactionDefer

$onlyif[$slashOption[value]<=150;{
"content" : "\`⛔\` Please provide a number between 0-150",
"ephemeral" : true,
"options": {
"interaction": true
}
}]

$onlyif[$isNumber[$slashOption[value]]==true;{
"content" : "\`⛔\` Provide a valid number",
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


$onlyif[$voiceID[$authorID]==$voiceID[$clientID];{
"content" : "\`⛔\` You have to join the same voice channel as the bot",
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