
// document.getElementById("info").addEventListener("click", displayDate);
function information() {

    //MonProfil();
    document.getElementById("AjoutRen").setAttribute("class", "hidden");
    document.getElementById("ListRenz").setAttribute("class", "hidden");
    document.getElementById("info").setAttribute("class", "");
    document.getElementById("ajout").setAttribute("class", "hidden");
    document.getElementById("table").setAttribute("class", "hidden");
    document.getElementById("listRenCours").setAttribute("class", "hidden");

}
function ajoute() {
    document.getElementById("AjoutRen").setAttribute("class", "hidden");
    document.getElementById("info").setAttribute("class", "hidden");
    document.getElementById("ajout").setAttribute("class", "");
    document.getElementById("table").setAttribute("class", "hidden");
    document.getElementById("listRenCours").setAttribute("class", "hidden");
    document.getElementById("ListRenz").setAttribute("class", "hidden");

}
function liste() {
    ListePatients()
    document.getElementById("AjoutRen").setAttribute("class", "hidden");
    document.getElementById("info").setAttribute("class", "hidden");
    document.getElementById("ajout").setAttribute("class", "hidden");
    document.getElementById("table").setAttribute("class", "");
    document.getElementById("listRenCours").setAttribute("class", "hidden");
    document.getElementById("ListRenz").setAttribute("class", "hidden");

}
function validation() {
    ListeRVEnCours();

    document.getElementById("AjoutRen").setAttribute("class", "hidden");
    document.getElementById("info").setAttribute("class", "hidden");
    document.getElementById("ajout").setAttribute("class", "hidden");
    document.getElementById("table").setAttribute("class", "hidden");
    document.getElementById("listRenCours").setAttribute("class", "");
    document.getElementById("ListRenz").setAttribute("class", "hidden");
    document.getElementById("listRenCours").setAttribute("class", "ListePast");


}

function ajoutRenz() {
    document.getElementById("AjoutRen").setAttribute("class", "");
    document.getElementById("info").setAttribute("class", "hidden");
    document.getElementById("ajout").setAttribute("class", "hidden");
    document.getElementById("table").setAttribute("class", "hidden");
    document.getElementById("listRenCours").setAttribute("class", "hidden");
    document.getElementById("ListRenz").setAttribute("class", "hidden");

}
function ListeRenz() {
    document.getElementById("AjoutRen").setAttribute("class", "hidden");
    document.getElementById("info").setAttribute("class", "hidden");
    document.getElementById("ajout").setAttribute("class", "hidden");
    document.getElementById("table").setAttribute("class", "hidden");
    document.getElementById("listRenCours").setAttribute("class", "hidden");
    document.getElementById("ListRenz").setAttribute("class", "");
    ListeRV();



}
function loadsec() {

    var connected = JSON.parse(localStorage.getItem("connected"));

    if (connected.length != 0) {
        document.getElementById("coonx").setAttribute("class", "hidden");
        document.getElementById("profil").setAttribute("class", "");
        document.getElementById("deconx").setAttribute("class", "");
        console.log("aaaaa");


    }
}
var connected = JSON.parse(localStorage.getItem("connected"));
table = '<table>'


for (var i = 0; i < connected.length; i++) {

    table += '<tr> <td ><center><img style="width: 250px;  height: 200px;" src="' + connected[i].photo + ' " class="doctor-pic" alt=""> </center><br/></td> </tr>';
    table += '<tr> <td>NOM  :  </td><td>' + connected[i].nom + '</td> </tr>';

    table += '<tr> <td>PRENOM  :  </td><td>' + connected[i].prenom + '</td> </tr>';

    table += '<tr> <td>DATE DE NAISSANCE : </td><td>' + connected[i].date + '</td> </tr>';
    table += '<tr> <td>SEXE :  </td><td>' + connected[i].sexe + '</td> </tr>';

    table += '<tr> <td>Email :  </td><td>' + connected[i].email + '</td> </tr>';
    table += '<tr> <td>NUMERO TEL :  </td><td>' + connected[i].mobile + '</td> </tr>';
    table += '<tr> <td>MOT DE PASSE :  </td><td>' + connected[i].password + '</td> </tr>';
    table += '<tr> <td>ADRESSE :  </td><td>' + connected[i].adress + '</td> </tr>';
    table += '<tr> <td>  </td><td><button type="button" class="btn btn-default" onclick="' + '">Modifier</button></td> </tr>';
}
table += '</table>';
document.getElementById("info").innerHTML = table;
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

        photo: photo_patient,
        rol: "patient",

    };
    patients.push(patient);

    localStorage.setItem("patients", JSON.stringify(patients));
    location.href = 'ProfilSecretaire.html';

}


function ListePatients() {
    patients = JSON.parse(localStorage.getItem("patients"));

    //var users = JSON.parse(localStorage.getItem("users"));

    var table = '<table border ="2">'
    table += '<tr>';

    table += '<th>' + "Photo" + '</th>';
    table += '<th>' + "Nom" + '</th>';
    table += '<th>' + "Prenom" + '</th>';
    table += '<th>' + "Date de naissance" + '</th>';
    table += '<th>' + "Sexe" + '</th>';
    table += '<th>' + "Email" + '</th>';
    table += '<th>' + "Numereo Tel" + '</th>';
    table += '<th>' + "Adresse" + '</th>';
    table += '<th>' + "Etat civile" + '</th>';
    table += '<th>' + "Groupe sanguin" + '</th>';
    table += '<th>' + "Tension" + '</th>';
    table += '<th>' + "Diabete" + '</th>';
    table += '<th>' + "Action" + '</th>';
    table += '</tr>';

    for (var i = 0; i < patients.length; i++) {

        table += '<tr>';

        table += '<td><img  height=50 width=50 src=' + patients[i].photo + '></td>';
        table += '<td>' + patients[i].nom + '</td>';
        table += '<td>' + patients[i].prenom + '</td>';
        table += '<td>' + patients[i].date + '</td>';
        table += '<td>' + patients[i].sexe + '</td>';
        table += '<td>' + patients[i].email + '</td>';
        table += '<td>' + patients[i].mobile + '</td>';
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
    location.href = 'ProfilSecretaire.html';
}
function editpatient(nbre) {
    var patientByCIN = JSON.parse(localStorage.getItem("patientsByCIN")) || [];
    var numeroIDP = JSON.parse(localStorage.getItem("numeroIDP")) || [];
    patientByCIN.push(patients[nbre]);
    numeroIDP.push(nbre);
    localStorage.setItem("patientsByCIN", JSON.stringify(patientByCIN));
    localStorage.setItem("numeroIDP", JSON.stringify(numeroIDP));

    document.getElementById("modif_patient").setAttribute("class", "");

    document.getElementById("table").setAttribute("class", "hidden");
    chargerPatientEdit();


}





function chargerPatientEdit() {
    var patientByCIN = JSON.parse(localStorage.getItem("patientsByCIN"));


    var cin = document.getElementById("cin_patientA");
    cin.setAttribute("value", patientByCIN[0].cin);
    console.log("we are here ");
    var nom = document.getElementById("nom_patientA");
    nom.setAttribute("value", patientByCIN[0].nom);

    var prenom = document.getElementById("prenom_patientA");
    prenom.setAttribute("value", patientByCIN[0].prenom);

    var sexe = document.getElementById("sexe_patientA");
    sexe.setAttribute("value", patientByCIN[0].sexe);

    var option = document.getElementById("sexe_patientA").options;
    for (i = 0; i < option.length; i++) {
        if (patientByCIN[0].sexe == option[i].value) {
            option[i].selected = 'selected';
        }
    }

    var etat = document.getElementById("etat_patientA");
    etat.setAttribute("value", patientByCIN[0].etat);

    var optionE = document.getElementById("etat_patientA").options;
    for (i = 0; i < optionE.length; i++) {
        if (patientByCIN[0].etat == optionE[i].value) {
            optionE[i].selected = 'selected';
        }
    }

    var group = document.getElementById("etat_patientA");
    group.setAttribute("value", patientByCIN[0].group);

    var optionG = document.getElementById("group_sanguinA").options;
    for (i = 0; i < optionG.length; i++) {
        if (patientByCIN[0].group == optionG[i].value) {
            optionG[i].selected = 'selected';
        }
    }

    var tension = document.getElementById("tension_patientA");
    tension.setAttribute("value", patientByCIN[0].tension);

    var optionT = document.getElementById("tension_patientA").options;
    for (i = 0; i < optionT.length; i++) {
        if (patientByCIN[0].tension == optionT[i].value) {
            optionT[i].selected = 'selected';
        }
    }

    var diabete = document.getElementById("diabete_patientA");
    diabete.setAttribute("value", patientByCIN[0].diabete);

    var optionD = document.getElementById("diabete_patientA").options;
    for (i = 0; i < optionD.length; i++) {
        if (patientByCIN[0].diabete == optionD[i].value) {
            optionD[i].selected = 'selected';
        }
    }

    var email = document.getElementById("email_patientA");
    email.setAttribute("value", patientByCIN[0].email);

    document.getElementById("adressA").value = patientByCIN[0].adress;



    var mobile = document.getElementById("mobile_patientA");
    mobile.setAttribute("value", patientByCIN[0].mobile);

    var password = document.getElementById("password1_patientA");
    password.setAttribute("value", patientByCIN[0].password);

    var date = document.getElementById("datenaissance_patientA");
    date.setAttribute("value", patientByCIN[0].date);


    adress_patient = patientByCIN[0].photo;


}

var patients = JSON.parse(localStorage.getItem("patients")) || [];
localStorage.setItem("patients", JSON.stringify(patients));

function modifie_patient() {

    var numeroIDP = JSON.parse(localStorage.getItem("numeroIDP")) || [];


    var patient = {

        cin: document.getElementById("cin_patientA").value,
        nom: document.getElementById("nom_patientA").value,
        prenom: document.getElementById("prenom_patientA").value,
        email: document.getElementById("email_patientA").value,
        date: document.getElementById("datenaissance_patientA").value,
        password: document.getElementById("password1_patientA").value,
        Pasress: document.getElementById("adressA").value,
        sexe: document.getElementById("sexe_patientA").value,
        mobile: document.getElementById("mobile_patientA").value,
        group: document.getElementById("group_sanguinA").value,
        etat: document.getElementById("etat_patientA").value,
        diabete: document.getElementById("diabete_patientA").value,
        tension: document.getElementById("tension_patientA").value,
        photo: adresspatient,
        rol: "patientA",

    };

    var patients = JSON.parse(localStorage.getItem("patients")) || [];
    patients.splice(numeroIDP[0], 1, patient);
    localStorage.setItem("patients", JSON.stringify(patients));
    localStorage.removeItem("patientsByCIN");
    localStorage.removeItem("numeroIDP");
    location.href = 'ProfilSecretaire.html';


}


/****   Vaidation de RV          ***** * */
function ListeRVEnCours() {
    var ListRenz_vous = JSON.parse(localStorage.getItem("ListRenz_vous"));

    var ListRenz = '<table border ="2">';
    ListRenz += '<tr>';
    ListRenz += '<th>' + "ID" + '</th>';
    ListRenz += '<th>' + "Name" + '</th>';
    ListRenz += '<th>' + "CIN" + '</th>';
    ListRenz += '<th>' + "Numéro" + '</th>';
    ListRenz += '<th>' + "Date de naissance" + '</th>';
    ListRenz += '<th>' + "Sexe" + '</th>';
    ListRenz += '<th>' + "adresse email" + '</th>';
    ListRenz += '<th>' + "Date" + '</th>';
    ListRenz += '<th>' + "heure" + '</th>';
    ListRenz += '<th>' + "Message" + '</th>';
    ListRenz += '<th>' + "statut" + '</th>';

    ListRenz += '<th colspan="2">' + "Action" + '</th>';

    ListRenz += '</tr>';
    for (var i = 0; i < ListRenz_vous.length; i++) {
        if (ListRenz_vous[i].statut == "En Cours") {
            ListRenz += '<tr>';
            ListRenz += '<td>' + i + '</td>';
            ListRenz += '<td>' + ListRenz_vous[i].name + '</td>';
            ListRenz += '<td>' + ListRenz_vous[i].CIN + '</td>';
            ListRenz += '<td>' + ListRenz_vous[i].Num + '</td>';
            ListRenz += '<td>' + ListRenz_vous[i].dateNais + '</td>';
            ListRenz += '<td>' + ListRenz_vous[i].sexe + '</td>';
            ListRenz += '<td>' + ListRenz_vous[i].mail + '</td>';
            ListRenz += '<td>' + ListRenz_vous[i].clendrier + '</td>';
            ListRenz += '<td>' + ListRenz_vous[i].Heure + '</td>';
            ListRenz += '<td>' + ListRenz_vous[i].messagee + '</td>';
            ListRenz += '<td>' + ListRenz_vous[i].statut + '</td>';
            ListRenz += '<td>' + " <button type='button' onclick='valider(" + i + ")'>Valider</button>" + '</td>';
            ListRenz += '<td>' + " <button type='button' onclick='Supprimer(" + i + ")' >Supprimer</button>" + '</td>';
            ListRenz += '</tr>';

        }
    }
    ListRenz += '</table>';
    document.getElementById('listRenCours').innerHTML = ListRenz;
}

function Supprimer(j) {

    var ListRenz_vous = JSON.parse(localStorage.getItem("ListRenz_vous")) || [];
    ListRenz_vous.splice(j, 1);
    localStorage.setItem("ListRenz_vous", JSON.stringify(ListRenz_vous));
    location.href = 'ProfilSecretaire.html';
}

function valider(j) {
    var ListRenz_vous = JSON.parse(localStorage.getItem("ListRenz_vous"));
    //  ListRenz_vous[j].statut = "valider";

    var Rendez_vous = {
        name: ListRenz_vous[j].name,
        CIN: ListRenz_vous[j].CIN,
        Num: ListRenz_vous[j].Num,
        dateNais: ListRenz_vous[j].dateNais,
        sexe: ListRenz_vous[j].sexe,
        mail: ListRenz_vous[j].mail,
        adresse: ListRenz_vous[j].adresse,
        Heure: ListRenz_vous[j].Heure,
        clendrier: ListRenz_vous[j].clendrier,
        messagee: ListRenz_vous[j].messagee,
        statut: "Valider",

    };

    ListRenz_vous.splice(j, 1, Rendez_vous);
    localStorage.setItem("ListRenz_vous", JSON.stringify(ListRenz_vous));
    location.href = 'ProfilSecretaire.html';

}

function Sauvegard() {

    var Rendez_vous = {
        name: document.getElementById("nom").value,
        CIN: document.getElementById("cin").value,
        Num: document.getElementById("num").value,
        dateNais: document.getElementById("Date").value,
        sexe: document.getElementById("sexe").value,
        mail: document.getElementById("mail").value,
        adresse: document.getElementById("adresse").value,
        Heure: document.getElementById("heure").value,
        clendrier: document.getElementById("datepicker").value,
        messagee: document.getElementById("msg").value,
        statut: "Valider",

    };



    var ListRenz_vous = JSON.parse(localStorage.getItem("ListRenz_vous")) || [];
    ListRenz_vous.push(Rendez_vous);
    ListRenz_vous = localStorage.setItem("ListRenz_vous", JSON.stringify(ListRenz_vous));
    location.href = "ProfilSecretaire.html";
}


/***liste de RV valider  * */
function ListeRV() {
    ListRenz_vous = JSON.parse(localStorage.getItem("ListRenz_vous"));

    var ListRenz = '<table border ="2">';
    ListRenz += '<tr>';
    ListRenz += '<th>' + "Name" + '</th>';
    ListRenz += '<th>' + "CIN" + '</th>';
    ListRenz += '<th>' + "Numéro" + '</th>';
    ListRenz += '<th>' + "Date de naissance" + '</th>';
    ListRenz += '<th>' + "Sexe" + '</th>';
    ListRenz += '<th>' + "adresse email" + '</th>';
    ListRenz += '<th>' + "Date" + '</th>';
    ListRenz += '<th>' + "heure" + '</th>';
    ListRenz += '<th>' + "Message" + '</th>';
    ListRenz += '<th>' + "statut" + '</th>';

    ListRenz += '<th>' + "Action" + '</th>';

    ListRenz += '</tr>';
    for (var i = 0; i < ListRenz_vous.length; i++) {
        if (ListRenz_vous[i].statut == "Valider") {



            ListRenz += '<tr>';
            ListRenz += '<td>' + ListRenz_vous[i].name + '</td>';
            ListRenz += '<td>' + ListRenz_vous[i].CIN + '</td>';
            ListRenz += '<td>' + ListRenz_vous[i].Num + '</td>';
            ListRenz += '<td>' + ListRenz_vous[i].dateNais + '</td>';
            ListRenz += '<td>' + ListRenz_vous[i].sexe + '</td>';
            ListRenz += '<td>' + ListRenz_vous[i].mail + '</td>';
            ListRenz += '<td>' + ListRenz_vous[i].clendrier + '</td>';
            ListRenz += '<td>' + ListRenz_vous[i].Heure + '</td>';
            ListRenz += '<td>' + ListRenz_vous[i].messagee + '</td>';
            ListRenz += '<td>' + ListRenz_vous[i].statut + '</td>';
            //ListRenz += '<td>' + " <button type='button' onclick='valider(" + i + ")'>Valider</button>" + '</td>';
            ListRenz += '<td>' + " <button type='button' onclick='Supprimer(" + i + ")' >Supprimer</button>" + '</td>';
            ListRenz += '</tr>';

        }
    }
    ListRenz += '</table>';
    document.getElementById('ListRenz').innerHTML = ListRenz;
}

function Supprimer(j) {

    var ListRenz_vous = JSON.parse(localStorage.getItem("ListRenz_vous")) || [];
    ListRenz_vous.splice(j, 1);
    localStorage.setItem("ListRenz_vous", JSON.stringify(ListRenz_vous));
    location.href = 'ProfilSecretaire.html';
}

function getCIN() {
    var html = '';
    var CIN = [];
    var patient = JSON.parse(localStorage.getItem("patients"));
    for (i = 0; i < patient.length; i++) {
        CIN.push(patient[i].cin);
    }
    var uniqueCIN = [...new Set(CIN)];
    // return (uniquespcialites);
    console.log(uniqueCIN);

    for (i = 0; i < uniqueCIN.length; i++) {

        html += `<option>${uniqueCIN[i]}</option>`;

    }
    document.getElementById("cin").innerHTML = html;

}

function getPatientByCIN(cinP) {

    var patientByCin = "";
    var PatientsByCIN = [];
    var patientt = JSON.parse(localStorage.getItem("patients"));
    for (i = 0; i < patientt.length; i++) {
        if (patientt[i].cin == cinP) {


            PatientsByCIN.push(patientt[i]);
        }
    }

    for (j = 0; j < PatientsByCIN.length; j++) {

        patientByCin += `<div class="col-md-6"><div class="appointment-col id="nn" ><input type="text" class="form-control"id="nom" value="${PatientsByCIN[j].nom}"></div></div>`;
        patientByCin += `<div class="col-md-6"><div class="appointment-col id="dat"><input type="date" class="form-control" id="Date" value="${PatientsByCIN[j].date}"></div></div>`;
        patientByCin += `<div class="col-md-6"><div class="appointment-col id="mai"><input type="text" class="form-control"id="mail" value="${PatientsByCIN[j].email}"></div></div>`;
        patientByCin += `<div class="col-md-6"><div class="appointment-col id="mn"><input type="text" class="form-control"id="num" value="${PatientsByCIN[j].mobile}"></div></div>`;
        patientByCin += `<div class="col-md-6"><div class="appointment-col id="ad"><input type="text" class="form-control"id="adresse" value="${PatientsByCIN[j].adress}"></div></div>`;
        patientByCin += `<div class="col-md-6"><div class="appointment-col id="sx"><select class="form-control"id="sexe" > <option>${PatientsByCIN[j].sexe}</option></select></div></div>`;

    }
    document.getElementById("rdv").innerHTML = patientByCin;


}


function Sauvegard() {

    var Rendez_vous = {
        name: document.getElementById("nom").value,
        CIN: document.getElementById("cin").value,
        Num: document.getElementById("num").value,
        dateNais: document.getElementById("Date").value,
        sexe: document.getElementById("sexe").value,
        mail: document.getElementById("mail").value,
        adresse: document.getElementById("adresse").value,
        Heure: document.getElementById("heure").value,
        clendrier: document.getElementById("datepicker").value,
        messagee: document.getElementById("msg").value,
        statut: "Valider",

    };



    var ListRenz_vous = JSON.parse(localStorage.getItem("ListRenz_vous")) || [];
    ListRenz_vous.push(Rendez_vous);
    ListRenz_vous = localStorage.setItem("ListRenz_vous", JSON.stringify(ListRenz_vous));
    location.href = "ProfilSecretaire.html";
}



function getSpcialites() {
    var html = '';
    var spcialites = [];
    var medecins = JSON.parse(localStorage.getItem("medecins"));
    for (i = 0; i < medecins.length; i++) {
        spcialites.push(medecins[i].spcialite);
    }
    var uniquespcialites = [...new Set(spcialites)];
    // return (uniquespcialites);
    console.log(uniquespcialites);

    for (i = 0; i < uniquespcialites.length; i++) {

        html += `<option>${uniquespcialites[i]}</option>`;

    }
    document.getElementById("spec").innerHTML = html;

}

function getMedecinBySpecialite(spt) {
    console.log(spt);
    var MedByspec = "";
    var medecinBySpc = [];
    var medecins = JSON.parse(localStorage.getItem("medecins"));
    for (i = 0; i < medecins.length; i++) {
        if (medecins[i].spcialite == spt) {

            medecinBySpc.push(medecins[i].nom + " " + medecins[i].prenom);
        }
    }

    for (i = 0; i < medecinBySpc.length; i++) {
        console.log(medecinBySpc[i]);


        MedByspec += `<option>${medecinBySpc[i]}</option>`;

    }
    document.getElementById("MedByspec").innerHTML = MedByspec;


}