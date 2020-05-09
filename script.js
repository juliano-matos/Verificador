function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('ERRO! Verifique os dados e tente novamente!')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 12) {
                // Criança
                img.setAttribute('src', 'foto-menino.png')
                document.body.style.background = '#0888dd'
            } else if (idade > 13 && idade <= 23) {
                // Jovem
                img.setAttribute('src', 'foto-homemjovem.png')
                document.body.style.background = '#9108e0'
            } else if (idade > 23 && idade <= 49) {
                // Adulto
                img.setAttribute('src', 'foto-homem.png')
                document.body.style.background = '#201868'
            } else { (idade < 50)
                // Idoso
                img.setAttribute('src', 'foto-senhor.png')
                document.body.style.background = '#9108e0'
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                // Criança...
                img.setAttribute('src', 'foto-menina.png')
                document.body.style.background = '#f3c07e'
            } else if (idade > 13 && idade <= 23) {
                // Jovem
                img.setAttribute('src', 'foto-mulherjovem.png')
                document.body.style.background = '#22eecc'
            } else if (idade > 23 && idade <= 49) {
                // Adulto
                img.setAttribute('src', 'foto-mulher.png')
                document.body.style.background = '#e6f511'
            } else  { (idade < 50)
                // Idoso
                img.setAttribute('src', 'foto-senhora.png')
                document.body.style.background = '#f3c07e'
            }
        }
        res.getElementsByClassName.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com idade de ${idade} anos.`
        res.appendChild(img)
    }


}
