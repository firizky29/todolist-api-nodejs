import BaseRoutes from "./BaseRoute.js";
import ActivityController from "../controllers/ActivityController.js";

class ActivityRoute extends BaseRoutes {
    setRoutes() {
        this.routes.get("/", ActivityController.getAll);
        this.routes.get("/:id", ActivityController.get);
        this.routes.post("/", ActivityController.create);
        this.routes.patch("/:id", ActivityController.update);
        this.routes.delete("/:id", ActivityController.delete);
    }
}

export default new ActivityRoute().routes;
