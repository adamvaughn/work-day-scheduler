$(document).ready(function() {
    // Save inputs
    $(".saveBtn").on("click", function() {
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
      localStorage.setItem(time, value);
    });
  
    function hourUpdater() {
      // Check current hour (0-24)
      var currentHour = moment().hours();
  
      // Check timeblocks for past, present, or current time
      $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        if (blockHour < currentHour) {
          $(this).addClass("past");
        } 
        else if (blockHour === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
        } 
        else {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
        }
      });
    }
  
    hourUpdater();
  
    // Check if current time needs updated
    var interval = setInterval(hourUpdater, 15000);
  
    // Load from local storage
    $("#time-9 .description").val(localStorage.getItem("time-9"));
    $("#time-10 .description").val(localStorage.getItem("time-10"));
    $("#time-11 .description").val(localStorage.getItem("time-11"));
    $("#time-12 .description").val(localStorage.getItem("time-12"));
    $("#time-13 .description").val(localStorage.getItem("time-13"));
    $("#time-14 .description").val(localStorage.getItem("time-14"));
    $("#time-15 .description").val(localStorage.getItem("time-15"));
    $("#time-16 .description").val(localStorage.getItem("time-16"));
    $("#time-17 .description").val(localStorage.getItem("time-17"));
  
    // Show date on top of page
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
  });