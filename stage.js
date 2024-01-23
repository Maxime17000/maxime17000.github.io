// Sélectionner tous les éléments avec la classe "button"
var boutons = document.getElementsByClassName("button");

// Sélectionner tous les éléments avec la classe "lignegrise"
var lignes = document.getElementsByClassName("lignegrise");

// Parcourir tous les boutons et ajouter un écouteur d'événement à chacun
for (var i = 0; i < boutons.length; i++) {
    boutons[i].addEventListener("click", function() {
        // Trouver l'index du bouton cliqué dans la liste des boutons
        var index = Array.prototype.indexOf.call(boutons, this);

        // Utiliser l'index pour accéder à l'élément correspondant dans la liste des lignes
        var ligne = lignes[index];
        
        // Vérifier si la ligne est déjà visible
        if (ligne.style.display !== "flex") {
            // Si non, la rendre visible
            ligne.style.display = "flex";
            this.innerText = "-";
        } else {
            // Sinon, la cacher
            ligne.style.display = "none";
            this.innerText = "+";
        }
    });
}
