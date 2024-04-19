import Link from 'next/link'
import React from 'react'

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {

    const pageNumbers = [...Array(nPages + 1).keys()].slice(1) // [...Array(nPages + 1).keys()].slice(1) generates an array of numbers from 1 to nPages.
    const goToNextPage = () => {
            if(currentPage !== nPages) setCurrentPage(currentPage + 1) // checking if the page is last or not if the page is last it does update the current page.
    }
    const goToPrevPage = () => {
        if(currentPage !== 1) setCurrentPage(currentPage - 1) 
    }
    return (
        <nav className=''>
            <ul className='flex justify-around pagination'>
                <li className="page-item">
                    <Link className="page-link hover:text-red-500" 
                        onClick={goToPrevPage} 
                        href='#'>
                        Previous
                    </Link>
                </li>
                {pageNumbers.map(pgNumber => (
                    <li key={pgNumber} 
                        className={currentPage===pgNumber?"text-red-500":""} >
                        <Link onClick={() => setCurrentPage(pgNumber)}  
                            className='page-link hover:text-red-500' 
                            href='#'>
                              
                            {pgNumber}
                        </Link>
                    </li>
                ))}
                <li className="page-item">
                    <Link className="page-link" 
                        onClick={goToNextPage}
                        href='#'>
                        Next
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination