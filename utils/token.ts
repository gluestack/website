import Axios from "axios";

const axios = Axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_AUTH_URL ?? ""}/api/auth`,
});

const getToken = async (name: "token" | "refreshToken") => {
  try {
    const result = await axios.get(`/get-token?name=${name}`);

    if (result?.data?.data?.value) {
      return result?.data?.data?.value;
    }
  } catch (error) {}
  return "";
};

const setToken = async (name: "token" | "refreshToken", value: string) => {
  try {
    const result = await axios.get(`/set-token?name=${name}&value=${value}`);

    if (result?.data?.status) {
      return true;
    }
  } catch (error) {}
  return false;
};

export { getToken, setToken };
