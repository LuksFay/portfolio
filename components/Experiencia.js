export default function Experiencia() {
  const section = document.createElement('section');
  section.innerHTML = `
    <h2>Experiencia Laboral</h2>

    <p>
      <span class="cargo">Paraiso Tour</span>
      <span class="fecha">12/2024 – 03/2025</span><br />
      <ul>
        <li>Atención en oficina a coordinadores y guías vía WhatsApp</li>
        <li>Organización de Excel con cronograma de excursiones</li>
        <li>Recepción de pagos y entrega de tickets</li>
        <li>Guía de excursiones turísticas</li>
      </ul>
    </p>

    <p>
      <span class="cargo">Museo dos Carros</span>
      <span class="fecha">03/2023</span><br />
      <ul>
        <li>Atención al público</li>
        <li>Llamadas a clientes y venta persuasiva de adicionales en áreas de juegos y simuladores</li>
      </ul>
    </p>

    <p>
      <span class="cargo">Café Cultural</span>
      <span class="fecha">02/2023</span><br />
      <ul>
        <li>Preparación de café y otras bebidas calientes</li>
        <li>Manejo básico de máquina de espresso</li>
        <li>Atención al cliente y servicio en barra</li>
        <li>Organización del espacio y limpieza</li>
      </ul>
    </p>

    <p>
      <span class="cargo">Auxiliar de Cocina</span>
      <span class="lugar">Infarta Madalena, Mariquita y Bonna Massas - Camboriú</span>
      <span class="fecha">12/2022 – 01/2023</span><br />
      <ul>
        <li>Apoyo en la cocina en la preparación de platos</li>
        <li>Organización y limpieza del área de trabajo</li>
        <li>Manejo de utensilios y apoyo al chef</li>
      </ul>
    </p>

    <p>
      <span class="cargo">Gerente de mini mercado y lotería</span>
      <span class="lugar">Rapipago / Santa Fe Servicios, Rosario, Argentina</span>
      <span class="fecha">09/2020 – 01/2022</span><br />
      <ul>
        <li>Control de caja e impuestos</li>
        <li>Gestión de stock y proveedores</li>
        <li>Atención al cliente</li>
        <li>Gestión de tareas para el equipo</li>
      </ul>
    </p>

    <p>
      <span class="cargo">Guía y Coordinador de Turismo Internacional Sudamericano</span>
      <span class="fecha">12/2016 – 07/2018</span><br />
      <ul>
        <li>Coordinación y guía de grupos de 30 a 50 personas</li>
        <li>Viajes de una semana o más dentro de Argentina y países limítrofes como Chile, Uruguay, Paraguay y Brasil</li>
        <li>Organización de itinerarios y logística general del grupo</li>
      </ul>
    </p>

    <p>
      <span class="cargo">Lavadero de Autos - Emprendimiento Familiar Autogestionado</span>
      <span class="lugar">Rosario</span>
      <span class="fecha">2018</span><br />
      <ul>
        <li>Buen mantenimiento y cuidado detallado de vehículos</li>
        <li>Administración de turnos y atención personalizada</li>
        <li>Gestión operativa y atención al cliente</li>
      </ul>
    </p>
  `;
  return section;
}

