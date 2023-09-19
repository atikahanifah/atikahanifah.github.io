// Fungsi untuk memeriksa status login
function checkLoginStatus() {
    var isLoggedIn = sessionStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
        // Jika pengguna belum login, tampilkan peringatan
        alert("Anda harus login dahulu untuk mengakses halaman ini.");
        window.location.href = "index.html"; // Arahkan kembali ke halaman login
    }
}

// Panggil fungsi untuk memeriksa status login saat halaman dimuat
window.onload = function() {
    checkLoginStatus();
};
