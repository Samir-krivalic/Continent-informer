var img = $('img');
var holder  =$ ('#holder');
var info =$('#info');
var t = $('h3');
var del = 0;
var printText;


img.on('click',function (){
del++
info.html("");
var self = $(this);
var copy = self.clone();
    var selectText=self.attr('src')
    switch(selectText){
 
case "images/australia.jpg" :
printText ="Australia (/əˈstreɪliə/ (About this sound listen), /ɒ-/, /-ljə/),[10][11] officially the Commonwealth of Australia,[12] is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania and numerous smaller islands. It is the largest country in Oceania and the world's sixth-largest country by total area. The neighbouring countries are Papua New Guinea, Indonesia and East Timor to the north; the Solomon Islands and Vanuatu to the north-east; and New Zealand to the south-east. Australia's capital is Canberra, and its largest urban area is Sydney.For about 50,000 years[13] before the first British settlement in the late 18th century,[14][15] Australia was inhabited by indigenous Australians,[16] who spoke languages classifiable into roughly 250 groups.[17][18] After the European discovery of the continent by Dutch explorers in 1606, Australia's eastern half was claimed by Great Britain in 1770 and initially settled through penal transportation to the colony of New South Wales from 26 January 1788. The population grew steadily in subsequent decades, and by the 1850s most of the continent had been explored and an additional five self-governing crown colonies established."
break;

case "images/s.america.jpg":
printText = "South America is a continent located in the western hemisphere, mostly in the southern hemisphere, with a relatively small portion in the northern hemisphere. It may also be considered a subcontinent of the Americas,[2][3] which is how it is viewed in the Spanish-speaking regions of the Americas. The reference to South America instead of other regions (like Latin America or the Southern Cone) has increased in the last decades due to changing geopolitical dynamics (in particular, the rise of Brazil).[4]It is bordered on the west by the Pacific Ocean and on the north and east by the Atlantic Ocean; North America and the Caribbean Sea lie to the northwest. It includes twelve sovereign states (Argentina, Bolivia, Brazil, Chile, Colombia, Ecuador, Guyana, Paraguay, Peru, Suriname, Uruguay, and Venezuela), a part of France (French Guiana), and a non-sovereign area (the Falkland Islands, a British Overseas Territory though this is disputed by Argentina). In addition to this, the ABC islands of the Kingdom of the Netherlands, Trinidad and Tobago, and Panama may also be considered part of South America."
break;   

case "images/n.america.gif" :
printText = "North America is a continent entirely within the Northern Hemisphere and almost all within the Western Hemisphere; it is also considered by some to be a northern subcontinent of the Americas.[3][4] It is bordered to the north by the Arctic Ocean, to the east by the Atlantic Ocean, to the west and south by the Pacific Ocean, and to the southeast by South America and the Caribbean Sea.North America covers an area of about 24,709,000 square kilometers (9,540,000 square miles), about 16.5% of the earth's land area and about 4.8% of its total surface. North America is the third largest continent by area, following Asia and Africa,[5] and the fourth by population after Asia, Africa, and Europe.[6] In 2013, its population was estimated at nearly 565 million people in 23 independent states, or about 7.5% of the world's population, if nearby islands (most notably the Caribbean) are included."
break;

case "images/africa.jpg" :
printText = "Africa is the world's second largest and second most-populous continent (the first being Asia in both categories). At about 30.3 million km2 (11.7 million square miles) including adjacent islands, it covers 6% of Earth's total surface area and 20.4% of its total land area.[2] With 1.2 billion[1] people as of 2016, it accounts for about 16% of the world's human population. The continent is surrounded by the Mediterranean Sea to the north, both the Suez Canal and the Red Sea along the Sinai Peninsula to the northeast, the Indian Ocean to the southeast and the Atlantic Ocean to the west. The continent includes Madagascar and various archipelagos. It contains 54 fully recognised sovereign states (countries), nine territories and two de facto independent states with limited or no recognition.[3]Africa's average population is the youngest amongst all the continents;[4][5] the median age in 2012 was 19.7, when the worldwide median age was 30.4.[6] Algeria is Africa's largest country by area, and Nigeria is its largest by population. "
break;

case "images/antarctica.jpg" :
printText = "Antarctica (UK English /ænˈtɑːktɪkə/ or /ænˈtɑːtɪkə/, US English /æntˈɑːrktɪkə/ (About this sound listen))[note 1] is Earth's southernmost continent. It contains the geographic South Pole and is situated in the Antarctic region of the Southern Hemisphere, almost entirely south of the Antarctic Circle, and is surrounded by the Southern Ocean. At 14,000,000 square kilometres (5,400,000 square miles), it is the fifth-largest continent. For comparison, Antarctica is nearly twice the size of Australia. About 98% of Antarctica is covered by ice that averages 1.9 km (1.2 mi; 6,200 ft) in thickness,[5] which extends to all but the northernmost reaches of the Antarctic Peninsula.Antarctica, on average, is the coldest, driest, and windiest continent, and has the highest average elevation of all the continents.[6] Antarctica is a desert, with annual precipitation of only 200 mm (8 in) along the coast and far less inland."
break;

case "images/asia.png" :
printText = "Asia (/ˈeɪʒə, ˈeɪʃə/ (About this sound listen)) is Earth's largest and most populous continent, located primarily in the Eastern and Northern Hemispheres. It shares the continental landmass of Eurasia with the continent of Europe and the continental landmass of Afro-Eurasia with both Europe and Africa. Asia covers an area of 44,579,000 square kilometres (17,212,000 sq mi), about 30% of Earth's total land area and 8.7% of the Earth's total surface area. The continent, which has long been home to the majority of the human population,[4] was the site of many of the first civilizations. Asia is notable for not only its overall large size and population, but also dense and large settlements as well as vast barely populated regions within the continent of 4.5 billion people, or roughly 60% of the world's population.In general terms, Asia is bounded on the east by the Pacific Ocean, on the south by the Indian Ocean and on the north by the Arctic Ocean."
break;

case "images/europe.jpg" :
printText = "Europe is a continent located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere. Europe is bordered by the Arctic Ocean to the north, the Atlantic Ocean to the west, and the Mediterranean Sea to the south. It comprises the westernmost part of Eurasia. Europe is generally considered as separated from Asia by the watershed divides of the Ural and Caucasus Mountains, the Ural River, the Caspian and Black Seas, and the waterways of the Turkish Straits.[5] Yet the non-oceanic borders of Europe—a concept dating back to classical antiquity—are arbitrary and amount to a historical and social construct. The primarily physiographic term 'continent' as applied to Europe also incorporates cultural and political elements whose discontinuities are not always reflected by the continent's current overland boundary with Asia.Europe covers about 10,180,000 square kilometres (3,930,000 sq mi), or 2% of the Earth's surface (6.8% of land area). Politically, Europe is divided into about fifty sovereign states of which the Russian Federation is the largest and most populous, spanning 39% of the continent and comprising 15% of its population."
break;



 }

    copy.css({
    	position:'absolute',
    	width: self.width(),
    	height: self.height(),
    	top: self.offset().top,
    	left: self.offset().left
    });
    copy.animate({
    	top: holder.offset().top,
    	left: holder.offset().left,
    	width: holder.width(),
    	height: holder.height()
    },1000, function(){
    	if(del==2){
            holder.find('img').eq(0).remove();
            del=1
        
        }
        info.append(printText);
    });
    $('#holder').append(copy);

});