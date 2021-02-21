import React from 'react';
import Category from './Category';


const Categories = ({ categories, handleSelection }) => {

    return (
        
            <div className="row col-12">
                <div className="col-12">
                    <h2 className="text-center mb-5">Select a category</h2>
                </div>
                {categories && categories.map((category) => {
                    return <Category key={category.id} {...category} handleSelection={handleSelection}/>
                })}

            </div>
        
    );
}

export default Categories;
