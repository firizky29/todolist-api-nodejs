
import ResponseBuilder from "../utils/Response.js";
import BaseController from "./BaseController.js";


class ActivityController extends BaseController {
    getAll = async (req, res) => {
        try {
            const activities = await this.prisma.activities.findMany();
            return res.status(200).json(
                ResponseBuilder.success(activities)
            );
        } catch (error) {
            return res.status(500).json(
                ResponseBuilder.err(500, error.message)
            );
        }
    }

    get = async (req, res) => {
        try {
            const id = req.params.id;
            if(!id || isNaN(id)) {
                return res.status(404).json(
                    ResponseBuilder.err(404, `Activity with ID ${id} Not Found`)
                )
            }

            const activity = await this.prisma.activities.findFirst({
                where: {
                    id: parseInt(id)
                }
            });

            if(!activity) {
                return res.status(404).json(
                    ResponseBuilder.err(404, `Activity with ID ${id} Not Found`)
                )
            }

            return res.status(200).json(
                ResponseBuilder.success(activity)
            );
        } catch (error) {
            res.status(500).json(
                ResponseBuilder.err(500, error.message)
            );
        }
    }

    create = async (req, res) => {
        try {
            const { title, email } = req.body;
            if(!title) {
                return res.status(400).json(
                    ResponseBuilder.err(400, "title cannot be null")
                );
            }

            const activity = await this.prisma.activities.create({
                data: {
                    title: title,
                    email: email
                }
            });

            return res.status(201).json(
                ResponseBuilder.success(activity)
            );

        } catch (error) {
            return res.status(500).json(
                ResponseBuilder.err(500, error.message)
            );
        }
    }

    update = async (req, res) => {
        try {
            const id = req.params.id;
            console.log(id)
            if(!id || isNaN(id)) {
                return res.status(404).json(
                    ResponseBuilder.err(404, `Activity with ID ${id} Not Found`)
                )
            }

            const { title, email } = req.body;
            if(!title) {
                return res.status(400).json(
                    ResponseBuilder.err(400, "title cannot be null")
                );
            }

            const is_activity_exist = await this.prisma.activities.findFirst({
                where: {
                    id: parseInt(id)
                }
            });

            if(!is_activity_exist) {
                return res.status(404).json(
                    ResponseBuilder.err(404, `Activity with ID ${id} Not Found`)
                )
            }

            const activity = await this.prisma.activities.update({
                where: {
                    id: parseInt(id)
                },
                data: {
                    title: title,
                    email: email
                }
            });

            return res.status(200).json(
                ResponseBuilder.success(activity)
            );

        } catch (error) {
            return res.status(500).json(
                ResponseBuilder.err(500, error.message)
            );
        } 

    }

    delete = async (req, res) => {
        try {
            const id = req.params.id;
            if(!id || isNaN(id)) {
                return res.status(404).json(
                    ResponseBuilder.err(404, `Activity with ID ${id} Not Found`)
                )
            }

            const is_activity_exist = await this.prisma.activities.findFirst({
                where: {
                    id: parseInt(id)
                }
            });

            if(!is_activity_exist) {
                return res.status(404).json(
                    ResponseBuilder.err(404, `Activity with ID ${id} Not Found`)
                )
            }

            const activity = await this.prisma.activities.delete({
                where: {
                    id: parseInt(id)
                }
            });

            if(!activity) {
                return res.status(404).json(
                    ResponseBuilder.err(404, `Activity with ID ${id} Not Found`)
                )
            }

            return res.status(200).json(
                ResponseBuilder.success()
            );

        } catch (error) {
            return res.status(500).json(
                ResponseBuilder.err(500, error.message)
            );
        }
    }
}

export default new ActivityController