var tickpath = chrome.extension.getURL('tick.png');
events = $(".block_calendar_upcoming .content .event");

events.each(function() {
  checkAssignment($(this));
});

function checkAssignment(event) {
	var eventlink = event.find("> a");
  var name = eventlink.text();
  var handler = function(data) {
    var submissionstatussubmitted = $(data).find('.submissionstatussubmitted');
    if (submissionstatussubmitted.length >= 1) {
			var img = event.find(".icon > img");
			img.attr("src" , tickpath);
    }
  };
  $.get(eventlink.attr('href'), handler);
}