function gototop() {
    document.documentElement.scrollTop = 0;
  }

function xacnhandonhang()
{
    var soluong=document.getElementById("hoten")
    if (soluong != null)
    {
        soluong = soluong.value;
        alert("Đặt hàng thành công")
    }
    else 
    {
        alert("chua ghi het thong tin")
    }
}

function thongbao() {
    var thongbao = confirm("bạn muốn đặt sản phẩm này ?");
    if (thongbao == true) {
        open("dathang.html")
    } else {
        alert("Mời bạn xem sản phẩm khác");
    }
}

function init(){
  var giohang = document.getElementById("giohang1");
  var giohang2 = document.getElementById("giohang2")
  var closefooter = document.getElementById("closefooter");
  var tienhanhdathang = document.getElementById("order");
  closefooter.onclick = function () {
    giohang.style.display = "none";
  }
  tienhanhdathang.onclick = function () {
    open()
  }
  var xacnhanm1= document.getElementById("dathangm1");
    xacnhanm1.onclick=function(){
    var ghang = `
    <div class="giohangbody1">
    <img class="hinhsanpham" width="100" height = "100" src = "maygame1.jpg">
    <div id="gia"></div>
    <div id="gia"></div>
    </div>
    `;
    giohang2.innerHTML = ghang;
    {
      giohang.style.display = "block";
    }
  }
  var xacnhanm2= document.getElementById("dathangm2");
  xacnhanm2.onclick=function(){
  var ghang = `
  <div class="giohangbody1">
  <img class="hinhsanpham" width="100" height = "100" src = "maygame2.jpg">
  <div id="gia"></div>
  <div id="gia"></div>
  </div>
  `;
  giohang2.innerHTML = ghang;
  {
    giohang.style.display = "block";
  }
  }
  var xacnhanm3= document.getElementById("dathangm3");
  xacnhanm3.onclick=function(){
  var ghang = `
  <div class="giohangbody1">
  <img class="hinhsanpham" width="100" height = "100" src = "maygame3.jpg">
  <div id="gia"></div>
  <div id="gia"></div>
  </div>
  `;
  giohang2.innerHTML = ghang;
  {
    giohang.style.display = "block";
  }
  }
var xacnhanm4= document.getElementById("dathangm4");
xacnhanm4.onclick=function(){
var ghang = `
<div class="giohangbody1">
<img class="hinhsanpham" width="100" height = "100" src = "maygame4.jpg">
<div id="gia"></div>
<div id="gia"></div>
</div>
`;
giohang2.innerHTML = ghang;
{
  giohang.style.display = "block";
}
}
var xacnhanm5= document.getElementById("dathangm5");
xacnhanm5.onclick=function(){
var ghang = `
<div class="giohangbody1">
<img class="hinhsanpham" width="100" height = "100" src = "maygame5.jpg">
<div id="gia"></div>
<div id="gia"></div>
</div>
`;
giohang2.innerHTML = ghang;
{
  giohang.style.display = "block";
}
}
var xacnhanm6= document.getElementById("dathangm6");
xacnhanm6.onclick=function(){
var ghang = `
<div class="giohangbody1">
<img class="hinhsanpham" width="100" height = "100" src = "maygame6.jpg">
<div id="gia"></div>
<div id="gia"></div>
</div>
`;
giohang2.innerHTML = ghang;
{
giohang.style.display = "block";
}
}
var xacnhanm7= document.getElementById("dathangm7");
xacnhanm7.onclick=function(){
var ghang = `
<div class="giohangbody1">
<img class="hinhsanpham" width="100" height = "100" src = "maygame7.jpg">
<div id="gia"></div>
<div id="gia"></div>
</div>
`;
giohang2.innerHTML = ghang;
{
  giohang.style.display = "block";
}
}
var xacnhanm8= document.getElementById("dathangm8");
xacnhanm8.onclick=function(){
var ghang = `
<div class="giohangbody1">
<img class="hinhsanpham" width="100" height = "100" src = "maygame8.jpg">
<div id="gia"></div>
<div id="gia"></div>
</div>
`;
giohang2.innerHTML = ghang;
{
  giohang.style.display = "block";
  }
  }
}


function inits(){
  var giohang = document.getElementById("giohang1");
  var giohang2 = document.getElementById("giohang2")
  var closefooter = document.getElementById("closefooter");
  var tienhanhdathang = document.getElementById("order");
  closefooter.onclick = function () {
    giohang.style.display = "none";
  }
  tienhanhdathang.onclick = function () {
    open()
  }
  var xacnhanm1= document.getElementById("dathangm1");
    xacnhanm1.onclick=function(){
    var ghang = `
    <div class="giohangbody1">
    <img class="hinhsanpham" width="30%" src = "diagame1.jpg">
    <div id="gia"></div>
    <div id="gia"></div>
    </div>
    `;
    giohang2.innerHTML = ghang;
    {
      giohang.style.display = "block";
    }
  }
  var xacnhanm2= document.getElementById("dathangm2");
  xacnhanm2.onclick=function(){
  var ghang = `
  <div class="giohangbody1">
  <img class="hinhsanpham" width="100" height = "100" src = "maygame2.jpg">
  <div id="gia"></div>
  <div id="gia"></div>
  </div>
  `;
  giohang2.innerHTML = ghang;
  {
    giohang.style.display = "block";
  }
  }
  var xacnhanm3= document.getElementById("dathangm3");
  xacnhanm3.onclick=function(){
  var ghang = `
  <div class="giohangbody1">
  <img class="hinhsanpham" width="100" height = "100" src = "maygame3.jpg">
  <div id="gia"></div>
  <div id="gia"></div>
  </div>
  `;
  giohang2.innerHTML = ghang;
  {
    giohang.style.display = "block";
  }
  }
var xacnhanm4= document.getElementById("dathangm4");
xacnhanm4.onclick=function(){
var ghang = `
<div class="giohangbody1">
<img class="hinhsanpham" width="100" height = "100" src = "maygame4.jpg">
<div id="gia"></div>
<div id="gia"></div>
</div>
`;
giohang2.innerHTML = ghang;
{
  giohang.style.display = "block";
}
}
var xacnhanm5= document.getElementById("dathangm5");
xacnhanm5.onclick=function(){
var ghang = `
<div class="giohangbody1">
<img class="hinhsanpham" width="100" height = "100" src = "maygame5.jpg">
<div id="gia"></div>
<div id="gia"></div>
</div>
`;
giohang2.innerHTML = ghang;
{
  giohang.style.display = "block";
}
}
var xacnhanm6= document.getElementById("dathangm6");
xacnhanm6.onclick=function(){
var ghang = `
<div class="giohangbody1">
<img class="hinhsanpham" width="100" height = "100" src = "maygame6.jpg">
<div id="gia"></div>
<div id="gia"></div>
</div>
`;
giohang2.innerHTML = ghang;
{
giohang.style.display = "block";
}
}
var xacnhanm7= document.getElementById("dathangm7");
xacnhanm7.onclick=function(){
var ghang = `
<div class="giohangbody1">
<img class="hinhsanpham" width="100" height = "100" src = "maygame7.jpg">
<div id="gia"></div>
<div id="gia"></div>
</div>
`;
giohang2.innerHTML = ghang;
{
  giohang.style.display = "block";
}
}
var xacnhanm8= document.getElementById("dathangm8");
xacnhanm8.onclick=function(){
var ghang = `
<div class="giohangbody1">
<img class="hinhsanpham" width="100" height = "100" src = "maygame8.jpg">
<div id="gia"></div>
<div id="gia"></div>
</div>
`;
giohang2.innerHTML = ghang;
{
  giohang.style.display = "block";
  }
  }
}