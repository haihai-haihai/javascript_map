// JavaScript
var map = L.map('map').setView([33.649241798686866, 130.4406793574221], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//アイコン
//const whiteIcon = L.icon({
    //iconUrl: 'images/ico.png',
    //shadowUrl: 'images/ico_shadow.png',
  
 // iconSize:     [40, 40], // size of the icon
 // shadowSize:   [40, 40], // size of the shadow
  //iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
  //shadowAnchor: [20, 40],  // the same for the shadow
  //popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
  //});


  //複数アイコンをまとめて定義
const circleIcon = L.Icon.extend({
  options: {
    shadowUrl: 'images/ico_shadow.png',
    iconSize: [40, 40],
    shadowSize: [40, 40],
    iconAnchor: [20, 40],
    shadowAnchor: [20, 40],
    popupAnchor: [0, -42]
  }
});

const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' }),
  pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' });

L.marker([33.649241798686866, 130.4406793574221],{ icon: whiteIcon }).addTo(map).bindPopup('ここだよ！！<br><img src="images/img01.png" alt="img">').openPopup();
L.marker([33.660067, 130.44385],{ icon: pinkIcon }).addTo(map).bindPopup('ここだよ！！<br><img src="images/img01.png" alt="img">').openPopup();


const circle = L.circle([33.649141, 130.440572], {
  color: 'blue', //円の輪郭線の色
  fillColor: 'blue', //円の塗りつぶしの色
  fillOpacity: 0.3, //塗りつぶしの不透明度
  radius: 1000 //半径、メートルで指定
}).addTo(map);

circle.bindPopup("半径1kmの範囲");


// 多角形の表示
const polygon = L.polygon([
  [33.58942, 130.420504],
  [33.67364, 130.300083],
  [33.693209, 130.456467]
], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.3
}).addTo(map);




// クリック位置の緯度経度表示
const popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("ここは" + e.latlng.toString() + "です")
    .openOn(map);
}

map.on('click', onMapClick);