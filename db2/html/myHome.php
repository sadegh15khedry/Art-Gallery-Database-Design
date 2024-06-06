<?php

require_once "../php/DataBaseClass.php";
$ins = DataBase::getInstance();

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>موزه و نمایشگاه های هنری</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <link rel="stylesheet" href="../style/font-awesome-4.7.0/css/font-awesome.min.css">
    <script src="../js/src/jquery-3.2.1.min%20(1).js"></script>
    <script src="../js/jquery/viewBtns.js"></script>
    <!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3"></script>-->
    <link rel="stylesheet" href="../resourse/bootstrap-3.3.7-dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="../resourse/bootstrap-3.3.7-dist/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
    <link rel="stylesheet" href="../style/css/myHome.css">
</head>
<body>

<div class="container-fluid">
<!--------------------------------------------- header ------------------------------------------------------------------------------>
        <div id="headers" class="row">
                <div id="location" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#location" data-slide-to="0"></li>
                        <li data-target="#location" data-slide-to="1"></li>
                        <li data-target="#location" data-slide-to="2" class="active"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="item active">
                            <img class="img-responsive header-img" src="../imgs/3.jpg" width="100%">
                        </div>
                        <div class="item">
                            <img class="img-responsive header-img" src="../imgs/2.jpg" width="100%">
                        </div>
                        <div class="item">
                            <img class="img-responsive header-img" src="../imgs/1.jpg" width="100%">
                        </div>
                    </div>
                    <a class="right carousel-control" href="#location" data-slide="prev">
                        <span id="#gly_r" class="glyphicon glyphicon-chevron-right"></span>
                    </a>
                    <a class="left carousel-control" href="#location" data-slide="next">
                        <span id="#gly_l" class="glyphicon glyphicon-chevron-left"></span>
                    </a>
            </div>
        </div>

<!---------------------------------------------------- sec ----------------------------------------------------------------------------->
            <div class="row bg-primary">
                <div class="col-sm-10">
                    <div  id="sec_rapper">


                        <div class="my_div" id="view_div">
                            <h4>Views</h4>
                            <p>در این بخش می توانید دیدهای پیاده سازی شده را مشاهده کنید برای اجرا و مشاهده ی نتیجه بر روی قسمت مطلوب خود کلیک کنید.</p>
                            <button id="view_btn_1" href="#" class="btn btn-default">1=>v_art_artist </button>
                            <button id="view_btn_2" type="button" class="btn btn-default">2=>v_art_gallery</button>
                            <button id="view_btn_3" type="button" class="btn btn-default">3=>v_art_ownership_owner</button>
                            <button id="view_btn_4" type="button" class="btn btn-default">4=>v_art_artist_ownership_owner </button>
                            <button id="view_btn_5" type="button" class="btn btn-default">5=>v_art_ownership_owner_gallery </button>
                            <button id="view_btn_6" type="button" class="btn btn-default">6=>v_art_painting_writing_statue </button>
                            <button id="view_btn_7" type="button" class="btn btn-default">7=>v_art_gallery_holding_museum</button>
                            <button id="view_btn_8" type="button" class="btn btn-default">8=>v_visitor_visitation_gallery_holding_museum </button>
                            <button id="view_btn_9" type="button" class="btn btn-default">9=>v_visitor_visitation_gallery </button>
                            <button id="view_btn_10" type="button" class="btn btn-default">10=>v_staff_museum </button>
                            <button id="view_btn_11" type="button" class="btn btn-default">11=>v_art_painting</button>
                            <button id="view_btn_12" type="button" class="btn btn-default">12=>v_art_statue</button>
                            <button id="view_btn_13" type="button" class="btn btn-default">13=>v_art_writing </button>
                            <button id="view_btn_14" type="button" class="btn btn-default">14=>v_gallery_holding_museum</button>
                            <button id="view_btn_15" type="button" class="btn btn-default">15=>v_art_gallery_holding_museum_staff</button>
                            <div class="my_des" id="view_des"></div>
                            <button id="vr1_btn" type="submit" class="btn btn-default"> اجرا دید 1</button>
                            <button id="vr2_btn" type="submit" class="btn btn-default"> اجرا دید 2</button>
                            <button id="vr3_btn" type="submit" class="btn btn-default"> اجرا دید 3</button>
                            <button id="vr4_btn" type="submit" class="btn btn-default"> اجرا دید 4</button>
                            <button id="vr5_btn" type="submit" class="btn btn-default"> اجرا دید 5</button>
                            <button id="vr6_btn" type="submit" class="btn btn-default"> اجرا دید 6</button>
                            <button id="vr7_btn" type="submit" class="btn btn-default"> اجرا دید 7</button>
                            <button id="vr8_btn" type="submit" class="btn btn-default"> اجرا دید 8</button>
                            <button id="vr9_btn" type="submit" class="btn btn-default"> اجرا دید 9</button>
                            <button id="vr10_btn" type="submit" class="btn btn-default"> اجرا دید 10</button>
                            <button id="vr11_btn" type="submit" class="btn btn-default"> اجرا دید 11</button>
                            <button id="vr12_btn" type="submit" class="btn btn-default"> اجرا دید 12</button>
                            <button id="vr13_btn" type="submit" class="btn btn-default"> اجرا دید 13</button>
                            <button id="vr14_btn" type="submit" class="btn btn-default"> اجرا دید 14</button>
                            <button id="vr15_btn" type="submit" class="btn btn-default"> اجرا دید 15</button>
                            <div id="view_content"></div>
                            </div>


                            <div class="my_div" id="sp_div">
                                <h4>Stored Procedures</h4>
                                <p>در این بخش می توانید رویه های  پیاده سازی شده را مشاهده کنید برای اجرا و مشاهده ی نتیجه بر روی قسمت مطلوب خود کلیک کنید.</p>
                                <button id="sp_btn_1" type="button" class="btn btn-default">1=>sp_gallery_by_occasion</button>
                                <button id="sp_btn_2" type="button" class="btn btn-default">2=>sp_statue_insert</button>
                                <button id="sp_btn_3" type="button" class="btn btn-default">3=>sp_owner_insert</button>
                                <button id="sp_btn_4" type="button" class="btn btn-default">4=>sp_museum_insert</button>
                                <button id="sp_btn_5" type="button" class="btn btn-default">5=>sp_art_title_update</button>
                                <button id="sp_btn_6" type="button" class="btn btn-default">6=>sp_get_worker_salary_more_1000</button>
                                <button id="sp_btn_7" type="button" class="btn btn-default">7=>sp_get_museum_by_worker</button>
                                <button id="sp_btn_8" type="button" class="btn btn-default">8=>sp_get_vistor_ED_by_gallery</button>
                                <button id="sp_btn_9" type="button" class="btn btn-default">9=>sp_get_writing_by_art_title</button>
                                <button id="sp_btn_10" type="button" class="btn btn-default">10=>sp_get_owner_by_writing_id</button>
                                <div class="my_des" id="sp_des"></div>

                                <div id="spr1_form" class="form-group">
                                    <label for="input_sp1_1">نام مناسبت</label>
                                    <input id="input_sp1_1" class="form-control" type="text">
                                    <button id="spr1_btn" type="submit" class="btn btn-default">run sp1</button>
                                </div>

                                <div id="spr2_form" class="form-group">
                                    <label for="input_sp2_1">statue_art_id</label>
                                    <input id="input_sp2_1" class="form-control" type="text">
                                    <label for="input_sp2_2">statue_height</label>
                                    <input id="input_sp2_2" class="form-control" type="text">
                                    <label for="input_sp2_3">statue_length</label>
                                    <input id="input_sp2_3" class="form-control" type="text">
                                    <label for="input_sp2_4">statue_width</label>
                                    <input id="input_sp2_4" class="form-control" type="text">
                                    <label for="input_sp2_5">statue_material</label>
                                    <input id="input_sp2_5" class="form-control" type="text">
                                    <button id="spr2_btn" type="submit" class="btn btn-default">run sp2</button>
                                </div>

                                <div id="spr3_form" class="form-group">
                                    <label for="input_sp3_1">owner_ssn_id</label>
                                    <input id="input_sp3_1" class="form-control" type="text">
                                    <label for="input_sp3_2">owner_first_name</label>
                                    <input id="input_sp3_2" class="form-control" type="text">
                                    <label for="input_sp3_3">owner_last_name</label>
                                    <input id="input_sp3_3" class="form-control" type="text">
                                    <label for="input_sp3_4">owner_birth_date</label>
                                    <input id="input_sp3_4" class="form-control" type="text">
                                    <label for="input_sp3_5">owner_father_name</label>
                                    <input id="input_sp3_5" class="form-control" type="text">
                                    <label for="input_sp3_6">owner_job</label>
                                    <input id="input_sp3_6" class="form-control" type="text">
                                    <button id="spr3_btn" type="submit" class="btn btn-default">run sp3</button>
                                </div>

                                <div id="spr4_form" class="form-group">
                                    <label for="input_sp4_1">museum_founding_date</label>
                                    <input id="input_sp4_1" class="form-control" type="text">
                                    <label for="input_sp4_2">museum_address</label>
                                    <input id="input_sp4_2" class="form-control" type="text">
                                    <label for="input_sp4_3">museum_phone</label>
                                    <input id="input_sp4_3" class="form-control" type="text">
                                    <label for="input_sp4_4">museum_owner</label>
                                    <input id="input_sp4_4" class="form-control" type="text">
                                    <label for="input_sp4_5">musem_founder</label>
                                    <input id="input_sp4_5" class="form-control" type="text">
                                    <button id="spr4_btn" type="submit" class="btn btn-default"> run sp4</button>
                                </div>

                                <div id="spr5_form" class="form-group">
                                    <label for="input_sp5_1">new title</label>
                                    <input id="input_sp5_1" class="form-control" type="text">
                                    <label for="input_sp5_2">art_id</label>
                                    <input id="input_sp5_2" class="form-control" type="text">
                                    <button id="spr5_btn" type="submit" class="btn btn-default">run sp5</button>
                                </div>

                                <div id="spr6_form" class="form-group">
                                    <button id="spr6_btn" type="submit" class="btn btn-default">run sp6</button>
                                </div>

                                <div id="spr7_form" class="form-group">
                                    <label for="input_sp7_1">staff_personal_id</label>
                                    <input id="input_sp7_1" class="form-control" type="text">
                                    <button id="spr7_btn" type="submit" class="btn btn-default">run sp7</button>
                                </div>

                                <div id="spr8_form" class="form-group">
                                    <label for="input_sp8_1">gallery_id</label>
                                    <input id="input_sp8_1" class="form-control" type="text">
                                    <button id="spr8_btn" type="submit" class="btn btn-default">run sp8</button>
                                </div>

                                <div id="spr9_form" class="form-group">
                                    <label for="input_sp9_1">art_title</label>
                                    <input id="input_sp9_1" class="form-control" type="text">
                                    <button id="spr9_btn" type="submit" class="btn btn-default">run sp9</button>
                                </div>

                                <div id="spr10_form" class="form-group">
                                    <label for="input_sp10_1">writing_id</label>
                                    <input id="input_sp10_1" class="form-control" type="text">
                                    <button id="spr10_btn" type="submit" class="btn btn-default">run sp10</button>
                                </div>

                                <div id="sp_content"></div>
                            </div>

                            <div class="my_div" id="func_div">
                                <h4>Functions</h4>
                                <p>در این بخش می توانید توابع پیاده سازی شده را مشاهده کنید برای اجرا و مشاهده ی نتیجه بر روی قسمت مطلوب خود کلیک کنید.</p>
                                <button id="func_btn_1" type="button" class="btn btn-default">1=>f_get_visitor_ed_by_gallery_id </button>
                                <button id="func_btn_2" type="button" class="btn btn-default">2=>f_get_owner_by_art_id</button>
                                <button id="func_btn_3" type="button" class="btn btn-default">3=>f_get_worker_by_art_id</button>
                                <button id="func_btn_4" type="button" class="btn btn-default">4=>f_get_art_by_museum_id</button>
                                <button id="func_btn_5" type="button" class="btn btn-default">5=>f_get_visitor_by_museum_id</button>
                                <button id="func_btn_6" type="button" class="btn btn-default">6=>f_get_writing_by_museum_id</button>
                                <button id="func_btn_7" type="button" class="btn btn-default">7=>f_owner_by_50</button>
                                <button id="func_btn_8" type="button" class="btn btn-default">8=>f_get_visitor_by_painting_id</button>
                                <button id="func_btn_9" type="button" class="btn btn-default">9=>f_get_owner_by_statue_id</button>
                                <button id="func_btn_10" type="button" class="btn btn-default">10=>f_get_artist_by_writing_id</button>
                                <div class="my_des" id="func_des"></div>
                                <div id="funcr1_form" class="form-group">
                                    <label for="input_func1_1">gallery_id</label>
                                    <input id="input_func1_1" class="form-control" type="text">
                                    <button id="funcr1_btn" type="submit" class="btn btn-default">run func1</button>
                                </div>
                                <div id="funcr2_form" class="form-group">
                                    <label for="input_func2_1">art_id</label>
                                    <input id="input_func2_1" class="form-control" type="text">
                                    <button id="funcr2_btn" type="submit" class="btn btn-default">run func2</button>
                                </div>
                                <div id="funcr3_form" class="form-group">
                                    <label for="input_func3_1">art_id</label>
                                    <input id="input_func3_1" class="form-control" type="text">
                                    <button id="funcr3_btn" type="submit" class="btn btn-default">run func3</button>
                                </div>
                                <div id="funcr4_form" class="form-group">
                                    <label for="input_func4_1">musem_id</label>
                                    <input id="input_func4_1" class="form-control" type="text">
                                    <button id="funcr4_btn" type="submit" class="btn btn-default">run func4</button>
                                </div>
                                <div id="funcr5_form" class="form-group">
                                    <label for="input_func5_1">museum_id</label>
                                    <input id="input_func5_1" class="form-control" type="text">
                                    <button id="funcr5_btn" type="submit" class="btn btn-default">run func5</button>
                                </div>
                                <div id="funcr6_form" class="form-group">
                                    <label for="input_func6_1">museum_id</label>
                                    <input id="input_func6_1" class="form-control" type="text">
                                    <button id="funcr6_btn" type="submit" class="btn btn-default">run func6</button>
                                </div>
                                <div id="funcr7_form" class="form-group">
                                    <button id="funcr7_btn" type="submit" class="btn btn-default">run func7</button>
                                </div>
                                <div id="funcr8_form" class="form-group">
                                    <label for="input_func8_1">painting_id</label>
                                    <input id="input_func8_1" class="form-control" type="text">
                                    <button id="funcr8_btn" type="submit" class="btn btn-default">run func8</button>
                                </div>
                                <div id="funcr9_form" class="form-group">
                                    <label for="input_func9_1">statue_id</label>
                                    <input id="input_func9_1" class="form-control" type="text">
                                    <button id="funcr9_btn" type="submit" class="btn btn-default">run func9</button>
                                </div>
                                <div id="funcr10_form" class="form-group">
                                    <label for="input_func10_1">writing_id</label>
                                    <input id="input_func10_1" class="form-control" type="text">
                                    <button id="funcr10_btn" type="submit" class="btn btn-default">run func10</button>
                                </div>
                                <div id="func_content"></div>
                            </div>

                            <div class="my_div" id="trig_div">
                                <h4>Triggers</h4>
                                <p>در این بخش می توانید تریگرهای پیاده سازی شده را مشاهده کنید برای اجرا و مشاهده ی نتیجه بر روی قسمت مطلوب خود کلیک کنید.</p>
                                <button id="trig_btn_1" type="button" class="btn btn-default">1=>trigger_art_update</button>
                                <button id="trig_btn_2" type="button" class="btn btn-default">2=>trigger_art_delete</button>
                                <button id="trig_btn_3" type="button" class="btn btn-default">3=>trigger_artist_delete </button>
                                <button id="trig_btn_4" type="button" class="btn btn-default">4=>trigger_artist_update</button>
                                <button id="trig_btn_5" type="button" class="btn btn-default">5=>trigger_visitation_delete</button>
                                <button id="trig_btn_6" type="button" class="btn btn-default">6=>trigger_ownership_delete</button>
                                <button id="trig_btn_7" type="button" class="btn btn-default">7=>trigger_holding_delete</button>
                                <button id="trig_btn_8" type="button" class="btn btn-default">8=>trigger_museum_update</button>
                                <button id="trig_btn_9" type="button" class="btn btn-default">9=>trigger_gallery_update</button>
                                <button id="trig_btn_10" type="button" class="btn btn-default">10=>trigger_visitor_update</button>
                                <div class="my_des" id="trig_des"></div>
                                <div id="trigr1_form" class="form-group">
                                    <button id="trigr1_btn" type="submit" class="btn btn-default">trig1 test</button>
                                </div>
                                <div id="trigr2_form" class="form-group">
                                    <button id="trigr2_btn" type="submit" class="btn btn-default">trig2 test</button>
                                </div>
                                <div id="trigr3_form" class="form-group">
                                    <button id="trigr3_btn" type="submit" class="btn btn-default">trig3 test</button>
                                </div>
                                <div id="trigr4_form" class="form-group">
                                    <button id="trigr4_btn" type="submit" class="btn btn-default">trig4 test</button>
                                </div>
                                <div id="trigr5_form" class="form-group">
                                    <button id="trigr5_btn" type="submit" class="btn btn-default">trig5 test</button>
                                </div>
                                <div id="trigr6_form" class="form-group">
                                    <button id="trigr6_btn" type="submit" class="btn btn-default">trig6 test</button>
                                </div>
                                <div id="trigr7_form" class="form-group">
                                    <button id="trigr7_btn" type="submit" class="btn btn-default">trig7 test</button>
                                </div>
                                <div id="trigr8_form" class="form-group">
                                    <button id="trigr8_btn" type="submit" class="btn btn-default">trig8 test</button>
                                </div>
                                <div id="trigr9_form" class="form-group">
                                    <button id="trigr9_btn" type="submit" class="btn btn-default">trig9 test</button>
                                </div>
                                <div id="trigr10_form" class="form-group">
                                    <button id="trigr10_btn" type="submit" class="btn btn-default">trig10 test</button>
                                </div>
                                <div id="trig_content"></div>
                            </div>

                            <div class="my_div" id="q_div">
                                <h4>Queries</h4>
                                <p>در این بخش می توانید کوئری های پیاده سازی شده را مشاهده کنید برای اجرا و مشاهده ی نتیجه بر روی قسمت مطلوب خود کلیک کنید. </p>
                                <button id="q_btn_1" type="button" class="btn btn-default">q1</button>
                                <button id="q_btn_2" type="button" class="btn btn-default">q2</button>
                                <button id="q_btn_3" type="button" class="btn btn-default">q3 </button>
                                <button id="q_btn_4" type="button" class="btn btn-default">q4</button>
                                <button id="q_btn_5" type="button" class="btn btn-default">q5</button>
                                <button id="q_btn_6" type="button" class="btn btn-default">q6</button>
                                <button id="q_btn_7" type="button" class="btn btn-default">q7</button>
                                <button id="q_btn_8" type="button" class="btn btn-default">q8</button>
                                <button id="q_btn_9" type="button" class="btn btn-default">q9</button>
                                <button id="q_btn_10" type="button" class="btn btn-default">q10</button>
                                <button id="q_btn_11" type="button" class="btn btn-default">q11</button>
                                <button id="q_btn_12" type="button" class="btn btn-default">q12</button>
                                <button id="q_btn_13" type="button" class="btn btn-default">q13 </button>
                                <button id="q_btn_14" type="button" class="btn btn-default">q14</button>
                                <button id="q_btn_15" type="button" class="btn btn-default">q15</button>
                                <button id="q_btn_16" type="button" class="btn btn-default">q16</button>
                                <button id="q_btn_17" type="button" class="btn btn-default">q17</button>
                                <button id="q_btn_18" type="button" class="btn btn-default">q18</button>
                                <button id="q_btn_19" type="button" class="btn btn-default">q19</button>
                                <button id="q_btn_20" type="button" class="btn btn-default">q20</button>
                                <button id="q_btn_21" type="button" class="btn btn-default">q21</button>
                                <button id="q_btn_22" type="button" class="btn btn-default">q22</button>
                                <button id="q_btn_23" type="button" class="btn btn-default">q23</button>
                                <button id="q_btn_24" type="button" class="btn btn-default">q24</button>
                                <button id="q_btn_25" type="button" class="btn btn-default">q25</button>
                                <button id="q_btn_26" type="button" class="btn btn-default">q26</button>
                                <button id="q_btn_27" type="button" class="btn btn-default">q27</button>
                                <button id="q_btn_28" type="button" class="btn btn-default">q28</button>
                                <button id="q_btn_29" type="button" class="btn btn-default">q29</button>
                                <button id="q_btn_30" type="button" class="btn btn-default">q30</button>
                                <button id="q_btn_31" type="button" class="btn btn-default">q31</button>
                                <button id="q_btn_32" type="button" class="btn btn-default">q32</button>
                                <button id="q_btn_33" type="button" class="btn btn-default">q33</button>
                                <button id="q_btn_34" type="button" class="btn btn-default">q34</button>
                                <button id="q_btn_35" type="button" class="btn btn-default">q35</button>
                                <button id="q_btn_36" type="button" class="btn btn-default">q36</button>
                                <button id="q_btn_37" type="button" class="btn btn-default">q37</button>
                                <button id="q_btn_38" type="button" class="btn btn-default">q38</button>
                                <button id="q_btn_39" type="button" class="btn btn-default">q39</button>
                                <button id="q_btn_40" type="button" class="btn btn-default">q40</button>
                                <button id="q_btn_41" type="button" class="btn btn-default">q41</button>
                                <button id="q_btn_42" type="button" class="btn btn-default">q42</button>
                                <button id="q_btn_43" type="button" class="btn btn-default">q43</button>
                                <button id="q_btn_44" type="button" class="btn btn-default">q44</button>
                                <button id="q_btn_45" type="button" class="btn btn-default">q45</button>

                                <div class="my_des" id="q_des"></div>


                                <div id="qr1_form" class="form-group">
                                    <label for="input_q1_1">art_id</label>
                                    <input id="input_q1_1" class="form-control" type="text">
                                    <button id="qr1_btn" type="submit" class="btn btn-default">run q1</button>
                                </div>
                                <div id="qr2_form" class="form-group">
                                    <label for="input_q2_1">art_title</label>
                                    <input id="input_q2_1" class="form-control" type="text">
                                    <button id="qr2_btn" type="submit" class="btn btn-default">run q2</button>
                                </div>
                                <div id="qr3_form" class="form-group">
                                    <label for="input_q3_1">art_title</label>
                                    <input id="input_q3_1" class="form-control" type="text">
                                    <button id="qr3_btn" type="submit" class="btn btn-default">run q3</button>
                                </div>
                                <div id="qr4_form" class="form-group">
                                    <label for="input_q4_1">art_title</label>
                                    <input id="input_q4_1" class="form-control" type="text">
                                    <button id="qr4_btn" type="submit" class="btn btn-default">run q4</button>
                                </div>
                                <div id="qr5_form" class="form-group">
                                    <label for="input_q5_1">art_title</label>
                                    <input id="input_q5_1" class="form-control" type="text">
                                    <button id="qr5_btn" type="submit" class="btn btn-default">run q5</button>
                                </div>
                                <div id="qr6_form" class="form-group">
                                    <label for="input_q6_1">art_gallery_id</label>
                                    <input id="input_q6_1" class="form-control" type="text">
                                    <button id="qr6_btn" type="submit" class="btn btn-default">run q6</button>
                                </div>
                                <div id="qr7_form" class="form-group">
                                    <label for="input_q7_1">art_title</label>
                                    <input id="input_q7_1" class="form-control" type="text">
                                    <button id="qr7_btn" type="submit" class="btn btn-default">run q7</button>
                                </div>
                                <div id="qr8_form" class="form-group">
                                    <label for="input_q8_1">museum_id</label>
                                    <input id="input_q8_1" class="form-control" type="text">
                                    <button id="qr8_btn" type="submit" class="btn btn-default">run q8</button>
                                </div>
                                <div id="qr9_form" class="form-group">
                                    <label for="input_q9_1">museum_id</label>
                                    <input id="input_q9_1" class="form-control" type="text">
                                    <button id="qr9_btn" type="submit" class="btn btn-default">run q9</button>
                                </div>
                                <div id="qr10_form" class="form-group">
                                    <label for="input_q10_1">museum_id</label>
                                    <input id="input_q10_1" class="form-control" type="text">
                                    <button id="qr10_btn" type="submit" class="btn btn-default">run q10</button>
                                </div>
                                <div id="qr11_form" class="form-group">
                                    <label for="input_q11_1">museum_id</label>
                                    <input id="input_q11_1" class="form-control" type="text">
                                    <button id="qr11_btn" type="submit" class="btn btn-default">run q11</button>
                                </div>
                                <div id="qr12_form" class="form-group">
                                    <label for="input_q12_1">museum_id</label>
                                    <input id="input_q12_1" class="form-control" type="text">
                                    <button id="qr12_btn" type="submit" class="btn btn-default">run q12</button>
                                </div>
                                <div id="qr13_form" class="form-group">
                                    <button id="qr13_btn" type="submit" class="btn btn-default">run q13</button>
                                </div>
                                <div id="qr14_form" class="form-group">
                                    <label for="input_q14_1">gallery_occasion</label>
                                    <input id="input_q14_1" class="form-control" type="text">
                                    <button id="qr14_btn" type="submit" class="btn btn-default">run q14</button>
                                </div>
                                <div id="qr15_form" class="form-group">
                                    <label for="input_q15_1">art_painting_id</label>
                                    <input id="input_q15_1" class="form-control" type="text">
                                    <button id="qr15_btn" type="submit" class="btn btn-default">run q15</button>
                                </div>
                                <div id="qr16_form" class="form-group">
                                    <label for="input_q16_1">statue_id</label>
                                    <input id="input_q16_1" class="form-control" type="text">
                                    <button id="qr16_btn" type="submit" class="btn btn-default">run q16</button>
                                </div>
                                <div id="qr17_form" class="form-group">
                                    <label for="input_q17_1">painting_id</label>
                                    <input id="input_q17_1" class="form-control" type="text">
                                    <button id="qr17_btn" type="submit" class="btn btn-default">run q17</button>
                                </div>
                                <div id="qr18_form" class="form-group">
                                    <label for="input_q18_1">writing_id</label>
                                    <input id="input_q18_1" class="form-control" type="text">
                                    <button id="qr18_btn" type="submit" class="btn btn-default">run q18</button>
                                </div>
                                <div id="qr19_form" class="form-group">
                                    <label for="input_q19_1">art_title</label>
                                    <input id="input_q19_1" class="form-control" type="text">
                                    <button id="qr19_btn" type="submit" class="btn btn-default">run q19</button>
                                </div>
                                <div id="qr20_form" class="form-group">
                                    <label for="input_q20_1">art_title</label>
                                    <input id="input_q20_1" class="form-control" type="text">
                                    <button id="qr20_btn" type="submit" class="btn btn-default">run q20</button>
                                </div>
                                <div id="qr21_form" class="form-group">
                                    <label for="input_q21_1">statue_id</label>
                                    <input id="input_q21_1" class="form-control" type="text">
                                    <button id="qr21_btn" type="submit" class="btn btn-default">run q21</button>
                                </div>
                                <div id="qr22_form" class="form-group">
                                    <label for="input_q22_1">painting_id</label>
                                    <input id="input_q22_1" class="form-control" type="text">
                                    <button id="qr22_btn" type="submit" class="btn btn-default">run q22</button>
                                </div>
                                <div id="qr23_form" class="form-group">
                                    <label for="input_q23_1">writing_id</label>
                                    <input id="input_q23_1" class="form-control" type="text">
                                    <button id="qr23_btn" type="submit" class="btn btn-default">run q23</button>
                                </div>
                                <div id="qr24_form" class="form-group">
                                    <label for="input_q24_1">staff_last_name</label>
                                    <input id="input_q24_1" class="form-control" type="text">
                                    <button id="qr24_btn" type="submit" class="btn btn-default">run q24</button>
                                </div>
                                <div id="qr25_form" class="form-group">
                                    <label for="input_q25_1">visitation_gallery_id</label>
                                    <input id="input_q25_1" class="form-control" type="text">
                                    <button id="qr25_btn" type="submit" class="btn btn-default">run q25</button>
                                </div>
                                <div id="qr26_form" class="form-group">
                                    <button id="qr26_btn" type="submit" class="btn btn-default">run q26</button>
                                </div>
                                <div id="qr27_form" class="form-group">
                                    <button id="qr27_btn" type="submit" class="btn btn-default">run q27</button>
                                </div>
                                <div id="qr28_form" class="form-group">
                                    <label for="input_q28_1">art_id</label>
                                    <input id="input_q28_1" class="form-control" type="text">
                                    <button id="qr28_btn" type="submit" class="btn btn-default">run q28</button>
                                </div>
                                <div id="qr29_form" class="form-group">
                                    <label for="input_q29_1">artist_ssn_id</label>
                                    <input id="input_q29_1" class="form-control" type="text">
                                    <button id="qr29_btn" type="submit" class="btn btn-default">run q29</button>
                                </div>
                                <div id="qr30_form" class="form-group">
                                    <label for="input_q30_1">painting_id</label>
                                    <input id="input_q30_1" class="form-control" type="text">
                                    <button id="qr30_btn" type="submit" class="btn btn-default">run q30</button>
                                </div>
                                <div id="qr31_form" class="form-group">
                                    <label for="input_q31_1">statue_id</label>
                                    <input id="input_q31_1" class="form-control" type="text">
                                    <button id="qr31_btn" type="submit" class="btn btn-default">run q31</button>
                                </div>
                                <div id="qr32_form" class="form-group">
                                    <label for="input_q32_1">writing_id</label>
                                    <input id="input_q32_1" class="form-control" type="text">
                                    <button id="qr32_btn" type="submit" class="btn btn-default">run q32</button>
                                </div>
                                <div id="qr33_form" class="form-group">
                                    <label for="input_q33_1">statue_art_id</label>
                                    <input id="input_q33_1" class="form-control" type="text">
                                    <label for="input_q33_2">statue_height</label>
                                    <input id="input_q33_2" class="form-control" type="text">
                                    <label for="input_q33_3">statue_length</label>
                                    <input id="input_q33_3" class="form-control" type="text">
                                    <label for="input_q33_4">statue_width</label>
                                    <input id="input_q33_4" class="form-control" type="text">
                                    <label for="input_q33_5">statue_material</label>
                                    <input id="input_q33_5" class="form-control" type="text">
                                    <button id="qr33_btn" type="submit" class="btn btn-default">run q33</button>
                                </div>
                                <div id="qr34_form" class="form-group">
                                    <label for="input_q34_1">art_title</label>
                                    <input id="input_q34_1" class="form-control" type="text">
                                    <label for="input_q34_2">art_description</label>
                                    <input id="input_q34_2" class="form-control" type="text">
                                    <label for="input_q34_3">art_style</label>
                                    <input id="input_q34_3" class="form-control" type="text">
                                    <button id="qr34_btn" type="submit" class="btn btn-default">run q34</button>
                                </div>
                                <div id="qr35_form" class="form-group">
                                    <label for="input_q35_1">artist_ssn_id</label>
                                    <input id="input_q35_1" class="form-control" type="text">
                                    <label for="input_q35_2">artist_first_name</label>
                                    <input id="input_q35_2" class="form-control" type="text">
                                    <label for="input_q35_3">artist_last_name</label>
                                    <input id="input_q35_3" class="form-control" type="text">
                                    <label for="input_q35_4">artist_deth_date</label>
                                    <input id="input_q35_4" class="form-control" type="text">
                                    <label for="input_q35_5">artist_birth_place</label>
                                    <input id="input_q35_5" class="form-control" type="text">
                                    <label for="input_q35_6">artist_style</label>
                                    <input id="input_q35_6" class="form-control" type="text">
                                    <button id="qr35_btn" type="submit" class="btn btn-default">run q35</button>
                                </div>
                                <div id="qr36_form" class="form-group">
                                    <label for="input_q36_1">gallery_name</label>
                                    <input id="input_q36_1" class="form-control" type="text">
                                    <label for="input_q36_2">gallery_organizer</label>
                                    <input id="input_q36_2" class="form-control" type="text">
                                    <label for="input_q36_3">gallery_occasion</label>
                                    <input id="input_q36_3" class="form-control" type="text">
                                    <label for="input_q36_4">gallery_sponsor</label>
                                    <input id="input_q36_4" class="form-control" type="text">
                                    <button id="qr36_btn" type="submit" class="btn btn-default">run q36</button>
                                </div>
                                <div id="qr37_form" class="form-group">
                                    <label for="input_q37_1">museum_founding_date</label>
                                    <input id="input_q37_1" class="form-control" type="text">
                                    <label for="input_q37_2">museum_address</label>
                                    <input id="input_q37_2" class="form-control" type="text">
                                    <label for="input_q37_3">museum_phone</label>
                                    <input id="input_q37_3" class="form-control" type="text">
                                    <label for="input_q37_4">museum_owner</label>
                                    <input id="input_q37_4" class="form-control" type="text">
                                    <label for="input_q37_5">musem_founder</label>
                                    <input id="input_q37_5" class="form-control" type="text">
                                    <button id="qr37_btn" type="submit" class="btn btn-default">run q37</button>
                                </div>
                                <div id="qr38_form" class="form-group">
                                    <label for="input_q38_1">owner_ssn_id</label>
                                    <input id="input_q38_1" class="form-control" type="text">
                                    <label for="input_q38_2">owner_first_name</label>
                                    <input id="input_q38_2" class="form-control" type="text">
                                    <label for="input_q38_3">owner_last_name</label>
                                    <input id="input_q38_3" class="form-control" type="text">
                                    <label for="input_q38_4">owner_birth_date</label>
                                    <input id="input_q38_4" class="form-control" type="text">
                                    <label for="input_q38_5">owner_father_name</label>
                                    <input id="input_q38_5" class="form-control" type="text">
                                    <label for="input_q38_6">owner_job</label>
                                    <input id="input_q38_6" class="form-control" type="text">
                                    <button id="qr38_btn" type="submit" class="btn btn-default">run q38</button>
                                </div>
                                <div id="qr39_form" class="form-group">
                                    <label for="input_q39_1">painting_art_id</label>
                                    <input id="input_q39_1" class="form-control" type="text">
                                    <label for="input_q39_2">painting_cavas_type</label>
                                    <input id="input_q39_2" class="form-control" type="text">
                                    <label for="input_q39_3">painting_length</label>
                                    <input id="input_q39_3" class="form-control" type="text">
                                    <label for="input_q39_4">painting_width</label>
                                    <input id="input_q39_4" class="form-control" type="text">
                                    <label for="input_q39_5">painting_color_type</label>
                                    <input id="input_q39_5" class="form-control" type="text">
                                    <button id="qr39_btn" type="submit" class="btn btn-default">run q39</button>
                                </div>
                                <div id="qr40_form" class="form-group">
                                    <label for="input_q40_1">staff_first_name</label>
                                    <input id="input_q40_1" class="form-control" type="text">
                                    <label for="input_q40_2">staff_last_name</label>
                                    <input id="input_q40_2" class="form-control" type="text">
                                    <label for="input_q40_3">staff_ssn</label>
                                    <input id="input_q40_3" class="form-control" type="text">
                                    <label for="input_q40_4">staff_rank</label>
                                    <input id="input_q40_4" class="form-control" type="text">
                                    <label for="input_q40_5">staff_salary</label>
                                    <input id="input_q40_5" class="form-control" type="text">
                                    <label for="input_q40_6">staff_years_worked</label>
                                    <input id="input_q40_6" class="form-control" type="text">
                                    <label for="input_q40_7">staff_museum_id</label>
                                    <input id="input_q40_7" class="form-control" type="text">
                                    <label for="input_q40_8">staff_employment_date</label>
                                    <input id="input_q40_8" class="form-control" type="text">
                                    <button id="qr40_btn" type="submit" class="btn btn-default">run q40</button>
                                </div>
                                <div id="qr41_form" class="form-group">
                                    <label for="input_q41_1">visitor_ssn_id</label>
                                    <input id="input_q41_1" class="form-control" type="text">
                                    <label for="input_q41_2">visistor_first_name</label>
                                    <input id="input_q41_2" class="form-control" type="text">
                                    <label for="input_q41_3">visitor_last_name</label>
                                    <input id="input_q41_3" class="form-control" type="text">
                                    <label for="input_q41_4">visitor_nationality</label>
                                    <input id="input_q41_4" class="form-control" type="text">
                                    <label for="input_q41_5">visitor_home_town</label>
                                    <input id="input_q41_5" class="form-control" type="text">
                                    <label for="input_q41_6">visitor_edjucation</label>
                                    <input id="input_q41_6" class="form-control" type="text">
                                    <label for="input_q41_7">visitor_job</label>
                                    <input id="input_q41_7" class="form-control" type="text">
                                    <button id="qr41_btn" type="submit" class="btn btn-default">run q41</button>
                                </div>
                                <div id="qr42_form" class="form-group">
                                    <label for="input_q42_1">writing_art_id</label>
                                    <input id="input_q42_1" class="form-control" type="text">
                                    <label for="input_q42_2">writing_length</label>
                                    <input id="input_q42_2" class="form-control" type="text">
                                    <label for="input_q42_3">writing_width</label>
                                    <input id="input_q42_3" class="form-control" type="text">
                                    <label for="input_q42_4">writing_style</label>
                                    <input id="input_q42_4" class="form-control" type="text">
                                    <button id="qr42_btn" type="submit" class="btn btn-default">run q42</button>
                                </div>
                                <div id="qr43_form" class="form-group">
                                    <label for="input_q43_1">art_title</label>
                                    <input id="input_q43_1" class="form-control" type="text">
                                    <label for="input_q43_2">art_id</label>
                                    <input id="input_q43_2" class="form-control" type="text">
                                    <button id="qr43_btn" type="submit" class="btn btn-default">run q43</button>
                                </div>
                                <div id="qr44_form" class="form-group">
                                    <label for="input_q44_1">writing_lenght</label>
                                    <input id="input_q44_1" class="form-control" type="text">
                                    <label for="input_q44_2">writing_id</label>
                                    <input id="input_q44_2" class="form-control" type="text">
                                    <button id="qr44_btn" type="submit" class="btn btn-default">run q44</button>
                                </div>
                                <div id="qr45_form" class="form-group">
                                    <label for="input_q45_1">painting_lenght</label>
                                    <input id="input_q45_1" class="form-control" type="text">
                                    <label for="input_q45_2">painting_id</label>
                                    <input id="input_q45_2" class="form-control" type="text">
                                    <button id="qr45_btn" type="submit" class="btn btn-default">run q45</button>
                                </div>


                                <div id="q_content"></div>
                            </div>
                            <div class="my_div" id="about_div">
                                <h4>ABOUT</h4>
                                <p> این سایت توسط صادق خدری با شماره دانشجویی 950212647  به عنوان پروژه ی عملی درس پیاده سازی سیستم های پایگاهی آماده شده است. فرایند پیاده سازی کاملا به صورت انفرادی انجام شده است.  </p>
                            </div>
                    </div>
                </div>
    <!------------------------------------------------------ slider -------------------------------------------------------------------------->
            <div class="col-sm-2 text-center " id="ver-nav">
                    <div id="slider_rapper">
                        <ul class="nav nav-pills nav-stacked">
                            <li><a id="i_1" href="#">Views</a></li>
                            <li><a id="i_2" href="#">Stored Procedures</a></li>
                            <li ><a id="i_3" href="#" >Functions</a></li>
                            <li><a id="i_4" href="#">Triggers</a></li>
                            <li><a id="i_5" href="#">Queries</a></li>
                            <li><a id="i_6" href="#">About</a></li>
                        </ul>
                    </div>
            </div>
        </div>
<!---------------------------------------------------- footer ----------------------------------------------------------------------->
    <div id="footer">
        <p class="col-sm-12" id="ft_txt" >این سایت توسط صادق خدری با شماره دانشجویی 950212647 به عنوان پروژه ی درس پیاده سازی سیستم های پایگاهی آماده شده است.</p>
    </div>

</div>
    <script src="../js/src/jquery-3.2.1.min%20(1).js"></script>
    <script src="../resourse/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
    <script src="../js/jquery/categories.js"></script>
    <script src="../js/jquery/viewBtns.js"></script>
    <script src="../js/jquery/spBtns.js"></script>
    <script src="../js/jquery/funcBtns.js"></script>
    <script src="../js/jquery/trigBtns.js"></script>
    <script src="../js/jquery/qBtns.js"></script>
    <script src="../js/jquery/myInit.js"></script>
</body>
</html>