import BaseRoutes from "./BaseRoute.js";
import ToDoController from "../controllers/ToDoController.js";

class ToDoRoute extends BaseRoutes {
    setRoutes() {
        this.routes.get("/", ToDoController.getAll);
        this.routes.get("/:id", ToDoController.get);
        this.routes.post("/", ToDoController.create);
        this.routes.patch("/:id", ToDoController.update);
        this.routes.delete("/:id", ToDoController.delete);
    }
}

export default new ToDoRoute().routes;
