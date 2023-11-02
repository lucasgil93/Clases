class Pregunta {
    constructor(pregunta, rCorrecta, rI1, rI2, rI3) {
        this.pregunta = pregunta;
        this.rCorrecta = rCorrecta;
        this.rI1 = rI1;
        this.rI2 = rI2;
        this.rI3 = rI3;
    }

    toHTMLUl() {
        return `<ul>
                    <li>Respuesta Correcta: ${this.rCorrecta}</li>
                    <li>Respuesta Incorrecta 1: ${this.rI1}</li>
                    <li>Respuesta Incorrecta 2: ${this.rI2}</li>
                    <li>Respuesta Incorrecta 3: ${this.rI3}</li>
                </ul>`;
    }
}

class Cuestionario {
    constructor() {
        this.preguntas = [];
    }

    añadirPregunta(pregunta) {
        this.preguntas.push(pregunta);
    }

    descartarPregunta(id) {
        this.preguntas.splice(id, 1);
    }

    getPregunta(i) {
        return this.preguntas[i];
    }

    borrarPreguntas() {
        this.preguntas = [];
    }

    serializar() {
        return JSON.stringify(this.preguntas);
    }

    generarContenidoArchivo() {
        let contenido = '';
        this.preguntas.forEach((pregunta, index) => {
            contenido += `${index + 1}:\n`;
            contenido += `${pregunta.pregunta}\n`;
            contenido += `{\n`;
            contenido += `=${pregunta.rCorrecta}\n`;
            contenido += `~%-25%${pregunta.rI1}\n`;
            contenido += `~%-25%${pregunta.rI2}\n`;
            contenido += `~%-25%${pregunta.rI3}\n`;
            contenido += `}\n`;
        });
        return contenido;
    }

    static deserializar(jsonString) {
        const preguntas = JSON.parse(jsonString);
        const cuestionario = new Cuestionario();
        preguntas.forEach((pregunta) => {
            cuestionario.añadirPregunta(new Pregunta(pregunta.pregunta, pregunta.rCorrecta, pregunta.rI1, pregunta.rI2, pregunta.rI3));
        });
        return cuestionario;
    }
}