var toursModal = $("#tours");
var photosModal = $("#photos");
var contactModal = $("#contact");
var modalBgTours = $(".modal-bg-tours");
var modalBgPhotos = $(".modal-bg-photos");
var modalBgContact = $(".modal-bg-contact");
var modalClose = $(".modal-close");

toursModal.on("click", function () {
    modalBgTours.addClass("bg-active");
});

photosModal.on("click", function () {
    modalBgPhotos.addClass("bg-active");
});

contactModal.on("click", function () {
    modalBgContact.addClass("bg-active");
});

$(".sidenav-trigger").on("click", function () {
    $(".modal-bg-sidenav").addClass("bg-active");
});

modalClose.on("click", function () {
    modalBgTours.removeClass("bg-active");
    modalBgPhotos.removeClass("bg-active");
    modalBgContact.removeClass("bg-active");
});

//Bands In Town API
function searchBandsInTown(artist) {
    // Querying the bandsintown api for the selected artist, the ?app_id parameter is required, but can equal anything
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=1701cb494c8288c95c2700f80afc971e";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        // Printing the entire object to console
        console.log(response.length);
        // check to see if response has length
        // if response.length > 0 
        if (response.length > 0) {
            // create for loop to create event details 
            var artistName = $("<h1>").text(response.name);
            var artistURL = $("<a>").attr("href", response.url).append(artistName);
            var artistImage = $("<img>").attr("src", response.thumb_url);
            var upcomingEvents = $("<h2>").text(response.upcoming_event_count + " upcoming events");
            var goToArtist = $("<a>").attr("href", response.url).text("See Tour Dates");

            // Empty the contents of the artist-div, append the new artist content
            $("#tour-dates").empty();
            $("#tour-dates").append(artistURL, artistImage, trackerCount, upcomingEvents, goToArtist);
        } else {
            $("#tour-dates").empty();
            var comeBack = $("<h1>").text("Check back for tour dates at a later time.");
            $("#tour-dates").append(comeBack);
        }
    });
}

// Event handler for user clicking the tour dates button
$("#artist-div").on("click", function (event) {
    console.log('event listener');
    // Preventing the button from trying to submit the form
    event.preventDefault();
    console.log('event listener');
    // Storing the artist name
    var inputArtist = "Griffin Oskar";

    // Running the searchBandsInTown function(passing in the artist as an argument)
    searchBandsInTown(inputArtist);
    $(".modal-bg-sidenav").removeClass("bg-active");
});

//SPOTIFY
// different spotify endpoints 
const artistEndpoint = 'https://api.spotify.com/v1/artists/spotify:artist:5ziQ5Xt7CSrcnatEC4Ufy6';
const albumEndpoint = 'https://api.spotify.com/v1/artists/spotify:artist:5ziQ5Xt7CSrcnatEC4Ufy6/albums';
// api key and client ID
const clientId = 'c2df46601887473ea1f0dd4ba51565a6';
const apikey = 'b3d0c7d5713049569240944b341bda56';
// // create playlist 
// const createPlaylist = await fetch(artistEndpoint, {
//     method: 'POST',
//     headers: { 'Authorization' : 'Bearer ' + token}
// });

// const data = await result.json();
// return data.categories.items;
