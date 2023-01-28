window.onload = function() {

    window.alert('Olá eu me chamo André_bot e este é um formulario de boas praticas, vamos começar?');

    var paciente = {};
    paciente.nome = window.prompt('Qual o seu nome?');
    paciente.peso = window.prompt('Qual o seu peso em kg?');
    paciente.altura = window.prompt('Qual a sua altura em metros?');
    paciente.idade = parseInt(window.prompt('Qual a sua idade?'));
    paciente.alimentacao = parseInt(window.prompt('De 0 a 100 quão saudavel é sua alimentação?'));
    paciente.exercicios = parseInt(window.prompt( 'De 0 a 100 qual nivel de pratica de exercicios fisicos diarios?'));
    paciente.estudo = parseInt(window.prompt(' Quantos minutos voce estuda por dia?'));
    paciente.fisico = parseInt(window.prompt("De 0 a 100 como voce considera seu condicionamento fisico?"));

    if (typeof(paciente.altura) == 'string') { paciente.altura = parseFloat(paciente.altura.replace(',', '.'));}
    
    window.alert('Olá ' +paciente.nome +' Obrigado por responder, já estamos calculando seu indice de desenvolvimento pessoal.');

    paciente.imc = (paciente.peso / (paciente.altura * paciente.altura)).toFixed(2) ;

    

    var pts_saude = (paciente.alimentacao + paciente.exercicios); // habitos saudaveis 0 - 200
    
    if (paciente.idade <= 25) {
        var futuro_15 = '..';
        if (paciente.estudo < 10) {futuro_15 = 'futuro incerto pela frente, foque nos estudos pois isso mudará a sua vida!';}
        if (paciente.estudo >= 10 && paciente.estudo <30) {futuro_15 = 'futuro mediano pela frente, se esforce em estudar mais pois se voce quer se destacar não haja como uma pessoa comum!';}
        if (paciente.estudo >= 30 && paciente.estudo <90) {futuro_15 = 'futuro promissor pela frente, voce está no caminho certo, nunca pare de estudar, e se dedicar em aprender pois o conhecimento muda o mundo, muda o seu mundo!';}
        if (paciente.estudo >= 90) {futuro_15 = 'futuro brilhante pela frente, continue se dedicando nos estudos, e nunca desista de chegar tão longe quanto voce sonhe em chegar, os estudos te levará onde ninguem chegou!';}
        
        window.alert('Você está na flor da idade e tem um ' + futuro_15);
        var saude_15 = '..';
        var fisico_15 = '..';

        if (pts_saude < 50) {saude_15 = 'precisam melhorar e muito, se voce não se cuidar poderá ter problemas de saúde futuramente ';
                             if (paciente.alimentacao > paciente.exercicios) {saude_15 = saude_15 + 'e principalmente levando uma vida sedentaria.';}}

        if (pts_saude >= 50 && pts_saude <100) {saude_15 = 'precisam melhorar, saúde fisica também se reflete em boa saúde mental';
                             if (paciente.alimentacao > paciente.exercicios) {saude_15 = saude_15 + ', exercicios fisicos melhoram sua qualidade de vida e nao deve ser deixados de lado.';}else{saude_15 = saude_15 + ', e boa alimentação fortalece o teu corpo para encarar todos os desafios da vida.';}}

        if (pts_saude >= 100 && pts_saude <150) {saude_15 = 'são bons, mas podem ser melhorados, uma boa vida não é nada se não for 100% aproveitada'
                             if (paciente.alimentacao > paciente.exercicios) {saude_15 = saude_15 + ', exercicios fisicos melhora sua disposição para isso.';}else{saude_15 = saude_15 + ', e uma boa alimentação fortalece o teu corpo para encarar todos os desafios da vida.';}}
        if (pts_saude >= 150) {saude_15 = 'são excelentes, continue com boa alimentação e pratique exercicios fisicos para poder aproveitar bem a vida';}

        if (paciente.imc <= 18.5) {paciente.resultado = 'abaixo do peso ideal, uma boa alimentação + exercicios físicos podem dar exelentes resultados'; 
                                   if (paciente.fisico < 20) {paciente.resultado = paciente.resultado + ', não espere por atitudes que só voce pode tomar, se não está bem então faça algo pra mudar.';}
                                   if (paciente.fisico >=20 && paciente.fisico <50) {paciente.resultado = paciente.resultado + ', não espere por resultados sem atitudes.';}
                                   if (paciente.fisico >=50 && paciente.fisico <75) {paciente.resultado = paciente.resultado + ', mas acho que voce não vai querer sair da zona de conforto né?!';}
                                   if (paciente.fisico >=75) {paciente.resultado = paciente.resultado + ', mas se voce acha que está bem então quem sou eu pra falar algo né?!';}
                                  }

        if (paciente.imc > 18.5 && paciente.imc <= 24.9) {paciente.resultado = 'em uma faixa normal de peso';
                                   if (paciente.fisico < 20) {paciente.resultado = paciente.resultado + ', se não gosta do seu condicionamento fisico então comece uma rotina de treinos e boas praticas de alimentação.';}
                                   if (paciente.fisico >=20 && paciente.fisico <50) {paciente.resultado = paciente.resultado + ', te recomendo boas praticas de exercicios fisicos diarios para se manter saudavel.';}
                                   if (paciente.fisico >=50 && paciente.fisico <75) {paciente.resultado = paciente.resultado + ', parabens!';}
                                   if (paciente.fisico >=75) {paciente.resultado = paciente.resultado + ', parabens!';}}
                                 
        if (paciente.imc >24.9 && paciente.imc <= 29.9) {paciente.resultado = 'acima do peso';
                                   if (paciente.fisico < 20) {paciente.resultado = paciente.resultado + ', se não gosta do seu condicionamento fisico então comece uma rotina de treinos e boas praticas de alimentação.';}
                                   if (paciente.fisico >=20 && paciente.fisico <50) {paciente.resultado = paciente.resultado + ', te recomendo boas praticas de exercicios fisicos diarios para se manter saudavel.';}
                                   if (paciente.fisico >=50 && paciente.fisico <75) {paciente.resultado = paciente.resultado + ', continue assim e terá problemas no futuro, ou tenha bons habitos de vida e busque se manter saudável.';}
                                   if (paciente.fisico >=75) {paciente.resultado = paciente.resultado + ', parabens, se está bom assim, quem sou eu pra falar algo?!';}}
        
        if (paciente.imc > 29.9) {paciente.resultado = 'muito acima do peso ideal, e isso não se reflete em beleza e sim na sua saúde fisica';
                                    if (paciente.fisico < 20) {paciente.resultado = paciente.resultado + ', estamos de acordo que só há resultados com atitudes, e voce sabe quais atitudes tomar para mudar isso.';}
                                   if (paciente.fisico >=20 && paciente.fisico <50) {paciente.resultado = paciente.resultado + ', te recomendo boas praticas de exercicios fisicos diarios para se manter saudavel.';}
                                   if (paciente.fisico >=50 && paciente.fisico <75) {paciente.resultado = paciente.resultado + ', eu nao deixaria de praticar exercicios se eu fosse voce';}
                                   if (paciente.fisico >=75) {paciente.resultado = paciente.resultado + ', mas tudo isso so depende de voce';}}
        
        
         
        window.alert('Os teus hábitos ' + saude_15);
        window.alert ("O seu indice IMC é de " +paciente.imc + " e isso mostra que você está " + paciente.resultado);
        window.alert ('Obrigado por participar desse quiz, até a proxima.');




     }






    if (paciente.idade > 25 && paciente.idade <= 35) { 
        var futuro_35 = '..';
        if (paciente.estudo < 10) {futuro_35 = 'futuro incerto pela frente, foque nos estudos pois isso mudará a sua vida!';}
        if (paciente.estudo >= 10 && paciente.estudo <30) {futuro_35 = 'futuro mediano pela frente, se esforce em estudar mais pois se voce quer se destacar não haja como uma pessoa comum!';}
        if (paciente.estudo >= 30 && paciente.estudo <90) {futuro_35 = 'futuro promissor pela frente, voce está no caminho certo, nunca pare de estudar, e se dedicar em aprender pois o conhecimento muda o mundo, muda o seu mundo!';}
        if (paciente.estudo >= 90) {futuro_35 = 'futuro brilhante pela frente, continue se dedicando nos estudos, e nunca desista de chegar tão longe quanto voce sonhe em chegar, os estudos te levará onde ninguem chegou!';}
        
        window.alert('Você esta na fase madura da vida e tem um  ' + futuro_35);
        var saude_35 = '..';
        var fisico_35 = '..';

        if (pts_saude < 50) {saude_35 = 'precisam melhorar e muito, se voce não se cuidar poderá ter problemas de saúde futuramente ';
                             if (paciente.alimentacao > paciente.exercicios) {saude_35 = saude_35 + 'e principalmente levando uma vida sedentaria.';}}

        if (pts_saude >= 50 && pts_saude <100) {saude_35 = 'precisam melhorar, saúde fisica também se reflete em boa saúde mental';
                             if (paciente.alimentacao > paciente.exercicios) {saude_35 = saude_35 + ', exercicios fisicos melhoram sua qualidade de vida e nao deve ser deixados de lado.';}else{saude_35 = saude_35 + ', e boa alimentação fortalece o teu corpo para encarar todos os desafios da vida.';}}

        if (pts_saude >= 100 && pts_saude <150) {saude_35 = 'são bons, mas podem ser melhorados, uma boa vida não é nada se não for 100% aproveitada'
                             if (paciente.alimentacao > paciente.exercicios) {saude_35 = saude_35 + ', exercicios fisicos melhora sua disposição para isso.';}else{saude_35 = saude_35 + ', e uma boa alimentação fortalece o teu corpo para encarar todos os desafios da vida.';}}
        if (pts_saude >= 150) {saude_35 = 'são excelentes, continue com boa alimentação e pratique exercicios fisicos para poder aproveitar bem a vida';}

        if (paciente.imc <= 18.5) {paciente.resultado = 'abaixo do peso ideal, uma boa alimentação + exercicios físicos podem dar exelentes resultados'; 
                                   if (paciente.fisico < 20) {paciente.resultado = paciente.resultado + ', não espere por atitudes que só voce pode tomar, se não está bem então faça algo pra mudar.';}
                                   if (paciente.fisico >=20 && paciente.fisico <50) {paciente.resultado = paciente.resultado + ', não espere por resultados sem atitudes.';}
                                   if (paciente.fisico >=50 && paciente.fisico <75) {paciente.resultado = paciente.resultado + ', mas acho que voce não vai querer sair da zona de conforto né?!';}
                                   if (paciente.fisico >=75) {paciente.resultado = paciente.resultado + ', mas se voce acha que está bem então quem sou eu pra falar algo né?!';}
                                  }

        if (paciente.imc > 18.5 && paciente.imc <= 24.9) {paciente.resultado = 'em uma faixa normal de peso';
                                   if (paciente.fisico < 20) {paciente.resultado = paciente.resultado + ', se não gosta do seu condicionamento fisico então comece uma rotina de treinos e boas praticas de alimentação.';}
                                   if (paciente.fisico >=20 && paciente.fisico <50) {paciente.resultado = paciente.resultado + ', te recomendo boas praticas de exercicios fisicos diarios para se manter saudavel.';}
                                   if (paciente.fisico >=50 && paciente.fisico <75) {paciente.resultado = paciente.resultado + ', parabens!';}
                                   if (paciente.fisico >=75) {paciente.resultado = paciente.resultado + ', parabens!';}}
                                 
        if (paciente.imc >24.9 && paciente.imc <= 29.9) {paciente.resultado = 'acima do peso';
                                   if (paciente.fisico < 20) {paciente.resultado = paciente.resultado + ', se não gosta do seu condicionamento fisico então comece uma rotina de treinos e boas praticas de alimentação.';}
                                   if (paciente.fisico >=20 && paciente.fisico <50) {paciente.resultado = paciente.resultado + ', te recomendo boas praticas de exercicios fisicos diarios para se manter saudavel.';}
                                   if (paciente.fisico >=50 && paciente.fisico <75) {paciente.resultado = paciente.resultado + ', continue assim e terá problemas no futuro, ou tenha bons habitos de vida e busque se manter saudável.';}
                                   if (paciente.fisico >=75) {paciente.resultado = paciente.resultado + ', parabens, se está bom assim, quem sou eu pra falar algo?!';}}
        
        if (paciente.imc > 29.9) {paciente.resultado = 'muito acima do peso ideal, e isso não se reflete em beleza e sim na sua saúde fisica';
                                    if (paciente.fisico < 20) {paciente.resultado = paciente.resultado + ', estamos de acordo que só há resultados com atitudes, e voce sabe quais atitudes tomar para mudar isso.';}
                                   if (paciente.fisico >=20 && paciente.fisico <50) {paciente.resultado = paciente.resultado + ', te recomendo boas praticas de exercicios fisicos diarios para se manter saudavel.';}
                                   if (paciente.fisico >=50 && paciente.fisico <75) {paciente.resultado = paciente.resultado + ', eu nao deixaria de praticar exercicios se eu fosse voce';}
                                   if (paciente.fisico >=75) {paciente.resultado = paciente.resultado + ', mas tudo isso so depende de voce';}}
        
        
         
        window.alert('Os teus hábitos ' + saude_35);
        window.alert ("O seu indice IMC é de " +paciente.imc + " e isso mostra que você está " + paciente.resultado);
        window.alert ('Obrigado por participar desse quiz, até a proxima.');


    }
    if (paciente.idade > 35 && paciente.idade <= 45) { 
        var futuro_40 = '..';
        if (paciente.estudo < 10) {futuro_40 = 'futuro incerto pela frente, foque nos estudos pois isso mudará a sua vida!';}
        if (paciente.estudo >= 10 && paciente.estudo <30) {futuro_40 = 'futuro mediano pela frente, se esforce em estudar mais pois se voce quer se destacar não haja como uma pessoa comum!';}
        if (paciente.estudo >= 30 && paciente.estudo <90) {futuro_40 = 'futuro promissor pela frente, voce está no caminho certo, nunca pare de estudar, e se dedicar em aprender pois o conhecimento muda o mundo, muda o seu mundo!';}
        if (paciente.estudo >= 90) {futuro_40 = 'futuro brilhante pela frente, continue se dedicando nos estudos, e nunca desista de chegar tão longe quanto voce sonhe em chegar, os estudos te levará onde ninguem chegou!';}
        
        window.alert('Você ja tem bastante experiencia de vida e ' + futuro_40);
        var saude_40 = '..';
        var fisico_40 = '..';

        if (pts_saude < 50) {saude_40 = 'precisam melhorar e muito, se voce não se cuidar poderá ter problemas de saúde futuramente ';
                             if (paciente.alimentacao > paciente.exercicios) {saude_40 = saude_40 + 'e principalmente levando uma vida sedentaria.';}}

        if (pts_saude >= 50 && pts_saude <100) {saude_40 = 'precisam melhorar, saúde fisica também se reflete em boa saúde mental';
                             if (paciente.alimentacao > paciente.exercicios) {saude_40 = saude_40 + ', exercicios fisicos melhoram sua qualidade de vida e nao deve ser deixados de lado.';}else{saude_40 = saude_40 + ', e boa alimentação fortalece o teu corpo para encarar todos os desafios da vida.';}}

        if (pts_saude >= 100 && pts_saude <150) {saude_40 = 'são bons, mas podem ser melhorados, uma boa vida não é nada se não for 100% aproveitada'
                             if (paciente.alimentacao > paciente.exercicios) {saude_40 = saude_40 + ', exercicios fisicos melhora sua disposição para isso.';}else{saude_40 = saude_40 + ', e uma boa alimentação fortalece o teu corpo para encarar todos os desafios da vida.';}}
        if (pts_saude >= 150) {saude_40 = 'são excelentes, continue com boa alimentação e pratique exercicios fisicos para poder aproveitar bem a vida';}

        if (paciente.imc <= 18.5) {paciente.resultado = 'abaixo do peso ideal, uma boa alimentação + exercicios físicos podem dar exelentes resultados'; 
                                   if (paciente.fisico < 20) {paciente.resultado = paciente.resultado + ', não espere por atitudes que só voce pode tomar, se não está bem então faça algo pra mudar.';}
                                   if (paciente.fisico >=20 && paciente.fisico <50) {paciente.resultado = paciente.resultado + ', não espere por resultados sem atitudes.';}
                                   if (paciente.fisico >=50 && paciente.fisico <75) {paciente.resultado = paciente.resultado + ', mas acho que voce não vai querer sair da zona de conforto né?!';}
                                   if (paciente.fisico >=75) {paciente.resultado = paciente.resultado + ', mas se voce acha que está bem então quem sou eu pra falar algo né?!';}
                                  }

        if (paciente.imc > 18.5 && paciente.imc <= 24.9) {paciente.resultado = 'em uma faixa normal de peso';
                                   if (paciente.fisico < 20) {paciente.resultado = paciente.resultado + ', se não gosta do seu condicionamento fisico então comece uma rotina de treinos e boas praticas de alimentação.';}
                                   if (paciente.fisico >=20 && paciente.fisico <50) {paciente.resultado = paciente.resultado + ', te recomendo boas praticas de exercicios fisicos diarios para se manter saudavel.';}
                                   if (paciente.fisico >=50 && paciente.fisico <75) {paciente.resultado = paciente.resultado + ', parabens!';}
                                   if (paciente.fisico >=75) {paciente.resultado = paciente.resultado + ', parabens!';}}
                                 
        if (paciente.imc >24.9 && paciente.imc <= 29.9) {paciente.resultado = 'acima do peso';
                                   if (paciente.fisico < 20) {paciente.resultado = paciente.resultado + ', se não gosta do seu condicionamento fisico então comece uma rotina de treinos e boas praticas de alimentação.';}
                                   if (paciente.fisico >=20 && paciente.fisico <50) {paciente.resultado = paciente.resultado + ', te recomendo boas praticas de exercicios fisicos diarios para se manter saudavel.';}
                                   if (paciente.fisico >=50 && paciente.fisico <75) {paciente.resultado = paciente.resultado + ', continue assim e terá problemas no futuro, ou tenha bons habitos de vida e busque se manter saudável.';}
                                   if (paciente.fisico >=75) {paciente.resultado = paciente.resultado + ', parabens, se está bom assim, quem sou eu pra falar algo?!';}}
        
        if (paciente.imc > 29.9) {paciente.resultado = 'muito acima do peso ideal, e isso não se reflete em beleza e sim na sua saúde fisica';
                                    if (paciente.fisico < 20) {paciente.resultado = paciente.resultado + ', estamos de acordo que só há resultados com atitudes, e voce sabe quais atitudes tomar para mudar isso.';}
                                   if (paciente.fisico >=20 && paciente.fisico <50) {paciente.resultado = paciente.resultado + ', te recomendo boas praticas de exercicios fisicos diarios para se manter saudavel.';}
                                   if (paciente.fisico >=50 && paciente.fisico <75) {paciente.resultado = paciente.resultado + ', eu nao deixaria de praticar exercicios se eu fosse voce';}
                                   if (paciente.fisico >=75) {paciente.resultado = paciente.resultado + ', mas tudo isso so depende de voce';}}
        
        
         
        window.alert('Os teus hábitos ' + saude_40);
        window.alert ("O seu indice IMC é de " +paciente.imc + " e isso mostra que você está " + paciente.resultado);
        window.alert ('Obrigado por participar desse quiz, até a proxima.');
    }


    if (paciente.idade > 45 ) { 
        var futuro_45 = '..';
        if (paciente.estudo < 10) {futuro_45 = 'futuro parece nao importar tanto pra voce, foque nos estudos pois isso mudará a sua vida!';}
        if (paciente.estudo >= 10 && paciente.estudo <30) {futuro_45 = 'futuro parece distante, não desista de estudar e aprender coisas novas pois de nada vale uma vida sem sonhos!';}
        if (paciente.estudo >= 30 && paciente.estudo <90) {futuro_45 = 'futuro parece reservar mais pra voce, está no caminho certo, nunca pare de estudar, e se dedicar em aprender pois o conhecimento muda o mundo, muda o seu mundo!';}
        if (paciente.estudo >= 90) {futuro_45 = 'futuro brilhante pela frente, continue se dedicando nos estudos, e nunca desista de chegar tão longe quanto voce sonhe em chegar, os estudos te levará onde ninguem chegou!';}
        
        window.alert('Daqui pra frente as coisas ficam mais dificeis e o ' + futuro_45);
        var saude_45 = '..';
        var fisico_45 = '..';

        if (pts_saude < 50) {saude_45 = 'precisam melhorar e muito, se voce não se cuidar poderá ter problemas de saúde futuramente ';
                             if (paciente.alimentacao > paciente.exercicios) {saude_45 = saude_45 + 'e principalmente levando uma vida sedentaria.';}}

        if (pts_saude >= 50 && pts_saude <100) {saude_45 = 'precisam melhorar, saúde fisica também se reflete em boa saúde mental';
                             if (paciente.alimentacao > paciente.exercicios) {saude_45 = saude_45 + ', exercicios fisicos melhoram sua qualidade de vida e nao deve ser deixados de lado.';}else{saude_45 = saude_45 + ', e boa alimentação fortalece o teu corpo para encarar todos os desafios da vida.';}}

        if (pts_saude >= 100 && pts_saude <150) {saude_45 = 'são bons, mas podem ser melhorados, uma boa vida não é nada se não for 100% aproveitada'
                             if (paciente.alimentacao > paciente.exercicios) {saude_45 = saude_45 + ', exercicios fisicos melhora sua disposição para isso.';}else{saude_45 = saude_45 + ', e uma boa alimentação fortalece o teu corpo para encarar todos os desafios da vida.';}}
        if (pts_saude >= 150) {saude_45 = 'são excelentes, continue com boa alimentação e pratique exercicios fisicos para poder aproveitar bem a vida';}

        if (paciente.imc <= 18.5) {paciente.resultado = 'abaixo do peso ideal, uma boa alimentação + exercicios físicos podem dar exelentes resultados'; 
                                   if (paciente.fisico < 20) {paciente.resultado = paciente.resultado + ', não espere por atitudes que só voce pode tomar, se não está bem então faça algo pra mudar.';}
                                   if (paciente.fisico >=20 && paciente.fisico <50) {paciente.resultado = paciente.resultado + ', não espere por resultados sem atitudes.';}
                                   if (paciente.fisico >=50 && paciente.fisico <75) {paciente.resultado = paciente.resultado + ', mas acho que voce não vai querer sair da zona de conforto né?!';}
                                   if (paciente.fisico >=75) {paciente.resultado = paciente.resultado + ', mas se voce acha que está bem então quem sou eu pra falar algo né?!';}
                                  }

        if (paciente.imc > 18.5 && paciente.imc <= 24.9) {paciente.resultado = 'em uma faixa normal de peso';
                                   if (paciente.fisico < 20) {paciente.resultado = paciente.resultado + ', se não gosta do seu condicionamento fisico então comece uma rotina de treinos e boas praticas de alimentação.';}
                                   if (paciente.fisico >=20 && paciente.fisico <50) {paciente.resultado = paciente.resultado + ', te recomendo boas praticas de exercicios fisicos diarios para se manter saudavel.';}
                                   if (paciente.fisico >=50 && paciente.fisico <75) {paciente.resultado = paciente.resultado + ', parabens!';}
                                   if (paciente.fisico >=75) {paciente.resultado = paciente.resultado + ', parabens!';}}
                                 
        if (paciente.imc >24.9 && paciente.imc <= 29.9) {paciente.resultado = 'acima do peso';
                                   if (paciente.fisico < 20) {paciente.resultado = paciente.resultado + ', se não gosta do seu condicionamento fisico então comece uma rotina de treinos e boas praticas de alimentação.';}
                                   if (paciente.fisico >=20 && paciente.fisico <50) {paciente.resultado = paciente.resultado + ', te recomendo boas praticas de exercicios fisicos diarios para se manter saudavel.';}
                                   if (paciente.fisico >=50 && paciente.fisico <75) {paciente.resultado = paciente.resultado + ', continue assim e terá problemas no futuro, ou tenha bons habitos de vida e busque se manter saudável.';}
                                   if (paciente.fisico >=75) {paciente.resultado = paciente.resultado + ', parabens, se está bom assim, quem sou eu pra falar algo?!';}}
        
        if (paciente.imc > 29.9) {paciente.resultado = 'muito acima do peso ideal, e isso não se reflete em beleza e sim na sua saúde fisica';
                                    if (paciente.fisico < 20) {paciente.resultado = paciente.resultado + ', estamos de acordo que só há resultados com atitudes, e voce sabe quais atitudes tomar para mudar isso.';}
                                   if (paciente.fisico >=20 && paciente.fisico <50) {paciente.resultado = paciente.resultado + ', te recomendo boas praticas de exercicios fisicos diarios para se manter saudavel.';}
                                   if (paciente.fisico >=50 && paciente.fisico <75) {paciente.resultado = paciente.resultado + ', eu nao deixaria de praticar exercicios se eu fosse voce';}
                                   if (paciente.fisico >=75) {paciente.resultado = paciente.resultado + ', mas tudo isso so depende de voce';}}
        
        
         
        window.alert('Os teus hábitos ' + saude_45);
        window.alert ("O seu indice IMC é de " +paciente.imc + " e isso mostra que você está " + paciente.resultado);
        window.alert ('Obrigado por participar desse quiz, até a proxima.');
    }



   

   /*
   - Idade
   - Alimentação
   - Exercicios fisicos
   - horas de Estudo
   - Satisfação financeira
   - Satisfação com fisico
   - 


   */










}