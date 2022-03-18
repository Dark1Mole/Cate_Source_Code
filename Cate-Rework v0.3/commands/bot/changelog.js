module.exports = [{
name: "c-change", 
code: `Created \`/changelog\` command.
$createApplicationCommand[global;changelog;Shows updates that were added to the bot;true;slash]
$onlyForIDs[$botOwnerID;
	{
		"content":"No."
	}
]
`
}, {
name: "changelog",
type: 'interaction', 
prototype: 'slash', 
code: `

   
$interactionReply[;{newEmbed:{title:<:icons_update:952574318741688350> New update}
{field:<:icons_github:952573446473285663> [Bot Version](https://github.com/Dark1Mole/Cate_Source_Code):$getVar[botv]}
{description:
Bug fixing <:icons_discordbughunter:952574864005410916>
Commands added \`/changelog,/ping\`
Improved overall design
Queue command change \`/queue page:1\` (option required)
} {timestamp:ms} {thumbnail:$userAvatar[$clientID]} {color:WHITE}};;;;no]








`
}]