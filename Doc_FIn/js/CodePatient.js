function loadpatient() {
    var connected = JSON.parse(localStorage.getItem("connected"));

    if (connected.length != 0) {
        document.getElementById("coonx").setAttribute("class", "hidden");
        document.getElementById("profil").setAttribute("class", "");
        document.getElementById("deconx").setAttribute("class", "");
        console.log("aaaaa");


    }
}
function infor() {
    var connected = JSON.parse(localStorage.getItem("connected"));
    table = '<table>';
    for (var i = 0; i < connected.length; i++) {

        table += '<tr> <td ><center><img style="width: 250px;  height: 200px;" src="' + connected[i].photo + ' " class="doctor-pic" alt=""> </center><br/></td> </tr>';
        table += '<tr> <td>Cin  :  </td><td>' + connected[i].cin + '</td> </tr>';
        table += '<tr> <td>NOM  :  </td><td>' + connected[i].nom + '</td> </tr>';
        table += '<tr> <td>PRENOM  :  </td><td>' + connected[i].prenom + '</td></tr>';
        table += '<tr> <td>DATE DE NAISSANCE :  </td><td>' + connected[i].date + '</td></tr>';
        table += '<tr> <td>SEXE :  </td><td>' + connected[i].sexe + '</td></tr>';
        table += '<tr> <td>Email :  </td><td>' + connected[i].email + '</td></tr>';
        table += '<tr> <td>NUMERO TEL :  </td><td>' + connected[i].mobile + '</td></tr>';
        table += '<tr> <td>MOT DE PASSE :  </td><td>' + connected[i].password + '</td></tr>';
        table += '<tr> <td>ADRESSE :  </td><td>' + connected[i].adress + '</td></tr>';
        table += '<tr> <td>ETAT CEVILE :  </td><td>' + connected[i].etat + '</td></tr>';
        table += '<tr> <td>TENSION :  </td><td>' + connected[i].tension + '</td></tr>';
        table += '<tr> <td>ETAT CEVILE :  </td><td>' + connected[i].group + '</td></tr>';
        table += '<tr> <td>DIABETE :  </td><td>' + connected[i].diabete + '</td></tr>';
        table += '<tr> <td>  </td><td><button type="button" onclick="chargerConnectedPEdit()">Modifier</button></td> </tr>';
    }
    table += '</table>';
    document.getElementById("info").innerHTML = table;
}

function information() {
    infor();
    document.getElementById("info").setAttribute("class", "");
    document.getElementById("AjouttRen").setAttribute("class", "hidden");
    document.getElementById("VoirReenz").setAttribute("class", "hidden");
    document.getElementById("modif_patientC").setAttribute("class", "hidden");

}
function ajouttRenz() {

    document.getElementById("info").setAttribute("class", "hidden");
    document.getElementById("AjouttRen").setAttribute("class", "");
    document.getElementById("VoirReenz").setAttribute("class", "hidden");

}
function VoirRenz() {
    ListeMonRenz();
    document.getElementById("info").setAttribute("class", "hidden");
    document.getElementById("AjouttRen").setAttribute("class", "hidden");
    document.getElementById("VoirReenz").setAttribute("class", "");
    document.getElementById("VoirReenz").setAttribute("class", "ListePast");



}



function Sauvegard() {

    var Rendez_vous = {
        name: document.getElementById("noom").value,
        CIN: document.getElementById("cin").value,
        Num: document.getElementById("num").value,
        dateNais: document.getElementById("Date").value,
        sexe: document.getElementById("sexe").value,
        mail: document.getElementById("mail").value,
        adresse: document.getElementById("adresse").value,
        Heure: document.getElementById("heure").value,
        clendrier: document.getElementById("datepicker").value,
        messagee: document.getElementById("msg").value,
        statut: "En Cours",

    };
    var ListRenz_vous = JSON.parse(localStorage.getItem("ListRenz_vous")) || [];
    ListRenz_vous.push(Rendez_vous);
    ListRenz_vous = localStorage.setItem("ListRenz_vous", JSON.stringify(ListRenz_vous));
    location.href = "user_profil.html";
}

function ListeMonRenz() {

    var ListRenz_vous = JSON.parse(localStorage.getItem("ListRenz_vous"));
    var connected = JSON.parse(localStorage.getItem("connected"));


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
    ListRenz += '</tr>';
    for (var i = 0; i < ListRenz_vous.length; i++) {
        if (ListRenz_vous[i].CIN == connected[0].cin) {
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
            ListRenz += '</tr>';

        }
    }

    ListRenz += '</table>'
    document.getElementById('VoirReenz').innerHTML = ListRenz;
}

function chargerConnectedPEdit() {
    document.getElementById("modif_patientC").setAttribute("class", "");

    document.getElementById("info").setAttribute("class", "hidden");



    var connected = JSON.parse(localStorage.getItem("connected"));



    var cin = document.getElementById("cin_patientA");
    cin.setAttribute("value", connected[0].cin);

    var nom = document.getElementById("nom_patientA");
    nom.setAttribute("placeholder", connected[0].nom);

    var prenom = document.getElementById("prenom_patientA");
    prenom.setAttribute("value", connected[0].prenom);

    var sexe = document.getElementById("sexe_patientA");
    sexe.setAttribute("value", connected[0].sexe);

    var option = document.getElementById("sexe_patientA").options;
    for (i = 0; i < option.length; i++) {
        if (connected[0].sexe == option[i].value) {
            option[i].selected = 'selected';
        }
    }

    var etat = document.getElementById("etat_patientA");
    etat.setAttribute("value", connected[0].etat);

    var optionE = document.getElementById("etat_patientA").options;
    for (i = 0; i < optionE.length; i++) {
        if (connected[0].etat == optionE[i].value) {
            optionE[i].selected = 'selected';
        }
    }

    var group = document.getElementById("etat_patientA");
    group.setAttribute("value", connected[0].group);

    var optionG = document.getElementById("group_sanguinA").options;
    for (i = 0; i < optionG.length; i++) {
        if (connected[0].group == optionG[i].value) {
            optionG[i].selected = 'selected';
        }
    }

    var tension = document.getElementById("tension_patientA");
    tension.setAttribute("value", connected[0].tension);

    var optionT = document.getElementById("tension_patientA").options;
    for (i = 0; i < optionT.length; i++) {
        if (connected[0].tension == optionT[i].value) {
            optionT[i].selected = 'selected';
        }
    }

    var diabete = document.getElementById("diabete_patientA");
    diabete.setAttribute("value", connected[0].diabete);

    var optionD = document.getElementById("diabete_patientA").options;
    for (i = 0; i < optionD.length; i++) {
        if (connected[0].diabete == optionD[i].value) {
            optionD[i].selected = 'selected';
        }
    }

    var email = document.getElementById("email_patientA");
    email.setAttribute("value", connected[0].email);

    document.getElementById("adressA").value = connected[0].adress;



    var mobile = document.getElementById("mobile_patientA");
    mobile.setAttribute("value", connected[0].mobile);

    var password = document.getElementById("password1_patientA");
    password.setAttribute("value", connected[0].password);

    var date = document.getElementById("datenaissance_patientA");
    date.setAttribute("value", connected[0].date);


    adress_patient = connected[0].photo;


}

var patients = JSON.parse(localStorage.getItem("patients")) || [];
localStorage.setItem("patients", JSON.stringify(patients));

var adresspatient = [];
if (document.getElementById("photo_patientA") != null) {

    window.addEventListener("load", function () {
        document.getElementById("photo_patientA").onchange = function (event) {
            var reader = new FileReader();
            reader.readAsDataURL(event.srcElement.files[0]);

            reader.onload = function () {
                var fileContent = reader.result;
                adresspatient = fileContent;
            }
        }
    });

}
function modifier_patient() {

    var connected = JSON.parse(localStorage.getItem("connected"));


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
    connected = [];
    localStorage.setItem("connected", JSON.stringify(patient));
    location.href = 'user_profil.html';


}


function getCIN() {
    var html = '';
    var CIN = [];
    var patient = JSON.parse(localStorage.getItem("connected"));
    for (i = 0; i < patient.length; i++) {
        CIN.push(patient[i].cin);
    }
    var uniqueCIN = [...new Set(CIN)];
    // return (uniquespcialites);
    console.log(uniqueCIN);

    for (i = 0; i < uniqueCIN.length; i++) {

        html += `<option></option><option>${uniqueCIN[i]}</option>`;

    }
    document.getElementById("cin").innerHTML = html;

}

function getPatientByCIN(cinP) {

    var patientByCin = "";
    var PatientsByCIN = [];
    var patientt = JSON.parse(localStorage.getItem("connected"));
    for (i = 0; i < patientt.length; i++) {
        if (patientt[i].cin == cinP) {


            PatientsByCIN.push(patientt[i]);
        }
    }

    for (j = 0; j < PatientsByCIN.length; j++) {

        patientByCin += `<div class="col-md-6"><div class="appointment-col id="nn" ><input type="text" class="form-control"id="noom" value="${PatientsByCIN[j].nom}"></div></div>`;
        patientByCin += `<div class="col-md-6"><div class="appointment-col id="dat"><input type="date" class="form-control" id="Date" value="${PatientsByCIN[j].date}"></div></div>`;
        patientByCin += `<div class="col-md-6"><div class="appointment-col id="mai"><input type="text" class="form-control"id="mail" value="${PatientsByCIN[j].email}"></div></div>`;
        patientByCin += `<div class="col-md-6"><div class="appointment-col id="mn"><input type="text" class="form-control"id="num" value="${PatientsByCIN[j].mobile}"></div></div>`;
        patientByCin += `<div class="col-md-6"><div class="appointment-col id="ad"><input type="text" class="form-control"id="adresse" value="${PatientsByCIN[j].adress}"></div></div>`;
        patientByCin += `<div class="col-md-6"><div class="appointment-col id="sx"><select class="form-control"id="sexe" > <option>${PatientsByCIN[j].sexe}</option></select></div></div>`;

    }
    document.getElementById("rdv").innerHTML = patientByCin;


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