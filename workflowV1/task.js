class Task {
  constructor(name) {
    this.name = name;
		this.warning = '';
		this.error = '';
		this.required = randomFlag;
  }

	randomFlag() {
		return Math.floor(Math.random() * 2) == 1;
	}

	run() {
		let randomNum = Math.floor(Math.random() * 3);

		switch (randomNum) {
			case 0:
				this.warning = ['WARN - ' + this.name];
				return 'S';
			case 1:
				return 'S';
			case 2:
				this.error = ['ERROR - ' + this.name];
				return 'F';
		}
	}
}

module.exports = Task;
