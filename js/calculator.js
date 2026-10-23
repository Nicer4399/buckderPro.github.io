function num(id) {
  const value = Number(document.getElementById(id).value);
  return Number.isFinite(value) ? value : 0;
}
function money(value) {
  return value.toLocaleString("th-TH", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " บาท";
}
function show(id, text) {
  document.getElementById(id).textContent = text;
}

document.getElementById("calculatePrice").addEventListener("click", () => {
  const cost = num("cost") + num("extraCost");
  const percent = num("profitPercent");
  const mode = document.getElementById("profitMode").value;
  if (cost < 0 || percent < 0 || (mode === "margin" && percent >= 100)) {
    show("priceResult", "กรุณาตรวจสอบข้อมูล: Margin ต้องน้อยกว่า 100%");
    return;
  }
  const price = mode === "markup" ? cost * (1 + percent / 100) : cost / (1 - percent / 100);
  const profit = price - cost;
  const margin = price > 0 ? profit / price * 100 : 0;
  show("priceResult", `ราคาขายแนะนำ ${money(price)} | กำไรต่อชิ้น ${money(profit)} | อัตรากำไรจากราคาขาย ${margin.toFixed(2)}%`);
});

document.getElementById("calculateSales").addEventListener("click", () => {
  const qty = num("quantitySold"), price = num("salePrice"), cost = num("unitCost"), extra = num("batchExtra");
  if (qty < 0 || price < 0 || cost < 0 || extra < 0) return show("salesResult", "กรุณาใช้ตัวเลขตั้งแต่ 0 ขึ้นไป");
  const revenue = qty * price, totalCost = qty * cost + extra;
  show("salesResult", `ยอดขายรวม ${money(revenue)} | ต้นทุนรวม ${money(totalCost)} | กำไรโดยประมาณ ${money(revenue - totalCost)}`);
});

document.getElementById("calculateCost").addEventListener("click", () => {
  const qty = num("batchQuantity");
  if (qty <= 0) return show("costResult", "จำนวนสินค้าในล็อตต้องมากกว่า 0");
  const total = num("productCost") * qty + num("shipping") + num("packaging") * qty +
    num("platformFee") * qty + num("labor") + num("otherCost");
  show("costResult", `ต้นทุนรวมของล็อต ${money(total)} | ต้นทุนจริงต่อชิ้น ${money(total / qty)}`);
});

document.getElementById("calculateBreakEven").addEventListener("click", () => {
  const fixed = num("fixedCost"), price = num("breakEvenPrice"), variable = num("variableCost"), target = num("targetProfit");
  const contribution = price - variable;
  if (fixed < 0 || price < 0 || variable < 0 || target < 0) return show("breakEvenResult", "กรุณาใช้ตัวเลขตั้งแต่ 0 ขึ้นไป");
  if (contribution <= 0) return show("breakEvenResult", "ราคาขายต้องมากกว่าต้นทุนผันแปรต่อชิ้น จึงจะคำนวณจุดคุ้มทุนได้");
  show("breakEvenResult", `จุดคุ้มทุน ${Math.ceil(fixed / contribution).toLocaleString("th-TH")} ชิ้น | จำนวนที่ต้องขายเพื่อให้ได้กำไรเป้าหมาย ${Math.ceil((fixed + target) / contribution).toLocaleString("th-TH")} ชิ้น`);
});
