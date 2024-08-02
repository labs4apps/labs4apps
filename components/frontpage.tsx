"use client";

import { useState } from "react";
import {subtitle, title} from "@/components/primitives";

import { useLanguage } from '@/components/language-context'

export const FrontPage = () => {
    const [count, setCount] = useState(0);
    const { dictionary } = useLanguage();
    return (
        <>
        <section className="flex flex-col items-center justify-center gap-4">
            <div className="frontpage-video">
                {/* <img src="/_static/front-page-bg.jpeg" alt="" /> */}
                <video width="100%" loop autoPlay muted>
                    <source src="/_static/bg-frontpage.mp4" type="video/mp4"/>
                </video>
            </div>
            <div className="frontpage-video-text pr-20">
                Embrace the Future of Technology with Our Innovative IT Solutions.
            </div>
            <div className="inline-block text-center justify-center mx-20 mt-20">

                <h1 className={title()}>{dictionary["frontpage_main_text1"]}&nbsp;</h1>
                <h1 className={`${title()} colored-text`}>{dictionary["frontpage_main_text2"]}&nbsp;</h1>
                <br/>
                <h1 className={`${title()}`}>
                    {dictionary["frontpage_main_text3"]}
                </h1>
                <h2 className={subtitle({class: "mt-4"})}>
                    {dictionary["frontpage_main_text4"]}
                </h2>
            </div>

            <div className="flex gap-3"/>
        </section>
        <section className="flex flex-col items-center justify-center gap-4 mt-20">
            <h1 className={title()}>{dictionary["frontpage_section2-text1"]}</h1>
        </section>
        </>



    );
};
