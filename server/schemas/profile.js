import mongoose from 'mongoose'
const { Schema } = mongoose

const Day = new Schema({
    slots: {
        type: [Boolean],
        default: () => Array(96).fill(false), // Sets whole day as available
    },
}, { _id: false }) // Removes generated unique id

const Week = new Schema({
    sunday: Day,
    monday: Day,
    tuesday: Day,
    wednesday: Day,
    thursday: Day,
    friday: Day,
    saturday: Day,
}, { _id: false }); // Removes generated unique id

const profileSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    schedule: Week,
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'Profile',
    }],
})

const Profile = mongoose.model('Profile', profileSchema);

export default Profile;