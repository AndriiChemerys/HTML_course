const $odd = $('a:odd');
const $secureLinks=$('a[href^="https://"]');
const $pdfs=$('a[href$=".pdf"]');


$secureLinks.attr('target', '_blank');
$pdfs.attr('download', true);

$odd.css('backgroundColor', 'lightgray');       

$secureLinks.addClass('secure');
$pdfs.addClass('pdf');

$pdfs.on('click', function(event) {
    event.preventDefault();
    // check if checkbox has been checked
    // if zero checkboxes are cheked
    if ($(':checked').length===0) {
        // prevent download of document
        event.preventDefault();
        // alert the user
        alert('Please check the box to allow PDF downloads.');
    }
});

