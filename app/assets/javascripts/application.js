// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require popper
//= require bootstrap-sprockets
//= require_tree .

//画像プレビュー
$(document).on('turbolinks:load', function() {
  function readURL(input) {
      if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
  $('#prev-img').attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
      }
  }
  $("#post_img").change(function(){
      readURL(this);
  });
});

//ページTOPに戻るボタン
$(function(){
    var pagetop=$('#page-top');
    pagetop.hide();
    
    $(window).scroll(function(){
      if($(this).scrollTop()>300){
        //---- 画面を300pxスクロールしたらボタンを表示
        pagetop.fadeIn();
      }else{
        //---- 画面が300pxより上ならボタンを表示しない
        pagetop.fadeOut();
      }
    });
    // ボタンをクリックしたら、スクロールして上に戻る
    pagetop.click(function(){
      $('body,html').animate({
      scrollTop: 0},1000);
      return false;
    });
});