"use strict";
let map;
let center;

const foodToPlaces = {
    "babka": [
        {
            name: "zabars",
            id: "ChIJm-V6LoZYwokRcCjwircmGxY",
            note: "UWS unassuming coffee and breakfast shop with good cinnamon babka and even better chocolate babka",
            metaDetail: "Zabars Upper West Side",
        },
        {
            name: "breads-bakery",
            id: "ChIJtVIZk_VYwokRV2fdzrhZt0Y",
            note: "Chocolate babka",
            metaDetail: "Breads Bakery Broadway Union Square",
        },
    ],
    "bagel": [
        {
            name: "apollo-bakery",
            id: "ChIJ25-nfABZwokRav08Oz-3HrM",
            note: "Unique toasted open faced bagels with reasonable amount of cream cheese, optionally sliced tomatoes, smoked salmon, capers and onions. Must go early on any weekend day.",
            metaDetail: "Apollo Bagels West Village",
        },
        {
            name: "russ-and-daughters",
            id: "ChIJ6bxU_x5ZwokRgsVBuHEagpE",
            note: "Norwegian smoked salmon on everything bagel",
            metaDetail: "Russ and Daughters on 34th",
        },
        {
            name: "nyc-bagel",
            id: "ChIJczucdv9ZwokRd75dIZfZqxY",
            note: "Fluffy bagels for $2, with a side of smear for $3, enough for two people",
            metaDetail: "New York City Bagel & Coffee House NYCBCH 8th Avenue"
        }
    ]
};


async function initMap() {
    const {Map} = await google.maps.importLibrary("maps");
    const {Place} =  await google.maps.importLibrary("places");
    const {LatLngBounds} = await google.maps.importLibrary("core");


    
    // center = { lat: 37.4161493, lng: -122.0812166 };
    map = new Map(document.getElementById('map'), {
        // center: center,
        zoom: 11,
        mapId: 'DEMO_MAP_ID',
    });
    const bounds = new LatLngBounds();

    // getPlaces("/data/best.json");
  //   const place = new Place({
  //       id: "ChIJm-V6LoZYwokRcCjwircmGxY",
  //       // requestedLanguage: "en", // optional
  //     });
  //   await place.fetchFields({
  //   fields: ["displayName", "formattedAddress", "location"],
  // });
  // // Log the result
  // console.log(place.displayName);
  // console.log(place.formattedAddress);

    for (const [food, places] of Object.entries(foodToPlaces)) {
        for (const place of places) {
            const placeInstance = new Place({id: place.id});
            await placeInstance.fetchFields({
                fields: ["displayName", "formattedAddress", "location"],
            });
            console.log(placeInstance.displayName);
            await addMarker(placeInstance);
            bounds.extend(placeInstance.location);
        }
    }
    map.fitBounds(bounds);
}

async function addMarker(placeInstance) {
    const {AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    const marker = new AdvancedMarkerElement({
        map,
        position: placeInstance.location,
        title: placeInstance.displayName,
    });
}

// async function getPlaces(filePath) {
//     try {
//         const response = await fetch(filePath);
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const jsonContents = await response.json();
//         return JSON.parse(jsonContents);
//     } catch (error) {
//         console.error("Could not read JSON:", error);
//     }
// }

async function mapPlaces() {
    const {Place} = await google.maps.importLibrary("places");
    const {AdvancedMarkerElement} = await google.maps.importLibrary("marker");
    const request = {
        textQuery: 'Don Angie',
        fields: ['displayName', 'location', 'businessStatus'],
        includedType: 'restaurant',
        // locationBias: { lat: 37.4161493, lng: -122.0812166 },
        // isOpenNow: true,
        language: 'en-US',
        // maxResultCount: 8,
        minRating: 3.2,
        region: 'us',
        useStrictTypeFiltering: false,
    };
    //@ts-ignore
    const {places} = await Place.searchByText(request);
    if (places.length) {
        console.log(places);
        const {LatLngBounds} = await google.maps.importLibrary("core");
        const bounds = new LatLngBounds();
        // Loop through and get all the results.
        places.forEach((place) => {
            const markerView = new AdvancedMarkerElement({
                map,
                position: place.location,
                title: place.displayName,
            });
            bounds.extend(place.location);
            console.log(place);
        });
        map.fitBounds(bounds);
    } else {
        console.log('No results');
    }
}

initMap();