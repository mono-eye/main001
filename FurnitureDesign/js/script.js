
/*=================================================
 script
===================================================*/

// ハンバーガーメニュー

$(function(){
 // ハンバーガーメニューのクリックイベント
 $('.toggle_btn').on('click', function() {
  // #headerにopenクラスが存在する場合
   if ($('#header').hasClass('open')) {
  // openクラスを削除
  // openクラスを削除すると、openクラスのCSSがはずれメニューが非表示
     $('#header').removeClass('open');
   } else {
  // openクラスを追加
  // openクラスを追加すると、openクラスのCSSが適応されメニューが表示
     $('#header').addClass('open');
   }
 });
  // メニューが表示されている時に画面をクリックした場合
 $('#mask').on('click', function() {
  // openクラスを削除して、メニューを閉じる
   $('#header').removeClass('open');
 });
});