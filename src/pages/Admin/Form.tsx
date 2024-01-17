import { useForm } from "react-hook-form";
import { useAdminContext } from "../../context/adminContext/AdminContext";
import { FormValues } from "../../context/adminContext/AdminProvider";


const FormAdm: React.FC = () => {
  const { onSubmit } = useAdminContext();
  const form = useForm<FormValues>();
  const { register, handleSubmit } = form;

  return (
    <main>
      <div id="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name">Nombre </label>
            <input
              type="text"
              id="name"
              placeholder="Nombre's"
              {...register("name")}
            />
          </div>
          <div>
            <label htmlFor="secondName1">Primer Apellido </label>
            <input
              type="text"
              id="secondName1"
              placeholder="Primer Apellido"
              {...register("secondName1")}
            />
          </div>
          <div>
            <label htmlFor="secondName2">Segundo Apellido </label>
            <input
              type="text"
              id="secondName2"
              placeholder="Segundo Apellido"
              {...register("secondName2")}
            />
          </div>
          <div>
            <label htmlFor="userName">Nombre de Usuario </label>
            <input
              type="text"
              id="userName"
              placeholder="Username"
              {...register("userName")}
            />
          </div>
          <div>
            <label htmlFor="roles">Rol </label>
            <select {...register("rol")} id="roles">
              <option value="admin">Administrador</option>
              <option value="miembro">Miembro</option>
            </select>
          </div>
          <button>Guardar</button>
        </form>
      </div>
    </main>
  );
};

export default FormAdm;
