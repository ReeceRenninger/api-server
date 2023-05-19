'use strict';

class Collection {
  constructor(model){
    this.model = model;
  }

  //!! WORKING DO NOT TOUCH
  async create(data){
    try {
      const newRecord = await this.model.create(data);
      return newRecord;

    } catch (error) {
      console.error('we have a ModelInterface create error', error);
      return error;
    }
  }

  //!! WORKING DO NOT TOUCH
  async read(id=null, options=null){
    try {
      if(id){
        const findOneRecord = await this.model.findByPk(id);
        return findOneRecord;

      } else if (options){
        let allRecords = await this.model.findAll(options);
        return allRecords;

      } else {
        const findAllRecords = await this.model.findAll();
        return findAllRecords;
      }
    } catch (error) {
      console.error('we have a ModelInterface read error', error);
    }
  }

  //!! Ryan helped me format this to be correct
  //update a record
  async update(data, id) {
    try {
      await this.model.update(data, {where: { id } });
    
      let updatedRecord = await this.model.findByPk(id);
      return updatedRecord;
    } catch (error) {
      console.error('we have a ModelInterface update error', error);
    }
  }

  //!! WORKING DO NOT TOUCH
  //Delete a record
  async delete(id){
    try {
      await this.model.destroy({where:{ id }});

      let deletedRecord = await this.model.findByPk(id);
      return deletedRecord;
    } catch (error) {
      console.error('we have a ModelInterface delete error', error);
    }
  }

}


module.exports = Collection;