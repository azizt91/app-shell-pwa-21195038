function toggleMenu() {
    var navMenu = document.querySelector('.nav-menu');
    navMenu.style.display = (navMenu.style.display === 'block') ? 'none' : 'block';
  }
  
  function showHome() {
    hideAllPages();
    hideMenu();
    document.getElementById('home').style.display = 'block';
    document.getElementById('products').style.display = 'none';
    document.getElementById('price').style.display = 'none';
    document.getElementById('order').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
  }
  
  function showProducts() {
    hideAllPages();
    hideMenu();
    document.getElementById('home').style.display = 'none';
    document.getElementById('products').style.display = 'block';
    document.getElementById('price').style.display = 'none';
    document.getElementById('order').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
  }
  
  function showPrice() {
    hideAllPages();
    hideMenu();
    document.getElementById('home').style.display = 'none';
    document.getElementById('products').style.display = 'none';
    document.getElementById('price').style.display = 'block';
    document.getElementById('order').style.display = 'none';
    document.getElementById('contact').style.display = 'none';

  }

  function showOrder() {
    hideAllPages();
    hideMenu();
    document.getElementById('home').style.display = 'none';
    document.getElementById('products').style.display = 'none';
    document.getElementById('price').style.display = 'none';
    document.getElementById('order').style.display = 'block';
    document.getElementById('contact').style.display = 'none';
  }
  
  function showContact() {
    hideAllPages();
    hideMenu();
    document.getElementById('home').style.display = 'none';
    document.getElementById('products').style.display = 'none';
    document.getElementById('price').style.display = 'none';
    document.getElementById('order').style.display = 'none';
    document.getElementById('contact').style.display = 'block';
  }
  
  function hideAllPages() {
    var pages = document.querySelectorAll('.main-content > div');
    pages.forEach(function (page) {
      page.style.display = 'none';
    });
  }
  
  function hideMenu() {
    var navMenu = document.querySelector('.nav-menu');
    navMenu.style.display = 'none';
  }

//Formulir Pemesanan

// Logika untuk menentukan harga berdasarkan pilihan paket
document.getElementById('paket').addEventListener('change', function () {
    var hargaElement = document.getElementById('harga');
    var selectedPaket = this.value;

    // Set harga berdasarkan pilihan paket
    switch (selectedPaket) {
        case 'Paket Silver':
            hargaElement.value = 'Rp.75.000';
            break;
        case 'Paket Gold':
            hargaElement.value = 'Rp.95.000';
            break;
        case 'Paket Platinum':
            hargaElement.value = 'Rp.150.000';
            break;
        default:
            hargaElement.value = '';
    }
});

//Menu Menu

        var buttons = document.querySelectorAll('.btn-outline-light, .btn-dark, .btn-outline-primary, .btn-primary');
        buttons.forEach(function (button) {
        button.addEventListener('click', function () {
        showOrder(); // Panggil fungsi showContact() saat salah satu tombol diklik
            });
        });

        var buttons = document.querySelectorAll('.navbar-brand, .navbar-brand-logo');
        buttons.forEach(function (button) {
        button.addEventListener('click', function () {
        showHome(); // Panggil fungsi showContact() saat salah satu tombol diklik
            });
        });

        document.querySelector('.btn-primary').addEventListener('click', function () {
            showProducts(); // Panggil fungsi showHome() saat navbar-brand diklik
        });
