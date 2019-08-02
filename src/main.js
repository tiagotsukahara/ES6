class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List {
  constructor() {
    super();

    this.usuario = "Diego";
  }

  mostrauUsuario() {
    console.log(this.usuario);
  }
}

const MinhaLIsta = new TodoList();

document.getElementById("novoTodo").onclick = function() {
  MinhaLIsta.add("Novo todo");
};

MinhaLIsta.mostrauUsuario();
