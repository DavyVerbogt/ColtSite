 let coltID = "195260214491086848"
var colt;

var token = "Bot NTYwODEwODUxMjgwNjE3NDky.D35XeQ.fpWplWkDeEys4cioxAPqIp3gHUk" //this is a dummy bot, no use in abusing it

var url = "https://discordapp.com/api/users/"


window.onload = function Start() {
    colt = new User();

    

    Getuser(coltID).then(function (data) {
        colt.full = `${data.username}#${data.discriminator}`;
        colt.id = data.id;
        colt.avatar = GetAvatarUrl(data.id, data.avatar);
        colt.name = data.username
        colt.discriminator = data.discriminator;
       // AddUser(colt)
    });
    AddAllUserInfo()
}

function AssembleUser(id, callback){

    user = new User();

    Getuser(id).then(function (data) {
        user.full = `${data.username}#${data.discriminator}`;
        user.id = data.id;
        user.avatar = GetAvatarUrl(data.id, data.avatar);
        user.name = data.username
        user.discriminator = data.discriminator;
        callback(user);
    });
}

function Getuser(id) {
    return new Promise(function (resolve) {
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                resolve(JSON.parse(this.responseText));
            }
        });

        xhr.open("GET", url + id);
        xhr.setRequestHeader("Authorization", token);
        xhr.setRequestHeader("Content-Type", "application/json");

        //xhr.send(data);
        xhr.send(null);
    })
}

function GetAvatarUrl(id, avatar, size = "1024") {
    var ext = "png";
    if (avatar !== null && avatar !== null) {
        if (avatar.startsWith("a_")) {
            ext = "gif";
        }
    } else { return 'https://discordapp.com/assets/dd4dbc0016779df1378e7812eabaa04d.png' }
    var AvatarUrl = `https://cdn.discordapp.com/avatars/${id}/${avatar}.${ext}?size=${size}`;
    return AvatarUrl;
}

class User {
    constructor() { }
}