
var textNode = document.createTextNode(
	'#adminmenu{transform:translateZ(0);}'
);

var styleNode = document.createElement('style');
styleNode.id = 'wp-chrome-bug-fix';
styleNode.type = 'text/css';
styleNode.appendChild(textNode);
document.head.appendChild(styleNode);
