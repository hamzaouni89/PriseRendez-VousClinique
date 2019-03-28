
var medecins = {
    cin: "",
    nom: "", prenom: "", email: "", date: "", password: "", adress: "", sexe: "", mobile: "", spcialite: "", rol: "",
    photo: "",
};
var medecins = JSON.parse(localStorage.getItem("medecins")) || [];
localStorage.setItem("medecins", JSON.stringify(medecins));
var table = "";
for (var i = 0; i < medecins.length; i++) {
    table += ' <div class="col-md-4">';
    table += '<div class="doctor-col doctor-carousel" >';

    table += '<div class="item">';
    table += ' <div class="our-doctor">';
    table += '  <div class="pic">';
    table += '<img style="width: 200px;  height: 400px;" src="' + medecins[i].photo + '" alt="">';
    table += ' </div >';
    table += ' <div class="team-content">';
    table += '   <ul class="social-group">';
    table += ' <li><a href="#"><i class="fa fa-facebook"></i></a></li>';
    table += ' <li><a href="#"><i class="fa fa-google-plus"></i></a></li>';
    table += ' <li><a href="#"><i class="fa fa-twitter"></i></a></li>';
    table += ' <li><a href="#"><i class="fa fa-vimeo"></i></a></li>';
    table += ' </ul>';
    table += ' <a class="details-link" href="doctors-details.html">Details</a>';
    table += '</div>';
    table += ' </div>';
    table += '<h3><a href="doctors-details.html"> Dr.' + medecins[i].nom + ' ' + medecins[i].prenom + '</a></h3>';
    table += '<p>' + medecins[i].spcialite + '</p>';
    table += '  </div>';
    table += '  </div>';
    table += '  </div>';
}
document.getElementById("medecin").innerHTML = table; 