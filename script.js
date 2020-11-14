var newsModal = $("#news");
var photosModal = $("#photos");
var contactModal = $("#contact");
var modalBgNews = $(".modal-bg-news");
var modalBgPhotos = $(".modal-bg-photos");
var modalBgContact = $(".modal-bg-contact");
var modalClose = $(".modal-close");

newsModal.on("click", function () {
    modalBgNews.addClass("bg-active");
});

photosModal.on("click", function () {
    modalBgPhotos.addClass("bg-active");
});

contactModal.on("click", function () {
    modalBgContact.addClass("bg-active");
});

modalClose.on("click", function () {
    modalBgNews.removeClass("bg-active");
    modalBgPhotos.removeClass("bg-active");
    modalBgContact.removeClass("bg-active");
});

let endpoint = 	'https://api.spotify.com/v1/artists/griffinoskar'
let apikey = 'b3d0c7d5713049569240944b341bda56'

