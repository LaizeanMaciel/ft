
var revel = document.getElementById('revel')
revel.addEventListener('click', revelar)

function revelar () {
    var num = document.getElementsByName('number')
    var foto = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (num[0].checked) { 
        img.setAttribute('src', 'foto1.png')
        
    } else if (num[1].checked) {
        img.setAttribute('src', 'foto2.png')
        
    } else if (num[2].checked) {
        img.setAttribute('src', 'foto3.png')
        
    } else if (num[3].checked) {
        img.setAttribute('src', 'foto4.png')
        
    }
    res.appendChild(img)
}