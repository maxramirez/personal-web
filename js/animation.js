/**
 * Created by Maximiliano on 11/24/2015.
 */
var shouldStop=true;
var keywords=["	abstract	", "	assert	", "	boolean	", "	break	", "	byte	", "	case	", "	catch	", "	char	", "	class	", "	const	", "	continue	", "	default	", "	do	", "	double	", "	else	", "	enum	", "	extends	", "	final	", "	finally	", "	float	", "	for	", "	goto	", "	if	", "	implements	", "	import	", "	instanceof	", "	int	", "	interface	", "	long	", "	native	", "	new	", "	package	", "	private	", "	protected	", "	public	", "	return	", "	short	", "	static	", "	strictfp	", "	super	", "	switch	", "	synchronized	", "	this	", "	throw	", "	throws	", "	transient	", "	try	", "	void	", "	volatile	", "	while	"]
var colors=["red","blue","yellow","white","black","orange"];
var counter=1;
var str = 'Lorem ipsum dolor sit amet, consetetur sadipscing \n elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
//$("#max").hover(function(){
//    shouldStop=false;
//    console.log("in");
//    $("header").css("background","black");
//    showCode();
//}, function () {
//    shouldStop=true;
//    $('.css-typing').empty();
//    $("header").css("background","#18bc9c");
//    console.log("out");
//});
function throwWord(){
    var number = Math.floor(Math.random() * keywords.length);
    var color=colors[Math.floor(Math.random()*colors.length)]
    var word=keywords[number];
    var tSize=Math.floor((Math.random() * 8) + 15);
    var finalX=Math.floor(Math.random()*400)-300;
    var finalY=Math.random()>0.5?200:-200;
    $(".word-origin").append("<span class='flying-word' id='word-"+ ++counter +"'>"+word+"<span>");
    var $flyingWord = $("#word-" + counter);
    $flyingWord.css("color",color);
    $flyingWord.css("font-size",tSize+"px");
    $flyingWord.css("font-weight", "bold");
    $flyingWord.velocity({
        left: finalY+'px',
        top: finalX+'px'
    }, 3000, 'linear',function(){
        $flyingWord.remove();
    });
}
myTimer=setInterval(throwWord,700);
function showCode() {
    var spans = '<span>' + str.split('').join('</span><span>') + '</span>';
    $(spans).hide().appendTo('.css-typing').each(function (i) {
        if (shouldStop) {
            return false;
        }
        $(this).delay(10 * i).css({
            display: 'inline',
            opacity: 0
        }).animate({
            opacity: 1
        }, 100);
    });
}
