
var selects = document.getElementsByClassName( "skill-wrapp" );

document.getElementsByClassName( "cross-close" )[ 0 ].addEventListener( "click", function(){

	if ( document.getElementById( "skill" ).classList.contains( "shrink-skill" ) ){

		for( let i = 0, il = selects.length; i < il; i++ ){
			selects[i].style.transition = "opacity .3s linear 1.5s";
    		selects[i].style.opacity = "1";
		};

		document.getElementById( "skill" ).classList.remove("shrink-skill");
   		document.getElementById( "skill" ).style.width = "10px";
	    document.getElementById( "skill" ).style.transition = "background .2s linear .1s";
		document.getElementById( "skill" ).style.background = "rgba( 78, 78, 78, 1 )";
		document.getElementById( "skill" ).style.animation = "expand .5s linear .8s forwards";
   		document.getElementById( "cross-close" ).style.transform = "rotate(180deg)";
		document.getElementById( "cross-close" ).style.left = "900px";
	    document.getElementById( "cross-close" ).style.transition = "left .5s linear .8s";
	    document.getElementById( "cross-close" ).style.animation = "unspin .5s linear 1.8s forwards";
	    document.getElementById( "playerInfo" ).style.transition = "bottom .4s linear .1s";
	    document.getElementById( "playerInfo" ).style.bottom = "150px";

	} else {
		
		for( let i = 0, il = selects.length; i < il; i++ ){
			selects[i].style.transition = "opacity .3s linear .1s";
			selects[i].style.opacity = "0";
		};

		document.getElementById( "skill" ).classList.add("shrink-skill");
		document.getElementById( "skill" ).style.width = "890px";
	    document.getElementById( "skill" ).style.transition = "background .2s linear 1.5s";
		document.getElementById( "skill" ).style.background = "rgba( 78, 78, 78, 0 )";
		document.getElementById( "skill" ).style.animation = "shrink .5s linear .5s forwards";
   		document.getElementById( "cross-close" ).style.transform = "rotate(0deg)";
		document.getElementById( "cross-close" ).style.left = "5px";
	    document.getElementById( "cross-close" ).style.transition = "left .5s linear .5s";
	    document.getElementById( "cross-close" ).style.animation = "spin .5s linear 1.8s forwards";
	    document.getElementById( "playerInfo" ).style.transition = "bottom .4s linear 1.2s";
	    document.getElementById( "playerInfo" ).style.bottom = "10px";
	};

});

for( let i = 0, il = selects.length; i < il; i++ ){
	selects[i].addEventListener( "mouseenter", function( event ) {
	    this.style.transition = "all .3s";
	    this.style.transform = "scale( 1.1 )";
    	this.style.cursor = "pointer";
    });

    selects[i].addEventListener( "mouseleave", function( event ) {
	    this.style.transition = "all .3s";
	    this.style.transform = "scale( 1 )";
    	this.style.cursor = "none";
    });
};