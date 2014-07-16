$(document).ready(function(){
 var temp_numb;	
 var arith_method;	
 function my_max(array_of_numbs){
 	var myArray = array_of_numbs
 	return Math.max.apply(Math,myArray);
 };
$("button").click(function(){
	var id = $(this).attr('class'); 
	switch(id){
	
	case 'C':
		$('input').val('');
		temp_numb = "0";
		$("#screen").text('0')
		break;
	case "+":
		arith_method = "+";
		temp_numb = $('input').val();
		$('input').val('');
		break;
	case "-":
		arith_method = "-";
		temp_numb = $('input').val();
		$('input').val('');
		break;
	case "*":
		arith_method = "*";
		temp_numb = $('input').val();
		$('input').val('');
		break;
	case "/":
		arith_method = "/";
		temp_numb = $('input').val();
		$('input').val('');
		arith_method = "/";
		break;

	case "=":
		var total = $('input').val().split('')
		switch(arith_method){
		case "+":
			$('#screen').text((parseInt(temp_numb) + parseInt($('input').val())));
			break;
		case "-":
			$('#screen').text((parseInt(temp_numb) - parseInt($('input').val())));
			break;
		case "*":
			$('#screen').text((parseInt(temp_numb) * parseInt($('input').val())));
			break;
		case "/":
			$('#screen').text((parseInt(temp_numb) / parseInt($('input').val())));
			break;
		}
		break;
	default:
	var id = $(this).attr('class'); 
	id = $('input').val() + id
	$('input').val(id)
	}
});

var word = "RitA"

function vowel_count(s){
	var count = 0
	for(var i = 0; i < s.length; i++){
		if (isVowel(s[i])) count += 1
	}
	return count
}
function isVowel(c){
	return ['a','e','i','o','u', 'y', 'A', 'E','I','O','U', 'Y'].indexOf(c) !== -1
}

function reverse(s){
	return s.split('').reverse()
};

function add(x, y){
	return x + y;
}

function mutliply(x, y){
	return x * y;
}

function divide(x, y){
	return x / y;
}

function subtract(x, y){
	return x - y;
}



//Helper Functions
function addArray(arr){
	var sum = 0
	$.each(arr,function(index, value){
		sum +=parseInt(value)	
	});
	return sum
};
function subArray(arr){
	var dif = arr[0]
	$.each(arr,function(index, value){
		if(index > 0){dif -=parseInt(value);}
	});
	return dif
};
function divArray(arr){
	return arr[0] / arr[1]
};
function multiArray(arr){
	return arr[0] * arr[1]
}


//Tests
//testArr = ["4","2"];

});