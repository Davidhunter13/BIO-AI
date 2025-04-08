function inicializarBaseDeDatos() {
    const db = {
        servicios: [
            {
                id: 1,
                imagen: "imagenes/destacados/destacado_2.png",
                titulo: "Diagnóstico Asistido por IA",
                descripcion: `En BioAI Medical Technologies, desarrollamos soluciones de diagnóstico asistido por inteligencia artificial diseñadas para mejorar la precisión y velocidad en el análisis de datos clínicos.
                Nuestros algoritmos avanzados de machine learning permiten interpretar imágenes médicas y datos complejos con alta precisión, facilitando diagnósticos más rápidos y confiables.`
            },
            {
                id: 2,
                imagen: "imagenes/destacados/destacado_1.png",
                titulo: "Soporte Técnico y Mantenimiento",
                descripcion: `Desarrollo de aplicaciones web y garantizamos la continuidad y eficacia de nuestras soluciones mediante un servicio de soporte técnico especializado, disponible 24/7.
                Nuestro equipo de ingenieros biomédicos y especialistas en IA ofrece una respuesta rápida y precisa para garantizar que nuestros sistemas operen de manera óptima en todo momento.`
            },
            {
                id: 3,
                imagen: "imagenes/destacados/destacado_3.png",
                titulo: "Consultoría y Capacitación",
                descripcion: `Ofrecemos servicios de consultoría para ayudar a las instituciones médicas a implementar soluciones basadas en IA de manera efectiva.
                Acompañamos a nuestros clientes en cada etapa del proceso, desde la evaluación de necesidades hasta la optimización de resultados.`
            }
        ],
        descripcion_servicio: [
            {
                id: 1,
                fk_servicio: 1,
                titulo: "Diagnóstico <strong>Asistido por IA</strong>",
                imagen: "imagenes/destacados/destacado_2.png",
                descripcion: `
                    <h4><strong>Análisis de Imágenes Médicas</strong></h4>
                    <ul>
                        <li>Detección automática de anomalías en radiografías, tomografías y resonancias magnéticas.</li>
                        <li>Reconocimiento de patrones en imágenes médicas mediante deep learning.</li>
                        <li>Asistencia en la identificación de patologías complejas en tiempo real.</li>
                    </ul>
                    <h4><strong>Interpretación de Datos Clínicos</strong></h4>
                    <ul>
                        <li>Análisis automatizado de resultados de laboratorio.</li>
                        <li>Correlación de datos clínicos para identificar patrones ocultos.</li>
                        <li>Generación de informes detallados con recomendaciones para el médico tratante.</li>
                    </ul>
                    <h4><strong>Diagnóstico Predictivo</strong></h4>
                    <ul>
                        <li>Modelos de predicción para anticipar complicaciones y enfermedades.</li>
                        <li>Identificación de factores de riesgo mediante big data.</li>
                        <li>Alertas automáticas para prevenir eventos adversos en pacientes.</li>
                    </ul>`
            },
            {
                id: 2,
                fk_servicio: 3,
                titulo: "Consultoría y <strong>Capacitación</strong>",
                imagen: "imagenes/destacados/destacado_3.png",
                descripcion: `
                    <h4><strong>Evaluación de Necesidades y Diseño de Estrategias</strong></h4>
                    <ul>
                        <li>Análisis de procesos clínicos para detectar oportunidades de mejora.</li>
                        <li>Definición de objetivos y KPIs para medir el impacto de las soluciones.</li>
                        <li>Diseño de estrategias personalizadas para la integración de IA en la práctica médica.</li>
                    </ul>
                    <h4><strong>Capacitación para Personal Médico y Técnico</strong></h4>
                    <ul>
                        <li>Formación en el uso de las plataformas de IA.</li>
                        <li>Simulación de casos clínicos para reforzar el aprendizaje.</li>
                        <li>Evaluación de competencias y ajuste de procesos según resultados.</li>
                    </ul>
                    <h4><strong>Análisis de Resultados e Implementación de Mejora Continua</strong></h4>
                    <ul>
                        <li>Evaluación periódica de resultados y ajuste de parámetros.</li>
                        <li>Incorporación de nuevas funcionalidades según las necesidades del cliente.</li>
                        <li>Soporte continuo para garantizar el máximo aprovechamiento de las soluciones.</li>
                    </ul>`
            },
            {
                id: 3,
                fk_servicio: 2,
                imagen: "imagenes/destacados/destacado_1.png",
                titulo: "Soporte Técnico y <strong>Mantenimiento</strong>",
                descripcion: `
                    <h4><strong>Instalación y Configuración Personalizada</strong></h4>
                    <ul>
                        <li>Análisis previo de las necesidades de la institución médica.</li>
                        <li>Instalación y configuración de las soluciones adaptadas a los procesos internos.</li>
                        <li>Pruebas de funcionamiento y calibración de los sistemas de IA.</li>
                    </ul>
                    <h4><strong>Mantenimiento Preventivo y Correctivo</strong></h4>
                    <ul>
                        <li>Monitoreo continuo de rendimiento para evitar interrupciones.</li>
                        <li>Detección y resolución de fallas técnicas en tiempo real.</li>
                        <li>Actualización periódica de software para mantener el sistema al día.</li>
                    </ul>
                    <h4><strong>Asistencia Técnica Remota y Presencial</strong></h4>
                    <ul>
                        <li>Soporte remoto mediante acceso seguro a la plataforma.</li>
                        <li>Intervención presencial por parte de nuestro equipo técnico cuando sea necesario.</li>
                        <li>Atención rápida y prioritaria para situaciones críticas.</li>
                    </ul>`
            }
        ]
    };

    localStorage.setItem("db", JSON.stringify(db));
    console.log("Base de datos reinicializada.");
}


function cargarServicios() {
    const contenedor = document.getElementById("servicios");
    contenedor.innerHTML = ""; // Limpiar por si ya hay contenido

    const db = JSON.parse(localStorage.getItem("db"));
    db.servicios.forEach(servicio => {
        const articulo = document.createElement("article");
        articulo.className = "card col-lg-4 col-md-6 col-12";

        articulo.innerHTML = `
            <figure class="row p-0 m-0">
                <img src="${servicio.imagen}" class="col-12" alt="${servicio.titulo}">
                <figcaption class="card-body col-12">
                    <h3 class="m-0 p-0">${servicio.titulo}</strong></h4>
                    <p class="card-text m-0 p-0">${servicio.descripcion}.</p>
                    <button onclick="detalle_servicio(${servicio.id})" type="button" class="btn btn_mas" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Ver más
                    </button>
                </figcaption>
            </figure>
        `;

        contenedor.appendChild(articulo);
    });
}

function detalle_servicio(id) {
    loading_spin(true);

    const db = JSON.parse(localStorage.getItem("db"));
    const detalle = db.descripcion_servicio.find(d => d.fk_servicio === id);

    if (detalle) {
        document.getElementById("titulo").innerHTML = detalle.titulo;
        document.getElementById("modalBody").innerHTML = detalle.descripcion;
        document.getElementById("imagen").src = detalle.imagen;
    }

    // Mostrar el modal con Bootstrap después de 1 segundo
    setTimeout(function() {
        loading_spin(false);
    }, 1000);
}


window.onload = function () {
    inicializarBaseDeDatos();
    cargarServicios();
};