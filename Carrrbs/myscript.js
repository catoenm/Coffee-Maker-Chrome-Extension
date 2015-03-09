//credit goes to Steven Frank of Cloud to Butt (https://github.com/panicsteve/cloud-to-butt/)

walk(document.body);

function walk(node)  
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1: 
		case 9:  
		case 11: 
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling; 
				walk(child);
				child = next;
			}
			break;

		case 3: 
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bcoffee\b/g, "coffee (clench your fist if you want some)");
	v = v.replace(/\bCoffee\b/g, "coffee (clench your fist if you want some)");
	v = v.replace(/\bhot chocolate\b/g, "hot chocolate (clench for coffee bro)");
	v = v.replace(/\bHot Chocolate\b/g, "Hot Chocolate (clench for coffee bro)");
	v = v.replace(/\bHot chocolate\b/g, "Hot chocolate (clench for coffee bro)");
	v = v.replace(/\bDanyon Chu\b/g, "Danyon \"The Gay Fag\" Chu (Known commonly as a son of his really hot mom who is a popular porn artist out west)");
	v = v.replace(/\bGraham Smith\b/g, "xXPussyPounderXx");
	v = v.replace(/\bMele Kalikimaka from Hawaii!\b/g, "Incest!!");
	
	textNode.nodeValue = v;
}