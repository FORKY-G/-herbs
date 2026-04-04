// 1. Leaflet 지도 설정
const map = L.map('map', {
    crs: L.CRS.Simple,
    // minZoom: -3 부분은 아래에서 자동으로 설정할 것이므로 지웠습니다.
    maxZoom: 3   // 확대 한도 (더 많이 확대하고 싶다면 숫자를 3, 4 등으로 늘리세요)
});

// 2. 픽셀크기
const imgWidth = 4560;  // 가로
const imgHeight = 4560; // 세로

// 3. 지도의 경계(Bounds) 설정: [0, 0]부터 [세로 높이, 가로 너비]까지
const imageBounds = [[0, 0], [imgHeight, imgWidth]];

// 4. hanwol-map.jpg 이미지 띄우기
L.imageOverlay('hanwol-map.jpg', imageBounds).addTo(map);

// 5. 처음 화면을 열었을 때 지도가 화면에 꽉 차게 보이도록 설정
map.fitBounds(imageBounds);

// 6. [추가된 부분] 현재 화면에 꽉 찬 상태의 줌 레벨을 최소 줌(minZoom)으로 고정!
// 이렇게 하면 지금보다 더 축소할 수 없습니다.
map.setMinZoom(map.getZoom());

// 7. [추가된 부분] 지도를 드래그할 때 이미지가 화면 밖(회색/검은 여백)으로 도망가지 않게 영역 제한
map.setMaxBounds(imageBounds);
