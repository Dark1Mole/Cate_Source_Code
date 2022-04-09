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

   
$interactionReply[;{newEmbed:{title:<:icons_update:952574318741688350> New update $getVar[botv]}

{description:
Bug fixing <:icons_discordbughunter:952574864005410916>
Commands added \`/changelog,/ping\`
Improved overall design
Queue command change \`/queue page:1\` (option is optional)

}  {field:Errors are changed:Preview is down there <:icons_downvote:954115459920298054>} {image:https://cdn.discordapp.com/attachments/946128853905080331/954115633740644362/unknown.png}  {timestamp:ms} {thumbnail:$userAvatar[$clientID]} {color:WHITE}};;;;no]








`
}]