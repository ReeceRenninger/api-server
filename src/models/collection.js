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

  async update(data, id) {
    try {
      await this.model.update(data, {where: { id } });
    
      let updatedRecord = await this.model.findByPk(id);
      return updatedRecord;
    } catch (error) {
      console.error('we have a ModelInterface update error', error);
    }
  }

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