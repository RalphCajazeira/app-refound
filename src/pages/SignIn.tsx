import { useActionState } from "react";
import { z, ZodError } from "zod";
import { AxiosError } from "axios";

import { api } from "../services/api";
import { useAuth } from "../hooks/useAuth";

import { Button } from "../components/Button";
import { Input } from "../components/Input";

const signInSchema = z.object({
  email: z.email({ message: "E-mail inválido" }).trim(),
  password: z
    .string()
    .trim()
    .min(6, { message: "A senha precisa ter pelo menos 6 caracteres" }),
});

export function SignIn() {
  const [state, formAction, isLoading] = useActionState(signIn, null);

  const auth = useAuth();
  async function signIn(_: any, formData: FormData) {
    try {
      const data = signInSchema.parse({
        email: formData.get("email"),
        password: formData.get("password"),
      });

      const response = await api.post("/sessions", data);
      auth.save(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);

      if (error instanceof ZodError) {
        return { message: error.issues[0].message };
      }

      if (error instanceof AxiosError) {
        return { message: error.response?.data.message };
      }

      return { message: "Nao foi possível fazer login" };
    }
  }

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <Input
        name="email"
        required
        legend="E-mail"
        type="email"
        placeholder="seu@email.com"
      />

      <Input
        name="password"
        required
        legend="Senha"
        type="password"
        placeholder="Digite sua senha"
      />

      <p className="text-sm text-red-600 text-center my-4 font-medium">
        {state?.message}
      </p>

      <Button type="submit" isLoading={isLoading}>
        Entrar
      </Button>

      <a
        href="/signup"
        className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear"
      >
        Criar conta
      </a>
    </form>
  );
}
