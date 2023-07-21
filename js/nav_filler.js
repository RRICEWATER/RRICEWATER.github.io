function nav_fill1() {
	document.writeln("<nav>");
	document.writeln("<ul id=\"nav\">");
	document.writeln("<li><a href=\"../index/index.html\">首页</a></li>");
	document.writeln("</ul>");
	document.writeln("</nav>");
}

function nav_fill2() {
	var a = location.href.split('/');
	a= a[a.length - 1];
	
	document.writeln("<nav>");
	document.writeln("<ul id=\"nav\">");
	document.writeln("<li><a href=\"../index/index.html\">首页</a></li>");
	document.writeln("<li>><a href=\"" + a + "\">" + document.title + "</a></li>");
	document.writeln("</ul>");
	document.writeln("</nav>");
}

function nav_fill_consepts() {
	var a = location.href.split('/');
	a= a[a.length - 1];
	
	document.writeln("<nav>");
	document.writeln("<ul id=\"nav\">");
	document.writeln("<li><a href=\"../../index/index.html\">首页</a></li>");
	document.writeln("<li>><a href=\"../consepts_list.html\">概念</a></li>");
	document.writeln("<li>><a href=\"" + a + "\">" + document.title + "</a></li>");
	document.writeln("</ul>");
	document.writeln("</nav>");
}