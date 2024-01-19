import "../../styles/admin.css";
import FormAdm from "./Form";
import Table from "../../components/Table";
import { useAdminContext } from "../../context/adminContext/AdminContext";
import { useState, useEffect } from "react";
import { useSearch } from "../../context/searchContext/SearchContext";
import { iAdmin } from "../../interfaces/interfaces";

const Admin = () => {
  const columns = [
    { field: "name", header: "Nombre" },
    { field: "secondName1", header: "Primer Apellido" },
    { field: "secondName2", header: "Segundo Apellido" },
    { field: "userName", header: "Nombre de Usuario" },
    { field: "rol", header: "Rol" },
  ];
  const [oriAdm, setOriAdm] = useState<iAdmin[]>([]);
  const [sorts, setSorts] = useState<any[]>([]);
  const [onBttn, setOnBttn] = useState<number>(0);
  const { admins } = useAdminContext();
  const { search } = useSearch();

  const filteredPosts = oriAdm.filter((adm) =>
    adm.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );
  useEffect(() => {
    setOriAdm(admins);
  }, []);

  useEffect(() => {
    setSorts(oriAdm);
  }, [oriAdm]);

  useEffect(() => {
    setSorts(filteredPosts);
  }, [search]);

  const sortTable = (orderBy:string) => {
    if (onBttn == 0) {
      const ori = [...filteredPosts];
      setSorts(ori);
      setOnBttn(1);
    } else {
      if (onBttn == 1) {
        const sortsAsc = sorts.sort((a, b) => {
          if (a[orderBy] < b[orderBy]) {
            return -1;
          }
          if (a[orderBy] > b[orderBy]) {
            return 1;
          }
          return 0;
        });
        setSorts(sortsAsc);
        setOnBttn(2);
      }
      if (onBttn == 2) {
        const sortsDes = sorts.sort((a, b) => {
          if (b[orderBy] < a[orderBy]) {
            return -1;
          }
          if (b[orderBy] > a[orderBy]) {
            return 1;
          }
          return 0;
        });
        setSorts(sortsDes);
        setOnBttn(0);
      }
    }
  };

  return (
    <main>
      <FormAdm />
      <Table
        data={sorts}
        columns={columns}
        sortTable={sortTable}
      />
    </main>
  );
};

export default Admin;
