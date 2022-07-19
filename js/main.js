'use strict';

$(()=>{
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
 });

});