
$('#test').lazyScrollLoad().on("OnScrollReachedEnd",function(){
    $('#test').after("<p>Reached End</p>");
});