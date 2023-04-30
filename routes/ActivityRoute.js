import BaseRoutes from "./BaseRoute.js";
import ActivityController from "../controllers/ActivityController.js";

class AuthRoutes extends BaseRoutes {
    setRoutes() {
        this.routes.get("/", ActivityController.getAll);
    }
}

export default new AuthRoutes().routes;
