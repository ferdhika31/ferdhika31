//<![CDATA[
// Emoticon bar before comment-form
function rpl4rt()
{
window.open("http://ferdhika31.github.io/emot/","_blank"," width=700, height=400");
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
                .replace(emo, " <img style='max-height:24px' src='" + imgRep + "' class='emo delayLoad' alt='" + emoKey + "' />"));
        });
    };
    emo(/\s:o/ig, "http://4.bp.blogspot.com/-NrgNszQXsK4/UvtxFVwRENI/AAAAAAAACgg/a5Fi5cjyxd0/s1600/1.gif", ":o");
	emo(/\s:calangap/ig, "http://3.bp.blogspot.com/-BlTC_3BeDqQ/UvuFJxMjfTI/AAAAAAAACjI/UVStKr-Oli0/s1600/1.png", ":calangap");
    emo(/\sB-\)+/g, "http://3.bp.blogspot.com/-BSmiqmChkF0/UvtxNgG_dII/AAAAAAAACiI/AkNTJoYMFlY/s1600/3.gif", "B-)");
	emo(/\s:gaya/ig, "http://1.bp.blogspot.com/-4xHfnoJkiwI/UvuHfb_novI/AAAAAAAACjY/ocuyCMQIEME/s1600/2.png", ":gaya");
    emo(/\s:P/ig, "http://2.bp.blogspot.com/-Yv41tVfYDug/UvtxPSYDDjI/AAAAAAAACiY/V3_3k9lbHTY/s1600/5.gif", ":P");
	emo(/\s:wle/ig, "http://3.bp.blogspot.com/-W8GvX9X4BP0/UvuHfVlEPPI/AAAAAAAACjU/2LiTkbxFuE8/s1600/3.png", ":wle");
    emo(/\s:D/ig, "http://3.bp.blogspot.com/-MrxS0RD-GS4/UvtxP2uxbsI/AAAAAAAACio/NLfLmEIenrM/s1600/7.gif", ":D"); 
	emo(/\s:grin/ig, "http://1.bp.blogspot.com/-3ftXP96pexw/UvuHf-ktU5I/AAAAAAAACjo/liCBh7ta424/s1600/4.png", ":grin");
    emo(/\s\(y\)+/ig, "http://4.bp.blogspot.com/-XTyJblQXK9I/UvtxRP4W1uI/AAAAAAAACi0/s1FBJVV0J3Y/s1600/9.gif", "(y)");
	emo(/\s:ye/ig, "http://2.bp.blogspot.com/-b6nnkpFfULs/UvuHgc5Q1jI/AAAAAAAACjk/8Mj-OuFA4wk/s1600/5.png", ":ye");
    emo(/\s:\/+/g, "http://4.bp.blogspot.com/-Fs39wfzsczs/UvtxF5ZF4sI/AAAAAAAACgs/bDsGubktGOM/s1600/11.gif", "(:/"); 
	emo(/\s:hah/ig, "http://2.bp.blogspot.com/-04urjy8Tty8/UvuHhfl4KzI/AAAAAAAACj0/X_wV46fHOl8/s1600/6.png", ":hah");
    emo(/\s:caped/ig, "http://4.bp.blogspot.com/-LjJRqUzMcfg/UvtxH_1eghI/AAAAAAAAChA/15IG4AX2ia4/s1600/13.gif", ":caped"); 
    emo(/\s:s/ig, "http://2.bp.blogspot.com/-0GaXpHyU-XM/UvtxJQ2Wj0I/AAAAAAAAChQ/7ABkfjcAxdo/s1600/15.gif", ":s");
    emo(/\s---/ig, "http://2.bp.blogspot.com/-vqqIgz8Wsb4/UvtxKlKwzMI/AAAAAAAAChg/frWF0KMc6PI/s1600/17.gif", "---"); 
    emo(/\s-_-/ig, "http://1.bp.blogspot.com/-eJfqPHjni7s/UvtxL2aPjoI/AAAAAAAAChs/vD3ZayVoy1A/s1600/19.gif", "-_-");
    emo(/\sO.o/ig, "http://4.bp.blogspot.com/-vwZsF-YSEyc/UvtxMdGpyFI/AAAAAAAACh4/-M0Q8NIxEP0/s1600/2.gif", "O.o"); //
    emo(/\sT_T/ig, "http://3.bp.blogspot.com/-1f2X2oDRvBY/UvtxN9op_lI/AAAAAAAACiM/p2ChY_fLIC4/s1600/4.gif", "T_T");
    emo(/\s:\*/g, "http://3.bp.blogspot.com/-OGTD5iqkigY/UvtxPekauOI/AAAAAAAACic/mmTG2M5c70Q/s1600/6.gif", ":*"); 
    emo(/\s:\)+/g, "http://2.bp.blogspot.com/-8XgFW2MLfvQ/UvtxQ761aMI/AAAAAAAACiw/kqK95iwWPxc/s1600/8.gif", ":)");
    emo(/\s\(n\)+/ig, "http://3.bp.blogspot.com/-cdPjg5A_pWE/UvtxFrbyxdI/AAAAAAAACgk/xoubQYIiBAs/s1600/10.gif", "(n)");
    emo(/\s\[~\|\~\]/g, "http://3.bp.blogspot.com/-eFZj6fbpe-E/UvtxG6JZc5I/AAAAAAAACg4/cssiGQSx00E/s1600/12.gif", "[~|~]"); 
    emo(/\s:maho/ig, "http://1.bp.blogspot.com/-gwT79SOFX-M/UvtxIqXAgxI/AAAAAAAAChI/drlSqipldn8/s1600/14.gif", ":maho"); 
    emo(/\s:berak/ig, "http://3.bp.blogspot.com/-MAZF3PuC-gc/UvtxKMuTsII/AAAAAAAAChY/2KQ3PcJYQ2o/s1600/16.gif", ":berak");
    emo(/\s:v/ig, "http://2.bp.blogspot.com/-rFMMnvknAp0/UvtxLeVLfbI/AAAAAAAACho/4SldvJ_tnbw/s1600/18.gif", ":v");
    emo(/\s:hamer/ig, "http://4.bp.blogspot.com/-LNqQRMnQb0c/UvtxNQILQqI/AAAAAAAACiA/wguFrobsKbI/s1600/20.gif", ":hamer");
   
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
