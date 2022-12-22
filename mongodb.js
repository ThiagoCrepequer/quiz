const { Collection } = require('mongodb');

const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://crepequer:BMItzmDTpiCMnbnD@cluster0.8iormio.mongodb.net/test';
const dbname = 'perguntas';

async function getPergunta(valor) {
  try {
    const client = await MongoClient.connect(url, { useNewUrlParser: true });
    console.log('Conectado ao MongoDB');

    const perguntasCollection = client.db(dbname).collection('perguntas');
    
    const pergunta = await perguntasCollection.findOne({ sequencia: `${valor}` });

    return pergunta
  } catch (err) {
    console.error(err);
  }
}

module.exports = getPergunta;

//getPergunta(1).then(pergunta => {
//    console.log(pergunta)
//});