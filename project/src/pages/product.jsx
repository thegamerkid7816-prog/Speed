function Product() { 
  return ( 
 
    <div className="card p-4 shadow"> 
 
      <div className="d-flex justify-content-between align-items-center"> 
  
        <h2>Produk</h2> 
  
        <button className="btn btn-primary"> 
          Add 
        </button> 
      </div> 
 
      <table className="table table-striped mt-3"> 
 
        <thead> 
          <tr> 
            <th>No</th> 
            <th>Product Name</th> 
            <th>Price</th> 
            <th>Category</th> 
            <th>Actions</th> 
          </tr> 
        </thead> 
 
        <tbody> 
 
          <tr> 
            <td>1</td> 
            <td>Kopi Susu</td> 
            <td>Rp 20.000</td> 
            <td>Minuman</td> 
            <td> 
 
              <button className="btn btn-warning btn-sm me-2"> 
                Edit 
              </button> 
 
              <button className="btn btn-danger btn-sm"> 
                Delete
              </button> 
            </td> 
           </tr> 
        </tbody> 
    </table> 
</div> 
); 
} 

export default Product;