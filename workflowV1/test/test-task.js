const SUCCESS = 0, WARNING = 1, FAILURE = 2, FAIL='FAIL', PASS='PASS';

var Task = require('../task');
var expect  = require('chai').expect;

describe('Task', () => {
	describe('#run', () => {
		context('when task errors', () => {
			it('a required and errored task will fail', () => {
				let task = new Task('book venue', true, FAILURE);

				expect(task.run()).to.equal(FAIL);
			});

			it('a required and errored task will fail', () => {
				let task = new Task('book venue', false, FAILURE);

				expect(task.run()).to.equal(PASS);
			});
		});
	});
});
