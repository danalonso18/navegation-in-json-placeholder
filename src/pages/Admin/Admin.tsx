import "../../styles/admin.css"
import FormAdm from "../../components/Admin/Form"
import Table from "../../components/Table"

const Admin = ()=>{
    const columns = [
        {field:'name',header:"Nombre"},
        {field:'secondName1',header:"Primer Apellido"},
        {field:'secondName2',header:"Segundo Apellido"},
        {field:'userName',header:"Nombre de Usuario"},
        {field:'rol',header:"Rol"}
    ]

    return(
        <main>
            <FormAdm />
            {/* <Table data={datas} columns={columns}/> */}
        </main>
    )
}

export default Admin