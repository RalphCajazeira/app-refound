export function NotFound() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col">
        <h1 className="text-gray-100 font-semibold text-2xl mb-10">
          Ops! Essa pagina não existe 🥲
        </h1>
        <a
          href="/"
          className="font-semibold text-center text-green-100 transition ease-linear hover:text-green-200"
        >
          Voltar para o inicio
        </a>
      </div>
    </div>
  );
}
