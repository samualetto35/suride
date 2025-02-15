// JSON verisinin bulunduğu Apps Script API URL'sini buraya yapıştırın
const apiUrl = "https://script.google.com/macros/s/XXX/exec";

document.addEventListener("DOMContentLoaded", () => {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("data-container");
      data.forEach(item => {
        // Her bir veriyi kart olarak oluşturuyoruz
        const card = document.createElement("div");
        card.classList.add("data-card");
        
        // Kart içeriği: Tasarımı Figma'dan aldığınız şablona göre uyarlayabilirsiniz
        card.innerHTML = `
          <h2>${item["İsim Soyisim"] || "İsim Yok"}</h2>
          <p><strong>Email:</strong> ${item["Email"] || "Bilinmiyor"}</p>
          <p><strong>Telefon:</strong> ${item["Telefon"] || "Bilinmiyor"}</p>
        `;
        
        container.appendChild(card);
      });
    })
    .catch(error => console.error("Veriler alınamadı:", error));
});
