import { createServer } from "http"
import express from "express"
import bodyParser from "body-parser"
import morgan from "morgan"
import cors from "cors"
import { CONFIG } from "./constants/config.js"

import ActivityRoute from "./routes/ActivityRoute.js"
import ToDoRoute from "./routes/ToDoRoute.js"


class App {
    constructor() {
        this.app = express();
        this.server = createServer(this.app);

        this._setMiddlewares();
        this._setRoutes();
    }

    _setMiddlewares = () => {
        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(morgan("dev"));
        this.app.use(cors());
    }

    _setRoutes = () => {
        this.app.use("/activity-groups", ActivityRoute)
        this.app.use("/todo-items", ToDoRoute)
    }

    start = () => {
        this.server.listen(CONFIG.PORT, CONFIG.HOST, () => {
            console.log(`Server is running on ${CONFIG.HOST}:${CONFIG.PORT}`);
        });
    }
}

const app = new App();
app.start();