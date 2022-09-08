const Task = require('../models/Task')

module.exports = class TaskController {
  static createTask(request, response) {
    response.render('tasks/create')
  }

  static showTasks(request, response) {
    response.render('tasks/all')
  }
}