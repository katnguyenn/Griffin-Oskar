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

$(document).ready(function () {
  $(photosModal).on("click", function () {
      modalBgPhotos.addClass("bg-active");
      socialLinks.addClass("hide");
    var pModal = `
    <div class="carousel">
    <div class="inner">
    <img src="./Photos/img-1.JPG" alt="First Image" class="active photo"></a>
    <img src="./Photos/img-2.JPG" alt="Second Image" class="photo"></a>
    <img src="./Photos/img-3.JPG" alt="Third Image" class="photo"></a>
    <img src="./Photos/img-4.JPG" alt="Fourth Image" class="photo"></a>
    <img src="./Photos/img-5.JPG" alt="Fifth Image" class="photo"></a>
    <img src="./Photos/img-6.JPG" alt="Sixth Image" class="photo"></a>
    </div>
    </div>
    `
    $(".modal-carousel").empty();
    $(".modal-carousel").prepend(closeBtn);
    $(".modal-carousel").append(pModal);
    $(".photo").on("click", function () {
      console.log("clicked");
      var currentImg = $(".active");
      var nextImg = currentImg.next();
      if (nextImg.length) {
        currentImg.removeClass("active");
        nextImg.addClass("active");
      }
    });
      closeBtn.on("click", function () {
            modalBgPhotos.removeClass("bg-active");
            socialLinks.removeClass("hide");
        });
    });
});

contactModal.on("click", function () {
    modalBgContact.addClass("bg-active");
    socialLinks.addClass("hide");
});

$(".sidenav-trigger").on("click", function () {
    $(".modal-bg-sidenav").addClass("bg-active");
});

modalClose.on("click", function () {
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