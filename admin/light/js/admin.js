/**
 
 function valid()
{
    var pass= document.getElementById("password").value;
    var min = new RegExp("(.*[a-z])");
    var maj = new RegExp("(?=.*[A-Z])");
    var spc = new RegExp("(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var a=0,i=0 , j=0 ,k=0;
    
    
    if (pass.length>=8){

        console.log("Password valide");
        console.log(pass.length);
        if (min.test(pass))
        {

            i=i+1;
            console.log("Password avec Min");
            
        }
        else
        {
            i=0;
        }
         if (maj.test(pass))
        {
            j=j+1;
            console.log("Password avec Maj");
            
        }
        else
        {
            j=0;
        }
        if (spc.test(pass))
        {
            k=k+1;
            console.log("Password avec Car Spc");
        }
        else
        {
             k=0
        }
        a = i +j + k;
        console.log("Valeur de a : " , a);
        if(a==1)
        {
            console.log("Password faible"); 
        }
        else if(a==2)
        {
            console.log("Password moyenne");  
        }
        else if(a==3)
        {
            console.log("Password forte"); 
        }
        else{
        console.log("Password incorrect");
        }



    }
    else{
        console.log("Password Invalide");
        console.log(pass.length);
       
    }
    
}

function validutilisateur()
{
    var utilisateur= document.getElementById("utilisateur").value;
    var inx = " ";
    var b=utilisateur.indexOf(inx);

    if(b== -1)
    {
       
        console.log("Nom utilisateur valide");
        
    }
    else {
        
        console.log("Nom utilisateur invalide");
    }

}


function validemail()
{
    var email= document.getElementById("email").value;
    var b=email.indexOf("@");
    if(b!= -1)
    {
        if(email.indexOf(".",b) > b)
        {
        console.log("Email valide");
        }
        else{
        console.log("Email invalide");
        }
    }
    else {
        console.log("Email invalide");
    }

}

function validmail()
{
    var mail=document.getElementById("email").value;
    var c=new RegExp("^(([^<>()\[\]\\.,;:\s@]+(\.]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$");
    
    if (c.test(mail))
    {

        
        console.log("Email valide");
        
    }
    else
    {
        console.log("Email invalide");
    }
}



    
    function date()
    {
        var dateold = document.getElementById("datenaissance").value;
        var dt=new Date(dateold);
        var datenew= new Date();
        
         dt = dt.getTime() / 31536000000;
         dnew = datenew.getTime() / 31536000000;
        console.log("Date saisie :"+ dateold);
        console.log("Date aujourd'hui :"+ datenew);
        var agec=new Number(dnew - dt).toFixed(0);
        console.log("L'age de candidat est : "+agec);
        if(agec < 18)
        {
            console.log("Candidat mineur");
        }
        else
        {
            console.log("Candidat majeur")
        }
      
    }

     function register()
    {
        valid()
        validutilisateur()
        validmail()
        date()
        insertuser(); 
    }
*/
var admins = {
    cin: "",
    nom: "", prenom: "", email: "", date: "", password: "", adress: "", sexe: "", mobile: "", rol: "",
    photo: "",
};
var admins = JSON.parse(localStorage.getItem("admins")) || [];
localStorage.setItem("admins", JSON.stringify(admins));






function conxionAdmin() {
    var admins = JSON.parse(localStorage.getItem("admins")) || [];
    var verif = false;
    var i = 0;
    var mail = document.getElementById('mail').value;
    console.log(mail);
    var mdp = document.getElementById('password').value;
    console.log(mdp);

    for (i = 0; i < admins.length; i++) {
        if ((mail == admins[i].email) && (mdp == admins[i].password)) {

            verif = true;
            var connectedAd = JSON.parse(localStorage.getItem("connectedAd")) || [];
            connectedAd.push(admins[i]);
            localStorage.setItem("connectedAd", JSON.stringify(connectedAd));

            break;
        }
    }
    if (verif) {
        location.href = '../admin/light/all_doctors.html';
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
var addressadmin = [];
if (document.getElementById("photo_admin") != null) {

    window.addEventListener("load", function () {
        document.getElementById("photo_admin").onchange = function (event) {
            var reader = new FileReader();
            reader.readAsDataURL(event.srcElement.files[0]);

            reader.onload = function () {
                var fileContent = reader.result;
                addressadmin = fileContent;
            }
        }
    });
}
function ajouterAdmin() {

    var admins = JSON.parse(localStorage.getItem("admins")) || [];

    var admin = {
        cin: document.getElementById("cin_admin").value,
        nom: document.getElementById("nom_admin").value,
        prenom: document.getElementById("prenom_admin").value,
        email: document.getElementById("email_admin").value,
        date: document.getElementById("datenaissance_admin").value,
        password: document.getElementById("password_admin").value,
        adress: document.getElementById("adress").value,

        sexe: document.getElementById("sexe_admin").value,
        mobile: document.getElementById("mobile_admin").value,

        photo: addressadmin,
        rol: "admin",

    };
    admins.push(admin);

    localStorage.setItem("admins", JSON.stringify(admins));
    location.href = 'all_doctors.html';

}
/**

function ajouteradmin() {

    var admins = JSON.parse(localStorage.getItem("admins")) || [];
  
    var admin = {
        cin: document.getElementById("cin_admin").value,
        nom: document.getElementById("nom_admin").value,
        prenom: document.getElementById("prenom_admin").value,
        email: document.getElementById("email_admin").value,
        date: document.getElementById("datenaissance_admin").value,
        password: document.getElementById("password_admin").value,
        adress: document.getElementById("adress").value,
        
        sexe: document.getElementById("sexe_admin").value,
        mobile: document.getElementById("mobile_admin").value,
        spcialite: document.getElementById("spcialite_admin").value,
        photo: addressadmin,
        rol: "admin",

    };
    admins.push(admin);

    localStorage.setItem("admins", JSON.stringify(admins));
    location.href = 'all_doctors.html';

}
function onloadadmin()
{
var table = '<table class="table table-hover table-checkable order-column full-width" id="example4">';
table += '<thead>';
table += '<tr>';

table += '<th>' + "Photo" + '</th>';
table += '<th>' + "Nom" + '</th>';
table += '<th>' + "Prenom" + '</th>';
table += '<th>' + "Date de naissance" + '</th>';
table += '<th>' + "Sexe" + '</th>';
table += '<th>' + "Spécialité" + '</th>';
table += '<th>' + "Email" + '</th>';
table += '<th>' + "Numereo Tel" + '</th>';
table += '<th>' + "Role" + '</th>';
table += '<th>' + "Adresse" + '</th>';
table += '<th>' + "Mots de passe" + '</th>';
table += '<th>' + "Action" + '</th>';
table += '</tr>';
table += '</thead>';
for (var i = 0; i < admins.length; i++) {

    table += '<tr class="odd gradeX">';

    table += '<td><img  height=50 width=50 src=' + admins[i].photo + '></td>';
    table += '<td>' + admins[i].nom + '</td>';
    table += '<td>' + admins[i].prenom + '</td>';
    table += '<td>' + admins[i].date + '</td>';
    table += '<td>' + admins[i].sexe + '</td>';
    table += '<td>' + admins[i].spcialite + '</td>';
    table += '<td>' + admins[i].email + '</td>';
    table += '<td>' + admins[i].mobile + '</td>';
    table += '<td>' + admins[i].rol + '</td>';
    table += '<td>' + admins[i].adress + '</td>';
    table += '<td>' + admins[i].password + '</td>';
    table += '<td><button  onclick="editadmin(' + i + ')" class="btn btn-primary btn-xs"><i class="fa fa-pencil"></i></button><button  onclick="deleteadmin(' + i + ')" class="btn btn-danger btn-xs"><i class="fa fa-trash-o "></i></button> ';
    // <button type='button' onclick='edit("+i+")'>Editer</button>"+ " <button type='button' onclick='deleteUser("+i+")'>Supprimer</button>"+ '</td>'

    table += '</tr>';
}
table += '</table>';

document.getElementById('table').innerHTML = table;
}
function deleteadmin(n) {

    var admins = JSON.parse(localStorage.getItem("admins")) || [];
    admins.splice(n, 1);
    localStorage.setItem("admins", JSON.stringify(admins));
    location.href = 'all_doctors.html';
}

function editadmin(nbre) {
    
    var adminByCIN = JSON.parse(localStorage.getItem("adminsByCIN")) || [];
    var numeroId = JSON.parse(localStorage.getItem("numeroID")) || [];
    adminByCIN.push(admins[nbre]);
    numeroId.push(nbre);
    localStorage.setItem("adminsByCIN", JSON.stringify(adminByCIN));
    localStorage.setItem("numeroID", JSON.stringify(numeroId));
    location.href = 'edit_doctor.html';
}
function chargeradminEdit() {

    var adminByCIN = JSON.parse(localStorage.getItem("adminsByCIN")) || [];

    var cin = document.getElementById("cin_admin");
    cin.setAttribute("value", adminByCIN[0].cin);

    var nom = document.getElementById("nom_admin");
    nom.setAttribute("value", adminByCIN[0].nom);

    var prenom = document.getElementById("prenom_admin");
    prenom.setAttribute("value", adminByCIN[0].prenom);

    var sexe = document.getElementById("sexe_admin");
    sexe.setAttribute("value", adminByCIN[0].sexe);

    var option= document.getElementById("sexe_admin").options;
    for(i=0; i< option.length; i++){
        if (adminByCIN[0].sexe==option[i].value)
        {
            option[i].selected='selected';
        }
    }

    var email = document.getElementById("email_admin");
    email.setAttribute("value", adminByCIN[0].email);

    document.getElementById("adress").value = adminByCIN[0].adress;
    
    
    


    var options= document.getElementById("spcialite_admin").options;
    for(i=0; i< options.length; i++){
        if (adminByCIN[0].spcialite==options[i].value)
        {
            options[i].selected='selected';
        }
    }
    var spcialite = document.getElementById("spcialite_admin");
    spcialite.setAttribute("value", adminByCIN[0].spcialite);


    var mobile = document.getElementById("mobile_admin");
    mobile.setAttribute("value", adminByCIN[0].mobile);

    var password = document.getElementById("password_admin");
    password.setAttribute("value", adminByCIN[0].password);

    var date = document.getElementById("datenaissance_admin");
    date.setAttribute("value", adminByCIN[0].date);

    

    addressadmin = adminByCIN[0].photo;
    
}
function modifieradmin() {
    
    var numeroId = JSON.parse(localStorage.getItem("numeroID")) || [];

    
    var admin = {

        cin: document.getElementById("cin_admin").value,
        nom: document.getElementById("nom_admin").value,
        prenom: document.getElementById("prenom_admin").value,
        email: document.getElementById("email_admin").value,
        date: document.getElementById("datenaissance_admin").value,
        password: document.getElementById("password_admin").value,
        adress: document.getElementById("adress").value,
        sexe: document.getElementById("sexe_admin").value,
        mobile: document.getElementById("mobile_admin").value,
        spcialite: document.getElementById("spcialite_admin").value,
        photo: addressadmin,
        rol: "admin",

    };

    var admins = JSON.parse(localStorage.getItem("admins")) || [];
    admins.splice(numeroId[0], 1, admin);
    localStorage.setItem("admins", JSON.stringify(admins));
    localStorage.removeItem("adminsByCIN");
    localStorage.removeItem("numeroID");
    location.href = 'all_doctors.html';


}

function getadminByCIN(cin) {
    var adminByCIN = JSON.parse(localStorage.getItem("adminsByCIN")) || [];
    for (var i = 0; i < admins.length; i++) {
        if (admins[i].cin == cin) {
            adminByCIN.push(admins[i]);
            localStorage.setItem("adminsByCIN", JSON.stringify(adminByCIN));
        }
    }
  
    return adminByCIN;
}
*/