// src/pages/PoliticaPrivacidad.jsx
import { Link } from "react-router-dom"

export default function PoliticaPrivacidad() {
  return (
    <div className="bg-zinc-950 text-zinc-50">
      <section className="max-w-4xl mx-auto px-4 pt-10 pb-16 md:pt-16 md:pb-20">
        <p className="kv-eyebrow text-zinc-500 mb-3">
          Legal
        </p>
        <h1 className="kv-page-title mb-4">
          Política de privacidad
        </h1>
        <p className="kv-lede max-w-2xl">
          Explicación transparente sobre cómo se tratan los datos personales cuando contactas o solicitas servicios.
        </p>

        <div className="mt-8 kv-glass-soft rounded-3xl px-6 py-8 md:px-8 md:py-10 space-y-8">
          <div className="space-y-3">
            <h2 className="kv-section-title text-zinc-100 text-xl md:text-2xl">
              Responsable del tratamiento
            </h2>
            <ul className="space-y-2 text-zinc-300">
              <li>Responsable: Io Elena Rodríguez Otero</li>
              <li>Correo de contacto: hola@kulmenvisuals.com</li>
              <li>NIF/CIF: 77545770M</li>
              <li>Domicilio: Ribeira de Abaixo 7, A Estrada, 36685.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="kv-section-title text-zinc-100 text-xl md:text-2xl">
              Finalidad del tratamiento
            </h2>
            <p className="kv-body-muted">
              Los datos personales se recogen para gestionar consultas, presupuestos, contrataciones y comunicaciones
              relacionadas con los servicios audiovisuales. Solo se utilizan para mantener el contacto profesional y
              ofrecer información relevante sobre proyectos.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="kv-section-title text-zinc-100 text-xl md:text-2xl">
              Legitimación
            </h2>
            <p className="kv-body-muted">
              La base legal para el tratamiento es el consentimiento del interesado y, en su caso, la ejecución de un
              contrato o la aplicación de medidas precontractuales.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="kv-section-title text-zinc-100 text-xl md:text-2xl">
              Conservación de los datos
            </h2>
            <p className="kv-body-muted">
              Los datos se conservarán durante el tiempo necesario para gestionar la relación profesional o mientras
              existan obligaciones legales. Después, se eliminarán de forma segura.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="kv-section-title text-zinc-100 text-xl md:text-2xl">
              Destinatarios
            </h2>
            <p className="kv-body-muted">
              No se cederán datos a terceros salvo obligación legal. Pueden existir proveedores técnicos (hosting,
              correo electrónico o herramientas de gestión) que acceden a los datos únicamente para prestar el servicio.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="kv-section-title text-zinc-100 text-xl md:text-2xl">
              Derechos de las personas usuarias
            </h2>
            <p className="kv-body-muted">
              Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad
              enviando una solicitud a hola@kulmenvisuals.com. También puedes presentar una reclamación ante la Agencia
              Española de Protección de Datos.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="kv-section-title text-zinc-100 text-xl md:text-2xl">
              Seguridad de la información
            </h2>
            <p className="kv-body-muted">
              Se aplican medidas técnicas y organizativas razonables para proteger los datos personales frente a accesos
              no autorizados, pérdidas o alteraciones.
            </p>
          </div>
        </div>

        <div className="mt-10 kv-glass rounded-3xl px-6 py-6 md:px-8 md:py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="kv-body-muted max-w-xl">
            Si tienes dudas sobre esta política o sobre tus derechos, puedes contactarme directamente.
          </p>
          <Link to="/contacto" className="kv-button-primary kv-button-accent">
            Contactar
          </Link>
        </div>
      </section>
    </div>
  )
}
