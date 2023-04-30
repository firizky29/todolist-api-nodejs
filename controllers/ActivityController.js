
import ResponseBuilder from "../utils/Response.js";
import BaseController from "./BaseController.js";

class ActivityController extends BaseController {
    getAll = async (req, res) => {
        try {
            const activities = await this.prisma.activity.findMany();
            res.status(200).json(ResponseBuilder.success(activities));
        } catch (error) {
            res.status(500).json(ResponseBuilder.err(500, error.message));
        }
    }
}

export default new ActivityController