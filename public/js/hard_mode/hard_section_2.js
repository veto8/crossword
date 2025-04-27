// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "สมมุติฐาน",
					answer: "hypothesis",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 1
				},
			 	{
					clue: "ฉลาด, หน่วยสืบราชการลับ",
					answer: "intelligent",
					position: 3,
					orientation: "across",
					startx: 3,
					starty: 3
				},
				{
					clue: "อพยพ",
					answer: "immigrant",
					position: 5,
					orientation: "across",
					startx: 3,
          starty: 5
				},
				{
					clue: "ที่อยู่อาศัย",
					answer: "residence",
					position: 8,
					orientation: "across",
					startx: 7,
					starty: 8
				},
				{
					clue: "เพลงชาติ",
					answer: "anthem",
					position: 10,
					orientation: "across",
					startx: 7,
					starty: 13
				},
				{
					clue: "ถิ่นที่อยู่, สิ่งแวดล้อม",
					answer: "habitat",
					position: 13,
					orientation: "across",
					startx: 3,
					starty: 17
				},
				{
					clue: "ผูกมัด",
					answer: "obligate",
					position: 16,
					orientation: "across",
					startx: 3,
					starty: 22
				},
				{
					clue: "ปลดเกษียณ, ถอนตัว",
					answer: "retired",
					position: 17,
					orientation: "across",
					startx: 3,
					starty: 20
				},
				{
					clue: "เป็นความลับ",
					answer: "underhanded",
					position: 17,
					orientation: "across",
					startx: 5,
					starty: 24
				},
				{
					clue: "ดั้งเดิม,โบราณ",
					answer: "primitive",
					position: 1,
					orientation: "down",
					startx: 3,
					starty: 1
				},
				{
					clue: "นครหลวง,ศูนย์",
					answer: "metropolis",
					position: 2,
					orientation: "down",
					startx: 5,
					starty: 5
				},
				{
					clue: "กองโจร",
					answer: "guerrilla",
					position: 4,
					orientation: "down",
					startx: 7,
					starty: 5
				},
				{
					clue: "สมดุล",
					answer: "equilibrium",
					position: 6,
					orientation: "down",
					startx: 15,
					starty: 8
				},
				{
					clue: "สัญชาติญาณ",
					answer: "insticnt",
					position: 7,
					orientation: "down",
					startx: 9,
					starty: 10
				},
				{
					clue: "ข้อสันนิษฐาน",
					answer: "hypothesis",
					position: 9,
					orientation: "down",
					startx: 1,
					starty: 1
				},
				{
					clue: "สัตวแพทย์",
					answer: "veterinarian",
					position: 11,
					orientation: "down",
					startx: 11,
					starty: 10
				},
				{
					clue: "ย่าน,บริเวณ",
					answer: "neighborhood",
					position: 12,
					orientation: "down",
					startx: 3,
					starty: 13
				},
				{
					clue: "โรคมะเร็งเม็ดเลือดขาว,ลูคีเมีย",
					answer: "leukaemia",
					position: 15,
					orientation: "down",
					startx: 5,
					starty: 22
				}
			]

		$('#puzzle-wrapper').crossword(puzzleData);

	})

})(jQuery)
