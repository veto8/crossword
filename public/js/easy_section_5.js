// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "การแสดงข้อมูลบนเว็บไซต์ (WWW)",
					answer: "website",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 1
				},
			 	{
					clue: "เดือน",
					answer: "month",
					position: 3,
					orientation: "across",
					startx: 1,
					starty: 3
				},
				{
					clue: "เดือนตุลาคม",
					answer: "october",
					position: 5,
					orientation: "across",
					startx: 5,
					starty: 4
				},
				{
					clue: "ขนแกะ",
					answer: "wool",
					position: 8,
					orientation: "across",
					startx: 2,
					starty: 10
				},
				{
					clue: "ผู้ใหญ่",
					answer: "adult",
					position: 10,
					orientation: "across",
					startx: 2,
					starty: 12
				},
				{
					clue: "ไฟฟ้า",
					answer: "electric",
					position: 13,
					orientation: "across",
					startx: 2,
					starty: 14
				},
				{
					clue: "เก็บ, รักษา",
					answer: "keep",
					position: 16,
					orientation: "across",
					startx: 3,
					starty: 17
				},
				{
					clue: "ปืน",
					answer: "climb",
					position: 17,
					orientation: "across",
					startx: 8,
					starty: 16
				},
				{
					clue: "ผู้หญิง",
					answer: "woman",
					position: 1,
					orientation: "down",
					startx: 1,
					starty: 1
				},
				{
					clue: "บะหมี่, ก๊วยเตี๋ยว",
					answer: "noodle",
					position: 2,
					orientation: "down",
					startx: 3,
					starty: 3
				},
				{
					clue: "โรงพยาบาล",
					answer: "evening",
					position: 4,
					orientation: "down",
					startx: 5,
					starty: 3
				},
				{
					clue: "ส้วม, ห้องน้ำ",
					answer: "toilet",
					position: 6,
					orientation: "down",
					startx: 7,
					starty: 4
				},
				{
					clue: "พันล้าน",
					answer: "billion",
					position: 7,
					orientation: "down",
					startx: 9,
					starty: 4
				},
				{
					clue: "ศาสนา",
					answer: "religion",
					position: 9,
					orientation: "down",
					startx: 11,
					starty: 4
				},
				{
					clue: "วาฬ",
					answer: "whale",
					position: 11,
					orientation: "down",
					startx: 2,
					starty: 10
				},
				{
					clue: "เกี่ยวข้อง, เชื่อมโยง",
					answer: "link",
					position: 12,
					orientation: "down",
					startx: 3,
					starty: 14
				},
				{
					clue: "วงกลม",
					answer: "circle",
					position: 15,
					orientation: "down",
					startx: 8,
					starty: 13
				},
				{
					clue: "พันทาง, ลูกผสม",
					answer: "hybrid",
					position: 15,
					orientation: "down",
					startx: 12,
					starty: 14
				}
			]

		$('#puzzle-wrapper').crossword(puzzleData);

	})

})(jQuery)
