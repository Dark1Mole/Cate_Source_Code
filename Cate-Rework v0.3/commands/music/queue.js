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
$if: "v4",
code: `


$interactionFollowUp[;{newEmbed:{title:Queue Page-1} 
{description:$queue[$slashOption[page];30;
$getVar[reply1][{title}]({url})
$getVar[reply3] <@{user.id}>]
}
{timestamp:ms} {footer:Note only 50 songs are shown}}]
$interactionDefer



$onlyif[$slashOption[page]<=$if[$queueLength<=30]
1
$elseif[$queueLength<=60]
2
$endelseif
$elseif[$queueLength<=90]
3
$endelseif
$endif
;{
"content" : "\`⛔\` The queue does not have that many songs please specify a valid page",
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

$onlyif[$isNumber[$slashOption[page]]==true;{
"content" : "\`⛔\` Provide a valid number",
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



`
}]