
$(document).ready(function () {
    function showMyTrig(msg,num) {
        var con='';
        if (num=='1'|| num=='4'){
            var myData = JSON.parse(msg);
            console.log(myData);
            for (row in myData) {
                var message = myData[row]['context'].toString();
                con = message;
            }
        }
        else if (num=='2' || num=='3'|| num=='5'|| num=='6'|| num=='7'){//delete
            var myData = JSON.parse(msg);
            console.log(myData);
            for (row in myData) {
                var message = myData[row]['message'].toString();
                con = message;
            }
        }

        $("#trig_content").append(con);
        $("#trig_content").fadeIn();


    }


    //trig ajax --------------------
    $("#trigr1_btn").on("click",function (){
        $.ajax({
            type: 'GET',
            url : '../php/trig_ajax.php',
            data : {'c' : 1 },
            success: function (msg) {
                showMyTrig(msg,'1');
            }
        });
    });
    $("#trigr2_btn").on("click",function (){
        $.ajax({
            type: 'GET',
            url : '../php/trig_ajax.php',
            data : {'c' : 2 },
            success: function (msg) {
                showMyTrig(msg,'2');
            }
        });
    });
    $("#trigr3_btn").on("click",function (){
        $.ajax({
            type: 'GET',
            url : '../php/trig_ajax.php',
            data : {'c' : 3 },
            success: function (msg) {
                showMyTrig(msg,'3');
            }
        });
    });
    $("#trigr4_btn").on("click",function (){
        $.ajax({
            type: 'GET',
            url : '../php/trig_ajax.php',
            data : {'c' : 4 },
            success: function (msg) {
                showMyTrig(msg,'4');
            }
        });
    });
    $("#trigr5_btn").on("click",function (){
        $.ajax({
            type: 'GET',
            url : '../php/trig_ajax.php',
            data : {'c' : 5 },
            success: function (msg) {
                showMyTrig(msg,'5');
            }
        });
    });
    $("#trigr6_btn").on("click",function (){
        $.ajax({
            type: 'GET',
            url : '../php/trig_ajax.php',
            data : {'c' : 6 },
            success: function (msg) {
                showMyTrig(msg,'6');
            }
        });
    });
    $("#trigr7_btn").on("click",function (){
        $.ajax({
            type: 'GET',
            url : '../php/trig_ajax.php',
            data : {'c' : 7 },
            success: function (msg) {
                showMyTrig(msg,'7');
            }
        });
    });
    $("#trigr8_btn").on("click",function (){
        $.ajax({
            type: 'GET',
            url : '../php/trig_ajax.php',
            data : {'c' : 8 },
            success: function (msg) {
                showMyTrig(msg,'8');
            }
        });
    });
    $("#trigr9_btn").on("click",function (){
        $.ajax({
            type: 'GET',
            url : '../php/trig_ajax.php',
            data : {'c' : 9 },
            success: function (msg) {
                showMyTrig(msg,'9');
            }
        });
    });
    $("#trigr10_btn").on("click",function (){
        $.ajax({
            type: 'GET',
            url : '../php/trig_ajax.php',
            data : {'c' : 10 },
            success: function (msg) {
                showMyTrig(msg,'10');
            }
        });
    });





    //trig btn ----------------------
    function hideMyTrigs() {
        $("#trig_content").fadeOut();
        $("#trig_content").html('');
        $("#trig_des").fadeOut();
        $("#trigr1_form").hide();
        $("#trigr2_form").hide();
        $("#trigr3_form").hide();
        $("#trigr4_form").hide();
        $("#trigr5_form").hide();
        $("#trigr6_form").hide();
        $("#trigr7_form").hide();
        $("#trigr8_form").hide();
        $("#trigr9_form").hide();
        $("#trigr10_form").hide();
    }


    $("#trig_btn_1").on("click",function (){
        hideMyTrigs();
        $("#trig_des").html('<p>یادداشت گرفتن پس از هر بهنگام سازی در جدول اثر هنری<p>');
        $("#trig_des").fadeIn();
        $("#trigr1_form").fadeIn();
        $("#trig_content").fadeIn();
    });

    $("#trig_btn_2").on("click",function (){
        hideMyTrigs();
        $("#trig_des").html('<p>جلوگیری از حذف داده در جدول اثرهنری و ثبت پیام<p>');
        $("#trig_des").fadeIn();
        $("#trigr2_form").fadeIn();
        $("#trig_content").fadeIn();
    });

    $("#trig_btn_3").on("click",function (){
        hideMyTrigs();
        $("#trig_des").html('<p>جلوگیری از حذف داده در جدول هنرمند و ثبت پیام<p>');
        $("#trig_des").fadeIn();
        $("#trigr3_form").fadeIn();
        $("#trig_content").fadeIn();
    });

    $("#trig_btn_4").on("click",function (){
        hideMyTrigs();
        $("#trig_des").html('<p>یادداشت برداشتن پس از بهنگام سازی جدول هنرمند<p>');
        $("#trig_des").fadeIn();
        $("#trigr4_form").fadeIn();
        $("#trig_content").fadeIn();
    });

    $("#trig_btn_5").on("click",function (){
        hideMyTrigs();
        $("#trig_des").html('<p>جلوگیری از حذف داده در جدول بازدید و ثبت پیام<p>');
        $("#trig_des").fadeIn();
        $("#trigr5_form").fadeIn();
        $("#trig_content").fadeIn();
    });

    $("#trig_btn_6").on("click",function (){
        hideMyTrigs();
        $("#trig_des").html('<p>جلوگیری از حذف داده در جدول مالکیت و ثبت پیام<p>');
        $("#trig_des").fadeIn();
        $("#trigr6_form").fadeIn();
        $("#trig_content").fadeIn();
    });

    $("#trig_btn_7").on("click",function (){
        hideMyTrigs();
        $("#trig_des").html('<p>جلوگیری از حذف داده در جدول برگزاری و ثبت پیام<p>');
        $("#trig_des").fadeIn();
        $("#trigr7_form").fadeIn();
        $("#trig_content").fadeIn();
    });

    $("#trig_btn_8").on("click",function (){
        hideMyTrigs();
        $("#trig_des").html('<p>ثبت یادداشت پس از بهنگام سازی جدول موزه<p>');
        $("#trig_des").fadeIn();
        $("#trigr8_form").fadeIn();
        $("#trig_content").fadeIn();
    });


    $("#trig_btn_9").on("click",function (){
        hideMyTrigs();
        $("#trig_des").html('<p>ثبت یادداشت پس از بهنگام سازی جدول گالری<p>');
        $("#trig_des").fadeIn();
        $("#trigr9_form").fadeIn();
        $("#trig_content").fadeIn();
    });

    $("#trig_btn_10").on("click",function (){
        hideMyTrigs();
        $("#trig_des").html('<p>ثبت یادداشت پس از بهنگام سازی جدول بازدیدکننده<p>');
        $("#trig_des").fadeIn();
        $("#trigr10_form").fadeIn();
        $("#trig_content").fadeIn();
    });



});