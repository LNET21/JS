/* 
  Javascript:
    let query = document.querySelector('#btn')

    let selectButtonId = document.getElementById('btn')
    let selectButtonTag = document.getElementsByTagName('button')
    let selectButtonClass = document.getElementsByClassName('buttonClass')

  JQuery

    let selectButtonId = $('#btn');
    let selectButtonTag = $('button');
    let selectButtonClass = $('.buttonClass');

*/

$(document).ready(function() {
    // Här kan vi skriva JQuery
  
    // Skriva ut text
    // document.getElementById('div1').innerText = 'Detta är en text som är skriven med javascript';
    $('#div1').text('Detta är en text som är skriven med Jquery');
  
    // skriva ut html
    // document.getElementById('div2').innerHTML = '<p>paragraf med js</p>';
    $('#div2').html('<p>paragraf med jquery</p>');
  
  
    // ÄNDRA STYLING
    // document.getElementById('div1').style.color = '#ff0000';
    $('#div1').css('color', '#0000ff');
  
    // document.getElementById('div2').style.fontSize = '2rem';
    $('#div2').css('font-size', '2rem');
  
    
    // document.getElementById('div2').style.display = 'none';
    $('#div2').hide()
  
    // document.getElementById('div2').style.display = '';
    $('#div2').show()
  
  
    // document.getElementById('btn').addEventListener('click', () => {
    //   let div2 = document.getElementById('div2');
    //   if(div2.style.display === 'none') {
    //     div2.style.display = ''
    //   } else {
    //     div2.style.display = 'none'
    //   }
    // })
  
  
    $('#btn').click(() => {
      $('#div2').toggle()
    })
  
  
  })();