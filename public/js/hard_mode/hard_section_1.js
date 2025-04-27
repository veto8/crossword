// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "สารบบ",
					answer: "Directories",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 1
				},
			 	{
					clue: "นักจิตวิทยา",
					answer: "psychologist",
					position: 3,
					orientation: "across",
					startx: 1,
					starty: 3
				},
				{
					clue: "ฝนฟ้าคะนอง",
					answer: "thunderstrom",
					position: 5,
					orientation: "across",
					startx: 1,
          starty: 8
				},
				{
					clue: "สี่เหลี่ยมผืนผ้า",
					answer: "rectangle",
					position: 8,
					orientation: "across",
					startx: 7,
					starty: 6
				},
				{
					clue: "วงออร์เคสตร้า",
					answer: "orchestra",
					position: 10,
					orientation: "across",
					startx: 7,
					starty: 15
				},
				{
					clue: "สังเคราะห์",
					answer: "synthesis",
					position: 13,
					orientation: "across",
					startx: 1,
					starty: 21
				},
				{
					clue: "กำพร้า",
					answer: "orphan",
					position: 16,
					orientation: "across",
					startx: 1,
					starty: 17
				},
				{
					clue: "วิทยาศาสตร์",
					answer: "science",
					position: 17,
					orientation: "across",
					startx: 1,
					starty: 19
				},
				{
					clue: "นักเดินเรือ,นักบิน,ผู้นำทาง",
					answer: "navigator",
					position: 1,
					orientation: "across",
					startx: 5,
					starty: 23
				},
				{
					clue: "ฉบับเทียบ,ก๊อปปี้",
					answer: "duplicate",
					position: 2,
					orientation: "down",
					startx: 1,
					starty: 1
				},
				{
					clue: "สะดวก",
					answer: "convenience",
					position: 4,
					orientation: "down",
					startx: 4,
					starty: 3
				},
				{
					clue: "สุญญากาศ",
					answer: "rarefaction",
					position: 6,
					orientation: "down",
					startx: 7,
					starty: 6
				},
				{
					clue: "สถานประกอบการ",
					answer: "establishment",
					position: 7,
					orientation: "down",
					startx: 14,
					starty: 1
				},
				{
					clue: "สารบบ",
					answer: "Directories",
					position: 9,
					orientation: "down",
					startx: 9,
					starty: 11
				},
				{
					clue: "ข้าราชการ",
					answer: "bureaucrat",
					position: 11,
					orientation: "down",
					startx: 11,
					starty: 12
				},
				{
					clue: "ใบเสร็จรับเงิน",
					answer: "receipt",
					position: 12,
					orientation: "down",
					startx: 14,
					starty: 15
				},
				{
					clue: "สรุปความ,เรื่องย่อ",
					answer: "synopsis",
					position: 15,
					orientation: "down",
					startx: 1,
					starty: 13
				},
				{
					clue: "ของให้ทาน",
					answer: "handout",
					position: 15,
					orientation: "down",
					startx: 5,
					starty: 21
				}
			]

		$('#puzzle-wrapper').crossword(puzzleData);

	})

})(jQuery)
