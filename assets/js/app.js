document.addEventListener("DOMContentLoaded",()=>{
 const C=window.MYTIJE_CONFIG||{};
 document.getElementById("year").textContent=new Date().getFullYear();
 const menu=document.getElementById("menuToggle"),nav=document.getElementById("primaryNav");
 menu.onclick=()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open))};
 nav.querySelectorAll("a").forEach(a=>a.onclick=()=>nav.classList.remove("open"));
 const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.08});
 document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
 const dlg=document.getElementById("privateDialog"),title=document.getElementById("privateTitle");
 document.querySelectorAll("[data-private]").forEach(b=>b.onclick=()=>{title.textContent=b.dataset.private;dlg.showModal()});
 dlg.querySelector(".dialog-x").onclick=()=>dlg.close();dlg.querySelector(".dialog-ok").onclick=()=>dlg.close();
 const ig=document.getElementById("instagramLink"),fb=document.getElementById("facebookLink"),em=document.getElementById("emailLink");
 if(C.INSTAGRAM_URL)ig.href=C.INSTAGRAM_URL;
 if(C.FACEBOOK_URL)fb.href=C.FACEBOOK_URL;else fb.onclick=e=>{e.preventDefault();alert("URL Facebook belum diisi di config.js")};
 if(C.EMAIL){em.href="mailto:"+C.EMAIL;em.querySelector("small").textContent=C.EMAIL}else em.onclick=e=>{e.preventDefault();alert("Email belum diisi di config.js")};
});