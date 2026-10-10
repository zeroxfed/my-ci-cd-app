const express = require("express"); 
const app = express(); 

app.get("/", (req, res) => { 
	res.send("Hello, World! This is my app."); 
}); 

const port = process.env.PORT || 3000; app.listen(port, () => { 
	console.log(`App running on http://localhost:${port}`); 
});
