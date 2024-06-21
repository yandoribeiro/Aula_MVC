const userController = require('../controllers/userController');
const User = require('../models/userModel');

jest.mock('../models/userModel');

describe('User Controller', () => {
  test('deve obter todos os usuários', async () => {
    const req = {};
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    User.getAll.mockResolvedValue([{ id: 1, name: 'John Doe', email: 'john@example.com' }]);
    
    await userController.getAllUsers(req, res);
    
    expect(res.json).toHaveBeenCalledWith([{ id: 1, name: 'John Doe', email: 'john@example.com' }]);
  });

  test('deve obter um usuário pelo ID', async () => {
    const req = { params: { id: 1 } };
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    User.getById.mockResolvedValue({ id: 1, name: 'John Doe', email: 'john@example.com' });

    await userController.getUserById(req, res);

    expect(res.json).toHaveBeenCalledWith({ id: 1, name: 'John Doe', email: 'john@example.com' });
  });

  test('deve retornar 404 quando o usuário não for encontrado', async () => {
    const req = { params: { id: 2 } };
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    User.getById.mockResolvedValue(null);

    await userController.getUserById(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: 'Usuário não encontrado' });
  });
});
