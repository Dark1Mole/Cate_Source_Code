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
"embeds" : "{newEmbed:{title:$getVar[wrong] Error Occured} {description: Bot already in a voice channel} {field:Tip:\`Use /disconnect\`} {color:RED}}",
"ephemeral" : true,
"options": {
"interaction": true
}
}]

$onlyif[$voiceID[$authorID]!=;{
"embeds" : "{newEmbed:{title:$getVar[wrong] Error Occured} {description: You have to hoin a voice channel first} {color:RED}}",
"ephemeral" : true,
"options": {
"interaction": true
}
}]



`
}]