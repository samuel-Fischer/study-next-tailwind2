import { Search } from "lucide-react";
import { useForm } from "react-hook-form";

export default function Pesquisa(props: any) {
  const { register, handleSubmit } = useForm();

  return (
    <form
      className="form-inline float-right px-36"
      onSubmit={handleSubmit(props.filtrarCarros)}
      onReset={props.mostrarTodos}
    >
      <div className="grid grid-cols-1 grid-flow-col gap-4">
        <div className="m-5 grid grid-cols-1 grid-flow-col">
          <div className="form-group">
            <input
              type="text"
              className="form-control shadow-md rounded-md p-2"
              placeholder="Pesquisar"
              {...register("pesq")}
            />
          </div>
          <button type="submit" className="shadow-md rounded-md p-2">
            <Search />
          </button>
        </div>
      </div>
    </form>
  );
}
