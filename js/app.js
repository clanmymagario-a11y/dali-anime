// Este archivo manejará la lógica
// En esta fase, solo mostramos un mensaje cuando se agrega un producto

document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".producto button");

    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            alert("Producto agregado a tu álbum (pronto guardaremos esto en Firebase).");
        });
    });
});