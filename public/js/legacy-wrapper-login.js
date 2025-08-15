// src/assets/js/legacy-wrapper.js

function loadScript(url) {
    return new Promise((resolve, reject) => {
      const el = document.createElement('script');
      el.src = url;
      el.onload = resolve;
      el.onerror = () => reject(new Error(`Erreur chargement script: ${url}`));
      document.body.appendChild(el);
    });
  }
  
  async function initLegacyLoginScripts() {
    try {
        
      await loadScript('libs/swiper/swiper-bundle.min.js');
      await loadScript('js/authentication.js');
      await loadScript('js/show-password.js');
   
  
      console.log("Tous les scripts legacy sont chargés !");
    } catch (error) {
      console.error("Erreur lors du chargement d’un script :", error);
    }
  }
  
  window.initLegacyLoginScripts = initLegacyLoginScripts;
  