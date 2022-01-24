$(document).ready(function() {
    // Save inputs
    $(".saveBtn").on("click", function() {
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
      localStorage.setItem(time, value);
    });
  
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
  });