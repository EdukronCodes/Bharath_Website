// Basic interactive behaviors for the static scaffold
document.addEventListener('DOMContentLoaded',function(){
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  navToggle && navToggle.addEventListener('click',()=>{
    if(mainNav.style.display==='flex') mainNav.style.display='none'; else mainNav.style.display='flex';
    mainNav.style.flexDirection='column';
  });

  // CTAs
  document.getElementById('bookBtn')?.addEventListener('click',()=>{openBookingForm()});
  document.getElementById('getPlanBtn')?.addEventListener('click',()=>{document.getElementById('mealplans').scrollIntoView({behavior:'smooth'})});
  document.getElementById('startJourney')?.addEventListener('click',()=>{openBookingForm()});

  // Booking form handling (frontend-only)
  const form = document.getElementById('appointmentForm');
  form && form.addEventListener('submit',function(e){
    e.preventDefault();
    const data = new FormData(form);
    const payload = {};
    data.forEach((v,k)=>payload[k]=v);
    console.log('Appointment submitted (demo):',payload);
    alert('Thanks! Your request has been received. We will contact you shortly.');
    form.reset();
  });

  document.getElementById('whatsappBtn')?.addEventListener('click',()=>{
    const phone = '+91XXXXXXXXXX';
    const text = encodeURIComponent('Hello, I would like a consultation regarding meal plans.');
    const url = `https://wa.me/${phone.replace(/[^\d]/g,'')}?text=${text}`;
    window.open(url,'_blank');
  });

  // Simple sticky class based on scroll
  const header = document.querySelector('.site-header');
  const stickyOffset = header.offsetTop;
  window.addEventListener('scroll',()=>{
    if(window.pageYOffset>stickyOffset) header.classList.add('is-sticky'); else header.classList.remove('is-sticky');
  });

});

function openBookingForm(){
  document.getElementById('contact').scrollIntoView({behavior:'smooth'});
}
