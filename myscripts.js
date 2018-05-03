function makeGrid() {
  let rowNum = $('#input-height').val(),
    colNum = $('#input-width').val(),
    $canvas = $('#pixel-canvas'),
    html = '';
  //clear grid

  $canvas.find('tbody').html('');

  // create grid html
  for (let i = 0; i < rowNum; i++) {
    html += `<tr>${'<td></td>'.repeat(colNum)}</tr>`;
  }
	// add 'grid'
  
  $canvas.find('tbody').append(html);
}
//apply color to clicked cell
$('#pixel-canvas').on('click', 'td', function() {
	let $el = $(this), // save the jQuery selector to save memory
  	elColor = $el.css('background-color'), // get the current bg-color of element
    origColor = $el.attr('orig-color'), // get original bg-color attribute we set on TD element
  	pickerColor = $('#color-picker').val(); // color from picker input el

    (!origColor) // only set attribute for the first time
    	$el.attr('orig-color', elColor);

  // here we alternate between original and picker color if el has the 'colored' class
  $el.css('background-color', !$el.hasClass('colored') ? pickerColor : origColor);
  // finally - by toggling class we know that el was already clicked (bg-color changed)
  $el.toggleClass('colored');
});

  /*$(this).css('background-color', $('#color-picker').val());
});*/
//create table when size is submitted
$('#submit-grid').off('click').on('click', function(event) {
  makeGrid();
});
