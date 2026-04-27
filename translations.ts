export type Language = 'en' | 'es';

export const translations: Record<Language, any> = {
  en: {
    dir: 'ltr',
    title: 'Election Observation Form',
    subtitle: 'International Observation Mission',

    nameLabel: 'Name',
    countryLabel: 'Country',
    locationLabel: 'Location',
    stationsLabel: 'Polling Stations',

    submitBtn: 'Submit',
    backBtn: 'Back',
    draftBtn: 'Save Draft',

    observedText: 'Observed',
    notObservedText: 'Not Observed',
    pendingText: 'Pending',

    observerInfoTitle: 'Observer Information',
    finalCommentsLabel: 'Final Comments',
    finalCommentsPlaceholder: 'Write your final observations here...',

    viewRawBtn: 'View Raw Data',
    exportJsonBtn: 'Export JSON',
    printBtn: 'Print',

    footerCouncil: 'National Electoral Council · Colombia',
    footerCopyright: '© 2026 International Observation Mission',

    questionList: [
      'Was the polling station open on time?',
      'Were all materials available?',
      'Was the voting process transparent?',
      'Were voters treated fairly?',
      'Was there any intimidation observed?',
      'Were officials properly trained?',
      'Was voter identification checked?',
      'Were ballots handled correctly?',
      'Was counting done properly?',
      'Were results recorded accurately?',
      'Was security maintained?',
      'Were observers allowed access?',
      'Was media present?',
      'Was secrecy of vote ensured?',
      'Were complaints handled properly?',
      'Was accessibility provided?',
      'Were polling booths adequate?',
      'Was there any violence?',
      'Was the process efficient?',
      'Were closing procedures followed?',
      'Were ballots sealed properly?',
      'Were results transmitted securely?',
      'Was transparency maintained?',
      'Overall was the election fair?'
    ]
  },

  es: {
    dir: 'ltr',
    title: 'Formulario de Observación Electoral',
    subtitle: 'Misión de Observación Internacional',

    nameLabel: 'Nombre',
    countryLabel: 'País',
    locationLabel: 'Ubicación',
    stationsLabel: 'Mesas',

    submitBtn: 'Enviar',
    backBtn: 'Volver',
    draftBtn: 'Guardar borrador',

    observedText: 'Observado',
    notObservedText: 'No Observado',
    pendingText: 'Pendiente',

    observerInfoTitle: 'Información del Observador',
    finalCommentsLabel: 'Comentarios Finales',
    finalCommentsPlaceholder: 'Escriba aquí sus conclusiones finales...',

    viewRawBtn: 'Ver Datos',
    exportJsonBtn: 'Exportar JSON',
    printBtn: 'Imprimir',

    footerCouncil: 'Consejo Nacional Electoral · Colombia',
    footerCopyright: '© 2026 Misión de Observación Internacional',

    questionList: [
      '¿La mesa abrió a tiempo?',
      '¿Todos los materiales estaban disponibles?',
      '¿El proceso de votación fue transparente?',
      '¿Los votantes fueron tratados justamente?',
      '¿Hubo intimidación?',
      '¿Los funcionarios estaban capacitados?',
      '¿Se verificó la identificación?',
      '¿Las papeletas fueron manejadas correctamente?',
      '¿El conteo fue correcto?',
      '¿Los resultados fueron registrados correctamente?',
      '¿Se mantuvo la seguridad?',
      '¿Se permitió el acceso a observadores?',
      '¿Hubo presencia de medios?',
      '¿Se garantizó el voto secreto?',
      '¿Se gestionaron bien las quejas?',
      '¿Hubo accesibilidad?',
      '¿Las cabinas eran adecuadas?',
      '¿Hubo violencia?',
      '¿El proceso fue eficiente?',
      '¿Se siguieron los procedimientos de cierre?',
      '¿Las papeletas fueron selladas?',
      '¿Se transmitieron los resultados de forma segura?',
      '¿Se mantuvo la transparencia?',
      '¿En general fue una elección justa?'
    ]
  }
};
