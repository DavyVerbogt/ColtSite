var data;

function AddUser(user) {
    users = document.getElementById("users");
    users.innerHTML = "";

    var box = document.createElement('div')
    box.className = "user";
    box.setAttribute("id", user.id);
    users.appendChild(box);

    var nameBox = document.createElement('p');
    nameBox.innerHTML = "<b>" + user.full + "</b>"
    box.appendChild(nameBox)
/*
    var jobBox = document.createElement('p');
    jobBox.innerHTML = "<b>Jobs:</b> " + info.jobs
    box.appendChild(jobBox)

    var detBox = document.createElement('p');
    detBox.innerHTML = "<b>Detais:</b> " + info.details
    box.appendChild(detBox)*/

    var image = document.createElement('img');
    image.src = user.avatar;
    image.width = 100;
    image.height = 100;
    box.appendChild(image)
}

function SortDivs() {
    var cont = document.getElementById('users');
    var divs = cont.querySelectorAll('div');
    var divs2 = [];
    divs2 = Array.from(divs);
    divs2.sort(function (a, b) {return b - a;});
    for (var i = 0; i < divs2.length; i++) {
        cont.appendChild(divs2[i]);
    }
}

function httpGetAsync(url, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", url, true); // true for asynchronous 
    xmlHttp.send(null);
}