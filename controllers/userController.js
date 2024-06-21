const User = require('../models/userModel');

// Controlador para obter todos os usuários
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.getAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter usuários', error });
  }
};

// Controlador para obter um usuário pelo ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.getById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter usuário', error });
  }
};

// Controlador para criar um novo usuário
exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar usuário', error });
  }
};

// Controlador para atualizar um usuário
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.update(req.params.id, req.body);
    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar usuário', error });
  }
};

// Controlador para deletar um usuário
exports.deleteUser = async (req, res) => {
  try {
    const isDeleted = await User.delete(req.params.id);
    if (isDeleted) {
      res.json({ message: 'Usuário deletado' });
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar usuário', error });
  }
};
