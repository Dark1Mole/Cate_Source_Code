module.exports = [{
name: "c-play", 
code: `Created \`/play\` command.
$createApplicationCommand[$guildID;play;Play your favorite tune;true;slash;name:Please insert a name or url:true:3]
$onlyForIDs[$botOwnerID;
	{
		"content":"No."
	}
]`
},	{
name: "play",
type: 'interaction', 
prototype: 'slash', 
$if: 'v4',
code: `
$interactionFollowUp[;{newEmbed:{title:Added track}{field:Song:**$get[song]** to queue.:yes} {field:Duration:$humanizeMs[$songinfo[duration;$sub[$queuelength;1]]]:yes} {field:Artist:$songinfo[author;$sub[$queuelength;1]]:yes}{color:WHITE}  {timestamp:ms} {thumbnail:$songinfo[thumbnail;$sub[$queuelength;1]]}}]
$let[song;$playTrack[youtube;$slashOption[name]]]



$if[$voiceId[$clientId]==]
$joinVC

$endif



$interactionDefer




$onlyif[$voiceID[$authorID]!=;{
"content" : "\`⛔\` You have to join a voice channel first",
"ephemeral" : true,
"options": {
"interaction": true
}
}]







`
}]