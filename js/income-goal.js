document.getElementById("calculate").addEventListener("click",()=>{
 const goal=Number(document.getElementById("goal").value), profit=Number(document.getElementById("profit").value), days=Number(document.getElementById("days").value), daily=Number(document.getElementById("dailyQty").value);
 if([goal,profit,days,daily].some(x=>!Number.isFinite(x)||x<0)||days<1){document.getElementById("result").textContent="กรุณาตรวจสอบข้อมูล";return;}
 if(profit===0&&goal>0){document.getElementById("result").textContent="กำไรต่อชิ้นต้องมากกว่า 0 เพื่อคำนวณจำนวนชิ้น";return;}
 const total=profit*daily*days, needed=profit>0?Math.ceil(goal/profit):0;
 document.getElementById("result").textContent=`ต้องขาย ${needed.toLocaleString("th-TH")} ชิ้นต่อเดือน หรือประมาณ ${(needed/days).toFixed(2)} ชิ้นต่อวัน | หากขายวันละ ${daily} ชิ้น จะได้กำไรประมาณ ${total.toLocaleString("th-TH",{minimumFractionDigits:2,maximumFractionDigits:2})} บาทต่อเดือน`;
});
