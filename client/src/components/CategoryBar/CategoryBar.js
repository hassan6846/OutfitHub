import React from 'react';
import { TabPanel, useTabs } from 'react-headless-tabs';
import { TabSelector } from '../../helpers/ActiveSelector';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
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



        <TabPanel  hidden={selectedTab !== 'Men'}>    <Swiper modules={[Navigation]} slidesPerView={1}  ><SwiperSlide>Men</SwiperSlide> <SwiperSlide>Men 2</SwiperSlide></Swiper></TabPanel>
        <TabPanel hidden={selectedTab !== 'Women'}>   <Swiper modules={[Navigation]} ><SwiperSlide>Women</SwiperSlide></Swiper> </TabPanel>
        <TabPanel hidden={selectedTab !== 'Kids'}>   <Swiper modules={[Navigation]} >  <SwiperSlide>kids</SwiperSlide> </Swiper>  </TabPanel>
        <TabPanel hidden={selectedTab !== 'Girl'}>  <Swiper modules={[Navigation]} > <SwiperSlide>Girl</SwiperSlide></Swiper> </TabPanel>

      </div>
    </div>
  );
};

export default CategoryBar;
