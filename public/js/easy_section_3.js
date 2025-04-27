// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "หน่วยความจำ",
					answer: "memory",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 1
				},
			 	{
					clue: "แก้ไข",
					answer: "girl",
					position: 3,
					orientation: "across",
					startx: 1,
					starty: 7
				},
				{
					clue: "หุ้นส่วน",
					answer: "partner",
					position: 5,
					orientation: "across",
					startx: 5,
					starty: 3
				},
				{
					clue: "ทิศตะวันตก",
					answer: "west",
					position: 8,
					orientation: "across",
					startx: 9,
					starty: 5
				},
				{
					clue: "เมล็ดพันธุ์",
					answer: "seed",
					position: 10,
					orientation: "across",
					startx: 2,
					starty: 9
				},
				{
					clue: "องุ่น",
					answer: "grape",
					position: 13,
					orientation: "across",
					startx: 2,
					starty: 11
				},
				{
					clue: "เสียงสะท้อน",
					answer: "echo",
					position: 16,
					orientation: "across",
					startx: 12,
					starty: 8
				},
				{
					clue: "ตั๋ว, บัตร",
					answer: "ticket",
					position: 17,
					orientation: "across",
					startx: 6,
					starty: 14
				},
				{
					clue: "สาร, ข่าวสาร",
					answer: "message",
					position: 1,
					orientation: "down",
					startx: 1,
					starty: 1
				},
				{
					clue: "รายงาน",
					answer: "report",
					position: 2,
					orientation: "down",
					startx: 5,
					starty: 1
				},
				{
					clue: "ความชื้น",
					answer: "moist",
					position: 4,
					orientation: "down",
					startx: 3,
					starty: 1
				},
				{
					clue: "ซ่อม",
					answer: "repair",
					position: 6,
					orientation: "down",
					startx: 7,
					starty: 3
				},
				{
					clue: "ข่าว",
					answer: "news",
					position: 7,
					orientation: "down",
					startx: 9,
					starty: 3
				},
				{
					clue: "ออกแบบ",
					answer: "design",
					position: 9,
					orientation: "down",
					startx: 2,
					starty: 7
				},
				{
					clue: "เกือบ",
					answer: "almost",
					position: 11,
					orientation: "down",
					startx: 4,
					starty: 11
				},
				{
					clue: "ทางออก",
					answer: "exit",
					position: 12,
					orientation: "down",
					startx: 6,
					starty: 11
				},
				{
					clue: "ต้นไม้",
					answer: "tree",
					position: 15,
					orientation: "down",
					startx: 12,
					starty: 5
				},
        {
					clue: "เข่า, หัวเข่า",
					answer: "knee",
					position: 15,
					orientation: "down",
					startx: 9,
					starty: 14
				}
			]

		$('#puzzle-wrapper').crossword(puzzleData);

	})

})(jQuery)
