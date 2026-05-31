import {
  PageHeader,
  BitacoraSection,
  BitacoraCard,
  ComparisonCard,
  TimelineItem,
  TechStack,
} from "../components/bitacora/BitacoraComponents";
import {
  introductionText,
  objectives,
  evolutionItems,
  roles,
  features,
  timelineItems,
  techStack,
} from "../data/bitacoraData";

function Bitacora() {
  return (
    <section className="bitacora-page">
      <PageHeader
        title="BITÁCORA DEL PROYECTO"
        description="Evolución del TP1 hacia una SPA desarrollada con React."
      />

      <BitacoraSection title="INTRODUCCIÓN">
        <BitacoraCard className="single-card">
          <p>{introductionText}</p>
        </BitacoraCard>
      </BitacoraSection>

      <BitacoraSection title="OBJETIVOS DE LA MIGRACIÓN">
        <div className="bitacora-grid">
          {objectives.map((objective) => (
            <BitacoraCard
              key={objective.title}
              icon={objective.icon}
              title={objective.title}
            >
              <p>{objective.description}</p>
            </BitacoraCard>
          ))}
        </div>
      </BitacoraSection>

      <BitacoraSection title="EVOLUCIÓN DEL PROYECTO">
        <div className="comparison-grid">
          {evolutionItems.map((item) => (
            <ComparisonCard
              key={item.title}
              title={item.title}
              items={item.items}
            />
          ))}
        </div>
      </BitacoraSection>

      <BitacoraSection title="FLUJO DE TRABAJO Y ROLES">
        <BitacoraCard className="single-card">
          <h3>Gestión de Tareas (Jira)</h3>
          <p>
            Utilizamos tableros ágiles en Jira para organizar las tareas.
            Manejamos historias de usuario y tareas asignadas, moviéndolas por
            los estados "Por hacer", "En progreso", "En revisión" y "Listo".
            Esto nos permitió distribuir la carga equitativamente.
          </p>

          <h3>Control de Versiones (GitFlow)</h3>
          <p>
            En GitHub implementamos un flujo de trabajo basado en ramas
            (GitFlow). Mantuvimos la rama "master" para la versión estable del
            proyecto, y cada integrante creó ramas individuales (como las ramas
            "Cristian", "lorena", "cristina") para desarrollar sus componentes
            de forma aislada antes de fusionar el código.
          </p>

          <h3>Roles del Equipo y Contribuciones</h3>
          <ul>
            {roles.map((role) => (
              <li key={role.name}>
                <strong>{role.name}:</strong> {role.description}
              </li>
            ))}
          </ul>
        </BitacoraCard>
      </BitacoraSection>

      <BitacoraSection title="FUNCIONALIDADES IMPLEMENTADAS">
        <div className="bitacora-grid">
          {features.map((feature) => (
            <BitacoraCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
            >
              <p>{feature.description}</p>
            </BitacoraCard>
          ))}
        </div>
      </BitacoraSection>

      <BitacoraSection title="PROBLEMAS ENCONTRADOS">
        <div className="timeline">
          {timelineItems.map((item) => (
            <TimelineItem
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </BitacoraSection>

      <BitacoraSection title="TECNOLOGÍAS UTILIZADAS">
        <TechStack items={techStack} />
      </BitacoraSection>

      <BitacoraSection title="USO DE INTELIGENCIA ARTIFICIAL">
        <BitacoraCard className="single-card">
          <p>
            Se utilizaron herramientas IA como ChatGPT, GitHub Copilot y
            OpenCode para debugging, planificación, asistencia en React y
            mejoras de arquitectura.
          </p>
        </BitacoraCard>
      </BitacoraSection>

      <BitacoraSection title="CONCLUSIÓN">
        <BitacoraCard className="single-card">
          <p>
            La migración permitió transformar una estructura estática en una SPA
            moderna, modular y escalable, mejorando la experiencia de usuario y
            la organización general del proyecto.
          </p>
        </BitacoraCard>
      </BitacoraSection>
    </section>
  );
}

export default Bitacora;
