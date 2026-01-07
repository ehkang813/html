const SERVICE_KEY = "YOUR_PUBLIC_DATA_SERVICE_KEY";


const listEl = document.getElementById("foodList");
const detailEl = document.getElementById("detail");


// 1. 맛집 리스트 불러오기
fetch(`https://apis.data.go.kr/6260000/FoodService/getFoodService?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=10&resultType=json`)
.then(res => res.json())
.then(data => {
const items = data.getFoodService.item;


items.forEach(item => {
const li = document.createElement("li");
li.className = "food-item";
li.innerHTML = `
<h3>${item.MAIN_TITLE}</h3>
<p>주소: ${item.ADDR1}</p>
<p>메뉴: ${item.RPRSNTV_MENU || "-"}</p>
`;


li.onclick = () => openDetail(item);
listEl.appendChild(li);
});
});


// 2. 상세 열기
function openDetail(item) {
detailEl.classList.remove("hidden");


document.getElementById("detailImg").src = item.MAIN_IMG_NORMAL || "";
document.getElementById("dName").innerText = item.MAIN_TITLE;
document.getElementById("dAddr").innerText = item.ADDR1;
document.getElementById("dDesc").innerText = item.ITEMCNTNTS || "";
document.getElementById("dMenu").innerText = item.RPRSNTV_MENU || "";
document.getElementById("dTel").innerText = item.CNTCT_TEL || "";
document.getElementById("dTime").innerText = item.USAGE_DAY_WEEK_AND_TIME || "";


drawMap(item.LAT, item.LNG, item.MAIN_TITLE);
}


function closeDetail() {
detailEl.classList.add("hidden");
}


// 3. 카카오맵 표시
function drawMap(lat, lng, title) {
const container = document.getElementById("map");
const options = {
center: new kakao.maps.LatLng(lat, lng),
level: 3
};


const map = new kakao.maps.Map(container, options);


const marker = new kakao.maps.Marker({
position: options.center
});


marker.setMap(map);
}