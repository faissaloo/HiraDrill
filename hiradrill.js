/////////////////////////////////LICENCE///////////////////////////////////////
// Copyright (c) 2016 Faissal Bensefia
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
///////////////////////////////////////////////////////////////////////////////
var main_body;
main_body=document.getElementById("main_body");
status_msg=document.getElementById("status_msg");
curr_ltr=document.getElementById("curr_ltr");

//All possible letters
var letters;
//The letters that can possibly be picked after ones have already been picked
var letters_remaining={};
var chosen_letter;
var buttons_array=[];
letters = {
	//None
	"あ":"A",
	"い":"I",
	"う":"U",
	"え":"E",
	"お":"O",
	//K
	"か":"KA",
	"き":"KI",
	"く":"KU",
	"け":"KE",
	"こ":"KO",
	//S
	"さ":"SA",
	"し":"SHI",
	"す":"SU",
	"せ":"SE",
	"そ":"SO",
	//T
	"た":"TA",
	"ち":"CHI",
	"つ":"TSU",
	"て":"TE",
	"と":"TO",
	//N
	"な":"NA",
	"に":"NI",
	"ぬ":"NU",
	"ね":"NE",
	"の":"NO",
	//H
	"は":"HA",
	"ひ":"HI",
	"ふ":"FU",
	"へ":"HE",
	"ほ":"HO",
	//M
	"ま":"MA",
	"み":"MI",
	"む":"MU",
	"め":"ME",
	"も":"MO",
	//Y
	"や":"YA",
	"ゆ":"YU",
	"よ":"YO",
	//R
	"ら":"RA",
	"り":"RI",
	"る":"RU",
	"れ":"RE",
	"ろ":"RO",
	//W
	"わ":"WA",
	"ゐ":"WI",
	"ゑ":"WE",
	"を":"WO",
	//Misc
	"ん":"N",
	//G
	"が":"GA",
	"ぎ":"GI",
	"ぐ":"GU",
	"げ":"GE",
	"ご":"GO",
	//Z
	"ざ":"ZA",
	"じ":"JI",
	"ず":"ZU",
	"ぜ":"ZE",
	"ぞ":"ZO",
	//D
	"だ":"DA",
	"ぢ":"JI",
	"づ":"ZU",
	"で":"DE",
	"ど":"DO",
	//B
	"ば":"BA",
	"び":"BI",
	"ぶ":"BU",
	"べ":"BE",
	"ぼ":"BO",
	//P
	"ぱ":"PA",
	"ぴ":"PI",
	"ぷ":"PU",
	"ぺ":"PE",
	"ぽ":"PO",
	//V
	"ゔ":"VU"
	};

function create_btn(title,func)
{
	var btn=document.createElement("button");
	btn.addEventListener("click",func);
	btn.innerHTML=title;
	main_body.appendChild(btn);
	return btn;
}

function random_letter()
{
	var selected_letter=Object.keys(letters_remaining)[Math.floor(Math.random()*Object.keys(letters_remaining).length)];
	delete letters_remaining[selected_letter];
	return selected_letter;
}

function correct_ans()
{
	//We do not reward, only punish
	generate_q();
}

function wrong_ans()
{
	alert("Wrong!")
	generate_q();
}


function generate_q()
{
	//Copies the contents of letters into letters_remaining
	//reasons_to_hate_js++;
	Object.keys(letters).forEach(function(key) {letters_remaining[key] = letters[key];});
	//delete our old buttons
	for (var i=0;i<Object.keys(buttons_array).length;i++)
	{
		main_body.removeChild(buttons_array[i]);
	}
	chosen_letter=random_letter();
	curr_ltr.innerHTML=chosen_letter;
	//Position of the correct answer
	var correct_pos;
	correct_pos=Math.floor(Math.random()*3)
	for (var i=0;i<3;i++)
	{
		if (i==correct_pos)
		{
			buttons_array[i]=create_btn(letters[chosen_letter],correct_ans);
		}
		else
		{
			buttons_array[i]=create_btn(letters[random_letter()],wrong_ans);
		}
	}
	
}

generate_q();
