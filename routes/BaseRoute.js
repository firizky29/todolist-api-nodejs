import { Router } from 'express';

class BaseRoutes {
    constructor() {
        this.routes = Router();
        this.setRoutes();
    }

    setRoutes() {}
}

export default BaseRoutes;