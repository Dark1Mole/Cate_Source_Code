module.exports = [{
name: "c-queue", 
code: `Created \`/queue\` command.
$createApplicationCommand[$guildID;queue;Shows you the queue;true;slash]
$onlyForIDs[$botOwnerID;
	{
		"content":"No."
	}
]
`
},	{
name: "queue",
type: 'interaction', 
prototype: 'slash', 
$if: "v5",
code: `



$interactionReply[;$nonEscape[$if[$replaceText[$interactionData[options.data[0].value];undefined;null]==null;
{newEmbed:{title:Queue Page-1} 
{description:$queue[1;30;
$getVar[reply1][{title}]({url})
$getVar[reply3] <@{user.id}>]
}

{timestamp:ms} {footer:Note only 30 songs are shown}};
{newEmbed:{title:Queue Page-$slashOption[page]} 
{description:$queue[$slashOption[page];30;
$getVar[reply1][{title}]({url})
$getVar[reply3] <@{user.id}>]
}
{timestamp:ms} {footer:Note only 30 songs are shown}}


]]












$onlyif[$voiceID[$authorID]==$voiceID[$clientID];{
"embeds" : "{newEmbed:{title:$getVar[wrong] Error Occured} {description: You have to join the same voice channel as the bot} {color:RED}}",
"ephemeral" : true,
"options": {
"interaction": true
}
}]


$onlyif[$queueLength>=1;{
"embeds" : "{newEmbed:{title:$getVar[wrong] Error Occured} {description: The queue must have 1 or more songs} {color:RED}}",
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



`
}]