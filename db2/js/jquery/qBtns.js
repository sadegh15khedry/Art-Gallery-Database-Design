
$(document).ready(function () {



    function showMyQ(msg,num) {
        var con = '<table class="table-bordered table table-responsive text-center">'
        $("#q_content").html('');
        if(num=='1' || num =='2' || num == '8') {
            var myData = JSON.parse(msg);
            console.log(myData);
            con = con +
                '<tr>' +
                '<th class="text-center">art_id</th>' +
                '<th class="text-center">art_title</th>' +
                '<th class="text-center">art_description</th>' +
                '</tr>';

            for (row in myData) {
                var id = myData[row]['art_id'].toString();
                var title = myData[row]['art_title'].toString();
                var desc = myData[row]['art_description'].toString();

                con = con + '<tr >' +
                    '<td>' + id + '</td>' +
                    '<td>' + title + '</td>' +
                    '<td>' + desc + '</td>' +

                    '</tr>';
            }
            con = con + '</table>';
            $("#q_content").append(con);
            $("#q_content").fadeIn();

        }

        else if (num=='3' || num=='10'){
            var myData = JSON.parse(msg);
            console.log(myData);
            var con = con +
                '<tr>'+
                '<th class="text-center">painting_id</th>' +
                '<th class="text-center">painting_cavas_type</th>' +
                '<th class="text-center">painting_color_type</th>' +
                '</tr>';

            for (row in myData) {

                var painting_id = myData[row]['painting_id'].toString();
                var painting_cavas_type = myData[row]['painting_cavas_type'].toString();
                var painting_color_type = myData[row]['painting_color_type'].toString();
                con = con + '<tr >' +
                    '<td>' + painting_id + '</td>' +
                    '<td>' + painting_cavas_type + '</td>' +
                    '<td>' + painting_color_type + '</td>' +
                    '</tr>';
            }
            con = con + '</table>';
            $("#q_content").append(con);
            $("#q_content").fadeIn();
        }

        else if (num=='4' || num=='11'){
            var myData = JSON.parse(msg);
            console.log(myData);
            con = con +
                '<tr>'+
                '<th class="text-center">writing_id</th>' +
                '<th class="text-center">writing_length</th>' +
                '<th class="text-center">writing_width</th>' +
                '<th class="text-center">writing_style</th>' +
                '</tr>';

            for (row in myData) {
                var writing_id = myData[row]['writing_id'].toString();
                var writing_length = myData[row]['writing_length'].toString();
                var writing_width = myData[row]['writing_width'].toString();
                var writing_style = myData[row]['writing_style'].toString();
                con = con + '<tr >' +
                    '<td>' + writing_id + '</td>' +
                    '<td>' + writing_length + '</td>' +
                    '<td>' + writing_width + '</td>' +
                    '<td>' + writing_style + '</td>' +
                    '</tr>';
            }
            con = con + '</table>';
            $("#q_content").append(con);
            $("#q_content").fadeIn();
        }
        else if (num=='5' || num=='12'){
            var myData = JSON.parse(msg);
            console.log(myData);
            var con = con +
                '<tr>'+
                '<th class="text-center">statue_id</th>' +
                '<th class="text-center">statue_material</th>' +
                '<th class="text-center">statue_length</th>' +
                '<th class="text-center">statue_width</th>' +
                '</tr>';

            for (row in myData) {
                var statue_id = myData[row]['statue_id'].toString();
                var statue_material = myData[row]['statue_material'].toString();
                var statue_length = myData[row]['statue_length'].toString();
                var statue_width = myData[row]['statue_width'].toString();

                con = con + '<tr >' +
                    '<td>' + statue_id + '</td>' +
                    '<td>' + statue_material + '</td>' +
                    '<td>' + statue_length + '</td>' +
                    '<td>' + statue_width + '</td>' +
                    '</tr>';
            }
            con = con + '</table>';
            $("#q_content").append(con);
            $("#q_content").fadeIn();

        }
        else if (num=='6' || num=='13' || num=='16'|| num=='17'|| num=='18'|| num=='19'){
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
            con = con + '</table>';
            $("#q_content").append(con);
            $("#q_content").fadeIn();

        }
        else if (num=='7' || num=='26'|| num=='27'){
            var myData = JSON.parse(msg);
            console.log(myData);
            con = con +
                '<tr><th class="text-center">staff_personal_id</th>' +
                '<th class="text-center">staff_ssn</th>' +
                '<th class="text-center">staff_first_name</th>'+
                '<th class="text-center">staff_last_name</th>'+
                '</tr>';

            for (row in myData) {
                var staff_personal_id = myData[row]['staff_personal_id'].toString();
                var staff_ssn = myData[row]['staff_ssn'].toString();
                var staff_first_name = myData[row]['staff_first_name'].toString();
                var staff_last_name = myData[row]['staff_last_name'].toString();

                con = con + '<tr >' +
                    '<td>' + staff_personal_id + '</td>' +
                    '<td>' + staff_ssn + '</td>' +
                    '<td>' + staff_first_name + '</td>' +
                    '<td>' + staff_last_name + '</td>' +
                    '</tr>';
            }
            con = con + '</table>';
            $("#q_content").append(con);
            $("#q_content").fadeIn();
        }
        else if (num=='9' || num=='15'|| num=='25'){
            var myData = JSON.parse(msg);
            console.log(msg);
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
            con = con + '</table>';
            $("#q_content").append(con);
            $("#q_content").fadeIn();
        }
        else if (num=='14'){
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
            $("#q_content").append(con);
            $("#q_content").fadeIn();
        }

        else if (num=='20' ||num=='21' ||num=='22' ||num=='23'){
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
            con = con + '</table>';
            $("#q_content").append(con);
            $("#q_content").fadeIn();
        }
        else if (num=='24'){
            var myData = JSON.parse(msg);
            console.log(myData);

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
            $("#q_content").append(con);
            $("#q_content").fadeIn();
        }
        else if (num=='28' ||num=='29' ||num=='30' ||num=='31' ||num=='32'||num=='33'||num=='34'||num=='35'||num=='36'
            ||num=='37'||num=='38'||num=='39'||num=='40'||num=='41'||num=='42'||num=='43'||num=='44'||num=='45'){
            console.log(msg);
            if(msg){
                con = "اجرا شد";
            }
            else {
                con = "انجام نشد";
            }
            $("#q_content").append(con);
            $("#q_content").fadeIn();
        }



    }

    //q ajax btns ----------------------------
    $("#qr1_btn").on("click",function (){
        var  i1 = $("#input_q1_1").val();
        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 1 , 'x1' : i1 , 'x2' : '', 'x3' : '', 'x4' : '', 'x5' : '',
                'x6' : '', 'x7' : '', 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'1');
            }
        });
    });

    $("#qr2_btn").on("click",function (){
        var  i1 = $("#input_q2_1").val();
        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 2 , 'x1' : i1 , 'x2' : '', 'x3' : '', 'x4' : '', 'x5' : '',
                'x6' : '', 'x7' : '', 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'2');
            }
        });
    });
    $("#qr3_btn").on("click",function (){
        var  i1 = $("#input_q3_1").val();
        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 3 , 'x1' : i1 , 'x2' : '', 'x3' : '', 'x4' : '', 'x5' : '',
                'x6' : '', 'x7' : '', 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'3');
            }
        });
    });
    $("#qr4_btn").on("click",function (){
        var  i1 = $("#input_q4_1").val();
        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 4 , 'x1' : i1 , 'x2' : '', 'x3' : '', 'x4' : '', 'x5' : '',
                'x6' : '', 'x7' : '', 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'4');
            }
        });
    });
    $("#qr5_btn").on("click",function (){
        var  i1 = $("#input_q5_1").val();
        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 5 , 'x1' : i1 , 'x2' : '', 'x3' : '', 'x4' : '', 'x5' : '',
                'x6' : '', 'x7' : '', 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'5');
            }
        });
    });
    $("#qr6_btn").on("click",function (){
        var  i1 = $("#input_q6_1").val();
        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 6 , 'x1' : i1 , 'x2' : '', 'x3' : '', 'x4' : '', 'x5' : '',
                'x6' : '', 'x7' : '', 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'6');
            }
        });
    });
    $("#qr7_btn").on("click",function (){
        var  i1 = $("#input_q7_1").val();
        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 7 , 'x1' : i1 , 'x2' : '', 'x3' : '', 'x4' : '', 'x5' : '',
                'x6' : '', 'x7' : '', 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'7');
            }
        });
    });
    $("#qr8_btn").on("click",function (){
        var  i1 = $("#input_q8_1").val();
        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 8 , 'x1' : i1 , 'x2' : '', 'x3' : '', 'x4' : '', 'x5' : '',
                'x6' : '', 'x7' : '', 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'8');
            }
        });
    });
    $("#qr9_btn").on("click",function (){
        var  i1 = $("#input_q9_1").val();
        alert(i1);
        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 9 , 'x1' : i1 , 'x2' : '', 'x3' : '', 'x4' : '', 'x5' : '',
                'x6' : '', 'x7' : '', 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'9');
            }
        });
    });
    $("#qr10_btn").on("click",function (){
        var  i1 = $("#input_q10_1").val();
        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 10 , 'x1' : i1 , 'x2' : '', 'x3' : '', 'x4' : '', 'x5' : '',
                'x6' : '', 'x7' : '', 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'10');
            }
        });
    });
    $("#qr11_btn").on("click",function (){
        var  i1 = $("#input_q11_1").val();
        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 11 , 'x1' : i1 , 'x2' : '', 'x3' : '', 'x4' : '', 'x5' : '',
                'x6' : '', 'x7' : '', 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'11');
            }
        });
    });
    $("#qr12_btn").on("click",function (){
        var  i1 = $("#input_q12_1").val();
        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 12 , 'x1' : i1 , 'x2' : '', 'x3' : '', 'x4' : '', 'x5' : '',
                'x6' : '', 'x7' : '', 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'12');
            }
        });
    });
    $("#qr13_btn").on("click",function (){
        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 13 , 'x1' : '' , 'x2' : '', 'x3' : '', 'x4' : '', 'x5' : '',
                'x6' : '', 'x7' : '', 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'13');
            }
        });
    });
    $("#qr14_btn").on("click",function (){
        var  i1 = $("#input_q14_1").val();
        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 14 , 'x1' : i1 , 'x2' : '', 'x3' : '', 'x4' : '', 'x5' : '',
                'x6' : '', 'x7' : '', 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'14');
            }
        });
    });
    $("#qr15_btn").on("click",function (){
        var  i1 = $("#input_q15_1").val();
        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 15 , 'x1' : i1 , 'x2' : '', 'x3' : '', 'x4' : '', 'x5' : '',
                'x6' : '', 'x7' : '', 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'15');
            }
        });
    });
    $("#qr16_btn").on("click",function (){
        var  i1 = $("#input_q16_1").val();
        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 16 , 'x1' : i1 , 'x2' : '', 'x3' : '', 'x4' : '', 'x5' : '',
                'x6' : '', 'x7' : '', 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'16');
            }
        });
    });
    $("#qr17_btn").on("click",function (){
        var  i1 = $("#input_q17_1").val();
        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 17 , 'x1' : i1 , 'x2' : '', 'x3' : '', 'x4' : '', 'x5' : '',
                'x6' : '', 'x7' : '', 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'17');
            }
        });
    });
    $("#qr18_btn").on("click",function (){
        var  i1 = $("#input_q18_1").val();
        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 18 , 'x1' : i1 , 'x2' : '', 'x3' : '', 'x4' : '', 'x5' : '',
                'x6' : '', 'x7' : '', 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'18');
            }
        });
    });
    $("#qr19_btn").on("click",function (){
        var  i1 = $("#input_q19_1").val();
        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 19 , 'x1' : i1 , 'x2' : '', 'x3' : '', 'x4' : '', 'x5' : '',
                'x6' : '', 'x7' : '', 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'19');
            }
        });
    });

    $("#qr20_btn").on("click",function (){
        var  i1 = $("#input_q20_1").val();
        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 20 , 'x1' : i1 , 'x2' : '', 'x3' : '', 'x4' : '', 'x5' : '',
                'x6' : '', 'x7' : '', 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'20');
            }
        });
    });
    $("#qr21_btn").on("click",function (){
        var  i1 = $("#input_q21_1").val();
        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 21 , 'x1' : i1 , 'x2' : '', 'x3' : '', 'x4' : '', 'x5' : '',
                'x6' : '', 'x7' : '', 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'21');
            }
        });
    });
    $("#qr22_btn").on("click",function (){
        var  i1 = $("#input_q22_1").val();
        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 22 , 'x1' : i1 , 'x2' : '', 'x3' : '', 'x4' : '', 'x5' : '',
                'x6' : '', 'x7' : '', 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'22');
            }
        });
    });
    $("#qr23_btn").on("click",function (){
        var  i1 = $("#input_q23_1").val();
        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 23 , 'x1' : i1 , 'x2' : '', 'x3' : '', 'x4' : '', 'x5' : '',
                'x6' : '', 'x7' : '', 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'23');
            }
        });
    });
    $("#qr24_btn").on("click",function (){
        var  i1 = $("#input_q24_1").val();
        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 24 , 'x1' : i1 , 'x2' : '', 'x3' : '', 'x4' : '', 'x5' : '',
                'x6' : '', 'x7' : '', 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'24');
            }
        });
    });
    $("#qr25_btn").on("click",function (){
        var  i1 = $("#input_q25_1").val();
        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 25 , 'x1' : i1 , 'x2' : '', 'x3' : '', 'x4' : '', 'x5' : '',
                'x6' : '', 'x7' : '', 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'25');
            }
        });
    });
    $("#qr26_btn").on("click",function (){
        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 26 , 'x1' : '' , 'x2' : '', 'x3' : '', 'x4' : '', 'x5' : '',
                'x6' : '', 'x7' : '', 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'26');
            }
        });
    });
    $("#qr27_btn").on("click",function (){
        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 27 , 'x1' : '' , 'x2' : '', 'x3' : '', 'x4' : '', 'x5' : '',
                'x6' : '', 'x7' : '', 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'27');
            }
        });
    });
    $("#qr28_btn").on("click",function (){
        var  i1 = $("#input_q28_1").val();
        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 28 , 'x1' : i1 , 'x2' : '', 'x3' : '', 'x4' : '', 'x5' : '',
                'x6' : '', 'x7' : '', 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'28');
            }
        });
    });
    $("#qr29_btn").on("click",function (){
        var  i1 = $("#input_q29_1").val();
        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 29 , 'x1' : i1 , 'x2' : '', 'x3' : '', 'x4' : '', 'x5' : '',
                'x6' : '', 'x7' : '', 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'29');
            }
        });
    });
    $("#qr30_btn").on("click",function (){
        var  i1 = $("#input_q30_1").val();
        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 30 , 'x1' : i1 , 'x2' : '', 'x3' : '', 'x4' : '', 'x5' : '',
                'x6' : '', 'x7' : '', 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'30');
            }
        });
    });
    $("#qr31_btn").on("click",function (){
        var  i1 = $("#input_q31_1").val();
        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 31 , 'x1' : i1 , 'x2' : '', 'x3' : '', 'x4' : '', 'x5' : '',
                'x6' : '', 'x7' : '', 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'31');
            }
        });
    });
    $("#qr32_btn").on("click",function (){
        var  i1 = $("#input_q32_1").val();
        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 32 , 'x1' : i1 , 'x2' : '', 'x3' : '', 'x4' : '', 'x5' : '',
                'x6' : '', 'x7' : '', 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'32');
            }
        });
    });
    $("#qr33_btn").on("click",function (){
        var  i1 = $("#input_q33_1").val();
        var  i2 = $("#input_q33_2").val();
        var  i3 = $("#input_q33_3").val();
        var  i4 = $("#input_q33_4").val();
        var  i5 = $("#input_q33_5").val();
        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 33 , 'x1' : i1 , 'x2' : i2 , 'x3' : i3 , 'x4' : i4 , 'x5' : i5,
                'x6' : '', 'x7' : '', 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'33');
            }
        });
    });
    $("#qr34_btn").on("click",function (){
        var  i1 = $("#input_q34_1").val();
        var  i2 = $("#input_q34_2").val();
        var  i3 = $("#input_q34_3").val();

        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 34 , 'x1' : i1 , 'x2' : i2, 'x3' : i3, 'x4' : '', 'x5' : '',
                'x6' : '', 'x7' : '', 'x8' : '' , 'x9' : '', 'x10' : '', 'x11' : '' , 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'34');
            }
        });
    });
    $("#qr35_btn").on("click",function (){
        var  i1 = $("#input_q35_1").val();
        var  i2 = $("#input_q35_2").val();
        var  i3 = $("#input_q35_3").val();
        var  i4 = $("#input_q35_4").val();
        var  i5 = $("#input_q35_6").val();
        var  i6 = $("#input_q35_6").val();
        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 35 , 'x1' : i1 , 'x2' : i2, 'x3' : i3, 'x4' : i4, 'x5' : i5,
                'x6' : i6 , 'x7' : '', 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'35');
            }
        });
    });
    $("#qr36_btn").on("click",function (){
        var  i1 = $("#input_q36_1").val();
        var  i2 = $("#input_q36_2").val();
        var  i3 = $("#input_q36_3").val();
        var  i4 = $("#input_q36_4").val();
        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 36 , 'x1' : i1 , 'x2' : i2, 'x3' : i3, 'x4' : i4, 'x5' : '',
                'x6' : '', 'x7' : '', 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'36');
            }
        });
    });
    $("#qr37_btn").on("click",function (){
        var  i1 = $("#input_q37_1").val();
        var  i2 = $("#input_q37_2").val();
        var  i3 = $("#input_q37_3").val();
        var  i4 = $("#input_q37_4").val();
        var  i5 = $("#input_q37_5").val();
        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 37 , 'x1' : i1 , 'x2' : i2, 'x3' : i3, 'x4' : i4, 'x5' : i5,
                'x6' : '', 'x7' : '', 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'37');
            }
        });
    });
    $("#qr38_btn").on("click",function (){
        var  i1 = $("#input_q38_1").val();
        var  i2 = $("#input_q38_2").val();
        var  i3 = $("#input_q38_3").val();
        var  i4 = $("#input_q38_4").val();
        var  i5 = $("#input_q38_5").val();
        var  i6 = $("#input_q38_6").val();
        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 38 , 'x1' : i1 , 'x2' : i2, 'x3' : i3, 'x4' : i4, 'x5' : i5,
                'x6' : i6, 'x7' : '', 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'38');
            }
        });
    });
    $("#qr39_btn").on("click",function (){
        var  i1 = $("#input_q39_1").val();
        var  i2 = $("#input_q39_2").val();
        var  i3 = $("#input_q39_3").val();
        var  i4 = $("#input_q39_4").val();
        var  i5 = $("#input_q39_5").val();
        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 39 , 'x1' : i1 , 'x2' : i2, 'x3' : i3, 'x4' : i4, 'x5' : i5,
                'x6' : '', 'x7' : '', 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'39');
            }
        });
    });
    $("#qr40_btn").on("click",function (){
        var  i1 = $("#input_q40_1").val();
        var  i2 = $("#input_q40_2").val();
        var  i3 = $("#input_q40_3").val();
        var  i4 = $("#input_q40_4").val();
        var  i5 = $("#input_q40_5").val();
        var  i6 = $("#input_q40_6").val();
        var  i7 = $("#input_q40_7").val();
        var  i8 = $("#input_q40_8").val();

        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 40 , 'x1' : i1 , 'x2' : i2, 'x3' : i3, 'x4' : i4, 'x5' : i5,
                'x6' : i6, 'x7' : i7, 'x8' : i8, 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'40');
            }
        });
    });
    $("#qr41_btn").on("click",function (){
        var  i1 = $("#input_q41_1").val();
        var  i2 = $("#input_q41_2").val();
        var  i3 = $("#input_q41_3").val();
        var  i4 = $("#input_q41_4").val();
        var  i5 = $("#input_q41_5").val();
        var  i6 = $("#input_q41_6").val();
        var  i7 = $("#input_q41_7").val();

        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 41 , 'x1' : i1 , 'x2' : i2, 'x3' : i3, 'x4' : i4, 'x5' : i5,
                'x6' : i6, 'x7' : i7, 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'41');
            }
        });
    });
    $("#qr42_btn").on("click",function (){
        var  i1 = $("#input_q42_1").val();
        var  i2 = $("#input_q42_2").val();
        var  i3 = $("#input_q42_3").val();
        var  i4 = $("#input_q42_4").val();
        var  i5 = $("#input_q42_5").val();
        var  i6 = $("#input_q42_6").val();
        var  i7 = $("#input_q42_7").val();

        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 42 , 'x1' : i1 , 'x2' : i2, 'x3' : i3, 'x4' : i4, 'x5' : i5,
                'x6' : i6, 'x7' : i7, 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'42');
            }
        });
    });
    $("#qr43_btn").on("click",function (){
        var  i1 = $("#input_q43_1").val();
        var  i2 = $("#input_q43_2").val();

        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 43 , 'x1' : i1 , 'x2' : i2, 'x3' : '', 'x4' : '', 'x5' : '',
                'x6' : '', 'x7' : '', 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'43');
            }
        });
    });
    $("#qr44_btn").on("click",function (){
        var  i1 = $("#input_q44_1").val();
        var  i2 = $("#input_q44_2").val();

        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 44 , 'x1' : i1 , 'x2' : i2, 'x3' : '', 'x4' : '', 'x5' : '',
                'x6' : '', 'x7' : '', 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'44');
            }
        });
    });
    $("#qr45_btn").on("click",function (){
        var  i1 = $("#input_q45_1").val();
        var  i2 = $("#input_q45_2").val();

        $.ajax({
            type: 'GET',
            url : '../php/q_ajax.php',
            data : {'c' : 45 , 'x1' : i1 , 'x2' : i2, 'x3' : '', 'x4' : '', 'x5' : '',
                'x6' : '', 'x7' : '', 'x8' : '', 'x9' : '', 'x10' : '', 'x11' : '', 'x12' : ''},
            success: function (msg) {
                showMyQ(msg,'45');
            }
        });
    });





    //q btns --------------------------------------------------------
    function hideMyQ() {
        $("#q_content").fadeOut();
        $("#q_content").html('');
        $("#q_des").fadeOut();
        $("#qr1_form").hide();
        $("#qr2_form").hide();
        $("#qr3_form").hide();
        $("#qr4_form").hide();
        $("#qr5_form").hide();
        $("#qr6_form").hide();
        $("#qr7_form").hide();
        $("#qr8_form").hide();
        $("#qr9_form").hide();
        $("#qr10_form").hide();
        $("#qr11_form").hide();
        $("#qr12_form").hide();
        $("#qr13_form").hide();
        $("#qr14_form").hide();
        $("#qr15_form").hide();
        $("#qr16_form").hide();
        $("#qr17_form").hide();
        $("#qr18_form").hide();
        $("#qr19_form").hide();
        $("#qr20_form").hide();
        $("#qr21_form").hide();
        $("#qr22_form").hide();
        $("#qr23_form").hide();
        $("#qr24_form").hide();
        $("#qr25_form").hide();
        $("#qr26_form").hide();
        $("#qr27_form").hide();
        $("#qr28_form").hide();
        $("#qr29_form").hide();
        $("#qr30_form").hide();
        $("#qr31_form").hide();
        $("#qr32_form").hide();
        $("#qr33_form").hide();
        $("#qr34_form").hide();
        $("#qr35_form").hide();
        $("#qr36_form").hide();
        $("#qr37_form").hide();
        $("#qr38_form").hide();
        $("#qr39_form").hide();
        $("#qr40_form").hide();
        $("#qr41_form").hide();
        $("#qr42_form").hide();
        $("#qr43_form").hide();
        $("#qr44_form").hide();
        $("#qr45_form").hide();
        $("#qr46_form").hide();
        $("#qr47_form").hide();
        $("#qr48_form").hide();
        $("#qr49_form").hide();
        $("#qr50_form").hide();
    }
    $("#q_btn_1").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p>بازیابی اثرهنری با استفاده از شماره اثر هنری<p>');
        $("#q_des").fadeIn();
        $("#qr1_form").fadeIn();
        $("#q_content").fadeIn();
    });


    $("#q_btn_2").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p> بازیابی اثرهنری با استفاده از نام اثرهنری<p>');
        $("#q_des").fadeIn();
        $("#qr2_form").fadeIn();
        $("#q_content").fadeIn();
    });

    $("#q_btn_3").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p>بازیابی نقاشی با استفاده از نام اثرهنری<p>');
        $("#q_des").fadeIn();
        $("#qr3_form").fadeIn();
        $("#q_content").fadeIn();
    });

    $("#q_btn_4").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p>بازیابی خطاطی با استفاده از نام اثرهنری<p>');
        $("#q_des").fadeIn();
        $("#qr4_form").fadeIn();
        $("#q_content").fadeIn();
    });

    $("#q_btn_5").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p>بازیابی مجسمه با استفاده از نام اثرهنری<p>');
        $("#q_des").fadeIn();
        $("#qr5_form").fadeIn();
        $("#q_content").fadeIn();
    });

    $("#q_btn_6").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p>بازیابی صاحبان اثرهنری ای که اثرهنری آنان در نمایشگاه در حال نمایش است<p>');
        $("#q_des").fadeIn();
        $("#qr6_form").fadeIn();
        $("#q_content").fadeIn();
    });

    $("#q_btn_7").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p>بازیابی نام کارکنانی که در موزه ی نمایش دهنده ی اثر هنری خاصی کار میکنند.<p>');
        $("#q_des").fadeIn();
        $("#qr7_form").fadeIn();
        $("#q_content").fadeIn();
    });

    $("#q_btn_8").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p>تمامی آثارهنری ای که در نمایشگاه های یک موزه ی خاص وجود دارند.<p>');
        $("#q_des").fadeIn();
        $("#qr8_form").fadeIn();
        $("#q_content").fadeIn();
    });


    $("#q_btn_9").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p>نام تمامی بازدیدکنندگانی که از نمایشگاه های یک موزه بازدید کرده اند<p>');
        $("#q_des").fadeIn();
        $("#qr9_form").fadeIn();
        $("#q_content").fadeIn();
    });

    $("#q_btn_10").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p>بازیابی نقاشی های یک موزه با استفاده از شماره موزه<p>');
        $("#q_des").fadeIn();
        $("#qr10_form").fadeIn();
        $("#q_content").fadeIn();
    });

    $("#q_btn_11").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p>بازیابی خطاطی های موجود در یک موزه با استفاده از شماره موزه<p>');
        $("#q_des").fadeIn();
        $("#qr11_form").fadeIn();
        $("#q_content").fadeIn();
    });


    $("#q_btn_12").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p>بازیابی مجسمه های یک موزه با استفاده از شماره موزه<p>');
        $("#q_des").fadeIn();
        $("#qr12_form").fadeIn();
        $("#q_content").fadeIn();
    });

    $("#q_btn_13").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p>نام خانوادگی مالکانی که بیش از 50 درص مالک یک اثرهنری هستند.<p>');
        $("#q_des").fadeIn();
        $("#qr13_form").fadeIn();
        $("#q_content").fadeIn();
    });

    $("#q_btn_14").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p>بازیابی گالری هایی که یک مناسبت برگزاری خاص داشته اند.<p>');
        $("#q_des").fadeIn();
        $("#qr14_form").fadeIn();
        $("#q_content").fadeIn();
    });

    $("#q_btn_15").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p>نام بازدیدکنندگانی که از یک نقاشی خاص بازدید کرده اند.<p>');
        $("#q_des").fadeIn();
        $("#qr15_form").fadeIn();
        $("#q_content").fadeIn();
    });

    $("#q_btn_16").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p>نام مالکان یک مجسمه با استفاده از شماره مجسمه<p>');
        $("#q_des").fadeIn();
        $("#qr16_form").fadeIn();
        $("#q_content").fadeIn();
    });

    $("#q_btn_17").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p>بازیابی نام مالکان یک نقاشی با استفاده از شماره نقاشی<p>');
        $("#q_des").fadeIn();
        $("#qr17_form").fadeIn();
        $("#q_content").fadeIn();
    });

    $("#q_btn_18").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p>بازیابی نام مالکان یک خطاطی با استفاده از شماره خطاطی<p>');
        $("#q_des").fadeIn();
        $("#qr18_form").fadeIn();
        $("#q_content").fadeIn();
    });


    $("#q_btn_19").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p>بازیابی نام مالکان یک اثرهنری با استفاده از نام اثرهنری<p>');
        $("#q_des").fadeIn();
        $("#qr19_form").fadeIn();
        $("#q_content").fadeIn();
    });

    $("#q_btn_20").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p>بازیابی نام خلق یک اثر هنری با استفاده از نام اثرهنری<p>');
        $("#q_des").fadeIn();
        $("#qr20_form").fadeIn();
        $("#q_content").fadeIn();
    });

    $("#q_btn_21").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p>بازیابی نام خالق یک مجسمه با استفاده از شماره مجسمه<p>');
        $("#q_des").fadeIn();
        $("#qr21_form").fadeIn();
        $("#q_content").fadeIn();
    });


    $("#q_btn_22").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p> بازیابی نام خالق یک نقاشی با استفاده از شماره نقاشی<p>');
        $("#q_des").fadeIn();
        $("#qr22_form").fadeIn();
        $("#q_content").fadeIn();
    });

    $("#q_btn_23").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p>بازیابی نام خالق یک خطاطی با استفاده از شماره خطاطی<p>');
        $("#q_des").fadeIn();
        $("#qr23_form").fadeIn();
        $("#q_content").fadeIn();
    });

    $("#q_btn_24").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p>بازیابی اطالعات یک موزه که یک کارمند خاص در آن کار میکند<p>');
        $("#q_des").fadeIn();
        $("#qr24_form").fadeIn();
        $("#q_content").fadeIn();
    });

    $("#q_btn_25").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p>بازیابی تحصیلات بازدیدکنندگان یک گالری با استفاده از شماره گالری<p>');
        $("#q_des").fadeIn();
        $("#qr25_form").fadeIn();
        $("#q_content").fadeIn();
    });



    $("#q_btn_26").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p>نام کارمندانی که سابقه ی کارشان بیشتر از 5 سال باشد.<p>');
        $("#q_des").fadeIn();
        $("#qr26_form").fadeIn();
        $("#q_content").fadeIn();
    });

    $("#q_btn_27").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p>نام کارمندانی که حقوقشان بیشتر از 1000 می باشد<p>');
        $("#q_des").fadeIn();
        $("#qr27_form").fadeIn();
        $("#q_content").fadeIn();
    });

    $("#q_btn_28").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p>حذف اثرهنری با استفاده از شماره اثرهنری<p>');
        $("#q_des").fadeIn();
        $("#qr28_form").fadeIn();
        $("#q_content").fadeIn();
    });


    $("#q_btn_29").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p>حذف هنرمند با استفاده از شماره<p>');
        $("#q_des").fadeIn();
        $("#qr29_form").fadeIn();
        $("#q_content").fadeIn();
    });

    $("#q_btn_30").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p>حذف نقاشی با استفاده از شماره نقاشی<p>');
        $("#q_des").fadeIn();
        $("#qr30_form").fadeIn();
        $("#q_content").fadeIn();
    });

    $("#q_btn_31").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p>حذف مجسمه با استفاده از شماره مجسمه<p>');
        $("#q_des").fadeIn();
        $("#qr31_form").fadeIn();
        $("#q_content").fadeIn();
    });


    $("#q_btn_32").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p>حذف خطاطی با استفاده از شماره خطاطی<p>');
        $("#q_des").fadeIn();
        $("#qr32_form").fadeIn();
        $("#q_content").fadeIn();
    });

    $("#q_btn_33").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p> درج در جدول مجسمه<p>');
        $("#q_des").fadeIn();
        $("#qr33_form").fadeIn();
        $("#q_content").fadeIn();
    });

    $("#q_btn_34").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p>درج در جدول اثرهنری<p>');
        $("#q_des").fadeIn();
        $("#qr34_form").fadeIn();
        $("#q_content").fadeIn();
    });

    $("#q_btn_35").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p>درج در جدول هنرمند<p>');
        $("#q_des").fadeIn();
        $("#qr35_form").fadeIn();
        $("#q_content").fadeIn();
    });

    $("#q_btn_36").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p>درج در جدول گالری<p>');
        $("#q_des").fadeIn();
        $("#qr36_form").fadeIn();
        $("#q_content").fadeIn();
    });

    $("#q_btn_37").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p>درج در جدول موزه<p>');
        $("#q_des").fadeIn();
        $("#qr37_form").fadeIn();
        $("#q_content").fadeIn();
    });

    $("#q_btn_38").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p>درج در جدول مالک<p>');
        $("#q_des").fadeIn();
        $("#qr38_form").fadeIn();
        $("#q_content").fadeIn();
    });


    $("#q_btn_39").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p>درج در جدول نقاشی<p>');
        $("#q_des").fadeIn();
        $("#qr39_form").fadeIn();
        $("#q_content").fadeIn();
    });

    $("#q_btn_40").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p>درج در جدول پرسنل<p>');
        $("#q_des").fadeIn();
        $("#qr40_form").fadeIn();
        $("#q_content").fadeIn();
    });

    $("#q_btn_41").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p>درج در جدول بازدیدکننده<p>');
        $("#q_des").fadeIn();
        $("#qr41_form").fadeIn();
        $("#q_content").fadeIn();
    });


    $("#q_btn_42").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p>درج در جدول خطاطی<p>');
        $("#q_des").fadeIn();
        $("#qr42_form").fadeIn();
        $("#q_content").fadeIn();
    });

    $("#q_btn_43").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p> به روزرسانی جدول اثرهنری<p>');
        $("#q_des").fadeIn();
        $("#qr43_form").fadeIn();
        $("#q_content").fadeIn();
    });

    $("#q_btn_44").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p>به روزرسانی جدول خطاطی<p>');
        $("#q_des").fadeIn();
        $("#qr44_form").fadeIn();
        $("#q_content").fadeIn();
    });

    $("#q_btn_45").on("click",function (){
        hideMyQ();
        $("#q_des").html('<p>به روزرسانی جدول نقاشی<p>');
        $("#q_des").fadeIn();
        $("#qr45_form").fadeIn();
        $("#q_content").fadeIn();
    });






});
