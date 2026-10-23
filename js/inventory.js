const inventory=[];
document.getElementById("add").addEventListener("click",()=>{
 const name=document.getElementById("product").value.trim(), stock=Number(document.getElementById("stock").value), sold=Number(document.getElementById("sold").value), alertAt=Number(document.getElementById("alertAt").value);
 if(!name||![stock,sold,alertAt].every(Number.isFinite)||stock<0||sold<0||alertAt<0){document.getElementById("result").textContent="กรุณากรอกข้อมูลให้ถูกต้อง";return;}
 const remaining=stock-sold;
 if(remaining<0){document.getElementById("result").textContent="จำนวนที่ขายมากกว่าสต็อกที่มี";return;}
 inventory.push({name,remaining,sold});
 const item=inventory[inventory.length-1];
 const li=document.createElement("li");
 li.textContent=`${item.name}: คงเหลือ ${item.remaining} ชิ้น, ขายแล้ว ${item.sold} ชิ้น${item.remaining<=alertAt?" — แจ้งเตือน: สินค้าใกล้หมด":""}`;
 document.getElementById("list").appendChild(li);
 document.getElementById("result").textContent=`บันทึกแล้ว | สินค้าทั้งหมด ${inventory.length} รายการ | จำนวนขายรวม ${inventory.reduce((s,x)=>s+x.sold,0)} ชิ้น`;
});
