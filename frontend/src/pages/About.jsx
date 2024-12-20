import { assets } from '../assets/assets'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'会社'} text2={'概要'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[500px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4'>
          <p>私たちは、日常の生活をもっと便利に、もっと快適に、そして激動的な体験を提供することを目指したオンラインECサイトです。我々のミッションは、あらゆるカテゴリーの商品をわかりやすく提供し、買い物の気足ちよさを私たちのサービスの根本にすえています。自然と環境に配慮したプラクティスや、「実用性」と「デザイン」を両立させた商品を総合的に精選しており、日々の生活に新しい価値を増しています。さらに、送料サービスの完善化や快速な配送を通じて、購入者の情報を安全に保護しながら、無駄を削減した素旧ですむ買い物体験を実現します。</p>

          <p>私たちは、シンプルなデザインとうわさな用途性を共有するために、グローバルな商品の改良に尽力し、商品ラインナップを新しくしています。総合統解能力の高いデジタルツールも開発し、便利性の高いオンラインショッピングプラットフォームを構築しています。今後も、これまでの成果を基に、新たな挑戦と成長を目指してまいります。</p>

          <b className='text-gray-800'>Our Vision</b>
          <p>私たちのビジョンは、「唯一無二の商品を通じて、日常に幸せを」です。商品を提供するために、たゆたう情報を揃え、無駄を低減し、全てのプロセスを済向化しています。近年は、デジタル化により送料を整備し、文化と環境をプロモートしながら、すべての買い物体験を最高化することを重要視しています。</p>
        </div>
      </div>


      <div>
        <div>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
        </div>

        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-8 py-8 sm:py-20 flex-flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>
          <div className='border px-10 md:px-8 py-8 sm:py-20 flex-flex-col gap-5'>
            <b>Convenience:</b>
            <p>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
          </div>
          <div className='border px-10 md:px-8 py-8 sm:py-20 flex-flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
          </div>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About