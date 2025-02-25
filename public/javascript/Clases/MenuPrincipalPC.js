import { EtiquetaA } from "../Etiquetas/EtiquetaA.js";
import { EtiquetaDivWithImg } from "../Etiquetas/EtiquetaDivWithImg.js";
import { EtiquetaImg } from "../Etiquetas/EtiquetaImg.js";
import { Navegacion } from "./Navegación.js";
class NavegacionMenuPrincipal extends Navegacion {
    constructor() {
        super(); // obliga a ter 'super()'
        this.referenciaEtiquetaA = new EtiquetaA();
        this.referenciaEtiquetaDivWithImg = new EtiquetaDivWithImg();
        // referencia creada dende a clase EtiquetaImg
        this.referenciaEtiquetaImg = new EtiquetaImg();
    }
    crearAtributos(direccion, enlace) {
        // {Clase EtiquetaA}
        this.referenciaEtiquetaA.introducirAtributoHref(direccion);
        // {Clase EtiquetaDiv}
        // {Clase EtiquetaImg}
        this.referenciaEtiquetaImg.introduzcoAtributoSrc(enlace);
    }
    pintarEnPantalla() {
        this.referenciaEtiquetaA.pintoEnHTML();
        this.referenciaEtiquetaDivWithImg.pintoEnHTML();
        this.referenciaEtiquetaImg.pintoEnHTML();
    }
    introducirTextoNasEtiquetas(texto) {
        this.referenciaEtiquetaA.introducirTexto(texto);
    }
    establecerEstilo(estiloA, estiloDiv, estiloImg) {
        this.referenciaEtiquetaA.introducirAtributoClass(estiloA);
        this.referenciaEtiquetaDivWithImg.introducirAtributoClass(estiloDiv);
        this.referenciaEtiquetaImg.introducirAtributoClass(estiloImg);
    }
}
export { NavegacionMenuPrincipal };
