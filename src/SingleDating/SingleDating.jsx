import React from "react";
import RightSidebar from "../Components/Sidebar/RightSidebar";
import { Carousel } from "react-bootstrap";
// import ShortList from "../Components/Contents/ShortList";

const SingleDating = () => {
	const ImgStyle = { height: "70vh", objectFit: "cover" };

	return (
		<div className="container d-flex flex-wrap">
			<div className="col-xl-9 col-12">
				
				<h2 className="mb-5">Singles Dating</h2>
				<Carousel className="mb-5">
					<Carousel.Item interval={10000}>
						<img
							src="https://images.unsplash.com/photo-1525334893167-477cff937ef8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
							style={ImgStyle}
							alt="single"
							className="w-100 "
						/>
					</Carousel.Item>
					<Carousel.Item interval={10000}>
						<img
							src="https://images.unsplash.com/photo-1484494343354-214137ec23b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
							style={ImgStyle}
							alt="about"
							className="w-100"
						/>
					</Carousel.Item>
				</Carousel>
				<p>
					When it comes to singles dating, you might be confused as to what is different in this case. Well, for starters, singles dating helps you to connect with local singles. That way, both of you
					can see if you are good enough for each other, and if you are, you can take your relationship ahead. One of the key advantages of single dating is that you get to meet people of your age,
					and relationship. These people are single and so share the same mentality as you do.
				</p>
				<h4 className="my-5">Is Singles Dating For Me?</h4>
				<img
					className=" w-100 "
					src="https://images.unsplash.com/photo-1525408981679-7e5ef78998cf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
					alt=""
					style={{ height: "70vh", objectFit: "cover" }}
				/>
				<p className="my-5">
					If you are single, then yes, it is definitely for you. At the end of the day, it might seem tough to find a person, who has the same thoughts and same lifestyle as yours, but you should
					never quit trying. If you are single, and have never been married, then singles dating is definitely for you. On the other hand, even if you are divorced or separated, you can look for a
					partner in the dating world. However, do decide if you want something casual or something long term, when it comes to choosing partners. This way, you will be able to screen the people who
					match with you.
				</p>
				<div className="my-5">
					<h4 className="my-3">Is Age A Factor?</h4>
					<p>
						To be honest, once you are a bit aged, you might not find a lot of matches. However, considering all the different platforms available, age is not a factor when it comes to online dating.
						You would get a lot of interested partners and matches, if you fill out your information and look for a partner to spend your life with.
					</p>
					<p>
						With online dating you get a plethora of options. Be it religious dating or normal dating, you can choose the type of partners you want, and then check from the matches. So, now that you
						are prepared, it is time to choose your partner. Go get started!
					</p>
				</div>
			</div>

			<div className="col-xl-3 p-0">
				<RightSidebar />
			</div>
			{/* <div className="">
				<ShortList />
			</div> */}
		</div>
	);
};

export default SingleDating;
