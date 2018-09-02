$(function() {
    // 把input栏内容清空，否则回退页面的时候内容会保留在原处
    $("#J_search").val("");

    $.ajax({
        url: "search.xml",
        dataType: "xml",
        success: function( xmlResponse ) {
            // 注意：这里的map（）和get（）方法都是jquery里面的，能直接作用于object
            var data = $( "article", xmlResponse ).map(function() {
                return {
                    value: $( "title", this ).text() + ", " +
                        ( $.trim( $( "date", this ).text() ) ),
                    desc: $("description", this).text(),
                    url: $("url", this).text()
                };
            }).get();

            $( "#J_search" ).autocomplete({
                // jquery-ui的功能
                source: data,
                select: function( event, ui ) {
                    window.location.href = ui.item.url;
                }
            });
        }
    });
});