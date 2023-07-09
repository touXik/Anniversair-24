document.getElementById("clickableImage").addEventListener("click", function() {
    var loginBox = document.getElementById("loginBox");
    if (loginBox.style.display === "none") {
        loginBox.style.display = "block";
    } else {
        loginBox.style.display = "none";
    }
});

document.getElementById("CloseButton").addEventListener("click", function() {
    var loginBox = document.getElementById("loginBox");
    if (loginBox.style.display === "none") {
        loginBox.style.display = "block";
    } else {
        loginBox.style.display = "none";
    }
});



document.getElementById("loginButton").addEventListener("click", function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Hacher le mot de passe saisi
    var hashedPassword = CryptoJS.SHA256(password).toString();

    // Comparer le hachage du mot de passe avec le hachage souhaité
    var desiredHash = "29eeec5f594141877d8d7b628d93bce5c38b216bda8854d2e02939d8196e3b56";
    var isPasswordCorrect = (hashedPassword === desiredHash);
    console.log(hashedPassword);
    // Vérifier les informations d'identification
    if (username === "lina" && isPasswordCorrect) {
        // Informations d'identification valides, effectuer une action souhaitée
        // Par exemple, rediriger vers une autre page
        window.location.href = "IMG.zip";
    } else {
        // Informations d'identification invalides, afficher un message d'erreur
        alert("Nom d'utilisateur ou mot de passe incorrect.");
    }
});


