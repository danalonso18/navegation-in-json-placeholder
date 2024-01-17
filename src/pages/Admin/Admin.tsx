import "../../styles/admin.css";
import FormAdm from "./Form";
import Table from "../../components/Table";
import { useAdminContext } from "../../context/adminContext/AdminContext";

const Admin = () => {
  const { roles } = useAdminContext();

  const columns = [
    { field: "name", header: "Nombre" },
    { field: "secondName1", header: "Primer Apellido" },
    { field: "secondName2", header: "Segundo Apellido" },
    { field: "userName", header: "Nombre de Usuario" },
    { field: "rol", header: "Rol" },
  ];

  return (
    <main>
      <FormAdm />
      <Table data={roles} columns={columns} />
    </main>
  );
};

export default Admin;
