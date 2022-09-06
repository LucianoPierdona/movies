import mongoose, { Types } from "mongoose";

export interface IMovie {
  _id?: Types.ObjectId;
  title: string;
  duration: number;
  startDate: Date;
}

interface MovieDoc extends mongoose.Document {
  title: string;
  duration: number;
  startDate: Date;
}

interface IMovieModel extends mongoose.Model<MovieDoc> {
  build(attrs: IMovie): MovieDoc;
}

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
});

movieSchema.statics.build = (attrs: IMovie) => {
  return new Movie(attrs);
};

const Movie = mongoose.model<any, IMovieModel>("Movie", movieSchema);

export { Movie };
