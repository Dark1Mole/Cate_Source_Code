module.exports = [{
name: "c-dj_add", 
code: `Created \`/dj_add\` command.
$createApplicationCommand[$guildID;dj_add;Add a DJ role;true;slash;id:Please insert the role name or id:true:3]
$onlyForIDs[$botOwnerID;
	{
		"content":"No."
	}
]`
},	{
name: "dj_add",
type: 'interaction', 
prototype: 'slash', 
$if: 'v5',
code: `
$interactionFollowUp[;{newEmbed: {title:$getVar[tick] Succes} {description:Added role to database <@&$findRole[$getServerVar[djid]]>}  {footer:Use /dj_reset to revert action} {timestamp:ms}}]
$setServerVar[djid;$slashOption[id]]
$setServerVar[dj;1]



$interactionDefer



$onlyPerms[admin;{
"content" : "\`⛔\` You require \`administrator\` permission to perform this task",
"ephemeral" : true,
"options": {
"interaction": true
}
}]







`
}]