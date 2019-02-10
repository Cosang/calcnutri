

//valori nutritionale

function calcul(){
		
		var inputgramaj = document.getElementById('gramaj').value;
		var divrezultat = document.getElementById('rezultat');
		var inputaliment = document.getElementById('aliment').value;
	
	if (inputaliment =='pizza'){ 
			
		 window.rezultat_carbo = Number(inputgramaj) * 37/100;
		 document.getElementById("grCarbo").innerHTML = rezultat_carbo.toString();
	} 
	
	if (inputaliment =='pizza'){ 
			
		window.rezultat_cal = Number(inputgramaj) * 330/100;
		document.getElementById("nrCal").innerHTML = rezultat_cal.toString();
	}    
	
	if (inputaliment =='pizza'){ 
			
		window.rezultat_proteine = Number(inputgramaj) * 11/100;
		document.getElementById("grProt").innerHTML = rezultat_proteine.toString();
	} 
	
	if (inputaliment =='pizza'){ 
			
		window.rezultat_grasimi = Number(inputgramaj) * 16/100;
		document.getElementById("grGras").innerHTML = rezultat_grasimi.toString();
	} 
	
	else if (inputaliment =='orez'){ 
			
		window.rezultat_carbo = Number(inputgramaj) * 78/100;
		document.getElementById("grCarbo").innerHTML = rezultat_carbo.toString(); 
	}
	
	if (inputaliment =='orez'){ 
			
		window.rezultat_cal = Number(inputgramaj) * 410/100;
		document.getElementById("nrCal").innerHTML = rezultat_cal.toString();
	}
	
	if (inputaliment =='orez'){
		
		window.rezultat_proteine = Number(inputgramaj) * 8/100;
		document.getElementById("grProt").innerHTML = rezultat_proteine.toString();
	} 
	
	if (inputaliment =='orez'){
		
		window.rezultat_grasimi = Number(inputgramaj) * 0.6/100;
		document.getElementById("grGras").innerHTML = rezultat_grasimi.toString();
	}
	
		
	else if (inputaliment =='cheeseburger'){ 
			
		window.rezultat_carbo = Number(inputgramaj) * 8/100;
		document.getElementById("grCarbo").innerHTML = rezultat_carbo.toString(); 
	}
	
	if (inputaliment =='cheeseburger'){ 
			
		window.rezultat_cal = Number(inputgramaj) * 78/100;
		document.getElementById("nrCal").innerHTML = rezultat_cal.toString();
	}
	
	if (inputaliment =='cheeseburger'){
		
		window.rezultat_proteine = Number(inputgramaj) * 4/100;
		document.getElementById("grProt").innerHTML = rezultat_proteine.toString();
	} 
	
	if (inputaliment =='cheeseburger'){
		
		window.rezultat_grasimi = Number(inputgramaj) * 3.3/100;
		document.getElementById("grGras").innerHTML = rezultat_grasimi.toString();
	}
	
	
	else if (inputaliment =='supa'){ 
			
		window.rezultat_carbo = Number(inputgramaj) * 10.8/100;
		document.getElementById("grCarbo").innerHTML = rezultat_carbo.toString();
	}
	
	if (inputaliment =='supa'){ 
			
		window.rezultat_cal = Number(inputgramaj) * 61/100;
		document.getElementById("nrCal").innerHTML = rezultat_cal.toString();
	}
	
	if (inputaliment =='supa'){
		
		window.rezultat_proteine = Number(inputgramaj) * 2.8/100;
		document.getElementById("grProt").innerHTML = rezultat_proteine.toString();
	} 
	
	if (inputaliment =='supa'){
		
		window.rezultat_grasimi = Number(inputgramaj) * 0.7/100;
		document.getElementById("grGras").innerHTML = rezultat_grasimi.toString();
	}
	
	else if (inputaliment =='select' ){
		alert("Va rugam sa selectati un aliment din lista");
	}
	
	else if (inputgramaj ==''){
		alert("Va rugam completati toate campurile");
	}
	
	drawChart();
}



//grafic

google.charts.load('current', {'packages':['corechart']});


function drawChart() {
	
		
		var data = google.visualization.arrayToDataTable([
				['Categorie nutritionala', 'Grame/portie'],
				['Carbohidrati gr/portie', rezultat_carbo],
				['Calorii/portie', rezultat_cal],
				['Proteine gr/portie', rezultat_proteine],
				['Grasimi gr/portie', rezultat_grasimi],
				
		]);

		var options = {'title':'Valori nutritionale pentru alimentul selectat:', 'width':550, 'height':400, 'is3D': true};
	 
		var chart = new google.visualization.PieChart(document.getElementById('piechart'));
		chart.draw(data, options);
	
}	
	
	
function afisareTabel() { 
        if(document.getElementById('tabel').style.display=='none') { 
            document.getElementById('tabel').style.display='block'; 
        } 
        return false;
    } 

	

//validare camp numeric

function validare_nr(event) {
   
		var key = window.event ? event.keyCode : event.which;

	if (event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 37 || event.keyCode == 39) {
	return true;
	}
	
	else if ( key < 48 || key > 57 ) {
    return false;
	}
	
	else return true;
	};

