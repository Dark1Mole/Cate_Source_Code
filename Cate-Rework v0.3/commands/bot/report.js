module.exports = [{
name: "c-rep", 
code: `Created \`/rep\` command.
$createApplicationCommand[$guildID;play;Play your favorite tune;true;slash;name:Please insert a name or url:true:3]
$createApplicationCommand[global;report_bug;Report a bot bug to the developers;true;slash;bug:Please type your issue:true:3]
$onlyForIDs[$botOwnerID;
	{
		"content":"No."
	}
]`
},	{
name: "report_bug",
type: 'interaction', 
prototype: 'slash', 
$if: 'v4',
code: `
$interactionReply[;{newEmbed:{title:$getVar[tick] Bug reported} {description: Thanks for reporting your bug developers will look into it and you will receive an DM when it s fixed} {field: Issue:\`$slashOption[bug]\`} {color:GREEN} {timestamp:ms}};;;;yes]

$channelSendMessage[952584324010606632;{newEmbed:{title:<:icons_outage:952574210360885258> New Bug} {field:User_ID:$findUser[$username]} {timestamp:ms} {field:Issue:\`$slashOption[bug]\`} {thumbnail:$userAvatar[$findUser[$username]]} {color:RED}};no]




$cooldown[10m;{"embeds":"{newEmbed:{title:$getVar[wrong] Error Occured} {description:You have to wait \`%time%\`}{color:RED}}","ephemeral":"true","options":{"interaction":true}}]

`
}]

/*$cooldown[10m;
{
"embeds":"{newEmbed:{title:$getVar[wrong] Error Occured}{description:You can send bug reports every 10 minutes}{color:RED}}",
"options":{"interaction":true}
}]*/
