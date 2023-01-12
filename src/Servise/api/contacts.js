import instance from "./instance";

export const getAll = async () => {
  const { data } = await instance.get("/contacts");
  return data;
};

// export const postAll = async () => {
//   const { data } = await instance.post("/contacts", {
//     name: "AAAAd",
//     email: "aaad@ukr.net",
//     phone: "123123132",
//   });
//   return data;
// };
