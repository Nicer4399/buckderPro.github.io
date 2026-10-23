document.getElementById("calculate").addEventListener("click",()=>{
 const n=id=>Number(document.getElementById(id).value);
 const revenue=n("revenue"), cost=n("cost"), commission=n("commission"), payment=n("payment"), ads=n("ads"), other=n("other");
 if([revenue,cost,commission,payment,ads,other].some(x=>!Number.isFinite(x)||x<0)||commission>100||payment>100){document.getElementById("result").textContent="กรุณาตรวจสอบข้อมูล";return;}
 const fees=revenue*(commission+payment)/100, profit=revenue-cost-fees-ads-other;
 document.getElementById("result").textContent=`ค่าธรรมเนียมรวม ${fees.toFixed(2)} บาท | กำไรสุทธิประมาณ ${profit.toFixed(2)} บาท`;
});
