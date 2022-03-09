module.exports = [{
name: "c-rm", 
code: `Created \`/reset_filters\` command.
$createApplicationCommand[$guildID;remove_filters;Removes the filters;true;slash]
$onlyForIDs[$botOwnerID;
	{
		"content":"No."
	}
]`
},	{
name: "remove_filters",
type: 'interaction', 
prototype: 'slash', 
$if: "v5",
code: `
$let[$resetFilters]
$interactionReply[$getVar[tick] Succesfully removed all filters from the song;;;;;no]







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