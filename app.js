"use strict";
(() => {
  const {exercises, days, upperMap, lowerMap, sources} = window.ROUTINE;
  const media = window.EXERCISE_MEDIA;
  const panel = document.querySelector("#sesion");
  const tabs = [...document.querySelectorAll("[role=tab]")];
  let activeFrame = null;
  const escape = value => String(value).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[ch]));
  const watchURL = id => `https://www.youtube.com/watch?v=${encodeURIComponent(id)}`;

  function poster(key) {
    const item = media[key];
    return `<button class="video-poster" type="button" data-play="${escape(key)}" aria-label="Ver demostración: ${escape(exercises[key].name)}"><img src="https://img.youtube.com/vi/${encodeURIComponent(item.id)}/hqdefault.jpg" alt="" width="480" height="360" loading="lazy" decoding="async"><span class="play-label"><span class="play-triangle" aria-hidden="true"></span>Ver demostración</span></button>`;
  }

  function card(key, number) {
    const item = exercises[key], video = media[key];
    return `<article class="exercise"><div class="exercise-heading"><span class="exercise-num">${number}</span><div><h3>${escape(item.name)}</h3><div class="muscle">${escape(item.muscle)}</div></div></div><div class="media-frame" data-exercise="${escape(key)}">${poster(key)}</div><div class="video-source"><span>Vídeo: ${escape(video.author)}</span><a href="${watchURL(video.id)}" target="_blank" rel="noopener noreferrer" aria-label="Abrir en YouTube: ${escape(item.name)}">Abrir en YouTube ↗</a></div>${video.variant ? `<div class="media-variant">${escape(video.variant)}</div>` : ""}<div class="exercise-body"><div class="dose"><div><strong>${escape(item.dose)}</strong><small>${escape(item.unit)}</small></div><div class="rest">${key === "march" || key === "sidesteps" || key === "boxing" || key === "stepjacks" ? "Circuito" : "Descanso"}<b>${escape(item.rest)}</b></div></div><ol class="steps">${item.steps.map(step=>`<li>${escape(step)}</li>`).join("")}</ol><p class="cue"><b>Clave:</b> ${escape(item.cue)}</p><div class="easier"><b>Adaptación:</b> ${escape(item.easier)}</div></div></article>`;
  }

  function imageFallbacks(container) {
    container.querySelectorAll(".video-poster img").forEach(img => { img.onerror = () => img.remove(); });
  }

  function stopVideo() {
    if (activeFrame && activeFrame.isConnected) {
      activeFrame.innerHTML = poster(activeFrame.dataset.exercise);
      imageFallbacks(activeFrame);
    }
    activeFrame = null;
  }

  function showDay(id) {
    const day = days.find(item => item.id === id) || days[0];
    stopVideo();
    tabs.forEach(tab => {
      const selected = Number(tab.dataset.day) === day.id;
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });
    panel.setAttribute("aria-labelledby", `tab-${day.id}`);
    const cardio = Boolean(day.cardio);
    panel.innerHTML = `<div class="session-head"><div><h2>Día ${day.id} · ${escape(day.title)}</h2><p>${escape(day.subtitle)}</p></div><div class="session-meta"><span class="chip">${day.exercises.length} ejercicios ${cardio ? "de core" : "de fuerza"}</span><span class="chip">${cardio ? "Sin mancuernas" : "Mancuernas + suelo"}</span></div></div><div class="session-prep"><details><summary>Antes de empezar · ${cardio ? "5" : "5–8"} minutos de calentamiento</summary><div class="detail-content"><p>${cardio ? "Marcha suavemente y aumenta el ritmo poco a poco. Mueve hombros y caderas en un recorrido cómodo antes del bloque principal." : "Marcha suavemente, mueve hombros y caderas, y ensaya sentadillas o bisagras sin peso. Añade una serie fácil del primer ejercicio; no cuenta entre las series indicadas."}</p><p>Las dosis de las tarjetas son el objetivo. Al empezar, usa 1–2 series y conserva 2–4 repeticiones posibles. Cuando corresponda, completa ambos lados y luego descansa; puedes pausar brevemente entre lados. Amplía el descanso a 2–3 minutos si lo necesitas.</p></div></details></div>${cardio ? `<div class="cardio-intro"><h3>Cardio continuo · empieza con 20–30 minutos</h3><p>Repite este circuito de 5 minutos: <b>1 de marcha + 1 de pasos laterales + 1 de boxeo + 1 de step jacks + 1 de marcha.</b></p><p>Empieza con 4–6 vueltas; progresa hasta 10 vueltas o 50 minutos, que puedes repartir en dos bloques de 25. Busca una intensidad de 5–6 sobre 10: puedes hablar, pero no cantar. Las pausas suaves no cuentan como tiempo moderado.</p></div><div class="exercise-grid">${day.cardio.map((key,i)=>card(key,i+1)).join("")}</div><h3 class="subheading">Después del cardio · core y estabilidad</h3>` : ""}<div class="exercise-grid">${day.exercises.map((key,i)=>card(key,i+1)).join("")}</div><div class="after-session"><div><h3>${cardio ? "Vuelve a la calma" : "Termina con cardio"}</h3><p>${cardio ? "Camina o marcha suavemente 3–5 minutos. Si te resulta agradable, añade estiramientos cómodos, sin rebotes ni dolor." : "Empieza con 10–15 minutos de marcha, pasos laterales o boxeo al aire sin pesas. Progresa hasta 25 minutos moderados y termina con 3–5 minutos suaves. También puedes separar el cardio de la fuerza."}</p></div>${cardio ? "" : `<a href="#sesion" data-cardio-demo>Ver movimientos de cardio</a>`}</div>`;
    imageFallbacks(panel);
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => showDay(Number(tab.dataset.day)));
    tab.addEventListener("keydown", event => {
      let next = index;
      if (event.key === "ArrowRight") next = (index+1)%tabs.length;
      else if (event.key === "ArrowLeft") next = (index+tabs.length-1)%tabs.length;
      else if (event.key === "Home") next = 0;
      else if (event.key === "End") next = tabs.length-1;
      else return;
      event.preventDefault();
      tabs[next].focus();
      showDay(Number(tabs[next].dataset.day));
    });
  });

  panel.addEventListener("click", event => {
    if (event.target.closest("[data-cardio-demo]")) {
      event.preventDefault();
      showDay(3);
      tabs[2].focus();
      panel.scrollIntoView({block:"start"});
      return;
    }
    if (event.target.closest("[data-stop-video]")) { stopVideo(); return; }
    const button = event.target.closest("[data-play]");
    if (!button) return;
    const key = button.dataset.play;
    if (!media[key]) return;
    if (location.protocol === "file:") {
      window.open(watchURL(media[key].id), "_blank", "noopener,noreferrer");
      return;
    }
    const frame = button.closest(".media-frame");
    stopVideo();
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(media[key].id)}?autoplay=1&rel=0&playsinline=1`;
    iframe.title = `Demostración: ${exercises[key].name}`;
    iframe.allow = "autoplay; encrypted-media; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    const close = document.createElement("button");
    close.type = "button";
    close.className = "close-video";
    close.dataset.stopVideo = "true";
    close.textContent = "Cerrar vídeo";
    frame.replaceChildren(iframe, close);
    activeFrame = frame;
    close.focus();
  });

  const fillMap = (id, rows) => { document.getElementById(id).innerHTML = rows.map(row=>`<tr>${row.map(cell=>`<td>${escape(cell)}</td>`).join("")}</tr>`).join(""); };
  fillMap("upper-map", upperMap);
  fillMap("lower-map", lowerMap);
  document.getElementById("source-list").innerHTML = sources.map(([title,note,url])=>`<div><a href="${escape(url)}" target="_blank" rel="noopener noreferrer">${escape(title)}</a><span>${escape(note)}</span></div>`).join("");
  showDay(1);
})();
