// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "ยอมรับ, รับรอง",
					answer: "acknowledge",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 1
				},
			 	{
					clue: "ส่งเสริม",
					answer: "enchance",
					position: 3,
					orientation: "across",
					startx: 1,
					starty: 5
				},
				{
					clue: "หลักแหลม",
					answer: "brilliant",
					position: 5,
					orientation: "across",
					startx: 3,
          starty: 9
				},
				{
					clue: "รับประกัน",
					answer: "guarantee",
					position: 8,
					orientation: "across",
					startx: 5,
					starty: 3
				},
				{
					clue: "คงอยู่",
					answer: "exist",
					position: 10,
					orientation: "across",
					startx: 3,
					starty: 15
				},
				{
					clue: "ไม่รู้จัก, ไม่มีชื่อเสียง, ไม่รู้",
					answer: "unknown",
					position: 13,
					orientation: "across",
					startx: 9,
					starty: 12
				},
				{
					clue: "ระนาด, เบลไลลา",
					answer: "xylophone",
					position: 16,
					orientation: "across",
					startx: 4,
					starty: 19
				},
				{
					clue: "เลื่อน, ยก",
					answer: "elevate",
					position: 17,
					orientation: "across",
					startx: 9,
					starty: 17
				},
				{
					clue: "วิชาการ, โรงเรียน",
					answer: "academy",
					position: 1,
					orientation: "down",
					startx: 1,
					starty: 1
				},
				{
					clue: "ครัว",
					answer: "kitchen",
					position: 2,
					orientation: "down",
					startx: 3,
					starty: 1
				},
				{
					clue: "ท้าทาย",
					answer: "challenge",
					position: 4,
					orientation: "down",
					startx: 6,
					starty: 5
				},
				{
					clue: "แผนผัง",
					answer: "diagram",
					position: 6,
					orientation: "down",
					startx: 9,
					starty: 1
				},
				{
					clue: "เศรษฐกิจ",
					answer: "economic",
					position: 7,
					orientation: "down",
					startx: 13,
					starty: 3
				},
				{
					clue: "รถพยาบาล",
					answer: "ambulance",
					position: 9,
					orientation: "down",
					startx: 9,
					starty: 9
				},
				{
					clue: "เชื่อ, ศรัทธา",
					answer: "belive",
					position: 11,
					orientation: "down",
					startx: 3,
					starty: 9
				},
				{
					clue: "ถ่ายเอกสาร",
					answer: "xerox",
					position: 12,
					orientation: "down",
					startx: 4,
					starty: 15
				},
				{
					clue: "น้ำหนัก",
					answer: "weight",
					position: 15,
					orientation: "down",
					startx: 14,
					starty: 12
				},
				{
					clue: "ทาก",
					answer: "snail",
					position: 15,
					orientation: "down",
					startx: 6,
					starty: 15
				}
			]

		$('#puzzle-wrapper').crossword(puzzleData);

	})

})(jQuery)
