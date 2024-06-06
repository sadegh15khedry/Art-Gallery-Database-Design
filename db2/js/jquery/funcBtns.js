
$(document).ready(function () {


    function showMyFunc(msg,num) {

        var con = '';
        con = '<table class="table-bordered table table-responsive text-center">';
        //view 1 display --------------------------------
        if (num == '1') {
            alert('sdlfg');
            console.log(msg);
            var myData = JSON.parse(msg);
            //console.log(myData);
            var con = con +
                '<tr>' +
                '<th class="text-center">visitor_edjucation</th>' +
                '</tr>';

            for (row in myData) {
                var visitor_edjucation = myData[row]['visitor_edjucation'].toString();
                con = con +
                    '<tr >' +
                    '<td>' + visitor_edjucation + '</td>' +
                    '</tr>';
            }


        }
        else if (num == '2' || num =='7' || num == '9') {
            var myData = JSON.parse(msg);
            console.log(myData);
            var con = con +
                '<tr>' +
                '<th class="text-center">owner_ssn_id</th>' +
                '<th class="text-center">owner_first_name</th>' +
                '<th class="text-center">owner_last_name</th>' +
                '<th class="text-center">owner_job</th>'+
                '</tr>';

            for (row in myData) {
                var owner_ssn_id = myData[row]['owner_ssn_id'].toString();
                var owner_first_name = myData[row]['owner_first_name'].toString();
                var owner_last_name = myData[row]['owner_last_name'].toString();
                var owner_job = myData[row]['owner_job'].toString();
                con = con +
                    '<tr >' +
                    '<td>' + owner_ssn_id + '</td>' +
                    '<td>' + owner_first_name + '</td>' +
                    '<td>' + owner_last_name + '</td>' +
                    '<td>' + owner_job + '</td>' +
                    '</tr>';
            }

        }
        else if (num == '3') {
            var myData = JSON.parse(msg);
            console.log(myData);
            var con = con +
                '<tr>' +
                '<th class="text-center">staff_personal_id</th>' +
                '<th class="text-center">staff_first_name</th>' +
                '<th class="text-center">staff_last_name</th>' +
                '<th class="text-center">staff_ssn</th>' +
                '</tr>';

            for (row in myData) {
                var staff_personal_id = myData[row]['staff_personal_id'].toString();
                var staff_first_name = myData[row]['staff_first_name'].toString();
                var staff_last_name = myData[row]['staff_last_name'].toString();
                var staff_ssn = myData[row]['staff_ssn'].toString();
                con = con +
                    '<tr >' +
                    '<td>' + staff_personal_id + '</td>' +
                    '<td>' + staff_first_name + '</td>' +
                    '<td>' + staff_last_name + '</td>' +
                    '<td>' + staff_ssn + '</td>' +
                    '</tr>';
            }
        }
        else if (num == '4') {
            var myData = JSON.parse(msg);
            console.log(myData);
            var con = con +
                '<tr>' +
                '<th class="text-center">art_id</th>' +
                '<th class="text-center">art_title</th>' +
                '<th class="text-center">art_description</th>' +
                '<th class="text-center">art_gallery_id</th>' +
                '</tr>';

            for (row in myData) {
                var art_id = myData[row]['art_id'].toString();
                var art_title = myData[row]['art_title'].toString();
                var art_description = myData[row]['art_description'].toString();
                var art_gallery_id = myData[row]['art_gallery_id'].toString();
                con = con +
                    '<tr >' +
                    '<td>' + art_id + '</td>' +
                    '<td>' + art_title + '</td>' +
                    '<td>' + art_description + '</td>' +
                    '<td>' + art_gallery_id + '</td>' +
                    '</tr>';
            }

        }
        else if (num == '5' || num == '8') {
            var myData = JSON.parse(msg);
            console.log(myData);
            var con = con +
                '<tr>' +
                '<th class="text-center">visitor_ssn_id</th>' +
                '<th class="text-center">visistor_first_name</th>' +
                '<th class="text-center">visitor_last_name</th>' +
                '<th class="text-center">visitor_edjucation</th>' +
                '</tr>';

            for (row in myData) {
                var visitor_ssn_id = myData[row]['visitor_ssn_id'].toString();
                var visistor_first_name = myData[row]['visistor_first_name'].toString();
                var visitor_last_name = myData[row]['visitor_last_name'].toString();
                var visitor_edjucation = myData[row]['visitor_edjucation'].toString();

                con = con +
                    '<tr >' +
                    '<td>' + visitor_ssn_id + '</td>' +
                    '<td>' + visistor_first_name + '</td>' +
                    '<td>' + visitor_last_name + '</td>' +
                    '<td>' + visitor_edjucation + '</td>' +
                    '</tr>';
            }
        }
        else if (num == '6') {
            var myData = JSON.parse(msg);
            console.log(myData);
            var con = con +
                '<tr>' +
                '<th class="text-center">writing_id</th>' +
                '<th class="text-center">writing_art_id</th>' +
                '<th class="text-center">writing_style</th>' +
                '<th class="text-center">writing_width</th>' +
                '<th class="text-center">writing_length</th>' +
                '</tr>';

            for (row in myData) {
                var writing_id = myData[row]['writing_id'].toString();
                var writing_art_id = myData[row]['writing_art_id'].toString();
                var writing_style = myData[row]['writing_style'].toString();
                var writing_width = myData[row]['writing_width'].toString();
                var writing_length = myData[row]['writing_length'].toString();

                con = con +
                    '<tr >' +
                    '<td>' + writing_id + '</td>' +
                    '<td>' + writing_art_id + '</td>' +
                    '<td>' + writing_style + '</td>' +
                    '<td>' + writing_width + '</td>' +
                    '<td>' + writing_length + '</td>' +
                    '</tr>';
            }
        }
        else if (num == '10') {
            var myData = JSON.parse(msg);
            console.log(myData);
            var con = con +
                '<tr>' +
                '<th class="text-center">artist_ssn_id</th>' +
                '<th class="text-center">artist_first_name</th>' +
                '<th class="text-center">artist_last_name</th>' +
                '<th class="text-center">artist_style</th>' +
                '</tr>';

            for (row in myData) {
                var artist_ssn_id = myData[row]['artist_ssn_id'].toString();
                var artist_first_name = myData[row]['artist_first_name'].toString();
                var artist_last_name = myData[row]['artist_last_name'].toString();
                var artist_style = myData[row]['artist_style'].toString();

                con = con +
                    '<tr >' +
                    '<td>' + artist_ssn_id + '</td>' +
                    '<td>' + artist_first_name + '</td>' +
                    '<td>' + artist_last_name + '</td>' +
                    '<td>' + artist_style + '</td>' +
                    '</tr>';
            }
        }

        con = con + '</table>';
        $("#func_content").html(con);
        $("#func_content").fadeIn();

    }
    //func ajax btns ----------------------------
    $("#funcr1_btn").on("click",function (){
        var  i1 = $("#input_func1_1").val();
        //alert(i1);
        $.ajax({
            type: 'GET',
            url : '../php/func_ajax.php',
            data : {'c' : 1 , 'x1' : i1},
            success: function (msg) {
                showMyFunc(msg,'1');
            }
        });
    });

    $("#funcr2_btn").on("click",function (){
        var  i1 = $("#input_func2_1").val();

        $.ajax({
            type: 'GET',
            url : '../php/func_ajax.php',
            data : {'c' : 2 , 'x1' : i1 },
            success: function (msg) {
                showMyFunc(msg,'2');
            }
        });
    });

    $("#funcr3_btn").on("click",function (){
        var  i1 = $("#input_func3_1").val();

        $.ajax({
            type: 'GET',
            url : '../php/func_ajax.php',
            data : {'c' : 3 , 'x1' : i1 },
            success: function (msg) {
                showMyFunc(msg,'3');
            }
        });
    });
    $("#funcr4_btn").on("click",function (){
        var  i1 = $("#input_func4_1").val();

        $.ajax({
            type: 'GET',
            url : '../php/func_ajax.php',
            data : {'c' : 4 , 'x1' : i1 },
            success: function (msg) {
                showMyFunc(msg,'4');
            }
        });
    });

    $("#funcr5_btn").on("click",function (){
        var  i1 = $("#input_func5_1").val();

        $.ajax({
            type: 'GET',
            url : '../php/func_ajax.php',
            data : {'c' : 5 , 'x1' : i1 },
            success: function (msg) {
                showMyFunc(msg,'5');
            }
        });
    });

    $("#funcr6_btn").on("click",function (){
        var  i1 = $("#input_func6_1").val();

        $.ajax({
            type: 'GET',
            url : '../php/func_ajax.php',
            data : {'c' : 6 , 'x1' : i1 },
            success: function (msg) {
                showMyFunc(msg,'6');
            }
        });
    });

    $("#funcr7_btn").on("click",function (){

        $.ajax({
            type: 'GET',
            url : '../php/func_ajax.php',
            data : {'c' : 7 , 'x1' : '' },
            success: function (msg) {
                showMyFunc(msg,'7');
            }
        });
    });
    $("#funcr8_btn").on("click",function (){
        var  i1 = $("#input_func8_1").val();

        $.ajax({
            type: 'GET',
            url : '../php/func_ajax.php',
            data : {'c' : 8 , 'x1' : i1 },
            success: function (msg) {
                showMyFunc(msg,'8');
            }
        });
    });

    $("#funcr9_btn").on("click",function (){
        var  i1 = $("#input_func9_1").val();

        $.ajax({
            type: 'GET',
            url : '../php/func_ajax.php',
            data : {'c' : 9 , 'x1' : i1 },
            success: function (msg) {
                showMyFunc(msg,'9');
            }
        });
    });

    $("#funcr10_btn").on("click",function (){
        var  i1 = $("#input_func10_1").val();

        $.ajax({
            type: 'GET',
            url : '../php/func_ajax.php',
            data : {'c' : 10 , 'x1' : i1 },
            success: function (msg) {
                showMyFunc(msg,'10');
            }
        });
    });




    //func btns -------------------------------------
    function hideMyFuncs() {
        $("#func_des").fadeOut();
        $("#func_content").fadeOut();
        $("#func_des").html('');
        $("#func_content").html('');
        $("#funcr1_form").hide();
        $("#funcr2_form").hide();
        $("#funcr3_form").hide();
        $("#funcr4_form").hide();
        $("#funcr5_form").hide();
        $("#funcr6_form").hide();
        $("#funcr7_form").hide();
        $("#funcr8_form").hide();
        $("#funcr9_form").hide();
        $("#funcr10_form").hide();
    }


    $("#func_btn_1").on("click",function (){
        hideMyFuncs();
        $("#func_des").html('<p>بازیابی تحصیالت بازدیدکنندگان یک گالری با استفاده از شماره گالری<p>');
        $("#func_des").fadeIn();
        $("#funcr1_form").fadeIn();
        $("#func_content").fadeIn();
    });

    $("#func_btn_2").on("click",function (){
        hideMyFuncs();
        $("#func_des").html('<p>بازیابی صاحبان اثرهنری ای با شماره اثرهنری آنان<p>');
        $("#func_des").fadeIn();
        $("#funcr2_form").fadeIn();
        $("#func_content").fadeIn();
    });

    $("#func_btn_3").on("click",function (){
        hideMyFuncs();
        $("#func_des").html('<p>بازیابی نام کارکنانی که در موزه ی نمایش دهنده ی اثر هنری خاصی کار میکنند.<p>');
        $("#func_des").fadeIn();
        $("#funcr3_form").fadeIn();
        $("#func_content").fadeIn();
    });

    $("#func_btn_4").on("click",function (){
        hideMyFuncs();
        $("#func_des").html('<p>تمامی آثارهنری ای که در نمایشگاه های یک موزه ی خاص وجود دارند.<p>');
        $("#func_des").fadeIn();
        $("#funcr4_form").fadeIn();
        $("#func_content").fadeIn();
    });

    $("#func_btn_5").on("click",function (){
        hideMyFuncs();
        $("#func_des").html('<p> نام تمامی بازدیدکنندگانی که از نمایشگاه های یک موزه بازدید کرده اند<p>');
        $("#func_des").fadeIn();
        $("#funcr5_form").fadeIn();
        $("#func_content").fadeIn();
    });

    $("#func_btn_6").on("click",function (){
        hideMyFuncs();
        $("#func_des").html('<p> بازیابی خطاطی های موجود در یک موزه با استفاده از شماره موزه<p>');
        $("#func_des").fadeIn();
        $("#funcr6_form").fadeIn();
        $("#func_content").fadeIn();
    });

    $("#func_btn_7").on("click",function (){
        hideMyFuncs();
        $("#func_des").html('<p>نام خانوادگی مالکانی که بیش از 50 درص مالک یک اثرهنری هستند.<p>');
        $("#func_des").fadeIn();
        $("#funcr7_form").fadeIn();
        $("#func_content").fadeIn();
    });

    $("#func_btn_8").on("click",function (){
        hideMyFuncs();
        $("#func_des").html('<p>نام بازدیدکنندگانی که از یک نقاشی خاص بازدید کرده اند.<p>');
        $("#func_des").fadeIn();
        $("#funcr8_form").fadeIn();
        $("#func_content").fadeIn();
    });

    $("#func_btn_9").on("click",function (){
        hideMyFuncs();
        $("#func_des").html('<p>نام مالکان یک مجسمه با استفاده از شماره مجسمه<p>');
        $("#func_des").fadeIn();
        $("#funcr9_form").fadeIn();
        $("#func_content").fadeIn();
    });

    $("#func_btn_10").on("click",function (){
        hideMyFuncs();
        $("#func_des").html('<p>بازیابی نام خالق یک خطاطی با استفاده از شماره خطاطی<p>');
        $("#func_des").fadeIn();
        $("#funcr10_form").fadeIn();
        $("#func_content").fadeIn();
    });



});