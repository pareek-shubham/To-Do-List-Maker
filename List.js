    function insert (value) {
        let tasks = beforeInsert ();
        tasks.push (value);
        afterInsert (tasks, value);
    }
  
  function beforeInsert () {
    //   check if storage has set or not
    let tasks = getFromStorage ();
    //   If not then set empty array into storage
    if (!tasks) {
      tasks = setIntoStorage ();
    }
    return tasks;
  }
  
  function setIntoStorage () {
    let tasks = [];
    localStorage.setItem ('tasks', JSON.stringify (tasks));
    return tasks;
  }
  
  function getFromStorage () {
    let tasks = localStorage.getItem ('tasks');
    //   Parse the data
    tasks = JSON.parse (tasks);
    return tasks;
  }
  
  function afterInsert (tasks, value) {
    //   Again set to local storage
    localStorage.setItem ('tasks', JSON.stringify (tasks));
    //   Display instant after set new item
    display (value);
    //   Clear input box
    document.getElementById ('input-task').value = null;
  }
  
  function display (item) {
    let ul = document.getElementById ('MyTaskList');
    let li = document.createElement ('li');
    ul.appendChild (li);
    li.innerHTML += item;
  }
  
  function displayAllTasks () {
    let list = getFromStorage ();
    list.forEach (function (item) {
      display (item);
    });
  }
  
  // Always call this function as it will display list
  displayAllTasks ();
