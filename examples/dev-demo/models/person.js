
const crypto = require('crypto');
const mongoose = require('mongoose');

const { renderTypes, yinode: { modelAdmin } } = require('../../../index.js');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        name: 'name'
    },
    email: {
        type: String,
        unique: true,
        name: 'email',
    },
    gender: {
        type: String,
        enum: ['F', 'M', '-'],
        name: 'gender',
        default: '-'
    },
    address: {
        type: String,
        name: 'address',
    },
}, { timestamps: true });

/**
 * Helper method for getting user's gravatar.
 */
userSchema.methods.gravatar = function gravatar(size) {
    if (this.profile.picture) {
        return this.profile.picture;
    }
    if (!size) {
        size = 200;
    }
    if (!this.email) {
        return `https://gravatar.com/avatar/?s=${size}&d=retro`;
    }
    const md5 = crypto.createHash('md5').update(this.email).digest('hex');
    return `https://gravatar.com/avatar/${md5}?s=${size}&d=retro`;
};


const User = mongoose.model('User', userSchema);

// new User({
//     email: 'yicheng121315@outlook.com',
//     password: '935993053yicheng',
// }).save().then((rst) => {
//     console.log(rst);
// });

module.exports = User;
