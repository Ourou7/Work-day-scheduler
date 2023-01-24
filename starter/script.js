// Display today's time and date under the title.
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    // saveBtn click listener to move items to local storage
    $(".saveBtn").on("click", function () {
        // Get description values, link to an ID of the time slot.
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
        // Get current time in hours
        var timeNow = moment().hour();
        

        // loop over time blocks
        $(".time-block").each(function () {
            // gathers a blockTime variable, which is the ID of each block minus the "block" text, leaving us with the time of the block only.
            var blockTime = parseInt($(this).attr("id").split("slot")[1]);

            // To check the time and add the colour to the background of each section. Should show white for past, green for future, and red for present.
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }
    // Pull saved data from local storage
    $("#slot8 .description").val(localStorage.getItem("slot8"));
    $("#slot9 .description").val(localStorage.getItem("slot9"));
    $("#slot10 .description").val(localStorage.getItem("slot10"));
    $("#slot11 .description").val(localStorage.getItem("slot11"));
    $("#slot12 .description").val(localStorage.getItem("slot12"));
    $("#slot13 .description").val(localStorage.getItem("slot13"));
    $("#slot14 .description").val(localStorage.getItem("slot14"));
    $("#slot15 .description").val(localStorage.getItem("slot15"));
    $("#slot16 .description").val(localStorage.getItem("slot16"));
    $("#slot17 .description").val(localStorage.getItem("slot17"));

    timeTracker();
})

