
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("buckderToggle");
  const speech = document.getElementById("buckderSpeech");
  const message = document.getElementById("buckderMessage");

  if (!toggle || !speech || !message) return;

  const messages = [
    "สวัสดีครับ ผมคือ Buckder ผู้ช่วยส่วนตัวของ Pomelo",
    "ถ้าอยากให้อัปเดตอะไร บอกไนท์ได้เลยครับ",
    "เช่น ทำให้ผมเป็น AI ที่ตอบโต้ได้ หรือแสดงข้อมูลเป็นกราฟ มี Database หรือคำนวณจากไฟล์ Excel ได้"
  ];

  let clickCount = 0;

  toggle.addEventListener("click", function () {
    // คลิกครั้งที่ 4: ปิดกล่องข้อความและเริ่มรอบใหม่
    if (clickCount >= messages.length) {
      speech.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
      clickCount = 0;
      return;
    }

    // คลิกครั้งที่ 1–3: แสดงข้อความทีละประโยค
    message.textContent = messages[clickCount];
    speech.hidden = false;
    toggle.setAttribute("aria-expanded", "true");

    clickCount++;
  });
});
