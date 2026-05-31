import {
  FaPuzzlePiece,
  FaCompass,
  FaDesktop,
  FaLayerGroup,
  FaHouse,
  FaDatabase,
  FaCloud,
  FaImages,
} from "react-icons/fa6";

function Bitacora() {
  return (
    <section className="bitacora-page">

      {/* HEADER */}
      <header className="bitacora-hero">
        <h1>BITÁCORA DEL PROYECTO</h1>

        <p>
          Evolución del TP1 hacia una SPA desarrollada con React.
        </p>
      </header>

      {/* INTRODUCCIÓN */}
      <section className="bitacora-section">
        <h2>INTRODUCCIÓN</h2>

        <div className="bitacora-card single-card">
          <div className="card-content">
            <p>
              Este proyecto corresponde a la migración del Trabajo
              Práctico 1 realizado originalmente con HTML, CSS y
              JavaScript hacia una arquitectura moderna basada en React.
            </p>
          </div>
        </div>
      </section>

      {/* OBJETIVOS */}
      <section className="bitacora-section">
        <h2>OBJETIVOS DE LA MIGRACIÓN</h2>

        <div className="bitacora-grid">

          <article className="bitacora-card">
            <div className="card-icon">
              <FaPuzzlePiece />
            </div>

            <div className="card-content">
              <h3>COMPONENTIZACIÓN</h3>

              <p>
                Reorganizar el proyecto utilizando componentes reutilizables.
              </p>
            </div>
          </article>

          <article className="bitacora-card">
            <div className="card-icon">
              <FaCompass />
            </div>

            <div className="card-content">
              <h3>REACT ROUTER</h3>

              <p>
                Implementar navegación SPA dinámica.
              </p>
            </div>
          </article>

          <article className="bitacora-card">
            <div className="card-icon">
              <FaDesktop />
            </div>

            <div className="card-content">
              <h3>RESPONSIVE DESIGN</h3>

              <p>
                Adaptar el sistema a múltiples dispositivos.
              </p>
            </div>
          </article>

          <article className="bitacora-card">
            <div className="card-icon">
              <FaLayerGroup />
            </div>

            <div className="card-content">
              <h3>ESCALABILIDAD</h3>

              <p>
                Mejorar la organización y mantenimiento del código.
              </p>
            </div>
          </article>

        </div>
      </section>

      {/* EVOLUCIÓN */}
      <section className="bitacora-section">
        <h2>EVOLUCIÓN DEL PROYECTO</h2>

        <div className="comparison-grid">

          <div className="comparison-card">
            <h3>TP1</h3>

            <ul>
              <li>HTML estático</li>
              <li>CSS tradicional</li>
              <li>JavaScript Vanilla</li>
              <li>Navegación entre páginas</li>
            </ul>
          </div>

          <div className="comparison-card">
            <h3>TP2</h3>

            <ul>
              <li>React + Vite</li>
              <li>Arquitectura por componentes</li>
              <li>React Router</li>
              <li>Dashboard SPA</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ORGANIZACIÓN Y ROLES */}
      <section className="bitacora-section">
        <h2>FLUJO DE TRABAJO Y ROLES</h2>

        <div className="bitacora-card single-card">
          <div className="card-content">
            <h3>Gestión de Tareas (Jira)</h3>
            <p>
              Utilizamos tableros ágiles en Jira para organizar las tareas.
              Manejamos historias de usuario y tareas asignadas, moviéndolas por los estados
              "Por hacer", "En progreso", "En revisión" y "Listo". Esto nos permitió distribuir la carga equitativamente.
            </p>

            <h3>Control de Versiones (GitFlow)</h3>
            <p>
              En GitHub implementamos un flujo de trabajo basado en ramas (GitFlow).
              Mantuvimos la rama "master" para la versión estable del proyecto, y cada integrante creó ramas individuales
              (como las ramas "Cristian", "lorena", "cristina") para desarrollar sus componentes de forma aislada antes de fusionar el código.
            </p>

            <h3>Roles del Equipo y Contribuciones</h3>
            <ul>
              <li><strong>Cristian:</strong> Arquitectura base de React, enrutamiento general, consumo de la API externa y maquetación principal del Dashboard.</li>
              <li><strong>Lorena:</strong> Desarrollo del componente de Perfiles Dinámicos, integración del carrusel, barras de progreso de tecnologías y ajustes de responsive design.</li>
              <li><strong>Gisela:</strong> Setup inicial del proyecto (Vite), maquetación inicial de la Bitácora, desarrollo de la sección Hobbies y estructuración del README.</li>
              <li><strong>Cristina:</strong> Algoritmo de ordenamiento para el explorador JSON, estado interactivo y Zoom del Lightbox de la galería. Documentación técnica final de la Bitácora y sus estilos.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FUNCIONALIDADES */}
      <section className="bitacora-section">
        <h2>FUNCIONALIDADES IMPLEMENTADAS</h2>

        <div className="bitacora-grid">

          <article className="bitacora-card">
            <div className="card-icon">
              <FaHouse />
            </div>

            <div className="card-content">
              <h3>DASHBOARD HOME</h3>

              <p>
                Grilla dinámica de integrantes con navegación.
              </p>
            </div>
          </article>

          <article className="bitacora-card">
            <div className="card-icon">
              <FaDatabase />
            </div>

            <div className="card-content">
              <h3>JSON EXPLORER</h3>

              <p>
                Exploración dinámica de datos locales.
              </p>
            </div>
          </article>

          <article className="bitacora-card">
            <div className="card-icon">
              <FaCloud />
            </div>

            <div className="card-content">
              <h3>API EXPLORER</h3>

              <p>
                Consumo de API externa con paginación.
              </p>
            </div>
          </article>

          <article className="bitacora-card">
            <div className="card-icon">
              <FaImages />
            </div>

            <div className="card-content">
              <h3>GALERÍA INTERACTIVA</h3>

              <p>
                Grid responsive con Lightbox y navegación.
              </p>
            </div>
          </article>

        </div>
      </section>

      {/* PROBLEMAS */}
      <section className="bitacora-section">
        <h2>PROBLEMAS ENCONTRADOS</h2>

        <div className="timeline">

          <article className="timeline-item">
            <h3>Migración de Assets</h3>

            <p>
              Fue necesario adaptar imágenes y rutas heredadas
              del TP1 al entorno Vite.
            </p>
          </article>

          <article className="timeline-item">
            <h3>Responsive Sidebar</h3>

            <p>
              Se corrigieron errores relacionados al menú hamburguesa
              y navegación mobile.
            </p>
          </article>

          <article className="timeline-item">
            <h3>Rutas Dinámicas</h3>

            <p>
              Se implementó validación para evitar errores
              en perfiles inexistentes.
            </p>
          </article>

        </div>
      </section>

      {/* TECNOLOGÍAS */}
      <section className="bitacora-section">
        <h2>TECNOLOGÍAS UTILIZADAS</h2>

        <div className="tech-stack">
          <span>React</span>
          <span>Vite</span>
          <span>JavaScript</span>
          <span>CSS3</span>
          <span>React Router</span>
          <span>React Icons</span>
        </div>
      </section>

      {/* IA */}
      <section className="bitacora-section">
        <h2>USO DE INTELIGENCIA ARTIFICIAL</h2>

        <div className="bitacora-card single-card">
          <div className="card-content">
            <p>
              Se utilizaron herramientas IA como ChatGPT,
              GitHub Copilot y OpenCode para debugging,
              planificación, asistencia en React y mejoras
              de arquitectura.
            </p>
          </div>
        </div>
      </section>

      {/* CONCLUSIÓN */}
      <section className="bitacora-section">
        <h2>CONCLUSIÓN</h2>

        <div className="bitacora-card single-card">
          <div className="card-content">
            <p>
              La migración permitió transformar una estructura
              estática en una SPA moderna, modular y escalable,
              mejorando la experiencia de usuario y la organización
              general del proyecto.
            </p>
          </div>
        </div>
      </section>

    </section>
  );
}

export default Bitacora;