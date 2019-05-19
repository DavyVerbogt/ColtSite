var data;

function AddAllUserInfo() {
    httpGetAsync("/commands/about.json", function (raw) {
        data = JSON.parse(raw);

        ProcessData(data);
    });
}

 function ProcessData(_data) {
    for (let index = 0; index < _data.length; index++) {
        AssembleUser(_data[index].id, Senduser)
         function Senduser(u) {
            AddUser(u, _data[index])
        }
        //if (index == _data.length - 1) SortDivs();
    }
}

function AddUser(user, info) {
    users = document.getElementById("users");

    var box = document.createElement('div')
    box.className = "user";
    box.setAttribute("id", info.p);
    users.appendChild(box);

    var nameBox = document.createElement('p');
    nameBox.innerHTML = "<b>" + user.full + "</b>"
    box.appendChild(nameBox)

    var jobBox = document.createElement('p');
    jobBox.innerHTML = "<b>Jobs:</b> " + info.jobs
    box.appendChild(jobBox)

    var detBox = document.createElement('p');
    detBox.innerHTML = "<b>Detais:</b> " + info.details
    box.appendChild(detBox)

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