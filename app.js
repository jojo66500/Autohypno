const SESSIONS = {
  express: {
    title: "Express Ventre Calme",
    minutes: 6,
    script: [
      "Installe-toi confortablement. Une main posée sur le ventre, l’autre sur la poitrine.",
      "",
      "1) Respiration (2 minutes)",
      "Inspire par le nez… 4 secondes.",
      "Expire lentement… 6 secondes.",
      "À chaque expiration, imagine que ton ventre se dégonfle doucement, comme un coussin qui se pose.",
      "",
      "2) Main apaisante (2 minutes)",
      "Sens la chaleur de ta main. Comme un petit soleil discret.",
      "Imagine un gant protecteur qui isole ta main de tout inconfort.",
      "Cette main devient neutre et rassurante.",
      "Et cette neutralité se diffuse tranquillement dans le ventre.",
      "",
      "3) Transformation de sensation (2 minutes)",
      "Si une gêne est là, laisse-la se transformer :",
      "Douleur → pression… pression → chaleur douce… chaleur → calme.",
      "Répète mentalement :",
      "« Mon ventre se relâche. Je laisse mon corps retrouver son équilibre. »",
      "",
      "Fin : une grande inspiration… puis reviens doucement ici."
    ].join("\n")
  },

  ventre: {
    title: "Ventre fluide (gaz, ballonnements, constipation, spasmes)",
    minutes: 12,
    script: [
      "Installe-toi confortablement, de préférence semi-allongée.",
      "Une main posée sur le ventre, l’autre libre.",
      "",
      "Prends un instant pour respirer lentement.",
      "Inspire par le nez…",
      "Expire par la bouche, un peu plus longtemps.",
      "À chaque expiration, le ventre peut s’adoucir.",
      "",
      "1) Mise en sécurité (2 minutes)",
      "Imagine que ton ventre n’a rien à faire, rien à prouver.",
      "Il peut simplement exister, tel qu’il est.",
      "Comme si une lumière douce s’installait à l’intérieur.",
      "",
      "2) Création d’espace (gaz / ballonnements – 3 minutes)",
      "Imagine l’intérieur de ton ventre comme un espace vivant.",
      "À chaque respiration, cet espace s’agrandit légèrement.",
      "Sans pousser, sans forcer.",
      "Juste plus de place… plus d’air… plus de liberté.",
      "Les zones gonflées peuvent doucement se détendre.",
      "",
      "3) Mouvement ondulant (constipation – 3 minutes)",
      "Imagine maintenant un mouvement lent et régulier.",
      "Comme une vague douce qui traverse le ventre.",
      "Une vague qui sait exactement quand bouger…",
      "et quand s’arrêter.",
      "Le corps retrouve son propre rythme naturel.",
      "",
      "4) Décrispation profonde (spasmes – 3 minutes)",
      "S’il y a des zones qui se contractent,",
      "imagine qu’elles peuvent se desserrer.",
      "Comme un poing qui s’ouvre lentement.",
      "Pas d’un coup… mais à leur rythme.",
      "Chaque expiration relâche un peu plus.",
      "",
      "5) Validation inconsciente (1 minute)",
      "Répète mentalement, ou laisse résonner :",
      "« Mon ventre sait s’autoréguler. »",
      "« Je peux lui faire confiance. »",
      "« Je laisse mon corps faire ce qu’il sait faire. »",
      "",
      "Puis inspire profondément…",
      "bouge doucement les mains…",
      "et reviens ici, calme et présent."
    ].join("\n")
  },

  souvenir: {
    title: "Lâcher-prise (souvenir ressource)",
    minutes: 12,
    script: [
      "Ferme les yeux. Respire lentement.",
      "",
      "1) Choisis un souvenir agréable",
      "Un moment simple, un lieu, une scène.",
      "",
      "2) Active les canaux sensoriels",
      "Visuel : couleurs, lumière, détails.",
      "Kinesthésique : sensations du corps, température, douceur.",
      "Auditif : sons, voix, ambiance.",
      "Olfactif/Gustatif : odeurs, goûts associés.",
      "",
      "3) Approfondissement",
      "À chaque expiration, ton corps devient plus lourd et plus calme.",
      "Imagine un escalier doux et lumineux.",
      "Descends marche après marche, et à chaque marche : plus tranquille.",
      "",
      "4) Suggestion ventre",
      "Comme si ce souvenir envoyait un message au ventre :",
      "« Tu peux te déposer. Tu peux relâcher. »",
      "Imagine une vague de sérénité qui enveloppe l’abdomen.",
      "",
      "Fin : compte de 1 à 5 et ouvre les yeux quand c’est ok."
    ].join("\n")
  },

  elman: {
    title: "Profonde détente (Elman)",
    minutes: 25,
    script: [
      "Objectif (dans ta tête ou à voix basse) :",
      "« Je demande à mon inconscient de m’aider à apaiser mon ventre et à relâcher. »",
      "« Je demande à mon inconscient de me faire revenir dans 25 minutes. »",
      "",
      "1) Le jeu des paupières",
      "Ferme les yeux. Imagine que tes paupières se relâchent complètement.",
      "Compte 1…2…3 et ouvre-les. Puis referme-les en imaginant : « deux fois plus détendu ». (2 ou 3 fois)",
      "",
      "2) Le tableau",
      "Visualise un tableau (couleur/matière au choix).",
      "Inscris 100. Puis un chiffon magique efface : 99…98…",
      "Continue jusqu’à ce que ça devienne flou. C’est parfait.",
      "",
      "3) L’escalator (A/B/C)",
      "Imagine un escalator. Descends au niveau A (plus détendu).",
      "Niveau B (encore deux fois plus).",
      "Niveau C (très calme).",
      "",
      "4) Focus ventre",
      "Scan rapide du ventre : où c’est tendu ? où c’est neutre ?",
      "Pose une main dessus. À chaque expiration : décrispation.",
      "Si une sensation est présente, transforme-la : pression → chaleur douce → confort.",
      "",
      "5) Consolidation",
      "Répète mentalement :",
      "« Mon corps sait apaiser. Mon ventre peut se relâcher. Je lâche prise maintenant. »",
      "",
      "Sortie : inspire profondément et compte jusqu’à 10 pour revenir."
    ].join("\n")
  },

  crise: {
    title: "Mode “Crise”",
    minutes: 1.5,
    script: [
      "Mets une main sur le ventre.",
      "Inspire 4 secondes… expire 6 secondes.",
      "3 cycles seulement.",
      "",
      "Phrase courte :",
      "« Ici et maintenant, je ralentis. Mon ventre se pose. »",
      "",
      "Regarde 3 choses autour de toi, écoute 2 sons, sens 1 point d’appui du corps.",
      "Reviens."
    ].join("\n")
  }
};

// ----- Player state -----
let current = null;
let totalSeconds = 0;
let remainingSeconds = 0;
let timer = null;

const $ = (sel) => document.querySelector(sel);
const playerTitle = $("#playerTitle");
const playerDuration = $("#playerDuration");
const scriptEl = $("#script");
const timeLeftEl = $("#timeLeft");
const bar = $("#bar");
const btnStart = $("#btnStart");
const btnPause = $("#btnPause");
const btnReset = $("#btnReset");
const beep = $("#beep");

const toggleBeep = $("#toggleBeep");
const toggleNight = $("#toggleNight");

function fmt(sec){
  const s = Math.max(0, Math.floor(sec));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${String(m).padStart(2,"0")}:${String(r).padStart(2,"0")}`;
}

function setSession(key){
  current = SESSIONS[key];
  totalSeconds = Math.round(current.minutes * 60);
  remainingSeconds = totalSeconds;

  playerTitle.textContent = current.title;
  playerDuration.textContent = `${current.minutes} min`;
  scriptEl.textContent = current.script;

  timeLeftEl.textContent = fmt(remainingSeconds);
  bar.style.width = "0%";

  btnStart.disabled = false;
  btnPause.disabled = true;
  btnReset.disabled = true;

  if (timer){ clearInterval(timer); timer = null; }
}

function tick(){
  remainingSeconds -= 1;
  timeLeftEl.textContent = fmt(remainingSeconds);

  const done = totalSeconds - remainingSeconds;
  const pct = Math.min(100, Math.max(0, (done / totalSeconds) * 100));
  bar.style.width = `${pct}%`;

  if (remainingSeconds <= 0){
    clearInterval(timer);
    timer = null;
    btnStart.disabled = false;
    btnPause.disabled = true;
    btnReset.disabled = false;
    bar.style.width = "100%";
    if (toggleBeep.checked){
      try { beep.currentTime = 0; beep.play(); } catch(e){}
    }
  }
}

function start(){
  if (!current) return;
  if (timer) return;

  btnStart.disabled = true;
  btnPause.disabled = false;
  btnReset.disabled = false;

  timer = setInterval(tick, 1000);
}

function pause(){
  if (!timer) return;
  clearInterval(timer);
  timer = null;
  btnStart.disabled = false;
  btnPause.disabled = true;
}

function reset(){
  if (!current) return;
  if (timer){ clearInterval(timer); timer = null; }
  remainingSeconds = totalSeconds;
  timeLeftEl.textContent = fmt(remainingSeconds);
  bar.style.width = "0%";
  btnStart.disabled = false;
  btnPause.disabled = true;
  btnReset.disabled = true;
}

document.querySelectorAll(".session").forEach(btn=>{
  btn.addEventListener("click", ()=> setSession(btn.dataset.session));
});

btnStart.addEventListener("click", start);
btnPause.addEventListener("click", pause);
btnReset.addEventListener("click", reset);

toggleNight.addEventListener("change", ()=>{
  document.body.classList.toggle("night", toggleNight.checked);
});

// Séance par défaut
setSession("express");

// ----- Journal -----
const KEY = "ventrecalme_log_v1";
const bellyBefore = $("#bellyBefore");
const stressBefore = $("#stressBefore");
const logEl = $("#log");
const saveEntry = $("#saveEntry");
const clearLog = $("#clearLog");

function loadLog(){
  try{
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  }catch(e){
    return [];
  }
}
function saveLog(items){
  localStorage.setItem(KEY, JSON.stringify(items));
}

function renderLog(){
  const items = loadLog();
  if (!items.length){
    logEl.innerHTML = `<div class="entry">Aucune entrée pour l’instant.<div class="small">Tu peux enregistrer “avant” pour observer ton évolution.</div></div>`;
    return;
  }
  logEl.innerHTML = items.slice().reverse().map(it=>{
    return `
      <div class="entry">
        <strong>${new Date(it.ts).toLocaleString("fr-FR")}</strong>
        <div class="small">Ventre: ${it.belly}/10 • Stress: ${it.stress}/10 • Séance: ${it.session || "—"}</div>
      </div>
    `;
  }).join("");
}

saveEntry.addEventListener("click", ()=>{
  const items = loadLog();
  items.push({
    ts: Date.now(),
    belly: Math.min(10, Math.max(0, Number(bellyBefore.value || 0))),
    stress: Math.min(10, Math.max(0, Number(stressBefore.value || 0))),
    session: current ? current.title : ""
  });
  saveLog(items);
  renderLog();
});

clearLog.addEventListener("click", ()=>{
  localStorage.removeItem(KEY);
  renderLog();
});

renderLog();
