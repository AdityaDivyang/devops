const express = require('express'); 
const app = express();      
const router = express.Router();
const path = __dirname + '/views/';
const port = process.env.PORT || 8080;                  

router.use((req, res, next) => {
    console.log('/' + req.method);
    next();
});

router.get('/', (req, res) => {        
    res.sendFile(path + 'index.html');      
});

app.use(express.static(path));
app.use('/', router);

app.listen(port, () => {            
    console.log(`Now listening on port ${port}`); 
});