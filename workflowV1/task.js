const SUCCESS = 0, WARNING = 1, FAILURE = 2;

class Task {
	constructor(name, required, forceResult) {
		this.name = name;
		this.warning = '';
		this.error = '';
		this.required = required;
		this.forceResult = forceResult;
	}

	run() {
		let randomNum = Math.floor(Math.random() * 3);
		let result = this.forceResult || randomNum;

		switch(result) {
			case WARNING:
				this.warning = ['WARN - ' + this.name];
				return 'PASS';
			case SUCCESS:
				return 'PASS';
			case FAILURE:
				this.error = ['ERROR - ' + this.name];
				return this.required ? 'FAIL' : 'PASS';
		}
	}
}

module.exports = Task;
