function TodoModel() {
  this.todoTasks = JSON.parse(localStorage.getItem('todoTasks')) || [];
  
  this.getTasks = function () {
    return this.todoTasks;
  }

  this.addTask = function (task) {
    this.todoTasks.push(task);
    this.sync();
  }
  
  this.completeAllTasks = function () {
    for (var i = 0; i < this.todoTasks.length; i++) {
      this.todoTasks[i].completed = true;
    }
    this.sync();
  }
  
  this.toggleCompleteTask = function (id) {
    for (var i = 0; i < this.todoTasks.length; i++) {
      if (this.todoTasks[i].id === id) {
        this.todoTasks[i].completed = !this.todoTasks[i].completed;
      }
    }
    this.sync();
  }
  
  this.sync = function () {
    localStorage.setItem('todoTasks', JSON.stringify(this.todoTasks));
  }
  
}

function TodoView() {
  this.taskInput = document.querySelector('#todo .task-input');
  this.taskAddButton = document.querySelector('#todo #task-add-button');
  this.tasksCompletedButton = document.querySelector('#todo #tasks-completed-button');
  this.todoList = document.querySelector('#todo .todo-list');

  // по умолчанию обработчики ничего не делают
  this.onAddTodo = function () {};
  this.onToggleCompleteTodo = function () {};
  this.onTasksCompleteTodo = function () {};
  
  this.setTodoTasks = function(todoTasks) {
  	for (var i = 0; i < todoTasks.length; i++) {
      var newTask = document.createElement('div');
    	newTask.className = 'task';
    	newTask.innerHTML = '<input type="checkbox" ' + (todoTasks[i].completed ? 'checked' : '') +' id="' + todoTasks[i].id +'">' + todoTasks[i].text;
      newTask.onclick = function (id) {
      	// данный обработчик будет вызван когда будет клик по чекбоксу выполнения
      	this.onToggleCompleteTodo(id);
    	}.bind(this, todoTasks[i].id);
      this.todoList.appendChild(newTask);
    }
  	
  }

  this.taskAddButton.onclick = function () {
    // добавление задачи в HTML, привязка обработчика
    var newTask = document.createElement('div');
    newTask.className = 'task';
    var newId = this.todoList.children.length + 1;
    newTask.innerHTML = '<input type="checkbox" id="' + newId +'">' + this.taskInput.value;
    newTask.onclick = function () {
      // данный обработчик будет вызван когда будет клик по чекбоксу выполнения
      this.onToggleCompleteTodo(newId);
    }.bind(this);

    this.todoList.appendChild(newTask);

  
    // данный обработчик будет вызван когда задача добавлена в разметку
    this.onAddTodo({
      id: newId,
      text: this.taskInput.value,
    });
  }.bind(this);
  
  this.tasksCompletedButton.onclick = function() {
    var todoListInputs = document.querySelectorAll('#todo .todo-list .task input');
    todoListInputs.forEach(function(item) {
      item.checked = true;
    });
    
  	this.onTasksCompleteTodo();
  }.bind(this);
}

function TodoController() {
  this.todoModel = new TodoModel();
  this.todoView = new TodoView();
  
  this.todoView.setTodoTasks(this.todoModel.todoTasks);
  
  this.todoView.onAddTodo = function(task) {
    this.todoModel.addTask({
      id: task.id,
      text: task.text,
    });

    console.log(this.todoModel.getTasks()); // debug
  }.bind(this);

  this.todoView.onToggleCompleteTodo = function(id) {
    this.todoModel.toggleCompleteTask(id);

    console.log(this.todoModel.getTasks()); // debug
  }.bind(this);
  
  this.todoView.onTasksCompleteTodo = function() {
    this.todoModel.completeAllTasks();

    console.log(this.todoModel.getTasks()); // debug
  }.bind(this);
}

var todoController = new TodoController();

