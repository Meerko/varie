const app = document.querySelector("#app");
const header = document.querySelector(".site-header");
const menu = document.querySelector(".main-nav");
const menuButton = document.querySelector(".menu-toggle");
const params = new URLSearchParams(window.location.search);
const route = params.get("page") || "home";

const home = `
  <section class="hero">
    <div class="hero-content fade-in">
      <p class="eyebrow">Hygiene starts with hands</p>
      <h1>La cura delle mani<br /><em>è il nostro mestiere.</em></h1>
      <p>Da oltre cinquant’anni creiamo prodotti professionali che proteggono, detergono e si prendono cura delle mani di chi lavora.</p>
      <a class="btn" href="./?page=prodotti">Scopri i prodotti</a>
    </div>
  </section>
  <section class="intro">
    <div>
      <p class="eyebrow">Dal 1970, a Bergamo</p>
      <h2>La qualità<br />nelle nostre mani.</h2>
    </div>
    <div class="intro-copy">
      <p>Nettuno è un’azienda italiana leader nella produzione di lavamani cosmetici professionali.</p>
      <p>La nostra storia nasce da un’idea semplice e ambiziosa: generare benessere condiviso attraverso il lavoro, creando soluzioni efficaci e rispettose della pelle.</p>
      <a class="text-link" href="./?page=azienda">Scopri l’azienda <span>→</span></a>
    </div>
  </section>
  <section class="ritual">
    <div class="ritual-head">
      <p class="eyebrow">Per le tue mani</p>
      <h2 class="section-title">Un gesto per ogni momento.</h2>
    </div>
    <div class="ritual-grid">
      <article class="ritual-card">
        <img src="./assets/protezione.jpg" alt="Protezione professionale delle mani" />
        <div class="card-copy"><small>01 · Prima del lavoro</small><h3>Protezione</h3><p>Creme barriera contro sporco e sostanze nocive.</p></div>
      </article>
      <article class="ritual-card">
        <img src="./assets/lavaggio.png" alt="Lavaggio professionale delle mani" />
        <div class="card-copy"><small>02 · Durante il lavoro</small><h3>Lavaggio</h3><p>Detergenti efficaci anche sullo sporco più difficile.</p></div>
      </article>
      <article class="ritual-card">
        <img src="./assets/cura.jpg" alt="Cura e idratazione delle mani" />
        <div class="card-copy"><small>03 · Dopo il lavoro</small><h3>Cura</h3><p>Trattamenti che ripristinano l’equilibrio della pelle.</p></div>
      </article>
    </div>
    <div class="other-products">
      <article class="other-product"><small>Altri prodotti</small><h3>Detergenza</h3><p>Prodotti professionali per superfici, bagno e indumenti da lavoro.</p></article>
      <article class="other-product"><small>Altri prodotti</small><h3>Accessori</h3><p>Dispenser, supporti ed espositori per un sistema completo.</p></article>
    </div>
  </section>
  <section class="split">
    <div class="split-image"><img src="./assets/sostenibilita.jpg" alt="Paesaggio naturale, simbolo della sostenibilità Nettuno" /></div>
    <div class="split-copy">
      <p class="eyebrow">I nostri valori</p>
      <h2>La sostenibilità è un impegno concreto.</h2>
      <p>Un modello di gestione orientato ai criteri ESG, per creare valore ambientale, sociale e di governance lungo tutta la filiera.</p>
      <a class="text-link" href="./?page=sostenibilita">Scopri la filosofia <span>→</span></a>
    </div>
  </section>
  <section class="stats-wrap">
    <div class="stats">
      <div class="stat"><strong>56</strong><span>anni di attività</span></div>
      <div class="stat"><strong>51</strong><span>prodotti disponibili</span></div>
      <div class="stat"><strong>48</strong><span>collaboratori</span></div>
      <div class="stat"><strong>129</strong><span>partner nella rete</span></div>
    </div>
  </section>
  ${sectorSection()}
  <section class="testimonial">
    <p class="eyebrow">La voce di chi lavora</p>
    <blockquote>“Finalmente un prodotto capace di rimuovere olio, grasso e sporco difficile, lasciando le mani in ordine.”</blockquote>
    <cite>Alessandro · Officina meccanica</cite>
  </section>
  <section class="news">
    <div class="section-heading">
      <div><p class="eyebrow">Le novità da Nettuno</p><h2 class="section-title">Conoscenza che<br />fa la differenza.</h2></div>
    </div>
    <div class="news-grid">
      <article class="news-card"><small>Salute delle mani</small><h3>Prurito e allergia alle mani: le cause più comuni</h3><a class="text-link" href="./?page=contatti">Leggi l’articolo <span>→</span></a></article>
      <article class="news-card"><small>Dal mondo Nettuno</small><h3>Hygiene starts with hands: il nostro impegno quotidiano</h3><a class="text-link" href="./?page=azienda">Scopri di più <span>→</span></a></article>
      <article class="news-card"><small>Guida professionale</small><h3>Pasta o crema lavamani? Come scegliere il prodotto giusto</h3><a class="text-link" href="./?page=prodotti">Vai alla guida <span>→</span></a></article>
    </div>
  </section>
  <section class="consultation"><p class="eyebrow">Vuoi una consulenza?</p><h2>I nostri esperti trovano la soluzione più adatta alle tue esigenze.</h2><a class="btn" href="./?page=contatti">Contatta il team Nettuno</a></section>
`;

function sectorSection() {
  const sectors = [
    ["agricoltore.jpg", "Agricoltore"],
    ["carrozziere.jpg", "Carrozziere"],
    ["conciatore.jpg", "Conciatore"],
    ["edilizia.jpg", "Costruttore edile"],
  ];
  return `<section class="sector-area">
    <div class="section-heading">
      <div><p class="eyebrow">Una linea dedicata</p><h2 class="section-title">Il prodotto giusto<br />per ogni mestiere.</h2></div>
      <a class="text-link" href="./?page=settori">Tutti i settori <span>→</span></a>
    </div>
    <div class="sector-strip">${sectors.map(([image, title]) => `
      <a class="sector-card" href="./?page=settori"><img src="./assets/${image}" alt="${title}" /><span>${title}</span></a>`).join("")}
    </div>
  </section>`;
}

const pageHero = (eyebrow, title, text, className = "") => `
  <section class="page-hero ${className}">
    <div class="fade-in"><p class="eyebrow">${eyebrow}</p><h1>${title}</h1><p>${text}</p></div>
  </section>`;

const pages = {
  azienda: `
    ${pageHero("Dal 1970", "Una storia italiana.<br />Un sapere che evolve.", "Ricerca, esperienza e attenzione alle persone: da Bergamo portiamo la qualità Nettuno nel mondo.")}
    <div class="page-body">
      <section class="intro">
        <div><p class="eyebrow">Le nostre radici</p><h2>Il coraggio<br />di fare impresa.</h2></div>
        <div class="intro-copy"><p>La storia di Nettuno inizia quando Battista Fratus trasforma la sua esperienza nell’industria chimica in un progetto imprenditoriale.</p><p>Oggi sviluppiamo e produciamo internamente soluzioni professionali per la cura e l’igiene delle mani, unendo competenza cosmetica, innovazione e servizio.</p></div>
      </section>
      <section class="stats-wrap"><div class="stats">
        <div class="stat"><strong>1970</strong><span>anno di fondazione</span></div>
        <div class="stat"><strong>30+</strong><span>paesi serviti</span></div>
        <div class="stat"><strong>51</strong><span>soluzioni professionali</span></div>
        <div class="stat"><strong>1</strong><span>filiera controllata</span></div>
      </div></section>
      <section class="values"><p class="eyebrow">Ciò in cui crediamo</p><h2>Valori che guidano ogni scelta.</h2>
        <div class="value-grid">
          <article class="value"><b>01</b><h3>Competenza</h3><p>Conosciamo la pelle e lo sporco professionale. Ogni formula nasce da ricerca e test rigorosi.</p></article>
          <article class="value"><b>02</b><h3>Responsabilità</h3><p>Persone, territorio e ambiente sono parte dello stesso impegno quotidiano.</p></article>
          <article class="value"><b>03</b><h3>Innovazione</h3><p>Miglioriamo prodotti e processi per offrire prestazioni sempre più efficaci e sostenibili.</p></article>
        </div>
      </section>
    </div>`,
  prodotti: `
    ${pageHero("Le nostre soluzioni", "Proteggere. Lavare.<br />Prendersi cura.", "Una gamma professionale completa per l’igiene delle mani e degli ambienti di lavoro.", "product-hero")}
    <div class="page-body">
      <section class="products">
        <article class="product-block"><span class="number">01 / MANI</span><h2>Protezione</h2><p>Creme barriera specifiche per prevenire il contatto con sporco e sostanze aggressive.</p></article>
        <article class="product-block"><span class="number">02 / MANI</span><h2>Lavaggio</h2><p>Paste, creme e gel lavamani per ogni intensità e tipologia di sporco professionale.</p></article>
        <article class="product-block"><span class="number">03 / MANI</span><h2>Cura</h2><p>Creme idratanti e trattamenti per ripristinare le naturali funzioni protettive della pelle.</p></article>
        <article class="product-block"><span class="number">04 / AMBIENTI</span><h2>Detergenza</h2><p>Soluzioni professionali per superfici, area bagno, tessuti da lavoro e accessori.</p></article>
      </section>
    </div>`,
  settori: `
    ${pageHero("Soluzioni professionali", "Ogni lavoro lascia<br />un segno sulle mani.", "Per questo studiamo prodotti dedicati alle esigenze reali di chi lavora.", "sector-hero")}
    <div class="page-body">${sectorSection()}
      <section class="split">
        <div class="split-image"><img src="./assets/protezione.jpg" alt="Mani protette durante il lavoro" /></div>
        <div class="split-copy"><p class="eyebrow">Consulenza dedicata</p><h2>Partiamo dal tuo lavoro.</h2><p>Tipo di sporco, frequenza dei lavaggi e condizioni della pelle: i nostri esperti individuano il sistema più efficace per la tua attività.</p><a class="text-link" href="./?page=contatti">Chiedi un consiglio <span>→</span></a></div>
      </section>
    </div>`,
  sostenibilita: `
    ${pageHero("Il valore che resta", "Crescere significa<br />prendersi cura.", "Lavoriamo per generare un impatto positivo sulle persone, sull’ambiente e sulla comunità.", "sustain-hero")}
    <div class="page-body">
      <section class="intro"><div><p class="eyebrow">Il nostro impegno</p><h2>Una visione<br />responsabile.</h2></div><div class="intro-copy"><p>La sostenibilità per Nettuno è un modello di gestione: orienta le decisioni, la progettazione delle formule e il modo in cui costruiamo relazioni.</p><p>Misuriamo i progressi e rendiamo trasparenti gli obiettivi, con attenzione ai criteri ambientali, sociali e di buona governance.</p></div></section>
      <section class="values"><div class="value-grid">
        <article class="value"><b>E</b><h3>Ambiente</h3><p>Riduzione degli impatti, formule attente e packaging progettato con maggiore efficienza.</p></article>
        <article class="value"><b>S</b><h3>Persone</h3><p>Sicurezza, inclusione, formazione e sostegno concreto alle comunità del territorio.</p></article>
        <article class="value"><b>G</b><h3>Governance</h3><p>Scelte trasparenti, responsabilità condivisa e una filiera costruita su relazioni affidabili.</p></article>
      </div></section>
    </div>`,
  contatti: `
    ${pageHero("Parliamone", "Troviamo insieme<br />la soluzione giusta.", "Il nostro team è a disposizione per informazioni commerciali, tecniche e di prodotto.")}
    <div class="page-body">
      <section class="contact-wrap">
        <div><p class="eyebrow">Contatti</p><h2>Siamo qui<br />per aiutarti.</h2>
          <div class="contact-details"><p><strong>Nettuno srl</strong>Viale Industria 16/18<br />24060 Castelli Calepio (BG) – Italy</p><p><strong>Telefono</strong>+39 035 847508</p><p><strong>Email</strong>nettuno@nettuno.net</p></div>
        </div>
        <form class="contact-form" id="contact-form">
          <div class="field"><label for="name">Nome</label><input id="name" name="name" required /></div>
          <div class="field"><label for="company">Azienda</label><input id="company" name="company" /></div>
          <div class="field"><label for="email">Email</label><input id="email" name="email" type="email" required /></div>
          <div class="field"><label for="reason">Sono interessato a</label><select id="reason"><option>Prodotti e schede tecniche</option><option>Diventare rivenditore</option><option>Informazioni generali</option></select></div>
          <div class="field full"><label for="message">Messaggio</label><textarea id="message" required></textarea></div>
          <div class="field full"><button class="btn" type="submit">Invia la richiesta</button><small id="form-status" aria-live="polite"></small></div>
        </form>
      </section>
    </div>`,
};

app.innerHTML = route === "home" ? home : (pages[route] || pages.azienda);
if (route !== "home") header.classList.add("is-solid");
document.querySelector(`[data-route="${route}"]`)?.classList.add("active");

menuButton.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("menu-open", open);
});
menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  menu.classList.remove("open");
  document.body.classList.remove("menu-open");
}));

document.querySelector("#contact-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#form-status").textContent = "Grazie. La richiesta è pronta per essere inviata.";
  event.currentTarget.reset();
});
