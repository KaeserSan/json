function getAlbums() {
	if ($('.artistList > select').val()) {
		$.ajax({
			url: "https://api.spotify.com/v1/artists/" + $('.artistList > select').val() +"/albums" 
		})
		.done( function ( albums ){
			console.log(albums);
			var resultHtml="";
			$.each( albums.items, function ( index, oAlbums ){
				// console.log("Album name: " + oAlbums.id + " " + oAlbums.name);
				resultHtml += '<option albumimage="' + oAlbums.images[0].url + '" value="' + oAlbums.id +'">' + oAlbums.name + '</option>'
			} )
			$ ( document ).trigger("albumsReceived",  resultHtml);
		})
	}
}( jQuery )