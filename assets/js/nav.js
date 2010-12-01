/*
 * This is inspired by the CodeIgniter user guide's create_menu function.
 * http://codeigniter.com/user_guide/nav/nav.js
 *
 * It extracts the navigation to a single file for easier updating.
 */

//define document navigation
var nav = {
		"Basic": {
			"Home":			"index.html",
			"Requirements":	"requirements.html",
			"License":		"license.html",
			"Credits":		"credits.html"
		},
/*		"Installation": {

		},
		"General": {

		},*/
		"Classes": {
			"Config":	"classes/config.html"
		}
};

//insert the navigation
function show_nav(page, path)
{
	active_path = window.location.pathname;
	path = path == null ? '' : path;
	$.each(nav, function(section,links) {
		var h3 = $('<h3></h3>');
		h3.addClass('collapsible').html(section);
		h3.attr('id', 'nav_'+section.toLowerCase().replace(' ', ''));
		h3.bind('click', function() {
			$(this).next('div').slideToggle();
		});

		$('nav').append(h3);
		var div = $('<div></div>');
		if ('nav_'+page != h3.attr('id')) {
			div.hide();
		}

		var ul = div.append('<ul></ul>');
		$.each(links, function(title, href) {
			active = '';
			if (active_path.indexOf(href, active_path.length - href.length) != -1)
			{
				active = ' class="active"';
			}
			ul.find('ul').append('<li><a href="'+path+href+'"'+active+'>'+title+'</a></li>');
		});

		$('nav').append(div);
		$('nav').find('#nav_'+page).next('div').slideDown();
	});
}