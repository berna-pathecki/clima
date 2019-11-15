function getClima() {
    $.ajax({
        method: 'get',
        crossDomain: true,
        url: 'http://api.openweathermap.org/data/2.5/weather?id=3468879&appid=d6a65101ec871fe6875b3a1d7dc1e248',
        dataType: 'json',
        success: function (data) {
            
            temperatura = Math.round(data.main.temp - 273);
            $('#temperatura').html(temperatura+"°");
            
            
            umidade = data.main.humidity;
            $('#umidade').html(umidade+"%");
                        
                        
            tempMaxima = Math.round(data.main.temp_max - 273);
            $('#tempMaxima').html(tempMaxima+"°");
            
            
            tempMinima = Math.round(data.main.temp_min - 273);
            $('#tempMinima').html(tempMinima+"°");
            
            
            pressao = data.main.pressure;
            $('#pressao').html(pressao+"ʰᴾᵃ");


            velocVento = data.wind.speed;
            $('#velocVento').html(velocVento);
            
            
            
            descricao = traduzirDescricao(data.weather[0].description);
            $('#situacao').html(descricao);
            
            var porSol = new Date(data.sys.sunset*1000);
            var descPorSol = porSol.getHours() +':'+ porSol.getMinutes();
            $('#porSol').html(descPorSol);
            
            var nascerSol = new Date(data.sys.sunrise*1000);
            var descNascerSol = nascerSol.getHours() +':'+ nascerSol.getMinutes();
            $('#nascerSol').html(descNascerSol);
            
            var icone = data.weather[0].icon;
            var caminhoIcone = 'img/icones/'+icone+'.png';
            $('#icone').attr('src',caminhoIcone);
            
        },
        error: function (argument) {
            alert('Falha ao obter dados!');
        }
    });
}
function traduzirDescricao(descricao)
    {
    descricaoTraduzida = "";
    if(descricao == "clear sky"){
        descricaoTraduzida = "Céu limpo";
    }else if(descricao == "few clouds") {
        descricaoTraduzida = "Poucas Nuvens";
    }else if(descricao == "scattered clouds"){
        descricaoTraduzida = "nuvens Dispersas";
    }else if(descricao == "broken clouds"){
        descricaoTraduzida = "Parcialmente Nublado";
    }else if(descricao == "shower rain"){
        descricaoTraduzida = "Pouca Chuva";
    }else if(descricao == "rain"){
        descricaoTraduzida = "Chuva";
    }else if(descricao == "thunderstorm"){
        descricaoTraduzida = "Trovoada";
    }else if(descricao == "snow"){
        descricaoTraduzida = "Neve";
    }else if(descricao == "mist"){
        descricaoTraduzida = "Névoa";
    }else if(descricao == "light rain"){
        descricaoTraduzida = "Chuva Leve";
    }else if(descricao == "overcast clouds"){
        descricaoTraduzida = "Nublado";
    }
    return descricaoTraduzida;
}

window.onload = function () {
    getClima();
};
