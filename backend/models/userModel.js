const Moongose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');
const Schema = Moongose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    }
})

userSchema.statics.signUp = async function(email,password) {

    //validation
    if(!email || !password) {
        throw new Error('All fields are required');
    }
    if(!validator.isEmail(email)) {
        throw new Error('Invalid email');
    }
    if(!validator.isStrongPassword(password)) {
        throw new Error('Password its not strong enough');
    }

    const exist = await this.findOne({ email });

    if(exist) {
        throw new Error('Email already exists');
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({ email, password: hash });
    return user;
}

//static login method

userSchema.statics.login = async function(email, password) {

    if(!email || !password) {
        throw new Error('All fields are required');
    }

    const user = await this.findOne({ email });

    if(!user) {
        throw new Error('Invalid email');
    }

    const match = await bcrypt.compare(password, user.password);

    if(!match) {
        throw new Error('Invalid password');
    }

    return user;
}

module.exports = Moongose.model('User', userSchema); // Export the User model for use in other files. This allows us to use the User model in our controllers.js file.