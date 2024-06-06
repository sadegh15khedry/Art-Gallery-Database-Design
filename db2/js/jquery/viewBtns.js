
$(document).ready(function () {





    function showMyView(msg,num) {
            //alert(msg);
            $("#view_content").html('');
            var myData = JSON.parse(msg);
            var con='';
            con = '<table class="table-bordered table table-responsive text-center">';
            //view 1 display --------------------------------
            if(num=='1') {
                //console.log(myData);
                var con = con +
                    '<tr><th class="text-center">art_id</th>' +
                    '<th class="text-center">art_title</th>' +
                    '<th class="text-center">art_description</th>' +
                    '<th class="text-center">artist_ssn_id</th>' +
                    '<th class="text-center">artist_first_name</th>' +
                    '<th class="text-center">artist_last_name</th>' +
                    '</tr>';

                for (row in myData) {
                    var id = myData[row]['art_id'].toString();
                    var title = myData[row]['art_title'].toString();
                    var desc = myData[row]['art_description'].toString();
                    var ssn = myData[row]['artist_ssn_id'].toString();
                    var first_name = myData[row]['artist_first_name'].toString();
                    var last_name = myData[row]['artist_last_name'].toString();
                    con = con + '<tr >' +
                        '<td>' + id + '</td>' +
                        '<td>' + title + '</td>' +
                        '<td>' + desc + '</td>' +
                        '<td>' + ssn + '</td>' +
                        '<td>' + first_name + '</td>' +
                        '<td>' + last_name + '</td>' +
                        '</tr>';
                }


            }
        //view 2 display --------------------------------
        else if(num=='2'){
            var con = con +
                '<tr><th class="text-center">art_id</th>' +
                '<th class="text-center">art_title</th>' +
                '<th class="text-center">art_description</th>' +
                '<th class="text-center">gallery_id</th>' +
                '<th class="text-center">galley_name</th>' +
                '<th class="text-center">galley_org</th>' +
                '<th class="text-center">galley_occ</th>' +
                '<th class="text-center">galley_sponsor</th>' +
                '</tr>';

            for (row in myData) {
                var id = myData[row]['art_id'].toString();
                var title = myData[row]['art_title'].toString();
                var desc = myData[row]['art_description'].toString();
                var gallery_id = myData[row]['gallery_id'].toString();
                var galley_name = myData[row]['gallery_name'].toString();
                var galley_org = myData[row]['gallery_organizer'].toString();
                var galley_occ = myData[row]['gallery_occasion'].toString();
                var galley_sponsor = myData[row]['gallery_sponsor'].toString();

                con = con + '<tr >' +
                    '<td>' + id + '</td>' +
                    '<td>' + title + '</td>' +
                    '<td>' + desc + '</td>' +
                    '<td>' + gallery_id + '</td>' +
                    '<td>' + galley_name + '</td>' +
                    '<td>' + galley_org + '</td>' +
                    '<td>' + galley_occ + '</td>' +
                    '<td>' + galley_sponsor + '</td>' +
                    '</tr>';
            }
        }
        //view 3 display --------------------------------
        else if(num=='3'){
            var con = con +
                '<tr><th class="text-center">art_id</th>' +
                '<th class="text-center">art_title</th>' +
                '<th class="text-center">art_description</th>' +
                '<th class="text-center">ownership_id</th>' +
                '<th class="text-center">ownership_percentage</th>' +
                '<th class="text-center">owner_ssn_id</th>' +
                '<th class="text-center">owner_first_name</th>' +
                '<th class="text-center">owner_last_name</th>' +
                '</tr>';

            for (row in myData) {
                var id = myData[row]['art_id'].toString();
                var title = myData[row]['art_title'].toString();
                var desc = myData[row]['art_description'].toString();
                var ownership_id = myData[row]['ownership_id'].toString();
                var ownership_percentage = myData[row]['ownership_percentage'].toString();
                var owner_ssn_id = myData[row]['owner_ssn_id'].toString();
                var owner_first_name = myData[row]['owner_first_name'].toString();
                var owner_last_name = myData[row]['owner_last_name'].toString();

                con = con + '<tr >' +
                    '<td>' + id + '</td>' +
                    '<td>' + title + '</td>' +
                    '<td>' + desc + '</td>' +
                    '<td>' + ownership_id + '</td>' +
                    '<td>' + ownership_percentage + '</td>' +
                    '<td>' + owner_ssn_id + '</td>' +
                    '<td>' + owner_first_name + '</td>' +
                    '<td>' + owner_last_name + '</td>' +
                    '</tr>';
            }
        }
        //view 4 display --------------------------------
        else if(num=='4'){
            var con = con +
                '<tr><th class="text-center">art_id</th>' +
                ' <th class="text-center">art_title</th>' +
                '<th class="text-center">artist_ssn_id</th>' +
                '<th class="text-center">ownership_owner_id</th>' +
                '<th class="text-center">ownership_percentage</th>' +
                '<th class="text-center">owner_ssn_id</th>' +
                '</tr>';

            for (row in myData) {
                var id = myData[row]['art_id'].toString();
                var title = myData[row]['art_title'].toString();
                var artist_ssn_id = myData[row]['artist_ssn_id'].toString();
                var ownership_owner_id = myData[row]['ownership_owner_id'].toString();
                var ownership_percentage = myData[row]['ownership_percentage'].toString();
                var owner_ssn_id = myData[row]['owner_ssn_id'].toString();

                con = con + '<tr >' +
                    '<td>' + id + '</td>' +
                    '<td>' + title + '</td>' +
                    '<td>' + artist_ssn_id + '</td>' +
                    '<td>' + ownership_owner_id + '</td>' +
                    '<td>' + ownership_percentage + '</td>' +
                    '<td>' + owner_ssn_id + '</td>' +
                    '</tr>';
            }
        }
        //view 5 display --------------------------------
        else if(num=='5'){
            var con = con +
                '<tr><th class="text-center">gallery_id</th>' +
                ' <th class="text-center">gallery_organizer</th>' +
                '<th class="text-center">art_id</th>' +
                '<th class="text-center">art_title</th>' +
                '<th class="text-center">ownership_id</th>' +
                '<th class="text-center">ownership_percentage</th>' +
                '<th class="text-center">owner_ssn_id</th></tr>';

            for (row in myData) {
                var gallery_id = myData[row]['gallery_id'].toString();
                var gallery_organizer = myData[row]['gallery_organizer'].toString();
                var art_id = myData[row]['art_id'].toString();
                var art_title = myData[row]['art_title'].toString();
                var ownership_id = myData[row]['ownership_id'].toString();
                var ownership_percentage = myData[row]['ownership_percentage'].toString();
                var owner_ssn_id = myData[row]['owner_ssn_id'].toString();
                con = con + '<tr >' +
                    '<td>' + gallery_id + '</td>' +
                    '<td>' + gallery_organizer + '</td>' +
                    '<td>' + art_id + '</td>' +
                    '<td>' + art_title + '</td>' +
                    '<td>' + ownership_id + '</td>' +
                    '<td>' + ownership_percentage + '</td>' +
                    '<td>' + owner_ssn_id + '</td>' +
                    '</tr>';
            }
        }
        //view 6 display --------------------------------
        else if(num=='6'){
            alert("this view is logicly wrong and always emty ");
        }
        //view 7 display --------------------------------
        else if(num=='7'){
            var con = con +
                '<tr>' +
                '<th class="text-center">art_id</th>' +
                '<th class="text-center">art_title</th>' +
                '<th class="text-center">gallery_id</th>' +
                '<th class="text-center">gallery_name</th>' +
                '<th class="text-center">holding_id</th>' +
                '<th class="text-center">museum_id</th>' +
                '</tr>';

            for (row in myData) {
                var id = myData[row]['art_id'].toString();
                var title = myData[row]['art_title'].toString();
                var gallery_id = myData[row]['gallery_id'].toString();
                var gallery_name = myData[row]['gallery_name'].toString();
                var holding_id = myData[row]['holding_id'].toString();
                var museum_id = myData[row]['museum_id'].toString();
                con = con + '<tr >' +
                    '<td>' + id + '</td>' +
                    '<td>' + title + '</td>' +
                    '<td>' + gallery_id + '</td>' +
                    '<td>' + gallery_name + '</td>' +
                    '<td>' + holding_id + '</td>' +
                    '<td>' + museum_id + '</td>' +
                    '</tr>';
            }
        }
        //view 8 display --------------------------------
        else if(num=='8'){
            var con = con +
                '<tr><th class="text-center">visitor_ssn_id</th>' +
                '<th class="text-center">gallery_id</th>' +
                '<th class="text-center">holding_id</th>' +
                '<th class="text-center">museum_id</th>' +
                '<th class="text-center">visitation_id</th>' +
                '</tr>';

            for (row in myData) {
                var visitor_ssn_id = myData[row]['visitor_ssn_id'].toString();
                var gallery_id = myData[row]['gallery_id'].toString();
                var holding_id = myData[row]['holding_id'].toString();
                var museum_id = myData[row]['museum_id'].toString();
                var visitation_id = myData[row]['visitation_id'].toString();

                con = con + '<tr >' +
                    '<td>' + visitor_ssn_id + '</td>' +
                    '<td>' + gallery_id + '</td>' +
                    '<td>' + holding_id + '</td>' +
                    '<td>' + museum_id + '</td>' +
                    '<td>' + visitation_id + '</td>'+
                    '</tr>';
            }
        }
        //view 9 display --------------------------------
        else if(num=='9'){
            var con = con +
                '<tr><th class="text-center">visitor_ssn_id</th>' +
                '<th class="text-center">gallery_id</th>' +
                '<th class="text-center">visitation_id</th>' +
                '</tr>';

            for (row in myData) {
                var visitor_ssn_id = myData[row]['visitor_ssn_id'].toString();
                var gallery_id = myData[row]['gallery_id'].toString();
                var visitation_id = myData[row]['visitation_id'].toString();

                con = con + '<tr >' +
                    '<td>' + visitor_ssn_id + '</td>' +
                    '<td>' + gallery_id + '</td>' +
                    '<td>' + visitation_id + '</td>'+
                    '</tr>';
            }

        }
        //view 10 display --------------------------------
        else if(num=='10'){
            var con = con +
                '<tr><th class="text-center">staff_personal_id</th>' +
                '<th class="text-center">staff_ssn</th>' +
                '<th class="text-center">museum_id</th>' +
                '<th class="text-center">museum_phone</th>' +
                '</tr>';

            for (row in myData) {
                var staff_personal_id = myData[row]['staff_personal_id'].toString();
                var staff_ssn = myData[row]['staff_ssn'].toString();
                var museum_id = myData[row]['museum_id'].toString();
                var museum_phone = myData[row]['museum_phone'].toString();

                con = con + '<tr >' +
                    '<td>' + staff_personal_id + '</td>' +
                    '<td>' + staff_ssn + '</td>' +
                    '<td>' + museum_id + '</td>' +
                    '<td>' + museum_phone + '</td>' +

                    '</tr>';
            }
        }
        //view 11 display --------------------------------
        else if(num=='11'){
            var con = con +
                '<tr><th class="text-center">art_id</th> ' +
                '<th class="text-center">art_title</th>' +
                '<th class="text-center">painting_id</th>' +
                '<th class="text-center">painting_cavas_type</th>' +
                '<th class="text-center">painting_color_type</th>' +
                '</tr>';

            for (row in myData) {
                var art_id = myData[row]['art_id'].toString();
                var art_title = myData[row]['art_title'].toString();
                var painting_id = myData[row]['painting_id'].toString();
                var painting_cavas_type = myData[row]['painting_cavas_type'].toString();
                var painting_color_type = myData[row]['painting_color_type'].toString();
                con = con + '<tr >' +
                    '<td>' + art_id + '</td>' +
                    '<td>' + art_title + '</td>' +
                    '<td>' + painting_id + '</td>' +
                    '<td>' + painting_cavas_type + '</td>' +
                    '<td>' + painting_color_type + '</td>' +
                    '</tr>';
            }
        }
        //view 12 display --------------------------------
        else if(num=='12'){
            var con = con +
                '<tr><th class="text-center">art_id</th> ' +
                '<th class="text-center">art_title</th>' +
                '<th class="text-center">statue_id</th>' +
                '<th class="text-center">statue_material</th>' +
                '<th class="text-center">statue_length</th>' +
                '<th class="text-center">statue_width</th>' +
                '</tr>';

            for (row in myData) {
                var art_id = myData[row]['art_id'].toString();
                var art_title = myData[row]['art_title'].toString();
                var statue_id = myData[row]['statue_id'].toString();
                var statue_material = myData[row]['statue_material'].toString();
                var statue_length = myData[row]['statue_length'].toString();
                var statue_width = myData[row]['statue_width'].toString();

                con = con + '<tr >' +
                    '<td>' + art_id + '</td>' +
                    '<td>' + art_title + '</td>' +
                    '<td>' + statue_id + '</td>' +
                    '<td>' + statue_material + '</td>' +
                    '<td>' + statue_length + '</td>' +
                    '<td>' + statue_width + '</td>' +
                    '</tr>';
            }
        }
        //view 13 display --------------------------------
        else if(num=='13'){
            var con = con +
                '<tr><th class="text-center">art_id</th> ' +
                '<th class="text-center">art_title</th>' +
                '<th class="text-center">writing_id</th>' +
                '<th class="text-center">writing_length</th>' +
                '<th class="text-center">writing_width</th>' +
                '<th class="text-center">writing_style</th>' +
                '</tr>';

            for (row in myData) {
                var art_id = myData[row]['art_id'].toString();
                var art_title = myData[row]['art_title'].toString();
                var writing_id = myData[row]['writing_id'].toString();
                var writing_length = myData[row]['writing_length'].toString();
                var writing_width = myData[row]['writing_width'].toString();
                var writing_style = myData[row]['writing_style'].toString();
                con = con + '<tr >' +
                    '<td>' + art_id + '</td>' +
                    '<td>' + art_title + '</td>' +
                    '<td>' + writing_id + '</td>' +
                    '<td>' + writing_length + '</td>' +
                    '<td>' + writing_width + '</td>' +
                    '<td>' + writing_style + '</td>' +
                    '</tr>';
            }
        }
        //view 14 display --------------------------------
        else if(num=='14'){
            var con = con +
                '<tr><th class="text-center">gallery_id</th>' +
                '<th class="text-center">gallery_name</th>' +
                '<th class="text-center">museum_id</th>' +
                '<th class="text-center">museum_phone</th>' +
                '<th class="text-center">holding_id</th>' +
                '</tr>';

            for (row in myData) {
                var gallery_id = myData[row]['gallery_id'].toString();
                var gallery_name = myData[row]['gallery_name'].toString();
                var museum_id = myData[row]['museum_id'].toString();
                var museum_phone = myData[row]['museum_phone'].toString();
                var holding_id = myData[row]['holding_id'].toString();

                con = con + '<tr >' +
                    '<td>' + gallery_id + '</td>' +
                    '<td>' + gallery_name + '</td>' +
                    '<td>' + museum_id + '</td>' +
                    '<td>' + museum_phone + '</td>' +
                    '<td>' + holding_id + '</td>' +
                    '</tr>';
            }
        }
        //view 15 display --------------------------------
        else if(num=='15'){
            var con = con +
                '<tr><th class="text-center">staff_personal_id</th>' +
                '<th class="text-center">staff_ssn</th>' +
                '<th class="text-center">museum_id</th>' +
                '<th class="text-center">gallery_id</th>' +
                '<th class="text-center">gallery_name</th>' +
                '<th class="text-center">art_id</th>' +
                '<th class="text-center">art_title</th>' +
                '</tr>';

            for (row in myData) {
                var staff_personal_id = myData[row]['staff_personal_id'].toString();
                var staff_ssn = myData[row]['staff_ssn'].toString();
                var museum_id = myData[row]['museum_id'].toString();
                var gallery_id = myData[row]['gallery_id'].toString();
                var gallery_name = myData[row]['gallery_name'].toString();
                var art_id = myData[row]['art_id'].toString();
                var art_title = myData[row]['art_title'].toString();
                con = con + '<tr >' +
                    '<td>' + staff_personal_id + '</td>' +
                    '<td>' + staff_ssn + '</td>' +
                    '<td>' + museum_id + '</td>' +
                    '<td>' + gallery_id + '</td>' +
                    '<td>' + gallery_name + '</td>' +
                    '<td>' + art_id + '</td>' +
                    '<td>' + art_title + '</td>' +
                    '</tr>';
            }
        }




        con = con + '</table>';
        $("#view_content").append(con);
        $("#view_content").fadeIn()
    }




    // ajax btns -------------------------------------------------------------------------------

    $("#vr1_btn").on("click",function (){
        $.ajax({
            type: 'GET',
            url : '../php/view_ajax.php',
            data : 'c=1',
            success: function (msg) {
                showMyView(msg,'1');
            }
        });
    });

    $("#vr2_btn").on("click",function (){
        $.ajax({
            type: 'GET',
            url : '../php/view_ajax.php',
            data : 'c=2',
            success: function (msg) {
                showMyView(msg,'2');
            }
        });
    });

    $("#vr3_btn").on("click",function (){
        $.ajax({
            type: 'GET',
            url : '../php/view_ajax.php',
            data : 'c=3',
            success: function (msg) {
                showMyView(msg,'3');
            }
        });
    });

    $("#vr4_btn").on("click",function (){
        $.ajax({
            type: 'GET',
            url : '../php/view_ajax.php',
            data : 'c=4',
            success: function (msg) {
                showMyView(msg,'4');
            }
        });
    });


    $("#vr5_btn").on("click",function (){
        $.ajax({
            type: 'GET',
            url : '../php/view_ajax.php',
            data : 'c=5',
            success: function (msg) {
                showMyView(msg,'5');
            }
        });
    });


    $("#vr6_btn").on("click",function (){
        $.ajax({
            type: 'GET',
            url : '../php/view_ajax.php',
            data : 'c=6',
            success: function (msg) {
                showMyView(msg,'6');
            }
        });
    });


    $("#vr7_btn").on("click",function (){
        $.ajax({
            type: 'GET',
            url : '../php/view_ajax.php',
            data : 'c=7',
            success: function (msg) {
                showMyView(msg,'7');
            }
        });
    });


    $("#vr8_btn").on("click",function (){
        $.ajax({
            type: 'GET',
            url : '../php/view_ajax.php',
            data : 'c=8',
            success: function (msg) {
                showMyView(msg,'8');
            }
        });
    });


    $("#vr9_btn").on("click",function (){
        $.ajax({
            type: 'GET',
            url : '../php/view_ajax.php',
            data : 'c=9',
            success: function (msg) {
                showMyView(msg,'9');
            }
        });
    });


    $("#vr10_btn").on("click",function (){
        $.ajax({
            type: 'GET',
            url : '../php/view_ajax.php',
            data : 'c=10',
            success: function (msg) {
                showMyView(msg,'10');
            }
        });
    });


    $("#vr11_btn").on("click",function (){
        $.ajax({
            type: 'GET',
            url : '../php/view_ajax.php',
            data : 'c=11',
            success: function (msg) {
                showMyView(msg,'11');
            }
        });
    });


    $("#vr12_btn").on("click",function (){
        $.ajax({
            type: 'GET',
            url : '../php/view_ajax.php',
            data : 'c=12',
            success: function (msg) {
                showMyView(msg,'12');
            }
        });
    });


    $("#vr13_btn").on("click",function (){
        $.ajax({
            type: 'GET',
            url : '../php/view_ajax.php',
            data : 'c=13',
            success: function (msg) {
                showMyView(msg,'13');
            }
        });
    });


    $("#vr14_btn").on("click",function (){
        $.ajax({
            type: 'GET',
            url : '../php/view_ajax.php',
            data : 'c=14',
            success: function (msg) {
                showMyView(msg,'14');
            }
        });
    });


    $("#vr15_btn").on("click",function (){
        $.ajax({
            type: 'GET',
            url : '../php/view_ajax.php',
            data : 'c=15',
            success: function (msg) {
                showMyView(msg,'15');
            }
        });
    });






    //views btn-------------------------------------------------------------------------------------
    function hideMyViews() {
        $("#view_content").fadeOut();
        $("#view_des").fadeOut();
        $("#vr1_btn").hide();
        $("#vr2_btn").hide();
        $("#vr3_btn").hide();
        $("#vr4_btn").hide();
        $("#vr5_btn").hide();
        $("#vr6_btn").hide();
        $("#vr7_btn").hide();
        $("#vr8_btn").hide();
        $("#vr9_btn").hide();
        $("#vr10_btn").hide();
        $("#vr11_btn").hide();
        $("#vr12_btn").hide();
        $("#vr13_btn").hide();
        $("#vr14_btn").hide();
        $("#vr15_btn").hide();

    }


    $("#view_btn_1").on("click",function (){
        hideMyViews();
        $("#view_des").html('<p> این دید با بازیابی دو جدول اثرهنری و هنرمند با استفاده از پیوند روی شماره هنرمند ایجاد شده است.<p>');
        $("#view_des").fadeIn();
        $("#view_content").html('');
        $("#vr1_btn").fadeIn();
    });

    $("#view_btn_2").on("click",function (){
        hideMyViews();
        $("#view_des").html('<p>این دید با بازیابی دو جدول اثرهنری و گالری با استفاده از پیوند روی شماره گالری ایجاد شده است.<p>');
        $("#view_des").fadeIn();
        $("#view_content").html('');
        $("#vr2_btn").fadeIn();
    });


    $("#view_btn_3").on("click",function (){
        hideMyViews();
        $("#view_des").html('<p> این دید با بازیابی سه جدول اثرهنری و مالک و مالکیت با استفاده از پیوند روی شماره ملی مالک و شماره اثرهنری ایجاد شده است<p>');
        $("#view_des").fadeIn();
        $("#view_content").html('');
        $("#vr3_btn").fadeIn();
    });


    $("#view_btn_4").on("click",function (){
        hideMyViews();
        $("#view_des").html('<p>   این دید با بازیابی چهار جدول اثرهنری و هنرمند و مالک و مالکیت با استفاده از پیوند روی شماره هنرمند و شماره مالک و شماره اثر هنری ایجاد شده است<p>');
        $("#view_des").fadeIn();
        $("#view_content").html('');
        $("#vr4_btn").fadeIn();
    });

    $("#view_btn_5").on("click",function (){
        hideMyViews();
        $("#view_des").html('<p>  این دید با بازیابی چهار جدول اثرهنری و مالک و مالکیت و گالری با استفاده از پیوند روی شماره مالک و شماره اثرهنری و شماره گالری ایجاد شده است.<p>');
        $("#view_des").fadeIn();
        $("#view_content").html('');
        $("#vr5_btn").fadeIn();
    });

    $("#view_btn_6").on("click",function (){
        hideMyViews();
        $("#view_des").html('<p>  این دید با بازیابی چهار جدول اثرهنری و نقاشی و خطاطی و مجسمه با استفاده از پیوند روی شماره اثرهنری ایجاد شده است.   <p>');
        $("#view_des").fadeIn();
        $("#view_content").html('');
        $("#vr6_btn").fadeIn();
    });


    $("#view_btn_7").on("click",function (){
        hideMyViews();
        $("#view_des").html('<p>  این دید با بازیابی چهار جدول اثرهنری و گالری و برگزاری و موزه با استفاده از پیوند روی شماره گالری و شماره موزه ایجاد شده است.<p>');
        $("#view_des").fadeIn();
        $("#view_content").html('');
        $("#vr7_btn").fadeIn();
    });


    $("#view_btn_8").on("click",function (){
        hideMyViews();
        $("#view_des").html('<p>این دید با بازیابی پنج جدول بازدیدکننده و بازدید و گالری و برگزاری و موزه بااستفاده از پیوند روی شماره بازدیدکننده و شماره گالری و شماره موزه ایجاد شده است. <p>');
        $("#view_des").fadeIn();
        $("#view_content").html('');
        $("#vr8_btn").fadeIn();
    });


    $("#view_btn_9").on("click",function (){
        hideMyViews();
        $("#view_des").html('<p>این دید با بازیابی سه جدول بازدیدکننده و بازدید و گالری با استفاده از پیوند روی شماره بازدیدکننده و شماره گالری ایجاد شده است.<p>');
        $("#view_des").fadeIn();
        $("#view_content").html('');
        $("#vr9_btn").fadeIn();
    });


    $("#view_btn_10").on("click",function (){
        hideMyViews();
        $("#view_des").html('<p>این دید با بازیابی دو جدول پرسنل و موزه با استفاده از پیوند روی شماره موزه ایجاد شده است.<p>');
        $("#view_des").fadeIn();
        $("#view_content").html('');
        $("#vr10_btn").fadeIn();
    });


    $("#view_btn_11").on("click",function (){
        hideMyViews();
        $("#view_des").html('<p>این دید با بازیابی دو جدول اثرهنری و نقاشی با استفاده از پیوند روی شماره اثرهنری ایجاد شده است.<p>');
        $("#view_des").fadeIn();
        $("#view_content").html('');
        $("#vr11_btn").fadeIn();
    });


    $("#view_btn_12").on("click",function (){
        hideMyViews();
        $("#view_des").html('<p>این دید با بازیابی دو جدول اثرهنری و مجسمه با استفاده از پیوند روی شماره اثرهنری ایجاد شده است.<p>');
        $("#view_des").fadeIn();
        $("#view_content").html('');
        $("#vr12_btn").fadeIn();
    });


    $("#view_btn_13").on("click",function (){
        hideMyViews();
        $("#view_des").html('<p>این دید با بازیابی دو جدول اثرهنری و خطاطی با استفاده از پیوند روی شماره اثرهنری ایجاد شده است.<p>');
        $("#view_des").fadeIn();
        $("#view_content").html('');
        $("#vr13_btn").fadeIn();
    });


    $("#view_btn_14").on("click",function (){
        hideMyViews();
        $("#view_des").html('<p>این دید با بازیابی سه جدول گالری و برگزاری و موزی با استفاده از پیوند روی شماره موزه و شماره گالری ایجاد شده است.<p>');
        $("#view_des").fadeIn();
        $("#view_content").html('');
        $("#vr14_btn").fadeIn();
    });


    $("#view_btn_15").on("click",function (){
        hideMyViews();
        $("#view_des").html('<p>این دید با بازیابی پنج جدول اثرهنری و گالری و برگزاری و موزه و پرسنل با استفاده از پیوند روی شماره گالری و شماره موزه ایجاد شده است.<p>');
        $("#view_des").fadeIn();
        $("#view_content").html('');
        $("#vr15_btn").fadeIn();
    });



});