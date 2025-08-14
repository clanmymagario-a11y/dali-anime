// Registrar usuario
function registrar() {
    const email = document.getElementById("registroEmail").value;
    const password = document.getElementById("registroPassword").value;

    if (!auth) return alert("Firebase no está configurado aún");

    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert("Usuario registrado");
        })
        .catch(error => alert(error.message));
}

// Iniciar sesión
function iniciarSesion() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (!auth) return alert("Firebase no está configurado aún");

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            window.location.href = "catalogo.html";
        })
        .catch(error => alert(error.message));
}

// Cerrar sesión
function cerrarSesion() {
    if (!auth) return alert("Firebase no está configurado aún");

    auth.signOut().then(() => {
        window.location.href = "index.html";
    });
}