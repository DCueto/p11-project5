
class DecathlonApi {
    constructor(){
      this.baseUrl = 'https://deca-api-server-c2ce4a810fea.herokuapp.com';
    }

    async fetchData(path){
      try{
        const request = await fetch(`${this.baseUrl}/${path}`);
        const response = await request.json();
        return response;
      } catch(error){
        throw new Error('Error al obtener datos de la API de Decathlon: ' + error);
      }
    }
}

export default DecathlonApi;