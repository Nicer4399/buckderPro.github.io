const amount = document.getElementById("amount");
const rate = document.getElementById("vatRate");
document.getElementById("calcVat").addEventListener("click", () => {
  const a = Number(amount.value), r = Number(rate.value) / 100;
  if (a < 0 || r < 0 || !Number.isFinite(a) || !Number.isFinite(r)) { document.getElementById("vatResult").textContent = "กรุณาตรวจสอบข้อมูล"; return; }
  const included = document.getElementById("vatMode").value === "included";
  const before = included ? a / (1 + r) : a;
  const vat = included ? a - before : a * r;
  const total = included ? a : before + vat;
  document.getElementById("vatResult").textContent = `ราคาก่อน VAT ${before.toFixed(2)} บาท | VAT ${vat.toFixed(2)} บาท | ราคารวม VAT ${total.toFixed(2)} บาท`;
});
document.getElementById("checkThreshold").addEventListener("click", () => {
  const revenue = Number(document.getElementById("annualRevenue").value);
  document.getElementById("thresholdResult").textContent = revenue > 1800000
    ? "รายรับเกิน 1,800,000 บาทต่อปี ควรตรวจสอบหน้าที่จดทะเบียน VAT กับกรมสรรพากร"
    : "รายรับยังไม่เกินเกณฑ์ทั่วไป 1,800,000 บาทต่อปี โปรดตรวจสอบเงื่อนไขกิจการ";
});
