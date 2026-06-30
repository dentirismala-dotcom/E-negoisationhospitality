function checkOrder() {
  const items = document.querySelectorAll(".item");
  const order = Array.from(items).map(item => item.textContent);
  const correct = ["Opening", "Offer", "Counter-offer", "Closing"];

  if (JSON.stringify(order) === JSON.stringify(correct)) {
    document.getElementById("result").innerHTML = "✅ Benar! Struktur negosiasi sudah tepat.";
  } else {
    document.getElementById("result").innerHTML = "❌ Masih salah, coba urutkan lagi.";
  }
}
