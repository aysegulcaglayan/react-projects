import React from 'react'
import './css/Course.css'
function Course({ course }) {
    const { id, title, description, price, link, images } = course;
    return (
        <div className="section ">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-align-center ">
                        <div className='course '>
                            <img className='course-img' src={images} width={300} height={300} />
                            <h2 className='course-title'>{title}</h2>
                            <h4 className='course-desc'>{description}</h4>

                            <a href={link} className='course-link'> Satın almak için tıklayın</a>
                            <h4 className='course-price'>{price} ₺</h4>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
export default Course
