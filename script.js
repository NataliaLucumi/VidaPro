// Evento 1
window.addEventListener("load", () => {
    console.log("Página cargada correctamente");
});

// Evento 2
function completar(boton) {
    // Cambiar texto
    boton.innerText = "Completado ✔️";

    // Cambiar estilo
    boton.style.backgroundColor = "#22c55e";
    boton.style.color = "white";

    // Deshabilitar botón
    boton.disabled = true;

    // Animación
    boton.style.transform = "scale(1.1)";
    setTimeout(() => {
        boton.style.transform = "scale(1)";
    }, 200);

    // Mensaje extra
    alert("¡Hábito completado con éxito!");
}
// Evento 3
function completar(boton) {
    boton.innerText = "Completado ✔️";
    boton.classList.add("completado");
    boton.disabled = true;

    // Animar toda la tarjeta MÁS GRANDE
    let card = boton.closest(".card");
    card.style.transform = "scale(1.15)";
    card.style.transition = "0.4s";

    // Cambiar color de la tarjeta a azul claro
    card.style.backgroundColor = "#dbeafe";

    setTimeout(() => {
        card.style.transform = "scale(1)";
    }, 400);
}
// Evento 4
const img = document.querySelector(".imagen");

img.addEventListener("mouseover", () => {
  img.src = "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80";
});

img.addEventListener("mouseout", () => {
  img.src = "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80";
});

// Evento 5
document.addEventListener("mousemove", function(e) {
  const cursor = document.querySelector(".cursor");
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});