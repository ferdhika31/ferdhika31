//<![CDATA[
// Emoticon bar before comment-form
function rpl4rt()
{
window.open("https://fer.dika.web.id/emot/","_blank"," width=700, height=400");
}
$(function() {
    $(putEmoAbove)
        .before('<div style="text-align:center" class="emoWrap"> :o :calangap B-) :gaya :P :wle :D :grin (y) :ye :/ :hah <br/><br/><a onclick="rpl4rt()" class="button">Lainnya</a> <br/></div>');
    var emo = function(emo, imgRep, emoKey) {
        $(emoRange)
            .each(function() {
            $(this)
                .html($(this)
                .html()
                .replace(/<br>:/g, "<br> :")
                .replace(/<br>;/g, "<br> ;")
                .replace(/<br>=/g, "<br> =")
                .replace(/<br>\^/g, "<br> ^")
                .replace(emo, " <img style='max-height:24px' src='https://fer.dika.web.id/emot/gambar/" + imgRep + "' class='emo delayLoad' alt='" + emoKey + "' />"));
        });
    };
    emo(/\s:o/ig, "1.gif", ":o");
	emo(/\s:calangap/ig, "1.png", ":calangap");
    emo(/\sB-\)+/g, "3.gif", "B-)");
	emo(/\s:gaya/ig, "2.png", ":gaya");
    emo(/\s:P/ig, "5.gif", ":P");
	emo(/\s:wle/ig, "3.png", ":wle");
    emo(/\s:D/ig, "7.gif", ":D"); 
	emo(/\s:grin/ig, "4.png", ":grin");
    emo(/\s\(y\)+/ig, "9.gif", "(y)");
	emo(/\s:ye/ig, "5.png", ":ye");
    emo(/\s:\/+/g, "11.gif", "(:/"); 
	emo(/\s:hah/ig, "6.png", ":hah");
    emo(/\s:caped/ig, "13.gif", ":caped"); 
    emo(/\s:s/ig, "15.gif", ":s");
    emo(/\s---/ig, "17.gif", "---"); 
    emo(/\s-_-/ig, "19.gif", "-_-");
    emo(/\sO.o/ig, "2.gif", "O.o"); //
    emo(/\sT_T/ig, "4.gif", "T_T");
    emo(/\s:\*/g, "6.gif", ":*"); 
    emo(/\s:\)+/g, "8.gif", ":)");
    emo(/\s\(n\)+/ig, "10.gif", "(n)");
    emo(/\s\[~\|\~\]/g, "12.gif", "[~|~]"); 
    emo(/\s:maho/ig, "14.gif", ":maho"); 
    emo(/\s:berak/ig, "16.gif", ":berak");
    emo(/\s:v/ig, "18.gif", ":v");
    emo(/\s:hamer/ig, "20.gif", ":hamer");
   
// Show alert one times!
    $('div.emoWrap')
        .one("click", function() {
        if (emoMessage) {
            alert(emoMessage);
        }
    });
    // Click to show the code!
       $('.emo')
        .css('cursor', 'pointer')
        .live("click", function(e) {
        $('.emoKey')
            .remove();
        $(this)
            .after('<input class="emoKey" type="text" size="' + this.alt.length + '" value=" ' + this.alt + '" />');
$('.emoKey')
            .trigger("select");
e.stopPropagation();
    });
    $('.emoKey')
        .live("click", function() {
        $(this)
            .focus()
            .select();
    });
});
//]]>
