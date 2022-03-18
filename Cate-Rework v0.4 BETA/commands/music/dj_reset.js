module.exports = [{
name: "c-dj_reset", 
code: `Created \`/dj_reset\` command.
$createApplicationCommand[$guildID;dj_reset;Resets the DJ role;true;slash]
$onlyForIDs[$botOwnerID;
	{
		"content":"No."
	}
]`
},	{
name: "dj_reset",
type: 'interaction', 
prototype: 'slash', 
$if: 'v5',
code: `
$resetServerVar[djid]
$setServerVar[dj;0]
$interactionFollowUp[;{newEmbed:{title:$getVar[tick] Succes} {description:Removed the DJ role from database <@&$findRole[$getServerVar[djid]]>} {timestamp:ms}}]




$interactionDefer



$onlyPerms[admin;{
"content" : "$getVar[wrong] You require \`administrator\` permission to perform this task",
"ephemeral" : true,
"options": {
"interaction": true
}
}]







`
}]