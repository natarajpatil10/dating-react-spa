import React, { useState } from 'react';
import ThirdRow from '../Components/Header/ThirdRow.jsx';
import Poster from '../Components/Section/Poster';
import RightSidebar from '../Components/Sidebar/RightSidebar';
import StickySidebar from '../Components/Sidebar/StickySidebar';
import CenterContent from '../Components/Contents/CenterContent';
import { BsArrowRight } from 'react-icons/bs';
import AdCardOne from '../Components/Contents/AdCardOne';
import AdCardTwo from '../Components/Contents/AdCardTwo';
import AdCardThree from '../Components/Contents/AdCardThree';
import TopOne from '../Components/Contents/TopOne';
import TopTwo from '../Components/Contents/TopTwo';
import TopThree from '../Components/Contents/TopThree';
import TopFour from '../Components/Contents/TopFour';
import TopFive from '../Components/Contents/TopFive';
import OurTopChoices from '../Components/Contents/OurTopChoices';
import CompareAll from '../Components/Contents/CompareAll';
import Faq from '../Components/Contents/Faq';
import DatingSiteTips from '../Components/Contents/DatingSiteTips';
import ShortList from '../Components/Contents/ShortList';

const HomePage = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <ThirdRow />
      <Poster />
      <section>
        <div className="container-lg ">
          <div className="underline mb-4">
            <a href="#compare_all">
              Compare All <BsArrowRight />
            </a>
          </div>
          <h2 className="show-title">The 10 Best Dating Sites and Apps 2021</h2>

          {/* HOME PAGE CONTENTS*/}

          <div className="d-flex position-relative">
            <div className="p-0 m-0">
              <StickySidebar />
            </div>

            <div className="col-xl-7 col-sm-9 ">
              <CenterContent />

              {showMore ? (
                <>
                  <AdCardOne />
                  <AdCardTwo />
                  <AdCardThree />
                  <AdCardOne />
                  <AdCardTwo />
                  <AdCardThree />
                  <AdCardOne />
                  <AdCardTwo />
                  <AdCardThree />
                  <AdCardOne />
                </>
              ) : (
                <>
                  <AdCardOne />
                  <AdCardTwo />
                  <AdCardThree />
                </>
              )}
              <p className="text-center">
                <a
                  href="#showmore"
                  onClick={() => {
                    setShowMore(!showMore);
                  }}
                >
                  {showMore ? 'Show Less' : 'Show More'}
                </a>
              </p>
              <div>
                <h2 className="my-5">
                  A Closer Look at Our Top 10 Dating Sites and Apps
                </h2>
                {/* <TopOne />/
								<TopTwo />
								<TopThree />
								<TopFour />
								<TopFive /> */}
                <OurTopChoices />
              </div>
            </div>

            <div className=" ">
              <RightSidebar />
            </div>
          </div>
        </div>
        <div className="container">
          <CompareAll />
          <Faq />
          <hr />
          <DatingSiteTips />
          <ShortList />
        </div>
      </section>
    </>
  );
};

export default HomePage;
