import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SendForgotPasswordEmailService from '@modules/users/services/SendForgotPasswordEmailService';

export default class ForgotPasswordController {
  async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const sendForgodPasswordEmail = container.resolve(
      SendForgotPasswordEmailService,
    );

    await sendForgodPasswordEmail.execute({
      email,
    });

    return response.status(204).send();
  }
}
