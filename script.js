var toursModal = $("#tours");
var newsModal = $("#news");
var photosModal = $("#photos");
var contactModal = $("#contact");
var modalBgTours = $(".modal-bg-tours");
var modalBgNews = $(".modal-bg-news");
var modalBgPhotos = $(".modal-bg-photos");
var modalBgContact = $(".modal-bg-contact");
var modalClose = $(".modal-close");

toursModal.on("click", function () {
    modalBgTours.addClass("bg-active");
});

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
    modalBgTours.removeClass("bg-active");
    modalBgNews.removeClass("bg-active");
    modalBgPhotos.removeClass("bg-active");
    modalBgContact.removeClass("bg-active");
});