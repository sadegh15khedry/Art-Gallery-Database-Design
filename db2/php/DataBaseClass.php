<?php

class DataBase{

    private $connection = null;
    private static $instance = null;


    private function __construct(){
        try {

            $server_name = 'SADEGH';
            $connection_info = array("database"=>"db2","CharacterSet" => "UTF-8");
            $this->connection = sqlsrv_connect($server_name,$connection_info);

            //$sql = "select * from art WHERE art_id=2";
            //$stm2 = sqlsrv_query ( $this->connection , $sql );
            //$rs = sqlsrv_fetch_array($stm2,SQLSRV_FETCH_ASSOC);
            /*
            if ($this->connection){
                //echo strval($rs['art_title']);
                //echo "<script type='text/javascript'>alert('conected');</script>";
            }
            else {
                echo "<script type='text/javascript'>alert('not conected');</script>";
            }
            */
        }
        catch (PDOException $e) {
            echo $e;
        }

    }

    public static function getInstance(){
        if (self::$instance == null) {
            self::$instance = new DataBase();
            return self::$instance;
        }
        else {
            return self::$instance;
        }
    }

    public function getCon(){
        return $this->connection;
    }

    public function closeConnection(){
        $this->connection = null;
    }


    public function getTrigFunction ($s_id){
        $sql = "";
        if ($s_id==='1'){
            $sql = "UPDATE [dbo].[art] SET art_title='ddd' WHERE art_id=7";
            $stm = sqlsrv_query ( $this->connection , $sql );
            $sql = "SELECT * FROM logs";
        }
        else if ($s_id==='2'){
            $sql = "DELETE FROM art WHERE art_id=7";
            $stm = sqlsrv_query ( $this->connection , $sql );
            $sql = "SELECT * FROM message";

        }
        else if ($s_id==='3'){
            $sql = "DELETE FROM artist WHERE artist_ssn_id=5555555555";
            $stm = sqlsrv_query ( $this->connection , $sql );
            $sql = "SELECT * FROM message";
        }
        else if ($s_id==='4'){
            $sql = "UPDATE artist SET artist_last_name='ddd' WHERE artist_ssn_id=5555555555";
            $stm = sqlsrv_query ( $this->connection , $sql );
            $sql = "SELECT * FROM logs";
        }
        else if ($s_id==='5'){
            $sql = "DELETE FROM visitation WHERE visitation_id=3";
            $stm = sqlsrv_query ( $this->connection , $sql );
            $sql = "SELECT * FROM message";
        }
        else if ($s_id==='6'){
            $sql = "DELETE FROM ownership WHERE ownership_id=7 ";
            $stm = sqlsrv_query ( $this->connection , $sql );
            $sql = "SELECT * FROM message";
        }
        else if ($s_id==='7'){
            $sql = "DELETE FROM holding WHERE holding_id=5 ";
            $stm = sqlsrv_query ( $this->connection , $sql );
            $sql = "SELECT * FROM message";
        }

        $stm = sqlsrv_query ( $this->connection , $sql );
        while ($rs = sqlsrv_fetch_array($stm,SQLSRV_FETCH_ASSOC)){
            $result[] = $rs;
        }
        return json_encode($result);
    }


    public function getFuncFunction($s_id,$x1){
        $sql = "";
        $result = array();
        if ($s_id==='1'){
            $sql = "SELECT * FROM f_get_visitor_ed_by_gallery_id('".$x1."') ";

        }

        else if ($s_id==='2'){
            $sql = "SELECT * FROM f_get_owner_by_art_id('".$x1."') ";

        }

        else if ($s_id==='3'){
            $sql = "SELECT * FROM f_get_worker_by_art_id ('".$x1."') ";

        }

        else if ($s_id==='4'){
            $sql = "SELECT * FROM f_get_art_by_museum_id('".$x1."') ";

        }
        else if ($s_id==='5'){
            $sql = "SELECT * FROM f_get_visitor_by_museum_id('".$x1."') ";

        }
        else if ($s_id==='6'){
            $sql = "SELECT * FROM f_get_writing_by_museum_id('".$x1."') ";

        }
        else if ($s_id==='7'){
            $sql = "SELECT * FROM f_owner_by_50() ";

        }
        else if ($s_id==='8'){
            $sql = "SELECT * FROM f_get_visitor_by_painting_id('".$x1."') ";

        }
        else if ($s_id==='9'){
            $sql = "SELECT * FROM f_get_owner_by_statue_id('".$x1."') ";

        }
        else if ($s_id==='10'){
            $sql = "SELECT * FROM f_get_artist_by_writing_id('".$x1."') ";

        }
        $stm = sqlsrv_query ( $this->connection , $sql );
        while ($rs = sqlsrv_fetch_array($stm,SQLSRV_FETCH_ASSOC)){
            $result[] = $rs;
        }
        return json_encode($result);

    }










    public function getSpFunction($s_id,$x1,$x2,$x3,$x4,$x5,$x6){
        $sql = "";
        $result = array();
        if ($s_id==='1'){
            $sql = "EXEC sp_gallery_by_occasion @A='".$x1."'";
            $stm = sqlsrv_query ( $this->connection , $sql );
            while ($rs = sqlsrv_fetch_array($stm,SQLSRV_FETCH_ASSOC)){
                $result[] = $rs;
            }
            return json_encode($result);

        }
        else if ($s_id==='2'){
            $sql = "EXEC sp_statue_insert @A='".$x1."', @B='".$x2."' , @C='".$x3."' ,@D='".$x4."' ,@E ='".$x5."' ";
            $stm = sqlsrv_query ( $this->connection , $sql );
            return $stm;
        }
        else if ($s_id==='3'){
            $sql = "EXEC sp_owner_insert @A='".$x1."', @B='".$x2."' , @C='".$x3."' ,@D='".$x4."' ,@E ='".$x5."' , @F ='".$x6."' ";
            $stm = sqlsrv_query ( $this->connection , $sql );
            return $stm;
        }
        else if ($s_id==='4'){
            $sql = "EXEC sp_museum_insert @A='".$x1."', @B='".$x2."' , @C='".$x3."' ,@D='".$x4."' ,@E ='".$x5."'";
            $stm = sqlsrv_query ( $this->connection , $sql );
            return $stm;
        }

        else if ($s_id==='5'){
            $sql = "EXEC sp_art_title_update @A='".$x1."', @B='".$x2."' ";
            $stm = sqlsrv_query ( $this->connection , $sql );
            return $stm;
        }

        else if ($s_id==='6'){
            $sql = "EXEC sp_get_worker_salary_more_1000 ";
            $stm = sqlsrv_query ( $this->connection , $sql );
            while ($rs = sqlsrv_fetch_array($stm,SQLSRV_FETCH_ASSOC)){
                $result[] = $rs;
            }
            return json_encode($result);
        }


        else if ($s_id==='7'){
            $sql = "EXEC sp_get_museum_by_worker @A='".$x1."' ";
            $stm = sqlsrv_query ( $this->connection , $sql );
            while ($rs = sqlsrv_fetch_array($stm,SQLSRV_FETCH_ASSOC)){
                $result[] = $rs;
            }
            return json_encode($result);
        }

        else if ($s_id==='8'){
            $sql = "EXEC sp_get_vistor_ED_by_gallery @A='".$x1."' ";
            $stm = sqlsrv_query ( $this->connection , $sql );
            while ($rs = sqlsrv_fetch_array($stm,SQLSRV_FETCH_ASSOC)){
                $result[] = $rs;
            }
            return json_encode($result);

        }

        else if ($s_id==='9'){
            $sql = "EXEC sp_get_writing_by_art_title @A='".$x1."' ";
            $stm = sqlsrv_query ( $this->connection , $sql );
            while ($rs = sqlsrv_fetch_array($stm,SQLSRV_FETCH_ASSOC)){
                $result[] = $rs;
            }
            return json_encode($result);
        }

        else if ($s_id==='10'){
            $sql = "EXEC sp_get_owner_by_writing_id @A='".$x1."'";
            $stm = sqlsrv_query ( $this->connection , $sql );
            while ($rs = sqlsrv_fetch_array($stm,SQLSRV_FETCH_ASSOC)){
                $result[] = $rs;
            }
            return json_encode($result);
        }


    }


    public function getViewFunction($v_id){
        $sql = "";
        $result = array();
        if ($v_id==='1'){
            $sql = "select * from v_art_artist";
        }
        else if ($v_id==='2'){
            $sql = "select * from v_art_gallery";
        }
        else if ($v_id==='3'){
            $sql = "select * from v_art_ownership_owner";
        }
        else if ($v_id==='4'){
            $sql = "select * from v_art_artist_ownership_owner";
        }
        else if ($v_id==='5'){
            $sql = "select * from v_art_ownership_owner_gallery";
        }
        else if ($v_id==='6'){
            $sql = "select * from v_art_painting_writing_statue";
        }
        else if ($v_id==='7'){
            $sql = "select * from v_art_gallery_holding_museum";
        }
        else if ($v_id==='8'){
            $sql = "select * from v_visitor_visitation_gallery_holding_museum";
        }
        else if ($v_id==='9'){
            $sql = "select * from v_visitor_visitation_gallery";
        }
        else if ($v_id==='10'){
            $sql = "select * from v_staff_museum";
        }
        else if ($v_id==='11'){
            $sql = "select * from v_art_painting";
        }
        else if ($v_id==='12'){
            $sql = "select * from v_art_statue";
        }
        else if ($v_id==='13'){
            $sql = "select * from v_art_writing";
        }
        else if ($v_id==='14'){
            $sql = "select * from v_gallery_holding_museum";
        }
        else if ($v_id==='15'){
            $sql = "select * from v_art_gallery_holding_museum_staff";
        }



        $stm = sqlsrv_query ( $this->connection , $sql );
        while ($rs = sqlsrv_fetch_array($stm,SQLSRV_FETCH_ASSOC)){
            $result[] = $rs;
        }

        return json_encode($result);

    }






    public function getQfunction($s_id,$x1,$x2,$x3,$x4,$x5,$x6,$x7,$x8,$x9,$x10,$x11,$x12){
        $sql = "";
        $result = array();
        if ($s_id==='1'){
            $sql = "SELECT * FROM [dbo].[art] where art_id='".$x1."' ";

        }
        else if ($s_id==='2'){
            $sql = "SELECT *FROM [dbo].[art] where art_title= '".$x1."' ";
        }
        else if ($s_id==='3'){
            $sql = "SELECT * FROM [dbo].[painting] where painting_art_id in ( 
                    select art_id FROM [dbo].[art] where art_title= '".$x1."' ) ";

        }
        else if ($s_id==='4'){
            $sql = "SELECT * FROM [dbo].[writing] where writing_art_id 
                      in (select art_id FROM [dbo].[art] where art_title= '".$x1."') ";

        }
        else if ($s_id==='5'){
            $sql = "SELECT * FROM [dbo].[statue] where statue_art_id IN (select art_id FROM [dbo].[art]
                                        where art_title= '".$x1."' )";

        }
        else if ($s_id==='6'){
            $sql = "SELECT *
                    FROM [dbo].[owner] where owner_ssn_id IN (SELECT ownership_owner_id FROM
                    [dbo].[ownership] WHERE ownership_art_id IN (SELECT art_id FROM [dbo].[art] 
                    WHERE art_gallery_id='".$x1."'))";
        }
        else if ($s_id==='7'){
            $sql = "SELECT * FROM [dbo].[staff] where staff_museum_id IN (SELECT holding_museum_id FROM
                    [dbo].[holding] WHERE holding_gallery_id IN (SELECT gallery_id FROM
                    [dbo].[gallery] WHERE gallery_id IN (SELECT art_gallery_id
                    FROM [dbo].[art] where art_title='".$x1."')))";
        }
        else if ($s_id==='8'){
            $sql = "SELECT * FROM [dbo].[art] where art_gallery_id IN (SELECT holding_gallery_id FROM [dbo].[holding]
                      WHERE holding_museum_id IN (SELECT museum_id FROM [dbo].[museum] WHERE museum_id='".$x1."'))";
        }
        else if ($s_id==='9'){
            $sql = "SELECT * FROM [dbo].[visitor] where visitor_ssn_id IN (SELECT visitation_visitor_id
                    FROM [dbo].[visitation] WHERE visitation_gallery_id IN (SELECT holding_gallery_id
                    FROM [dbo].[holding] WHERE holding_museum_id='".$x1."'))";
        }
        else if ($s_id==='10'){
            $sql = "SELECT * FROM [dbo].[painting] where painting_art_id IN (SELECT art_id FROM [dbo].[art]
                    WHERE art_gallery_id IN (SELECT holding_gallery_id FROM [dbo].[holding]WHERE holding_museum_id='".$x1."'))";
        }
        else if ($s_id==='11'){
            $sql = "SELECT * FROM [dbo].[writing] where writing_art_id IN (SELECT art_id FROM [dbo].[art]
                    WHERE art_gallery_id IN (SELECT holding_gallery_id FROM [dbo].[holding]
                    WHERE holding_museum_id='".$x1."'))";
        }
        else if ($s_id==='12'){
            $sql = "SELECT * FROM [dbo].[statue] where statue_art_id IN (SELECT art_id FROM [dbo].[art]
                    WHERE art_gallery_id IN (SELECT holding_gallery_id FROM [dbo].[holding]
                    WHERE holding_museum_id='".$x1."'))";
        }
        else if ($s_id==='13'){
            $sql = "SELECT * FROM [dbo].[owner] where owner_ssn_id IN (SELECT ownership_owner_id FROM
                    [dbo].[ownership] WHERE ownership_percentage>50)";
        }
        else if ($s_id==='14'){
            $sql = "SELECT * FROM [dbo].[gallery] where gallery_occasion='".$x1."'";
        }
        else if ($s_id==='15'){
            $sql = "SELECT * FROM [dbo].[visitor] where visitor_ssn_id IN (SELECT visitation_visitor_id
                    FROM [dbo].[visitation] WHERE visitation_gallery_id IN (SELECT art_gallery_id 
                    FROM [dbo].[art] WHERE art_painting_id='".$x1."' ))";
        }
        else if ($s_id==='16'){
            $sql = "SELECT * FROM [dbo].[owner] where owner_ssn_id IN (SELECT ownership_owner_id FROM
                    [dbo].[ownership] WHERE ownership_art_id IN (SELECT statue_art_id FROM
                    [dbo].[statue] WHERE statue_id='".$x1."'))";
        }
        else if ($s_id==='17'){
            $sql = "SELECT * FROM [dbo].[owner]where owner_ssn_id IN (SELECT ownership_owner_id FROM
                    [dbo].[ownership] WHERE ownership_art_id IN (SELECT painting_art_id FROM
                    [dbo].[painting] WHERE painting_id='".$x1."'))";
        }
        else if ($s_id==='18'){
            $sql = "SELECT * FROM [dbo].[owner] where owner_ssn_id IN (SELECT ownership_owner_id FROM
                    [dbo].[ownership] WHERE ownership_art_id IN (SELECT writing_art_id FROM
                    [dbo].[writing] WHERE writing_id='".$x1."'))";
        }
        else if ($s_id==='19'){
            $sql = "SELECT * FROM [dbo].[owner] where owner_ssn_id IN (SELECT ownership_owner_id FROM
                    [dbo].[ownership] WHERE ownership_art_id IN (SELECT art_id FROM [dbo].[art]
                    WHERE art_title='".$x1."'))";
        }
        else if ($s_id==='20'){
            $sql = "SELECT * FROM [dbo].[artist] where artist_ssn_id IN (SELECT art_artist_id FROM
                    [dbo].[art]WHERE art_title='".$x1."')";
        }
        else if ($s_id==='21'){
            $sql = "SELECT * FROM [dbo].[artist] where artist_ssn_id IN (SELECT art_artist_id FROM
                    [dbo].[art] WHERE art_id IN (SELECT statue_art_id FROM [dbo].[statue] WHERE statue_id='".$x1."'))";
        }
        else if ($s_id==='22'){
            $sql = "SELECT * FROM [dbo].[artist]where artist_ssn_id IN (SELECT art_artist_id FROM
                    [dbo].[art] WHERE art_id IN (SELECT painting_art_id FROM [dbo].[painting] WHERE painting_id='".$x1."'))";
        }
        else if ($s_id==='23'){
            $sql = "SELECT * FROM [dbo].[artist] where artist_ssn_id IN (SELECT art_artist_id FROM
                    [dbo].[art] WHERE art_id IN (SELECT writing_art_id FROM [dbo].[writing] WHERE writing_id='".$x1."'))";
        }
        else if ($s_id==='24'){
            $sql = "SELECT * FROM [dbo].[museum] where museum_id IN (SELECT staff_museum_id FROM [dbo].[staff] 
                    WHERE staff_last_name='".$x1."')";
        }
        else if ($s_id==='25'){
            $sql = "SELECT * FROM [dbo].[visitor]where visitor_ssn_id IN (SELECT visitation_visitor_id
                    FROM [dbo].[visitation] WHERE visitation_gallery_id='".$x1."')";
        }
        else if ($s_id==='26'){
            $sql = "SELECT * FROM [dbo].[staff] where staff_years_worked > 5";
        }
        else if ($s_id==='27'){
            $sql = "SELECT * FROM [dbo].[staff] where staff_salary > 1000";
        }
        else if ($s_id==='28'){
            $sql = "DELETE FROM [dbo].[art] WHERE art_id='".$x1."'";
            $stm = sqlsrv_query ( $this->connection , $sql );
            return $stm;
        }
        else if ($s_id==='29'){
            $sql = "DELETE FROM [dbo].[artist] WHERE artist_ssn_id='".$x1."'";
            $stm = sqlsrv_query ( $this->connection , $sql );
            return $stm;
        }
        else if ($s_id==='30'){
            $sql = "DELETE FROM [dbo].[painting] WHERE painting_id='".$x1."'";
            $stm = sqlsrv_query ( $this->connection , $sql );
            return $stm;
        }
        else if ($s_id==='31'){
            $sql = "DELETE FROM [dbo].[statue] WHERE statue_id='".$x1."'";
            $stm = sqlsrv_query ( $this->connection , $sql );
            return $stm;
        }
        else if ($s_id==='32'){
            $sql = "DELETE FROM [dbo].[writing] WHERE writing_id='".$x1."'";
            $stm = sqlsrv_query ( $this->connection , $sql );
            return $stm;
        }
        else if ($s_id==='33'){
            $sql = "INSERT INTO [dbo].[statue]
                    ([statue_art_id],[statue_height],[statue_length],[statue_width],[statue_material]) VALUES
                    ('".$x1."','".$x2."','".$x3."','".$x4."','".$x5."')";
            $stm = sqlsrv_query ( $this->connection , $sql );
            return $stm;
        }
        else if ($s_id==='34'){
            $sql = "INSERT INTO art VALUES
                    ('".$x1."','".$x2."','".$x3."', NULL , NULL , NULL , NULL 
                    , NULL , NULL , NULL , NULL , NULL )";
            $stm = sqlsrv_query ( $this->connection , $sql );
            return $stm;
        }
        else if ($s_id==='35'){
            $sql = "INSERT INTO artist VALUES(".$x1.",'".$x2."','".$x3."','".$x4."','".$x5."','".$x6."')";
            $stm = sqlsrv_query ( $this->connection , $sql );
            return $stm;
        }
        else if ($s_id==='36'){
            $sql = "INSERT INTO [dbo].[gallery]
                    ([gallery_name],[gallery_organizer],[gallery_occasion],[gallery_sponsor])
                    VALUES('".$x1."','".$x2."','".$x3."','".$x4."')";
            $stm = sqlsrv_query ( $this->connection , $sql );
            return $stm;
        }
        else if ($s_id==='37'){
            $sql = "INSERT INTO [dbo].[museum]
                    ([museum_founding_date] ,[museum_address] ,[museum_phone],[museum_owner],[musem_founder])
                    VALUES ('".$x1."','".$x2."','".$x3."','".$x4."','".$x5."')";
            $stm = sqlsrv_query ( $this->connection , $sql );
            return $stm;
        }
        else if ($s_id==='38'){
            $sql = "INSERT INTO [dbo].[owner]
                    ([owner_ssn_id],[owner_first_name],[owner_last_name],[owner_birth_date],[owner_father_name],[owner_job])
                    VALUES ('".$x1."','".$x2."','".$x3."','".$x4."','".$x5."','".$x6."')";
            $stm = sqlsrv_query ( $this->connection , $sql );
            return $stm;
        }
        else if ($s_id==='39'){
            $sql = "INSERT INTO [dbo].[painting]
                    ([painting_art_id],[painting_cavas_type],[painting_length],[painting_width],[painting_color_type])
                    VALUES('".$x1."','".$x2."','".$x3."','".$x4."','".$x5."')";
            $stm = sqlsrv_query ( $this->connection , $sql );
            return $stm;
        }
        else if ($s_id==='40'){
            $sql = "INSERT INTO staff
                    VALUES ('".$x1."','".$x2."','".$x3."','".$x4."','".$x5."','".$x6."',".$x7.",'".$x8."')";
            $stm = sqlsrv_query ( $this->connection , $sql );
            return $stm;
        }
        else if ($s_id==='41'){
            $sql = "INSERT INTO visitor
                    VALUES('".$x1."','".$x2."','".$x3."','".$x4."','".$x5."','".$x6."','".$x7."') ";
            $stm = sqlsrv_query ( $this->connection , $sql );
            return $stm;
        }
        else if ($s_id==='42'){
            $sql = "INSERT INTO [dbo].[writing] ([writing_art_id],[writing_length],[writing_width],[writing_style])
                    VALUES('".$x1."','".$x2."','".$x3."','".$x4."') ";
            $stm = sqlsrv_query ( $this->connection , $sql );
            return $stm;
        }
        else if ($s_id==='43'){
            $sql = "UPDATE [dbo].[art] SET art_title='".$x1."' WHERE art_id='".$x2."'";
            $stm = sqlsrv_query ( $this->connection , $sql );
            return $stm;
        }
        else if ($s_id==='44'){
            $sql = "UPDATE writing SET writing_length=".$x1." WHERE writing_id='".$x2."' ";
            $stm = sqlsrv_query ( $this->connection , $sql );
            return $stm;
        }
        else if ($s_id==='45'){
            $sql = "UPDATE painting SET painting_length=".$x1." WHERE painting_id='".$x2." '";
            $stm = sqlsrv_query ( $this->connection , $sql );
            return $stm;
        }

        $stm = sqlsrv_query ( $this->connection , $sql );
        while ($rs = sqlsrv_fetch_array($stm,SQLSRV_FETCH_ASSOC)){
            $result[] = $rs;
        }
        return json_encode($result);




    }





























/*

    public function login_check($email,$password){
        $databse = self::getInstance();
        $query_for_email = "select * from users WHERE user_email = '".$email."'";
        $full_query = "select * from users WHERE user_email = '".$email."'  and user_password = '".$password."'";
        $email_exist =$databse->connection->query($query_for_email);
        $full_result = $databse->connection->query($full_query);
        if ($full_result->rowCount()) {
            $userid = $databse->connection->query("select user_id from users WHERE user_email = '".$email."'");
            $row = $userid->fetch();
            return $row['user_id'];
        }
        else if ($email_exist->rowCount()){
            return "wrong password";
        }
        else
            return "wrong email and password";
    }





    public function signup($fname,$lname,$uname,$email,$password,$repassword){
        if ($password!=$repassword){
            return 'pass';
        }
        $databse = self::getInstance();
        $uname_query = "select * from users WHERE user_uname = '".$uname."'";
        $email_query = "select * from users WHERE user_email = '".$email."'";
        $full_query = "INSERT INTO users (user_id, user_fname, user_lname, user_uname, user_email, user_password) VALUES (NULL, '".$fname."', '".$lname."', '".$uname."', '".$email."', '".$password."');";

        $uname_results = $databse->connection->query($uname_query);
        $email_result =$databse->connection->query($email_query);
        if ($email_result->rowCount()){
            return "email";
        }
        else if ($uname_results->rowCount()){
            return "uname";
        }
        else {
         $databse->connection->query($full_query);
         $r = $databse->connection->query("select user_id from users WHERE user_email = '".$email."'");
         $row = $r->fetch();
         return $row['user_id'];
        }
    }
    public function addNewItem($seller_id, $seller_phone, $item_title, $item_cat, $item_des){

        $full_query = "INSERT INTO items (item_id, seller_id, seller_phone, item_cat, item_des, item_title) VALUES (NULL, '".$seller_id."', '".$seller_phone."', '".$item_cat."', '".$item_des."', '".$item_title."');";
        $databse = self::getInstance();
        $databse->connection->query($full_query);
        $r = $databse->connection->query("select item_id from items where seller_id='".$seller_id."' and seller_phone='".$seller_phone."' and item_cat='".$item_cat."' and item_des='".$item_des."' and item_title='".$item_title."'");
        $row = $r->fetch();
        return $row['item_id'];
    }


    public function getItem($item_id){
        $query = "select * from items WHERE item_id = '".$item_id."'";
        $databse = self::getInstance();
        $result = $databse->connection->query($query);
        return $result->fetch();
    }

    public function getSellerUname($seller_id){
        $query = "select * from users WHERE user_id = '".$seller_id."'";
        $databse = self::getInstance();
        $result = $databse->connection->query($query);
        return $result->fetch()['user_uname'];
    }







    public function getUsernameById($user_id){
        $databse = self::getInstance();
        $row = $databse->connection->query("select user_uname from users WHERE user_id = '".$user_id."'");
        return $row->fetch()['user_uname'];
    }

    public function getSectionContent($content_cat){
        $databse = self::getInstance();
        if ($content_cat=='0'){
            $query = "select * from items";
        }
        else{
            $query = "select * from items WHERE item_cat='".$content_cat."'";
        }
        $results = $databse->connection->query($query);
        return json_encode($results->fetchAll());
    }
*/
}
