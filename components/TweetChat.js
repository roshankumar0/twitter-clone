import React, { useState } from 'react';
import UserPost from './UserPost';
import Image from 'next/image';

import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { Tweet } from '../store/cartSlice';

const TweetChat = () => {
  const [tweetText, setTweetText] = useState("");

  const dispatch = useDispatch();

  const { userProfile } = useSelector((state) => state.names);

  const handleTweet = () => {
    dispatch(Tweet(tweetText));
    setTweetText("");
  };

  return (
    <div className='px-[16px] py-[4px] mt-[140px] md:mt-0 flex '>
      <div className='pt-[4px] mr-[12px] flex flex-col'>
        <div className='w-[48px] mr-[12px]'>
          <Image width={48}
            height={48}
            loading="lazy" className=' mr-[12px] object-cover h-[48px] w-[48px] rounded-full cursor-pointer ' src={`${userProfile}`} alt="logo profile" />
        </div>
        <div></div>
      </div>
      <div className='basis-[100%] pt-1'>
        <div className='flex'>
          <div className='flex flex-col flex-1'>
            <div className='flex flex-col'>
              <input type='text' className='flex-1 outline-none py-[12px] placeholder-[#536471] text-[20px] ' placeholder='What is happening?!' value={tweetText} onChange={(e) => setTweetText(e.target.value)} />
            </div>
          </div>
        </div>
        <div className='justify-between flex items-center'>
          <div className=''> <UserPost /></div>
          <div>
            <button onClick={handleTweet} className='bg-[#1D9BF0] px-[16px] py-[8px] cursor-pointer rounded-full ml-[12px] opacity-[0.5] text-[15px] font-bold text-white'>
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetChat;
