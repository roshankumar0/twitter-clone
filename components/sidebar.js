import React, { useState, useRef, useEffect } from 'react';
import { BsTwitter } from 'react-icons/bs';
import { BiHomeCircle, BiHash, BiMessageRounded, BiBookmark, BiUser } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { CiViewList, CiCircleMore } from 'react-icons/ci';
import { TiSocialTwitterCircular } from 'react-icons/ti';
import Link from 'next/link';
import UserProfile from './UserProfile';
import More from './More';

const Sidebar = () => {
    const [sidebar] = useState([
        { text: 'Home', component: <BiHomeCircle />, url: '/' },
        { text: 'Explore', component: <BiHash />, url: '/explore' },
        { text: 'Notification', component: <IoMdNotificationsOutline />, url: '/notification' },
        { text: 'Messages', component: <BiMessageRounded />, url: '/message' },
        { text: 'Lists', component: <CiViewList />, url: '/lists' },
        { text: 'Bookmarks', component: <BiBookmark />, url: '/Bookmarks' },
        { text: 'Twitter Blue', component: <TiSocialTwitterCircular />, url: '/twitterblue' },
        { text: 'Profile', component: <BiUser />, url: '/profile' },
        { text: 'More', component: <CiCircleMore />, url: '' },
    ]);
    const [more, setMore] = useState(false);
    const sidebarRef = useRef(null);
    const [activeOption, setActiveOption] = useState(0);

    const handleOptionClick = (index) => {
        setActiveOption(index);
    };

    const handleMore = () => {
        setMore(!more);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setMore(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="hidden lg:block" ref={sidebarRef}>
            <div className="w-[275px] flex flex-col justify-start border-r-2 overflow-y-scroll h-[100vh]">
                <div className="block">
                    <Link href="/home">
                        <div className="px-[12px]">
                            <BsTwitter className="h-[46px] twitter-color hover rounded-full w-[46px] p-[10px]" />
                        </div>
                    </Link>
                </div>
                <ul>
                    {sidebar.map((sidenav, index) => (
                        <Link href={sidenav.url} key={index}>
                            <li
                                className={`flex items-center text-center ${activeOption === index ? 'font-bold' : ''
                                    }`}
                                onClick={() => handleOptionClick(index)}
                            >
                                <div className="flex items-center px-[20px] hover hover:rounded-full h-[56px]">
                                    <span className="w-[25.5px] h-[25.5px]">
                                        {React.cloneElement(sidenav.component, { size: 30 })}
                                    </span>
                                    <span className="text-[20px] ml-[16px]">{sidenav.text}</span>
                                </div>
                            </li>
                        </Link>
                    ))}
                </ul>
                <button onClick={handleMore}>
                    {sidebar[activeOption].url === '' && <More />}
                    {more && <More />}
                </button>
                <button
                    className="twitter-bg-color w-[90%] text-[17px] font-bold my-[16px] text-white rounded-full h-[56px] min-h-[52px]"
                    onClick={handleMore}
                >
                    Tweet
                </button>
                <UserProfile />
            </div>
        </div>
    );
};

export default Sidebar;
