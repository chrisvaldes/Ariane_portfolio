// // src/assets/js/legacy-wrapper.js

// function loadScript(url) {
//     return new Promise((resolve, reject) => {
//       const el = document.createElement('script');
//       el.src = url;
//       el.onload = resolve;
//       el.onerror = () => reject(new Error(`Erreur chargement script: ${url}`));
//       document.body.appendChild(el);
//     });
//   }

//   async function initLegacyScripts() {
//     try {
//       // await loadScript('libs/choices.js/public/assets/scripts/choices.min.js');
//       await loadScript('js/main.js');
//       await loadScript('@popperjs/core/umd/popper.min.js'); 
//       await loadScript('bootstrap/js/bootstrap.bundle.min.js');
//       await loadScript('libs/swiper/swiper-bundle.min.js');
//       await loadScript('js/swiper.js')
//       await loadScript('js/defaultmenu.min.js');
//       await loadScript('libs/node-waves/waves.min.js');
//       await loadScript('js/sticky.js'); 
//       await loadScript('libs/@simonwep/pickr/pickr.es5.min.js');
//       await loadScript('libs/jsvectormap/js/jsvectormap.min.js');
//       await loadScript('libs/jsvectormap/maps/world-merc.js');
//       await loadScript('libs/apexcharts/apexcharts.min.js');
//       await loadScript('libs/chart.js/chart.min.js');
//       await loadScript('js/crm-dashboard.js');
//       await loadScript('js/custom.js');
//       await loadScript('js/custom-switcher.min.js');
//       await loadScript('scrollbar/scrollbar.js') 


//       console.log("Tous les scripts legacy sont chargés !");
//     } catch (error) {
//       console.error("Erreur lors du chargement d’un script :", error);
//     }
//   }

//   window.initLegacyScripts = initLegacyScripts;



async function initLegacyScripts() {
  try {
    await loadScript('js/main.js');
    await loadScript('@popperjs/core/umd/popper.min.js');
    await loadScript('bootstrap/js/bootstrap.bundle.min.js');
    await loadScript('libs/swiper/swiper-bundle.min.js');
    await loadScript('js/swiper.js');
    await loadScript('js/defaultmenu.min.js');
    await loadScript('libs/node-waves/waves.min.js');
    await loadScript('js/sticky.js');
    await loadScript('libs/@simonwep/pickr/pickr.es5.min.js');
    await loadScript('libs/jsvectormap/js/jsvectormap.min.js');
    await loadScript('libs/jsvectormap/maps/world-merc.js');
    await loadScript('libs/apexcharts/apexcharts.min.js');
    await loadScript('libs/chart.js/chart.min.js');
    await loadScript('js/crm-dashboard.js');
    await loadScript('js/custom.js');
    await loadScript('libs/choices.js/public/assets/scripts/choices.min.js')
    await loadScript('js/custom-switcher.min.js');
    await loadScript('scrollbar/scrollbar.js');
    await loadScript('libs/prismjs/prism.js');
    await loadScript('js/prism-custom.js');
    await loadScript('js/choices.js');
    await loadScript('libs/flatpickr/flatpickr.min.js');
    await loadScript('js/date&time_pickers.js');
    await loadScript('js/Toasts.js');
    await loadScript('libs/filepond/filepond.min.js');
    await loadScript('libs/filepond-plugin-image-preview/filepond-plugin-image-preview.min.js');
    await loadScript('libs/filepond-plugin-image-exif-orientation/filepond-plugin-image-exif-orientation.min.js');
    await loadScript('libs/filepond-plugin-file-validate-size/filepond-plugin-file-validate-size.min.js');
    await loadScript('libs/filepond-plugin-file-encode/filepond-plugin-file-encode.min.js');
    await loadScript('libs/filepond-plugin-image-edit/filepond-plugin-image-edit.min.js');
    await loadScript('libs/filepond-plugin-file-validate-type/filepond-plugin-file-validate-type.min.js');
    await loadScript('libs/filepond-plugin-file-validate-type/filepond-plugin-file-validate-type.min.js');
    await loadScript('libs/filepond-plugin-image-crop/filepond-plugin-image-crop.min.js');
    await loadScript('libs/filepond-plugin-image-resize/filepond-plugin-image-resize.min.js');
    await loadScript('libs/filepond-plugin-image-transform/filepond-plugin-image-transform.min.js');
    await loadScript('libs/dropzone/dropzone-min.js');
    await loadScript('js/fileupload.js'); 
    


    console.log("✅ Tous les scripts legacy sont chargés !");

    // ➕ Réactiver les dropdown Bootstrap manuellement :
    const dropdowns = document.querySelectorAll('[data-bs-toggle="dropdown"]');
    dropdowns.forEach(el => {
      new bootstrap.Dropdown(el); // ⚠️ suppose que bootstrap.bundle.min.js expose 'bootstrap' globalement
    });


    document.addEventListener('DOMContentLoaded', function () {
      var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
      })
    });

    document.getElementById('toggleDropdown').addEventListener('click', function () {
      const dropdown = document.getElementById('customDropdown');
      if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'block';
      } else {
        dropdown.style.display = 'none';
      }
    });

    document.getElementById('openModalBtn').addEventListener('click', function (e) {
      e.preventDefault();

      const myModal = new bootstrap.Modal(document.getElementById('viewFieldModal'));
      myModal.show();
    });

    // Activer les tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    document.addEventListener('click', function (event) {
      const navbar = document.getElementById('navbarNavDropdown');
      const toggler = document.querySelector('.navbar-toggler');

      // Vérifie si le clic est en dehors de la navbar et du bouton toggler
      if (!navbar.contains(event.target) && !toggler.contains(event.target)) {
        const bootstrapCollapse = new bootstrap.Collapse(navbar, {
          toggle: false
        });
        bootstrapCollapse.hide();
      }
    });



  } catch (error) {
    console.error("❌ Erreur lors du chargement d’un script :", error);
  }
}
