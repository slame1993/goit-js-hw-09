const t=document.querySelector("button[data-start]"),e=document.body;let d;t.addEventListener("click",(()=>{t.setAttribute("disabled",""),r.removeAttribute("disabled",""),d=setInterval((()=>{e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)}));const r=document.querySelector("button[data-stop]");r.setAttribute("disabled",""),r.addEventListener("click",(()=>{clearInterval(d),t.removeAttribute("disabled",""),r.setAttribute("disabled","")}));
//# sourceMappingURL=01-color-switcher.e125944a.js.map