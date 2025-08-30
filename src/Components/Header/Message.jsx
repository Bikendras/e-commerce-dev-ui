import React from 'react'
import Swal from 'sweetalert2';

export default function Message(props) {
  Swal.fire({
    position: 'center',
    icon: props.status==1?"success":"error",
    title: props.message,
    showConfirmButton: true,
  })
  return (  
    <div></div>
  )
}


