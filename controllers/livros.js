const livros = require("../models/livros");

exports.get = (req, res) =>{
    res.status(200).send(livros)
};

exports.getG = (req, res) => {
    const {genero} = req.params;
    console.log(genero)
    if(!livros[genero]){
        res.status(404).send("Genero invalido");
    }else{
        res.status(200).send({genero: livros[genero]});
    }
}
exports.post = (req, res) =>{
    const genero = req.params.id;
    const novoLivro = req.body;
    console.log(novoLivro)
    console.log(genero)
    let index
    let retorno
    switch (genero) {
        case 'aventura':
            livros.aventura.push(novoLivro);
            retorno = livros
            index = 201;
            break;
        case 'suspense':
            livros.suspense.push(novoLivro);
            retorno = livros
            index = 201;
            break;
        case 'romance':
            livros.romance.push(novoLivro);
            retorno = livros
            index = 201;
            break;
        case 'ficcao':
            livros.ficcao.push(novoLivro);
            retorno = livros
            index = 201;
            break;
        default:
            retorno = "Genero invalido";
            index = 400;

    }
    res.status(index).send(retorno)
};
