document.write(`<div id="sidebar">`);
document.write(`  <h4 id="randomtext"></h4>`);
document.write(`  <form name="themeform">`);
document.write(`  <select name="theme" id="theme" onchange='changeCSS();'>`);
document.write(`    <option value="style.css">Normal</option>`);
document.write(`    <option value="spoopystyle.css">Spoopy (Halloween)</option>`);
document.write(`    <option value="ohdeargodstyle.css">Oh dear god...</option>`);
document.write(`    <option value="oldstyle.css">Old Version</option>`);
document.write(`    <option value="christmasstyle.css">Christmas</option>`);
document.write(`    <option value="lol nope">None :o</option>`);
document.write(`  </select>`);
document.write(`  </form>`);
document.write(`  <br>`);
document.write(`<a href="http://giveadamn.co.uk/give/Jacklack3" target="_blank"><img src="http://giveadamn.co.uk/image/Jacklack3" alt="Damn counter" /></a>`);
document.write(`  <br>`);
document.write(`<p padding-bottom="3px"><a href="https://www.yourworldoftext.com/~Jacklack3/">YWoT Rocketmix</a></p>`);
document.write(`<p><a href="https://www.yourworldoftext.com/~Jacklack3/neocities">YWoT Neocities</a></p>`);
document.write(`<p>Site viewed with eyes <a href="https://danielsnet.net/services/neocities_hitcounter.html" target="_top" title="Get a Neocities Hit Counter!"><img src="https://danielsnet.net/melonbox/NeoLink?s=rocketmix&i=views&tc=white&bc=black&ts=12" /></a> times.</p>`);
document.write(`  <iframe src="https://hyperlink-webring.herokuapp.com/button/?user=rocketmix" style="border:0;width:88px;height:82px"></iframe>`);
document.write(`</div>`);
document.write(``);
document.write(`<script>`);
document.write(`function createCookie(name,value,days) {`);
document.write(`	if (days) {`);
document.write(`		var date = new Date();`);
document.write(`		date.setTime(date.getTime()+(days*24*60*60*1000));`);
document.write(`		var expires = "; expires="+date.toGMTString();`);
document.write(`	}`);
document.write(`	else var expires = "";`);
document.write(`	document.cookie = name+"="+value+expires+"; path=/";`);
document.write(`}`);
document.write(``);
document.write(`function readCookie(name) {`);
document.write(`	var nameEQ = name + "=";`);
document.write(`	var ca = document.cookie.split(';');`);
document.write(`	for(var i=0;i < ca.length;i++) {`);
document.write(`		var c = ca[i];`);
document.write(`		while (c.charAt(0)==' ') c = c.substring(1,c.length);`);
document.write(`		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);`);
document.write(`	}`);
document.write(`	return null;`);
document.write(`}`);
document.write(``);
document.write(`function eraseCookie(name) {`);
document.write(`	createCookie(name,"",-1);`);
document.write(`}`);
document.write(``);
document.write(`/*http://jsfiddle.net/zydryj9j/*/`);
document.write(`var randomtext = document.getElementById('randomtext');`);
document.write(`var titles = [`);
document.write(`    'the best site if you believe that please do',`);
document.write(`    'Who needs water when you got Rocketmix!',`);
document.write(`    "let's all love rocketmix",`);
document.write(`    'rocketmiiiix',`);
document.write(`    'more like carmix lol amirite my d00ds?',`);
document.write(`    '"stop with the unfunny random messages" -you',`);
document.write(`    'abcdefghijklmnopqrstuvwxyz',`);
document.write(`    'im a great programmer, googling and pressing the keys "CTRL", "C" and "V"',`);
document.write(`    'I bReAtH rOcKeTmIx!',`);
document.write(`    'Only on Disney.',`);
document.write(`    ';)',`);
document.write(`    'Hotline Bling? More like Coldsquare Silence! roflmao',`);
document.write(`    "tfw people actually say their gender is green with the most belief that it's true.",`);
document.write(`    'Carrots are good for your eye sight!',`);
document.write(`    'palutena kiss me back pls plx plz luv u xoxo',`);
document.write(`    'Rock, paper, scissors!'`);
document.write(`];`);
document.write(``);
document.write(`function newTitle () {`);
document.write(`    var i = (Math.random() * titles.length) | 0;`);
document.write(`    randomtext.innerText = titles[i];`);
document.write(`}`);
document.write(``);
document.write(`newTitle();`);
document.write(``);
document.write(``);
document.write(`var selectedItem = readCookie("selectedItem");`);
document.write(`var select = document.getElementById("Theme");`);
document.write(`select.value = selectedItem;`);
document.write(`/*https://stackoverflow.com/questions/19844545/replacing-css-file-on-the-fly-and-apply-the-new-style-to-the-page*/`);
document.write(`function changeCSS() {`);
document.write(``);
document.write(`    var oldlink = document.getElementsByTagName("link").item(0);`);
document.write(``);
document.write(`    var newlink = document.createElement("link");`);
document.write(`    newlink.setAttribute("rel", "stylesheet");`);
document.write(`    newlink.setAttribute("type", "text/css");`);
document.write(`    newlink.setAttribute("href", document.themeform.theme.value);`);
document.write(``);
document.write(`    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);`);
document.write(`    var select = document.getElementById("Theme");`);
document.write(`    var selectedItem = select.options[select.selectedIndex].value;`);
document.write(`    createCookie("selectedItem",selectedItem);`);
document.write(`}`);
document.write(`</script>`);