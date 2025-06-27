import React, { useState } from 'react';
import './ourStory.css';
import self from '../Our Story/self.jpeg';
import { FcAbout } from "react-icons/fc";

function OurStory() {
    const [hide, setHide] = useState(null)
    const data = [
        {
            title: "What documents are required for international travel?",
            tag: (
                <>
                    For international travel, you'll typically need:
                    <br />• Valid passport (with at least 6 months validity)
                    <br />• Visa (if required by destination country)
                    <br />• Travel insurance documents
                    <br />• Flight tickets and accommodation confirmations
                    <br />• Always check requirements 72 hours before departure.
                </>
            ),
        },
        {
            title: "How can I book a tour with Flying Feet Holidays?",
            tag: (
                <>
                    We offer a diverse range of tours, including cultural, adventure, wildlife, and customized tours. Explore our website to discover the perfect itinerary that suits your travel preferences.
                </>
            ),
        },
        {
            title: "Can I modify my booking after confirmation?",
            tag: (
                <>
                    Modifications are possible depending on:

                   <br /> Service provider's policies
                   <br /> Time remaining before departure
                   <br /> Availability of alternative options
                   <br /> Modification fees may apply. Contact our support team for immediate assistance with changes.
                     <br />  For international travel, you'll typically need:
                </>
            ),
        },  {
            title: "What types of tours does Mother India Tour Travels offer?",
            tag: (
                <>
                  We offer a diverse range of tours, including cultural, adventure, wildlife, and customized tours. Explore our website to discover the perfect itinerary that suits your travel preferences.
                </>
            ),
        },
          {
            title: "What is the cancellation policy for Mother India Tour Travels?",
            tag: (
                <>
                 Our cancellation policy varies depending on the type of tour and the timing of the cancellation. Please refer to our terms and conditions or contact our customer service for specific details on cancellations and refunds
                </>
            ),
        },  {
            title: "How do I know if my booking is confirmed?",
            tag: (
                <>
                 Once you complete the booking process, you will receive a confirmation email with all the details of your reservation. Please review this information carefully, and contact us if you have any questions or concerns.
                </>
            ),
        },
    ];

    const handleClick = (index) => {
        setHide(prevIndex => (prevIndex === index ? null : index));
    }

    return (
        <>
        <div className="title-head">
            <h1>
            <FcAbout />  Travel Help Center
             </h1>
        </div>
            <div className="boxes-div">
                {data.map((items, index) => {
                    return (
                        <>
                            <div className="toglle" key={index}>
                                <div className="item-flec">
                                    <h1 className='head-title'> {items.title} </h1>
                                    <button className='toggle-btn' onClick={() => handleClick(index)}>
                                        {hide === index ? "-" : "+"}
                                    </button>
                                </div>
                                {hide === index && (
                                    <h4 className="faq-content">
                                        {items.tag}
                                    </h4>
                                )}
                            </div>
                        </>
                    )
                })}
            </div>

        </>
    );
}

export default OurStory;
