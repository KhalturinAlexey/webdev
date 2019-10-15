window.onload = function () {
  var btn = document.getElementById('button');
  var txtArea = document.getElementById('textarea');

  // add task handler
  btn.onclick = function () {
    // add element to UI
    var taskContent = txtArea.value;
    var containerToDo = document.getElementById('container-to-do');
    var newTask = document.createElement('div');
    newTask.classList.add('new', 'checkbox');
    containerToDo.append(newTask);
    var label = document.createElement('label');
    var check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    label.append(check);
    newTask.append(label);
    var text = document.createTextNode(taskContent);
    label.append(text);
    var icon = document.createElement('i');
    icon.classList.add('glyphicon', 'glyphicon-trash', 'icon', 'remove-card');
    newTask.append(icon);
    txtArea.value = "";

    // register events here:

    // complete task
    // TODO: labeled - not valid name for CSS and context
    check.onclick = function () {
      label.classList.toggle('labeled');
    };

    // TODO: delete task event
    icon.onclick = function (event) {
      var target = event.target; //get event target
      var parent = target.parentElement; //get parent target element
      parent.classList.add("delete");
      parent.style.display = "none"; //display none
    };

    // TODO: complete all handler here
    var completeAll = document.getElementById('complete-all');
    completeAll.onclick = function () {
      var allTaskContainer = document.getElementById('container-to-do');
      var allTaskInputs = allTaskContainer.getElementsByTagName('input');
      for (var index = 0; index < allTaskInputs.length; ++index) {
        if (!allTaskInputs[index].checked)
        {
          allTaskInputs[index].click();
          allTaskInputs[index].checked = true;
        }
      }
    };

    // TODO: filter tasks
    var filterShowAll = document.getElementById('filter-show-all');
    filterShowAll.onclick = function () {
      var allTaskContainer = document.getElementById('container-to-do');
      var allTask = allTaskContainer.childNodes;
      for (var index = 0; index < allTask.length; ++index) {
        var task = allTask[index];
        if (task.style.display == 'none')
        {
          task.style.display = 'block';
        }
      }
    };

    var filterShowCompleted = document.getElementById('filter-show-completed');
    filterShowCompleted.onclick = function () {
      var allTaskContainer = document.getElementById('container-to-do');
      var allTask = allTaskContainer.childNodes;
      for (var index = 0; index < allTask.length; ++index) {
        var task = allTask[index];
        var taskInput = task.getElementsByTagName('input')[0];
        var isCompleted = taskInput.checked;
        if (!isCompleted)
        {
          task.style.display = 'none';
        }
      }
    };

    var filterShowRemoved = document.getElementById('filter-show-removed');
    filterShowRemoved.onclick = function () {
      var allTaskContainer = document.getElementById('container-to-do');
      var allTask = allTaskContainer.childNodes;
      for (var index = 0; index < allTask.length; ++index) {
        var task = allTask[index];
        var displayStyle = (task.classList.contains('delete')) ? 'block' : 'none'; //тернарный оператор 
        task.style.display  = displayStyle;
      }
    };
  };
}