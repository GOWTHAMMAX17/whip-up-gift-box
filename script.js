const input = document.getElementById('ipfield');
const giftbox = document.getElementById('giftbox');
function generatebox(){
    var html = '<span><h2>Genetated Gifts</h2></span>';
    const gifts = parseInt(input.value);
    for(let i=0;i<gifts;i++)
    {
        html += '<img src="depositphotos_14850833-stock-photo-red-gift-box.jpg" id="img1" alt="gifts">'
    }
    input.value = ''
    giftbox.innerHTML = html;
}