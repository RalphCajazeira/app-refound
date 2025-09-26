type UserAPIRole = "employee" | "manager";

type UseAPIResponse = {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: UserAPIRole;
  };
};
