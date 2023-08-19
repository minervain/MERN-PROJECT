const AuthSchema = require('../models/auth.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const user = await AuthSchema.findOne({ email }); // Düzeltme: Nesne içinde email alanı

        if (user) {
            return res.status(500).json({ msg: 'Böyle bir kullanıcı zaten var' });
        }

        if (password.length < 6) {
            return res.status(500).json({ msg: 'Şifreniz en az 6 karakter olmalı' });
        }
        
        const passwordHash = await bcrypt.hash(password, 12);

        if (!ValidateEmail(email)) { // Düzeltme: Validasyon kontrolünü doğru şekilde yapın
            return res.status(500).json({ msg: 'Geçerli bir e-posta adresi değil' });
        }
        
        const newUser = await AuthSchema.create({ username, email, password: passwordHash });
        const token = jwt.sign({ id: newUser._id }, "SECRET_KEY", { expiresIn: '1h' });

        res.status(201).json({
            status: "OK",
            newUser,
            token
        });
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await AuthSchema.findOne({ email }); // Düzeltme: Nesne içinde email alanı

        if (!user) {
            return res.status(500).json({ msg: 'Kullanıcı bulunamadı' });
        }

        const passwordCompare = await bcrypt.compare(password, user.password);

        if (passwordCompare) {
            return res.status(500).json({ msg: 'Yanlış şifre' });
        }
        
        const token = jwt.sign({ id: user._id }, "SECRET_KEY", { expiresIn: '1h' });

        res.status(200).json({
            status: "OK",
            user,
            token
        });
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};

function ValidateEmail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return validRegex.test(input); // Düzeltme: doğru dönen değeri döndür
}

module.exports = { register, login };
