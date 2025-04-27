// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "สื่อ, ตัวกลาง",
					answer: "media",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 1
				},
			 	{
					clue: "แนว(ของหนัง, เพลง, งาน)",
					answer: "theme",
					position: 3,
					orientation: "across",
					startx: 2,
					starty: 4
				},
				{
					clue: "เรียนรู้",
					answer: "learn",
					position: 5,
					orientation: "across",
					startx: 5,
					starty: 6
				},
				{
					clue: "พร้อม, เตรียมพร้อม",
					answer: "ready",
					position: 8,
					orientation: "across",
					startx: 2,
					starty: 10
				},
				{
					clue: "จบ",
					answer: "end",
					position: 10,
					orientation: "across",
					startx: 1,
					starty: 7
				},
				{
					clue: "พื้นที่",
					answer: "area",
					position: 13,
					orientation: "across",
					startx: 2,
					starty: 13
				},
				{
					clue: "เริ่มต้น",
					answer: "start",
					position: 16,
					orientation: "across",
					startx: 8,
					starty: 9
				},
				{
					clue: "ปกติ",
					answer: "normal",
					position: 17,
					orientation: "across",
					startx: 5,
					starty: 2
				},
				{
					clue: "แก้ไข",
					answer: "edit",
					position: 1,
					orientation: "down",
					startx: 2,
					starty: 1
				},
				{
					clue: "สัตว์",
					answer: "animal",
					position: 2,
					orientation: "down",
					startx: 5,
					starty: 1
				},
				{
					clue: "ถือ, จับ, ยึดถือ",
					answer: "hold",
					position: 4,
					orientation: "down",
					startx: 3,
					starty: 4
				},
				{
					clue: "ว่างเปล่า",
					answer: "empty",
					position: 6,
					orientation: "down",
					startx: 6,
					starty: 6
				},
				{
					clue: "เหตุผล",
					answer: "reason",
					position: 7,
					orientation: "down",
					startx: 8,
					starty: 6
				},
				{
					clue: "ผ่อนคลาย",
					answer: "relax",
					position: 9,
					orientation: "down",
					startx: 2,
					starty: 10
				},
				{
					clue: "ลูกศร, ลูกธนู",
					answer: "arrow",
					position: 11,
					orientation: "down",
					startx: 10,
					starty: 9
				},
				{
					clue: "หอสูง",
					answer: "tower",
					position: 12,
					orientation: "down",
					startx: 12,
					starty: 9
				},
				{
					clue: "ตะวันออก",
					answer: "east",
					position: 14,
					orientation: "down",
					startx: 4,
					starty: 13
				},
				{
					clue: "มืด",
					answer: "dark",
					position: 15,
					orientation: "down",
					startx: 9,
					starty: 2
				}
			]

		$('#puzzle-wrapper').crossword(puzzleData);

	})

})(jQuery)
