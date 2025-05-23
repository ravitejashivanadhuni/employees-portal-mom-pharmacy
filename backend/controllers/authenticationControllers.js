const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.registerUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      username,
      mobilenumber,
      email,
      password,
      dateOfBirth,
      gender,
      role,
      roletype
    } = req.body;

    const existingUser = await User.findOne({
      $or: [
        { email },
        { username },
        { mobilenumber }
      ]
    });

    if (existingUser) {
      if (existingUser.mobilenumber === mobilenumber) {
        return res.status(400).json({ message: 'User with this mobile number already exists!' });
      }
      if (existingUser.email === email) {
        return res.status(400).json({ message: 'User with this email already exists!' });
      }
      if (existingUser.username === username) {
        return res.status(400).json({ message: 'User with this username already exists!' });
      }
    }



    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      username,
      mobilenumber,
      email,
      password: hashedPassword,
      dateOfBirth, 
      gender, 
      role, 
      roletype
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.loginUser = async (req, res) => {
  const { identifier, password, roletype, role } = req.body;

  try {
    const isEmail = /\S+@\S+\.\S+/.test(identifier);
    const user = await User.findOne(
      isEmail ? { email: identifier } : { username: identifier }
    );
    if (!user) {
      return res.status(400).json({ message: 'User not found with that email or username' });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: 'Incorrect password' });
    }

    if (user.roletype !== roletype) {
      return res.status(400).json({ message: `Role type mismatch: expected "${user.roletype}"` });
    }

    if (user.role !== role) {
      return res.status(400).json({ message: `Role mismatch: expected "${user.role}"` });
    }

    let redirectTo;
    if (roletype === 'Employee') {
      redirectTo = '/employee-dashboard';
    } else {
      switch (role) {
        case 'Super Admin':
          redirectTo = '/super-admin-dashboard'; break;
        case 'Supervisor':
          redirectTo = '/supervisor-dashboard'; break;
        case 'Leave Manager':
          redirectTo = '/leave-manager-dashboard'; break;
        default:
          redirectTo = '/admin-dashboard';
      }
    }
    return res.status(200).json({
      message: 'Login successful',
      redirectTo,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        roletype: user.roletype,
        role: user.role
      }
    });

  } catch (err) {
    console.error('[loginUser] Error:', err);
    return res.status(500).json({ message: 'Server error during login' });
  }
};