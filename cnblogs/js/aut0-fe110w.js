$(document).ready(function(){
var json = {"blogUserGuid":cb_blogUserGuid};
$.ajax({
type: "POST",
url: "/mvc/Follow/FollowBlogger.aspx",
data: JSON.stringify(json),
contentType: "application/json; charset=utf-8",
dataType: "text",
success: function(data) {
//console.log("..")
}
});
})