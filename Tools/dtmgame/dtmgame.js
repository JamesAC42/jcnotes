var crop_total = 0;

var total_per_second = 0;

var harvest_level = 1; 

var upgradeInProgress = false;

var buildingsList = ['gatherer','pestle','animal','irrigation','windmill','plough','cotton','fridge','fertilizer','tractor'];
var buildings = {
	gatherer:[0.1,10],
	pestle:[1,10],
	animal:[10,10],
	irrigation:[50,10],
	windmill:[250,10],
	plough:[1500,10],
	cotton:[7500,10],
	fridge:[45000,10],
	fertilizer:[250000,10],
	tractor:[1500000,10]
};
function harvest(){
	crop_total += harvest_level;
	$('#amount-display').text(Math.round(crop_total.toLocaleString()));
};


function buyBuilding(building){
	var buildingLevel = buildings[building][0];
	var cost = $('#' + building + '-cost').text();
	cost = cost.replace(/,/g, "");
	cost = parseInt(cost);
	if(crop_total >= cost){
		total_per_second += buildingLevel;
		$('#' + building + '-ps').text((parseFloat($('#'+ building + '-ps').text().replace(/,/g, "")) + buildingLevel).toLocaleString());
		$('#' + building + '-amt').text((parseInt($('#' + building + '-amt').text().replace(/,/g, "")) + 1).toLocaleString());
		crop_total -= cost;
		cost = Math.round(cost * 1.15);
		$('#' + building + '-cost').text(cost.toLocaleString());
		$('#per-second').text(total_per_second.toLocaleString());
		$('#amount-display').text(crop_total.toLocaleString());
		afford(building);
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

function upgradeCheck(building){
	if(upgradeInProgress == false){
		var stringy = building + '-amt';
		var current_amt = parseInt($('#'+stringy).text().replace(/,/g, ""));
		if(current_amt >= (buildings[building][1] / 2)){
			$('#upgrade-building-name').text(building);
			$('#upgrade-goal').text(buildings[building][1]);
			var cost = parseInt($('#' + building + '-cost').text().replace(/,/g, ""));
			cost *= 10;
			$('#upgrade-cost').text(cost.toLocaleString());
			$('#upgrade-button').slideDown('fast');
			$('#upgrade-button').fadeTo('fast',0.5);
			upgradeInProgress = true;
		}
	}else{
		var stringy = building + '-amt';
		var current_amt = parseInt($('#'+stringy).text().replace(/,/g, ""));
		if(current_amt >= (buildings[building][1])){
			$('#upgrade-button').fadeTo('fast',1);
		}
	}
}

function upgradeBuilding(){
	var cost = parseInt($('#upgrade-cost').text().replace(/,/g, ""));
	var building = $('#upgrade-building-name').text();
	var needed_amt = parseInt($('#upgrade-goal').text().replace(/,/g, ""));
	var current_amt = parseInt($('#' + building + "-amt").text().replace(/,/g, ""));
	if(crop_total >= cost && current_amt >= needed_amt){
		buildings[building][0] *= 2;
		buildings[building][1] *= 10;
		var current_ps = parseFloat($('#' + building + '-ps').text().replace(/,/g, ""));
		total_per_second += current_ps;
		$('#' + building + '-ps').text((current_ps * 2).toLocaleString());
		crop_total -= cost;
		$('#per-second').text(total_per_second.toLocaleString());
		$('#amount-display').text(crop_total.toLocaleString());
		$('#upgrade-button').slideUp('fast');
		upgradeInProgress = false;
	}
}

setInterval(function(){
	crop_total += parseFloat(total_per_second);
	$('#amount-display').text((Math.round(crop_total)).toLocaleString());
},1000);


setInterval(function(){
	for(var b in buildings){
		afford(b);
		upgradeCheck(b);
	};
},250);


function stallSave(){
	alert("coming soon, fixing a few things.");
}

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





















