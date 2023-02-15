import { ExperiencieModule } from "../ExperienceModule/ExperiencieModule";
import "./experience.css";

export const Experience = () => {
  return (

    <section className="experience-container">
      <h3 className="experience-title-container">Experiencia</h3>
      <ExperiencieModule
        rol="Soporte técnico nivel 2"
        company="ARUS"
        description={[
          "Administración y soporte de dispositivos móviles de más de 400 tiendas de retail a nivel nacional",
          "Manejo de plataforma MDM (Desktop Central) para control de inventario y administración de dispositivos móviles a cargo del funcionamiento general de la tienda.",
          "Atención de incidentes y solicitudes escalados por la mesa de servicios.",
          "Configuración de equipos para tiendas tiendas.",
          "Diagnóstico de hardware y software, así como la realización del mantenimiento preventivo y correctivo de equipos.",
          "Cooperación en proyectos nuevos.",
        ]}
        time="2019 - Presente"
      />
      <ExperiencieModule
        rol="Soporte técnico nivel 1 (Aprendiz)"
        company="COMFAMA"
        description={['Administración de inventario de equipos.',
        'Formateo, actualización y configuración de equipos.',
        'Trámite de garantías.']}
        time="2019 - 6 meses"
      />
  </section>

  );
};