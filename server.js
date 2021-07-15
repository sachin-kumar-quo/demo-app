const express = require('express'); 
const app = express(); 
const PORT = 8000;
const path = require('path'); 
app.use(express.static('build')); 
app.get('/', (req, res) => { 
	res.sendFile('./build/index.html');
});
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
