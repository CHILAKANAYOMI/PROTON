



var child_box = document.getElementById('child_box');
var left_btn = document.getElementById('left_btn');
var right_btn = document.getElementById('right_btn');


left_btn.onclick = function(){
	child_box.classList.remove('left_side_move');
	child_box.classList.add('right_side_move');
}


right_btn.onclick = function(){
	
	child_box.classList.add('left_side_move');
	child_box.classList.remove('right_side_move');
}