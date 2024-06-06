
$(document).ready(function () {



    function showMySP(msg,num) {
        //alert(msg);
        $("#sp_content").html('');

        var con = '';
        con = '<table class="table-bordered table table-responsive text-center">';
        //view 1 display --------------------------------
        if (num == '1') {
            var myData = JSON.parse(msg);
            console.log(myData);
            //alert('adsf');
            var con = con +
                '<tr><th class="text-center">gallery_id</th>' +
                '<th class="text-center">gallery_name</th>' +
                '<th class="text-center">gallery_organizer</th>' +
                '<th class="text-center">gallery_occasion</th>' +
                '<th class="text-center">gallery_sponsor</th>' +
                '</tr>';

            for (row in myData) {
                var gallery_id = myData[row]['gallery_id'].toString();
                var gallery_name = myData[row]['gallery_name'].toString();
                var gallery_organizer = myData[row]['gallery_organizer'].toString();
                var gallery_occasion = myData[row]['gallery_occasion'].toString();
                var gallery_sponsor = myData[row]['gallery_sponsor'].toString();

                con = con + '<tr >' +
                    '<td>' + gallery_id + '</td>' +
                    '<td>' + gallery_name + '</td>' +
                    '<td>' + gallery_organizer + '</td>' +
                    '<td>' + gallery_occasion + '</td>' +
                    '<td>' + gallery_sponsor + '</td>' +
                    '</tr>';
            }
            con = con + '</table>';

        }


        else if (num == '2' || num == '3' || num == '4' || num == '5') {
            console.log(msg);
            if(msg){
                con = "انجام شد"
            }
            else {
                con = "انجام نشد"
            }
        }


        else if (num == '6') {
            var myData = JSON.parse(msg);
            console.log(myData);
            //alert('adsf');
            var con = con +
                '<tr><th class="text-center">staff_first_name</th>' +
                '<th class="text-center">staff_last_name</th>' +
                '<th class="text-center">staff_ssn</th>' +
                '<th class="text-center">staff_salary</th>' +
                '<th class="text-center">staff_museum_id</th>' +
                '<th class="text-center">staff_years_worked</th>' +
                '</tr>';

            for (row in myData) {
                var staff_first_name = myData[row]['staff_first_name'].toString();
                var staff_last_name = myData[row]['staff_last_name'].toString();
                var staff_ssn = myData[row]['staff_ssn'].toString();
                var staff_salary = myData[row]['staff_salary'].toString();
                var staff_museum_id = myData[row]['staff_museum_id'].toString();
                var staff_years_worked = myData[row]['staff_years_worked'].toString();

                con = con + '<tr >' +
                    '<td>' + staff_first_name + '</td>' +
                    '<td>' + staff_last_name + '</td>' +
                    '<td>' + staff_ssn + '</td>' +
                    '<td>' + staff_salary + '</td>' +
                    '<td>' + staff_museum_id + '</td>' +
                    '<td>' + staff_years_worked + '</td>' +
                    '</tr>';
            }
            con = con + '</table>';
        }

        else if (num == '7') {
            var myData = JSON.parse(msg);
            console.log(myData);
            //alert('adsf');
            var con = con +
                '<tr><th class="text-center">museum_id</th>' +
                '<th class="text-center">museum_founding_date</th>' +
                '<th class="text-center">museum_address</th>' +
                '<th class="text-center">museum_phone</th>' +
                '<th class="text-center">museum_owner</th>' +
                '<th class="text-center">musem_founder</th>' +
                '</tr>';

            for (row in myData) {
                var museum_id = myData[row]['museum_id'].toString();
                var museum_founding_date = myData[row]['museum_founding_date'].toString();
                var museum_address = myData[row]['museum_address'].toString();
                var museum_phone = myData[row]['museum_phone'].toString();
                var museum_owner = myData[row]['museum_owner'].toString();
                var musem_founder = myData[row]['musem_founder'].toString();

                con = con + '<tr >' +
                    '<td>' + museum_id + '</td>' +
                    '<td>' + museum_founding_date + '</td>' +
                    '<td>' + museum_address + '</td>' +
                    '<td>' + museum_phone + '</td>' +
                    '<td>' + museum_owner + '</td>' +
                    '<td>' + musem_founder + '</td>' +
                    '</tr>';
            }
            con = con + '</table>';
        }

        else if (num == '8') {
            var myData = JSON.parse(msg);
            console.log(myData);
            //alert('adsf');
            var con = con +
                '<tr>' +
                '<th class="text-center">visitor_edjucation</th>' +
                '</tr>';
            for (row in myData) {
                var visitor_edjucation = myData[row]['visitor_edjucation'].toString();

                con = con + '<tr >' +
                    '<td>' + visitor_edjucation + '</td>' +
                    '</tr>';
            }
            con = con + '</table>';
        }

        else if (num == '9') {
            var myData = JSON.parse(msg);
            console.log(myData);
            //alert('adsf');
            var con = con +
                '<tr>' +
                '<th class="text-center">writing_art_id</th>' +
                '<th class="text-center">writing_length</th>' +
                '<th class="text-center">writing_width</th>' +
                '<th class="text-center">writing_art_id</th>' +
                '</tr>';
            for (row in myData) {
                var writing_art_id = myData[row]['writing_art_id'].toString();
                var writing_length = myData[row]['writing_length'].toString();
                var writing_width = myData[row]['writing_width'].toString();
                var writing_style = myData[row]['writing_style'].toString();

                con = con + '<tr >' +
                    '<td>' + writing_art_id + '</td>' +
                    '<td>' + writing_length + '</td>' +
                    '<td>' + writing_width + '</td>' +
                    '<td>' + writing_style + '</td>' +
                    '</tr>';
            }
            con = con + '</table>';
        }

        else if (num == '10') {
            var myData = JSON.parse(msg);
            console.log(myData);
            var con = con +
                '<tr>' +
                '<th class="text-center">owner_ssn_id</th>' +
                '<th class="text-center">owner_first_name</th>' +
                '<th class="text-center">owner_last_name</th>' +
                '</tr>';

            for (row in myData) {
                var owner_ssn_id = myData[row]['owner_ssn_id'].toString();
                var owner_first_name = myData[row]['owner_first_name'].toString();
                var owner_last_name = myData[row]['owner_last_name'].toString();

                con = con + '<tr >' +
                    '<td>' + owner_ssn_id + '</td>' +
                    '<td>' + owner_first_name + '</td>' +
                    '<td>' + owner_last_name + '</td>' +
                    '</tr>';
            }
        }




        $("#sp_content").append(con);
        $("#sp_content").fadeIn();

    }




    // ajax btns -------------------------------------------
    $("#spr1_btn").on("click",function (){
        var  i1 = $("#input_sp1_1").val();
        //alert(i1);
        //alert(x1);
        $.ajax({
            type: 'GET',
            url : '../php/sp_ajax.php',
            data : {'c' : 1 , 'x1' : i1 , 'x2' : '' , 'x3' : '' , 'x4' : '' , 'x5' : '','x6' : ''},
            success: function (msg) {
                showMySP(msg,'1');
            }
        });
    });


    $("#spr2_btn").on("click",function (){

        var  i1 = $("#input_sp2_1").val();
        var  i2 = $("#input_sp2_2").val();
        var  i3 = $("#input_sp2_3").val();
        var  i4 = $("#input_sp2_4").val();
        var  i5 = $("#input_sp2_5").val();

        $.ajax({
            type: 'GET',
            url : '../php/sp_ajax.php',
            data : {'c' : 2 , 'x1' : i1 , 'x2' : i2 , 'x3' : i3 , 'x4' : i4 , 'x5' : i5 , 'x6' : ''},
            success: function (msg) {
                showMySP(msg,'2');
            }
        });
    });


    $("#spr3_btn").on("click",function (){

        var  i1 = $("#input_sp3_1").val();
        var  i2 = $("#input_sp3_2").val();
        var  i3 = $("#input_sp3_3").val();
        var  i4 = $("#input_sp3_4").val();
        var  i5 = $("#input_sp3_5").val();
        var  i6 = $("#input_sp3_6").val();

        $.ajax({
            type: 'GET',
            url : '../php/sp_ajax.php',
            data : {'c' : 3 , 'x1' : i1 , 'x2' : i2 , 'x3' : i3 , 'x4' : i4 , 'x5' : i5 , 'x6' : i6},
            success: function (msg) {
                showMySP(msg,'3');
            }
        });
    });

    $("#spr4_btn").on("click",function (){

        var  i1 = $("#input_sp4_1").val();
        var  i2 = $("#input_sp4_2").val();
        var  i3 = $("#input_sp4_3").val();
        var  i4 = $("#input_sp4_4").val();
        var  i5 = $("#input_sp4_5").val();

        $.ajax({
            type: 'GET',
            url : '../php/sp_ajax.php',
            data : {'c' : 4 , 'x1' : i1 , 'x2' : i2 , 'x3' : i3 , 'x4' : i4 , 'x5' : i5 , 'x6' : ''},
            success: function (msg) {
                showMySP(msg,'4');
            }
        });
    });

    $("#spr5_btn").on("click",function (){

        var  i1 = $("#input_sp5_1").val();
        var  i2 = $("#input_sp5_2").val();

        $.ajax({
            type: 'GET',
            url : '../php/sp_ajax.php',
            data : {'c' : 5 , 'x1' : i1 , 'x2' : i2 , 'x3' : '' , 'x4' : '' , 'x5' : '' , 'x6' : ''},
            success: function (msg) {
                showMySP(msg,'5');
            }
        });
    });


    $("#spr6_btn").on("click",function (){


        $.ajax({
            type: 'GET',
            url : '../php/sp_ajax.php',
            data : {'c' : 6 , 'x1' : '' , 'x2' : '' , 'x3' : '' , 'x4' : '' , 'x5' : '' , 'x6' : ''},
            success: function (msg) {
                showMySP(msg,'6');
            }
        });
    });

    $("#spr7_btn").on("click",function (){

        var  i1 = $("#input_sp7_1").val();

        $.ajax({
            type: 'GET',
            url : '../php/sp_ajax.php',
            data : {'c' : 7 , 'x1' : i1 , 'x2' : '' , 'x3' : '' , 'x4' : '' , 'x5' : '' , 'x6' : ''},
            success: function (msg) {
                showMySP(msg,'7');
            }
        });
    });

    $("#spr8_btn").on("click",function (){

        var  i1 = $("#input_sp8_1").val();

        $.ajax({
            type: 'GET',
            url : '../php/sp_ajax.php',
            data : {'c' : 8 , 'x1' : i1 , 'x2' : '' , 'x3' : '' , 'x4' : '' , 'x5' : '' , 'x6' : ''},
            success: function (msg) {
                showMySP(msg,'8');
            }
        });
    });

    $("#spr9_btn").on("click",function (){

        var  i1 = $("#input_sp9_1").val();

        $.ajax({
            type: 'GET',
            url : '../php/sp_ajax.php',
            data : {'c' : 9 , 'x1' : i1 , 'x2' : '' , 'x3' : '' , 'x4' : '' , 'x5' : '' , 'x6' : ''},
            success: function (msg) {
                showMySP(msg,'9');
            }
        });
    });

    $("#spr10_btn").on("click",function (){

        var  i1 = $("#input_sp10_1").val();

        $.ajax({
            type: 'GET',
            url : '../php/sp_ajax.php',
            data : {'c' : 10 , 'x1' : i1 , 'x2' : '' , 'x3' : '' , 'x4' : '' , 'x5' : '' , 'x6' : ''},
            success: function (msg) {
                showMySP(msg,'10');
            }
        });
    });


    //sp btns -------------------------------------------------------------------------
    function hideMySP() {
        $("#sp_content").fadeOut();
        $("#sp_des").fadeOut();
        $("#sp_des").html('');
        $("#sp_content").html('');
        $("#spr1_form").hide();
        $("#spr2_form").hide();
        $("#spr3_form").hide();
        $("#spr4_form").hide();
        $("#spr5_form").hide();
        $("#spr6_form").hide();
        $("#spr7_form").hide();
        $("#spr8_form").hide();
        $("#spr9_form").hide();
        $("#spr10_form").hide();
    }


    $("#sp_btn_1").on("click",function (){
        hideMySP();
        $("#sp_des").html('<p> بازیابی گالری هایی که یک مناسبت برگزاری خاص داشته اند <p>');
        $("#sp_content").html('');
        $("#sp_des").fadeIn();
        $("#input_sp1").fadeIn();
        $("#spr1_form").fadeIn();
        $("#sp_content").fadeIn();
    });

    $("#sp_btn_2").on("click",function (){
        hideMySP();
        $("#sp_des").html('<p> درج در جدول مجسمه <p>');
        $("#sp_content").html('');
        $("#sp_des").fadeIn();
        $("#spr2_form").fadeIn();
        $("#sp_content").fadeIn();
    });

    $("#sp_btn_3").on("click",function (){
        hideMySP();
        $("#sp_des").html('<p> درج یک مالک<p>');
        $("#sp_content").html('');
        $("#sp_des").fadeIn();
        $("#spr3_form").fadeIn();
        $("#sp_content").fadeIn();
    });

    $("#sp_btn_4").on("click",function (){
        hideMySP();
        $("#sp_des").html('<p> درج یک موزه<p>');
        $("#sp_content").html('');
        $("#sp_des").fadeIn();
        $("#spr4_form").fadeIn();
        $("#sp_content").fadeIn();
    });

    $("#sp_btn_5").on("click",function (){
        hideMySP();
        $("#sp_des").html('<p> به روزرسانی نام اثرهنری<p>');
        $("#sp_content").html('');
        $("#sp_des").fadeIn();
        $("#spr5_form").fadeIn();
        $("#sp_content").fadeIn();
    });

    $("#sp_btn_6").on("click",function (){
        hideMySP();
        $("#sp_des").html('<p> نام خانوادگی کارمندانی که بیش از 1000 حقوق میگیرند.<p>');
        $("#sp_content").html('');
        $("#sp_des").fadeIn();
        $("#spr6_form").fadeIn();
        $("#sp_content").fadeIn();
    });

    $("#sp_btn_7").on("click",function (){
        hideMySP();
        $("#sp_des").html('<p>  بازیابی اطالعات یک موزه که یک کارمند خاص در آن کار میکند<p>');
        $("#sp_content").html('');
        $("#sp_des").fadeIn();
        $("#spr7_form").fadeIn();
        $("#sp_content").fadeIn();
    });

    $("#sp_btn_8").on("click",function (){
        hideMySP();
        $("#sp_des").html('<p> بازیابی تحصیالت بازدیدکننده با استفاده از شماره گالری<p>');
        $("#sp_content").html('');
        $("#sp_des").fadeIn();
        $("#spr8_form").fadeIn();
        $("#sp_content").fadeIn();
    });

    $("#sp_btn_9").on("click",function (){
        hideMySP();
        $("#sp_des").html('<p> بازیابی خطاطی با استفاده از نام اثرهنری <p>');
        $("#sp_content").html('');
        $("#sp_des").fadeIn();
        $("#spr9_form").fadeIn();
        $("#sp_content").fadeIn();
    });

    $("#sp_btn_10").on("click",function (){
        hideMySP();
        $("#sp_des").html('<p> بازیابی نام مالکان یک خطاطی با استفاده از شماره خطاطی<p>');
        $("#sp_content").html('');
        $("#sp_des").fadeIn();
        $("#spr10_form").fadeIn();
        $("#sp_content").fadeIn();
    });



});