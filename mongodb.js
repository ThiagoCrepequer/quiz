const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv')
dotenv.config({debug: true})

const dbname = 'perguntas';
const url = process.env.URL_MONGO;
console.log(url)

var client

async function connectClient() {
    console.log('Iniciada uma nova conexão')
    const client = await MongoClient.connect(url, { useNewUrlParser: true });
    return client
}
connectClient().then(res => {
    console.log('Conexão estabelecida')
    client = res
})

async function getPergunta(valor) {
  try {
    console.log('Houve uma tentativa de buscar uma questão no banco de dados')
    if(!client) {
      console.log('O Client ainda não foi carregado')
      return;
    }
    const perguntasCollection = client.db(dbname).collection('perguntas');
    
    const pergunta = await perguntasCollection.findOne({ sequencia: `${valor}` });
    if(pergunta == null) {
        return undefined
    }
    console.log(pergunta)
    return pergunta
  } catch (err) {
    console.error(err);
  }
}

module.exports = getPergunta;