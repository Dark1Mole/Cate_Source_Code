module.exports = [{
  name: "eval",
  code: `
$eval[$message;yes;yes;yes;yes]

$onlyForIDs[$botOwnerID;
	{
		"content":"No."
	}
]
`
}, {
  name: "djs",
  code:
  `$djsEval[$message;yes;yes;yes;yes]

$onlyForIDs[$botOwnerID;
	{
		"content":"No."
	}
]
`
}]