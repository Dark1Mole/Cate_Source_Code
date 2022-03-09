module.exports = [{
name: "c-np", 
code: `Created \`/now-playing\` command.
$createApplicationCommand[$guildID;now_playing;Displays info about the current track;true;slash]
$onlyForIDs[$botOwnerID;
	{
		"content":"No."
	}
]`
},	{
name: "now_playing",
type: 'interaction', 
prototype: 'slash', 

code: `
$interactionFollowUp[;{newEmbed:{title:Now playing} {field:Link:[$songInfo[title]]($songInfo[url]):yes} {field:Duration: \`$humanizeMs[$sub[$songInfo[duration];$getCurrentDuration]]/$humanizeMs[$songInfo[duration]]\`:yes} {field:Author:**$songInfo[author]**:yes} 
{thumbnail:$songInfo[thumbnail]} 
{timestamp:ms} {field:Views:$songInfo[views]} {thumbnail:$songInfo[thumbnail]:yes}  {color:WHITE}}]







$interactionDefer


$onlyif[$voiceID[$authorID]==$voiceID[$clientID];{
"content" : "\`⛔\` You have to join the same voice channel as the bot",
"ephemeral" : true,
"options": {
"interaction": true
}
}]

$onlyif[$queueLength>=1;{
"content" : "\`⛔\` The queue must have 1 or more songs",
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