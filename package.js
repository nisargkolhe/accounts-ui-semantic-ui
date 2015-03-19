Package.describe({
	name: 'iandouglas:accounts-ui-semantic-ui',
	version: '0.0.1',
	// Brief, one-line summary of the package.
	summary: '',
	// URL to the Git repository containing the source code for this package.
	git: '',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});


Package.onUse(function(api) {
	api.versionsFrom('1.0.4.1');
	api.use(['tracker', 'service-configuration', 'accounts-base', 'underscore', 'templating', 'session'], 'client');

	// Export Accounts (etc) to packages using this one.
	api.imply('accounts-base', ['client', 'server']);

	// Allow us to call Accounts.oauth.serviceNames, if there are any OAuth
	// services.
	api.use('accounts-oauth', {weak: true});
	// Allow us to directly test if accounts-password (which doesn't use
	// Accounts.oauth.registerService) exists.
	api.use('accounts-password', {weak: true});

	api.addFiles([
		'accounts-ui-semantic-ui.js',

		'login-buttons.html',
		'login-buttons-single.html',
		'login-buttons-dropdown.html',
		'login-buttons-dialogs.html',

		'login-buttons-session.js',

		'login-buttons.js',
		'login-buttons-single.js',
		'login-buttons-dropdown.js',
		'login-buttons-dialogs.js'
	], 'client');
});


Package.onTest(function(api) {
	api.use('tinytest');
	api.use('iandouglas:accounts-ui-semantic-ui');
	api.addFiles('accounts-ui-semantic-ui-tests.js');
});