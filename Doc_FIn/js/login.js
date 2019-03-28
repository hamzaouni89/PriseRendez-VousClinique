var addresssecretaire = [];
if (document.getElementById("photo_secretaire") != null) {

    window.addEventListener("load", function () {
        document.getElementById("photo_secretaire").onchange = function (event) {
            var reader = new FileReader();
            reader.readAsDataURL(event.srcElement.files[0]);

            reader.onload = function () {
                var fileContent = reader.result;
                addresssecretaire = fileContent;
            }
        }
    });
}
function ajouterSecretaire() {

    var secretaires = JSON.parse(localStorage.getItem("secretaires")) || [];

    var secretaire = {
        cin: document.getElementById("cin_secretaire").value,
        nom: document.getElementById("nom_secretaire").value,
        prenom: document.getElementById("prenom_secretaire").value,
        email: document.getElementById("email_secretaire").value,
        date: document.getElementById("datenaissance_secretaire").value,
        password: document.getElementById("password_secretaireS").value,
        adress: document.getElementById("adressS").value,

        sexe: document.getElementById("sexe_secretaire").value,
        mobile: document.getElementById("mobile_secretaire").value,

        photo: addresssecretaire,
        rol: "secretaire",

    };
    secretaires.push(secretaire);

    localStorage.setItem("secretaires", JSON.stringify(secretaires));
    location.href = 'account.html';

}


function conxionSecretaire() {
    var secretaires = JSON.parse(localStorage.getItem("secretaires")) || [];
    var verif = false;
    var i = 0;
    var mail = document.getElementById('mail_secretaire').value;
    console.log(mail);
    var mdp = document.getElementById('password_secretaire').value;
    console.log(mdp);

    for (i = 0; i < secretaires.length; i++) {
        if ((mail == secretaires[i].email) && (mdp == secretaires[i].password)) {

            verif = true;
            var connected = [];
            connected.push(secretaires[i]);
            localStorage.setItem("connected", JSON.stringify(connected));

            break;
        }
    }
    if (verif) {
        location.href = 'ProfilSecretaire.html';

    }


    else {
        alert("identifiants invalides");

    }

}
var addressmedecin = [];
if (document.getElementById("photo_medecin") != null) {

    window.addEventListener("load", function () {
        document.getElementById("photo_medecin").onchange = function (event) {
            var reader = new FileReader();
            reader.readAsDataURL(event.srcElement.files[0]);

            reader.onload = function () {
                var fileContent = reader.result;
                addressmedecin = fileContent;
            }
        }
    });
}
function ajouterMedecin() {

    var medecins = JSON.parse(localStorage.getItem("medecins")) || [];

    var medecin = {
        cin: document.getElementById("cin_medecin").value,
        nom: document.getElementById("nom_medecin").value,
        prenom: document.getElementById("prenom_medecin").value,
        email: document.getElementById("email_medecin").value,
        date: document.getElementById("datenaissance_medecin").value,
        password: document.getElementById("password1_medecin").value,
        adress: document.getElementById("adressM").value,

        sexe: document.getElementById("sexe_medecin").value,
        mobile: document.getElementById("mobile_medecin").value,
        spcialite: document.getElementById("spcialite_medecin").value,
        photo: addressmedecin,
        rol: "medecin",

    };
    medecins.push(medecin);

    localStorage.setItem("medecins", JSON.stringify(medecins));
    location.href = 'account.html';

}

function conxionMedecin() {
    var medecins = JSON.parse(localStorage.getItem("medecins")) || [];
    var verif1 = false;
    var i = 0;
    var mail1 = document.getElementById('mail_medecin').value;

    var mdp1 = document.getElementById('password_medecin').value;


    for (i = 0; i < medecins.length; i++) {
        if ((mail1 == medecins[i].email) && (mdp1 == medecins[i].password)) {

            verif1 = true;
            var connected = [];
            connected.push(medecins[i]);
            localStorage.setItem("connected", JSON.stringify(connected));

            break;
        }
    }
    if (verif1) {
        location.href = 'profilDoc.html';

    }


    else {
        alert("identifiants invalides");

    }

}


function conxionAdmin() {
    var admins = JSON.parse(localStorage.getItem("admins")) || [];
    var verif2 = false;
    var i = 0;
    var mail2 = document.getElementById('mail_admin').value;
    console.log(mail2);
    var mdp2 = document.getElementById('password_admin').value;
    console.log(mdp2);

    for (i = 0; i < admins.length; i++) {
        if ((mail2 == admins[i].email) && (mdp2 == admins[i].password)) {

            verif2 = true;
            var connected = [];
            connected.push(admins[i]);
            localStorage.setItem("connected", JSON.stringify(connected));

            break;
        }
    }
    if (verif2) {
        location.href = '../admin/light/all_doctors.html';

    }


    else {
        alert("identifiants invalides");

    }

}

var patients = JSON.parse(localStorage.getItem("patients")) || [];
localStorage.setItem("patients", JSON.stringify(patients));

var adresspatient = [];
if (document.getElementById("photo_patient") != null) {

    window.addEventListener("load", function () {
        document.getElementById("photo_patient").onchange = function (event) {
            var reader = new FileReader();
            reader.readAsDataURL(event.srcElement.files[0]);

            reader.onload = function () {
                var fileContent = reader.result;
                adresspatient = fileContent;
            }
        }
    });

}
function conxionPatient() {
    var patients = JSON.parse(localStorage.getItem("patients")) || [];
    var verif3 = false;

    var mail3 = document.getElementById('mail_patient').value;

    var mdp3 = document.getElementById('password_patient').value;


    for (i = 0; i < patients.length; i++) {
        console.log(patients[i].email, patients[i].password);
        if ((mail3 == patients[i].email) && (mdp3 == patients[i].password)) {

            verif3 = true;
            var connected = [];
            connected.push(patients[i]);
            localStorage.setItem("connected", JSON.stringify(connected));

            break;
        }
    }
    if (verif3) {

        location.href = 'user_profil.html';


    }


    else {
        alert("identifiants invalides");

    }

}
function ajouterPatient() {

    var patients = JSON.parse(localStorage.getItem("patients")) || [];

    var patient = {
        cin: document.getElementById("cin_patient").value,
        nom: document.getElementById("nom_patient").value,
        prenom: document.getElementById("prenom_patient").value,
        email: document.getElementById("email_patient").value,
        date: document.getElementById("datenaissance_patient").value,
        password: document.getElementById("password1_patient").value,
        adress: document.getElementById("adress").value,
        group: document.getElementById("group_sanguin").value,
        etat: document.getElementById("etat_patient").value,
        diabete: document.getElementById("diabete_patient").value,
        tension: document.getElementById("tension_patient").value,

        sexe: document.getElementById("sexe_patient").value,
        mobile: document.getElementById("mobile_patient").value,

        photo: adresspatient,
        rol: "patient",

    };
    patients.push(patient);

    localStorage.setItem("patients", JSON.stringify(patients));
    location.href = 'account.html';

}