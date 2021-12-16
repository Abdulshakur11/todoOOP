class todo {
  constructor(id, title, status) {
    this.id = id;
    this.title = title;
    this.status = status;
  }

  setid(id) {
    this.id = id;
  }
  settitle(title) {
    this.title = title;
  }
  setstatus(status) {
    this.status = status;
  }

  push(id, title, status) {
    this.setid(id);
    this.settitle(title);
    this.setstatus(status);
  }

 
  delete(id) {
    const todolist=document.querySelector("#todo-list");
    todolist.childNodes.forEach(item => {
      console.log(item);
      if (item.id == id) {
        item.remove();
      }
    }
    );
  }
  render(id, title, status) {
    const template = document.querySelector("#todo-template").content;
    const clone = template.cloneNode(true);
    
    clone.querySelector("#todo-title").textContent = title;
    clone.querySelector("#todo-item").id = id;
    const checkbox = clone.querySelector(".todo-status");
    checkbox.checked = status;
    checkbox.addEventListener("click", () => {
      this.setstatus(checkbox.checked);
      this.update();
    }
    );
    const deleteButton = clone.querySelector("#todo-delete");
    deleteButton.addEventListener("click", (item) => {
      this.delete(id);
    }
    );
    document.querySelector("#todo-list").appendChild(clone);
    return clone;
  }
}

const todoObject = new todo();
let id = 0;
document.getElementById("forma").addEventListener("submit", e => {
  e.preventDefault();
  const todo = document.getElementById("todo").value;
  const status = false;
  const itemid = id++;
  todoObject.push(itemid, todo, status);
  document.getElementById("todo").value = "";
  document.getElementById("todo").focus();
  todoObject.render(itemid, todo, status);
});
