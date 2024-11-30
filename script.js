function login(){
    var pw = document.getElementbyID("password");
    fetch("http://192.168.178.105/api/login"),
    {
        method: "POST",
        credentials:"same-origin",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({password: pw})}
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
    })
}

function urlshort() {
    if (document.getElementById("linkeingabe").value !== "") {
        var url = document.getElementById("linkeingabe").value;
        var ausgabe = document.getElementById("linkausgabe");
        fetch("http://localhost:13000/api/shorten", {
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                link: url
            })
        }).then(function (res) {
            console.log(res);
            if (res.status == 200) {
                res.json().then((data) => {
                    const short = data.short;
                    console.log(short);
                    ausgabe.innerHTML = short;
                });
            }
            else {
                alert(res.status + ": Fehler");
            }
        })
            .catch(function (error) {
                console.error('Error:', error);
            })
    }
};