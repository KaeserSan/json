$( document ).on("artistsReceived", function( event, param ){
	// $('.artistList > ul').html(param);
	$('.artistList > select').html(param);
})

$( document ).on("albumsReceived", function( event, param ){
	$('.albumList > select').html(param);
})

$( document ).on("songsReceived", function( event, param ){
	$('.songList > img').prop('hidden', false);
	$('.songList > select').html(param);
})

function emptyAlbumSong(){
	$('.songList > img').prop('hidden', 'true');
	$('.albumList > select').html("");
	$('.songList > select').html("");
}
function emptySong(){
	$('.songList > select').html("");
}

function putAlbumImg(){
	console.log($('#selAlbums > option').attr('albumimage'));
	$('.songList > img').prop("src", $('#selAlbums > option').attr('albumimage'));
	$('.songList > img').prop("hidden", false);
}