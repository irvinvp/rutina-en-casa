"use strict";
// Alternativas domésticas: elegir una rutina por sesión, sin sumar ambas.
(() => {
  const routine = window.ROUTINE;
  const additions = {
  "adductionPause": {
    "cue": "Se mueve la pierna de abajo. La pausa añade control, no hace falta elevarla más.",
    "dose": "2 × 10–15",
    "easier": "Haz la versión continua con menos recorrido.",
    "muscle": "Aductores · cara interna del muslo",
    "name": "Aducción de cadera con pausa",
    "pattern": "Aducción de cadera",
    "replaces": "Aducción de cadera de lado",
    "rest": "60–90 s",
    "steps": [
      "Túmbate de lado y cruza la pierna superior por delante, con el pie apoyado.",
      "Eleva la pierna inferior unos centímetros y sostén dos segundos sin mover la pelvis.",
      "Baja con control y repite antes de cambiar de lado."
    ],
    "unit": "por lado · pausa de 2 s"
  },
  "birdPause": {
    "cue": "El vídeo enseña el movimiento base; aquí cambia el tiempo de la pausa.",
    "dose": "2 × 5–6",
    "easier": "Sostén solo 2–3 segundos o mueve una extremidad cada vez.",
    "muscle": "Tronco · glúteos · estabilidad",
    "name": "Bird dog con pausa larga",
    "pattern": "Estabilidad contralateral",
    "replaces": "Bird dog con pausa corta",
    "rest": "45–60 s",
    "steps": [
      "Colócate a cuatro apoyos, con manos bajo hombros y rodillas bajo caderas.",
      "Alarga un brazo y la pierna contraria sin girar la pelvis y sostén cinco segundos mientras respiras.",
      "Vuelve al centro y alterna. Detén la serie cuando pierdas el control."
    ],
    "unit": "por lado · pausa de 5 s"
  },
  "cardioGuided": {
    "cue": "Debes poder hablar, pero no cantar. Un vídeo de diez minutos no siempre equivale a diez minutos moderados.",
    "dose": "Bloques de 10 min",
    "easier": "Empieza con un bloque corto, reduce el ritmo y amplía el tiempo poco a poco.",
    "kind": "cardio",
    "muscle": "Resistencia cardiovascular · coordinación",
    "name": "Cardio guiado en casa",
    "pattern": "Actividad aeróbica",
    "rest": "Pausa según necesidad",
    "steps": [
      "Despeja una zona del suelo y sigue la sesión de la British Heart Foundation a una intensidad que puedas controlar.",
      "Adapta cualquier salto a un paso lateral o marcha. Haz el bloque con las manos vacías.",
      "Repite bloques de movimiento o añade marcha hasta acumular el tiempo moderado previsto; no cuentes las pausas suaves."
    ],
    "unit": "acumula 20–30 min moderados al empezar"
  },
  "curlAlternate": {
    "cue": "Mantén las muñecas rectas y las costillas sobre la pelvis.",
    "dose": "2 × 10–15",
    "easier": "Usa menos peso o haz un brazo cada vez.",
    "muscle": "Bíceps",
    "name": "Curl de bíceps",
    "pattern": "Flexión del codo",
    "replaces": "Curl martillo",
    "rest": "60–90 s",
    "steps": [
      "De pie, mantén las mancuernas a los lados, con las palmas hacia delante.",
      "Flexiona los codos sin adelantarlos mucho ni balancear el tronco.",
      "Baja despacio hasta extender cómodamente los brazos. Puedes alternar los lados."
    ],
    "unit": "por brazo"
  },
  "deadbugAlternate": {
    "cue": "Detén el recorrido antes de que la espalda se arquee o contengas la respiración.",
    "dose": "2 × 6–10",
    "easier": "Mantén los brazos quietos y toca el suelo con un talón cada vez.",
    "muscle": "Abdomen · control del tronco",
    "name": "Dead bug",
    "pattern": "Estabilidad anterior del tronco",
    "replaces": "Plancha frontal",
    "rest": "45–60 s",
    "steps": [
      "Boca arriba, levanta los brazos y coloca caderas y rodillas aproximadamente a 90°.",
      "Al exhalar, aleja lentamente un brazo y la pierna contraria sin perder la posición del tronco.",
      "Vuelve al centro y alterna los lados."
    ],
    "unit": "por lado"
  },
  "floorAlternating": {
    "cue": "Mantén pelvis y hombros apoyados; no gires el tronco hacia el brazo que baja.",
    "dose": "3 × 8–12",
    "easier": "Reduce el peso. Si solo tienes una mancuerna, completa un brazo y luego el otro.",
    "muscle": "Pecho · tríceps",
    "name": "Press alterno en el suelo",
    "pattern": "Empuje horizontal",
    "replaces": "Press de pecho en el suelo",
    "rest": "90–120 s",
    "steps": [
      "Túmbate con rodillas flexionadas y una mancuerna en cada mano. Coloca ambos brazos extendidos sobre el pecho.",
      "Baja una mancuerna hasta que el brazo toque suavemente el suelo, mientras mantienes la otra arriba.",
      "Empuja hasta recuperar la posición y alterna el brazo. Cuenta las repeticiones de cada lado."
    ],
    "unit": "por brazo"
  },
  "flyPause": {
    "cue": "La pausa debe ser estable; reduce el peso si necesitas impulso.",
    "dose": "2 × 12–20",
    "easier": "Quita la pausa y reduce el recorrido.",
    "muscle": "Deltoides posterior · espalda alta",
    "name": "Aperturas inversas con pausa",
    "pattern": "Abducción horizontal del hombro",
    "replaces": "Aperturas inversas convencionales",
    "rest": "60–90 s",
    "steps": [
      "Inclina el tronco desde las caderas, con rodillas suaves y mancuernas ligeras bajo los hombros.",
      "Abre los brazos a los lados y conserva la posición un segundo sin encoger los hombros.",
      "Baja lentamente. Mantén quieto el tronco durante toda la serie."
    ],
    "unit": "repeticiones · pausa de 1 s"
  },
  "frontSquat": {
    "cue": "Las rodillas acompañan la dirección de los pies; no fuerces la profundidad.",
    "dose": "3 × 8–15",
    "easier": "Utiliza una sola mancuerna al pecho o haz la sentadilla sin peso.",
    "muscle": "Cuádriceps · glúteos",
    "name": "Sentadilla frontal con mancuernas",
    "pattern": "Dominante de rodilla",
    "replaces": "Sentadilla goblet",
    "rest": "90–120 s",
    "steps": [
      "Lleva una mancuerna a cada hombro y coloca los pies en una separación cómoda.",
      "Flexiona rodillas y caderas mientras mantienes el pecho estable y el apoyo de todo el pie.",
      "Baja hasta donde controles la postura y empuja el suelo para volver a ponerte de pie."
    ],
    "unit": "repeticiones"
  },
  "hammerAlternate": {
    "cue": "Mantén los codos cerca del tronco y las muñecas alineadas.",
    "dose": "2 × 10–15",
    "easier": "Usa menos peso o trabaja un brazo cada vez.",
    "muscle": "Bíceps · braquial · antebrazos",
    "name": "Curl martillo",
    "pattern": "Flexión del codo",
    "replaces": "Curl de bíceps supinado",
    "rest": "60–90 s",
    "steps": [
      "De pie, sujeta las mancuernas con las palmas mirando hacia el cuerpo.",
      "Flexiona los codos conservando ese agarre y sin balancearte.",
      "Desciende con control. Puedes hacer ambos brazos o alternarlos."
    ],
    "unit": "por brazo"
  },
  "kickstandRDL": {
    "cue": "El pie trasero ayuda al equilibrio. Evita convertirlo en una sentadilla.",
    "dose": "3 × 8–12",
    "easier": "Acerca los pies, reduce el recorrido o vuelve al rumano bilateral.",
    "muscle": "Isquiotibiales · glúteos",
    "name": "Peso muerto rumano escalonado",
    "pattern": "Bisagra de cadera",
    "replaces": "Peso muerto rumano bilateral",
    "rest": "90–120 s",
    "steps": [
      "Coloca un pie delante y el otro algo detrás, apoyado sobre la parte delantera. Carga la mayor parte del peso sobre la pierna adelantada.",
      "Con las mancuernas cerca de las piernas y una ligera flexión de rodilla, lleva la cadera hacia atrás.",
      "Sube extendiendo la cadera sin girar la pelvis; completa ambos lados."
    ],
    "unit": "por lado"
  },
  "kneelingPress": {
    "cue": "Conserva el tronco erguido; no te inclines hacia un lado ni arquees la cintura.",
    "dose": "2 × 8–12",
    "easier": "Usa poco peso y acolcha la rodilla. Si ese apoyo molesta, haz el press de pie.",
    "muscle": "Hombro · tríceps · estabilidad",
    "name": "Press de hombro en media rodilla",
    "pattern": "Empuje vertical",
    "replaces": "Press de hombros de pie",
    "rest": "90–120 s",
    "steps": [
      "Apoya una rodilla en el suelo y el otro pie delante. Sujeta la mancuerna en el lado de la rodilla apoyada.",
      "Activa abdomen y glúteos y empuja la mancuerna hacia arriba en un recorrido cómodo.",
      "Baja hasta el hombro y completa la serie; cambia de rodilla y brazo."
    ],
    "unit": "por lado"
  },
  "plankAlternate": {
    "cue": "Evita hundir la cintura o elevar demasiado la cadera.",
    "dose": "2 × 20–40 s",
    "easier": "Apoya las rodillas o haz series más cortas.",
    "muscle": "Abdomen · estabilidad",
    "name": "Plancha frontal",
    "pattern": "Estabilidad anterior del tronco",
    "replaces": "Dead bug",
    "rest": "45–60 s",
    "steps": [
      "Apoya los antebrazos con los codos debajo de los hombros y extiende las piernas.",
      "Eleva el cuerpo manteniendo alineados hombros, cadera y tobillos.",
      "Respira con normalidad y termina la serie cuando ya no puedas mantener la posición."
    ],
    "unit": "por serie"
  },
  "pushupClose": {
    "cue": "Ajusta la separación de manos a un recorrido cómodo para las muñecas y los hombros.",
    "dose": "2 × 6–12",
    "easier": "Hazlas contra una pared o con las rodillas apoyadas.",
    "muscle": "Pecho · tríceps · abdomen",
    "name": "Flexiones de agarre cerrado",
    "pattern": "Empuje horizontal",
    "replaces": "Flexiones convencionales",
    "rest": "90–120 s",
    "steps": [
      "Apoya las manos cerca de la anchura de los hombros; no necesitas juntar los dedos formando un diamante.",
      "Baja el pecho mientras los codos se desplazan cerca del tronco y la cadera acompaña el movimiento.",
      "Empuja hasta extender los brazos sin perder la línea del cuerpo."
    ],
    "unit": "repeticiones"
  },
  "reverseLunge": {
    "cue": "Da un paso que permita mantener el equilibrio; no hace falta que la rodilla trasera toque el suelo.",
    "dose": "3 × 8–12",
    "easier": "Vuelve a la sentadilla dividida sin cambiar la posición de los pies, con apoyo ligero en una pared.",
    "muscle": "Cuádriceps · glúteos",
    "name": "Zancada hacia atrás",
    "pattern": "Dominante de rodilla",
    "replaces": "Sentadilla dividida estática",
    "rest": "90–120 s",
    "steps": [
      "Empieza de pie, con los pies separados al ancho de las caderas. Aprende primero sin mancuernas.",
      "Da un paso atrás y flexiona las rodillas, manteniendo firme el apoyo del pie delantero.",
      "Empuja el suelo para volver al inicio. Completa el número indicado por pierna."
    ],
    "unit": "por pierna"
  },
  "rowSupinated": {
    "cue": "Usa menos peso si necesitas impulsarte o la espalda deja de mantenerse estable.",
    "dose": "3 × 10–15",
    "easier": "Vuelve al remo a una mano apoyando la otra en tu propio muslo si te cuesta sostener el tronco.",
    "muscle": "Espalda · bíceps",
    "name": "Remo inclinado con agarre supino",
    "pattern": "Tracción horizontal",
    "replaces": "Remo a una mano",
    "rest": "90–120 s",
    "steps": [
      "De pie, flexiona ligeramente las rodillas y lleva la cadera atrás. Sujeta las mancuernas con palmas hacia delante.",
      "Con el tronco estable, lleva los codos hacia atrás y las mancuernas hacia los lados de la cintura.",
      "Desciende despacio hasta extender cómodamente los brazos, conservando la inclinación."
    ],
    "unit": "repeticiones"
  },
  "scaption": {
    "cue": "No encogas los hombros. Trabaja con un peso ligero y un recorrido cómodo.",
    "dose": "2 × 12–20",
    "easier": "Practica sin peso o levanta menos los brazos.",
    "muscle": "Hombros · control escapular",
    "name": "Elevaciones en el plano escapular",
    "pattern": "Elevación del hombro",
    "replaces": "Elevaciones laterales",
    "rest": "60–90 s",
    "steps": [
      "De pie, sujeta mancuernas ligeras con los pulgares orientados hacia arriba.",
      "Eleva los brazos en diagonal, aproximadamente 30° por delante de los lados, hasta una altura cómoda cercana al hombro.",
      "Baja con control y conserva una ligera flexión de los codos."
    ],
    "unit": "repeticiones"
  },
  "sideKnees": {
    "cue": "Esta variante reduce la palanca. Sostén la posición sin hundir el hombro ni girar la pelvis.",
    "dose": "2 × 20–40 s",
    "easier": "Acorta el tiempo y descansa entre intentos.",
    "muscle": "Abdomen lateral · estabilidad",
    "name": "Plancha lateral sobre rodillas",
    "pattern": "Estabilidad lateral",
    "replaces": "Plancha lateral con piernas extendidas",
    "rest": "45–60 s",
    "steps": [
      "Túmbate de lado con rodillas flexionadas y el antebrazo apoyado, con el codo debajo del hombro.",
      "Eleva la cadera formando una línea estable entre hombro, cadera y rodilla apoyada.",
      "Respira durante el tiempo indicado y cambia de lado."
    ],
    "unit": "por lado"
  },
  "singleBridge": {
    "cue": "Mantén las dos caderas a la misma altura. Termina antes de arquear la espalda.",
    "dose": "2 × 8–15",
    "easier": "Hazlo con los dos pies o eleva menos la pelvis.",
    "muscle": "Glúteos · isquiotibiales",
    "name": "Puente de glúteos a una pierna",
    "pattern": "Extensión de cadera",
    "replaces": "Puente de glúteos bilateral",
    "rest": "60–90 s",
    "steps": [
      "Túmbate boca arriba con un pie apoyado y eleva la otra pierna manteniendo la rodilla flexionada.",
      "Empuja el suelo con el pie apoyado y eleva la pelvis sin girarla.",
      "Baja lentamente, completa las repeticiones y cambia de lado."
    ],
    "unit": "por lado"
  },
  "singleCalf": {
    "cue": "Se hace sobre el suelo, sin escalón. Evita rebotar.",
    "dose": "2 × 10–20",
    "easier": "Reparte el peso entre los dos pies y progresa gradualmente hacia una pierna.",
    "muscle": "Pantorrillas",
    "name": "Elevación de talón a una pierna",
    "pattern": "Flexión plantar",
    "replaces": "Elevaciones de talones con dos pies",
    "rest": "60–90 s",
    "steps": [
      "De pie sobre suelo firme, toca una pared para equilibrarte y levanta un pie.",
      "Eleva el talón de la pierna apoyada sin inclinar el tobillo hacia los lados.",
      "Haz una pausa breve, vuelve al suelo con control y cambia de pierna al terminar."
    ],
    "unit": "por lado"
  },
  "singleRDL": {
    "cue": "No necesitas alcanzar el suelo. El equilibrio no debe obligarte a girar la pelvis.",
    "dose": "3 × 8–12",
    "easier": "Toca una pared con la mano libre o utiliza la versión escalonada.",
    "muscle": "Isquiotibiales · glúteos · equilibrio",
    "name": "Peso muerto a una pierna",
    "pattern": "Bisagra de cadera",
    "replaces": "Peso muerto rumano bilateral",
    "rest": "90–120 s",
    "steps": [
      "Apóyate sobre una pierna con la rodilla ligeramente flexionada. Empieza sin peso o con una mancuerna ligera en la mano contraria.",
      "Lleva la cadera hacia atrás mientras la otra pierna se alarga detrás; conserva la pelvis mirando al suelo.",
      "Regresa a la posición erguida sin impulso y cambia de lado al terminar."
    ],
    "unit": "por lado"
  },
  "standingAbduction": {
    "cue": "En esta rutina se hace sin banda. La pared sirve únicamente para equilibrarte.",
    "dose": "2 × 12–20",
    "easier": "Reduce la altura de la elevación o apoya el pie entre repeticiones.",
    "muscle": "Glúteo medio · lateral de cadera",
    "name": "Abducción de cadera de pie",
    "pattern": "Abducción de cadera",
    "replaces": "Abducción de cadera tumbado de lado",
    "rest": "60–90 s",
    "steps": [
      "Colócate de pie y toca una pared si necesitas equilibrio. Mantén el tronco erguido.",
      "Lleva una pierna hacia un lado sin inclinarte ni girar el pie hacia fuera.",
      "Vuelve al centro con control y completa ambos lados."
    ],
    "unit": "por lado"
  },
  "tricepsOverhead": {
    "cue": "No fuerces la posición sobre la cabeza ni compenses arqueando la espalda.",
    "dose": "2 × 10–15",
    "easier": "Reduce el peso y el recorrido; si la posición no resulta cómoda, utiliza la extensión tumbada.",
    "muscle": "Tríceps",
    "name": "Extensión de tríceps sobre la cabeza",
    "pattern": "Extensión del codo",
    "replaces": "Extensión de tríceps en el suelo",
    "rest": "60–90 s",
    "steps": [
      "De pie, sujeta una mancuerna con ambas manos de forma firme y elévala sobre la cabeza.",
      "Flexiona los codos para bajar la mancuerna por detrás, sin mover demasiado los brazos.",
      "Extiende los codos con control y mantén las costillas sobre la pelvis."
    ],
    "unit": "repeticiones"
  },
  "walkoutPause": {
    "cue": "La demostración enseña el movimiento base; esta opción añade una pausa y reduce las repeticiones.",
    "dose": "2 × 4–6",
    "easier": "Acorta los pasos o haz el puente normal si aparecen calambres.",
    "muscle": "Isquiotibiales · glúteos",
    "name": "Caminata de talones con pausa",
    "pattern": "Trabajo de isquiotibiales",
    "replaces": "Caminata de talones continua",
    "rest": "60–90 s",
    "steps": [
      "Eleva la pelvis desde un puente y da pasos cortos con los talones hacia fuera.",
      "Detente un segundo antes de que la cadera pierda altura o las rodillas se estiren por completo.",
      "Regresa con pasos cortos. La ida, pausa y vuelta cuentan como un ciclo."
    ],
    "unit": "ciclos de ida y vuelta · pausa de 1 s"
  }
};
  const videos = {
  "adductionPause": {
    "author": "AskDoctorJo",
    "id": "y4BmebZvZRE",
    "variant": "La demostración enseña el movimiento base. En esta variante sostén dos segundos la pierna inferior elevada."
  },
  "birdPause": {
    "author": "National Academy of Sports Medicine",
    "credential": "Biblioteca de ejercicios de NASM.",
    "id": "ZdAHe9_HeEw",
    "organization": "NASM",
    "source": "https://www.nasm.org/resource-center/exercise-library/bird-dog",
    "variant": "El vídeo muestra el bird dog base. La alternativa usa cinco segundos de pausa y menos repeticiones."
  },
  "cardioGuided": {
    "author": "British Heart Foundation",
    "credential": "Sesión guiada de una organización de salud cardiovascular.",
    "id": "O5YX5xg8Seg",
    "organization": "British Heart Foundation",
    "source": "https://www.bhf.org.uk/informationsupport/heart-matters-magazine/activity/10-minute-workout",
    "sourceLabel": "Consejos de actividad física",
    "variant": "Adapta cualquier salto a marcha o pasos laterales. No necesitas pesas ni aparatos."
  },
  "curlAlternate": {
    "author": "ScottHermanFitness",
    "id": "sAq_ocpRh_I"
  },
  "deadbugAlternate": {
    "author": "Hinge Health",
    "credential": "Guía y modificaciones explicadas por un servicio de fisioterapia.",
    "id": "GbSC02oU3To",
    "organization": "Hinge Health",
    "source": "https://www.hingehealth.com/resources/articles/deadbug/"
  },
  "floorAlternating": {
    "author": "OPEX Fitness",
    "credential": "Biblioteca de una organización de formación de entrenadores.",
    "id": "5t9ggij1eXk",
    "organization": "OPEX",
    "source": "https://www.opexfit.com/meet-the-team",
    "sourceLabel": "Equipo y formación"
  },
  "flyPause": {
    "author": "ScottHermanFitness",
    "id": "ttvfGg9d76c",
    "variant": "El vídeo muestra la apertura inversa convencional. Aquí añade una pausa de un segundo con los brazos abiertos."
  },
  "frontSquat": {
    "author": "National Academy of Sports Medicine",
    "credential": "Biblioteca de ejercicios de una institución de formación y certificación.",
    "id": "hZI8Yy5elZs",
    "organization": "NASM",
    "source": "https://www.nasm.org/resource-center/exercise-library/dumbbell-front-squat"
  },
  "hammerAlternate": {
    "author": "National Academy of Sports Medicine",
    "credential": "Demostración del canal de formación de NASM.",
    "id": "CFBZ4jN1CMI",
    "organization": "NASM",
    "source": "https://www.nasm.org/about-nasm",
    "sourceLabel": "Sobre la institución"
  },
  "kickstandRDL": {
    "author": "Runna",
    "credential": "Tutorial del equipo de entrenamiento.",
    "id": "Li9jJhbSxBA",
    "organization": "Runna",
    "source": "https://support.runna.com/en/articles/7978907-staggered-stance-rdl-exercise-tutorial",
    "variant": "La guía admite distintas cargas; en esta rutina utiliza mancuernas y deja el pie trasero como apoyo."
  },
  "kneelingPress": {
    "author": "OPEX Fitness",
    "credential": "Demostración específica en media rodilla.",
    "id": "2WoOrh3dqss",
    "organization": "OPEX",
    "source": "https://www.opexfit.com/meet-the-team",
    "sourceLabel": "Equipo y formación"
  },
  "plankAlternate": {
    "author": "Nuffield Health",
    "id": "QpOgJLqeo14"
  },
  "pushupClose": {
    "author": "HASfit",
    "credential": "Tutorial específico de flexión de agarre cerrado.",
    "id": "aYpove9uRbE",
    "organization": "HASfit",
    "source": "https://hasfit.com/exercises/triceps/close-grip-push-up/"
  },
  "reverseLunge": {
    "author": "Hinge Health",
    "credential": "Guía de un servicio de fisioterapia.",
    "id": "w7pyyqLorJ4",
    "organization": "Hinge Health",
    "source": "https://www.hingehealth.com/resources/articles/reverse-lunges/",
    "variant": "Aprende la versión con peso corporal del vídeo; añade mancuernas solo cuando mantengas el equilibrio."
  },
  "rowSupinated": {
    "author": "HASfit",
    "credential": "Tutorial del equipo de entrenamiento.",
    "id": "SzPxYvZqL6k",
    "organization": "HASfit",
    "source": "https://hasfit.com/exercises/back/reverse-grip-dumbbell-bent-over-row/"
  },
  "scaption": {
    "author": "OrthoIndy",
    "credential": "Demostración de un proveedor de atención ortopédica.",
    "id": "v1Tn5yb29Ag",
    "organization": "OrthoIndy",
    "source": "https://www.orthoindy.com/physical-therapy",
    "sourceLabel": "Servicio de fisioterapia"
  },
  "sideKnees": {
    "author": "Tensegrity Physical Therapy",
    "credential": "Tutorial de una clínica de fisioterapia.",
    "id": "ksH-DXOgv8Q",
    "organization": "Tensegrity Physical Therapy",
    "source": "https://tensegrityphysicaltherapy.com/exercise-library/side-plank-from-knees/"
  },
  "singleBridge": {
    "author": "Runna",
    "credential": "Variante unilateral sobre el suelo.",
    "id": "VUl8R0kn6v4",
    "organization": "Runna",
    "source": "https://support.runna.com/en/articles/6344953-single-leg-glute-bridge-exercise-tutorial"
  },
  "singleCalf": {
    "author": "The Rotherham NHS Foundation Trust",
    "credential": "Demostración de elevación de talón desde el suelo.",
    "id": "gGo_AxzHBuw",
    "organization": "Rotherham NHS",
    "source": "https://www.therotherhamft.nhs.uk/services/physiotherapy",
    "sourceLabel": "Servicio de fisioterapia"
  },
  "singleRDL": {
    "author": "Runna",
    "credential": "Tutorial del patrón a una pierna.",
    "id": "fkej6PUmvmc",
    "organization": "Runna",
    "source": "https://support.runna.com/en/articles/6382730-single-leg-straight-leg-deadlift-exercise-tutorial",
    "variant": "La guía permite mancuerna o pesa rusa. Para esta rutina utiliza una mancuerna, o aprende primero sin peso."
  },
  "standingAbduction": {
    "author": "The Rotherham NHS Foundation Trust",
    "credential": "Material de un servicio de fisioterapia.",
    "id": "m6lQ1A_CV90",
    "organization": "Rotherham NHS",
    "source": "https://www.therotherhamft.nhs.uk/services/physiotherapy",
    "sourceLabel": "Servicio de fisioterapia",
    "variant": "Haz la variante sin banda; si necesitas apoyo, puedes tocar una pared."
  },
  "tricepsOverhead": {
    "author": "OPEX Fitness",
    "credential": "La demostración utiliza una mancuerna y posición de pie.",
    "id": "7h3lG2WnLXg",
    "organization": "OPEX",
    "source": "https://www.opexfit.com/meet-the-team",
    "sourceLabel": "Equipo y formación"
  },
  "walkoutPause": {
    "author": "Runna",
    "id": "6yeyt5mUo94",
    "organization": "Runna",
    "source": "https://support.runna.com/en/articles/8001396-glute-bridge-hamstring-walkout-exercise-tutorial",
    "variant": "Observa el ciclo de ida y vuelta. En esta opción añade una pausa de un segundo antes de regresar."
  }
};
  const patterns = {
  "floorpress": "Empuje horizontal",
  "row": "Tracción horizontal",
  "pushup": "Empuje horizontal",
  "lateralraise": "Elevación del hombro",
  "triceps": "Extensión del codo",
  "curl": "Flexión del codo",
  "goblet": "Dominante de rodilla",
  "rdl": "Bisagra de cadera",
  "bridge": "Extensión de cadera",
  "calf": "Flexión plantar",
  "abduction": "Abducción de cadera",
  "deadbug": "Estabilidad anterior del tronco",
  "sideplank": "Estabilidad lateral",
  "birddog": "Estabilidad contralateral",
  "shoulder": "Empuje vertical",
  "reversefly": "Abducción horizontal del hombro",
  "hammer": "Flexión del codo",
  "split": "Dominante de rodilla",
  "walkout": "Trabajo de isquiotibiales",
  "adduction": "Aducción de cadera",
  "plank": "Estabilidad anterior del tronco",
  "march": "Actividad aeróbica",
  "sidesteps": "Actividad aeróbica",
  "boxing": "Actividad aeróbica",
  "stepjacks": "Actividad aeróbica"
};
  const alternatives = {
  "1": {
    "exercises": [
      "floorAlternating",
      "rowSupinated",
      "pushupClose",
      "scaption",
      "tricepsOverhead",
      "hammerAlternate"
    ],
    "subtitle": "Pecho, espalda, hombros y brazos · agarres y apoyos alternativos"
  },
  "2": {
    "exercises": [
      "frontSquat",
      "kickstandRDL",
      "singleBridge",
      "singleCalf",
      "standingAbduction"
    ],
    "subtitle": "Cuádriceps, glúteos, isquiotibiales, pantorrillas y abductores"
  },
  "3": {
    "exercises": [
      "plankAlternate",
      "sideKnees",
      "birdPause"
    ],
    "cardio": [
      "cardioGuided"
    ],
    "subtitle": "Cardio guiado y estabilidad anterior, lateral y contralateral",
    "cardioTitle": "Cardio guiado · acumula 20–30 minutos moderados",
    "cardioInstructions": [
      "Utiliza el vídeo de diez minutos como guía y repite bloques de movimiento o añade marcha hasta alcanzar tu tiempo objetivo. Progresa gradualmente hasta 50 minutos moderados, que puedes repartir en dos momentos del día.",
      "Sigue una opción sin saltos: cambia cualquier salto por un paso o marcha. Mantén una intensidad que permita hablar, pero no cantar. Calentamientos, explicaciones y pausas suaves no cuentan como tiempo moderado."
    ]
  },
  "4": {
    "exercises": [
      "rowSupinated",
      "floorAlternating",
      "kneelingPress",
      "flyPause",
      "curlAlternate",
      "tricepsOverhead"
    ],
    "subtitle": "Espalda, pecho, hombros y brazos · trabajo unilateral y pausas"
  },
  "5": {
    "exercises": [
      "reverseLunge",
      "singleRDL",
      "walkoutPause",
      "singleCalf",
      "adductionPause",
      "deadbugAlternate"
    ],
    "subtitle": "Piernas y abdomen · zancada dinámica y control unilateral"
  }
};
  const focus = {
  "1": "Se conservan pecho, espalda, hombros, bíceps y tríceps.",
  "2": "Se conservan cuádriceps, glúteos, isquiotibiales, pantorrillas y lateral de cadera.",
  "3": "Se conservan el bloque aeróbico y el trabajo anterior, lateral y contralateral del tronco.",
  "4": "Se conservan pecho, espalda, hombros, bíceps y tríceps.",
  "5": "Se conservan cuádriceps, glúteos, isquiotibiales, pantorrillas, aductores y abdomen."
};
  Object.assign(routine.exercises, additions);
  Object.assign(window.EXERCISE_MEDIA, videos, {
  "floorpress": {
    "id": "vagdk94bFn4",
    "author": "Runna",
    "source": "https://support.runna.com/en/articles/6413209-floor-dumbbell-bench-press-exercise-tutorial",
    "organization": "Runna",
    "credential": "El tutorial especifica realizar el press sobre el suelo."
  },
  "pushup": {
    "id": "WDIpL0pjun0",
    "author": "National Academy of Sports Medicine",
    "source": "https://www.nasm.org/resource-center/exercise-library/push-up",
    "organization": "NASM",
    "credential": "Demostración enlazada desde su biblioteca oficial."
  },
  "shoulder": {
    "id": "L9VlR9yq904",
    "author": "Runna",
    "source": "https://support.runna.com/en/articles/6332027-standing-single-arm-shoulder-press-exercise-tutorial",
    "organization": "Runna",
    "credential": "Demostración de press de pie a una mano.",
    "variant": "El vídeo enseña un brazo cada vez. Puedes hacerlo así contando las repeticiones por brazo, o con ambos a la vez como indican los pasos."
  },
  "hammer": {
    "author": "National Academy of Sports Medicine",
    "credential": "Demostración del canal de formación de NASM.",
    "id": "CFBZ4jN1CMI",
    "organization": "NASM",
    "source": "https://www.nasm.org/about-nasm",
    "sourceLabel": "Sobre la institución"
  },
  "birddog": {
    "id": "ZdAHe9_HeEw",
    "author": "National Academy of Sports Medicine",
    "source": "https://www.nasm.org/resource-center/exercise-library/bird-dog",
    "organization": "NASM",
    "credential": "Biblioteca oficial de ejercicios."
  },
  "sideplank": {
    "id": "44ND4bOB-T0",
    "author": "National Academy of Sports Medicine",
    "source": "https://www.nasm.org/resource-center/exercise-library/side-plank",
    "organization": "NASM",
    "credential": "Biblioteca oficial de ejercicios."
  },
  "deadbug": {
    "id": "GbSC02oU3To",
    "author": "Hinge Health",
    "source": "https://www.hingehealth.com/resources/articles/deadbug/",
    "organization": "Hinge Health",
    "credential": "Guía de un servicio de fisioterapia."
  }
});
  Object.entries(patterns).forEach(([key, pattern]) => { routine.exercises[key].pattern = pattern; });
  routine.days.forEach(day => { day.alternative = alternatives[day.id]; day.focus = focus[day.id]; });
})();
