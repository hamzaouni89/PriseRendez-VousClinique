
var payment = {
    numero_payment: "",numero_payment: "",prenom_patient: "",nom_medecin: "",date_paiement: "",montant_total: "",payment: "",satut_payment: "",
    
};
var payments = JSON.parse(localStorage.getItem("payments")) || [];
localStorage.setItem("payments", JSON.stringify(payments));

var addresspayment = [];
if (document.getElementById("photo_payment")!=null)
{

window.addEventListener("load", function () {
    document.getElementById("photo_payment").onchange = function (event) {
        var reader = new FileReader();
        reader.readAsDataURL(event.srcElement.files[0]);

        reader.onload = function () {
            var fileContent = reader.result;
            addresspayment = fileContent;
        }
    }
});
}
function ajouterPayment() {

    var payments = JSON.parse(localStorage.getItem("payments")) || [];
  
    var payment = {
       
        numero_payment: document.getElementById("numero_payment").value,
        nom_patient: document.getElementById("nom_patient").value,
        prenom_patient: document.getElementById("prenom_patient").value,
        nom_medecin: document.getElementById("nom_medecin").value,
        date_paiement: document.getElementById("date_paiement").value,
        montant_total: document.getElementById("montant_total").value,
        payment: document.getElementById("payment").value,
        satut_payment: document.getElementById("satut_payment").value,
        

    };
    payments.push(payment);

    localStorage.setItem("payments", JSON.stringify(payments));
    location.href = 'payments.html';

}
function onloadPayment()
{
var table = '<table class="table table-hover table-checkable order-column full-width" id="example4">';
table += '<tr>';

table += '<th>' + "Numero Payment" + '</th>';
table += '<th>' + "Nom patient" + '</th>';
table += '<th>' + "Prenom patient" + '</th>';
table += '<th>' + "Nom de medecin" + '</th>';
table += '<th>' + "Date de Paiement" + '</th>';
table += '<th>' + "Montant total" + '</th>';
table += '<th>' + "Methodes de Paiement" + '</th>';
table += '<th>' + "Satut de paiement" + '</th>';
table += '</tr>';
if (payments.length==0){
table += '<tr ><td colspan="8">Aucun paiement n"a été effectué pour le moment</td></tr>'
}
else {
for (var i = 0; i < payments.length; i++) {

    table += '<tr class="odd gradeX">';

    table += '<td>' + payments[i].numero_payment + '</td>';
    table += '<td>' + payments[i].nom_patient + '</td>';
    table += '<td>' + payments[i].prenom_patient + '</td>';
    table += '<td>' + payments[i].nom_medecin+ '</td>';
    table += '<td>' + payments[i].date_paiement + '</td>';
    table += '<td>' + payments[i].montant_total + '</td>';
    table += '<td>' + payments[i].payment + '</td>';
    table += '<td>' + payments[i].satut_payment+ '</td>';
    
    table += '<td><button  onclick="editpayment(' + i + ')" class="btn btn-primary btn-xs"><i class="fa fa-pencil"></i></button><button  onclick="deletepayment(' + i + ')" class="btn btn-danger btn-xs"><i class="fa fa-trash-o "></i></button> ';
    
    table += '</tr>';
}
}
table += '</table>';

document.getElementById('table').innerHTML = table;
}
function deletepayment(n) {

    var payments = JSON.parse(localStorage.getItem("payments")) || [];
    payments.splice(n, 1);
    localStorage.setItem("payments", JSON.stringify(payments));
    location.href = 'payments.html';
}

function editpayment(nbre) {
    
    var paymentByNum = JSON.parse(localStorage.getItem("paymentsByNum")) || [];
    var numeroIdS = JSON.parse(localStorage.getItem("numeroIDS")) || [];
    paymentByNum.push(payments[nbre]);
    numeroIdS.push(nbre);
    localStorage.setItem("paymentsByNum", JSON.stringify(paymentByNum));
    localStorage.setItem("numeroIDS", JSON.stringify(numeroIdS));
    location.href = 'edit_payment.html';
}
function chargerpaymentEdit() {

    var paymentByNum = JSON.parse(localStorage.getItem("paymentsByNum")) || [];

    var numero_payment = document.getElementById("numero_payment");
    numero_payment.setAttribute("value",paymentByNum[0].numero_payment);

    var nom_patient = document.getElementById("nom_patient");
    nom_patient.setAttribute("value",paymentByNum[0].nom_patient);

    var prenom_patient = document.getElementById("prenom_patient");
    prenom_patient.setAttribute("value",paymentByNum[0].prenom_patient);

    var nom_medecin = document.getElementById("nom_medecin");
    nom_medecin.setAttribute("value",paymentByNum[0].nom_medecin);

    var option= document.getElementById("nom_medecin").options;
    for(i=0; i< option.length; i++){
        if (paymentByNum[0].nom_medecin==option[i].value)
        {
            option[i].selected='selected';
        }
    }

    var date_paiement = document.getElementById("date_paiement");
    date_paiement.setAttribute("value",paymentByNum[0].date_paiement);
    
    var montant_total = document.getElementById("montant_total");
    montant_total.setAttribute("value",paymentByNum[0].montant_total);

    var payment = document.getElementById("payment");
    payment.setAttribute("value",paymentByNum[0].payment);

    var satut_payment = document.getElementById("satut_payment");
    satut_payment.setAttribute("value",paymentByNum[0].satut_payment);

    
}
function modifie_payment() {
    
    var numeroIdS = JSON.parse(localStorage.getItem("numeroIDS")) || [];

    
    var payment = {

        numero_payment: document.getElementById("numero_payment").value,
        nom_patient: document.getElementById("nom_patient").value,
        prenom_patient: document.getElementById("prenom_patient").value,
        nom_medecin: document.getElementById("nom_medecin").value,
        date_paiement: document.getElementById("date_paiement").value,
        montant_total: document.getElementById("montant_total").value,
        payment: document.getElementById("payment").value,
        satut_payment: document.getElementById("satut_payment").value,

    };

    var payments = JSON.parse(localStorage.getItem("payments")) || [];
    payments.splice(numeroIdS[0], 1, payment);
    localStorage.setItem("payments", JSON.stringify(payments));
    localStorage.removeItem("paymentsByNum");
    localStorage.removeItem("numeroIDS");
    location.href = 'payments.html';


}

function getpaymentByNum(cin) {
    var_paymentByNum = JSON.parse(localStorage.getItem("paymentsByNum")) || [];
    for (var i = 0; i < payments.length; i++) {
        if (payments[i].cin == cin) {
        paymentByNum.push(payments[i]);
            localStorage.setItem("paymentsByNum", JSON.stringify(paymentByNum));
        }
    }
  
    return(paymentByNum);
}
