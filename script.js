const coffeeShops = [
  {
    name: "Epic Coffee",
    lat: -7.7828,
    lng: 110.4081,
    description: "Tempat cozy dengan kopi enak dan area luas."
  },
  {
    name: "No. 27 Coffee",
    lat: -7.7820,
    lng: 110.3955,
    description: "Interior estetik dan kopi berkualitas."
  },
  {
    name: "Satu Coffee",
    lat: -7.7811,
    lng: 110.4143,
    description: "Cocok untuk kerja dengan WiFi cepat."
  },
  {
    name: "Kopi Klotok",
    lat: -7.6700,
    lng: 110.4100,
    description: "Pemandangan sawah dan suasana tradisional."
  },
  {
    name: "Simetri Coffee",
    lat: -7.7705,
    lng: 110.3772,
    description: "Cafe modern dengan racikan kopi spesial."
  },
  {
    name: "Roaster and Bear",
    lat: -7.7825,
    lng: 110.3642,
    description: "Desain unik dan menu beragam."
  },
  {
    name: "Awor Gallery & Coffee",
    lat: -7.8018,
    lng: 110.3640,
    description: "Cafe sekaligus galeri seni di tengah kota."
  }
];

const map = L.map('map').setView([-7.7828, 110.4081], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const markers = [];

function renderShops(shops) {
  const shopList = document.getElementById('shopList');
  shopList.innerHTML = '';

  markers.forEach(marker => map.removeLayer(marker));
  markers.length = 0;

  shops.forEach(shop => {
    const div = document.createElement('div');
    div.className = 'shop';
    div.innerHTML = `<strong>${shop.name}</strong><br>${shop.description}`;
    shopList.appendChild(div);

    const marker = L.marker([shop.lat, shop.lng])
      .addTo(map)
      .bindPopup(`<strong>${shop.name}</strong><br>${shop.description}`);
    markers.push(marker);
  });
}

function filterShops() {
  const query = document.getElementById('search').value.toLowerCase();
  const filtered = coffeeShops.filter(shop =>
    shop.name.toLowerCase().includes(query)
  );
  renderShops(filtered);
}

renderShops(coffeeShops);
