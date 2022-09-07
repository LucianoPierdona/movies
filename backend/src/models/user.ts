import mongoose, { Types } from "mongoose";
import { IMovie } from "./movie";

export interface IUser {
  _id?: Types.ObjectId;
  firstName: string;
  lastName: string;
  avatarBase64: string;
  email: string;
  phone: string;
  movie?: IMovie;
  sitRow?: number;
  sitPlace?: number;
}

interface UserDoc extends mongoose.Document {
  firstName: string;
  lastName: string;
  avatarBase64: string;
  email: string;
  phone: string;
  movie?: IMovie;
  sitRow?: number;
  sitPlace?: number;
}

interface IUserModel extends mongoose.Model<UserDoc> {
  build(attrs: IUser): UserDoc;
}

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  avatarBase64: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  sitRow: {
    type: Number,
    required: false,
  },
  sitPlace: {
    type: Number,
    required: false,
  },
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
  },
});

userSchema.statics.build = (attrs: IUser) => {
  return new User({
    ...attrs,
    ...(attrs.movie && { movie: attrs.movie._id }),
  });
};

const User = mongoose.model<any, IUserModel>("User", userSchema);

export { User };
