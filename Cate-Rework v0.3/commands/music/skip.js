module.exports = [{
name: "c-skip", 
code: `Created \`/skip\` command.
$createApplicationCommand[$guildID;skip;Skip the current song;true;slash]
$onlyForIDs[$botOwnerID;
	{
		"content":"No."
	}
]`
},	{
name: "skip",
type: 'interaction', 
prototype: 'slash', 
$if: "v4",
code: `


$if[$getTextSplitLength$textSplit[$usersInChannel[$voiceID;;+];+]<=3]

$interactionReply[$getVar[tick] Succesfully skipped the song;;;;;no]
$skip


$elseif[$getTextSplitLength$textSplit[$usersInChannel[$voiceID;;+];+]>=4]
$if[$getUserVar[user]==0]
$if[$getServerVar[skip]==0]
$interactionReply[;{newEmbed:{title:Skip Request} {field:For:**$songInfo[title]**} {field:Requested by:<@$findUser[$username]>} {field:Users that want to skip:\`1/$sub[$getTextSplitLength$textSplit[$usersInChannel[$voiceID;;+];+];1]\`}};;;;no]
$setServerVar[skip;1]
$setUserVar[user;1]
$endelseif

$elseif[$getServerVar[skip]==1]
$interactionReply[;{newEmbed:{title:Skip Request} {field:For:**$songInfo[title]**} {field:Requested by:<@$findUser[$username]>} {field:Users that want to skip:\`2/$sub[$getTextSplitLength$textSplit[$usersInChannel[$voiceID;;+];+];1]\`}};;;;no]
$setServerVar[skip;2]
$setUserVar[user;1]
$endelseif

$elseif[$getServerVar[skip]==2]
$interactionReply[;{newEmbed:{title:$getVar[tick] Skip Request Succesfull} {field:For:**$songInfo[title]**} {field:Requested by:<@$findUser[$username]>} {field:Users that want to skip:\`3/$sub[$getTextSplitLength$textSplit[$usersInChannel[$voiceID;;+];+];1]\`}};;;;no]
$setServerVar[skip;0]
$forEachMember[1;{};loop;]
$skip

$endelseIf



$endif
$endif



$endif



$onlyIf[$getUserVar[user]==0;{
"content" : "\`⛔\` You already want to skip that song",
"ephemeral" : true,
"options" : {
 "interaction" : true
}
}]

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



`
}]

/*$interactionReply[$getVar[wrong] Command under maintenance;{newEmbed:{description:New system will be like Rythm's} {color:WHITE}}};;;;no]

$if[$getTextSplitLength$textSplit[$usersInChannel[$voiceID;;+];+]==2]

$interactionReply[$getVar[tick] Succesfully skipped the song;;;;;no]
$skip


$elseif[$getTextSplitLength$textSplit[$usersInChannel[$voiceID;;+];+]>=3]
$if[$getUserVar[user]==0]
$if[$getServerVar[skip]==0]
$interactionReply[;{newEmbed:{title:Skip Request} {field:For:**$songInfo[title]**} {field:Requested by:<@$userid[$username]>} {field:Users that want to skip:\`1/$getTextSplitLength$textSplit[$usersInChannel[$voiceID;;+];+]\`}};;;;no]
$setServerVar[skip;1]
$setUserVar[user;1]
$endelseif

$elseif[$getServerVar[skip]==1]
$interactionReply[;{newEmbed:{title:Skip Request} {field:For:**$songInfo[title]**} {field:Requested by:<@$userid[$username]>} {field:Users that want to skip:\`2/$getTextSplitLength$textSplit[$usersInChannel[$voiceID;;+];+]\`}};;;;no]
$setServerVar[skip;2]
$setUserVar[user;1]
$endelseif

$elseif[$getServerVar[skip]==2]
$interactionReply[;{newEmbed:{title:$getVar[tick] Skip Request Succesfull} {field:For:**$songInfo[title]**} {field:Requested by:<@$userid[$username]>} {field:Users that want to skip:\`3/$getTextSplitLength$textSplit[$usersInChannel[$voiceID;;+];+]\`}};;;;no]
$setServerVar[skip;0]
$forEachMember[1;{};loop;]
$skip

$endelseIf


$elseif[$getUserVar[user]==1]
$interactionReply[$getVar[wrong] You already want to skip that song;;;;;no]
$endelseif
$endif
$endif
$endelseif


$endif




*/