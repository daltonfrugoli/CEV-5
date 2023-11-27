let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

//verificando se o numero digitado está na range certa
function isNumero(n)
{
    if(Number(n) >= 1 && Number(n) <= 100)
    {
        return true
    }
    else
    {
        return false
    }
}

//verificando se o numero digitado é repetido
function inLista(n, l)
{
    if (l.indexOf(Number(n)) != -1)
    {
        return true
    }
    else
    {
        return false
    }
}

//adicionando itens na lista/array
function adicionar()
{
    if(isNumero(num.value) && !inLista(num.value, valores))
    {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado.`
        lista.appendChild(item)
    }
    else
    {
        window.alert('Valor inválido, ou já encontrado na lista!')
    }
    num.value = ''
    num.focus()
}

//analisando numeros
function finalizar() 
{
    if (valores.length == 0)
    {
        window.alert('adicione valores antes de finalizar')
    }
    else 
    {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores)
        {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot

        //gerando relatorios
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
       

    }
}