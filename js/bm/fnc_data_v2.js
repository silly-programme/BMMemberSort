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
var int_Colspan = 3;
var ary_TitleData = [
 "Concerts",
 "Song-specific & finales",
 "Alternate tour versions",
 "Photoshoots",
 "Support personnel"
];

// * キャラクター情報（編集可能。最後の行に”,”を付けないようにしてください）
// * 使用フラグ（0にするとソートに入りません）, 
//   "タイトルID"（先頭から0, 1, 2...）, 
//   {タイトル別参加フラグ}（1を入れると対象タイトルに入ります）,
//   "キャラクター名", "画像（空白の場合、キャラクター名が使用されます）"
//                                      [1,2,3,4,5,6,7,8,9,
var ary_CharacterData = [
  [1, "Legend I",                               [1,0,0,0,0,0,0,0], "bmcost/2012_Headbanger_MV_LegendI.jpeg"],
  [1, "Legend D & Z",                           [1,0,0,0,0,0,0,0], "bmcost/2012_LegendDZ.jpeg"],
  [1, "Legend 1999",                            [1,0,0,0,0,0,0,0], "bmcost/2013_Legend1999.jpeg"],
  [1, "Legend 1997",                            [1,0,0,0,0,0,0,0], "bmcost/2013_Legend1997.png"],
  [1, "May Revolution/DEATH MATCH",             [1,0,0,0,0,0,0,0], "bmcost/2013_MayRevolution.jpeg"],
  [1, "Budokan Red Night",                      [1,0,0,0,0,0,0,0], "bmcost/2014_BudokanRed.jpeg"],
  [1, "Budokan Black Night",                    [1,0,0,0,0,0,0,0], "bmcost/2014_BudokanBlack.png"],
  [1, "World Tour 2014",                        [1,0,0,0,0,0,0,0], "bmcost/2014_WorldTour.jpeg"],
  [1, "World Tour & SSA & MM 2015",             [1,0,0,0,0,0,0,0], "bmcost/2015_WorldTour.jpeg"],
  [1, "Yokohama 2015",                          [1,0,0,0,0,0,0,0], "bmcost/2015_Yoko15.jpeg"],
  [1, "Wembley & World Tour 2016",              [1,0,0,0,0,0,0,0], "bmcost/2016_WorldTour.jpeg"],
  [1, "Tokyo Dome Red Night",                   [1,0,0,0,0,0,0,0], "bmcost/2016_TDRed.jpeg"],
  [1, "Tokyo Dome Black Night",                 [1,0,0,0,0,0,0,0], "bmcost/2016_TDBlack.jpeg"],
  [1, "World Tour 2017 & 5FF & BigFF",          [1,0,0,0,0,0,0,0], "bmcost/2017_WorldTour.jpeg"],
  [1, "Legend S",                               [1,0,0,0,0,0,0,0], "bmcost/2017_LegendS.jpg"],
  [1, "World Tour (US/EU) 2018",                [1,0,0,0,0,0,0,0], "bmcost/2018_WorldTour.jpg"],
  [1, "World Tour (JP) 2018 & DNC",             [1,0,0,0,0,0,0,0], "bmcost/2018_WorldTourInJapan.png"],
  [1, "Metal Galaxy World Tour",                [1,0,0,0,0,0,0,0], "bmcost/2019_2020_MGWorldTour.jpeg"],
  [1, "10 BABYMETAL Years",                     [1,0,0,0,0,0,0,0], "bmcost/2020_2021_10BMY.jpeg"],
  
  [1, "Doki Doki Morning MV",                   [0,1,0,0,0,0,0,0], "bmcost/special/2010_DDM_MV.png"],
  [1, "Ijime, Dame, Zettai MV intro",           [0,1,0,0,0,0,0,0], "bmcost/special/2011_IDZ_MV_black.png"],
  [1, "Akatsuki (2012)",                        [0,1,0,0,0,0,0,0], "bmcost/special/2012_Akatsuki.png"],
  [1, "line!! MV (couch)",                      [0,1,0,0,0,0,0,0], "bmcost/special/2012_Line_MV.png"],
  [1, "line!! MV (rap)",                        [0,1,0,0,0,0,0,0], "bmcost/special/2012_Line_MV2.jpeg"],
  [1, "Onedari Daisakusen (2012)",              [0,1,0,0,0,0,0,0], "bmcost/special/2012_OD.png"],
  [1, "Megitsune (2013-2017)",                  [0,1,0,0,0,0,0,0], "bmcost/special/2013_2017_Megitsune_kimono.jpeg"],
  [1, "Legend Z finale",                        [0,1,0,0,0,0,0,0], "bmcost/special/2013_LegendZ_white.png"],
  [1, "Onedari Daisakusen (Legend 1999)",       [0,1,0,0,0,0,0,0], "bmcost/special/2013_Legend1999_OD.png"],
  [1, "Ave Maria (Legend 1997)",                [0,1,0,0,0,0,0,0], "bmcost/special/2013_Legend1997_AveMaria.png"],
  [1, "Onedari Daisakusen (Legend 1997)",       [0,1,0,0,0,0,0,0], "bmcost/special/2013_Legend1997_OD.png"],
  [1, "Onedari Daisakusen (2014-2016)",         [0,1,0,0,0,0,0,0], "bmcost/special/2014_2016_OD.jpeg"],
  [1, "Megitsune (SSA 2015)",                   [0,1,0,0,0,0,0,0], "bmcost/special/2015_Legend2015_Megitsune.jpeg"],
  [1, "The One (2015-2016)",                    [0,1,0,0,0,0,0,0], "bmcost/special/2015_2016_TheOne.png"],
  [1, "Karate MV",                              [0,1,0,0,0,0,0,0], "bmcost/special/2016_KarateMV.png"],
  [1, "The One (Tokyo Dome)",                   [0,1,0,0,0,0,0,0], "bmcost/special/2016_TDRed_TheOne.png"],
  [1, "The One (2017)",                         [0,1,0,0,0,0,0,0], "bmcost/special/2017_TheOne.jpeg"],
  [1, "In The Name Of (Legend S)",              [0,1,0,0,0,0,0,0], "bmcost/special/2017_LegendS_ITNO.jpeg"],
  [1, "Megitsune (Legend S - not used?)",       [0,1,0,0,0,0,0,0], "bmcost/special/2017_LegendS_Megitsune.jpg"],
  [1, "Akatsuki (Legend S)",                    [0,1,0,0,0,0,0,0], "bmcost/special/2017_LegendS_Akatsuki.png"],
  [1, "The One (Legend S)",                     [0,1,0,0,0,0,0,0], "bmcost/special/2017_LegendS_TheOne.jpeg"],
  [1, "In The Name Of (World Tour US/EU 2018)", [0,1,0,0,0,0,0,0], "bmcost/special/2018_ITNO.jpeg"],
  [1, "Akatsuki (World Tour US/EU 2018)",       [0,1,0,0,0,0,0,0], "bmcost/special/2018_WorldTour_Akatsuki.jpeg"],
  [1, "The One (World Tour US/EU 2018)",        [0,1,0,0,0,0,0,0], "bmcost/special/2018_WorldTour_TheOne.jpeg"],
  [1, "In The Name Of (World Tour JP 2018)",    [0,1,0,0,0,0,0,0], "bmcost/special/2018_WorldTourInJapan_ITNO.png"],
  [1, "Akatsuki (World Tour JP 2018)",          [0,1,0,0,0,0,0,0], "bmcost/special/2018_WorldTourInJapan_Akatsuki.png"],
  [1, "The One (World Tour JP 2018)",           [0,1,0,0,0,0,0,0], "bmcost/special/2018_WorldTourInJapan_TheOne.jpeg"],
  [1, "The One (Metal Galaxy World Tour)",      [0,1,0,0,0,0,0,0], "bmcost/special/2019_2020_The One.png"],
  
  [1, "BABYMETAL x CthoniC (Taiwan 2014)",      [0,0,1,0,0,0,0,0], "bmcost/SLEEVES/2014_Taiwan_sameasL1997buttransparentsleeves.png"],
  [1, "World Tour 2016 (transparent sleeves)",  [0,0,1,0,0,0,0,0], "bmcost/SLEEVES/2016_WorldTour_transparentsleeves.png"],
  [1, "World Tour 2016 (sleeveless)",           [0,0,1,0,0,0,0,0], "bmcost/SLEEVES/2016_WorldTour_sleeveless.jpeg"],
  [1, "World Tour 2017 (sleeveless)",           [0,0,1,0,0,0,0,0], "bmcost/SLEEVES/2017_WorldTour_sleevelessSu.jpeg"],
  
  [1, "Photoshoot with Marty Friedman (2011)",  [0,0,0,1,0,0,0,0], "bmcost/photoshoots/2011_whitemaid_MFphotoshoot.jpeg"],
  [1, "Tower Records IDZ single release",       [0,0,0,1,0,0,0,0], "bmcost/photoshoots/2013_TowerRecords_IDZ.jpeg"],
  [1, "ROLa Magazine (2013)",                   [0,0,0,1,0,0,0,0], "bmcost/photoshoots/2013_ROLa_magazine.jpeg"],
  [1, "Tower Records Megitsune single release", [0,0,0,1,0,0,0,0], "bmcost/photoshoots/2013_TowerRecords_Megitsune.jpeg"],
  [1, "Various photoshoots 2014-2016",          [0,0,0,1,0,0,0,0], "bmcost/photoshoots/2014_2016_variousphotoshoots.jpeg"],
  [1, "GQ & Vogue awards ceremonies (2015)",    [0,0,0,1,0,0,0,0], "bmcost/photoshoots/2015_GQ_Vogue.jpeg"],
  [1, "World Tour 2015 promo photos",           [0,0,0,1,0,0,0,0], "bmcost/photoshoots/2015_TourPromo.jpeg"],
  [1, "World Tour 2016 promo photos",           [0,0,0,1,0,0,0,0], "bmcost/photoshoots/2016_TourPromo.jpeg"],
  [1, "Chosen Seven (2018)",                    [0,0,0,1,0,0,0,0], "bmcost/photoshoots/2018_Chosen7.jpeg"],
  
  [1, "Babybones (Babybones are eternal)",      [0,0,0,0,1,0,0,0], "bmcost/support/Babybones.png"],
  [1, "Kami band (2012-2017)",                  [0,0,0,0,1,0,0,0], "bmcost/support/2012_2017_Kami.jpeg"],
  [1, "Sisterbones (2012-2014)",                [0,0,0,0,1,0,0,0], "bmcost/support/Sisterbones.png"],
  [1, "Su double for Akatsuki (Legend Z)",      [0,0,0,0,1,0,0,0], "bmcost/support/2013_Sugivingherdoubleashoulderrub.png"],
  [1, "Wolf dancers (Legend S In The Name Of)", [0,0,0,0,1,0,0,0], "bmcost/support/2017_LegendS_dancers.png"],
  [1, "Kami band (Legend S)",                   [0,0,0,0,1,0,0,0], "bmcost/support/2017_LegendS_Kamis.png"],
  [1, "Su double for Akatsuki (Legend S)",      [0,0,0,0,1,0,0,0], "bmcost/support/2017_LegendS_Akatsukidouble.png"],
  [1, "No Rain No Rainbow orchestra (Legend S)",[0,0,0,0,1,0,0,0], "bmcost/support/2017_LegendS_otherinstrumentalists.png"],
  [1, "Kami band (2018 World Tours)",           [0,0,0,0,1,0,0,0], "bmcost/support/2018_WorldTour_Kamis.jpeg"],
  [1, "Muscle-metal (2018 World Tour US/EU)",   [0,0,0,0,1,0,0,0], "bmcost/support/2018_WorldTour_dancers.jpeg"],
  [1, "Kami band (Metal Galaxy World Tour)",    [0,0,0,0,1,0,0,0], "bmcost/support/2019_2020_MGWorldTour_Kamis.jpeg"]
  
];
