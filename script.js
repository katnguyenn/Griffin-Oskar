var toursModal = $("#tours");
var photosModal = $("#photos");
var contactModal = $("#contact");
var modalBgTours = $(".modal-bg-tours");
var modalBgPhotos = $(".modal-bg-photos");
var modalBgContact = $(".modal-bg-contact");
var displayBands = $(".modal-bands");
var modalClose = $(".modal-close");
var closeBtn = $("<span><span class='modal-close'>&times</span>");
var socialLinks = $(".social-links");

photosModal.on("click", function () {
    modalBgPhotos.addClass("bg-active");
    socialLinks.addClass("hide");
});

contactModal.on("click", function () {
    modalBgContact.addClass("bg-active");
    socialLinks.addClass("hide");
});

$(".sidenav-trigger").on("click", function () {
    $(".modal-bg-sidenav").addClass("bg-active");
});

modalClose.on("click", function () {
    modalBgPhotos.removeClass("bg-active");
    modalBgContact.removeClass("bg-active");
    $(".modal-bg-sidenav").removeClass("bg-active");
    socialLinks.removeClass("hide");
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
            
            displayBands.empty();
            displayBands.append(artistURL, artistImage, trackerCount, upcomingEvents, goToArtist);
            displayBands.prepend(closeBtn);
        } else {
            displayBands.empty();
            var comeBack = $("<h2>").text("Check back for tour dates at a later time.");
            displayBands.append(comeBack);
            displayBands.prepend(closeBtn);
        }
        closeBtn.on("click", function () {
            modalBgTours.removeClass("bg-active");
            socialLinks.removeClass("hide");
        });
    });
}

// Event handler for user clicking the tour dates button
toursModal.on("click", function (event) {
    console.log('event listener');
    // Preventing the button from trying to submit the form
    event.preventDefault();
    console.log('event listener');
    modalBgTours.addClass("bg-active");
    socialLinks.addClass("hide");
    // Storing the artist name
    var inputArtist = "Griffin Oskar";

    // Running the searchBandsInTown function(passing in the artist as an argument)
    searchBandsInTown(inputArtist);
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
