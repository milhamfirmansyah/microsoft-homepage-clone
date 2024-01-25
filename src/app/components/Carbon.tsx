import React from 'react';
import '../sass/carbon.css';
import '../sass/navbar.css'
import { BiChevronRight } from 'react-icons/bi';

function Carbon() {
  return (
    <section className="carbon dark">
      <div className="content">
        <h2 style={{marginBottom: '12px'}}>Commiting To Carbon Negative</h2>
        <p style={{marginBottom: '32px'}}>Microsoft will be carbon negative by 2030 and by 2050 we will remove all carbon the company has emitted since it was founded in 1975</p>
        <a href="#" className="btn">
          <div className="btn-flex">
            <span>Learn More</span>
            <BiChevronRight className='icon-size'/>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Carbon;
