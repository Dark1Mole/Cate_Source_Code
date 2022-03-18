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
$interactionFollowUp[;{newEmbed:{title:Now playing} {field:Link:[$songInfo[title]]($songInfo[url]):yes} {field:Duration: \`$humanizeMs[$songInfo[duration]]/$humanizeMs[$sub[$songInfo[duration];$getCurrentDuration]]\`:yes} {field:Author:**$songInfo[author]**:yes} 
{thumbnail:$songInfo[thumbnail]} 
{timestamp:ms} {field:Views:$songInfo[views]} {thumbnail:$songInfo[thumbnail]:yes}  {color:WHITE}}]







$interactionDefer


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
"embeds" : "{newEmbed:{title:$getVar[wrong] Error Occured} {description: You have to join a voice channel} {color:RED}}",
"ephemeral" : true,
"options": {
"interaction": true
}
}]







`
}]