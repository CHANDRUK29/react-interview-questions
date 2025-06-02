import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const Accordian = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null)

    const handleToggle = (index) => {
        setOpenIndex(openIndex == index ? null : index)
    }

    if (!items || items.length === 0) return <div style={{ textAlign: 'center' }}>No Items Available</div>

    return (
        <div className='accordian'>
            {
                items.map((item, index) => (
                    <>
                        <div key={index} className='accordian-item'>
                            <button className='accordian-title' onClick={() => handleToggle(index)}>
                                {item.title}
                                {openIndex === index ? <FaChevronUp className='right' /> : <FaChevronDown className='right' />}
                            </button>
                        </div>
                        {openIndex === index && <div className='accordian-content'>
                            {item.content}
                        </div>}
                    </>
                ))
            }
        </div>
    )
}

export default Accordian