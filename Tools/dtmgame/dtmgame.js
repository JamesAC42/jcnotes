var crop_total = 0;

var total_per_second = 0;

var harvest_level = 1; 
var gatherer_level = 0.1; //.1
var pestle_level = 1; //1
var animal_level = 10; //10
var irrigation_level = 50; //50
var windmill_level = 250; //250
var plough_level = 1500; //1,500
var cotton_level = 7500; //7,500
var fridge_level = 45000; //45,000
var fertilizer_level = 250000; //250,000
var tractor_level = 1500000; //1,500,000

var buildings = ['gatherer','pestle','animal','irrigation','windmill','plough','cotton','fridge','fertilizer','tractor'];

function harvest(){
	crop_total += harvest_level;
	$('#amount-display').text(Math.round(crop_total.toLocaleString()));
};

function upgradeBuilding(building){
	
	switch(building){
		case 'gatherer':
			var cost = $('#gatherer-cost').text();
			cost = cost.replace(/,/g, "");
			cost = parseInt(cost);
			if(crop_total >= cost){
				total_per_second += gatherer_level;
				$('#gatherer-ps').text((parseFloat($('#gatherer-ps').text().replace(/,/g, "")) + gatherer_level).toLocaleString());
				$('#gatherer-amt').text((parseInt($('#gatherer-amt').text().replace(/,/g, "")) + 1).toLocaleString());
				crop_total -= cost;
				cost = Math.round(cost * 1.15);
				$('#gatherer-cost').text(cost.toLocaleString());
				$('#per-second').text(total_per_second.toLocaleString());
				$('#amount-display').text(crop_total.toLocaleString());
				afford('gatherer');
			};
			break;
		case 'pestle':
			var cost = $('#pestle-cost').text();
			cost = cost.replace(/,/g, "");
			cost = parseInt(cost);
			if(crop_total >= cost){
				total_per_second += pestle_level;
				$('#pestle-ps').text((parseInt($('#pestle-ps').text().replace(/,/g, "")) + pestle_level).toLocaleString());
				$('#pestle-amt').text((parseInt($('#pestle-amt').text().replace(/,/g, "")) + 1).toLocaleString());
				crop_total -= cost;
				cost = Math.round(cost * 1.15);
				$('#pestle-cost').text(cost.toLocaleString());
				$('#per-second').text(total_per_second.toLocaleString());
				$('#amount-display').text(crop_total.toLocaleString());
				afford('pestle');
			};
			break;
		case 'animal':
			var cost = $('#animal-cost').text();
			cost = cost.replace(/,/g, "");
			cost = parseInt(cost);
			if(crop_total >= cost){
				total_per_second += animal_level;
				$('#animal-ps').text((parseInt($('#animal-ps').text().replace(/,/g, "")) + animal_level).toLocaleString());
				$('#animal-amt').text((parseInt($('#animal-amt').text().replace(/,/g, "")) + 1).toLocaleString());
				crop_total -= cost;
				cost = Math.round(cost * 1.15);
				$('#animal-cost').text(cost.toLocaleString());
				$('#per-second').text(total_per_second.toLocaleString());
				$('#amount-display').text(crop_total.toLocaleString());
				afford('animal');
			};
			break;
		case 'irrigation':
			var cost = $('#irrigation-cost').text();
			cost = cost.replace(/,/g, "");
			cost = parseInt(cost);
			if(crop_total >= cost){
				total_per_second += irrigation_level;
				$('#irrigation-ps').text((parseInt($('#irrigation-ps').text().replace(/,/g, "")) + irrigation_level).toLocaleString());
				$('#irrigation-amt').text((parseInt($('#irrigation-amt').text().replace(/,/g, "")) + 1).toLocaleString());
				crop_total -= cost;
				cost = Math.round(cost * 1.15);
				$('#irrigation-cost').text(cost.toLocaleString());
				$('#per-second').text(total_per_second.toLocaleString());
				$('#amount-display').text(crop_total.toLocaleString());
				afford('irrigation');
			};
			break;
		case 'windmill':
			var cost = $('#windmill-cost').text();
			cost = cost.replace(/,/g, "");
			cost = parseInt(cost);
			if(crop_total >= cost){
				total_per_second += windmill_level;
				$('#windmill-ps').text((parseInt($('#windmill-ps').text().replace(/,/g, "")) + windmill_level).toLocaleString());
				$('#windmill-amt').text((parseInt($('#windmill-amt').text().replace(/,/g, "")) + 1).toLocaleString());
				crop_total -= cost;
				cost = Math.round(cost * 1.15);
				$('#windmill-cost').text(cost.toLocaleString());
				$('#per-second').text(total_per_second.toLocaleString());
				$('#amount-display').text(crop_total.toLocaleString());
				afford('windmill');
			};
			break;
		case 'plough':
			var cost = $('#plough-cost').text();
			cost = cost.replace(/,/g, "");
			cost = parseInt(cost);
			if(crop_total >= cost){
				total_per_second += plough_level;
				$('#plough-ps').text((parseInt($('#plough-ps').text().replace(/,/g, "")) + plough_level).toLocaleString());
				$('#plough-amt').text((parseInt($('#plough-amt').text().replace(/,/g, "")) + 1).toLocaleString());
				crop_total -= cost;
				cost = Math.round(cost * 1.15);
				$('#plough-cost').text(cost.toLocaleString());
				$('#per-second').text(total_per_second.toLocaleString());
				$('#amount-display').text(crop_total.toLocaleString());
				afford('plough');
			};
			break;
		case 'cotton':
			var cost = $('#cotton-cost').text();
			cost = cost.replace(/,/g, "");
			cost = parseInt(cost);
			if(crop_total >= cost){
				total_per_second += cotton_level;
				$('#cotton-ps').text((parseInt($('#cotton-ps').text().replace(/,/g, "")) + cotton_level).toLocaleString());
				$('#cotton-amt').text((parseInt($('#cotton-amt').text().replace(/,/g, "")) + 1).toLocaleString());
				crop_total -= cost;
				cost = Math.round(cost * 1.15);
				$('#cotton-cost').text(cost.toLocaleString());
				$('#per-second').text(total_per_second.toLocaleString());
				$('#amount-display').text(crop_total.toLocaleString());
				afford('cotton');
			};
		case 'fridge':
			var cost = $('#fridge-cost').text();
			cost = cost.replace(/,/g, "");
			cost = parseInt(cost);
			if(crop_total >= cost){
				total_per_second += fridge_level;
				$('#fridge-ps').text((parseInt($('#fridge-ps').text().replace(/,/g, "")) + fridge_level).toLocaleString());
				$('#fridge-amt').text((parseInt($('#fridge-amt').text().replace(/,/g, "")) + 1).toLocaleString());
				crop_total -= cost;
				cost = Math.round(cost * 1.15);
				$('#fridge-cost').text(cost.toLocaleString());
				$('#per-second').text(total_per_second.toLocaleString());
				$('#amount-display').text(crop_total.toLocaleString());
				afford('fridge');
			};
		case 'fertilizer':
			var cost = $('#fertilizer-cost').text();
			cost = cost.replace(/,/g, "");
			cost = parseInt(cost);
			if(crop_total >= cost){
				total_per_second += fertilizer_level;
				$('#fertilizer-ps').text((parseInt($('#fertilizer-ps').text().replace(/,/g, "")) + fertilizer_level).toLocaleString());
				$('#fertilizer-amt').text((parseInt($('#fertilizer-amt').text().replace(/,/g, "")) + 1).toLocaleString());
				crop_total -= cost;
				cost = Math.round(cost * 1.15);
				$('#fertilizer-cost').text(cost.toLocaleString());
				$('#per-second').text(total_per_second.toLocaleString());
				$('#amount-display').text(crop_total.toLocaleString());
				afford('fertilizer');
			};
		case 'tractor':
			var cost = $('#tractor-cost').text();
			cost = cost.replace(/,/g, "");
			cost = parseInt(cost);
			if(cost >= crop_total){
				total_per_second += tractor_level;
				$('#tractor-ps').text((parseInt($('#tractor-ps').text().replace(/,/g, "")) + tractor_level).toLocaleString());
				$('#tractor-amt').text((parseInt($('#tractor-amt').text().replace(/,/g, "")) + 1).toLocaleString());
				crop_total -= cost;
				cost = Math.round(cost * 1.15);
				$('#tractor-cost').text(cost.toLocaleString());
				$('#per-second').text(total_per_second.toLocaleString());
				$('#amount-display').text(crop_total.toLocaleString());
				afford('tractor');
			};
			break;
	};
};

function afford(building){
	var stringy = building + '-cost';
	var cost = $('#' + stringy).text();
	cost = cost.replace(/,/g, "");
	cost = parseInt(cost);
	if(crop_total >= cost){
		$('#' + building).fadeTo('fast',1);
	}else{
		$('#' + building).fadeTo('fast',0.25);
	};
};

setInterval(function(){
	crop_total += parseFloat(total_per_second);
	$('#amount-display').text((Math.round(crop_total)).toLocaleString());
	
	afford('gatherer');
	afford('pestle');
	afford('animal');
	afford('irrigation');
	afford('windmill');
	afford('plough');
	afford('cotton');
	afford('fridge');
	afford('fertilizer');
	afford('tractor');
	
},1000);


function save(){
	if(typeof(Storage) !== "undefined") {
		localStorage.cropTotal = parseFloat(crop_total);
		localStorage.totalPs = parseFloat(total_per_second);
		localStorage.gathererAmt = parseInt($('#gatherer-amt').text().replace(/,/g, ""));
		localStorage.pestleAmt = parseInt($('#pestle-amt').text().replace(/,/g, ""));
		localStorage.animalAmt = parseInt($('#animal-amt').text().replace(/,/g, ""));
		localStorage.irrigationAmt = parseInt($('#irrigation-amt').text().replace(/,/g, ""));
		localStorage.windmillAmt = parseInt($('#windmill-amt').text().replace(/,/g, ""));
		localStorage.ploughAmt = parseInt($('#plough-amt').text().replace(/,/g, ""));
		localStorage.cottonAmt = parseInt($('#cotton-amt').text().replace(/,/g, ""));
		localStorage.fridgeAmt = parseInt($('#fridge-amt').text().replace(/,/g, ""));
		localStorage.fertilizerAmt = parseInt($('#fertilizer-amt').text().replace(/,/g, ""));
		localStorage.tractorAmt = parseInt($('#tractor-amt').text().replace(/,/g, ""));
	}else{
		alert('Your browser does not support this save feature!');
	};
}

function loadSave(){
	if(typeof(Storage) !== "undefined"){
			if(localStorage.cropTotal){
				crop_total = localStorage.cropTotal;
				total_per_second = localStorage.totalPs;
				$('#amount-display').text(crop_total.toLocaleString());
				$('#per-second').text(Math.round(total_per_second).toLocaleString());
				
				var gatherer = localStorage.gathererAmt;
				console.log(gatherer, typeof(gatherer));
				$('#gatherer-amt').text(gatherer.toLocaleString());
				$('#gatherer-cost').text(Math.round((15) * Math.pow(1.15, gatherer)).toLocaleString());
				$('#gatherer-ps').text((.1 * parseInt(gatherer)).toLocaleString());
				
				
				$('#per-second').text(total_per_second.toLocaleString());
				
			}else{
				alert('You have no saves!');
			};
	}else{
		alert('Your browser does not support this save feature!');
	};
}





















