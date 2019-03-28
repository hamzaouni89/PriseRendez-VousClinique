
var patients = {
    cin: "",
    nom: "", prenom: "", email: "", date: "", password: "", Pasress: "", sexe: "", mobile: "", rol: "",
    photo: "", group: "", diabete: "", tension: "", etat: ""
};
var patients = JSON.parse(localStorage.getItem("patients")) || [];
localStorage.setItem("patients", JSON.stringify(patients));



var addresspatient = [];
if (document.getElementById("photo_patient") != null) {

    window.addEventListener("load", function () {
        document.getElementById("photo_patient").onchange = function (event) {
            var reader = new FileReader();
            reader.readAsDataURL(event.srcElement.files[0]);

            reader.onload = function () {
                var fileContent = reader.result;
                addresspatient = fileContent;
            }
        }
    });
}


function conxionPatient() {
    var patients = JSON.parse(localStorage.getItem("patients")) || [];
    var verif = false;
    var i = 0;
    var mail = document.getElementById('mail').value;
    console.log(mail);
    var mdp = document.getElementById('password').value;
    console.log(mdp);

    for (i = 0; i < patients.length; i++) {
        if ((mail == patients[i].email) && (mdp == patients[i].password)) {

            verif = true;
            var connectedPas = JSON.parse(localStorage.getItem("connectedPas")) || [];
            connectedPas.push(patients[i]);
            localStorage.setItem("connectedPas", JSON.stringify(connectedPas));

            break;
        }
    }
    if (verif) {
        location.href = 'index-one.html';
        /**
        document.getElementById("coonx").className = "hidden";
        document.getElementById("profil").className = "";
        document.getElementById("deconx").className = "";
        */
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
        password: document.getElementById("password_patient").value,
        adress: document.getElementById("adress").value,
        group: document.getElementById("group_sanguin").value,
        etat: document.getElementById("etat_patient").value,
        diabete: document.getElementById("diabete_patient").value,
        tension: document.getElementById("tension_patient").value,

        sexe: document.getElementById("sexe_patient").value,
        mobile: document.getElementById("mobile_patient").value,

        photo: addresspatient,
        rol: "patient",

    };
    patients.push(patient);

    localStorage.setItem("patients", JSON.stringify(patients));
    location.href = 'all_patients.html';

}
function onloadPatient() {
    var table = '<table class="table table-hover table-checkable order-column full-width" id="example4">';
    table += '<tr>';

    table += '<th>' + "Photo" + '</th>';
    table += '<th>' + "Nom" + '</th>';
    table += '<th>' + "Prenom" + '</th>';
    table += '<th>' + "Date de naissance" + '</th>';
    table += '<th>' + "Sexe" + '</th>';
    table += '<th>' + "Email" + '</th>';
    table += '<th>' + "Numereo Tel" + '</th>';
    table += '<th>' + "Role" + '</th>';
    table += '<th>' + "Adresse" + '</th>';
    table += '<th>' + "Etat civile" + '</th>';
    table += '<th>' + "Groupe sanguin" + '</th>';
    table += '<th>' + "Tension" + '</th>';
    table += '<th>' + "Diabete" + '</th>';
    table += '<th>' + "Action" + '</th>';
    table += '</tr>';
    for (var i = 0; i < patients.length; i++) {

        table += '<tr class="odd grPaseX">';

        table += '<td><img  height=50 width=50 src=' + patients[i].photo + '></td>';
        table += '<td>' + patients[i].nom + '</td>';
        table += '<td>' + patients[i].prenom + '</td>';
        table += '<td>' + patients[i].date + '</td>';
        table += '<td>' + patients[i].sexe + '</td>';
        table += '<td>' + patients[i].email + '</td>';
        table += '<td>' + patients[i].mobile + '</td>';
        table += '<td>' + patients[i].rol + '</td>';
        table += '<td>' + patients[i].adress + '</td>';
        table += '<td>' + patients[i].etat + '</td>';
        table += '<td>' + patients[i].group + '</td>';
        table += '<td>' + patients[i].tension + '</td>';
        table += '<td>' + patients[i].diabete + '</td>';
        table += '<td><button  onclick="editpatient(' + i + ')" class="btn btn-primary btn-xs"><i class="fa fa-pencil"></i></button><button  onclick="deletepatient(' + i + ')" class="btn btn-danger btn-xs"><i class="fa fa-trash-o "></i></button> ';

        table += '</tr>';
    }
    table += '</table>';

    document.getElementById('table').innerHTML = table;
}
function deletepatient(n) {

    var patients = JSON.parse(localStorage.getItem("patients")) || [];
    patients.splice(n, 1);
    localStorage.setItem("patients", JSON.stringify(patients));
    location.href = 'all_patients.html';
}

function editpatient(nbre) {

    var patientByCIN = JSON.parse(localStorage.getItem("patientsByCIN")) || [];
    var numeroIDP = JSON.parse(localStorage.getItem("numeroIDP")) || [];
    patientByCIN.push(patients[nbre]);
    numeroIDP.push(nbre);
    localStorage.setItem("patientsByCIN", JSON.stringify(patientByCIN));
    localStorage.setItem("numeroIDP", JSON.stringify(numeroIDP));
    location.href = 'edit_patient.html';
}
function chargerPatientEdit() {

    var patientByCIN = JSON.parse(localStorage.getItem("patientsByCIN")) || [];

    var cin = document.getElementById("cin_patient");
    cin.setAttribute("value", patientByCIN[0].cin);

    var nom = document.getElementById("nom_patient");
    nom.setAttribute("value", patientByCIN[0].nom);

    var prenom = document.getElementById("prenom_patient");
    prenom.setAttribute("value", patientByCIN[0].prenom);

    var sexe = document.getElementById("sexe_patient");
    sexe.setAttribute("value", patientByCIN[0].sexe);

    var option = document.getElementById("sexe_patient").options;
    for (i = 0; i < option.length; i++) {
        if (patientByCIN[0].sexe == option[i].value) {
            option[i].selected = 'selected';
        }
    }

    var etat = document.getElementById("etat_patient");
    etat.setAttribute("value", patientByCIN[0].etat);

    var optionE = document.getElementById("etat_patient").options;
    for (i = 0; i < optionE.length; i++) {
        if (patientByCIN[0].etat == optionE[i].value) {
            optionE[i].selected = 'selected';
        }
    }

    var group = document.getElementById("etat_patient");
    group.setAttribute("value", patientByCIN[0].group);

    var optionG = document.getElementById("group_sanguin").options;
    for (i = 0; i < optionG.length; i++) {
        if (patientByCIN[0].group == optionG[i].value) {
            optionG[i].selected = 'selected';
        }
    }

    var tension = document.getElementById("tension_patient");
    tension.setAttribute("value", patientByCIN[0].tension);

    var optionT = document.getElementById("tension_patient").options;
    for (i = 0; i < optionT.length; i++) {
        if (patientByCIN[0].tension == optionT[i].value) {
            optionT[i].selected = 'selected';
        }
    }

    var diabete = document.getElementById("diabete_patient");
    diabete.setAttribute("value", patientByCIN[0].diabete);

    var optionD = document.getElementById("diabete_patient").options;
    for (i = 0; i < optionD.length; i++) {
        if (patientByCIN[0].diabete == optionD[i].value) {
            optionD[i].selected = 'selected';
        }
    }

    var email = document.getElementById("email_patient");
    email.setAttribute("value", patientByCIN[0].email);

    document.getElementById("adress").value = patientByCIN[0].adress;



    var mobile = document.getElementById("mobile_patient");
    mobile.setAttribute("value", patientByCIN[0].mobile);

    var password = document.getElementById("password_patient");
    password.setAttribute("value", patientByCIN[0].password);

    var date = document.getElementById("datenaissance_patient");
    date.setAttribute("value", patientByCIN[0].date);



    adress_patient = patientByCIN[0].photo;

}
function modifie_patient() {

    var numeroIDP = JSON.parse(localStorage.getItem("numeroIDP")) || [];


    var patient = {

        cin: document.getElementById("cin_patient").value,
        nom: document.getElementById("nom_patient").value,
        prenom: document.getElementById("prenom_patient").value,
        email: document.getElementById("email_patient").value,
        date: document.getElementById("datenaissance_patient").value,
        password: document.getElementById("password_patient").value,
        adress: document.getElementById("adress").value,
        sexe: document.getElementById("sexe_patient").value,
        mobile: document.getElementById("mobile_patient").value,
        group: document.getElementById("group_sanguin").value,
        etat: document.getElementById("etat_patient").value,
        diabete: document.getElementById("diabete_patient").value,
        tension: document.getElementById("tension_patient").value,
        photo: addresspatient,
        rol: "patient",

    };

    var patients = JSON.parse(localStorage.getItem("patients")) || [];
    patients.splice(numeroIDP[0], 1, patient);
    localStorage.setItem("patients", JSON.stringify(patients));
    localStorage.removeItem("patientsByCIN");
    localStorage.removeItem("numeroIDP");
    location.href = 'all_patients.html';


}

function getpatientByCIN(cin) {
    var_patientByCIN = JSON.parse(localStorage.getItem("patientsByCIN")) || [];
    for (var i = 0; i < patients.length; i++) {
        if (patients[i].cin == cin) {
            patientByCIN.push(patients[i]);
            localStorage.setItem("patientsByCIN", JSON.stringify(patientByCIN));
        }
    }

    return (patientByCIN);
}
