function showAnswer(){
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let tips = document.getElementById("tips").value;
    let prodquality = document.getElementById("prodquality").value
    let attquality = document.getElementById("attquality").value;

    let answerform = document.getElementById("answer");
    answerform.style.display = "flex";

    let namespace = document.createElement("p");
    namespace.id = "nome";
    answerform.appendChild(namespace);
    document.getElementById("nome").innerHTML = "Nome: " + name;

    let agespace = document.createElement("p");
    agespace.id = "idade";
    answerform.appendChild(agespace);
    document.getElementById("idade").innerHTML = "Idade: " + age;

    let emailspace = document.createElement("p");
    emailspace.id = "e-mail";
    answerform.appendChild(emailspace);
    document.getElementById("e-mail").innerHTML = "Email: " + email;

    let cityspace = document.createElement("p");
    cityspace.id = "cidade";
    answerform.appendChild(cityspace);
    document.getElementById("cidade").innerHTML = "Cidade: " + city;

    let statespace = document.createElement("p");
    statespace.id = "estado";
    answerform.appendChild(statespace);
    document.getElementById("estado").innerHTML = "Estado: " + state;

    let tipsspace = document.createElement("p");
    tipsspace.id = "dicas";
    answerform.appendChild(tipsspace);
    document.getElementById("dicas").innerHTML = "Dicas: " + tips;

    let prodspace = document.createElement("p");
    prodspace.id = "prod";
    answerform.appendChild(prodspace);
    document.getElementById("prod").innerHTML = "Qualidade do Produto: " + prodquality;

    let attspace = document.createElement("p");
    attspace.id = "att";
    answerform.appendChild(attspace);
    document.getElementById("att").innerHTML = "Qualidade do Atendimento: " + attquality;

    
}