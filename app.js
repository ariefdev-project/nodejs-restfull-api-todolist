import http from "http";
import { service } from "belajar/service";

const serv = new service();

http
  .createServer((request, response) => {
    response.setHeader("Content-Type", "application/json");
    if (request.method == "GET") {
      serv.getTodolist(response);
    } else if (request.method == "POST") {
      serv.createTodo(request, response);
    } else if (request.method == "PUT") {
      serv.updateTodo(request, response);
    } else if (request.method == "DELETE") {
      serv.deleteTodo(request, response);
    }
  })
  .listen(8080, "localhost", () => {
    console.info("[+] Server running : http://localhost:8080");
  });
