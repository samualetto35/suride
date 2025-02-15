// 1. Google Apps Script’ten aldığınız JSON verisinin URL’sini buraya girin:
const apiUrl = "https://script.google.com/macros/s/AKfycbw5GyHX04FcPONRpFGvXxj291suRvDEKaQBmzT352k-APMLPE-CRL1aRBQEgYIPCqeq/exec";

document.addEventListener("DOMContentLoaded", () => {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("data-container");
      
      // data bir dizi (array) olduğu için forEach ile dönüyoruz
      data.forEach(item => {
        // Örneğin Sheet’teki başlıklar: Sürücü ID, İsim Soyisim, Email, Telefon vb.
        // item["Sürücü ID"], item["İsim Soyisim"] gibi erişebilirsiniz
        const div = document.createElement("div");
        div.classList.add("data-item");
        
        // Burada, istediğiniz UI tasarımını kurabilirsiniz.
        // Örneğin, tablo veya liste şeklinde göstermek mümkün.
        div.innerHTML = `
          <p><strong>Sürücü ID:</strong> ${item["Sürücü ID"] || ""}</p>
          <p><strong>İsim Soyisim:</strong> ${item["İsim Soyisim"] || ""}</p>
          <p><strong>Email:</strong> ${item["Email"] || ""}</p>
          <p><strong>Telefon:</strong> ${item["Telefon"] || ""}</p>
          <p><strong>Ne Zaman?:</strong> ${item["Ne Zaman?"] || ""}</p>
          <p><strong>Nereye?:</strong> ${item["Nereye?"] || ""}</p>
          <p><strong>Not:</strong> ${item["Not"] || ""}</p>
          <p><strong>İletişim Bilgisi Gönder:</strong> ${item["İletişim Bilgisi Gönder"] || ""}</p>
        `;
        
        container.appendChild(div);
      });
    })
    .catch(error => {
      console.error("Veriler çekilemedi:", error);
    });
});
