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
 ,"Backup dancers"
 ,"Kamis"
 ,"Staff"
];

// * キャラクター情報（編集可能。最後の行に”,”を付けないようにしてください）
// * 使用フラグ（0にするとソートに入りません）, 
//   "タイトルID"（先頭から0, 1, 2...）, 
//   {タイトル別参加フラグ}（1を入れると対象タイトルに入ります）,
//   "キャラクター名", "画像（空白の場合、キャラクター名が使用されます）"
//                                      [1,2,3,4,5,6,7,8,9,
var ary_CharacterData = [
  [1, "SU-METAL",                                                  [1,0,0,0,0,0,0,0], "bmppl/Su.png"],
  [1, "YUIMETAL",                                                  [1,0,0,0,0,0,0,0], "bmppl/Yui.png"],
  [1, "MOAMETAL",                                                  [1,0,0,0,0,0,0,0], "bmppl/Moa.jpg"],
 
  [1, "Riho",                                                      [0,1,0,0,0,0,0,0], "bmppl/Riho.png"],
  [1, "Momoko",                                                    [0,1,0,0,0,0,0,0], "bmppl/Momoko.png"],
  [1, "Kano",                                                      [0,1,0,0,0,0,0,0], "bmppl/Kano.png"],
  [1, "Saya",                                                      [0,1,0,0,0,0,0,0], "bmppl/Saya.jpg"],
 
  [1, "Mikio",                                                      [0,0,1,0,0,0,0,0], "bmppl/Mikio.png"],
  [1, "Ohmura",                                                     [0,0,1,0,0,0,0,0], "bmppl/Ohmura.png"],
  [1, "BOH",                                                        [0,0,1,0,0,0,0,0], "bmppl/BOH.png"],
  [1, "Hideki",                                                     [0,0,1,0,0,0,0,0], "bmppl/Hideki.png"],
  [1, "Leda",                                                       [0,0,1,0,0,0,0,0], "bmppl/Leda.png"],
  [1, "ISAO",                                                       [0,0,1,0,0,0,0,0], "bmppl/ISAO.png"],
  [1, "Yuya",                                                       [0,0,1,0,0,0,0,0], "bmppl/Yuya.png"],
  [1, "Yusuke",                                                     [0,0,1,0,0,0,0,0], "bmppl/Yusuke.jpg"],
 
  [1, "KOBAMETAL",                                                 [0,0,0,1,0,0,0,0], "bmppl/Koba.jpg"],
  [1, "Nora",                                                      [0,0,0,1,0,0,0,0], "bmppl/Nora.png"],
  [1, "MIKIKOMETAL",                                               [0,0,0,1,0,0,0,0], "bmppl/Mikiko.png"]
  
];
