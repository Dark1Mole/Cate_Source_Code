module.exports = {
  name: "exec",
  code: `
$exec[$message]

$onlyForIDs[$botOwnerID;
	{
		"content":"No."
	}
]
`
}