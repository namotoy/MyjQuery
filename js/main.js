'use strict';

$(()=>{
const $input = $('input');
$input.focus();

 $('button').click(()=>{
    // $('p').text('GOOD MORNING');
    // $('p').addClass('red-text');
    $('p').
      text('GOOD MORNING!!').
      addClass('red-text');
    // $('li')
    //   .eq(2)
    //   .addClass('red-text');

    $('li:nth-child(odd),li:last-child')
      .addClass('red-text');
    
    $('<li>')
    .text($input.val())
    .appendTo('ul');
    $input
     .val('')
     .focus();
 });

 $('ul').click(e =>{
  if(e.target.nodeName !== 'LI' || !confirm('本当に削除しますか？')){
    return;
  }
  // e.target.remove();
  $(e.target).fadeOut();
 });
});