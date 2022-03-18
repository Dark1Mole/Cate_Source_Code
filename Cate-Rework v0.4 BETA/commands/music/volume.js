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
"embeds" : "{newEmbed:{title:$getVar[wrong] Error Occured} {description: Provide a number between 1-150} {field:Tip:\`Try /volume value:100\`} {color:RED}}",
"ephemeral" : true,
"options": {
"interaction": true
}
}]

$onlyif[$isNumber[$slashOption[value]]==true;{
"embeds" : "{newEmbed:{title:$getVar[wrong] Error Occured} {description: Please provide a valid number}  {field:Tip:\`Try /volume value:100\`} {color:RED}}",
"ephemeral" : true,
"options": {
"interaction": true
}
}]


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