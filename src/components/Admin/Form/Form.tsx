import { useForm } from "react-hook-form";
import { iAdmin } from "../../../interfaces/interfaces";

type FormValues = {
  name: string;
  secondName1: string;
  secondName2: string;
  userName: string;
  rol: string;
};

const FormAdm = () => {
  const form = useForm<FormValues>();
  const { register, handleSubmit } = form;

  let datas: Array<iAdmin> = [];
  const onSubmit = (data: FormValues) => {
    datas.push(data);
    console.log(datas);
    return datas;
  };

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
      <div id="tableContainer">
        <table>
          <tr>
            <th>Nombre</th>
            <th>Primer Apellido</th>
            <th>Segundo Apellido</th>
            <th>Nombre de Usuario</th>
            <th>Rol</th>
          </tr>
          {datas.map((dat) => {
            return (
              <tr>
                <td>{dat.name}</td>
                <td>{dat.secondName1}</td>
                <td>{dat.secondName2}</td>
                <td>{dat.userName}</td>
                <td>{dat.rol}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </main>
  );
};

export default FormAdm;
