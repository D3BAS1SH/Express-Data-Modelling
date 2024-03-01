import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    /* username:String,
  email:String,
  isActive:Boolean, */
    username: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', UserSchema);
