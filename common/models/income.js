'use strict';

module.exports = function(Income) {
	Income.getIncomeCategory = function(_id, next) {
		Income.app.dataSources.expensestrackerdb.connector.execute(
			`EXEC GetIncomeCategory @_id = @param1`,
			[ _id ],
			next
		);
	};

	Income.remoteMethod('getIncomeCategory', {
		accepts: { arg: '_id', type: 'number' },
		returns: { root: true, type: 'object' },
		http: { path: '/getIncomeCategory', verb: 'get' }
	});
};
