import React from 'react';
import { TabPanel, useTabs } from 'react-headless-tabs';
import { TabSelector } from '../../helpers/ActiveSelector';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination} from "swiper/modules"
import "swiper/css";
import 'swiper/css/navigation';
import './CategoryBar.css';

const CategoryBar = () => {
  const [selectedTab, setSelectedTab] = useTabs([
    'Men',
    'Women',
    'Kids',
    'Girl',
    "Cosmetics"
  ]);

  return (
    <div>
      <nav className='nav_category_flex'>
        <div className='category_border_bottom_wrapper'>

          <TabSelector

            isActive={selectedTab === "Men"}
            onClick={() => setSelectedTab("Men")}
          >
            Men
          </TabSelector>
          <TabSelector
            isActive={selectedTab === "Women"}
            onClick={() => setSelectedTab("Women")}
          >
            Women
          </TabSelector>
          <TabSelector

            isActive={selectedTab === "Kids"}
            onClick={() => setSelectedTab("Kids")}
          >
            Kids
          </TabSelector>
          <TabSelector
            isActive={selectedTab === "Girl"}
            onClick={() => setSelectedTab("Girl")}
          >
            Girl
          </TabSelector>
        </div>
      </nav>
      <div className="card_load_flex_wrap">


        <Swiper
        modules={[Pagination]}

        >
          <SwiperSlide>  <TabPanel hidden={selectedTab !== 'Men'}>Men Content</TabPanel> </SwiperSlide>
         <SwiperSlide><TabPanel hidden={selectedTab !== 'Women'}>Women Content</TabPanel></SwiperSlide>
         <SwiperSlide> <TabPanel hidden={selectedTab !== 'Kids'}>Kids Content</TabPanel>  </SwiperSlide>
         <SwiperSlide> <TabPanel hidden={selectedTab !== 'Girl'}>Girl Content</TabPanel></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CategoryBar;
