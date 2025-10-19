// Año
document.getElementById('y').textContent = new Date().getFullYear();

// Menú móvil
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');
toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  nav.setAttribute('aria-expanded', String(!expanded));
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const el = document.querySelector(a.getAttribute('href'));
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'});
      nav.setAttribute('aria-expanded','false'); toggle.setAttribute('aria-expanded','false'); }
  });
});

// Scroll progress
const bar = document.querySelector('.scrollbar__bar');
const docH = () => document.documentElement.scrollHeight - window.innerHeight;
const setBar = () => bar.style.width = ((window.scrollY / Math.max(1, docH())) * 100) + '%';
addEventListener('scroll', setBar, {passive:true}); addEventListener('resize', setBar); setBar();

// Intersection Observer reveal + counters
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('in');
      // Contadores
      if(entry.target.matches('.kpis__grid')){
        entry.target.querySelectorAll('[data-count]').forEach(el=>{
          const target = Number(el.dataset.count||0);
          const start = performance.now(), dur = 1200;
          const step = (t)=>{
            const p = Math.min(1, (t-start)/dur);
            el.textContent = Math.floor(target * (p<0.5 ? 2*p*p : -1+(4-2*p)*p)); // ease
            if(p<1) requestAnimationFrame(step);
            else el.textContent = String(target);
          };
          requestAnimationFrame(step);
        });
      }
      io.unobserve(entry.target);
    }
  });
},{threshold:.15});
document.querySelectorAll('[data-observe]').forEach(el=>io.observe(el));

// Parallax hero (suave)
const hero = document.querySelector('[data-parallax] .hero__video');
let ticking = false;
const onScroll = () => {
  if(!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if(!ticking){ window.requestAnimationFrame(()=>{
    const y = window.scrollY * 0.12; hero.style.transform = `translate3d(0, ${y}px, 0) scale(1.02)`; ticking=false; }); ticking=true; }
};
addEventListener('scroll', onScroll, {passive:true});

// Reforzar autoplay
const hv = document.getElementById('heroVideo');
hv && hv.play().catch(()=>{ document.addEventListener('click', ()=>hv.play().catch(()=>{}), {once:true}); });

// Tilt 3D en cards (seguro touch)
const tilts = document.querySelectorAll('.tilt');
tilts.forEach(card=>{
  let rect; const damp=16;
  const move = (x,y)=>{
    rect = rect || card.getBoundingClientRect();
    const rx = ((y-rect.top)/rect.height - .5)*-6;
    const ry = ((x-rect.left)/rect.width - .5)*6;
    card.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  };
  const reset = ()=>{ card.style.transform = ''; rect=null; };
  card.addEventListener('pointermove', e=>move(e.clientX,e.clientY));
  card.addEventListener('pointerleave', reset);
  card.addEventListener('pointerdown', e=>move(e.clientX,e.clientY));
  card.addEventListener('pointerup', reset);
});

// Scroller (sectores) — drag/swipe
document.querySelectorAll('[data-scroller]').forEach(scroller=>{
  let isDown=false, startX=0, scrollL=0;
  scroller.addEventListener('pointerdown', e=>{ isDown=true; startX=e.pageX; scrollL=scroller.scrollLeft; scroller.setPointerCapture(e.pointerId); });
  scroller.addEventListener('pointermove', e=>{ if(!isDown) return; const dx=e.pageX-startX; scroller.scrollLeft = scrollL - dx; });
  scroller.addEventListener('pointerup', ()=> isDown=false);
});

// Slider Casos — botones y swipe
const track = document.getElementById('casesTrack');
const btns = document.querySelectorAll('.slider__btn');
let idx = 0;
function goTo(i){ const total = track.children.length; idx = (i+total)%total; track.scrollTo({left: track.clientWidth*idx, behavior:'smooth'}); }
btns.forEach(b=> b.addEventListener('click', ()=> goTo(idx + (b.dataset.dir==='next'?1:-1)) ));
let startX=0;
track.addEventListener('pointerdown', e=> startX = e.clientX);
track.addEventListener('pointerup', e=>{ const dx = e.clientX - startX; if(Math.abs(dx)>40) goTo(idx + (dx<0?1:-1)); });

// Accordion accesible
document.querySelectorAll('[data-accordion] .acc__item').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const exp = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!exp));
  });
});

// Lightbox (dialog)
document.querySelectorAll('[data-open]').forEach(trig=>{
  trig.addEventListener('click', ()=>{
    const sel = trig.getAttribute('data-open');
    const dlg = document.querySelector(sel);
    if(dlg){ dlg.showModal(); const v=dlg.querySelector('video'); v && v.play().catch(()=>{}); }
  });
});
document.querySelectorAll('[data-close]').forEach(c=>{
  c.addEventListener('click', ()=>{
    const dlg = c.closest('dialog'); const v=dlg.querySelector('video'); v && v.pause(); dlg.close();
  });
});

// Botón magnético
document.querySelectorAll('.btn--magnetic').forEach(btn=>{
  btn.addEventListener('pointermove', e=>{
    const r = btn.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    btn.style.setProperty('--mx', x+'%'); btn.style.setProperty('--my', y+'%');
  });
});

// Validación ligera
const form = document.getElementById('contactForm');
const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const setError = (input,msg)=>{ const row=input.closest('.form__row'); row.querySelector('.error').textContent = msg||''; input.setAttribute('aria-invalid', msg?'true':'false'); }
form.addEventListener('submit', async (e)=>{
  e.preventDefault();
  let ok=true;
  if(!form.name.value.trim()){ setError(form.name,'Obligatorio'); ok=false; } else setError(form.name,'');
  if(!emailRx.test(form.email.value)){ setError(form.email,'Email no válido'); ok=false; } else setError(form.email,'');
  if(!form.project.value){ setError(form.project,'Selecciona una opción'); ok=false; } else setError(form.project,'');
  if(!ok) return;
  try{
    // await fetch('/api/contact', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(Object.fromEntries(new FormData(form)))});
    form.reset(); form.querySelector('.form__success').hidden = false; setTimeout(()=> form.querySelector('.form__success').hidden = true, 5000);
  }catch{ alert('No se ha podido enviar. Inténtalo de nuevo.'); }
});