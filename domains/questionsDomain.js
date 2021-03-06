const fs = require("fs");
class questionsDomain {
  async find() {
    var questions = JSON.parse(
      fs.readFileSync("./mock/questions.json").toString()
    );
    return questions;
  }

  async create() {
    const datas = {
      titulo: "porra",
      usuario: "Demonio",
      createdAt: "06/06/2666",
    };
    const questions = await this.find();

    console.log(JSON.stringify(questions));
  }
}

module.exports = new questionsDomain();
