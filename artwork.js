function price()
{
  alert("Clicked");
}



function about(){
	document.getElementById("artArtists").style.display="none";
	document.getElementById("artArtists2").style.display="none";
	document.getElementById("about").style.display="-webkit-box";
}
function show(){
	document.getElementById("col-1").style.display="-webkit-box";
	document.getElementById("col-2").style.display="-webkit-box";
}

function artWork1() {
	show();
	document.getElementById("artArtists").style.display = "-webkit-box";
	document.getElementById("picture").src = "starrynight.jpg" ;
	document.getElementById("information").innerHTML = "Name: <span onClick='artWork11()'> Starry Night</span> <br/> General Description: View from the east-facing window at Sait-Remy-de-Provence, just befoore sunrise. <br/> Price: $100,000" ;
}
function artWork11() {
	document.getElementById("artArtists").style.display = "none";
	document.getElementById("artArtists2").style.display = "-webkit-box";
	document.getElementById("picture2").src = "starrynight.jpg" ;
	document.getElementById("information2").innerHTML = "Date of Production: June 1889<br> Type of the painting colours: Oil on Canvas <br> Dimensions: 73.7cm x 92.1cm<br> Location: Museum of Modern Art, NYC<br> Artist: Vincent van Gosh<br> Price: $100,000<br> Genre: Post-Impressionist" ;
}

function artWork2() {
	show();
	document.getElementById("artArtists").style.display = "-webkit-box";
	document.getElementById("picture").src = "lagrenouillère.jpg" ;
	document.getElementById("information").innerHTML = "Name: <span onClick='artWork22()'> La Grenouillère</span> <br/> General Description: The ripples on the water, foliage, the boats, the human figures - weave a fabric of brushstrokes which, although emphatically brushstrokes, retain a strong descriptive quality.<br/> Price: $200,000" ;
}
function artWork22() {
	document.getElementById("artArtists").style.display = "none";
	document.getElementById("artArtists2").style.display = "-webkit-box";
	document.getElementById("picture2").src = "lagrenouillère.jpg" ;
	document.getElementById("information2").innerHTML = "Date of Production:Sept. 1869<br> Type of the painting colours: Oil on Canvas<br> Dimensions: 74.6cm x 99.7cm<br> Location: Metropolitan Museum of Art<br> Artist: Claude Monet<br> Price: $200,000<br> Genre: Impressionist" ;
}

function artWork3() {
	show();
	document.getElementById("artArtists").style.display = "-webkit-box";
	document.getElementById("picture").src = "thelastsupper.jpg" ;
	document.getElementById("information").innerHTML = "Name: <span onClick='artWork33()'> The Last Supper</span> <br/> General Description: Jesus and his apostles. <br/> Price: $300,000" ;
}
function artWork33() {
	document.getElementById("artArtists").style.display = "none";
	document.getElementById("artArtists2").style.display = "-webkit-box";
	document.getElementById("picture2").src = "thelastsupper.jpg" ;
	document.getElementById("information2").innerHTML = "Date of Production: 1490s<br> Type of the painting colours: Fresco-secco<br> Dimensions: 460cm x 880cm<br> Location: Convent of Santa Maria delle Grazie, Milan<br> Artist: Leonardo da Vinci<br> Price: $300,000 <br> Genre: High Renaissance" ;
}
function artWork4() {
	show();
	document.getElementById("artArtists").style.display = "-webkit-box";
	document.getElementById("picture").src = "americangothic.jpg" ;
	document.getElementById("information").innerHTML = "Name: <span onClick='artWork44()'> American Gothic</span> <br/> General Description: A farmer with his wife infront of their house.<br/> Price: $1000" ;
}
function artWork44() {
	document.getElementById("artArtists").style.display = "none";
	document.getElementById("artArtists2").style.display = "-webkit-box";
	document.getElementById("picture2").src = "americangothic.jpg" ;
	document.getElementById("information2").innerHTML = "Date of Production: 1930<br> Type of the painting colours: Oil on Beaverboard<br> Dimensions: 78cm x 65.3cm<br> Location: Art Institute of Chicago<br> Artist: Grant Wood<br> Price: $1000 <br> Genre: Southern Gothic" ;
}

function artWork5() {
	show();
	document.getElementById("artArtists").style.display = "-webkit-box";
	document.getElementById("picture").src = "thesonofman.jpg" ;
	document.getElementById("information").innerHTML = "Name: <span onClick='artWork55()'> The Son of Man</span> <br/> General Description: A self portrait with an apple front and centre. <br/> Price: $14 000 000" ;
}
function artWork55() {
	document.getElementById("artArtists").style.display = "none";
	document.getElementById("artArtists2").style.display = "-webkit-box";
	document.getElementById("picture2").src = "thesonofman.jpg" ;
	document.getElementById("information2").innerHTML = "Date of Production: 1964<br> Type of the painting colours: Oil on Canvas<br> Dimensions: 116cm x 89cm<br> Location: Private Collection<br> Artist: René Magritte<br> Price: $14 000 000 <br> Genre: Surrealist" ;
}



function artist1() {
	show();
	document.getElementById("artArtists").style.display = "-webkit-box";
	document.getElementById("picture").src = "vangogh.jpg" ;
	document.getElementById("information").innerHTML = "Name: <span onClick='artist11()'> Van Gogh</span> <br/> General Description: A great artist, known for going crazy and cutting off part of his ear";
}
function artist11() {
	document.getElementById("artArtists").style.display = "none";
	document.getElementById("artArtists2").style.display = "-webkit-box";
	document.getElementById("picture2").src = "vangogh.jpg" ;
	document.getElementById("information2").innerHTML = "Date of Birth: March 30, 1853<br> Date of Death: July 29 1890<br> Place of living: Cimetière d'Auvers-sur-Oise, France<br> Genre of work: Post-Impressionist<br> Famous works: Sorrow, The Potato Eaters, Sunflowers, Bedroom in Arles, The Starry Night, Portrait of Dr. Gachet, Wheatfield with Crows" ;
}

function artist2() {
	show();
	document.getElementById("artArtists").style.display = "-webkit-box";
	document.getElementById("picture").src = "claudemonet.jpg" ;
	document.getElementById("information").innerHTML = "Name: <span onClick='artist22()'> Claude Monet</span> <br/> General Description: A founder of French Impressionist painting, he was a very consistent painter throughout his life" ;
}
function artist22() {
	document.getElementById("artArtists").style.display = "none";
	document.getElementById("artArtists2").style.display = "-webkit-box";
	document.getElementById("picture2").src = "claudemonet.jpg" ;
	document.getElementById("information2").innerHTML = "Date of Birth: Nov. 14, 1840<br> Date of Death: Dec. 5, 1926<br> Place of living: France<br> Genre of work: Impressionism<br> Famous works: Impression, Sunrise, Rouen Cathedral series, London Parliament series, Water Lilies, Haystacks, Poplars" ;
}

function artist3() {
	show();
	document.getElementById("artArtists").style.display = "-webkit-box";
	document.getElementById("picture").src = "leonardodavinci.jpg" ;
	document.getElementById("information").innerHTML = "Name: <span onClick='artist33()'> Leonardo da Vinci</span> <br/> General Description: He was much more than just a painter, one of the great artist names in history.<br/> " ;
}
function artist33() {
	document.getElementById("artArtists").style.display = "none";
	document.getElementById("artArtists2").style.display = "-webkit-box";
	document.getElementById("picture2").src = "leonardodavinci.jpg" ;
	document.getElementById("information2").innerHTML = "Date of Birth: April 15, 1452<br> Date of Death: May 2, 1519<br> Place of living: Italy/France<br> Genre of work: High Renaissance<br> Famous works: Mona LIsa, The Last Supper, The Vitruvian Man, Lady with en Ermine" ;
}

function artist4() {
	show();
	document.getElementById("artArtists").style.display = "-webkit-box";
	document.getElementById("picture").src = "grantwood.jpg" ;
	document.getElementById("information").innerHTML = "Name: <span onClick='artist44()'> Grant Wood</span> <br/> General Description: An American painter, he got inspiration from traveling across the United States.<br/>" ;
}
function artist44() {
	document.getElementById("artArtists").style.display = "none";
	document.getElementById("artArtists2").style.display = "-webkit-box";
	document.getElementById("picture2").src = "grantwood.jpg" ;
	document.getElementById("information2").innerHTML = "Date of Birth: Feb. 13, 1891<br> Date of Death: Feb. 12, 1942<br> Place of living: Iowa<br> Genre of work: Regionalism<br> Famous works: American Gothic" ;
}

function artist5() {
	show();
	document.getElementById("artArtists").style.display = "-webkit-box";
	document.getElementById("picture").src = "wollehmagritte.jpg" ;
	document.getElementById("information").innerHTML = "Name: <span onClick='artist55()'>René Magritte</span> <br/> General Description: A Belgian surrealist artist, known for creating a number of witty and throught proviking images." ;
}	
function artist55() {
	document.getElementById("artArtists").style.display = "none";
	document.getElementById("artArtists2").style.display = "-webkit-box";
	document.getElementById("picture2").src = "wollehmagritte.jpg" ;
	document.getElementById("information2").innerHTML = "Date of Birth: Nov. 21, 1898<br> Date of Death: Aug. 15, 1967<br> Place of living: Belgium<br> Genre of work: Surrealism<br> Famous works: The Treachery of Images, On the Threshold of Liberty, The Son of Man, The Human Condition, Elective Affinities, The Portrait, Golconda, The Menaced Assassin" ;
}	