import React from 'react';


const QuantityForm = (props) => {
  return (
    <>
 <form action="">

<label>Quantity</label>
<input {...props.input}/>
</form>

    </>
    );
}
 
export default QuantityForm;