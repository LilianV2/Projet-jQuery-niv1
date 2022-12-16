$('#myId').text("Hello World")

$('a').attr('href', 'https://Twitter.com/')

$('#div').css({
    'width' : '1000px',
    'height' : '800px',
    'border' : '2px dotted black',
})

$('#div div:nth-child(2)').text('je suis un super texte')
alert("1er index d'un tableau est toujours : " + $('#div div:first-child').index())