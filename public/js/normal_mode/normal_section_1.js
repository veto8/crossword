// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "การถ่ายโอนข้อมูล",
					answer: "data-transfer",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 1
				},
			 	{
					clue: "รณรงค์",
					answer: "campaign",
					position: 3,
					orientation: "across",
					startx: 2,
					starty: 3
				},
				{
					clue: "พอใจ",
					answer: "satisfy",
					position: 5,
					orientation: "across",
					startx: 3,
          starty: 11
				},
				{
					clue: "โรงภาพยนต์",
					answer: "theater",
					position: 8,
					orientation: "across",
					startx: 8,
					starty: 8
				},
				{
					clue: "ระเบิด",
					answer: "explode",
					position: 10,
					orientation: "across",
					startx: 4,
					starty: 16
				},
				{
					clue: "ฐานข้อมูล",
					answer: "database",
					position: 13,
					orientation: "across",
					startx: 8,
					starty: 19
				},
				{
					clue: "เอกอัคราชฑูต",
					answer: "ambassador",
					position: 16,
					orientation: "across",
					startx: 5,
					starty: 22
				},
				{
					clue: "ยุติธรรม",
					answer: "equity",
					position: 17,
					orientation: "across",
					startx: 5,
					starty: 25
				},
				{
					clue: "การถ่ายโอนแฟ้ม",
					answer: "file-transfer",
					position: 1,
					orientation: "down",
					startx: 11,
					starty: 1
				},
				{
					clue: "สะสม",
					answer: "accumulate",
					position: 2,
					orientation: "down",
					startx: 2,
					starty: 1
				},
				{
					clue: "สรุป, ไหลไปรวมกัน",
					answer: "aggregate",
					position: 4,
					orientation: "down",
					startx: 8,
					starty: 1
				},
				{
					clue: "ประธานาธิบดี, ประธาน",
					answer: "president",
					position: 6,
					orientation: "down",
					startx: 5,
					starty: 3
				},
				{
					clue: "อุบัติเหตุ",
					answer: "accident",
					position: 7,
					orientation: "down",
					startx: 4,
					starty: 11
				},
				{
					clue: "รวบรวม, ประชุม",
					answer: "assemble",
					position: 9,
					orientation: "down",
					startx: 7,
					starty: 10
				},
				{
					clue: "วิศวกร",
					answer: "engineer",
					position: 11,
					orientation: "down",
					startx: 13,
					starty: 8
				},
				{
					clue: "สมบรูณ์แบบ",
					answer: "absoloute",
					position: 12,
					orientation: "down",
					startx: 13,
					starty: 19
				},
				{
					clue: "ก้าวหน้า",
					answer: "advance",
					position: 15,
					orientation: "down",
					startx: 5,
					starty: 19
				},
				{
					clue: "สวย, งาม",
					answer: "beauty",
					position: 15,
					orientation: "down",
					startx: 7,
					starty: 22
				},
				{
					clue: "ฐานข้อมูล",
					answer: "database",
					position: 15,
					orientation: "down",
					startx: 9,
					starty: 16
				}
			]

		$('#puzzle-wrapper').crossword(puzzleData);

	})

})(jQuery)
