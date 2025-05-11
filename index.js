// --- Smooth Scrolling untuk tautan navigasi ---
document.querySelectorAll('.site-nav a[href^="#"], .hero-buttons a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        // Pastikan tautan mengarah ke ID di halaman yang sama
        if (targetId && targetId !== '#' && document.querySelector(targetId)) {
            e.preventDefault(); // Hentikan perilaku default

            const targetElement = document.querySelector(targetId);
            // Hitung posisi scroll, kurangi tinggi header fixed
            const headerHeight = document.querySelector('.site-header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth' // Efek scroll halus
            });
        } else if (targetId === '#') {
            // Jika hanya #, scroll ke atas halaman
            e.preventDefault();
             window.scrollTo({
                top: 0,
                behavior: 'smooth'
             });
        }
    });
});


// --- Optional: highlight navigasi saat scroll (lebih kompleks, bisa ditambahkan nanti) ---
// Logikanya: Cek posisi scroll, tentukan section mana yang sedang terlihat,
// lalu tambahkan class 'active' ke link navigasi yang sesuai.

// --- Optional: Form Validation Sederhana (Client-side Only) ---
// PENTING: Validasi ini hanya di sisi browser. Anda MUTLAK membutuhkan
// validasi di sisi server (backend) untuk keamanan dan keandalan data.
/*
const contactForm = document.getElementById('contact-form');

if (contactForm) { // Cek jika form kontak ada di halaman
    contactForm.addEventListener('submit', function(event) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        // Validasi dasar: cek field wajib terisi
        if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
            alert('Mohon lengkapi semua field yang wajib diisi.');
            event.preventDefault(); // Hentikan submit form
            return;
        }

        // Validasi format email sederhana
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            alert('Mohon masukkan format email yang valid.');
            event.preventDefault(); // Hentikan submit form
            return;
        }

        // Jika semua validasi client-side berhasil, form akan disubmit
        // ke URL yang ditentukan di atribut 'action' di tag <form>.
        // Anda perlu mengkonfigurasi backend atau layanan form untuk menerima data ini.
        console.log('Form valid, preparing to send.');
        // Tambahkan kode di sini jika Anda ingin menampilkan pesan 'mengirim...'
    });
}
*/
