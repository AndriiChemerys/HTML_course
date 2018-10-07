$('#flashMessage').hide();

$('#previewButton').click(function(){
    const title = $('#blogTitleInput').val();
    const content = $('#blogContentInput').val();
    console.log(title);

    $('#blogTitlePreview').text(title);
    $('#blogContentPreview').html(content);

    $('#flashMessage')
    .slideDown(1000)
    .delay(3000)
    .slideUp();
    
});

