const http = require('http');
const Discordie = require('discordie');
const config = require('./config');
const client = new Discordie();

var channel;

function printMessage(data) {
    if (data.object_kind == "push") {
        console.log("Push type!");
        channel.sendMessage("**" + data.user_name + "** <**" + data.user_email + "**> just pushed a commit to **" + data.project.name +"**.\n**Commit message**: " + data.commits[0].message.trim() + "\n**URL**: " + data.commits[0].url);
    } else if (data.object_kind == "issue" && data.object_attributes.action != "update") {
        console.log("Issue type!");
        channel.sendMessage("**" + data.user.name + "** has " + data.object_attributes.state + " an issue on project " + data.project.name + "\n**Issue title**: " + data.object_attributes.title + "\n**URL**: " + data.object_attributes.url);
    } else {
        console.log("Unknown type");
        console.log("Data: " + JSON.stringify(data));
        console.log("Please open an issue for this on http://github.com/astronautlevel2/discord_gitlab!");
    }
}

var server = http.createServer(function (req, res) {
    var reqString = "";
    req.setEncoding('utf8');
    req.on('data', function(chunk) {
        reqString += chunk;
    })
    req.on('end', function() {
        printMessage(JSON.parse(reqString));
        reqString = "";
        res.end("OK");
    });
});

client.connect({token: config.token });

client.Dispatcher.on("GATEWAY_READY", e => {
    channel = client.Channels.get(config.channel_id);
});

server.listen(config.port);
