'use client'
import { useState, useRef ,useEffect } from 'react';
import { motion, AnimatePresence, useInView } from "framer-motion"


export default function Home() {

// Button Gradiant Collor Change Start
  const [buttonGradientColor, setButtonGradientColor] = useState('');
  const generateRandomColor = () => {
    const colors = [
      '#FF0000',
      '#00FF00',
      '#0000FF',
      '#FFFF00',
      '#FF00FF',
    ];

    const randomIndex1 = Math.floor(Math.random() * colors.length);
    const randomIndex3 = Math.floor(Math.random() * colors.length);

    const randomIndex2 = Math.floor(Math.random() * colors.length);

    return `linear-gradient(45deg, ${colors[randomIndex1]}, ${colors[randomIndex2]}, ${colors[randomIndex3]})`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setButtonGradientColor(generateRandomColor());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  // Button Gradiant Collor Change End

  // create an array of objects with the id, trigger element (eg. button), and the content element
  const accordionItems = [
      {
          id: 'accordion-example-heading-1',
          active: true
      },
      {
          id: 'accordion-example-heading-2',
          active: false
      },
      {
          id: 'accordion-example-heading-3',
          active: false
      }
  ];
  
  // options with default values
  const options = {
      alwaysOpen: true,
      activeClasses: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white',
      inactiveClasses: 'text-gray-500 dark:text-gray-400',
      onOpen: (item) => {
          console.log('accordion item has been shown');
          console.log(item);
      },
      onClose: (item) => {
          console.log('accordion item has been hidden');
          console.log(item);
      },
      onToggle: (item) => {
          console.log('accordion item has been toggled');
          console.log(item);
      },
  };
  
  const ref = useRef();
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();

  const inView = useInView(ref);
  const inView1 = useInView(ref1, { threshold: 0.5 });
  const inView2 = useInView(ref2, { threshold: 0.5 });
  const inView3 = useInView(ref3, { threshold: 0.5 });
  const inView4 = useInView(ref4, { threshold: 0.5 });


  return (
    <AnimatePresence>

    <main className='bg-white mx-auto w-full overflow-hidden'>

      <h2 className="bg-red-700 font-bold text-center text-white p-2"><marquee>LIMITED TIME OFFER: <small className='font-bold text-xl text-blue-600'><a href="https://rzp.io/l/vaG2Fit" target="_blank">JOIN NOW</a></small> TODAY FOR ONLY<small className='line-through	text-xl text-amber-300'> RS. 6000</small> 199 ! (FOR THE FIRST 100 PARTICIPANTS)</marquee></h2>

        <div className=" ">
          <div className="mb-6 py-15  pb-48  px-4 md:px-12 rounded-br-[50px] rounded-bl-[50px] bg-green-800 relative">
                  
                  <motion.div ref={ref2} animate={{ x: inView2 ? 0 : -100 }} transition={{ duration: 1 }}>
                    <h3 className="bg-white font-bold text-2xl text-center text-red-700 p-1 cols">मात्र 199 से करे <small  className='text-blue-600 text-2xl'><a href="https://rzp.io/l/vaG2Fit" target="_blank">रजिस्टर</a></small> और जाने स्वस्थ रहने का 100% आयुर्वेदिक उपाय Dr.BK CHAURASIA के साथ</h3>
                    <p className="font-bold text-center mt-5 text-2xl p-1 text-white mx-auto px-1 md:px-12">घर बैठे जाने देश के माने जाने Dr. BK CHAURASIA से, कैसे बिना दवा अपनी किडनी और हृदय को ठीक कर सकते हैं और सुरक्षित रख सकते हैं केवल आयुर्वेद के मदद से</p>
                  </motion.div>

                  <motion.div 
                       ref={ref}
                       animate={{ x: inView ? 0 : 100, opacity : inView ? 1: 0}}
                       transition={{ duration: 1,}}
              className=' container mt-5 flex mx-auto md:w-[75vw] rounded-md shadow-md  shadow-blue-400'>
              <img 
                alt="The guitarist in the concert."
                  src="mainimg.jpeg"
                  width={1200 }
                  height={1500 }
                  
                  layout="responsive"
                  className='rounded-md '
                />
              </motion.div>
              {/* image component end */}

              {/* card first component start */}

              
              <a href="https://rzp.io/l/vaG2Fit" target="_blank"><div style={{ backgroundImage: buttonGradientColor }} className='btnanimation bg-orange-900 m-5 mx-auto md:w-[75vw] rounded-md shadow-md  shadow-blue-700'>
                <h3 className="font-bold text-center mt-10 text-3xl p-5 text-white" >I AM READY TO <small className='text-blue-500'>JOIN NOW</small> FOR BOOST MY HELTH</h3>
              </div></a>
            {/* card first component end */}

            {/* card second component start */}
              <div className='bg-blue-950 rounded-xl absolute mt-10 mr-5'>
                <h3 className="font-bold text-center mt-5 text-2xl p-8 text-white rounded-md shadow-md  shadow-red-700">बिना दवा के KIDNEY और HAERT FAILURE से मुक्ति पाये! जानें WORLD के जाने माने Dr.Bk CHOURASIA से <p className='text-red-600 text-4xl'><a href='#'>LIVE</a></p><p className='text-red-600'>***Be Quick! Last few days for this batch are remaining!***</p>
                </h3>
              </div>
              {/* card second component end */}
          </div>
        {/* component end */}

          {/* text component start */}
          <div className='my-10 md:mt-10 mt-64 mx-auto md:w-[80vw]'>
            <p className="font-bold text-center text-4xl p-2 text-black">A Fail-Proof 3-Step Formula For Growing Your Helth With BK Arogyam</p>
          </div>
          {/* text component end */}


        {/* card component start */}
        <div class="container mx-auto px-4 md:px-12">
            <motion.div ref={ref1} animate={{ y: inView1 ? 0 : -100 }} transition={{ duration: 1 }}
            class="flex flex-wrap -mx-1 lg:-mx-4">

                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                    <article class="overflow-hidden rounded-lg shadow-lg bg-slate-800 p-10">
                      <h1 className='text-white text-center text-3xl font-bold'>STEP 1</h1>
                      <p className="mt-3 text-2xl text-center text-white">Dates are high in calories and sugar, so it is important to eat them in moderation, especially if you have kidney or heart disease. Aim to eat no more than 3-4 dates per day.</p>
                    </article>
                </div>

                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <article class="overflow-hidden rounded-lg shadow-lg bg-slate-800 p-10">
                      <h1 className='text-white text-center text-3xl font-bold'>STEP 2</h1>
                      <p className="mt-3 text-2xl text-center text-white">When eating dates, pair them with other healthy foods, yogurt, or fruit. This will help to balance the sugar content of the dates and make them a more nutritious snack or meal.</p>
                    </article>
                </div>

                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <article class="overflow-hidden rounded-lg shadow-lg bg-slate-800 p-10">
                      <h1 className='text-white text-center text-3xl font-bold'>STEP 3</h1>
                      <p className="mt-3 text-2xl text-center text-white">Choose fresh, whole dates. Processed and sweetened dates may contain added sugar and unhealthy fats, which can increase your risk of kidney and heart disease...!</p>
                    </article>
                </div>
            </motion.div>
        </div>

        <a href="https://rzp.io/l/vaG2Fit" target="_blank"><div style={{ backgroundImage: buttonGradientColor }} className='bg-orange-900 m-5 mx-auto md:w-[55vw] rounded-md shadow-md  shadow-blue-700'>
          <h3 className="font-bold text-center mt-5 text-4xl p-5 text-white"> YES I WANT BOOST MY HELTH</h3>
        </div></a>
      {/* end */}



{/* start */}
        <div className="container mb-6 py-15 mx-auto pb-2 p-2 px-4 md:px-12 bg-slate-800 relative">
                  <p className="font-bold text-center mt-5 text-2xl p-1 text-white mx-auto px-1 md:px-12">देश के माने जाने Dr.Bk CHOURASIA बता रहे है, कैसे बिना दवा अपनी किडनी और हृदय को ठीक कर सकते हैं और सुरक्षित रख सकते हैं केवल आयुर्वेद के मदद से</p>
        <div class="container mx-auto px-4 md:px-12">
            <motion.div ref={ref4} animate={{ y: inView4 ? 0 : 100 }} transition={{ duration: 1 }}
            class="flex flex-wrap -mx-1 lg:-mx-4 mt-5">

          {/* first card start*/}
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <div class="max-w-sm p-6 bg-slate-400 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
                  src="ayurved.png"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                  className='mx-auto md:w- w-20'
                />
                <a href="#">
                <h5 class="mt-3 font-bold mb-2 text-2xl tracking-tight text-red-800 dark:text-white text-center">आपके सारे अंग हमेशा सही रहते हैं जब आप आयुर्वेद का उपयोग करते हैं</h5>
                </a>
            </div>
          </div>
            {/* first card end*/}
          


             {/* first card start*/}
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div class="max-w-sm p-6 bg-slate-400 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img
                  src="selfcare.png"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                  className='mx-auto md:w- w-20'
                />
                  <a href="#">
                      <h5 class="mt-3 font-bold mb-2 text-2xl tracking-tight text-red-800 dark:text-white text-center">24*7 SELF CARING HELP OF OUR FORUM</h5>
                  </a>
              </div>
            </div>
            {/* first card end*/}
                

            {/* first card start*/}
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">                 
              <div class="max-w-sm p-6 bg-slate-400 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img
                  src="helthi.png"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                  className='mx-auto md:w- w-20'
                />
                  <a href="#">
                    <h5 class="mt-3 font-bold mb-2 text-2xl tracking-tight text-red-800 dark:text-white text-center">जब आप स्वस्थ रहते हैं तो आपके जीवन की सारी समस्याएं ख़त्म हो जाती हैं</h5>
                  </a>
              </div>
            </div>
            {/* first card end*/}
                
            </motion.div>
        </div>
        {/* first card end*/}


              <a href="https://rzp.io/l/vaG2Fit" target="_blank"> <div style={{ backgroundImage: buttonGradientColor }} className=' bg-orange-900 m-5 mx-auto md:w-[75vw] rounded-md shadow-md  shadow-blue-700'>
                <h3 className="font-bold text-center mt-5 text-3xl p-2 text-white">DON &apos; MISS OUT <small className='text-blue-500 text-3xl'> REGISTER NOW </small> FOR BOOST YOUR HELTH<p className='text-center text-yellow-400'>SECURE YOUR HELTH HELP OF AYURVEDA</p></h3>
              </div></a>
        </div>

          <div>
            <p className="mt-2 font-bold text-4xl text-center text-black">इस LIVE WEBINAR में सीखिए :</p>
          </div>

          <div>
            <div className=' bg-black m-5 mx-auto md:w-[55vw] rounded-md shadow-md  shadow-blue-700'>
              <h3 className="text-center mt-5 text-2xl p-2 text-white"> AYURVED से अपने HELTH को अच्छा कैसे रखे</h3>
            </div>

            <div className=' bg-black m-5 mx-auto md:w-[55vw] rounded-md shadow-md  shadow-blue-700'>
              <h3 className="text-center mt-5 text-2xl p-2 text-white">AYURVED क्या होती है और इससे अपने शारीरिक इम्युनिटी को कैसे बढ़ाये</h3>
            </div>

            <div className=' bg-black m-5 mx-auto md:w-[55vw] rounded-md shadow-md  shadow-blue-700'>
              <h3 className="text-center mt-5 text-2xl p-2 text-white">AYURVED क्या होता है और स्वास्थ्य के लिए इसकी क्या आवश्यकता है</h3>
            </div>

            <div className=' bg-black m-5 mx-auto md:w-[55vw] rounded-md shadow-md  shadow-blue-700'>
              <h3 className="text-center mt-5 text-2xl p-2 text-white">To boost your health on a strategic level</h3>
            </div>
          </div>

          <a href="https://rzp.io/l/vaG2Fit" target="_blank"><div className=' bg-orange-900 m-5 mx-auto md:w-[65vw] rounded-md shadow-md  shadow-blue-700'>
              <h3 className="font-bold text-center mt-5 text-2xl p-2 text-white">I AM READY TO <small className='text-blue-500 text-2xl'>REGISTER NOW</small> FOR BOOST MY HELTH<p className='text-center text-yellow-400 text-xl'>SECURE YOUR HELTH HELP OF AYURVEDA</p></h3>
          </div></a>

          <div className="container mb-6 py-15 mx-auto pb-2 p-10 rounded-md px-4 md:px-12 bg-green-900 md:w-[85vw]">
              <p className="font-bold text-center mt-5 text-2xl p-1 text-white mx-auto px-1 md:px-12">AYURVED के सही KNOWLEDGE से , अपने स्वास्थ्य को घर बैठे सही रखें ....</p>

              <a href="https://rzp.io/l/vaG2Fit" target="_blank"><div style={{ backgroundImage: buttonGradientColor }} className=' bg-orange-900 m-5 mx-auto md:w-[50vw] rounded-md shadow-md  shadow-blue-700'>
                <h3 className="font-bold text-center mt-5 text-xl p-2 text-white">I AM READY TO <small className='text-blue-500 '>JOIN NOW</small> FOR BOOST MY HELTH</h3>
              </div></a>
          </div>


            {/* test section start */}
            <div className='my-5 mt-2'>
              <p className="font-bold text-center text-3xl p-2 text-black">Have A Look At What People Have To Speak About Us</p>
            </div>
            {/* test section end */}

 {/* testomonials section start */}
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-10 gap-2">

    <div class="w-full bg-slate-800 border border-white rounded-lg shadow dark:border-white">
      <div class="flex flex-col items-center pb-10  text-black">
          <img class="w-24 h-24 mt-5 rounded-full shadow-lg" src="https://www.bkkidneycare.com/static/images/patients-review/Screenshot%20(40)02152023183155.webp" alt=""/>
          <h5 class="text-xl font-medium text-center text-white dark:text-white">Ram Prasad Bajpayee </h5>

          <div class="flex items-center space-x-1">
              <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg class="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
          </div>

          <span class="text-sm text-white  p-5 text-center">Hello, my name is Mr. Ram Prasad Bajpayee, I am a resident of Bahraich district, Uttar Pradesh, I am suffering from ckd and my creatinine was 13.26, then my friend told me about Bk arogyam, after coming here for 10 days, I got admitted, now my creatinine has reduced. Its almost 6 and dialysis is also stopped I am feeling much better now and going home I want to thank BK Arogyam who saved my life </span>
      </div>
    </div>


    <div class="w-full bg-slate-800 border border-white rounded-lg shadow ">
      <div class="flex flex-col items-center pb-10">
          <img class="w-24 h-24 mt-5 rounded-full shadow-lg" src="https://www.bkkidneycare.com/static/images/patients-review/Screenshot%20(57)02282023140404.webp" alt=""/>
          <h5 class="text-xl font-medium text-white dark:text-white">Rukmini Kumari</h5>
          <div class="flex items-center space-x-1">
            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
        </div>
          <span class="text-sm text-white dark:text-white p-5 text-center">Rukmini Kumari, resident of Patna, when I came to know about kidney problem, then I got myself treated in big hospitals of Patna, apart from this I visited many other big hospitals, still creatinine kept increasing, and after It kept getting worse and finally the doctor advised me for a kidney transplant. Then my family members said that we will first get treatment in Ayurvedic Institute BK Arogyam.</span>

      </div>
  </div>


  <div class="w-full bg-slate-800 border border-white rounded-lg shadow  dark:border-white">
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mt-5 rounded-full shadow-lg" src="https://www.bkkidneycare.com/static/images/patients-review/maxresdefault%20(1)02212023172313.webp" alt=""/>
        <h5 class="text-xl font-medium text-white dark:text-white">Sunil Kumar</h5>
        <div class="flex items-center space-x-1">
          <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
          </svg>
          <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
          </svg>
          <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
          </svg>
          <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
          </svg>
          <svg class="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
          </svg>
      </div>
        <span class="text-sm text-white dark:text-white p-5 text-center">Sunil Kumar is a resident of Bihar, his wife Sumanti Devi came to know about kidney problem in 2020. His wife visited many hospitals in India, yet her creatinine increased from 2 to 5.5. Then he thought of trying Ayurveda, then he came to know about BK Arogya through YouTube, and with this goal he came to BK Arogya located in Varanasi. When he came to BK Arogya, his condition was very bad, then He was admitted for 10 days, after that today he is out of danger of dialysis,</span>

    </div>
  </div>


    <div class="w-full bg-slate-800 border border-white rounded-lg shadow  dark:border-white">
      <div class="flex flex-col items-center pb-10">
          <img class="w-24 h-24 mt-5 rounded-full shadow-lg" src="https://www.bkkidneycare.com/static/images/patients-review/hvweafsd02272023130757.webp" alt=""/>
          <h5 class="text-xl font-medium text-white dark:text-white">Jiya Uddin Ansari </h5>
          <div class="flex items-center space-x-1">
            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
        </div>
          <span class="text-sm text-white dark:text-white p-5 text-center">Hello, my name is Jiya Uddin Ansari, I am from Latehar district of Jharkhand, I am suffering from CKD and my creatinine was 18, and I have taken treatment in Ranchi, Delhi everywhere but no relief and creatinine was increasing. , then my son told me about BK Arogyam, I got admitted after coming here for 10 days, now my creatinine has come down and dialysis has also stopped,  I am feeling much better and going home.</span>

      </div>
  </div>

</div>
{/* testomonials section end */}

    {/* button start */}
    <a href="https://rzp.io/l/vaG2Fit" target="_blank"><div style={{ backgroundImage: buttonGradientColor }} className=' bg-orange-900 m-5 mx-auto md:w-[60vw] rounded-md shadow-md  shadow-blue-700'>
        <h3 className="font-bold text-center mt-5 text-3xl p-8 text-white">I AM READY TO BOOST MY HELTH</h3>
    </div></a>
    {/* button end */}


  {/* ul Card start */}
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-5 gap-2">

    <div class="w-full bg-gray-900-800 border border-black rounded-lg shadow dark:border-black">
      <div class="flex flex-col items-center pb-10 p-5">
        <h1 className='text-black font-bold text-4xl'>Who is this not for :</h1>
      <ul>
        <li className='text-black p-3 text-xl'>1. जो खुद को स्वास्थ्य नहीं रखना चाहता</li>
        <li className='text-black p-3 text-xl'>2. जो बेकार दवाओ पर ही निर्भर रहना चाहते हैं</li>
        <li className='text-black p-3 text-xl'>3. जो पैसे के सामने अपनी सेहत को नहीं देखते</li>
        <li className='text-black p-3 text-xl'>4. जो ये नहीं मानता कि आयुर्वेद का ही भविष्य है</li>
        <li className='text-black p-3 text-xl'>5. जो खुद को स्वस्थ नहीं रखना चाहते</li>
      </ul>

      </div>
    </div>

    <div class="w-full bg-gray-50-800 border border-black rounded-lg shadow  dark:border-black">
      <div class="flex flex-col items-center pb-10 p-5">
        <h1 className='text-black font-bold text-4xl'>Who is this for : </h1>
      <ul>
        <li className='text-black p-3 text-xl'>1. जो खुद को स्वास्थ्य रखना चाहता है</li>
        <li className='text-black p-3 text-xl'>2. जो आयुर्वेद से खुद को स्वस्थ रखना चाहता है</li>
        <li className='text-black p-3 text-xl'>3. जो अपनी सेहत के लिए पैसे की परवाह नहीं करता</li>
        <li className='text-black p-3 text-xl'>4. जो ये जनता हो आयुर्वेद का ही भविष्य है</li>
        <li className='text-black p-3 text-xl'>5. जो अपनी सेहत से बहुत प्यार करता हो</li>
      </ul>

      </div>
    </div>
  </div>
{/* ul Card End */}

{/* button start */}
<a href="https://rzp.io/l/vaG2Fit" target="_blank"> <div style={{ backgroundImage: buttonGradientColor }} className=' bg-orange-900 m-5 mx-auto md:w-[60vw] rounded-md shadow-md  shadow-blue-700'>
  <h3 className="font-bold text-center mt-5 text-3xl p-8 text-yellow-500">REGISTER <small className='text-center text-white text-2xl'>FOR FREE DOCTER CUNSULTANCE</small></h3>
</div></a>
{/* button end*/}
</div>

      


      <div className=' bg-black p-5'>
        <h1 className='text-white text-3xl font-bold text-center p-3'>Meet Your Mentor</h1>

              <div className=' container mt-2 flex mx-auto md:w-[30vw] rounded-md shadow-md  shadow-blue-400'>
              <img 
                alt="The guitarist in the concert."
                src="bksir.png"
                  layout="responsive"
                  className='rounded-md '
                />
              </div>

              <div className=''>
                <h1 className='text-red-600 text-2xl text-center font-bold mt-3'>Dr. Bk Chaurasia</h1>
              </div>

              <div className='flex mx-auto md:w-[40vw]'>
                <small className='text-white text-xl font-bold mt-3 text-justify'>
                Dr. B. K. Chaurasia is a renowned Indian doctor , entrepreneur and social worker. He is the founder and chairman of the Arogya Bharat and B. K. Arogyam organizations, which are dedicated to providing affordable and quality healthcare to the nation.
                Dr. Chaurasia was born in a small village in Uttar Pradesh, India. He came from a humble background and had to struggle to get an education. However, he was determined to become a doctor and serve his community. After completing his medical degree, he worked in hospitals for some years. However, he was soon disillusioned with the state of healthcare in India. He felt that the public healthcare system was inadequate and that the people were not getting the right care they needed.
                In 2001, Dr. Chaurasia founded the B. K. Arogyam organization. B. K. Arogyam is a research and development organization that works to develop new and affordable healthcare medicine and technologies. It has developed a number of innovative ayurveda base products, service, alternative of fast food, alcohol, cigarette etc. B. K. Arogyam also provides training to health advicers and helps them to set up their own clinics.
                </small>
              </div>

              {/* button start */}
              <a href="https://rzp.io/l/vaG2Fit" target="_blank"><div style={{ backgroundImage: buttonGradientColor }} className=' bg-orange-900 m-5 mx-auto md:w-[55vw] rounded-md shadow-md  shadow-blue-700'>
                <h3 className="font-bold text-center mt-5 text-2xl p-5 text-yellow-500">REGISTER <small className='text-center text-white text-2xl'>FOR FREE DOCTER CUNSULTANCE</small></h3>
              </div></a>
            {/* button end*/}
      </div>


      <p className="font-bold text-center mt-5 text-4xl p-1 text-red-600 mx-auto px-1 md:px-12">See What Our Patient Have To Say About Us</p>
{/* button end*/}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:m-10 gap-2">
      <article class="overflow-hidde">
        <iframe className='max-w-sm p-2 bg-slate-400 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700' width="560" height="315" src="https://www.youtube.com/embed/watch?v=wAJ3csDqjPU&list=PLWALk8QK4syIEhWHk94rUgFQlBSCtDwMC&index=4" frameborder="0" allowfullscreen></iframe>
      </article>

      <article class="overflow-hidde">
        <iframe className='max-w-sm p-2 bg-slate-400 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700' width="560" height="315" src="https://www.youtube.com/embed/watch?v=TMTJFBlzHF8&list=PLWALk8QK4syIEhWHk94rUgFQlBSCtDwMC&index=18" frameborder="0" allowfullscreen></iframe>
      </article>

        <article class="overflow-hidde">
          <iframe className='max-w-sm p-2 bg-slate-400 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700' width="560" height="315" src="https://www.youtube.com/embed/watch?v=n9n_Ct7f_iU&list=PLWALk8QK4syIEhWHk94rUgFQlBSCtDwMC&index=3" frameborder="0" allowfullscreen></iframe>
        </article>

        <article class="overflow-hidde">
          <iframe className='max-w-sm bg-slate-400 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700' width="560" height="315" src="https://www.youtube.com/embed/watch?v=wAJ3csDqjPU&list=PLWALk8QK4syIEhWHk94rUgFQlBSCtDwMC&index=4" frameborder="0" allowfullscreen></iframe>
        </article>

        <article class="overflow-hidde">
          <iframe className='max-w-sm p-2 bg-slate-400 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700' width="560" height="315" src="https://www.youtube.com/embed/watch?v=TMTJFBlzHF8&list=PLWALk8QK4syIEhWHk94rUgFQlBSCtDwMC&index=18" frameborder="0" allowfullscreen></iframe>
        </article>
      
        <article class="overflow-hidde">
          <iframe className='max-w-sm p-2 bg-slate-400 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700' width="560" height="315" src="https://www.youtube.com/embed/watch?v=n9n_Ct7f_iU&list=PLWALk8QK4syIEhWHk94rUgFQlBSCtDwMC&index=3" frameborder="0" allowfullscreen></iframe>
        </article>
      </div>

      <a href="https://rzp.io/l/vaG2Fit" target="_blank"><div style={{ backgroundImage: buttonGradientColor }} className=' bg-orange-900 m-5 mx-auto md:w-[75vw] rounded-md shadow-md  shadow-blue-700'>
          <h3 className="font-bold text-center mt-5 text-3xl p-2 text-white">I AM READY TO <small className='text-blue-500'>JOIN NOW</small> FOR BOOST MY HELTH<p className='text-center text-yellow-400'>SECURE YOUR HELTH HELP OF AYURVEDA</p></h3>
    </div></a>

    <div>
      <h3 className="font-bold text-center mt-5 text-5xl p-2 text-black">Frequently Asked Questions</h3>
    </div>

{/* acordian start*/}
<div className='mx-auto md:w-[75vw] mt-10' id="accordion-collapse" data-accordion="collapse">
  <h2 id="accordion-collapse-heading-1">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
      <span>What is Flowbite?</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
    <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
      <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
    </div>
  </div>
  <h2 id="accordion-collapse-heading-2">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
      <span>Is there a Figma file available?</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
    <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
      <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
      <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
    </div>
  </div>
  <h2 id="accordion-collapse-heading-3">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
      <span>What are the differences between Flowbite and Tailwind UI?</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>

  <h2 id="accordion-collapse-heading-3">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
      <span>What are the differences between Flowbite and Tailwind UI?</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>

  <h2 id="accordion-collapse-heading-3">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
      <span>What are the differences between Flowbite and Tailwind UI?</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>

  <h2 id="accordion-collapse-heading-3">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
      <span>What are the differences between Flowbite and Tailwind UI?</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
    <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
      <p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
      <p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
      <ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
        <li><a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
        <li><a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
      </ul>
    </div>
  </div>
</div>
{/* acordian start*/}

<a href="https://rzp.io/l/vaG2Fit" target="_blank"><div style={{ backgroundImage: buttonGradientColor }} className=' bg-orange-900 m-5 mx-auto md:w-[75vw] rounded-md shadow-md  shadow-blue-700'>
  <h3 className="font-bold text-center mt-5 text-3xl p-2 text-white">I AM READY TO <small className='text-blue-500'>JOIN NOW</small> FOR BOOST MY HELTH<p className='text-center text-yellow-400'>SECURE YOUR HELTH HELP OF AYURVEDA</p></h3>
</div></a>

<div className='p-10 mb-20'>
  <h3 className="text-black text-center">B.K. Arogyam is a purely Ayurveda based healthcare and research center. It is successfully operating since 1979 and spreading awareness for Ayurveda in all over the world. It is been able to cure patients and give them relieve from their deadly conditions from last 41 long years. We have researched and found medicines and treatments to cure.<br/><br/>
  Ayurveda is accountable for driving the Indian healthcare industry forward with a valued inheritance culture. With B.K.Arogyam, your ailment will not only be treated but you will be provided with an enhanced healthier lifestyle with the exceptional rejuvenation packages.</h3>
    <p className='text-center mt-5 text-black'>Copyright © 2022 BK Arogyam. All Rights Reserved</p>
    <p className='text-center mt-5 text-black'>Privacy Policy | Terms | Contact Disclaimer</p>

</div>

<div className="z-50 fixed bottom-0 right-0 left-0 bg-black font-bold text-center text-white p-2">
  <a href="https://rzp.io/l/vaG2Fit" target="_blank"><div style={{ backgroundImage: buttonGradientColor }} className=' bg-red-800 mx-auto md:w-60 ms:w-10 rounded-md shadow-md  shadow-blue-700'>
      <h3 className="font-bold text-center text-2xl p-1 text-white">REGISTER NOW</h3>
  </div></a>
</div>

      </main>
    </AnimatePresence>
  )
}
