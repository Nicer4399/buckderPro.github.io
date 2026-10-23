document.getElementById("calculate").addEventListener("click", () => {
  const price=Number(document.getElementById("price").value), discount=Number(document.getElementById("discount").value)/100;
  const paid=Number(document.getElementById("promoQty").value), free=Number(document.getElementById("freeQty").value), cost=Number(document.getElementById("cost").value);
  if(price<0 || discount<0 || discount>1 || paid<1 || free<0 || cost<0) { document.getElementById("result").textContent="กรุณาตรวจสอบข้อมูล"; return; }
  const revenue=price*(1-discount)*paid, totalCost=cost*(paid+free), profit=revenue-totalCost;
  document.getElementById("result").textContent=`ยอดรับเงิน ${revenue.toFixed(2)} บาท | จำนวนสินค้าที่ส่ง ${paid+free} ชิ้น | ต้นทุนรวม ${totalCost.toFixed(2)} บาท | กำไร/ขาดทุน ${profit.toFixed(2)} บาท`;
});
