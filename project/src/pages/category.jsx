function Category() { 
  return ( 
     
    <div className="card p-4 shadow"> 
 
      <div className="d-flex justify-content-between align-items-center"> 
         
        <h2>Category</h2> 
 
        <button className="btn btn-primary"> 
          + Add Category 
        </button> 
      </div> 
 
      <div className="table-responsive"> 
  
        <table className="table mt-3"> 
 
          <thead> 
            <tr> 
              <th>No</th> 
              <th>Category Name</th> 
              <th>Actions</th> 
            </tr> 
          </thead> 
 
          <tbody> 
 
            <tr> 
              <td>1</td> 
              <td>Drink</td> 
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
    </div> 
  ); 
} 
 
export default Category;