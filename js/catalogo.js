document.addEventListener("DOMContentLoaded", () => {
    const lista = document.getElementById("listaFiguras");

    if (!db) {
        lista.innerHTML = "<p>Firebase no está configurado aún</p>";
        return;
    }

    db.collection("figuras").get().then(snapshot => {
        snapshot.forEach(doc => {
            const figura = doc.data();
            const item = document.createElement("div");
            item.innerHTML = `<h3>${figura.nombre}</h3><p>${figura.descripcion}</p>`;
            lista.appendChild(item);
        });
    });
});