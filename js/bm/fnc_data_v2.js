// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa

// *****************************************************************************
str_CenterT = 'Tie!';
str_CenterB = 'Undo last choice';

str_ImgPath = 'img/';
// 0:順番に　1:昔の
var bln_ResultMode = 1;
// 0:テキスト　1:イラスト　2:テキスト＋イラスト
var int_ResultImg = 2;
// イラスト表示時、何位までをイラスト表示にするか。
var int_ResultRank = 3;

// ソート用のテーブルを
// 0:残す　1:消す
var bln_ResultStyle = 0;

// ソート進捗バーの表示
// 0:表示　1:消す
var bln_ProgessBar = 1;

// Maximum number of result rows before being broken off into another table.
var maxRows = 20;

// * タイトル情報（編集可能。最後の行に”,”を付けないようにしてください）
var int_Colspan = 2;
var ary_TitleData = [
 "Core members"
 //,"Backup dancers"
 //,"Kamis"
 //,"Staff"
];

// * キャラクター情報（編集可能。最後の行に”,”を付けないようにしてください）
// * 使用フラグ（0にするとソートに入りません）, 
//   "タイトルID"（先頭から0, 1, 2...）, 
//   {タイトル別参加フラグ}（1を入れると対象タイトルに入ります）,
//   "キャラクター名", "画像（空白の場合、キャラクター名が使用されます）"
//                                      [1,2,3,4,5,6,7,8,9,
var ary_CharacterData = [
  [1, "SU-METAL",                                                  [1,0,0,0,0,0,0,0], "bmppl/Su.png"],
  [1, "KOBAMETAL",                                                 [1,0,0,0,0,0,0,0], "bmppl/Koba.jpg"],
  [1, "YUIMETAL",                                                  [1,0,0,0,0,0,0,0], "bmppl/Yui.png"],
  [1, "MOAMETAL",                                                  [1,0,0,0,0,0,0,0], "bmppl/Moa.jpg"],
  
  [1, "2nd Idol Yokocho Festival (2012)",                   [0,1,0,0,0,0,0,0], "bmcost/special/2010_DDM_MV.png"],
  [1, "Anime Festival Asia (Singapore 2012)",           [0,1,0,0,0,0,0,0], "bmcost/special/2011_IDZ_MV_black.png"],
  [1, "Tokyo Metropolitan Rock Festival 2013",                        [0,1,0,0,0,0,0,0], "bmcost/special/2012_Akatsuki.png"],
  [1, "Rock in Japan Festival 2013",                      [0,1,0,0,0,0,0,0], "bmcost/special/2012_Line_MV.png"],
  [1, "Summer Sonic 2013",                        [0,1,0,0,0,0,0,0], "bmcost/special/2012_Line_MV2.jpeg"],
  [1, "Inazuma Rock Festival 2013",              [0,1,0,0,0,0,0,0], "bmcost/special/2012_OD.png"],
  [1, "Loud Park 2013",                  [0,1,0,0,0,0,0,0], "bmcost/special/2013_2017_Megitsune_kimono.jpeg"],
  [1, "Countdown Japan 13/14",                        [0,1,0,0,0,0,0,0], "bmcost/special/2013_LegendZ_white.png"],
  [1, "Live Expo Tokyo 2014",       [0,1,0,0,0,0,0,0], "bmcost/special/2013_Legend1999_OD.png"],
  [1, "Sonisphere Festival UK (2014)",                [0,1,0,0,0,0,0,0], "bmcost/special/2013_Legend1997_AveMaria.png"],
  [1, "Summer Sonic 2014",       [0,1,0,0,0,0,0,0], "bmcost/special/2013_Legend1997_OD.png"],
  [1, "Tokyo Metropolitan Rock Festival 2015",         [0,1,0,0,0,0,0,0], "bmcost/special/2014_2016_OD.jpeg"],
  [1, "Summer Sonic 2015",                   [0,1,0,0,0,0,0,0], "bmcost/special/2015_Legend2015_Megitsune.jpeg"],
  [1, "Ultra Japan 2015",                    [0,1,0,0,0,0,0,0], "bmcost/special/2015_2016_TheOne.png"],
  [1, "Countdown Japan 15/16",                              [0,1,0,0,0,0,0,0], "bmcost/special/2016_KarateMV.png"],
  [1, "Download Festival 2016",                   [0,1,0,0,0,0,0,0], "bmcost/special/2016_TDRed_TheOne.png"],
  [1, "Download Festival Paris 2016",                         [0,1,0,0,0,0,0,0], "bmcost/special/2017_TheOne.jpeg"],
  [1, "Rock in Japan 2016",              [0,1,0,0,0,0,0,0], "bmcost/special/2017_LegendS_ITNO.jpeg"],
  [1, "Rising Sun Rock Festival 2016",       [0,1,0,0,0,0,0,0], "bmcost/special/2017_LegendS_Megitsune.jpg"],
  [1, "Summer Sonic 2017",                    [0,1,0,0,0,0,0,0], "bmcost/special/2017_LegendS_Akatsuki.png"],
  [1, "Rock on the Range 2018",                     [0,1,0,0,0,0,0,0], "bmcost/special/2017_LegendS_TheOne.jpeg"],
  [1, "Rock am Ring 2018", [0,1,0,0,0,0,0,0], "bmcost/special/2018_ITNO.jpeg"],
  [1, "Download Festival 2018",       [0,1,0,0,0,0,0,0], "bmcost/special/2018_WorldTour_Akatsuki.jpeg"],
  [1, "Glastonbury Festival 2019",        [0,1,0,0,0,0,0,0], "bmcost/special/2018_WorldTour_TheOne.jpeg"],
  [1, "Super Slippa 10 (Taiwan 2019)",    [0,1,0,0,0,0,0,0], "bmcost/special/2018_WorldTourInJapan_ITNO.png"],
  [1, "Summer Sonic 2019",          [0,1,0,0,0,0,0,0], "bmcost/special/2018_WorldTourInJapan_Akatsuki.png"],
  [1, "Countdown Japan 19/20",           [0,1,0,0,0,0,0,0], "bmcost/special/2018_WorldTourInJapan_TheOne.jpeg"],
  
  [1, "Sakura Gakuin Festival☆2010",      [0,0,1,0,0,0,0,0], "bmcost/SLEEVES/2014_Taiwan_sameasL1997buttransparentsleeves.png"],
  [1, "Tokyo Idol Festival 2011",  [0,0,1,0,0,0,0,0], "bmcost/SLEEVES/2016_WorldTour_transparentsleeves.png"],
  [1, "Sakura Gakuin 2011 Graduation: Departures",           [0,0,1,0,0,0,0,0], "bmcost/SLEEVES/2016_WorldTour_sleeveless.jpeg"],
  [1, "BABYMETAL x KIBA of AKIBA Release Event",           [0,0,1,0,0,0,0,0], "bmcost/SLEEVES/2017_WorldTour_sleevelessSu.jpeg"],
  [1, "Legend Corset Festival (Rockmaykan 2012)",           [0,0,1,0,0,0,0,0], "bmcost/SLEEVES/2017_WorldTour_sleevelessSu.jpeg"],
  [1, "Nippon TV Happy-Music Performance (2013)",           [0,0,1,0,0,0,0,0], "bmcost/SLEEVES/2017_WorldTour_sleevelessSu.jpeg"],
  [1, "NHK's Music Japan (IDZ, 2013)",           [0,0,1,0,0,0,0,0], "bmcost/SLEEVES/2017_WorldTour_sleevelessSu.jpeg"],
  [1, "The Road to Graduation Final ~ Sakura Gakuin 2012 (2013)",           [0,0,1,0,0,0,0,0], "bmcost/SLEEVES/2017_WorldTour_sleevelessSu.jpeg"],
  [1, "NTV Music Dragon (2013)",           [0,0,1,0,0,0,0,0], "bmcost/SLEEVES/2017_WorldTour_sleevelessSu.jpeg"],
  [1, "NHK's Music Japan (Megitsune, 2013)",           [0,0,1,0,0,0,0,0], "bmcost/SLEEVES/2017_WorldTour_sleevelessSu.jpeg"],
  [1, "BABYMETAL x CthoniC (Taiwan 2014)",           [0,0,1,0,0,0,0,0], "bmcost/SLEEVES/2017_WorldTour_sleevelessSu.jpeg"],
  [1, "TV Asahi Music Station Performance (2014)",           [0,0,1,0,0,0,0,0], "bmcost/SLEEVES/2017_WorldTour_sleevelessSu.jpeg"],
  [1, "NHK Special - BABYMETAL Phenomenon",           [0,0,1,0,0,0,0,0], "bmcost/SLEEVES/2017_WorldTour_sleevelessSu.jpeg"],
  [1, "TV Asahi Music Station Super Live 2014",           [0,0,1,0,0,0,0,0], "bmcost/SLEEVES/2017_WorldTour_sleevelessSu.jpeg"],
  [1, "World Tour 2014 Highlights",           [0,0,1,0,0,0,0,0], "bmcost/SLEEVES/2017_WorldTour_sleevelessSu.jpeg"],
  [1, "Metal Hammer Golden God Awards",           [0,0,1,0,0,0,0,0], "bmcost/SLEEVES/2017_WorldTour_sleevelessSu.jpeg"],
  [1, "TV Asahi Music Station Super Live 2015",           [0,0,1,0,0,0,0,0], "bmcost/SLEEVES/2017_WorldTour_sleevelessSu.jpeg"],
  [1, "World Tour 2015 Highlights",           [0,0,1,0,0,0,0,0], "bmcost/SLEEVES/2017_WorldTour_sleevelessSu.jpeg"],
  [1, "NHK BABYMETAL Special Program (2016)",           [0,0,1,0,0,0,0,0], "bmcost/SLEEVES/2017_WorldTour_sleevelessSu.jpeg"],
  [1, "The Late Show with Stephen Colbert (2016)",           [0,0,1,0,0,0,0,0], "bmcost/SLEEVES/2017_WorldTour_sleevelessSu.jpeg"],
  [1, "TV Asahi Music Station Performance (2016)",           [0,0,1,0,0,0,0,0], "bmcost/SLEEVES/2017_WorldTour_sleevelessSu.jpeg"],
  [1, "2016 Journeys Alternative Press Music Awards",           [0,0,1,0,0,0,0,0], "bmcost/SLEEVES/2017_WorldTour_sleevelessSu.jpeg"],
  [1, "TV Asahi Music Station Ultra Super Live (2019)",           [0,0,1,0,0,0,0,0], "bmcost/SLEEVES/2017_WorldTour_sleevelessSu.jpeg"],
  [1, "Songs of Tokyo Festival 2020",           [0,0,1,0,0,0,0,0], "bmcost/SLEEVES/2017_WorldTour_sleevelessSu.jpeg"],
  [1, "MTV VMAJ 2020",           [0,0,1,0,0,0,0,0], "bmcost/SLEEVES/2017_WorldTour_sleevelessSu.jpeg"],
  [1, "Stay Metal Stay Rockmaykan (2020)",           [0,0,1,0,0,0,0,0], "bmcost/SLEEVES/2017_WorldTour_sleevelessSu.jpeg"],
  [1, "CDTV Live Christmas Special (2020)",           [0,0,1,0,0,0,0,0], "bmcost/SLEEVES/2017_WorldTour_sleevelessSu.jpeg"],
  [1, "TV Asahi Music Station Super Live (2020)",           [0,0,1,0,0,0,0,0], "bmcost/SLEEVES/2017_WorldTour_sleevelessSu.jpeg"],
  [1, "NHK's 71st Kouhaku Uta Gassen",           [0,0,1,0,0,0,0,0], "bmcost/SLEEVES/2017_WorldTour_sleevelessSu.jpeg"],
  
  [1, "Photoshoot with Marty Friedman (2011)",  [0,0,0,1,0,0,0,0], "bmcost/photoshoots/2011_whitemaid_MFphotoshoot.jpeg"],
  [1, "Tower Records IDZ single release",       [0,0,0,1,0,0,0,0], "bmcost/photoshoots/2013_TowerRecords_IDZ.jpeg"],
  [1, "ROLa Magazine (2013)",                   [0,0,0,1,0,0,0,0], "bmcost/photoshoots/2013_ROLa_magazine.jpeg"],
  [1, "Tower Records Megitsune single release", [0,0,0,1,0,0,0,0], "bmcost/photoshoots/2013_TowerRecords_Megitsune.jpeg"],
  [1, "Various photoshoots 2014-2016",          [0,0,0,1,0,0,0,0], "bmcost/photoshoots/2014_2016_variousphotoshoots.jpeg"],
  [1, "GQ & Vogue awards ceremonies (2015)",    [0,0,0,1,0,0,0,0], "bmcost/photoshoots/2015_GQ_Vogue.jpeg"],
  [1, "World Tour 2015 promo photos",           [0,0,0,1,0,0,0,0], "bmcost/photoshoots/2015_TourPromo.jpeg"],
  [1, "World Tour 2016 promo photos",           [0,0,0,1,0,0,0,0], "bmcost/photoshoots/2016_TourPromo.jpeg"],
  [1, "Chosen Seven (2018)",                    [0,0,0,1,0,0,0,0], "bmcost/photoshoots/2018_Chosen7.jpeg"]
  
];
