import yup = require("yup");

export const registerValidator = yup.object({
  body: yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    avatarBase64: yup.string().required(),
    phone: yup.string().required(),
    movieId: yup.string().optional(),
    sitRow: yup.number().optional(),
    sitPlace: yup.number().optional(),
  }),
});
