var mouse_level = 1;
var farm_level = 1;
var factory_level = 1;
var city_level = 1;
var mouse_per_second = 0;
var farm_per_second = 0;
var factory_per_second = 0;
var city_per_second = 0;
var click_level = 1;
var mouse_upgrade = 1;
var farm_upgrade = 100;
var factory_upgrade = 500;
var city_upgrade = 5000;
var mouse_goal = 10;
var farm_goal = 10;
var factory_goal = 10;
var city_goal = 10;
var click_goal = 10;
var total_per_second = 0;
var amount = 0;
var auto_save = 'on';

function save(){
	if(typeof(Storage) !== "undefined") {

		var local;
		local = $('#cal_amt').text();
		local = local.replace(/,/g, "");    
		localStorage.sAmt = local;

		local = $('#persecond_display').text();
		local = local.replace(/,/g, "");
		localStorage.sPersecond = local;
		
		localStorage.sMouseamt = $('#mouse_amt_desc').text();
		local = $('#mouse_cost').text();
		local = local.replace(/,/g, "");
		localStorage.sMousecost = local;
		local = $('#mouse_persecond').text();
		local = local.replace(/,/g, "");
		localStorage.sMouseps = local;

		
		localStorage.sFarmamt = $('#farm_amt_desc').text();
		local = $('#farm_cost').text();
		local = local.replace(/,/g, "");
		localStorage.sFarmcost = local;
		local = $('#farm_persecond').text();
		local = local.replace(/,/g, "");
		localStorage.sFarmps = local;
		
		localStorage.sFactoryamt = $('#factory_amt_desc').text();
		local = $('#factory_cost').text();
		local = local.replace(/,/g, "");
		localStorage.sFactorycost = local;
		local = $('#factory_persecond').text();
		local = local.replace(/,/g, "");
		localStorage.sFactoryps = local;
		
		localStorage.sCityamt = $('#city_amt_desc').text();
		local = $('#city_cost').text();
		local = local.replace(/,/g, "");
		localStorage.sCitycost = local;
		local = $('#city_persecond').text();
		local = local.replace(/,/g, "");
		localStorage.sCityps = local;
		
		localStorage.sClicklvl = $('#man_amt_desc').text();
		local = $('#man_cost').text();
		local = local.replace(/,/g, "");
		localStorage.sClickcost = local;
		local = $('#man_perclick').text();
		local = local.replace(/,/g, "");
		localStorage.sClickpc = local;
	
	}else{
		alert("Your Browser does not support this save feature! Stinks!");
	};
};

function loadSave(){
	
	if(typeof(Storage) !== "undefined"){
		
		if(localStorage.sAmt){
			
			click_level = parseInt(localStorage.sClickpc);
			mouse_level = parseInt(localStorage.sMouseamt);
			farm_level = parseInt(localStorage.sFarmamt);
			factory_level = parseInt(localStorage.sFactoryamt);
			city_level = parseInt(localStorage.sCityamt);
			mouse_per_second = parseInt(localStorage.sMouseps);
			farm_per_second = parseInt(localStorage.sFarmps);
			factory_per_second = parseInt(localStorage.sFactoryps);
			city_per_second = parseInt(localStorage.sCityps);
			total_per_second = parseInt(localStorage.sPersecond);
			amount = parseInt(localStorage.sAmt);			

			$('#cal_amt').text(amount.toLocaleString());
			$('#persecond_display').text(total_per_second.toLocaleString());
			
			$('#mouse_amt, #mouse_amt_desc').text(mouse_level.toLocaleString());
			$('#mouse_persecond').text(mouse_per_second.toLocaleString());
			$('#mouse_cost').text((localStorage.sMousecost).toLocaleString());
			
			$('#farm_amt, #farm_amt_desc').text(farm_level.toLocaleString());
			$('#farm_persecond').text(farm_per_second.toLocaleString());
			$('#farm_cost').text((localStorage.sFarmcost).toLocaleString());
			
			$('#factory_amt, #factory_amt_desc').text(factory_level.toLocaleString());
			$('#factory_persecond').text(factory_per_second.toLocaleString());
			$('#factory_cost').text((localStorage.sFactorycost).toLocaleString());
			
			$('#city_amt, #city_amt_desc').text(city_level.toLocaleString());
			$('#city_persecond').text(city_per_second.toLocaleString());
			$('#city_cost').text((localStorage.sCitycost).toLocaleString());
			
			$('#man_amt, #man_amt_desc').text((localStorage.sClicklvl).toLocaleString());
			$('#man_perclick').text((localStorage.sClickpc).toLocaleString());
			$('#man_cost').text((localStorage.sClickcost).toLocaleString());
			
		}else{
			
			alert("You have no saves!");
			
		};
		
	}else{
		alert("Your Browser does not support this save feature! How would you even have saved anything?")
	};
};



function wipeSave(){	
	if(confirm("Are you sure you want to do this?")){
		localStorage.removeItem("sAmt");
		localStorage.removeItem("sPersecond");
		localStorage.removeItem("sMouseamt");
		localStorage.removeItem("sMousecost");
		localStorage.removeItem("sMouseps");
		localStorage.removeItem("sFarmamt");
		localStorage.removeItem("sFarmcost");
		localStorage.removeItem("sFarmps");
		localStorage.removeItem("sFactoryamt");
		localStorage.removeItem("sFactorycost");
		localStorage.removeItem("sFactoryps");
		localStorage.removeItem("sCityamt");
		localStorage.removeItem("sCitycost");
		localStorage.removeItem("sCityps");
		localStorage.removeItem("sClicklvl");
		localStorage.removeItem("sClickcost");
		localStorage.removeItem("sClickpc");	
			
		mouse_level = 1;
		farm_level = 1;
		factory_level = 1;
		city_level = 1;
		mouse_per_second = 0;
		farm_per_second = 0;
		factory_per_second = 0;
		city_per_second = 0;
		click_level = 1;
		mouse_upgrade = 1;
		farm_upgrade = 100;
		factory_upgrade = 500;
		city_upgrade = 5000;
		mouse_goal = 10;
		farm_goal = 10;
		factory_goal = 10;
		city_goal = 10;
		click_goal = 10;		
		total_per_second = 0;
		amount = 0;
		
		$('#cal_amt').text(amount.toLocaleString());
		$('#persecond_display').text(total_per_second.toLocaleString());
		
		$('#mouse_amt, #mouse_amt_desc').text(0);
		$('#mouse_persecond').text(mouse_per_second.toLocaleString());
		$('#mouse_cost').text('20');
		
		$('#farm_amt, #farm_amt_desc').text(0);
		$('#farm_persecond').text(farm_per_second.toLocaleString());
		$('#farm_cost').text('500');
		
		$('#factory_amt, #factory_amt_desc').text(0);
		$('#factory_persecond').text(factory_per_second.toLocaleString());
		$('#factory_cost').text('5,000');
		
		$('#city_amt, #city_amt_desc').text(0);
		$('#city_persecond').text(city_per_second.toLocaleString());
		$('#city_cost').text('10,000');
		
		$('#man_amt, #man_amt_desc').text(0);
		$('#man_perclick').text(click_level.toLocaleString());
		$('#man_cost').text('100,000');
		
	}else{
		return;
	};	
};

function autoSave(){
	if(auto_save === 'off'){
		auto_save = 'on';
		$('#auto_save_toggle').text(' ON');
	}else{
		auto_save = 'off';
		$('#auto_save_toggle').text(' OFF');
	};
}


setInterval(function(){
	var val = $('#cal_amt').text();
	val = val.replace(/,/g, "");
	val = parseInt(val);
	val += total_per_second;
	amount = val;
	val = val.toLocaleString();
	$('#cal_amt').text(val);
	document.title = "Amount: " + amount.toLocaleString(); 
	checkPrice('can');

	if(parseInt($('#mouse_amt').text()) >= mouse_goal){
		$('#doubleMouse').show();
	}else{
		$('#doubleMouse').hide();
	};

	if(parseInt($('#farm_amt').text()) >= farm_goal){
		$('#doubleFarm').show();
	}else{
		$('#doubleFarm').hide();
	};

	if(parseInt($('#factory_amt').text()) >= factory_goal){
		$('#doubleFactory').show();
	}else{
		$('#doubleFactory').hide();
	};

	if(parseInt($('#city_amt').text()) >= city_goal){
		$('#doubleCity').show();
	}else{
		$('#doubleCity').hide();
	};
	
	if(parseInt($('#man_amt').text()) >= click_goal){
		$('#doubleClick').show();
	}else{
		$('#doubleClick').hide();
	};

},1000);

setInterval(function(){
	if(auto_save == 'on'){
		save();
	}else{
		return false;
	}
},10000);


function checkPrice(afford){
	var z = document.getElementById('man_cost').innerHTML;
	var a = document.getElementById('mouse_cost').innerHTML;
	var b = document.getElementById('farm_cost').innerHTML;
	var c = document.getElementById('factory_cost').innerHTML;
	var d = document.getElementById('city_cost').innerHTML;
	a = a.replace(/,/g, "");
	b = b.replace(/,/g, "");
	c = c.replace(/,/g, "");
	d = d.replace(/,/g, "");
	z = z.replace(/,/g, "");
	a = parseInt(a);
	b = parseInt(b);
	c = parseInt(c);
	d = parseInt(d);
	z = parseInt(z);
	if(afford == 'cannot'){
		if(amount < z){
			document.getElementById('upClick').style.opacity = '.5';
		};
		if(amount < a){
			document.getElementById('upMouse').style.opacity = '.5';
		};
		if(amount < b){
			document.getElementById('upFarm').style.opacity = '.5';
		};
		if(amount < c){
			document.getElementById('upFactory').style.opacity = '.5';
		};
		if(amount < d){
			document.getElementById('upCity').style.opacity = '.5';
		};
	}else if(afford == 'can'){
		if(amount >= z){
			document.getElementById('upClick').style.opacity = '1';
		};
		if(amount >= a){
			document.getElementById('upMouse').style.opacity = '1';
		};
		if(amount >= b){
			document.getElementById('upFarm').style.opacity = '1';
		};
		if(amount >= c){
			document.getElementById('upFactory').style.opacity = '1';
		};
		if(amount >= d){
			document.getElementById('upCity').style.opacity = '1';
		};
	};
	return false;
};

setInterval(checkPrice('can'),1000);

function manualAdd(){
	var x = $('#cal_amt').text();
	x = x.replace(/,/g, "");
	x = parseInt(x);
	x += click_level;
	amount = x;
	x = x.toLocaleString();
	$('#cal_amt').text(x);
	checkPrice('can');
	return amount;
};

function upClick(){
	var y = document.getElementById('man_amt').innerHTML;
	var z = document.getElementById('man_cost').innerHTML;
	y = y.replace(/,/g, "");
	z = z.replace(/,/g, "");
	y = parseInt(y);
	z = parseInt(z);
	if(amount >= z){
		amount -= z;
		click_level = Math.floor(click_level * 1.78) + 1;
		y++;
		z = Math.floor(z * 3.4);
		document.getElementById('cal_amt').innerHTML = amount.toLocaleString();
		document.getElementById('man_amt').innerHTML = y.toLocaleString();
		document.getElementById('man_amt_desc').innerHTML = y.toLocaleString();
		document.getElementById('man_cost').innerHTML = z.toLocaleString();
		document.getElementById('man_perclick').innerHTML = click_level.toLocaleString();
		checkPrice('cannot');
		return amount;
	};
};

function upMouse(){
	var y = document.getElementById('mouse_amt').innerHTML;
	var z = document.getElementById('mouse_cost').innerHTML;
	y = y.replace(/,/g, "");
	z = z.replace(/,/g, "");
	y = parseInt(y);
	z = parseInt(z);
	if(amount >= z){
		amount -= z;
		if(mouse_per_second == 0){
			mouse_per_second = 1;
			total_per_second += mouse_per_second;
		}else{
			mouse_per_second += mouse_upgrade;
			total_per_second += mouse_upgrade;
		};
		y++;
		z = Math.floor(z * 1.29) + 1;
		document.getElementById('cal_amt').innerHTML = amount.toLocaleString();
		document.getElementById('mouse_amt').innerHTML = y.toLocaleString();
		document.getElementById('mouse_amt_desc').innerHTML = y.toLocaleString();
		document.getElementById('mouse_cost').innerHTML = z.toLocaleString();
		document.getElementById('mouse_persecond').innerHTML = mouse_per_second.toLocaleString();
		document.getElementById('persecond_display').innerHTML = total_per_second.toLocaleString();
		checkPrice('cannot');
		return amount;
	};
};

function upFarm(){
	var y = document.getElementById('farm_amt').innerHTML;
	var z = document.getElementById('farm_cost').innerHTML;
	y = y.replace(/,/g, "");
	z = z.replace(/,/g, "");
	y = parseInt(y);
	z = parseInt(z);
	if(amount >= z){
		amount -= z;
		if(farm_per_second == 0){
			farm_per_second = 100;
			total_per_second += farm_per_second;
		}else{
			farm_per_second += farm_upgrade;
			total_per_second += farm_upgrade;
		};
		y++;
		z = Math.floor(z * 1.4) + 1;
		document.getElementById('cal_amt').innerHTML = amount.toLocaleString();
		document.getElementById('farm_amt').innerHTML = y.toLocaleString();
		document.getElementById('farm_amt_desc').innerHTML = y.toLocaleString();
		document.getElementById('farm_cost').innerHTML = z.toLocaleString();
		document.getElementById('farm_persecond').innerHTML = farm_per_second.toLocaleString();
		document.getElementById('persecond_display').innerHTML = total_per_second.toLocaleString();
		checkPrice('cannot');
		return amount;
	};
};

function upFactory(){
	var y = document.getElementById('factory_amt').innerHTML;
	var z = document.getElementById('factory_cost').innerHTML;
	y = y.replace(/,/g, "");
	z = z.replace(/,/g, "");
	y = parseInt(y);
	z = parseInt(z);
	if(amount >= z){
		amount -= z;
		if(factory_per_second == 0){
			factory_per_second = 500;
			total_per_second += factory_per_second;
		}else{
			factory_per_second += factory_upgrade;
			total_per_second += factory_upgrade;
		};
		y++;
		z = Math.floor(z * 1.48) + 1;
		document.getElementById('cal_amt').innerHTML = amount.toLocaleString();
		document.getElementById('factory_amt').innerHTML = y.toLocaleString();
		document.getElementById('factory_amt_desc').innerHTML = y.toLocaleString();
		document.getElementById('factory_cost').innerHTML = z.toLocaleString();
		document.getElementById('factory_persecond').innerHTML = factory_per_second.toLocaleString();
		document.getElementById('persecond_display').innerHTML = total_per_second.toLocaleString();
		checkPrice('cannot');
		return amount;
	};
};

function upCity(){
	var y = document.getElementById('city_amt').innerHTML;
	var z = document.getElementById('city_cost').innerHTML;
	y = y.replace(/,/g, "");
	z = z.replace(/,/g, "");
	y = parseInt(y);
	z = parseInt(z);
	if(amount >= z){
		amount -= z;
		if(city_per_second == 0){
			city_per_second = 5000;
			total_per_second += city_per_second;
		}else{
			city_per_second += city_upgrade;
			total_per_second += city_upgrade;
		};
		y++;
		z = Math.floor(z * 1.53) + 1;
		document.getElementById('cal_amt').innerHTML = amount.toLocaleString();
		document.getElementById('city_amt').innerHTML = y.toLocaleString();
		document.getElementById('city_amt_desc').innerHTML = y.toLocaleString();
		document.getElementById('city_cost').innerHTML = z.toLocaleString();
		document.getElementById('city_persecond').innerHTML = city_per_second.toLocaleString();
		document.getElementById('persecond_display').innerHTML = total_per_second.toLocaleString();
		checkPrice('cannot');
		return amount;
	};
};

function notificationAnimation(){
	$('#notification').animate({
		opacity: '1',
		left: '+=' + (($(window).width()/2)-150)
	},2000).animate({
		opacity: '0',
		left: '+=' + (($(window).width()/2)-150)
	},2000).delay(100).animate({
		left: '-=' +(2 * (($(window).width()/2)-150))
	}, 100);
};

function doubleMouse(){
	mouse_upgrade *= 2;
	total_per_second += mouse_per_second;
	mouse_per_second *= 2;
	mouse_goal += 10;
	var local = Math.floor(amount / 2);
	amount -= local;
	document.getElementById('cal_amt').innerHTML = amount.toLocaleString();
	document.getElementById('mouse_persecond').innerHTML = mouse_per_second.toLocaleString();
	document.getElementById('persecond_display').innerHTML = total_per_second.toLocaleString();
	$('#doubleMouse').hide();	
	notificationAnimation();
};

function doubleFarm(){
	farm_upgrade *= 2;
	total_per_second += farm_per_second;
	farm_per_second *= 2;
	farm_goal += 10;
	var local = Math.floor(amount / 2);
	amount -= local;
	document.getElementById('cal_amt').innerHTML = amount.toLocaleString();
	document.getElementById('farm_persecond').innerHTML = farm_per_second.toLocaleString();
	document.getElementById('persecond_display').innerHTML = total_per_second.toLocaleString();
	$('#doubleFarm').hide();
	notificationAnimation();
};

function doubleFactory(){
	factory_upgrade *= 2;
	total_per_second += factory_per_second;
	factory_per_second *= 2;
	factory_goal += 10;
	var local = Math.floor(amount / 2);
	amount -= local;
	document.getElementById('cal_amt').innerHTML = amount.toLocaleString();
	document.getElementById('factory_persecond').innerHTML = factory_per_second.toLocaleString();
	document.getElementById('persecond_display').innerHTML = total_per_second.toLocaleString();
	$('#doubleFactory').hide();
	notificationAnimation();
};

function doubleCity(){
	city_upgrade *= 2;
	total_per_second += city_per_second;
	city_per_second *= 2;
	city_goal += 10;
	var local = Math.floor(amount / 2);
	amount -= local;
	document.getElementById('cal_amt').innerHTML = amount.toLocaleString();
	document.getElementById('city_persecond').innerHTML = city_per_second.toLocaleString();
	document.getElementById('persecond_display').innerHTML = total_per_second.toLocaleString();
	$('#doubleCity').hide();
	notificationAnimation();
};

function doubleAuto(){
	click_level *= 2;
	var local = Math.floor(amount / 2);
	click_goal += 10;
	amount -= local;
	document.getElementById('cal_amt').innerHTML = amount.toLocaleString();
	document.getElementById('man_perclick').innerHTML = click_level.toLocaleString();
	$('#doubleClick').hide();
	notificationAnimation();
};
