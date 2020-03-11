
class API{
  
  constructor(){
    this.users = [
      { id: 1, name: 'Luciana Lemos', age: 20 },
      { id: 2, name: 'Mário Albuquerque', age: 25 },
      { id: 3, name: 'Antônico dos Santos', age: 30 },
      { id: 4, name: 'Maria da Silva', age: 35 }
    ];
  }

  async getUsers(){
    return this.users;
  }
  
  async getUserId(id){
    return this.users.find(user => user.id == id);
  }

}

const api = new API();

export default api
