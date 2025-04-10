import { Router } from 'express';
import { UserController } from '../controllers';

export class UserRoutes {
  readonly router = Router();
  readonly controller = new UserController();

  constructor() {
    this.initRoutes();
  }

  private initRoutes(): void {
    this.router.get('/', this.controller.test);
  }
}
