$(document).ready(function () {
    const d = new Date();
    const month = ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];
    var countDay = $('#check-day-count').text();

    $("#check-in-day").html(d.getDate());
    $("#check-in-month").html(month[d.getMonth()]);

    $("#check-out-day").html(d.getDate());
    $("#check-out-month").html(month[d.getMonth()]);

    $('.check-form-checkin').click(function () {
        $(".ui-datepicker").addClass('in');
        $(".ui-datepicker").removeClass('out');
        $(".ui-datepicker-trigger:eq(0)").click();
    });

    $('.check-form-checkout').click(function () {
        $(".ui-datepicker").addClass('out');
        $(".ui-datepicker").removeClass('in');
        $(".ui-datepicker-trigger:eq(1)").click();
    });

    $("#check-in").datepicker({
        showOn: "button",
        buttonText: "Select date",
        onSelect: function (datestr, inst) {
            monthNamesShort = $("#check-in").datepicker("option", "monthNamesShort");
            $("#check-in-month").html(monthNamesShort[inst.selectedMonth]);
            $("#check-in-day").html(inst.selectedDay);
            $('#check-out').datepicker('option', 'minDate', datestr);
            var datepicker1 = $('#check-out').datepicker('getDate');
            var datepicker2 = datestr;
            countDay = DateDiff(new Date(datepicker2), new Date(datepicker1));
            $('#check-day-count').text(countDay);
        }
    });


    $("#check-out").datepicker({
        showOn: "button",
        buttonText: "Select date",
        onSelect: function (datestr, inst) {
            monthNamesShort = $("#check-out").datepicker("option", "monthNamesShort");
            $("#check-out-month").html(monthNamesShort[inst.selectedMonth]);
            $("#check-out-day").html(inst.selectedDay);
            $('#check-in').datepicker('option', 'maxDate', datestr);
            var datepicker1 = $('#check-in').datepicker('getDate');
            var datepicker2 = datestr;
            countDay = DateDiff(new Date(datepicker2), new Date(datepicker1));
            $('#check-day-count').text(countDay);
        }
    });

    function DateDiff(date1, date2) {
        date1.setHours(0);
        date1.setMinutes(0, 0, 0);
        date2.setHours(0);
        date2.setMinutes(0, 0, 0);
        var datediff = Math.abs(date1.getTime() - date2.getTime()); // difference 
        return parseInt(datediff / (24 * 60 * 60 * 1000), 10); //Convert values days and return value
    }
    $('#check-number').click(function () {
        $('.box-number-input').addClass('block');
        $('.box-number-input input').blur(function () {
            $('.box-number-input').removeClass('block');
        });
    });

    // guest count
    var $counter = $('#check-input-number');
    // if ($counter.val() == 1) {
    //     $('.check-btn-prev').removeClass('check-btn-prev');
    // }
    $('.check-btn-plus').click(function () {
        var value = $counter.val(parseInt($counter.val()) + 1).val();
        $("#check-number").text(value);
        if ($counter.val() != 0) {
            $('img.prev').addClass('check-btn-prev');
        }
    });
    $('.check-btn-prev').click(function () {
        console.log('hello');
        if ($counter.val() > 0) {
            var value = $counter.val(parseInt($counter.val()) - 1).val();
            $("#check-number").text(value);
            $('.check-btn-prev').removeClass('check-btn-prev');
        }
    });





    // $("#check-input-number").val() = $('#$check-number').text();
    $("#check-input-number").keyup(function () {
        var value = $(this).val();

        if (value < 99) {
            $("#check-number").text(value);
        } else {
            value = 99;
            $("#check-number").text(value);
        }

        if (value < 0) {
            value = 01;
            $("#check-number").text(value);
        }
        if (value.trim() == '') {
            value = 1;
            $("#check-number").text(value);
        }

    }).keyup();
})