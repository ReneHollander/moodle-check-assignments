events = $(".block_calendar_upcoming .content .event > a");

events.each(function() {
  checkAssignment($(this));
});

function checkAssignment(event) {
  var name = event.text()
  var handler = function(data) {
    var submissionstatussubmitted = $(data).find('.submissionstatussubmitted')
    if (submissionstatussubmitted.length >= 1) {
      console.log(name + ": submitted");
      event.parent().css("background-color", "#7AFF7A")
    } else {
      console.log(name + ": not submitted");
    }
  };
  $.get(event.attr('href'), handler);
}
