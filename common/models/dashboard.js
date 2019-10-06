'use strict';

module.exports = function(Dashboard) {
    Dashboard.getLastRecords = function( next) {
		Dashboard.app.dataSources.expensestrackerdb.connector.execute(
			'EXEC GetLastRecords',
			next
		);
	};

	Dashboard.remoteMethod('getLastRecords', {
		returns: { root: true, type: 'object' },
		http: { path: '/getLastRecords', verb: 'get' }
	});
};