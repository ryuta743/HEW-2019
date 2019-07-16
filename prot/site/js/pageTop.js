//��page top�{�^��

$(function(){
var topBtn=$('#pageTop');
topBtn.hide();

 

//���{�^���̕\���ݒ�
$(window).scroll(function(){
  if($(this).scrollTop()>80){

    //---- ��ʂ�80px�X�N���[��������A�{�^����\������
    topBtn.fadeIn();

  }else{

    //---- ��ʂ�80px����Ȃ�A�{�^����\�����Ȃ�
    topBtn.fadeOut();

  } 
});

 

// ���{�^�����N���b�N������A�X�N���[�����ď�ɖ߂�
topBtn.click(function(){
  $('body,html').animate({
  scrollTop: 0},500);
  return false;

});

$('.backshadow').hide();

$('nav').on('click',function(){
  if($('.backshadow').hasClass('open')){
    $('.backshadow').removeClass('open');
    $('.backshadow').fadeOut(100);
  }else{
    $('.backshadow').addClass('open');
    $('.backshadow').fadeIn(100);
  }
})


});