/* =========================================================
   COOL CARS - JAVASCRIPT
   Digunakan untuk:
   1. Halaman utama / daftar mobil
   2. Halaman order Ford Mustang
   3. Halaman order BMW M8
   4. Halaman order Koenigsegg Jesko Attack
   ========================================================= */

/* =========================================================
   1. JALANKAN SETELAH HTML SELESAI DIMUAT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  /* =======================================================
     2. CURSOR GLOW
     ======================================================= */

  const cursorGlow = document.createElement("div");

  cursorGlow.className = "cursor-glow";

  cursorGlow.style.position = "fixed";
  cursorGlow.style.width = "180px";
  cursorGlow.style.height = "180px";
  cursorGlow.style.borderRadius = "50%";
  cursorGlow.style.pointerEvents = "none";
  cursorGlow.style.zIndex = "9999";
  cursorGlow.style.transform = "translate(-50%, -50%)";

  cursorGlow.style.background =
    "radial-gradient(circle, rgba(255,255,255,0.15), transparent 70%)";

  cursorGlow.style.filter = "blur(5px)";
  cursorGlow.style.opacity = "0";
  cursorGlow.style.transition = "opacity 0.2s ease";

  document.body.appendChild(cursorGlow);

  /* =======================================================
     CURSOR GLOW MOUSEMOVE
     ======================================================= */

  document.addEventListener("mousemove", function (event) {
    if (window.innerWidth <= 900) {
      return;
    }

    cursorGlow.style.left = event.clientX + "px";
    cursorGlow.style.top = event.clientY + "px";
    cursorGlow.style.opacity = "1";
  });

  document.addEventListener("mouseleave", function () {
    cursorGlow.style.opacity = "0";
  });

  /* =======================================================
     3. EFEK HALAMAN UTAMA
     Mendeteksi semua panel mobil
     ======================================================= */

  const semuaPanel = document.querySelectorAll(".panel");

  semuaPanel.forEach(function (panel) {
    const gambar = panel.querySelector(".photo");

    const logo = panel.querySelector(".logo");

    const harga = panel.querySelector(".price");

    const tombolBuy = panel.querySelector(".buy");

    /* =====================================================
       3A. PANEL 3D MENGIKUTI CURSOR
       ===================================================== */

    panel.addEventListener("mousemove", function (event) {
      if (window.innerWidth <= 900) {
        return;
      }

      const rect = panel.getBoundingClientRect();

      const x = event.clientX - rect.left;

      const y = event.clientY - rect.top;

      const posisiX = x / rect.width - 0.5;

      const posisiY = y / rect.height - 0.5;

      const rotateX = posisiY * -4;

      const rotateY = posisiX * 4;

      panel.style.transform = `perspective(1000px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         scale(1.01)`;

      panel.style.transition = "transform 0.1s ease";

      /* =================================================
         GAMBAR MOBIL
         ================================================= */

      if (gambar) {
        const gerakX = posisiX * 18;

        const gerakY = posisiY * 18;

        gambar.style.transform = `translate(${gerakX}px, ${gerakY}px)
           scale(1.06)`;

        gambar.style.transition = "transform 0.1s ease";
      }

      /* =================================================
         LOGO
         ================================================= */

      if (logo) {
        const gerakLogoX = posisiX * -10;

        const gerakLogoY = posisiY * -10;

        logo.style.transform = `translate(${gerakLogoX}px, ${gerakLogoY}px)`;

        logo.style.transition = "transform 0.15s ease";
      }

      /* =================================================
         HARGA
         ================================================= */

      if (harga) {
        const gerakHargaX = posisiX * -6;

        const gerakHargaY = posisiY * -6;

        harga.style.transform = `translate(${gerakHargaX}px, ${gerakHargaY}px)`;

        harga.style.transition = "transform 0.15s ease";
      }
    });

    /* =====================================================
       3B. CURSOR KELUAR PANEL
       ===================================================== */

    panel.addEventListener("mouseleave", function () {
      panel.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";

      panel.style.transition = "transform 0.5s ease";

      if (gambar) {
        gambar.style.transform = "";

        gambar.style.transition = "transform 0.5s ease";
      }

      if (logo) {
        logo.style.transform = "";

        logo.style.transition = "transform 0.5s ease";
      }

      if (harga) {
        harga.style.transform = "";

        harga.style.transition = "transform 0.5s ease";
      }
    });

    /* =====================================================
       3C. HOVER TOMBOL BUY
       ===================================================== */

    if (tombolBuy) {
      tombolBuy.addEventListener("mouseenter", function () {
        tombolBuy.style.transform = "translateY(-5px) scale(1.08)";

        tombolBuy.style.background = "rgba(255, 255, 255, 0.48)";

        tombolBuy.style.boxShadow = "0 0.6rem 1.5rem rgba(0,0,0,0.25)";

        tombolBuy.style.transition = "all 0.2s ease";
      });

      tombolBuy.addEventListener("mouseleave", function () {
        tombolBuy.style.transform = "translateY(0) scale(1)";

        tombolBuy.style.background = "";

        tombolBuy.style.boxShadow = "";

        tombolBuy.style.transition = "all 0.3s ease";
      });

      tombolBuy.addEventListener("mousedown", function () {
        tombolBuy.style.transform = "scale(0.92)";
      });

      tombolBuy.addEventListener("mouseup", function () {
        tombolBuy.style.transform = "translateY(-5px) scale(1.08)";
      });
    }
  });

  /* =========================================================
     4. ANIMASI PANEL SAAT HALAMAN DIBUKA
     ========================================================= */

  semuaPanel.forEach(function (panel, index) {
    panel.style.opacity = "0";

    panel.style.transform = "translateY(40px)";

    setTimeout(function () {
      panel.style.transition = "opacity 0.8s ease, transform 0.8s ease";

      panel.style.opacity = "1";

      panel.style.transform = "translateY(0)";
    }, index * 200);
  });

  /* =========================================================
     5. ELEMENT HALAMAN ORDER
     ========================================================= */

  const form = document.getElementById("orderForm");

  const nama = document.getElementById("nama");

  const email = document.getElementById("mail");

  const telp = document.getElementById("telp");

  const tombolOrder = document.querySelector(".go");

  const gambarOrder = document.querySelector(".pic img");

  const cardGambar = document.querySelector(".pic");

  const cardOrder = document.querySelector(".order");

  /* =========================================================
     6. MENGAMBIL NAMA MOBIL
     DARI DATA-CAR
     ========================================================= */

  const namaMobil = document.body.dataset.car || "Mobil";

  /* =========================================================
     7. MENYIMPAN TEKS TOMBOL ORDER
     ========================================================= */

  const teksTombolAwal = tombolOrder ? tombolOrder.textContent : "ORDER";

  /* =========================================================
     8. EFEK INPUT
     ========================================================= */

  const semuaInput = document.querySelectorAll(".row input");

  semuaInput.forEach(function (input) {
    input.addEventListener("focus", function () {
      input.style.transform = "scale(1.03)";

      input.style.transition = "transform 0.2s ease";
    });

    input.addEventListener("blur", function () {
      input.style.transform = "scale(1)";
    });
  });

  /* =========================================================
     9. NOMOR TELEPON HANYA ANGKA
     ========================================================= */

  if (telp) {
    telp.addEventListener("input", function () {
      telp.value = telp.value.replace(/[^0-9]/g, "");
    });
  }

  /* =========================================================
     10. EFEK 3D CARD GAMBAR ORDER
     ========================================================= */

  if (cardGambar) {
    cardGambar.addEventListener("mousemove", function (event) {
      if (window.innerWidth <= 900) {
        return;
      }

      const rect = cardGambar.getBoundingClientRect();

      const x = event.clientX - rect.left;

      const y = event.clientY - rect.top;

      const centerX = rect.width / 2;

      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -7;

      const rotateY = ((x - centerX) / centerX) * 7;

      cardGambar.style.transform = `perspective(900px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         scale(1.02)`;

      cardGambar.style.transition = "transform 0.1s ease";
    });

    cardGambar.addEventListener("mouseleave", function () {
      cardGambar.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";

      cardGambar.style.transition = "transform 0.5s ease";
    });
  }

  /* =========================================================
     11. EFEK GAMBAR MOBIL ORDER
     ========================================================= */

  if (gambarOrder && cardGambar) {
    cardGambar.addEventListener("mousemove", function (event) {
      if (window.innerWidth <= 900) {
        return;
      }

      const rect = cardGambar.getBoundingClientRect();

      const x = event.clientX - rect.left;

      const y = event.clientY - rect.top;

      const gerakX = (x / rect.width - 0.5) * 25;

      const gerakY = (y / rect.height - 0.5) * 25;

      gambarOrder.style.transform = `translate(${gerakX}px, ${gerakY}px)
         scale(1.05)`;

      gambarOrder.style.transition = "transform 0.1s ease";
    });

    cardGambar.addEventListener("mouseleave", function () {
      gambarOrder.style.transform = "translate(0, 0) scale(1)";

      gambarOrder.style.transition = "transform 0.5s ease";
    });
  }

  /* =========================================================
     12. HOVER GAMBAR ORDER
     ========================================================= */

  if (gambarOrder) {
    gambarOrder.addEventListener("mouseenter", function () {
      gambarOrder.style.filter =
        "drop-shadow(0 1.5rem 1.5rem rgba(0,0,0,0.45))";
    });

    gambarOrder.addEventListener("mouseleave", function () {
      gambarOrder.style.filter = "drop-shadow(0 1rem 1rem rgba(0,0,0,0.30))";
    });
  }

  /* =========================================================
     13. EFEK CARD FORM ORDER
     ========================================================= */

  if (cardOrder) {
    cardOrder.addEventListener("mouseenter", function () {
      cardOrder.style.transform = "translateY(-5px)";

      cardOrder.style.transition = "transform 0.3s ease";
    });

    cardOrder.addEventListener("mouseleave", function () {
      cardOrder.style.transform = "translateY(0)";
    });
  }

  /* =========================================================
     14. MAGNET EFFECT TOMBOL ORDER
     ========================================================= */

  if (tombolOrder) {
    tombolOrder.addEventListener("mousemove", function (event) {
      if (window.innerWidth <= 900) {
        return;
      }

      const rect = tombolOrder.getBoundingClientRect();

      const x = event.clientX - rect.left;

      const y = event.clientY - rect.top;

      const moveX = (x - rect.width / 2) * 0.12;

      const moveY = (y - rect.height / 2) * 0.12;

      tombolOrder.style.transform = `translate(${moveX}px, ${moveY}px)
         scale(1.04)`;

      tombolOrder.style.transition = "transform 0.1s ease";
    });

    tombolOrder.addEventListener("mouseleave", function () {
      tombolOrder.style.transform = "translate(0, 0) scale(1)";

      tombolOrder.style.transition = "transform 0.3s ease";
    });

    tombolOrder.addEventListener("mousedown", function () {
      tombolOrder.style.transform = "scale(0.92)";
    });

    tombolOrder.addEventListener("mouseup", function () {
      tombolOrder.style.transform = "scale(1.04)";
    });
  }

  /* =========================================================
     15. VALIDASI FORM ORDER
     ========================================================= */

  if (form && nama && email && telp) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const namaUser = nama.value.trim();

      const emailUser = email.value.trim();

      const telpUser = telp.value.trim();

      /* ===================================================
         VALIDASI NAMA
         =================================================== */

      if (namaUser === "") {
        tampilkanPesan(
          "Data Belum Lengkap!",
          "Silakan masukkan nama Anda.",
          "warning",
        );

        nama.focus();

        return;
      }

      /* ===================================================
         VALIDASI EMAIL
         =================================================== */

      const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!polaEmail.test(emailUser)) {
        tampilkanPesan(
          "Email Tidak Valid!",
          "Silakan masukkan alamat email yang benar.",
          "error",
        );

        email.focus();

        return;
      }

      /* ===================================================
         VALIDASI NOMOR TELEPON
         =================================================== */

      if (telpUser === "") {
        tampilkanPesan(
          "Data Belum Lengkap!",
          "Silakan masukkan nomor telepon Anda.",
          "warning",
        );

        telp.focus();

        return;
      }

      if (telpUser.length < 10) {
        tampilkanPesan(
          "Nomor Tidak Valid!",
          "Nomor telepon minimal 10 angka.",
          "warning",
        );

        telp.focus();

        return;
      }

      /* ===================================================
         ORDER BERHASIL
         =================================================== */

      if (tombolOrder) {
        tombolOrder.disabled = true;

        tombolOrder.textContent = "ORDERED ✓";

        tombolOrder.style.transform = "scale(1.05)";
      }

      /* ===================================================
         SWEETALERT
         =================================================== */

      if (typeof Swal !== "undefined") {
        Swal.fire({
          title: "ORDER BERHASIL!",

          html:
            `Terima kasih, <b>${namaUser}</b>!<br><br>` +
            `Pesanan <b>${namaMobil}</b> berhasil dibuat.`,

          icon: "success",

          confirmButtonText: "OK",

          confirmButtonColor: "#771b31",

          background: "#8a3045",

          color: "#ffffff",

          backdrop: "rgba(0, 0, 0, 0.65)",
        });
      } else {
        alert(
          "ORDER BERHASIL!\n\n" +
            "Terima kasih " +
            namaUser +
            "!\n\n" +
            "Pesanan " +
            namaMobil +
            " berhasil dibuat.",
        );
      }

      /* ===================================================
         KEMBALIKAN TOMBOL SETELAH 3 DETIK
         =================================================== */

      setTimeout(function () {
        if (tombolOrder) {
          tombolOrder.disabled = false;

          tombolOrder.textContent = teksTombolAwal;

          tombolOrder.style.transform = "translate(0, 0) scale(1)";
        }
      }, 3000);
    });
  }

  /* =========================================================
     16. FUNGSI ALERT
     ========================================================= */

  function tampilkanPesan(judul, pesan, icon) {
    if (typeof Swal !== "undefined") {
      Swal.fire({
        title: judul,

        text: pesan,

        icon: icon,

        confirmButtonText: "OK",

        confirmButtonColor: "#771b31",

        background: "#8a3045",

        color: "#ffffff",
      });
    } else {
      alert(judul + "\n\n" + pesan);
    }
  }

  /* =========================================================
     17. ANIMASI HALAMAN ORDER SAAT DIBUKA
     ========================================================= */

  if (cardGambar && cardOrder) {
    cardGambar.style.opacity = "0";

    cardOrder.style.opacity = "0";

    cardGambar.style.transform = "translateX(-60px)";

    cardOrder.style.transform = "translateX(60px)";

    setTimeout(function () {
      cardGambar.style.transition = "opacity 0.8s ease, transform 0.8s ease";

      cardOrder.style.transition = "opacity 0.8s ease, transform 0.8s ease";

      cardGambar.style.opacity = "1";

      cardOrder.style.opacity = "1";

      cardGambar.style.transform = "translateX(0)";

      cardOrder.style.transform = "translateX(0)";
    }, 100);
  }

  /* =========================================================
     18. RESPONSIVE
     ========================================================= */

  function cekResponsive() {
    if (window.innerWidth <= 900) {
      cursorGlow.style.display = "none";
    } else {
      cursorGlow.style.display = "block";
    }
  }

  window.addEventListener("resize", cekResponsive);

  cekResponsive();

  /* =========================================================
     19. INFORMASI CONSOLE
     ========================================================= */

  console.log("====================================");

  console.log("COOL CARS JAVASCRIPT AKTIF");

  console.log("Halaman:", window.location.pathname);

  console.log("Mobil:", namaMobil);

  console.log("====================================");
});
