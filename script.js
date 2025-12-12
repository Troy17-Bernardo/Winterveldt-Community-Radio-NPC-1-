// script.js - simple navigation and demo interactions
document.addEventListener('DOMContentLoaded',function(){
  // attach nav buttons to simulate navigation by showing/hiding sections if present
  const navButtons = document.querySelectorAll('[data-target]');
  navButtons.forEach(btn=>{
    btn.addEventListener('click',()=>{
      const t = btn.getAttribute('data-target');
      if(!t) return;
      // if target is external link (starts with #) scroll
      const el = document.querySelector(t);
      if(el){ el.scrollIntoView({behavior:'smooth',block:'start'}); }
      // for demo, set active style
      navButtons.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
  // simple donate form demo
  const donateForm = document.getElementById('donate-form');
  if(donateForm){
    donateForm.addEventListener('submit',function(e){
      e.preventDefault();
      const amt = document.getElementById('donation-amount').value;
      alert('Thank you. Donation of R' + amt + ' recorded (demo).');
      donateForm.reset();
    });
  }
});
