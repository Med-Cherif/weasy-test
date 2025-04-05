import * as yup from "yup";

export const productSchema = yup.object({
  title: yup.string().required(),
  category: yup.string().required(),
  image: yup.string().required(),
  price: yup.number().typeError("Required").required().positive(),
  description: yup.string().notRequired(),
});

export type ProductFieldValues = yup.InferType<typeof productSchema>;
