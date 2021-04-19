import map from './client/map';
import search from './client/search';
import categories from './client/categories';

window.addEventListener( 'load', go, false );

function go() {
	categories.init();
	search.init();
	map.init();
}
