'use strict';

module.exports = function(Expense) {
	Expense.getExpenseCategory = function(_id, next) {
		Expense.app.dataSources.expensestrackerdb.connector.execute(
			`EXEC GetExpenseCategory @_id = @param1`,
			[ _id ],
			next
		);
	};

	Expense.remoteMethod('getExpenseCategory', {
		accepts: { arg: '_id', type: 'number' },
		returns: { root: true },
		http: { path: '/:_id/getExpenseCategory', verb: 'get' }
	});
};
