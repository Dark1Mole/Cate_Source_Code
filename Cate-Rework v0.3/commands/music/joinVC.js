module.exports = [{
name: "c-join", 
code: `Created \`/join\` command.
$createApplicationCommand[$guildID;join;The bot joins the voice channel that you are in;true;slash]
$onlyForIDs[$botOwnerID;
	{
		"content":"No."
	}
]
`
},	{
name: "join",
type: 'interaction', 
prototype: 'slash', 
$if: "v5",
code: `



$interactionReply[$getVar[wrong] Command currently in maintenance;;;;;no]










$onlyif[$queueLength==0;{
"content" : "\`⛔\` Bot already joined a voice channel",
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



`
}]