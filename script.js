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

// different spotify endpoints 
const artistEndpoint = 'https://api.spotify.com/v1/artists/spotify:artist:5ziQ5Xt7CSrcnatEC4Ufy6';
const albumEndpoint = 'https://api.spotify.com/v1/artists/spotify:artist:5ziQ5Xt7CSrcnatEC4Ufy6/albums';
// api key and client ID
const clientId = 'c2df46601887473ea1f0dd4ba51565a6';
const apikey = 'b3d0c7d5713049569240944b341bda56';
// create playlist 
const createPlaylist = await fetch(artistEndpoint, {
    method: 'POST',
    headers: { 'Authorization' : 'Bearer ' + token}
});

const data = await result.json();
return data.categories.items;


// $.ajax({
//     url: https://api.spotify.com/v1/users/{user_id}/playlists,
//     method: "GET"
// }).then(function(response) {
//     "name": "Griffin Oskar",
//     "description": "Griffin Oskar",
//     "public": false
//   });

  handlePlaylistSubmit(e) {
      e.preventDefault();
      const likesNeeded = e.target.playlistLikesNeeded.value

      let jsonData = {
          name: e.target.playlistName.value,
          public: false,
          description: e.target.playlistDescription.value
      };
  }

  // Send the entered data to create a playlist in spotify and the database
  axios({
      method: 'post',
      url: 'https://api.spotify.com/v1/users/${this.state.userReducer.SpotifyId}/playlists',
      data: jsonData,
      dataType: 'json',
      headers: {
          'Authorization': 'Bearer ' + this.state.userReducer.accessToken,
          'Content-Type': 'application/json'
      }})
      .then(res => {
          const data = {
              name: res.data.name,
              externalUrl: res.data.external_urls.spotify,
              playlistId: res.data.id,
              userId: this.state.userReducer.id,
              likesNeeded: likesNeeded
          }
          const postChatThunk = postChat(data)
          store.dispatch(postChatThunk)
      })
