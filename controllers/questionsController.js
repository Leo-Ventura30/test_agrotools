const questionsDomain = require("../domains/questionsDomain");
class questionsController {
  async find(req, res) {
    try {
      const response = await questionsDomain.find();
      return res.json(response);
    } catch (error) {
      res.json(error);
    }
  }

  async create(req, res) {
    try {
      const response = questionsDomain.create();
      return res.json(response);
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = new questionsController();
