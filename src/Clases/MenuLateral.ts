// 📌 1️⃣ Definir la interfaz para los iconos del menú
interface Icono {
    home: string;
    grupo: string;
    folla: string;
    etiqueta: string;
}

// 📌 2️⃣ Definir el objeto con las rutas de los iconos
const iconosSidebar: Icono = {
    home: "/imaxes/Home.png",
    grupo: "/imaxes/Persoas.png",
    folla: "/imaxes/Rectangle.png",
    etiqueta: "/imaxes/Shape.png",
};

// 📌 3️⃣ Función para crear el menú lateral
export function crearMenuLateral() {
    let menu = document.createElement("div");
    menu.classList.add("sidebar");

    // Recorre el objeto de iconos y los agrega al menú
    for (let variable in iconosSidebar) {
        if (iconosSidebar.hasOwnProperty(variable)) {
            console.log(`${variable} -> ${iconosSidebar[variable as keyof Icono]}`);

            let boton = document.createElement("button");
            boton.classList.add("boton-menu");

            let img = document.createElement("img");
            img.src = iconosSidebar[variable as keyof Icono];
            img.alt = variable;
            img.classList.add("icono-menu");

            boton.appendChild(img);
            menu.appendChild(boton);
        }
    }

    document.body.appendChild(menu);
}
