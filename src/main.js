import './style.css'

const phoneDisplay = '0757 411 306'
const phone = '40757411306'
const waMessage = encodeURIComponent('Bună ziua! Doresc o estimare pentru un serviciu TransMobil Cluj.')

const services = [
  { n: '01', title: 'Mutări & relocări', text: 'Locuințe, birouri și sedii mutate complet, fără stres și fără improvizații.', img: 'https://transmobilcluj.ro/images/fundal-site-2.jpg' },
  { n: '02', title: 'Debarasări complete', text: 'Golim apartamente, case, pivnițe sau spații comerciale și lăsăm curat în urmă.', img: 'https://transmobilcluj.ro/images/fundal-site-debarasare.jpg' },
  { n: '03', title: 'Transport marfă', text: 'Mobilă, electrocasnice, materiale și obiecte voluminoase, local sau în țară.', img: 'https://transmobilcluj.ro/images/fundal-site-transport.jpg' },
  { n: '04', title: 'Montaj mobilier', text: 'Demontare, transport și remontare atentă pentru mobilier IKEA, JYSK și nu numai.', img: 'https://transmobilcluj.ro/images/fundal-site-montaj-mobila.jpg' }
]

document.querySelector('#app').innerHTML = `
  <header class="header" style="background:rgba(7,29,22,.96);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)">
    <a class="brand" href="#top" aria-label="TransMobil Cluj — Acasă">
      <span class="brand-mark"><i></i><i></i><i></i></span>
      <span><b>TRANS</b>MOBIL<small>CLUJ-NAPOCA</small></span>
    </a>
    <nav aria-label="Navigație principală">
      <a href="#servicii">Servicii</a><a href="#proces">Cum lucrăm</a><a href="#lucrari">Lucrări</a><a href="#contact">Contact</a>
    </nav>
    <a class="header-call" href="tel:${phone}"><span>Sună acum</span>${phoneDisplay}</a>
    <button class="menu" aria-label="Deschide meniul" aria-expanded="false"><span></span><span></span></button>
  </header>

  <main id="top">
    <section class="hero">
      <div class="hero-photo" style="background-image:url('/hero-transmobil-clean.jpg');background-position:65% center" role="img" aria-label="Autoutilitara TransMobil Cluj pregătită pentru o lucrare de debarasare"></div>
      <div class="hero-shade"></div>
      <div class="hero-content">
        <p class="eyebrow"><span></span> Mutări · Transport · Debarasări</p>
        <h1>Mutăm tot.<br><em>Tu nu ridici nimic.</em></h1>
        <p class="hero-copy">De la primul obiect împachetat până la ultimul corp montat — echipa noastră se ocupă de tot, în Cluj și împrejurimi.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="https://wa.me/${phone}?text=${waMessage}" target="_blank" rel="noreferrer">Cere estimare pe WhatsApp <b>↗</b></a>
          <a class="btn btn-ghost" href="tel:${phone}">Sună ${phoneDisplay}</a>
        </div>
        <div class="hero-trust">
          <div><b>10+</b><span>Ani de<br>experiență</span></div>
          <div><b>3.5T</b><span>Autoutilitare<br>echipate</span></div>
          <div><b>7/7</b><span>Disponibili<br>toată săptămâna</span></div>
        </div>
      </div>
      <a href="#servicii" class="scroll-cue">DESCOPERĂ <span>↓</span></a>
    </section>

    <section class="services section" id="servicii">
      <div class="section-head">
        <div><p class="kicker">TOT CE AI NEVOIE, O SINGURĂ ECHIPĂ</p><h2>Noi facem<br><em>munca grea.</em></h2></div>
        <p>De la o singură canapea la relocarea completă a unei firme. Venim cu oamenii, mașina și soluția potrivită.</p>
      </div>
      <div class="service-grid">
        ${services.map((s, i) => `<article class="service-card" style="--bg:url('${s.img}')">
          <div class="service-img"></div><div class="service-overlay"></div>
          <span class="service-num">${s.n}</span><div class="service-copy"><h3>${s.title}</h3><p>${s.text}</p><a href="#contact" aria-label="Detalii ${s.title}">Vezi detalii <b>↗</b></a></div>
        </article>`).join('')}
      </div>
    </section>

    <section class="quote-strip" id="proces">
      <div class="quote-visual"><span class="outline-word">RAPID</span></div>
      <div class="quote-content">
        <p class="kicker light">O ESTIMARE FĂRĂ DRUMURI ȘI AȘTEPTARE</p>
        <h2>Trimite 3 poze.<br><em>Primești o estimare.</em></h2>
        <div class="steps">
          <div><b>01</b><span>Fotografiezi ce ai de mutat sau debarasat.</span></div>
          <div><b>02</b><span>Ne spui locația, etajul și dacă există lift.</span></div>
          <div><b>03</b><span>Primești rapid o estimare și o dată disponibilă.</span></div>
        </div>
        <a class="btn btn-lime" href="https://wa.me/${phone}?text=${waMessage}" target="_blank" rel="noreferrer">Trimite pozele pe WhatsApp <b>↗</b></a>
      </div>
    </section>

    <section class="proof section" id="lucrari">
      <div class="proof-copy">
        <p class="kicker">LUCRĂRI REALE. REZULTATE CARE SE VĂD.</p>
        <h2>Intrăm în dezordine.<br><em>Ieșim lăsând loc.</em></h2>
        <p>Nu promitem doar că ne descurcăm. Fiecare lucrare înseamnă bunuri protejate, spații eliberate și clienți care și-au văzut liniștiți de zi.</p>
        <div class="checks"><span>✓ Manipulare atentă</span><span>✓ Echipă proprie</span><span>✓ Evaluare gratuită</span><span>✓ Preț stabilit înainte</span></div>
      </div>
      <div class="gallery">
        <figure class="g1"><img src="https://transmobilcluj.ro/images/55.jpg" alt="Autoutilitară TransMobil în timpul unei lucrări" loading="lazy"></figure>
        <figure class="g2"><img src="https://transmobilcluj.ro/images/2019/01/07/fundal%20site%20transport.jpg" alt="Transport de mobilă în Cluj" loading="lazy"></figure>
        <div class="rating"><strong>Cluj<br>& împrejurimi</strong><span>Transportăm aproape orice.</span></div>
      </div>
    </section>

    <section class="areas" style="justify-content:center">
      <p>CLUJ-NAPOCA</p><span>•</span><p>FLOREȘTI</p><span>•</span><p>BACIU</p><span>•</span><p>APAHIDA</p><span>•</span><p>GILĂU</p>
    </section>

    <section class="contact section" id="contact">
      <div><p class="kicker light">HAI SĂ REZOLVĂM</p><h2>Spune-ne ce ai de mutat.<br><em>Noi ne ocupăm de restul.</em></h2></div>
      <div class="contact-actions"><a href="tel:${phone}">${phoneDisplay}<span>APEL DIRECT ↗</span></a><a href="https://wa.me/${phone}?text=${waMessage}" target="_blank" rel="noreferrer">WhatsApp<span>RĂSPUNDEM RAPID ↗</span></a></div>
    </section>
  </main>

  <footer><div class="brand footer-brand"><span class="brand-mark"><i></i><i></i><i></i></span><span><b>TRANS</b>MOBIL<small>CLUJ-NAPOCA</small></span></div><p>Mutări · Transport · Debarasări · Montaj</p><small>© 2026 TransMobil Cluj. Demo de prezentare.</small></footer>
  <div class="mobile-cta"><a href="tel:${phone}">Sună acum</a><a href="https://wa.me/${phone}?text=${waMessage}" target="_blank" rel="noreferrer">WhatsApp</a></div>
`

const menu = document.querySelector('.menu')
const nav = document.querySelector('nav')
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') === 'true'
  menu.setAttribute('aria-expanded', String(!open))
  nav.classList.toggle('open', !open)
})
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false') }))

const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('visible')), { threshold: .12 })
document.querySelectorAll('.service-card, .proof-copy, .gallery, .steps > div').forEach(el => observer.observe(el))
