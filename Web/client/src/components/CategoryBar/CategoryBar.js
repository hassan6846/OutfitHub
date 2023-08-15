import React, { useState, useEffect } from 'react';
import "./CategoryBar.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from 'react-router-dom';

const CategoryBar = () => {
    const [currentTab, setCurrentTab] = useState('1');
    const [selectedSubcategory, setSelectedSubcategory] = useState(null);
    const [uniqueCategories, setUniqueCategories] = useState([]);
    const tabs = [
        {
            id: 1,
            tabTitle: 'Tab 1',
            title: 'Title 1',
            content: 'Las tabs se generan automáticamente a partir de un array de objetos, el cual tiene las propiedades: id, tabTitle, title y content.',
            category: "Men",
            SubCategory: "t-shirt"
        },
        {
            id: 2,
            tabTitle: 'Tab 2',
            title: 'Title 2',
            content: 'Contenido de tab 2.',
            category: "Women",
            SubCategory: "Shawl"
        },
        {
            id: 3,
            tabTitle: 'Tab 3',
            title: 'Title 3',
            content: 'Contenido de tab 3.',
            category: "Men",
            SubCategory: "pant"
        },
        {
            id: 4,
            tabTitle: 'Tab 4',
            title: 'Title 4',
            content: 'Contenido de tab 4.',
            category: "Women",
            SubCategory: "Men"
        },
        {
            id: 5,
            tabTitle: 'Tab 5',
            title: 'Title 5',
            content: 'tab is de tab 4.',
            category: "Women",
            SubCategory: "t-shirt"
        }
    ];

    useEffect(() => {
        const categories = tabs.map(tab => tab.category);
        const uniqueCategories = [...new Set(categories)];
        setUniqueCategories(uniqueCategories);
    }, [tabs]);

    const handleTabClick = (e) => {
        const selectedCategory = e.target.id;
        setCurrentTab(selectedCategory);

        // Find the corresponding subcategory for the selected category
        const matchingTab = tabs.find(tab => tab.category === selectedCategory);
        if (matchingTab) {
            setSelectedSubcategory(matchingTab.SubCategory);
        } else {
            setSelectedSubcategory(null);
        }
    }

    return (
        <div className='tabs-container'>
            <div className='tabs-all_category'>
                {uniqueCategories.map((category, i) => (
                    <Link
                        key={i}
                        id={category}
                        disabled={currentTab === category}
                        onClick={handleTabClick}
                    >
                        {category}
                    </Link>
                ))}
            </div>
            <Swiper className='subCategory'>
                {selectedSubcategory && (
                    <SwiperSlide>
                        <div><p className='subcategory'>{selectedSubcategory}</p></div>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    );
}

export default CategoryBar;
