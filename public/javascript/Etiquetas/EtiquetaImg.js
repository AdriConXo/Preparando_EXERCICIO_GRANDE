class EtiquetaImg {
    constructor() {
        this.etiquetaImg = document.createElement("img");
    }
    introduzcoAtributoSrc(enlace) {
        this.etiquetaImg.setAttribute("src", enlace);
    }
    introducirAtributoClass(estilo) {
        this.etiquetaImg.setAttribute("class", estilo);
    }
    pintoEnHTML() {
        document.body.append(this.etiquetaImg);
    }
}
export { EtiquetaImg };
