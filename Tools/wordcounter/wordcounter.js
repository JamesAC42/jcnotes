var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890 ";
var symbolCheck = lower + numbers;

function countW(){
	var amountW = 0;
	var characters = 0;
	
	var input = $("#textbox").val();
	input += " ";
	input = input.toLowerCase();
	
	var passage = "";
	var n = 0;
	while(n < input.length){
		if(!(symbolCheck.indexOf(input[n]))){
			if(input[n] == "\n"){
				passage += " ";
			}else{
				passage += "";
			};
		}else{
			passage += input[n];
		};
		n++;
	};
	
	console.log(passage);
	
	var words = [];
	n = 0;
	var string = "";
	while(n < passage.length){
		if(passage[n] == " "){
			words.push(string);
			string = "";
			amountW++;
			n++;
		}else{
			string += passage[n];
			n++;
		};
	};
	
	console.log(words);
	
	n = 0;
	while(n < words.length){
		if(words[n] == ""){
			words.splice(n,1);
			amountW -= 1;
		}else{
			n++;
		};
	};
	
	console.log(words);
	
	var d = new Object;
	for(var i in words){
		d[i]= 0;
	};
	for(var x in words){
		d[x] += 1;
	};
	
	var sortplace = [];
	for(var w in d){
		sortplace.push([w, d[w]]);
	};
	sortplace.sort(function(a, b) {return a[1] - b[1]})
	var final = new Object;
	for(var wordpair in sortplace){
		final[wordpair[0]] = wordpair[1];
	};
	
	console.log(final,amountW);
	return [final, amountW];
	
	
};

function repeatString(r,number){
	var j = "";
	var n = 0;
	while(n < number){
		j += r;
		n++;
	};
	return j;
}

function return_stats_string(ordered_dict){
	var stat = "";
	for(var word in ordered_dict){
		var n = 25 - word.length;
		var f = repeatString("-",n);
		var b = repeatString("[]",ordered_dict[word]);
		var string_amt = ordered_dict[word];
		string_amt = string_amt.toString;
		stat += word + ": " + f + " " + b + " (" + string_amt + ")" + "\n";
	};
	return stat;
};

function runwordcount(){
	var final_amt_list = countW();
	var ordereddict = final_amt_list[0];
	var amount = final_amt_list[1];
	var stats_string = "Words: "+amount.toString()+"\n";
	stats_string += return_stats_string(ordereddict);
	$('#results').text(stats_string);
};

















