// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "นิ้ว, ฟุต",
					answer: "inch",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 1
				},
			 	{
					clue: "เป้า, เป้าหมาย",
					answer: "target",
					position: 3,
					orientation: "across",
					startx: 1,
					starty: 3
				},
				{
					clue: "มะกอก",
					answer: "olive",
					position: 5,
					orientation: "across",
					startx: 3,
					starty: 7
				},
				{
					clue: "ตา, ลูกตา",
					answer: "eye",
					position: 8,
					orientation: "across",
					startx: 5,
					starty: 5
				},
				{
					clue: "หญ้า",
					answer: "grass",
					position: 10,
					orientation: "across",
					startx: 5,
					starty: 9
				},
				{
					clue: "หุ่นกระบอก",
					answer: "puppet",
					position: 13,
					orientation: "across",
					startx: 1,
					starty: 12
				},
				{
					clue: "ทับทิม",
					answer: "ruby",
					position: 16,
					orientation: "across",
					startx: 8,
					starty: 11
				},
				{
					clue: "ปรับแต่ง, แก้ไข้",
					answer: "modify",
					position: 17,
					orientation: "across",
					startx: 8,
					starty: 13
				},
				{
					clue: "เครือข่ายคอมพิวเตอร์ที่ใหญ่ที่สุด",
					answer: "internet",
					position: 1,
					orientation: "down",
					startx: 1,
					starty: 1
				},
				{
					clue: "เหตุผล",
					answer: "reason",
					position: 2,
					orientation: "down",
					startx: 3,
					starty: 3
				},
				{
					clue: "ตอนเย็น",
					answer: "evening",
					position: 4,
					orientation: "down",
					startx: 5,
					starty: 3
				},
				{
					clue: "ภัตราคาร, ร้านอาหาร",
					answer: "restaurant",
					position: 6,
					orientation: "down",
					startx: 6,
					starty: 9
				},
				{
					clue: "กุ้ง",
					answer: "shrimp",
					position: 7,
					orientation: "down",
					startx: 8,
					starty: 9
				},
				{
					clue: "จิ๊กซอร์, ปริศนา",
					answer: "puzzle",
					position: 9,
					orientation: "down",
					startx: 1,
					starty: 12
				},
				{
					clue: "ลูกสุนัข",
					answer: "puppy",
					position: 11,
					orientation: "down",
					startx: 3,
					starty: 12
				},
				{
					clue: "ป่า",
					answer: "forest",
					position: 12,
					orientation: "down",
					startx: 13,
					starty: 13
				},
				{
					clue: "คณิตศาสตร์",
					answer: "maths",
					position: 15,
					orientation: "down",
					startx: 9,
					starty: 5
				}
			]

		$('#puzzle-wrapper').crossword(puzzleData);

	})

})(jQuery)
