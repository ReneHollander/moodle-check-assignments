var tickpath = self.options.urltickpng;

function checkAssignment(event) {
  var eventlink = event.find("> a");
  var name = eventlink.text();
  $.get(eventlink.attr('href'), function(data) {
    var submissionstatussubmitted = $(data).find('.submissionstatussubmitted');
    if (submissionstatussubmitted.length >= 1) {
      var img = event.find(".icon > img");
      img.attr("src" , tickpath);
    }
  });
}

$(".block_calendar_upcoming .content .event").each(function() {
  checkAssignment($(this));
});
