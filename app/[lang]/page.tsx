import { title, subtitle } from "@/components/primitives";
import { useLanguage } from '@/components/language-context'

export default async function Home() {
  const { dictionary } = useLanguage();
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="frontpage-video">
        {/* <img src="/_static/front-page-bg.jpeg" alt="" /> */}
        <video width="100%" loop autoPlay muted>
            <source src="/_static/bg-frontpage.mp4" type="video/mp4"/>
        </video>
      </div>
      <div className="inline-block text-center justify-center">
        
        <h1 className={title()}>{dictionary["frontpage_main_text1"]}&nbsp;</h1>
        <h1 className={`${title()} colored-text`}>{dictionary["frontpage_main_text2"]}&nbsp;</h1>
        <br />
        <h1 className={`${title()}`}>
        {dictionary["frontpage_main_text3"]}
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </h2>
      </div>

      <div className="flex gap-3" />
    </section>
  );
}






