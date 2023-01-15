export class service {
  todolist = [
    "Belajar nodejs-dasar",
    "Belajar nodejs-npm",
    "Belajar nodejs-logging",
    "Belajar nodejs-unit-test",
    "Belajar nodejs-express",
  ];

  getJsonTodolist() {
    return JSON.stringify({
      code: 200,
      status: "ok",
      data: this.todolist.map((value, index) => {
        return {
          id: index,
          todo: value,
        };
      }),
    });
  }

  getTodolist(response) {
    response.write(this.getJsonTodolist());
    response.end();
  }

  createTodo(request, response) {
    request.addListener("data", (data) => {
      const body = JSON.parse(data.toString());
      this.todolist.push(body.todo);

      response.write(this.getJsonTodolist());
      response.end();
    });
  }

  updateTodo(request, response) {
    request.addListener("data", (data) => {
      const body = JSON.parse(data.toString());
      if (this.todolist[body.id]) {
        this.todolist[body.id] = body.todo;
        response.write(this.getJsonTodolist());
        response.end();
      }
    });
  }

  deleteTodo(request, response) {
    request.addListener("data", (data) => {
      const body = JSON.parse(data.toString());
      if (this.todolist[body.id]) {
        this.todolist.splice(body.id, 1);
        response.write(this.getJsonTodolist());
        response.end();
      }
    });
  }
}
