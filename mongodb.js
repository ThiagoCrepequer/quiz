const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv')
dotenv.config({debug: true})


const url = process.env.URL_MONGO;
const dbname = 'perguntas';

async function getPergunta(valor) {
  try {
    const client = await MongoClient.connect(url, { useNewUrlParser: true });
    
    const perguntasCollection = client.db(dbname).collection('perguntas');
    
    const pergunta = await perguntasCollection.findOne({ sequencia: `${valor}` });
    if(pergunta == null) {
        return undefined
    }
    return pergunta
  } catch (err) {
    console.error(err);
  }
}

module.exports = getPergunta;

//getPergunta(1).then(pergunta => {
//    console.log(pergunta)
//});