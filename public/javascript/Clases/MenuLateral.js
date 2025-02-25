// 📌 2️⃣ Definir el objeto con las rutas de los iconos
const iconosSidebar = {
    home: "imaxes/Home.png",
    grupo: "imaxes/Persoas.png",
    folla: "imaxes/Rectangle.png",
    etiqueta: "imaxes/Shape.png",
};
// 📌 3️⃣ Función para crear el menú lateral
export function crearMenuLateral() {
    let menu = document.createElement("div");
    menu.classList.add("sidebar");
    // Recorre el objeto de iconos y los agrega al menú
    for (let variable in iconosSidebar) {
        if (iconosSidebar.hasOwnProperty(variable)) {
            console.log(`${variable} -> ${iconosSidebar[variable]}`);
            let boton = document.createElement("button");
            boton.classList.add("boton-menu");
            let img = document.createElement("img");
            img.src = iconosSidebar[variable];
            img.alt = variable;
            img.classList.add("icono-menu");
            boton.appendChild(img);
            menu.appendChild(boton);
        }
    }
    document.body.appendChild(menu);
}
