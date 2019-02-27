const app = require('./app');
const port = process.env.PORT || 5000;

app.listen(port,() => {
    console.log("Starting on port: 5000");
    console.log("lets :D");
})