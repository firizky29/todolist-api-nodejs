
import ResponseBuilder from "../utils/Response.js";
import BaseController from "./BaseController.js";


class ToDoController extends BaseController {
    getAll = async (req, res) => {
        try {
            const { activity_group_id } = req.query;
            if(!activity_group_id) {
                const todos = await this.prisma.todos.findMany();
                return res.status(200).json(
                    ResponseBuilder.success(todos)
                );
            } else {
                const todos = await this.prisma.todos.findMany({
                    where: {
                        activity_group_id: parseInt(activity_group_id)
                    }
                });
                return res.status(200).json(
                    ResponseBuilder.success(todos)
                );
            }

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
                    ResponseBuilder.err(404, `Todo with ID ${id} Not Found`)
                )
            }

            const todo = await this.prisma.todos.findFirst({
                where: {
                    id: parseInt(id)
                }
            });

            if(!todo) {
                return res.status(404).json(
                    ResponseBuilder.err(404, `Todo with ID ${id} Not Found`)
                )
            }

            return res.status(200).json(
                ResponseBuilder.success(todo)
            );
        } catch (error) {
            res.status(500).json(
                ResponseBuilder.err(500, error.message)
            );
        }
    }

    create = async (req, res) => {
        try {
            const { title, activity_group_id, is_active } = req.body;

            if(!title) {
                return res.status(400).json(
                    ResponseBuilder.err(400, "title cannot be null")
                );
            }

            if(!activity_group_id) {
                return res.status(400).json(
                    ResponseBuilder.err(400, "activity_group_id cannot be null")
                );
            }

            const is_active_bool = is_active ? is_active : true;


            const todo = await this.prisma.todos.create({
                data: {
                    title,
                    activity_group_id: parseInt(activity_group_id),
                    is_active: is_active_bool
                }
            });

            return res.status(201).json(
                ResponseBuilder.success(todo)
            );
        } catch (error) {
            res.status(500).json(
                ResponseBuilder.err(500, error.message)
            );
        }
    }

    update = async (req, res) => {
        try {
            const id = req.params.id;
            const { title, is_active, priority } = req.body;

            if(!id || isNaN(id)) {
                return res.status(404).json(
                    ResponseBuilder.err(404, `Todo with ID ${id} Not Found`)
                )
            }

            const new_data = {};

            if(title) {
                new_data.title = title;
            }

            if(is_active !== undefined) {
                new_data.is_active = is_active;
            }

            if(priority) {
                new_data.priority = priority;
            }

            if(Object.keys(new_data).length === 0) {
                const todo = await this.prisma.todos.findFirst({
                    where: {
                        id: parseInt(id)
                    }
                });

                if(!todo) {
                    return res.status(404).json(
                        ResponseBuilder.err(404, `Todo with ID ${id} Not Found`)
                    )
                }

                return res.status(200).json(
                    ResponseBuilder.success(todo)
                );

            } else {
                const is_todo_exist = await this.prisma.todos.findFirst({
                    where: {
                        id: parseInt(id)
                    }
                });

                if(!is_todo_exist) {
                    return res.status(404).json(
                        ResponseBuilder.err(404, `Todo with ID ${id} Not Found`)
                    )
                }

                const todo = await this.prisma.todos.update({
                    where: {
                        id: parseInt(id)
                    },
                    data: new_data
                });
                
                return res.status(200).json(
                    ResponseBuilder.success(todo)
                );
            }
            
        } catch (error) {

            res.status(500).json(
                ResponseBuilder.err(500, error.message)
            );
        }
    }

    delete = async (req, res) => {
        try {
            const id = req.params.id;

            if(!id || isNaN(id)) {
                return res.status(404).json(
                    ResponseBuilder.err(404, `Todo with ID ${id} Not Found`)
                )
            }

            const is_todo_exist = await this.prisma.todos.findFirst({
                where: {
                    id: parseInt(id)
                }
            });

            if(!is_todo_exist) {
                return res.status(404).json(
                    ResponseBuilder.err(404, `Todo with ID ${id} Not Found`)
                )
            }

            const todo = await this.prisma.todos.delete({
                where: {
                    id: parseInt(id)
                }
            });


            return res.status(200).json(
                ResponseBuilder.success()
            );
        } catch (error) {
            res.status(500).json(
                ResponseBuilder.err(500, error.message)
            );
        }
    }
}

export default new ToDoController