const Task = require('../models/Task')

module.exports = class TaskController {
  static createTask(request, response) {
    response.render('tasks/create')
  }

  static async createTaskSave(request, response) {
    const task = {
      title: request.body.title,
      description: request.body.description,
      done: false
    }

    await Task.create(task)

    response.redirect('/tasks')
  }

  static showTasks(request, response) {
    response.render('tasks/all')
  }
}