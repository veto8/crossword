// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "เพชร",
					answer: "diamond",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 1
				},
			 	{
					clue: "เด็กหญิง",
					answer: "girl",
					position: 3,
					orientation: "across",
					startx: 1,
					starty: 3
				},
				{
					clue: "ขโมย, โจร",
					answer: "thief",
					position: 5,
					orientation: "across",
					startx: 1,
					starty: 5
				},
				{
					clue: "พลังงาน",
					answer: "energy",
					position: 8,
					orientation: "across",
					startx: 7,
					starty: 2
				},
				{
					clue: "แม่น้ำ",
					answer: "river",
					position: 10,
					orientation: "across",
					startx: 7,
					starty: 5
				},
				{
					clue: "จรวด",
					answer: "rocket",
					position: 13,
					orientation: "across",
					startx: 9,
					starty: 9
				},
				{
					clue: "โรงหนัง, โรงละคร",
					answer: "theater",
					position: 16,
					orientation: "across",
					startx: 9,
					starty: 7
				},
				{
					clue: "แสง, ไฟ",
					answer: "light",
					position: 17,
					orientation: "across",
					startx: 4,
					starty: 15
				},
				{
					clue: "แมลง, จุดบกพร่อง",
					answer: "bug",
					position: 18,
					orientation: "across",
					startx: 8,
					starty: 13
				},
				{
					clue: "เทคโนโลยีอิเล็คโทรนิคส์ที่ใช้สร้าง เก็บ และประมวลข้อมูลในลักษณะ 2 สถาน",
					answer: "digital",
					position: 1,
					orientation: "down",
					startx: 1,
					starty: 1
				},
				{
					clue: "อากาศ",
					answer: "air",
					position: 2,
					orientation: "down",
					startx: 3,
					starty: 1
				},
				{
					clue: "ทำลาย, สังหาร",
					answer: "destroy",
					position: 4,
					orientation: "down",
					startx: 7,
					starty: 1
				},
				{
					clue: "ลิฟต์",
					answer: "elevator",
					position: 6,
					orientation: "down",
					startx: 9,
					starty: 2
				},
				{
					clue: "ความนิยม",
					answer: "fashion",
					position: 7,
					orientation: "down",
					startx: 5,
					starty: 5
				},
				{
					clue: "แมลง",
					answer: "insect",
					position: 9,
					orientation: "down",
					startx: 3,
					starty: 5
				},
				{
					clue: "ส้ม, สีส้ม",
					answer: "orange",
					position: 11,
					orientation: "down",
					startx: 10,
					starty: 9
				},
				{
					clue: "มีด",
					answer: "knife",
					position: 12,
					orientation: "down",
					startx: 12,
					starty: 9
				},
				{
					clue: "นิสัย",
					answer: "habit",
					position: 15,
					orientation: "down",
					startx: 8,
					starty: 11
				}
			]

		$('#puzzle-wrapper').crossword(puzzleData);

	})

})(jQuery)
