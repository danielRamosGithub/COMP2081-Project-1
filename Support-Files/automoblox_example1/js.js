$(document).ready(function() {
    $('section > div').cycle({
		fx: 'scrollLeft', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
		timeout: 5000,
		pager: 'section > nav',
		width: '960px'
	});
});