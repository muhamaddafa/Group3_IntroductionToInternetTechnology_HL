let bgmusic = $("#bgmusic")[0];
bgmusic.play();
bgmusic.volume = 0.35;

$('#btn').click(function(event) {
	event.preventDefault(); 
	$(".mainDisplay").css("background-image", "none");
	$(".mainDisplay").css("background-color", "black");
	$(".container").hide();
	$(".load").show();
    setTimeout(function() {
    window.location.href = "play.html"; 
    }, 5000); 
});

const spans = document.querySelectorAll('h2 span');

$('#btn2').click(function() {
    window.location.href = 'about.html';
});

var gif = document.querySelector('.gambarTahu');
gif.addEventListener('load', function() {
	this.setAttribute('data-is-loaded', 'true');
});
gif.addEventListener('animationiteration', function() {
	if (this.getAttribute('data-is-loaded')) {
		this.setAttribute('src', this.getAttribute('src'));
	}
});