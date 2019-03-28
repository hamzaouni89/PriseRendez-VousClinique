


function conx() {
    var users = JSON.parse(localStorage.getItem("users")) || [];
    console.log("the test is here !");
    var verif = false;
    var i = 0;
    var mail2 = document.getElementById('mail').value;
    console.log(mail2);
    var mdp2 = document.getElementById('password').value;
    console.log(mdp2);
    //var role = document.getElementById("role").value;


    for (i = 0; i < users.length; i++) {
        if ((mail2 == users[i].email) && (mdp2 == users[i].password)) {
            console.log("ok");
            verif = true;
            var connected = JSON.parse(localStorage.getItem(users[i]));
            connected = localStorage.setItem("connected", JSON.stringify(users[i]));

            break;
        }
    }
    if (verif) {
        location.href = 'index-one.html';

        document.getElementById("coonx").className = "hidden";
        document.getElementById("profil").className = "";
        document.getElementById("deconx").className = "";

    }


    else {
        alert("identifiants invalides");
        console.log("not ok");
    }

}

function decont() {
    connected = [];
    localStorage.setItem("connected", JSON.stringify(connected));

    location.href = 'account.html';


}
function verif() {
    verifUsername();
    CartNas();
    validemail();
    validepassword();
    //registerMed () ;

    choix();
    stockage();


}
function verifUsername() {
    var username = document.getElementById("nom").value;
    if (username.indexOf(" ") > 0) {
        console.log("username invalide");
    }
    else {

        console.log("username valide ");
    }

}
function CartNas() {
    var users = JSON.parse(localStorage.getItem("users")) || [];

    var cin = document.getElementById("cin").value;

    for (let i = 0; i < users.length; i++) {
        if ((cin == users[i].CIN) && (cin.length > 8)) {
            alert("vérifier Votre Némuro CIN");
            break;

        }

    }

}
function validemail() {
    var mail = document.getElementById("email");

    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regexEmail.test(mail.value)) {
        console.log("adresse valide ")
    } else {

        alert("adresse invalide")

    }
}

function validepassword() {
    var pass = document.getElementById("mdp").value;
    var min = new RegExp("(.*[a-z])");
    var maj = new RegExp("(?=.*[A-Z])");
    var spc = new RegExp("(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var a = 0, i = 0, j = 0, k = 0;


    if (pass.length >= 8) {

        console.log("Password valide");
        console.log(pass.length);
        if (min.test(pass)) {

            i = i + 1;
            console.log("Password avec Min");

        }
        else {
            i = 0;
        }
        if (maj.test(pass)) {
            j = j + 1;
            console.log("Password avec Maj");

        }
        else {
            j = 0;
        }
        if (spc.test(pass)) {
            k = k + 1;
            console.log("Password avec Car Spc");
        }
        else {
            k = 0
        }
        a = i + j + k;
        console.log("Valeur de a : ", a);
        if (a == 1) {
            console.log("Password faible");
        }
        else if (a == 2) {
            console.log("Password moyenne");
        }
        else if (a == 3) {
            console.log("Password forte");
        }
        else {
            console.log("Password incorrect");
        }



    }
    else {
        console.log("Password Invalide");
        console.log(pass.length);

    }
}

var roleRadioButton = "";
var specialitéChoix = "";

function afficherPatient() {

    document.getElementById("champ").innerHTML = "";




}

roleRadioButton = "Patient";
specialitéChoix = "Rien";

function afficherMedecin() {
    var Html = `<label for="exampleInputspe" classe="label">spécielité</label>
    <select name="sep" id="myspec" class="form-control" >
        <option class="form-control" value=""></option>

        <option class="form-control" value ="medecin_general"id="Med">Médecien générale</option>
        <option class="form-control" value ="dentist">Dentist</option>
    </select>`;
    document.getElementById("champ").setAttribute("class", "rad");

    document.getElementById("champ").innerHTML = Html;

    roleRadioButton = "Medecin";




}


function choix() {

    var choiix = document.getElementsByName('choix');


    if (choiix[0].checked) {

        document.getElementById("register").disabled = false;
    }

    else {
        //console.log("value = "+ document.getElementById("myspec").value) ;
        //console.log("choix  = "+ choiix[1].checked) ;

        if ((document.getElementById("myspec").value == "") && (choiix[1].checked)) {

            alert("erreur");





        }
        else {

            console.log("VAAA  = " + document.getElementById("myspec").value);


            specialitéChoix = document.getElementById("myspec").value;

        }
    }









}

//var users = JSON.parse(localStorage.getItem("users"))
//var i = users.length.idUSer


function stockage() {

    var user = {
        //idUSer: i++,
        CIN: document.getElementById("cin").value,
        username: document.getElementById("nom").value,
        Télé: document.getElementById("tlf").value,
        dateNaissance: document.getElementById("DateNais").value,
        password: document.getElementById("mdp").value,
        email: document.getElementById("email").value,
        adresse: document.getElementById("adresse").value,
        message: document.getElementById("message").value,
        role: roleRadioButton,
        specialité: specialitéChoix,


    };



    var users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    users = localStorage.setItem("users", JSON.stringify(users));
    location.href = "index-one.html";
}