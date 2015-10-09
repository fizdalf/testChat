/**
 * Created by Fizdalf on 09/10/2015.
 */
$(function(){
    $("#chatSend").click(function(){
        var text=$("#chatText").val();
        var username=$("#username").val();

        if(text!=undefined&&username!=undefined){

            var url = decodeURI(
                "write.php?username=" + username + "&text=" + text
            );
            $.post(url);
        }
    });
});