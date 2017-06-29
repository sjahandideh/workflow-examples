const SUCCESS = 0, WARNING = 1, FAILURE = 2;
const FAIL='FAIL', PASS='PASS';

var Task = require('../task');
var expect  = require('chai').expect;

describe('Task', () => {

	describe('#run', () => {

		context('when task errors', () => {

			it('required task fails', () => {
				let task = new Task('book venue', true, FAILURE);

				expect(task.run()).to.equal(FAIL);
			});

			it('non-required task passes', () => {
				let task = new Task('book venue', false, FAILURE);

				expect(task.run()).to.equal(PASS);
			});
		});

		context('when task succeeds', () => {

			it('required task passes', () => {
				let task = new Task('book venue', true, SUCCESS);

				expect(task.run()).to.equal(PASS);
			});

			it('non-required task passes', () => {
				let task = new Task('book venue', false, SUCCESS);

				expect(task.run()).to.equal(PASS);
			});
		});

		context('when task succeeds with warnings', () => {

			it('required task passes', () => {
				let task = new Task('book venue', true, WARNING);

				expect(task.run()).to.equal(PASS);
			});

			it('non-required task passes', () => {
				let task = new Task('book venue', false, WARNING);

				expect(task.run()).to.equal(PASS);
			});
		});
	});
});
