

var secretaires = {
    cin: "",
    nom: "", prenom: "", email: "", date: "", password: "", adress: "", sexe: "", mobile: "",  rol: "",
    photo: "",
};
var secretaires = JSON.parse(localStorage.getItem("secretaires")) || [];
localStorage.setItem("secretaires", JSON.stringify(secretaires));

var addresssecretaire = [];
if (document.getElementById("photo_secretaire")!=null)
{

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
        password: document.getElementById("password_secretaire").value,
        adress: document.getElementById("adress").value,
        
        sexe: document.getElementById("sexe_secretaire").value,
        mobile: document.getElementById("mobile_secretaire").value,
        
        photo: addresssecretaire,
        rol: "secretaire",

    };
    secretaires.push(secretaire);

    localStorage.setItem("secretaires", JSON.stringify(secretaires));
    location.href = 'all_staffs.html';

}
function onloadSecretaire()
{
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
table += '<th>' + "Mots de passe" + '</th>';
table += '<th>' + "Action" + '</th>';
table += '</tr>';
for (var i = 0; i < secretaires.length; i++) {

    table += '<tr class="odd gradeX">';

    table += '<td><img  height=50 width=50 src=' + secretaires[i].photo + '></td>';
    table += '<td>' + secretaires[i].nom + '</td>';
    table += '<td>' + secretaires[i].prenom + '</td>';
    table += '<td>' + secretaires[i].date + '</td>';
    table += '<td>' + secretaires[i].sexe + '</td>';
    table += '<td>' + secretaires[i].email + '</td>';
    table += '<td>' + secretaires[i].mobile + '</td>';
    table += '<td>' + secretaires[i].rol + '</td>';
    table += '<td>' + secretaires[i].adress + '</td>';
    table += '<td>' + secretaires[i].password + '</td>';
    table += '<td><button  onclick="editSecretaire(' + i + ')" class="btn btn-primary btn-xs"><i class="fa fa-pencil"></i></button><button  onclick="deleteSecretaire(' + i + ')" class="btn btn-danger btn-xs"><i class="fa fa-trash-o "></i></button> ';
    
    table += '</tr>';
}
table += '</table>';

document.getElementById('table').innerHTML = table;
}
function deleteSecretaire(n) {

    var secretaires = JSON.parse(localStorage.getItem("secretaires")) || [];
    secretaires.splice(n, 1);
    localStorage.setItem("secretaires", JSON.stringify(secretaires));
    location.href = 'all_staff.html';
}

function editSecretaire(nbre) {
    
    var secretaireByCIN = JSON.parse(localStorage.getItem("secretairesByCIN")) || [];
    var numeroIdS = JSON.parse(localStorage.getItem("numeroIDS")) || [];
    secretaireByCIN.push(secretaires[nbre]);
    numeroIdS.push(nbre);
    localStorage.setItem("secretairesByCIN", JSON.stringify(secretaireByCIN));
    localStorage.setItem("numeroIDS", JSON.stringify(numeroIdS));
    location.href = 'edit_staff.html';
}
function chargerSecretaireEdit() {

    var secretaireByCIN = JSON.parse(localStorage.getItem("secretairesByCIN")) || [];

    var cin = document.getElementById("cin_secretaire");
    cin.setAttribute("value",secretaireByCIN[0].cin);

    var nom = document.getElementById("nom_secretaire");
    nom.setAttribute("value",secretaireByCIN[0].nom);

    var prenom = document.getElementById("prenom_secretaire");
    prenom.setAttribute("value",secretaireByCIN[0].prenom);

    var sexe = document.getElementById("sexe_secretaire");
    sexe.setAttribute("value",secretaireByCIN[0].sexe);

    var option= document.getElementById("sexe_secretaire").options;
    for(i=0; i< option.length; i++){
        if (secretaireByCIN[0].sexe==option[i].value)
        {
            option[i].selected='selected';
        }
    }

    var email = document.getElementById("email_secretaire");
    email.setAttribute("value",secretaireByCIN[0].email);

    document.getElementById("adress").value =secretaireByCIN[0].adress;
    
    
    
    var mobile = document.getElementById("mobile_secretaire");
    mobile.setAttribute("value",secretaireByCIN[0].mobile);

    var password = document.getElementById("password_secretaire");
    password.setAttribute("value",secretaireByCIN[0].password);

    var date = document.getElementById("datenaissance_secretaire");
    date.setAttribute("value",secretaireByCIN[0].date);

    

    addres_secretaire =secretaireByCIN[0].photo;
    
}
function modifie_secretaire() {
    
    var numeroIdS = JSON.parse(localStorage.getItem("numeroIDS")) || [];

    
    var secretaire = {

        cin: document.getElementById("cin_secretaire").value,
        nom: document.getElementById("nom_secretaire").value,
        prenom: document.getElementById("prenom_secretaire").value,
        email: document.getElementById("email_secretaire").value,
        date: document.getElementById("datenaissance_secretaire").value,
        password: document.getElementById("password_secretaire").value,
        adress: document.getElementById("adress").value,
        sexe: document.getElementById("sexe_secretaire").value,
        mobile: document.getElementById("mobile_secretaire").value,
        photo: addres_secretaire,
        rol: "secretaire",

    };

    var secretaires = JSON.parse(localStorage.getItem("secretaires")) || [];
    secretaires.splice(numeroIdS[0], 1, secretaire);
    localStorage.setItem("secretaires", JSON.stringify(secretaires));
    localStorage.removeItem("secretairesByCIN");
    localStorage.removeItem("numeroIDS");
    location.href = 'all_staffs.html';


}

function getsecretaireByCIN(cin) {
    var_secretaireByCIN = JSON.parse(localStorage.getItem("secretairesByCIN")) || [];
    for (var i = 0; i < secretaires.length; i++) {
        if (secretaires[i].cin == cin) {
        secretaireByCIN.push(secretaires[i]);
            localStorage.setItem("secretairesByCIN", JSON.stringify(secretaireByCIN));
        }
    }
  
    return(secretaireByCIN);
}

var tableau=""  ;
    for (var i=0;i<secretaires.length;i++){


        tableau+='<div class="col-md-4">';
		tableau+='		                                <div class="card card-topline-aqua">';
		tableau+='		                                    <div class="card-body no-padding ">';
		tableau+='		                                    	<div class="doctor-profile">';
		tableau+='		                                                <img src="'+ secretaires[i].photo +' " class="doctor-pic" alt=""> ';
		tableau+='			                                        <div class="profile-usertitle">';
		tableau+='			                                            <div class="doctor-name">'+ secretaires[i].nom + secretaires[i].prenom + ' </div>';
		tableau+='			                                            <div class="name-center"> '+ secretaires[i].email +' </div>';
		tableau+='			                                        </div>';
		tableau+='		                                                <p> '+ secretaires[i].adress +'</p> ';
		tableau+='		                                                <div><p><i class="fa fa-phone"></i><a href="tel:(123)456-7890">  '+ secretaires[i].mobile +'</a></p> </div>';			                                        
		tableau+='		                                        </div>';
		tableau+='		                                    </div>';
		tableau+='		                                </div>';
        tableau+='			                        </div>';
    }
    document.getElementById("secretaire").innerHTML=tableau;
