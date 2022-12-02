import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../../css/components/reusables/loading-spinner.css'


export default function LoadingSpinner() {
    return (
        <div className='fill center'>
            <div className="loader"></div>
        </div>
    )
}