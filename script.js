// JavaScript
var map = L.map('map').setView([33.649241798686866, 130.4406793574221], 15);

L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',{attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>',}).addTo(map);

//アイコン
const whiteIcon = L.icon({
    iconUrl: 'images/ico.png',
    shadowUrl: 'images/ico_shadow.png',
  
  iconSize:     [40, 40], // size of the icon
  shadowSize:   [40, 40], // size of the shadow
  iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
  shadowAnchor: [20, 40],  // the same for the shadow
  popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
  });

L.marker([33.649241798686866, 130.4406793574221],{ icon: whiteIcon }).addTo(map).bindPopup('ここだよ！！<br><img src="images/img01.png" alt="img">').openPopup();