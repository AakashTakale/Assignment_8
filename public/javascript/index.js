
$(document).ready(function() {
    "use strict";
    $("#button").click(function() {
        var url = $("#url").val();
        if (url === undefined) {
            alert("Please enter url");
        } else {
            var UserUrl = JSON.stringify({
                url1: url
            });
            $.ajax({

                    type: "POST",
                    url: "/getUrl",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    data: UserUrl
                })
                .done(function(data, status) {

                    $("#result").html("");
                    $("#result").append("<a href=" + data.url + ">" + data.url + "</a>");


                })
                .fail(function(data, status) {
                    console.log("call failed");
                    console.log(data);
                    console.log(status);
                });

        }

    });

    $.ajax({

            type: "get",
            url: "/gettop",
            contentType: "application/json; charset=utf-8",
            dataType: "json",

        })
        .done(function(data, status) {
            var i = 0;
            $(".popular").append("<table>");
            $(".popular").append("<tr><th>Long URL</th><th>Number of times visited</th></tr>");
            for (i = 0; i < data.length; i++) {
                $(".popular").append("<tr><td><a href='" + data[i].longurl + "'>\t" + data[i].longurl + "</a></td><td>" + data[i].views + "</td></tr>");

            }
            $(".popular").append("</table>");


        })
        .fail(function(data, status) {
            console.log("call failed");
            console.log(data);
            console.log(status);
        });


});