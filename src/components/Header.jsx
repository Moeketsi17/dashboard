import React from 'react'

const Header = () => {
    return (
        <div className="mb-10">
            <p className="text-">
                {category}
            </p>
            <p className='text-3xl font-extrabold tracking-tight text-slate-900' >{ title }</p>
        </div>
    )
}

export default Header