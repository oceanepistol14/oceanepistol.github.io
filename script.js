const phrase= "Passionnée par le digital et la tech, je souhaite rejoindre L'Oréal pour contribuer à des projets innovants dès ma premières année de BTS SIO."
function ecrireLettre(element, texte, callback) {
    let i = 0;
    element.style.opacity = 1;
    const interval = setInterval(()=>{
        element.textContent += texte[i];
        i++;
        if (i>= texte.length) {
          clearInterval(interval);
          if(callback) callback();

        }
    }, 40);
 }

 function afficher(element, callback){
    element.classList.remove('cache');
    setTimeout(callback, 800);
 }

 const logo = document.querySelector('.header');
 const phraseEl = document.querySelector('.phrase-entreprise');
 const carte = document.querySelector('.carte');
 const bouton = document.querySelector(';droite a');

 // 1. Logo
 afficher(logo, () => {
   // 2. Phrase lettre par lettre
  phraseEl.style.opacity = 0;
  phraseEl.classList.remove('cache');
  ecrireLettre(phraseEl, phrase, () => {
    // 3. Carte
    afficher(carte, () => {
        //4. boutons un par un 
        boutons.forEach((btn, i)=>{
            setTimeout(() => {
              btn.classList.remove('cache');
            }, i * 300);
         });
      });
   });
});
