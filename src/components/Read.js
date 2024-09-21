import React, { useState, useRef, useEffect } from "react";


const ReadMore = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const contentRef = useRef(null);

    const handleToggle = () => {
        setIsExpanded(prevState => !prevState);
    };

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.style.maxHeight = isExpanded ? contentRef.current.scrollHeight + "px" : "0px";
        }
    }, [isExpanded]);

    return (
        <div className="relative p-10">
            <h1 className="font-semibold text-left text-lg mt-3">
                FNP: India Best Gift Portal. Send Cakes, Gifts & Flowers Online
            </h1>
            <p className="text-left">
                FNP(Ferns N Petals) is India's top gifting brand that helps you celebrate special moments by delivering fabulous gifts to your loved ones. You can find thoughtful gifts for all special days like <span className="font-semibold">Birthdays, Anniversaries, Valentine's day</span> and festivals like <span className="font-semibold">Rakshabandhan (Rakhi), Diwali, and Christmas</span>, etc. Our range of gifts includes flower bouquets and yummy cakes which can be delivered to all major cities in under 2 hours. We can also deliver <span className="font-semibold">personalized gifts, potted plants, chocolates, gift hampers, digital gifts, etc.</span>
            </p>
            <div 
                ref={contentRef}
                className={`read-more-content ${isExpanded ? 'expanded' : ''}`}
            >
                <p className="text-left">
                    Here you can add more detailed content about the gift portal. 
                    This could include information about various types of gifts, 
                    special offers, delivery options, and more. The content expands 
                    when you click on the "Read More" button, providing users with 
                    additional details.
                </p>
            </div>
            <button 
                onClick={handleToggle}
                className="read-more-button mt-3 text-blue-500 relative bottom-9 left-170  lg-xl:left-96 lg-xl:bottom-4"
            >
                {isExpanded ? 'Read Less' : 'Read More...'}
            </button>
        </div>
    );
};

export default ReadMore;
