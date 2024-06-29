function login(){
    var pw = document.getElementbyID("password");
    var hashed = sha256(pw)
    fetch("http://192.168.178.105/login"),
    {
        method: "POST",
        credentials:"same-origin",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({password: hashed})
        .then(function(res){
            console.log(res)
            if (res.status == 200){
                window.location.href="/loggedin.html";
            }
            else{
                alert("Falsches Geheimnis")
            }
        })
        .catch(function(error) {
            console.error('Error:', error);
        }),
    }
}

function urlshort(){
    var url = document.getElementById("linkeingabe")
    var ausgabe = document.getElementById("linkausgabe")
    fetch("http://192.168.178.105/urlshrt"),{
        method: "POST",
        credentials: "same-origin",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({url: url})
        .then(function(res){
            console.log(res)
            if (res.status == 200){
                res.json().then((data) => {
                    ausgabe.innerHTML(data.shorturl)
                })
            }
            else{
                alert("Fehler")
            }
        })
        .catch(function(error) {
            console.error('Error:', error);
        }),
    }
}