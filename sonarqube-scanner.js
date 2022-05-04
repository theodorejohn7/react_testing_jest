const scanner = require("sonarqube-scanner");
scanner(
{
serverUrl: "http://localhost:9000",
token : "86d0eba7324431779a3bd8dbb228ef5794c87439",
login: "admin",
password: "admin",
options: {

"sonar.sources": "./src",
},
},
() => process.exit()
); 

 