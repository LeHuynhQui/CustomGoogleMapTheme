function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 10.782499608811191, lng: 106.69579953013512},
        zoom: 18,
        mapId: 'a34bf50c512f626a',
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewontrol: false,
    });


    // name
    // lat
    // lng
    //url
    // scaledSize: w
    // scaledSize: h


    const markers = [
        [
            "Hồ Con Rùa",
            10.782518807374975,
            106.69589600877963,
            "./../../assets/img/lake.svg",
            50,
            50

        ],
        [
            "Bạn đang ở đây",
            10.782914035048783,
            106.69556877930609,
            "./../../assets/img/location.svg",
            30,
            30

        ],
        [
            "Trường Đại Học Kinh Tế Tp.HCM",
            10.78308793506077,
            106.6947426589958,
            "./../../assets/img/school.svg",
            50,
            50
        ],
        [
            "UEH-International School of Business",
            10.782971580631868, 
            106.6953080003592,
            "./../../assets/img/school.svg",
            50,
            50
        ],
        [
            "Đại học Kiến trúc Thành phố Hồ Chí Minh",
            10.782346049767138, 
            106.6941200844468,
            "./../../assets/img/school.svg",
            50,
            50
        ],

        [
            "ILA - Nguyễn Đình Chiểu",
            10.782797944718105, 
            106.69376621981624,
            "./../../assets/img/school.svg",
            50,
            50
        ],
        [
            "Highlands Cafe Hồ Con Rùa",
            10.782900860801357,
            106.6964378150426,
            "./../../assets/img/coffee-cup.svg",
            30,
            30
        ],
        [
            "The Coffee House",
            10.7836965843111,
            106.69452808223839,
            "./../../assets/img/coffee-cup.svg",
            30,
            30
        ],
        [
            "Saigon Casa Café",
            10.78196091411665, 
            106.69629536338878,
            "./../../assets/img/coffee-cup.svg",
            30,
            30
        ],
        [
            "Trung Nguyên Legend Café",
            10.78175343426164, 
            106.69821343296249,
            "./../../assets/img/coffee-cup.svg",
            30,
            30
        ],
        [
            "Hotel des Arts Saigon MGallery Collection",
            10.782350176742797,
            106.69730148619061,
            "./../../assets/img/5-stars.svg",
            40,
            40
        ],
        [
            "Sherwood Residence",
            10.782568550179414, 
            106.69295647204164,
            "./../../assets/img/5-stars.svg",
            40,
            40
        ],
        [
            "Sherwood Suites",
            10.782292752364862, 
            106.69238106402663,
            "./../../assets/img/hotel.svg",
            40,
            40
        ],
        [
            "Khách sạn Aristo",
            10.781064242497434, 
            106.69466599861758,
            "./../../assets/img/hotel.svg",
            40,
            40
        ],
        [
            "ATM Agribank",
            10.781825315415869,
            106.69498933803742,
            "./../../assets/img/atm.svg",
            40,
            40
        ],
        [
            "Ngân hàng số Timo",
            10.781949609445574,
            106.69455352045024,
            "./../../assets/img/banking.svg",
            40,
            40
        ],
        [
            "HDBank - Hội sở",
            10.783563868058593, 
            106.69903067913043,
            "./../../assets/img/banking.svg",
            40,
            40
        ],
        [
            "Jollibee Pasteur",
            10.78148270371898, 
            106.69482391494876,
            "./../../assets/img/fried-chicken.svg",
            40,
            40
        ],
        [
            "KFC",
            10.783584141446507, 
            106.6951231900652,
            "./../../assets/img/fried-chicken.svg",
            40,
            40
        ],
        [
            "Vườn bia POC POC",
            10.781200965692152, 
            106.6927488249095,
            "./../../assets/img/beer.svg",
            40,
            40
        ],
        [
            "Nhà hàng Phố 79 Phạm Ngọc Thạch",
            10.781772549000301, 
            106.69647053040836,
            "./../../assets/img/cutlery.svg",
            40,
            40
        ],
        [
            "Baozi Restaurant",
            10.783195228578197, 
            106.69798549354772,
            "./../../assets/img/cutlery.svg",
            40,
            40
        ],
        [
            "Pizza 4P's Hai Ba Trung",
            10.783405489670548, 
            106.6969708852121,
            "./../../assets/img/pizza.svg",
            40,
            40
        ],
        [
            "Tổng Lãnh Sự Quán Pháp",
            10.783157012835401, 
            106.6987270809818,
            "./../../assets/img/embassy.svg",
            40,
            40
        ],
        [
            "The Box Market",
            10.781398728145918, 
            106.69763807615527,
            "./../../assets/img/supermarket.svg",
            40,
            40
        ],
        
        
    ];

    for (let i = 0;  i < markers.length; i++) {
        const currentMarker = markers[i];

        const marker = new google.maps.Marker({
            position: { lat: currentMarker[1], lng: currentMarker[2]},
            map,
            title: currentMarker[0],
            icon: {
                url: currentMarker[3],
                scaledSize: new google.maps.Size (currentMarker[4], currentMarker[5])
            },
            animation: google.maps.Animation.DROP,
        });
    
        const infowindow = new google.maps.InfoWindow({
            content: currentMarker[0],
        });
    
        marker.addListener("click", () => {
            infowindow.open({
              anchor: marker,
              map,
              shouldFocus: true,
            });
        });

    }
}
