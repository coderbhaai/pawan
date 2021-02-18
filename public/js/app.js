$(document).ready(function(){
  $('.changeStore').on('click', function () { 
    $(document).find('.showSwiper').removeClass('showSwiper');
    $(document).find('.showStoreMenu').addClass('showSwiper'); 
  })
  $('.changeCategory').on('click', function () { 
    $(document).find('.showSwiper').removeClass('showSwiper');
    $(document).find('.showCategoryMenu').addClass('showSwiper'); 
  })
  $(document).on('click', function (event) {
    if (!$(event.target).closest('.navbar').length) { 
      $(document).find('.showSwiper').removeClass('showSwiper');
    }
  });
});