import { PrismaClient } from '@prisma/client';

class BaseController {    
    constructor() {
        this.prisma = new PrismaClient();
    }
}

export default BaseController;