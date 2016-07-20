function getArtists() {
	// console.log($('#artistName').val());
	if ($('#artistName').val()){
		$.ajax({
			url: "https://api.spotify.com/v1/search?type=artist&query=" + $('#artistName').val()
		})
		.done( function ( artists ){
			// console.log(artists);
			var resultHtml="";
			$.each( artists.artists.items, function ( index, oArtists ){
				// console.log("Artist name: " + oArtists.name);
				resultHtml += '<option value="' + oArtists.id +'">' + oArtists.name + '</option>'
				// resultHtml += '<li value="' + oArtists.id +'">' + oArtists.name + '</li>'
			} )
			// console.log(resultHtml);
			$ ( document ).trigger("artistsReceived",  resultHtml);
		})
	}
	
}( jQuery )