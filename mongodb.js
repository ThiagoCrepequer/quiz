const dbname = 'perguntas';

async function getPergunta(valor, client) {
  try {
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