import { Request, Response } from 'express';
import { asyncHandler } from '../helpers';
import { logger } from '../utils';
import { SuccessResponse } from '../core';

export class UserController {
    test = asyncHandler(async (req: Request, res: Response) => {
        try {
            const data = 'Hello World';
            const a = 10;
            const b = 20;
            const result = a + b;
            return new SuccessResponse('Success', { data, result }).send(res);
        } catch (error: unknown) {
            logger.error(error);
            throw error;
        }
    });
}
