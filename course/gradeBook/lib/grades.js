var gradeBook = {

	_grades: [],
	
	addGrade: function(newGrade) {
		this._grades.push(newGrade);
	},
	
	getCountOfGrades: function() {
		return this._grades.length;
	},
	
	getAverage: function() {
		let total = 0;
		for(let i = 0; i < this._grades.length; i++) {
			total = total + this._grades[i];
		}
		return total / this._grades.length;
	},
	
	getLetterGrade: function() {
		let score = 0;
		let letterGrade = "_";
		
		for(let i = 0; i < this._grades.length; i++) {
			score += this._grades[i];
		};
		
		score = score / this._grades.length;
		
		if (score <= 100 && score >= 90) {
			letterGrade = "A";
		} else if (score < 90 && score >= 80) {
			letterGrade = "B";
		} else if (score < 80 && score >= 70) {
			letterGrade = "C";
		} else if (score < 70 && score >=60) {
			letterGrade = "D";
		} else {
			letterGrade = "F";
			}
		
		return letterGrade;
	},
	
	reset: function() {
		this._grades = [];
	}
};

module.exports.book = gradeBook;