module.exports = [{
name: "c-ping", 
code: `Created \`/join\` command.
$createApplicationCommand[$guildID;ping;Shows bot info and ping;true;slash]
$onlyForIDs[$botOwnerID;
	{
		"content":"No."
	}
]
`
}, {
name: "ping",
type: 'interaction', 
prototype: 'slash', 
code: `

   
$interactionReply[;{newEmbed:{author:$serverName[$guildID]:$serverIcon[$guildID]} {field:Latency:\`$pingMs\`}{field:Database Latency:\`$dbPingms\`}  {field:Last Restart:<t:$truncate[$divide[$readyTimeStamp;1000]]:R>}  {thumbanil:$serverIcon[$guildID]} {timestamp:ms} {color:RANDOM}};;;;no]








`
}]