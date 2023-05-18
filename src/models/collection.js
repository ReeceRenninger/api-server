'use strict';



class Collection {
  constructor(model){
    this.model = model;
  }

  async create(data){
    try {
      const newRecord = await this.model.create(data);
      return newRecord;

    } catch (error) {
      console.error('we have a ModelInterface create error', error);
      return error;
    }
  }
  
  // ** This is working on thunderclient
  async read(id=null){
    try {
      if(id){
        const findOneRecord = await this.model.findByPk(id);
        return findOneRecord;
      }else {
        const findAllRecords = await this.model.findAll();
        return findAllRecords;
      }
    } catch (error) {
      console.error('we have a ModelInterface read error', error);
    }
  }


}


module.exports = Collection;