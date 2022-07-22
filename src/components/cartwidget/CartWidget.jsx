import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Cart } from 'react-bootstrap-icons';

export default function CartWidget() {
  return (
    <div>
        <button className='btn text-light fs-5'><Cart /></button>
    </div>
  )
}
