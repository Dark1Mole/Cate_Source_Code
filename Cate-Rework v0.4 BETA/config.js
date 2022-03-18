module.exports = {
	Bot: {
		token: process.env.TOKEN,
		prefix: "c.",
		intents: "all", 
		
		database: {
        type: "dbdjs.mongo",
        db: require('dbdjs.mongo'),
        path: "./database/",
        tables: ["main"]  
		} 
  }
} 

