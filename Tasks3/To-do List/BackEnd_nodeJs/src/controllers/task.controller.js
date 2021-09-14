const Task = require('../Schema/index');

module.exports.allRequest = class {
  getAllTasks = async (req, res, next) => {
    try {
      Task.find().then(result => {
        res.json({data: result});
      });
    }
    catch (e) {
      res.status(400).json({e});
    }
  }

  createNewTask = (req, res, next) => {
    try {
      const task = new Task(req.body);
      task.save().then(result => {
        res.json(result);
      });
    }
    catch (e) {
      res.status(400).json({e});
    }
  }

  changeTaskInfo = (req, res) => {
    try {
      Task.updateOne({'_id':req.body._id}, req.body).then (resul => {
        Task.find({'_id': (req.body._id)}).then (result => {
          res.json(result);
        });
      });
    }
    catch (e) {
      res.status(400).json({e});
    }
  }

  deleteTask = async (req, res) => {
    try {
      const {_id} = req.query;
      const result = await Task.deleteOne({_id});
      res.json(result);
    }
    catch (e) {
      res.status(400).json({e});
    }
  }

  deleteAllTask = async (req, res) => {
    try {
      const result = await Task.deleteMany();
      res.json(result);
    }
    catch (e) {
      res.status(400).json({e});
    }
  }
}
