var crop_total = 100000000;

var total_per_second = 0;

var harvest_level = 1; 

var currentUpgrades = 0;
var currentBuildings = [];

var autosave = true;

var buildingsList = ['gatherer','pestle','animal','irrigation','windmill','plough','cotton','fridge','fertilizer','tractor','satellite','biotech'];
var buildings = {
	gatherer:[0.1,10,0,15],
	pestle:[1,10,0,100],
	animal:[10,10,0,1000],
	irrigation:[50,10,0,15000],
	windmill:[250,10,0,125000],
	plough:[1500,10,0,1000000],
	cotton:[7500,10,0,25000000],
	fridge:[45000,10,0,333333333],
	fertilizer:[250000,10,0,5000000000],
	tractor:[1500000,10,0,70000000000],
	satellite:[10000000,10,0,1000000000000],
	biotech:[70000000,10,0,25000000000000]
	//[persecond, goal, amount, cost]
};

function harvest(){
	var current = parseInt($('#amount-display').text().replace(/,/g, ""));
	current += harvest_level;
	crop_total = current;
	$('#amount-display').text(crop_total.toLocaleString());
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
		buildings[building][3] = cost;
		$('#' + building + '-cost').text(cost.toLocaleString());
		$('#per-second').text(total_per_second.toLocaleString());
		$('#amount-display').text(crop_total.toLocaleString());
		buildings[building][2]++;
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
	if(currentUpgrades < 4 && !(currentBuildings.indexOf(building)>= 0)){
		currentUpgrades++;
		var stringy = building + '-amt';
		var current_amt = parseInt($('#'+stringy).text().replace(/,/g, ""));
		var current = currentUpgrades.toString();
		if(current_amt >= (buildings[building][1] / 2)){
			$('#upgrade-building-name-' + current).text(building);
			$('#upgrade-goal-' + current).text(buildings[building][1]);
			var cost = parseInt($('#' + building + '-cost').text().replace(/,/g, ""));
			cost *= 10;
			$('#upgrade-cost-' + current).text(cost.toLocaleString());
			$('#upgrade-button-' + current).slideDown('fast');
			currentBuildings.push(building);
		}else{
			currentUpgrades -= 1;
		}
	}
}

function remove(element){
	for(var i in currentBuildings){
		if(currentBuildings[i] === element){
			currentBuildings.splice(i,1);
		}
	}
}

function upgradeBuilding(which){
	var cost = parseInt($('#upgrade-cost' + which).text().replace(/,/g, ""));
	var building = $('#upgrade-building-name' + which).text();
	var needed_amt = parseInt($('#upgrade-goal' + which).text().replace(/,/g, ""));
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
		$('#upgrade-button' + which).slideUp('fast');
		remove(building);
		currentUpgrades -= 1;
		if(building == "gatherer"){
			harvest_level *= 3;
			
		}
	}
}

setInterval(function(){
	crop_total += parseFloat(total_per_second);
	crop_total = parseFloat(crop_total)
	$('#amount-display').text((Math.round(crop_total)).toLocaleString());
	if(autosave){
		save();
	}
},1000);


setInterval(function(){
	for(var b in buildings){
		afford(b);
		upgradeCheck(b);
	};
},250);


function save(){
	if(typeof(Storage) !== "undefined") {
		localStorage.cropTotal = parseInt(crop_total);
		localStorage.totalPs = parseFloat(total_per_second);
		localStorage.currentUpgrades = currentUpgrades;
		localStorage.BuildingList = JSON.stringify(buildings);
	}else{
		alert('Your browser does not support this save feature!');
	};
}

function loadSave(){
	if(typeof(Storage) !== "undefined"){
			if(localStorage.cropTotal){
				crop_total = Math.round(localStorage.cropTotal);
				total_per_second = Math.round(10*localStorage.totalPs)/10;
				currentUpgrades = localStorage.currentUpgrades;
				buildings = JSON.parse(localStorage.BuildingList);
				
				$('#amount-display').text(crop_total.toLocaleString());
				$('#per-second').text(total_per_second.toLocaleString());
				
				for(var b in buildings){
					var cost = buildings[b][3];
					var amount = buildings[b][2];
					var psecond = buildings[b][0] * amount;
					$('#' + b + '-cost').text(cost.toLocaleString());
					$('#' + b + '-ps').text(psecond.toLocaleString());
					$('#' + b + '-amt').text(amount.toLocaleString());
				}
				
				
				$('#per-second').text(total_per_second.toLocaleString());
				
			}else{
				alert('You have no saves!');
			};
	}else{
		alert('Your browser does not support this save feature!');
	};
}

function toggleAuto(){
	if(autosave){
		autosave = false;
		$('#autoStat').text('OFF');
	}else{
		autosave = true;
		$('#autoStat').text('ON');
	}
}

$(document).ready(function(){
	loadSave();
});





















