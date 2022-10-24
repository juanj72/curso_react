const Ventas= ()=>{
    return(
        <div>
            <h2>Ventas</h2>

<div className="tabla">
            <h2>Productos</h2>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

        </div>





            
            <div className="bloque-pro2">

            <div>
                    <p>nombre Cliente</p>
                    <p>No.Documento</p>
                    <p>No.referencia producto</p>
                    <p>Cantidad</p>
                </div>
            <form className="form">
                <input></input>
                <input></input>
                <input></input>
                <input></input>

                <button className="btn btn-success">Cerrar venta</button>
                <button className="btn btn-success">Calcular valor parcial</button>
            </form>




            </div>
           
        </div>
    )
}
export default Ventas